---
name: update-component
description: Update an existing component from a design reference and text description for a specific theme, defaulting to CSS-only changes unless markup changes are explicitly requested.
---

# Update Component

Use this skill when the component already exists and the task is to align it with new visual direction from a design reference plus text instructions.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked or required input is missing, ask and wait.

## Trigger

Use this skill when the user asks in patterns like:

- `Update the <component> from this Figma node (tv2Oj)`
- `Adjust existing <component> to match this new design`
- `Refine <component> styling based on this spec and notes`

## Required Inputs

Collect these before coding:

1. Existing component name/path to update
2. Design reference (Figma node link or explicit visual/text specification)
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
7. Preserve or improve accessibility semantics while updating visuals.
8. Prefer native semantic elements over ARIA retrofits; use ARIA only when native semantics are insufficient.
9. Preserve existing BEM contract; add or adjust classes using BEM conventions only.

## Workflow (Execute In Order)

1. Parse update scope from design reference + text description.
2. Extract exact visual/behavior deltas from the provided reference.
3. Confirm the provided theme as the canonical source style.
4. Locate existing component files in `assets/components/<component-name>/`.
5. Update CSS only to match requested visual changes:
   - Layout/spacing
   - Typography
   - Colors and effects
   - Responsive behavior
6. Keep selectors scoped to the component and avoid global leakage.
7. Run accessibility regression checks for the updated component:
   - semantic structure and labels remain valid,
   - keyboard access/focus behavior still works,
   - contrast remains WCAG AA compliant for text and interactive UI.
8. Run BEM consistency checks for the updated component:
   - block/element/modifier naming remains consistent,
   - no orphan element classes without their block context,
   - no cross-component selector coupling.
9. Validate in the specified source theme, then smoke-test remaining themes for regressions.
10. Report:
   - What changed
   - Files changed
   - Assumptions
   - Remaining deltas (if exact parity is blocked)

## Acceptance Criteria

1. Existing component structure remains intact unless user explicitly requested markup changes.
2. Visual changes match the provided reference and text description for the specified theme.
3. No global CSS leakage.
4. Theme switcher behavior remains intact.
5. Other themes still render without obvious regressions.
6. No accessibility regressions introduced in semantics, keyboard flow, or contrast.
7. Updated selectors/classes follow the component's BEM structure.
