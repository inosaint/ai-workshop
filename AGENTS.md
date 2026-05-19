# Agent Instructions

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

### Adding a new language

Always use `add-locale` — do not manually edit `astro.config.mjs` or `BetaTranslationBanner.astro` for new locales:

```
bun run add-locale -- --lang pt-br --bcp47 pt-BR --label "Português (Brasil)"
```

Only use `--bcp47` when the BCP-47 tag differs from the locale path key.

### Re-translating pages

```
bun run translate -- --lang <code>
bun run translate -- --lang <code> --force      # ignore hash cache
bun run translate -- --lang <code> --section <dir>
```

### Reviewing translation quality

```
bun run review-translations -- --lang <code>
bun run review-translations -- --lang <code> --output report.md
```

The review agent scores each page on accuracy, fluency, preservation, and formatting (1–5) and flags specific lines for human correction.

### Locale key rules

Starlight distinguishes two keys — always use the right one in the right place:

| Context | Format | Example |
|---|---|---|
| Locale path (URL, folder name, `locales:` key) | lowercase | `zh-cn`, `pt-br` |
| BCP-47 tag (`lang:` field, sidebar `translations: {}`) | cased | `zh-CN`, `pt-BR` |

## Build & Dev

```
bun run dev      # local dev server at localhost:4321
bun run build    # production build into dist/
bun run preview  # preview production build locally
```

Always run `bun run build` after adding a locale to confirm zero build errors before committing.

## SEO / AEO / GEO

- Do not add generic `HowTo` or `FAQPage` JSON-LD unless it includes the complete required content (for example, HowTo steps or FAQ questions and answers). Page-specific FAQ schema can live in frontmatter when the page actually contains those answers.
- When updating `scripts/build-llms-full.mjs`, preserve fenced code blocks exactly. Only strip MDX/JSX wrappers outside code fences so the AI crawler snapshot does not corrupt examples.
