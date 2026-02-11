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
- Keep `assets/script.js` as the shared entry point for non-theme component scripts.
- For every new component, create a dedicated folder under `assets/components/<component-name>/`.
- Place component-specific files in that folder:
  - `<component-name>.css`
  - `<component-name>.js`
- Keep component CSS/JS scoped to that component.
- Load component CSS by importing it from `assets/styles.css` (never with page-level `<link>` tags).
- Load component JS through `assets/script.js` (never with page-level `<script>` tags for component files).

Never fork per-region HTML templates. Implement regional differences through tokens.

## Hard Rules

- Use tokens only in component/layout CSS (`var(--...)`).
- For component builds driven by a provided Figma link or screenshot, reuse existing tokens from `assets/tokens.css` and do not create new tokens by default.
- Only add new tokens when the user explicitly asks for token architecture changes.
- Do not add new component logic or styling directly into shared `assets/styles.css` beyond cross-component/global layout concerns.
- In `assets/styles.css`, only add component `@import` statements and shared/global rules (do not inline component styles there).
- In `assets/script.js`, register/import component scripts; keep page HTML script tags limited to shared entry scripts.
- Keep theme identifiers synchronized across:
  - CSS selectors in `assets/tokens.css`
  - `THEMES` in `assets/theme.js`
  - option values in the theme picker
- Avoid page-specific inline styles/scripts.
- Keep semantic markup stable across pages.

## Safe Change Workflow

1. Define the semantic need (not the raw style).
2. Select existing token(s) from `assets/tokens.css` that best match the need.
3. If the task is a Figma/screenshot component build and no exact token exists, use the closest semantic token and document the visual delta instead of creating a new token.
4. Only if explicitly requested by the user, add or adjust token(s) in `assets/tokens.css`.
5. If creating a new component, create `assets/components/<component-name>/` with `<component-name>.css` and `<component-name>.js`.
6. Import the new component stylesheet from `assets/styles.css` and keep component style rules inside the component CSS file.
7. Register the new component script from `assets/script.js` (create `assets/script.js` if missing) and load only `assets/script.js` from page HTML.
8. If adding theme/region:
   - Add region token override block in `assets/tokens.css`.
   - Add key in `assets/theme.js`.
9. Validate:
   - Theme selector renders and switches on all pages.
   - Theme persists via `localStorage` key `tv2-region-theme`.
   - No hardcoded region colors in component rules.
   - New component CSS is imported via `assets/styles.css` and component JS is loaded via `assets/script.js`.
   - No page-level component `<link>` or `<script>` tags were added.
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
