---
name: project-architect
description: Maintain and evolve tv2reg-designsystem as a shared multi-region, token-driven news design system. Use when adding pages, components, tokens, or themes; when aligning implementation with golden-path architecture; or when deciding what belongs in shared core vs regional extensions.
---

# Project Architect

Keep this repository aligned with the POC architecture while preserving the current static setup.

## Do This First

1. Confirm scope: shared core change, regional extension, or experiment.
2. Read `references/token-architecture.md` for token-layer boundaries.
3. Read `references/golden-path-workflow.md` for validation gates.
4. If region-specific, read `references/regional-extension-guide.md`.

## Current Repository Contract

- Keep one shared implementation for all regions.
- Keep pages static (`index.html`, `article.html`, `design-manual.html`).
- Keep `assets/tokens.css` as token source and `assets/styles.css` as token consumer.
- Keep `assets/theme.js` as the only runtime theme switch logic.

Never fork per-region HTML templates. Implement regional differences through tokens.

## Hard Rules

- Use tokens only in component/layout CSS (`var(--...)`).
- Add new reusable visual decisions as tokens first, then consume in styles.
- Keep theme identifiers synchronized across:
  - CSS selectors in `assets/tokens.css`
  - `THEMES` in `assets/theme.js`
  - option values in the theme picker
- Avoid page-specific inline styles/scripts.
- Keep semantic markup stable across pages.

## Safe Change Workflow

1. Define the semantic need (not the raw style).
2. Add or adjust token(s) in `assets/tokens.css`.
3. Apply token(s) in `assets/styles.css`.
4. If adding theme/region:
   - Add region token override block in `assets/tokens.css`.
   - Add key in `assets/theme.js`.
5. Validate:
   - Theme selector renders and switches on all pages.
   - Theme persists via `localStorage` key `tv2-region-theme`.
   - No hardcoded region colors in component rules.
   - Mobile and desktop render correctly.

## Migration Guidance From POC

Adopt these ideas incrementally, without breaking current pages:

- Introduce layered naming that can map to:
  - primitives (`md.ref.*`)
  - system semantics (`md.sys.*`)
  - editorial semantics (`news.sys.*`)
- Keep component semantics stable and move visual expression into tokens.
- Treat a canonical page (existing `article.html`) as a golden-path validation surface.

Do not import full POC complexity in one step. Prioritize backward-compatible token layering and validation discipline.
