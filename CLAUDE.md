# Claude Code Instructions

## Package Manager

Use `bun` instead of `npm` for all package installs and script runs:

- `bun install` instead of `npm install`
- `bun run build` instead of `npm run build`
- `bun run dev` instead of `npm run dev`
- `bun run translate` instead of `npm run translate`
- `bun run add-locale` instead of `npm run add-locale`
- `bun run review-translations` instead of `npm run review-translations`

Do not use `npm` at all in this project.

## Translation Workflow

The site supports multiple languages. Translated content lives in `src/content/docs/<lang>/`.

### Adding a new language

Use the `add-locale` script — it handles everything in one command:

```
bun run add-locale -- --lang pt-br --bcp47 pt-BR --label "Português (Brasil)"
```

This will:
1. Generate sidebar label + banner translations via Claude API
2. Patch `astro.config.mjs` (locale entry + sidebar translations)
3. Patch `src/components/BetaTranslationBanner.astro`
4. Translate all 9 pilot sections via `scripts/translate.mjs`

Note: `--bcp47` is only needed when the BCP-47 tag differs from the locale path (e.g. `pt-BR` vs `pt-br`).

### Re-translating changed pages

```
bun run translate -- --lang zh-cn           # all pilot sections
bun run translate -- --lang es --force      # force re-translate even if unchanged
bun run translate -- --lang zh-cn --section introduction  # one section only
```

### Reviewing translation quality

Use the `review-translations` agent script — it calls Claude to evaluate accuracy, fluency, preservation of code/proper nouns, and Markdown formatting:

```
bun run review-translations -- --lang zh-cn
bun run review-translations -- --lang es --section introduction
bun run review-translations -- --lang zh-cn --output report-zh-cn.md
```

Each page is scored 1–5 on four dimensions with specific issues flagged for human review.

### Locale config keys

Starlight uses two different locale identifiers — don't confuse them:
- **Locale path key** (lowercase, used in URLs and `src/content/docs/<key>/`): e.g. `zh-cn`, `pt-br`
- **BCP-47 language tag** (used in sidebar `translations: {}` objects and `lang:` field): e.g. `zh-CN`, `pt-BR`

## SEO / AEO / GEO

- Do not add generic `HowTo` or `FAQPage` JSON-LD unless it includes the complete required content (for example, HowTo steps or FAQ questions and answers). Page-specific FAQ schema can live in frontmatter when the page actually contains those answers.
- When updating `scripts/build-llms-full.mjs`, preserve fenced code blocks exactly. Only strip MDX/JSX wrappers outside code fences so the AI crawler snapshot does not corrupt examples.
