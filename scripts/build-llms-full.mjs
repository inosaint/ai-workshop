#!/usr/bin/env node
/**
 * Generates public/llms-full.txt — a single-file snapshot of the entire course
 * for AI crawlers (ChatGPT, Perplexity, Claude, etc.) to ingest in one pass.
 *
 * Usage:
 *   bun run build-llms-full
 *
 * Only includes English content (root locale). Translated pages are excluded
 * as machine-translated content shouldn't be indexed by AI crawlers yet.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS_ROOT = 'src/content/docs';
const OUTPUT = 'public/llms-full.txt';
const SITE_URL = 'https://howtoaicode.com';

// Section order mirrors the sidebar
const SECTION_ORDER = [
  'introduction',
  'quick-win',
  'github-setup',
  'install-claude-code',
  'choose-project',
  'building-with-claude',
  'testing-locally',
  'making-changes',
  'deploy-github-pages',
  'claude-tips',
  'claude-api',
  'analytics-posthog',
  'reference',
  'troubleshooting',
  'about',
  'optional',
];

function collectFiles(dir, results = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return results; }
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectFiles(full, results);
    else if (full.endsWith('.md') || full.endsWith('.mdx')) results.push(full);
  }
  return results;
}

function slugToUrl(filePath) {
  const rel = relative(DOCS_ROOT, filePath)
    .replace(/\/index\.(md|mdx)$/, '/')
    .replace(/\.(md|mdx)$/, '/');
  return `${SITE_URL}/${rel}`;
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { title: '', description: '', body: content };
  const fm = match[1];
  const title = (fm.match(/^title:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
  const description = (fm.match(/^description:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
  const body = content.slice(match[0].length).trim();
  return { title, description, body };
}

function stripMdx(body) {
  const codeBlocks = [];
  const placeholderPrefix = '@@CODE_BLOCK_';

  const withoutCode = body.replace(/```[\s\S]*?```/g, (match) => {
    const placeholder = `${placeholderPrefix}${codeBlocks.length}@@`;
    codeBlocks.push(match);
    return placeholder;
  });

  const cleaned = withoutCode
    .replace(/^import\s+.+$/gm, '')           // MDX imports
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '') // page interactivity
    .replace(/<\/?[A-Za-z][^>]*>/g, '')        // HTML/JSX wrappers
    .replace(/^\s*\{[^}]+\}\s*$/gm, '')        // standalone JSX expressions
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return cleaned.replace(
    new RegExp(`${placeholderPrefix}(\\d+)@@`, 'g'),
    (_, index) => codeBlocks[Number(index)] || ''
  );
}

// Gather all English-only files (skip locale subdirs)
const allFiles = [];
for (const section of SECTION_ORDER) {
  const dir = join(DOCS_ROOT, section);
  allFiles.push(...collectFiles(dir));
}

// Also catch any files not in SECTION_ORDER
const allDirs = readdirSync(DOCS_ROOT).filter(d => {
  const full = join(DOCS_ROOT, d);
  return statSync(full).isDirectory() && !['zh-cn', 'es', 'i18n'].includes(d);
});
for (const d of allDirs) {
  if (!SECTION_ORDER.includes(d)) {
    allFiles.push(...collectFiles(join(DOCS_ROOT, d)));
  }
}

const lines = [
  '# AI Workshop — Free AI Course: Build with Claude Code',
  '# Full content snapshot for AI crawlers',
  `# Generated: ${new Date().toISOString().slice(0, 10)}`,
  `# Source: ${SITE_URL}`,
  '',
  'This is a free, beginner-friendly course on building web projects with Claude Code.',
  'No coding experience required. Go from zero to a deployed website in ~3 hours.',
  '',
  '---',
  '',
];

for (const file of allFiles) {
  const content = readFileSync(file, 'utf8');
  const { title, description, body } = extractFrontmatter(content);
  const url = slugToUrl(file);

  lines.push(`## ${title}`);
  lines.push(`URL: ${url}`);
  if (description) lines.push(`> ${description}`);
  lines.push('');
  lines.push(stripMdx(body));
  lines.push('');
  lines.push('---');
  lines.push('');
}

writeFileSync(OUTPUT, lines.join('\n'));
console.log(`✅ Written ${OUTPUT} (${Math.round(lines.join('\n').length / 1024)} KB)`);
