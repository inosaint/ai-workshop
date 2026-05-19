#!/usr/bin/env node
/**
 * Translation script for howtoaicode.com
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... npm run translate -- --lang zh-CN --section setup
 *   ANTHROPIC_API_KEY=sk-... npm run translate -- --lang zh-CN   # all pilot sections
 *
 * Flags:
 *   --lang <locale>   Target language code (e.g. zh-CN). Required.
 *   --section <dir>   Only translate one subdirectory (e.g. setup, introduction).
 *   --force           Re-translate even if source file is unchanged.
 *   --dry-run         Print what would be translated without calling the API.
 */

import Anthropic from '@anthropic-ai/sdk';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const DOCS_ROOT = 'src/content/docs';
const MANIFEST_PATH = 'scripts/.translation-manifest.json';

// Pilot sections (in course order) — add more here later
const PILOT_SECTIONS = [
  'introduction',
  'quick-win',
  'github-setup',
  'install-claude-code',
  'choose-project',
  'building-with-claude',
  'testing-locally',
  'making-changes',
  'deploy-github-pages',
];

const LANGUAGE_NAMES = {
  'zh-CN': 'Simplified Chinese',
  'es': 'Spanish',
  'pt-BR': 'Brazilian Portuguese',
  'hi': 'Hindi',
};

// --- CLI args ---
const args = process.argv.slice(2);
const getArg = (name) => { const i = args.indexOf(`--${name}`); return i !== -1 ? args[i + 1] : null; };
const hasFlag = (name) => args.includes(`--${name}`);

const lang = getArg('lang');
const section = getArg('section');
const force = hasFlag('force');
const dryRun = hasFlag('dry-run');

if (!lang) { console.error('Error: --lang is required (e.g. --lang zh-CN)'); process.exit(1); }
if (!dryRun && !process.env.ANTHROPIC_API_KEY) { console.error('Error: ANTHROPIC_API_KEY is not set'); process.exit(1); }

// --- Helpers ---
function readdir(dir) {
  const results = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return results; }
  for (const entry of entries) {
    const full = join(dir, entry);
    try {
      if (statSync(full).isDirectory()) results.push(...readdir(full));
      else if (full.endsWith('.md') || full.endsWith('.mdx')) results.push(full);
    } catch {}
  }
  return results;
}

function md5(str) { return createHash('md5').update(str).digest('hex'); }

function outputPath(src) {
  return join(DOCS_ROOT, lang, relative(DOCS_ROOT, src));
}

function loadManifest() {
  if (!existsSync(MANIFEST_PATH)) return {};
  try { return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')); } catch { return {}; }
}

function saveManifest(m) {
  writeFileSync(MANIFEST_PATH, JSON.stringify(m, null, 2));
}

// --- Translation ---
async function translateFile(src, client, manifest) {
  const source = readFileSync(src, 'utf8');
  const hash = md5(source);
  const key = `${lang}:${src}`;
  const out = outputPath(src);

  if (!force && manifest[key] === hash && existsSync(out)) {
    console.log(`  ⏭  Unchanged: ${src}`);
    return manifest;
  }

  if (dryRun) {
    console.log(`  [dry-run] ${src}  →  ${out}`);
    return manifest;
  }

  console.log(`  🌐 Translating: ${src}`);

  const langName = LANGUAGE_NAMES[lang] || lang;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8096,
    system: `You are a professional technical translator. Translate this Markdown documentation from English to ${langName}.

Rules:
- Preserve all frontmatter keys exactly. Translate only the VALUES of "title" and "description".
- Do NOT translate: code blocks, inline code, HTML tags and attributes, URLs, file paths, command names, or proper nouns like "Claude Code", "GitHub", "PostHog", "Astro", "npm", "git".
- DO translate: prose, headings, list items, callout text, button labels.
- Keep all Markdown formatting (bold, italic, links, tables, lists) intact.
- Output ONLY the translated Markdown with no preamble or explanation.`,
    messages: [{ role: 'user', content: source }],
  });

  const translated = response.content[0].text;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, translated, 'utf8');

  manifest[key] = hash;
  saveManifest(manifest);
  console.log(`  ✅ ${out}`);
  return manifest;
}

// --- Main ---
async function main() {
  const sections = section ? [section] : PILOT_SECTIONS;
  const files = [];

  for (const s of sections) {
    const dir = join(DOCS_ROOT, s);
    if (!existsSync(dir)) { console.warn(`⚠️  Not found, skipping: ${dir}`); continue; }
    files.push(...readdir(dir));
  }

  if (files.length === 0) { console.log('No files to translate.'); return; }

  console.log(`\nTranslating ${files.length} file(s) to ${lang}${dryRun ? ' (dry run)' : ''}...\n`);

  const client = dryRun ? null : new Anthropic();
  let manifest = loadManifest();

  for (const file of files) {
    manifest = await translateFile(file, client, manifest);
  }

  console.log('\nDone.');
}

main().catch((err) => { console.error(err); process.exit(1); });
