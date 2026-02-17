---
name: update-component
description: Update an existing component from a new screenshot and text description for a specific theme, defaulting to CSS-only changes unless markup changes are explicitly requested.
---

# Update Component

Use this skill when the component already exists and the task is to align it with new visual direction from a screenshot plus text instructions.

## Trigger

Use this skill when the user asks in patterns like:

- `Update the <component> from this screenshot (tv2Oj)`
- `Adjust existing <component> to match this new design`
- `Refine <component> styling based on this screenshot and notes`

## Required Inputs

Collect these before coding:

1. Existing component name/path to update
2. Screenshot reference (attachment, local image, or embedded screenshot)
3. Text description of the requested changes
4. Source theme:
   - `tv2Oj`, `tv2Nord`, `tv2Syd`, `tv2Fyn`, `tv2East`, or `kosmopol`

If any of these are missing, ask before implementation.

## Hard Rules

1. Do not change markup by default.
2. Do not change component JS by default.
3. Update only the component CSS unless the user explicitly asks for markup/JS changes.
4. If markup changes are requested explicitly, keep them minimal and scoped to the existing component contract.
5. Use existing tokens first (`--base-*` primary, `--core-*` when needed); treat `--md-*`/`--news-*`/legacy aliases as compatibility-only.
6. No page-level hacks or per-theme hardcoded forks in markup.

## Workflow

1. Parse update scope from screenshot + text description.
2. Use [Read Screenshot skill](../read-screenshot/SKILL.md) to extract exact visual deltas.
3. Confirm the provided theme as the canonical source style.
4. Locate existing component files in `assets/components/<component-name>/`.
5. Update CSS only to match requested visual changes:
   - Layout/spacing
   - Typography
   - Colors and effects
   - Responsive behavior
6. Keep selectors scoped to the component and avoid global leakage.
7. Validate in the specified source theme, then smoke-test remaining themes for regressions.
8. Report:
   - What changed
   - Files changed
   - Assumptions
   - Remaining deltas (if exact parity is blocked)

## Acceptance Criteria

1. Existing component structure remains intact unless user explicitly requested markup changes.
2. Visual changes match screenshot and text description for the specified theme.
3. No global CSS leakage.
4. Theme switcher behavior remains intact.
5. Other themes still render without obvious regressions.
