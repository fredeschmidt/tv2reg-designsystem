---
name: build-component-figma
description: Source-specific build flow for new components from a Figma Dev Mode node link.
---

# Build Component Figma

This is the Figma-specific build flow.
It is called by `build-component` after routing.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked, stop and resolve the blocker first.
- If a step says ask/wait for user, ask and wait.
- Treat every Figma request as a white-label design.
- Build the component token-driven so all themes are controlled by tokens.
- Target exact visual match to the linked Figma node.
- Always center the component in its placement container.
- When placement target is `article.html`, always add lorem ipsum text before and after the component.
- Run a mandatory self-review before reporting completion.

## Trigger

Run this skill when `build-component` receives this request format:

```md
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Placement target: [article.html|index.html]
- Notes: [optional]
```

## Required Inputs

Collect before coding:

1. Task definition from user prompt.
2. Figma Dev Mode link with `node-id`.
3. Placement target:
   - `article.html` inside `<article>`, wrapped with `<div class="article-component">`, centered, and with lorem ipsum text before and after the component, or
   - `index.html` inside `<main>`, wrapped with `<div class="frontpage-component">`, centered.

If any required input is missing, ask before implementation.

## Workflow (Execute In Order)

1. Parse scope from the user request.
2. Extract design details from Figma (use Figma Dev Mode):
   - exact layout and sizing,
   - spacing and alignment,
   - typography,
   - colors/effects,
   - token mapping opportunities.
3. Treat extracted design as white-label:
   - implement using shared semantic tokens,
   - avoid theme-specific hardcoded values in component styles.
4. Confirm placement target if not already specified.
5. Convert prompt into implementation scope + acceptance checks.
   - state assumptions explicitly when unspecified.
6. Send confirmation summary using the exact template in [TEMPLATE.md](./TEMPLATE.md) and wait for user confirmation (`yes`).
7. Create branch with descriptive name, e.g. `build/<component-name>`.
8. Run [Architecture](../architecture/SKILL.md) and apply constraints.
9. Implement component from Figma within architecture constraints.
10. Validate:
   - linked Figma node visual match is exact (layout, spacing, typography, colors, effects),
   - token-driven white-label behavior across themes,
   - mobile + desktop behavior,
   - component is centered in its placement container,
   - if placement is `article.html`, lorem ipsum text exists before and after the component,
   - no global CSS/JS leakage.
11. Run self-review (mandatory):
   - re-check architecture compliance against [Architecture](../architecture/SKILL.md),
   - re-check visual fidelity against the linked Figma node,
   - re-check that theme differences are token-driven (no theme-specific component forks),
   - fix any mismatch before final report.
12. Report:
   - what was built,
   - files changed,
   - assumptions,
   - remaining deltas and exact reason,
   - remaining gaps/follow-ups.
