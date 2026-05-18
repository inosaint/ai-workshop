# Branch 3 — Codex track (`claude/codex-track`)

Part of the howtoaicode.com investment plan. This branch adds a parallel full-track for OpenAI Codex, mirroring the existing Claude Code "Build Your Project" flow. Merge order: best after `claude/seo-aeo-geo` so new Codex pages launch with `HowTo` schemas and rich snippets from day one.

## Why

The course is currently a single-tool guide built around Claude Code. Many new developers will arrive having heard of Codex first (OpenAI's coding agent). A parallel track:
- Gives Codex users a complete, first-class path through the same material — not a footnote
- Lets the site rank for `"codex tutorial"`, `"learn codex"`, `"codex vs claude code"` searches
- Makes the site useful regardless of which assistant a learner has picked

A lean comparison page would be cheaper, but the user has explicitly chosen the parallel-full-track depth (see master plan answers).

## Structure

Recommended sidebar restructure (from the master plan): convert from a single linear flow into two parallel tracks. Keep "Start Here" and "Reference" shared.

```
Start Here          (shared)
  Welcome
  Your First AI Creation

Claude Code Track
  Setup
    GitHub Account
    Install Claude Code
  Build Your Project
    Choose Your Project
    Building with Claude
    Testing Locally
    Making Changes
  Go Live
    Deploy to GitHub Pages

Codex Track          (new)
  Setup
    Install Codex
  Build Your Project
    Choose Your Project (Codex)
    Building with Codex
    Testing Locally (Codex)
    Making Changes (Codex)
  Go Live
    Deploy to GitHub Pages (Codex notes)

Level Up            (shared)
Reference           (shared)
About               (shared)
```

A landing page `codex/intro.md` ("Codex vs Claude Code — which should you use?") sits above both tracks so first-time visitors can choose.

## Changes

- [ ] `src/content/docs/codex/intro.md` — comparison + recommendation landing page
- [ ] `src/content/docs/codex/setup/install-codex.md`
- [ ] `src/content/docs/codex/build-your-project/choose-project.md`
- [ ] `src/content/docs/codex/build-your-project/building-with-codex.md`
- [ ] `src/content/docs/codex/build-your-project/testing-locally.md`
- [ ] `src/content/docs/codex/build-your-project/making-changes.md`
- [ ] `src/content/docs/codex/go-live/deploy-github-pages.md` — Codex-specific gotchas only; link to shared deploy content for the rest
- [ ] `astro.config.mjs` — sidebar restructured into the two-track layout above
- [ ] Cross-track callouts: at the top of each Claude Code page add a small "Doing this with Codex? → /codex/.../" callout, and the same on Codex pages pointing back

## Critical files

- `astro.config.mjs` — `starlight({ sidebar: [...] })` restructure
- `src/content/docs/codex/**/*.md` — all new
- Existing pages in `src/content/docs/build-your-project/`, `setup/`, etc. — small cross-link edits

## Open questions to resolve while writing

- Where do Codex CLI commands genuinely differ from Claude Code's? (Install command, project init flow, prompt-pattern differences.)
- Which pages can stay short and link out to the Claude Code version? (Probably `testing-locally` and `deploy-github-pages` — local test loop and GitHub Pages deploy don't depend on the assistant.)
- Pricing / free-tier note: spell out the trial-and-paid landscape since it differs from Claude Code's flow.

## Verify before merging

1. `npm run dev` — sidebar shows both tracks; every Codex page renders
2. `npm run build` — no broken links, every Codex page builds
3. `npx linkinator dist/` (or similar) — zero broken links across the whole site
4. Spot-check `https://howtoaicode.com/codex/intro/` after deploy — first impression is clear about which assistant a learner should pick

## Out of scope (handled elsewhere)

- JSON-LD schemas (`HowTo` etc.) → Branch 2 (will apply to Codex pages automatically once that branch merges)
- Translation of Codex pages → future per-language branches
