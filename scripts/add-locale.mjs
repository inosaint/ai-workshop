#!/usr/bin/env node
/**
 * Add a new locale to howtoaicode.com in one command.
 *
 * Usage:
 *   bun run add-locale -- --lang pt-br --bcp47 pt-BR --label "Português (Brasil)"
 *   bun run add-locale -- --lang hi --label "हिन्दी"
 *   bun run add-locale -- --lang pt-br --bcp47 pt-BR --label "Português (Brasil)" --dry-run
 *
 * Flags:
 *   --lang <code>     Locale path key, lowercase — used in URLs and folder names (e.g. pt-br). Required.
 *   --label <text>    Native language name shown in the language switcher. Required.
 *   --bcp47 <tag>     BCP-47 language tag if different from --lang (e.g. pt-BR). Defaults to --lang.
 *   --dry-run         Show what would change without writing files or running translate.
 *
 * What this does:
 *   1. Calls Claude to translate all sidebar labels and the beta-banner text.
 *   2. Patches astro.config.mjs — adds locale entry + all sidebar translations.
 *   3. Patches BetaTranslationBanner.astro — adds banner text entry.
 *   4. Runs `bun run translate -- --lang <code>` to translate all pilot-section pages.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

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
const hasFlag = (name) => args.includes(`--${name}`);

const lang = getArg('lang');
const label = getArg('label');
const bcp47 = getArg('bcp47') || lang;
const dryRun = hasFlag('dry-run');

if (!lang) { console.error('Error: --lang is required (e.g. --lang pt-br)'); process.exit(1); }
if (!label) { console.error('Error: --label is required (e.g. --label "Português (Brasil)")'); process.exit(1); }
if (!dryRun && !process.env.ANTHROPIC_API_KEY) { console.error('Error: ANTHROPIC_API_KEY is not set'); process.exit(1); }

// All strings that need translating for the sidebar and banner
const SIDEBAR_GROUPS = [
  'Start Here', 'Setup', 'Build Your Project', 'Go Live', 'Level Up',
  'Optional', 'Reference', 'About',
];
const SIDEBAR_ITEMS = [
  'Welcome', 'Your First AI Creation',
  'GitHub Account', 'Install Claude Code',
  'Choose Your Project', 'Building with Claude', 'Testing Locally', 'Making Changes',
  'Deploy to GitHub Pages',
  'Tips & Tricks', 'Claude API Basics', 'Add Analytics (PostHog)',
  'Using Cursor (Alternative)', 'Deploy to Netlify',
  'Cheat Sheet', 'Glossary', 'Troubleshooting',
  'Why This Guide', 'Version', 'Improve This Guide', 'Further Learning', 'Colophon', 'License',
];
const BANNER_STRINGS = {
  message: 'This page was machine-translated from English. Quality may vary.',
  cta: 'Report an issue',
};

async function generateTranslations(client) {
  console.log(`\n🔤 Generating ${label} translations for UI strings...`);

  const strings = {
    sidebar_groups: Object.fromEntries(SIDEBAR_GROUPS.map(s => [s, s])),
    sidebar_items: Object.fromEntries(SIDEBAR_ITEMS.map(s => [s, s])),
    banner_message: BANNER_STRINGS.message,
    banner_cta: BANNER_STRINGS.cta,
  };

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    system: `You are a professional UI translator. Translate the given English strings to ${label} (BCP-47: ${bcp47}).

Rules:
- Return ONLY valid JSON, no markdown, no explanation.
- Keep proper nouns unchanged: Claude Code, GitHub, PostHog, Netlify, Cursor.
- Use natural, concise UI phrasing — these are navigation labels, not prose.`,
    messages: [{
      role: 'user',
      content: `Translate these UI strings to ${label}:\n\n${JSON.stringify(strings, null, 2)}\n\nReturn the same JSON structure with translated values.`,
    }],
  });

  const text = response.content[0].text.trim();
  const jsonText = text.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '');
  return JSON.parse(jsonText);
}

function patchAstroConfig(translations) {
  let config = readFileSync('astro.config.mjs', 'utf8');

  // 1. Add to locales block (after the last existing locale entry)
  config = config.replace(
    /(\s+'zh-cn': \{ label: '简体中文', lang: 'zh-CN' \},)/,
    `$1\n        '${lang}': { label: '${label}', lang: '${bcp47}' },`
  );

  // 2. Add translations to every sidebar group and item that has a translations block
  const allLabels = {
    ...translations.sidebar_groups,
    ...translations.sidebar_items,
  };

  for (const [english, translated] of Object.entries(allLabels)) {
    // Match: translations: { 'zh-CN': '...', 'es': '...' } after this label
    // We find the translations object that immediately follows this label and append to it
    const escapedEnglish = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(
      `(label: '${escapedEnglish}'[^{]*translations: \\{[^}]*)\\}`,
      'g'
    );
    config = config.replace(pattern, `$1, '${bcp47}': '${translated.replace(/'/g, "\\'")}'}`);
  }

  return config;
}

function patchBanner(translations) {
  let banner = readFileSync('src/components/BetaTranslationBanner.astro', 'utf8');

  const newEntry = `  '${lang}': { message: '${translations.banner_message.replace(/'/g, "\\'")}', cta: '${translations.banner_cta.replace(/'/g, "\\'")}' },`;

  // Insert before the closing }; of the bannerText object
  banner = banner.replace(
    /(\n};)/,
    `\n${newEntry}$1`
  );

  return banner;
}

async function main() {
  console.log(`\nAdding locale: ${lang} (${label} / ${bcp47})${dryRun ? ' [dry run]' : ''}`);

  if (dryRun) {
    console.log('\n[dry-run] Would:');
    console.log(`  1. Generate translations for ${SIDEBAR_GROUPS.length + SIDEBAR_ITEMS.length + 2} strings`);
    console.log(`  2. Patch astro.config.mjs — add locale + sidebar translations`);
    console.log(`  3. Patch BetaTranslationBanner.astro — add banner text`);
    console.log(`  4. Run: bun run translate -- --lang ${lang}`);
    return;
  }

  const client = new Anthropic();
  const translations = await generateTranslations(client);

  // Patch astro.config.mjs
  const newConfig = patchAstroConfig(translations);
  writeFileSync('astro.config.mjs', newConfig);
  console.log('  ✅ astro.config.mjs updated');

  // Patch banner
  const newBanner = patchBanner(translations);
  writeFileSync('src/components/BetaTranslationBanner.astro', newBanner);
  console.log('  ✅ BetaTranslationBanner.astro updated');

  // Run translate script
  console.log(`\n  Running translation for ${lang}...\n`);
  execSync(`bun run translate -- --lang ${lang}`, { stdio: 'inherit' });

  console.log(`\n✅ Locale '${lang}' added. Next steps:`);
  console.log(`   • Test with: bun run dev → navigate to /${lang}/introduction/`);
  console.log(`   • Review quality: bun run review-translations -- --lang ${lang}`);
  console.log(`   • Commit: git add -A && git commit -m "Add ${label} translation"`);
}

main().catch((err) => { console.error(err); process.exit(1); });
