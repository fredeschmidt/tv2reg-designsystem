# Token Architecture

Use this model to evolve `assets/tokens.css` safely.

## Layer Intent

1. `--core-*`: immutable primitives and scales (size, breakpoints, type scale, motion, borders, opacity).
2. `--base-*`: semantic design API consumed by components (color, typography, spacing, layout, effects).
3. Theme overrides (`data-theme`): brand and regional overrides through base tokens.
4. Mode overrides (`data-mode`/`data-color-mode`): light/dark value swaps only.
5. Compatibility aliases in `assets/tokens.css`: legacy `--md-*`/`--news-*`/`--color-*` kept only for transition safety.

## Consumption Rules

- Components and layout consume `--base-*` tokens by default.
- Use `--core-*` only when no semantic `--base-*` token exists for the need.
- Do not place theme logic in components.
- Do not hardcode region branding in component selectors.

## Naming Rules

- Prefer semantic names over visual names.
- Good: `--base-color-text-muted`
- Bad: `--gray-600` in component-facing tokens

## Practical Mapping For This Repo

- Keep `--md-*`/`--news-*`/`--color-*` aliases operational in `assets/tokens.css` during migration.
- New component and layout CSS should use `--base-*` (and `--core-*` only when needed).
- Reduce legacy alias usage over time and remove once all consumers are migrated.
