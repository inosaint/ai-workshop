# Branch 1 — Domain fix (`claude/domain-fix`)

Part of the howtoaicode.com investment plan. This branch unblocks the site under the new domain. SEO/AEO/GEO work lives on `claude/seo-aeo-geo`; the Codex track on `claude/codex-track`; Chinese translation on `claude/add-multi-language-support-ls4KF`.

## Why

`howtoaicode.com` was pointed at GitHub Pages but the codebase was still configured for `https://inosaint.github.io/ai-workshop/`. The Astro `base: '/ai-workshop'` prefixed every internally-generated link with `/ai-workshop/`, so every link on the new root domain 404'd (e.g. the landing-page CTA sent visitors to `howtoaicode.com/ai-workshop/introduction/`). On top of that, the repo had no `public/CNAME`, so each GitHub Pages deploy would have wiped the custom-domain setting.

## Changes (already committed on this branch)

- [x] `public/CNAME` added containing `howtoaicode.com` — persists the custom domain across deploys
- [x] `astro.config.mjs`: `site` set to `https://howtoaicode.com`; `base: '/ai-workshop'` removed; hardcoded JSON-LD URLs updated
- [x] `src/pages/index.astro`: og:url, canonical, JSON-LD URL, and the `Start Free Course` CTA `href` all switched to `/`-relative or `howtoaicode.com`
- [x] `public/llms.txt`: ~20 URL references updated
- [x] `src/content/docs/**/*.md`: 25 internal `/ai-workshop/<slug>/` links replaced with `/<slug>/`
- [x] `src/components/posthog.astro`: dropped the obsolete `/ai-workshop/` key from `moduleMap` and simplified the landing-page match
- [x] `README.md`: updated local-dev URL and noted the custom domain

## Verify before merging

1. CI build succeeds (GitHub Actions deploy workflow)
2. After deploy, visit:
   - `https://howtoaicode.com/` — landing page loads
   - Click `Start Free Course` — lands on `/introduction/` (200, not 404)
   - Click each sidebar link — all 200
   - `https://inosaint.github.io/ai-workshop/` — GitHub auto-redirects to `howtoaicode.com`
3. After merge, confirm in repo Settings → Pages that the custom domain is still set and "Enforce HTTPS" is ticked.

## Out of scope (handled on later branches)

- `robots.txt`, `llms-full.txt`, additional JSON-LD schemas (`HowTo`, `FAQPage`, `BreadcrumbList`) → Branch 2
- Codex track → Branch 3
- Chinese translation + i18n config → Branch 4
