---
name: build-component
description: Entry skill for building new components from a user prompt and design source (Figma or screenshots).
---

# Build Component

This is the **first step** for any new component build.
Use it to translate the user request + design source into implementation.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked, stop and resolve the blocker first.
- If a step says ask/wait for user, ask and wait.

## Trigger

Use when the user asks things like:

- `Build the component from this Figma link: <FIGMA_DEV_MODE_LINK>`
- `Build the XX component from these screenshots (tv2Oj): <MOBILE> + <DESKTOP>`

For figma- and screenshot-driven component requests, this is the entry skill and must run first.

## Required Inputs

Collect before coding:

1. Task definition from user prompt.
2. Design source:
   - Preferred: Figma Dev Mode link with `node-id`.
   - Fallback: two screenshots (mobile + desktop).
3. Source theme for screenshot tasks:
   - `tv2Oj`, `tv2Nord`, `tv2Syd`, `tv2Fyn`, `tv2East`, or `kosmopol`.

If any required input is missing, ask before implementation.

## Workflow (Execute In Order)

1. Parse scope from the user request.
2. Extract design details from source:
   - Figma: extract exact sizes, spacing, typography, colors, tokens.
   - Screenshots: run [Read Screenshot](../read-screenshot/SKILL.md) first.
   - Screenshots: confirm source theme before implementation.
   - Screenshots: map colors/typography to existing tokens (avoid one-off hardcoded values).
3. Ask where to integrate component:
   - Article: `article.html` inside `<article>`, wrapped with `<div class="article-component">`.
   - Frontpage: `index.html` inside `<main>`, wrapped with `<div class="frontpage-component">`.
4. Convert prompt into implementation scope + acceptance checks.
   - State assumptions explicitly when unspecified.
5. Send confirmation message using `./TEMPLATE.md`.
6. Wait for user confirmation (`yes`).
7. Create branch with descriptive name, e.g. `build/<component-name>`.
8. Run [Architecture](../architecture/SKILL.md) and apply constraints.
9. Implement component from design source within architecture constraints.
10. Validate:
   - Mobile + desktop behavior.
   - No global CSS/JS leakage.
   - Screenshot-driven builds use tokenized color + typography.
11. Report:
   - What was built.
   - Files changed.
   - Assumptions.
   - Remaining visual deltas for 1:1 tasks and why.
   - Remaining gaps/follow-ups.
