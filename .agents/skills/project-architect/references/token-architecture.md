# Token Architecture

Use this model to evolve `assets/tokens.css` safely.

## Layer Intent

1. `md.ref.*`: immutable primitives (spacing, neutrals, typography, radius, motion).
2. `--region-*`: region brand definitions and optional subtle neutral tinting.
3. `md.sys.*`: generic UI semantics (primary, surface, on-surface, etc.).
4. `--expression-*`: layout/rhythm expression knobs (optional in current repo).
5. `news.sys.*`: editorial semantics (headline hierarchy, meta, urgency, article rhythm).
6. Mode overrides (`data-mode` or equivalent): light/dark value swaps only.

## Consumption Rules

- Components and layout consume `md.sys.*` and `news.sys.*`.
- Do not consume raw primitives directly in components.
- Do not place theme logic in components.
- Do not hardcode region branding in component selectors.

## Naming Rules

- Prefer semantic names over visual names.
- Good: `--news-sys-color-article-meta`
- Bad: `--gray-600` in component-facing tokens

## Practical Mapping For This Repo

- Keep existing `--color-*` tokens operational while introducing semantic aliases.
- Add aliases gradually to avoid large breakage.
- Migrate component rules to semantic aliases first; remove legacy aliases later.
