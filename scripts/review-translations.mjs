#!/usr/bin/env node
/**
 * Review translation quality for a given locale.
 *
 * Usage:
 *   bun run review-translations -- --lang zh-cn
 *   bun run review-translations -- --lang es --section introduction
 *   bun run review-translations -- --lang zh-cn --output report-zh-cn.md
 *
 * Flags:
 *   --lang <code>       Locale to review (e.g. zh-cn, es). Required.
 *   --section <dir>     Only review one section (e.g. introduction). Optional.
 *   --output <file>     Write report to a file instead of stdout. Optional.
 *
 * Each page is scored on:
 *   - Accuracy      — meaning preserved from the English original
 *   - Fluency       — natural phrasing in the target language
 *   - Preservation  — code blocks, URLs, proper nouns left untouched
 *   - Formatting    — Markdown structure intact
 *
 * The agent flags specific sentences that need human review.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

// Load .env
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const match = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

// --- CLI args ---
const args = process.argv.slice(2);
const getArg = (name) => { const i = args.indexOf(`--${name}`); return i !== -1 ? args[i + 1] : null; };

const lang = getArg('lang');
const section = getArg('section');
const outputFile = getArg('output');

if (!lang) { console.error('Error: --lang is required (e.g. --lang zh-cn)'); process.exit(1); }
if (!process.env.ANTHROPIC_API_KEY) { console.error('Error: ANTHROPIC_API_KEY is not set'); process.exit(1); }

const DOCS_ROOT = 'src/content/docs';

function findTranslatedFiles(langDir) {
  const results = [];
  let entries;
  try { entries = readdirSync(langDir); } catch { return results; }
  for (const entry of entries) {
    const full = join(langDir, entry);
    if (statSync(full).isDirectory()) results.push(...findTranslatedFiles(full));
    else if (full.endsWith('.md') || full.endsWith('.mdx')) results.push(full);
  }
  return results;
}

async function reviewFile(client, translatedPath, englishPath) {
  const translated = readFileSync(translatedPath, 'utf8');
  const english = readFileSync(englishPath, 'utf8');

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    system: `You are a professional translation quality reviewer. You will compare an English source document with its translation and provide a structured quality report.

Evaluate on these four dimensions (score 1–5 each):
- **Accuracy**: Does the translation preserve the full meaning of the original? Are any ideas omitted, added, or distorted?
- **Fluency**: Does it read naturally in the target language? Avoid awkward phrasing or overly literal translations.
- **Preservation**: Are code blocks, inline code, URLs, file paths, and proper nouns (Claude Code, GitHub, PostHog, Astro) left untouched?
- **Formatting**: Is all Markdown structure (headings, bold, italic, lists, tables, links) intact?

Return your response in this exact Markdown format:

## [page slug]

| Dimension | Score | Notes |
|---|---|---|
| Accuracy | X/5 | brief note |
| Fluency | X/5 | brief note |
| Preservation | X/5 | brief note |
| Formatting | X/5 | brief note |

**Overall**: X/5

**Issues to fix** (if any):
- Quote the problematic translation, then explain the issue and suggest a correction.

If there are no issues, write: _No issues found._`,
    messages: [{
      role: 'user',
      content: `Review this translation.\n\n**English source** (${relative(DOCS_ROOT, englishPath)}):\n\`\`\`\n${english}\n\`\`\`\n\n**Translation** (${relative(DOCS_ROOT, translatedPath)}):\n\`\`\`\n${translated}\n\`\`\``,
    }],
  });

  return response.content[0].text;
}

async function main() {
  const langDir = section
    ? join(DOCS_ROOT, lang, section)
    : join(DOCS_ROOT, lang);

  if (!existsSync(langDir)) {
    console.error(`Error: No translated content found at ${langDir}`);
    process.exit(1);
  }

  const files = findTranslatedFiles(langDir);
  if (files.length === 0) {
    console.error('No translated files found.');
    process.exit(1);
  }

  console.log(`\nReviewing ${files.length} file(s) for locale '${lang}'...\n`);

  const client = new Anthropic();
  const reportParts = [
    `# Translation Quality Report — ${lang}`,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
  ];

  let totalScore = 0;
  let scoreCount = 0;

  for (const translatedPath of files) {
    // Find matching English source
    const relativePath = relative(join(DOCS_ROOT, lang), translatedPath);
    const englishPath = join(DOCS_ROOT, relativePath);

    if (!existsSync(englishPath)) {
      console.warn(`  ⚠️  No English source for ${translatedPath}, skipping`);
      continue;
    }

    console.log(`  🔍 Reviewing: ${relative(DOCS_ROOT, translatedPath)}`);
    const review = await reviewFile(client, translatedPath, englishPath);
    reportParts.push(review, '');

    // Extract overall score for summary
    const scoreMatch = review.match(/\*\*Overall\*\*: (\d)/);
    if (scoreMatch) { totalScore += parseInt(scoreMatch[1]); scoreCount++; }
  }

  if (scoreCount > 0) {
    const avg = (totalScore / scoreCount).toFixed(1);
    reportParts.unshift(`> **Average score: ${avg}/5** across ${scoreCount} page(s)\n`);
  }

  const report = reportParts.join('\n');

  if (outputFile) {
    writeFileSync(outputFile, report);
    console.log(`\n✅ Report written to ${outputFile}`);
  } else {
    console.log('\n' + report);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
