---
name: project-architect
description: Apply architecture and token guardrails so implementation stays aligned with the shared multi-region design-system contract.
---

# Project Architect

Use this skill to enforce repository architecture constraints.
In component builds, this runs after design extraction and before implementation.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked or context is missing, resolve before moving on.
- When done, return to `build-component`.

## Trigger

Use when implementation needs architectural guardrails for:
- components,
- tokens,
- themes/regions,
- page integration constraints.

In the build flow: `build-component` -> `read-screenshot` (if needed) -> `project-architect` -> implementation.

## Do This First (Required)

1. Confirm scope type:
   - shared core change,
   - regional extension,
   - experiment.
2. Read `references/token-architecture.md`.
3. Read `references/golden-path-workflow.md`.
4. If region-specific work, read `references/regional-extension-guide.md`.

## Repository Contract (Must Keep)

1. One shared implementation for all regions.
2. Static pages remain: `index.html`, `article.html`, `design-manual.html`.
3. Token source is `assets/tokens.css`; token consumer is `assets/styles.css`.
4. Runtime theme switching only in `assets/theme.js`.
5. Shared JS entry point is `assets/script.js`.
6. Each new component gets its own folder:
   - `assets/components/<component-name>/`
   - `<component-name>.css`
   - `<component-name>.js` only if behavior requires JS.
7. Component CSS/JS must be scoped.
8. Component CSS loads via `assets/styles.css` imports only (no page-level component `<link>` tags).
9. Component JS loads via `assets/script.js` only (no page-level component `<script>` tags).
10. No per-region HTML forks; region differences come from tokens.

## Hard Rules

1. Use tokens in component/layout CSS (`var(--...)`).
2. For Figma/screenshot component builds, reuse existing tokens by default.
3. Do not add new tokens unless user explicitly asks for token architecture changes.
4. Keep `assets/styles.css` limited to imports + shared/global rules (no component rule blocks there).
5. Keep `assets/script.js` as shared registry/entry for component scripts.
6. Keep theme IDs synchronized across:
   - selectors in `assets/tokens.css`,
   - `THEMES` in `assets/theme.js`,
   - theme picker option values.
7. Avoid page-specific inline styles/scripts.
8. Keep semantic markup stable across pages.

## Safe Change Workflow (Execute In Order)

1. Define semantic need (not raw styling).
2. Choose existing token(s) in `assets/tokens.css`.
3. If no exact token for screenshot/Figma task:
   - use closest semantic token,
   - document visual delta,
   - do not create new token by default.
4. Only if user explicitly requests, add/adjust tokens in `assets/tokens.css`.
5. If creating component, add `assets/components/<component-name>/` and component files.
6. Import component CSS from `assets/styles.css`.
7. If component JS exists, register/import from `assets/script.js`.
8. If adding theme/region, update both:
   - token override block in `assets/tokens.css`,
   - key in `assets/theme.js`.
9. Validate:
   - theme selector works on all pages,
   - `localStorage` key `tv2-region-theme` persists,
   - no hardcoded region colors in component rules,
   - component CSS/JS loading follows contract,
   - mobile and desktop render correctly.

## Output Requirements

When done, report:

1. Constraints applied.
2. Architecture decisions made.
3. Files that must be touched (or avoided).
4. Any rule conflicts/blockers and how they were resolved.
