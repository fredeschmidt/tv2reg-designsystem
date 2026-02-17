---
name: build-component-screenshots
description: Source-specific build flow for new components from mobile and desktop screenshots.
---

# Build Component Screenshots

This is the screenshot-specific build flow.
It is called by `build-component` after routing.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked, stop and resolve the blocker first.
- If a step says ask/wait for user, ask and wait.
- Screenshot source is always one concrete theme.
- The source theme must be explicitly provided in the prompt.
- Build to match the concrete source theme, then rely on tokens to support other themes.
- Always center the component in its placement container.
- When placement target is `article.html`, always add lorem ipsum text before and after the component.

## Trigger

Run this skill when `build-component` receives this request format:

```md
Build a new [component-name] from screenshots.
- Mobile screenshot (1st): [link]
- Desktop screenshot (2nd): [link]
- Screenshot dimensions: [mobile WxH px, desktop WxH px]
- Viewport widths used (if known): [mobile px, desktop px]
- Source theme: [tv2Oj|tv2Nord|tv2Syd|tv2Fyn|tv2East|kosmopol]
- Placement target: [article.html|index.html]
- Notes: [optional]
```

## Required Inputs

Collect before coding:

1. Task definition from user prompt.
2. Two screenshots:
   - mobile,
   - desktop.
3. Source theme:
   - `tv2Oj`, `tv2Nord`, `tv2Syd`, `tv2Fyn`, `tv2East`, or `kosmopol`.
4. Placement target:
   - `article.html` inside `<article>`, wrapped with `<div class="article-component">`, centered, and with lorem ipsum text before and after the component, or
   - `index.html` inside `<main>`, wrapped with `<div class="frontpage-component">`, centered.

If any required input is missing, ask before implementation.

## Workflow (Execute In Order)

1. Parse scope from the user request.
2. Run [Read Screenshot](../read-screenshot/SKILL.md) first.
3. Convert prompt + extracted visual data into implementation scope + acceptance checks.
   - state assumptions explicitly when unspecified.
4. Implement concrete-theme mapping:
   - match screenshots to the provided source theme exactly,
   - derive other theme behavior from existing tokens (no per-theme component forks).
5. Send confirmation summary using the exact template in [TEMPLATE.md](./TEMPLATE.md) and wait for user confirmation (`yes`).
6. Create branch with descriptive name, e.g. `build/<component-name>`.
7. Run [Architecture](../architecture/SKILL.md) and apply constraints.
8. Implement component from screenshot extraction within architecture constraints.
9. Validate:
   - mobile + desktop behavior,
   - exact match to the provided source theme screenshots,
   - other themes resolve through tokens,
   - component is centered in its placement container,
   - if placement is `article.html`, lorem ipsum text exists before and after the component,
   - no global CSS/JS leakage,
   - tokenized color + typography mapping.
10. Report:
   - what was built,
   - files changed,
   - assumptions,
   - remaining visual deltas and exact reason,
   - remaining gaps/follow-ups.
