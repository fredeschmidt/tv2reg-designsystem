---
name: build-task
description: Build components directly from the user prompt (for example "Build the textbox component in this Figma link"), using a Figma Dev Mode link with node-id or a screenshot as design input.
---

# Build Task

Execute implementation work where the user prompt is the task definition, using provided design context.

#### Core Principles

1. **Build semantically correct HTML**:
Use appropriate semantic elements, valid nesting, accessible landmarks, and correct ARIA usage.
2. **Match Figma Dev Mode exactly for `theme-1`**:
Treat Figma Dev Mode as the canonical source for `theme-1` and implement values exactly (sizes, colors, typography, spacing, borders, radii, shadows, and states).
3. **Use design tokens for all styling**:
Do not hardcode visual values in component CSS. Map Dev Mode values to tokens first, then consume tokens in styles.

## Trigger

Use this skill when the user asks in patterns like:

- `Build the textbox component designed in this figma link xxxx`
- `Build this component from this Figma link`
- `Implement this UI from screenshot`

Do not require an issue key, ticket ID, or external task handler.

## Required Inputs

Collect these before coding:

1. Task definition from the user message (component/page name + expected behavior if provided)
2. At least one design artifact:
   - Preferred: Figma Dev Mode link with `node-id`
   - Fallback: Screenshot (local file path, issue attachment, or embedded image)

If no design artifact is provided, ask for one before implementation.

## Workflow

1. Parse scope directly from the user request.
2. Resolve design input:
   - If Figma link is provided, extract `fileKey` and `node-id`, then fetch implementation context from Figma Dev Mode.
   - If screenshot is provided, inspect it and infer layout/components; call out assumptions explicitly.
3. Convert the prompt into clear implementation scope and acceptance checks (state assumptions when unspecified).
4. Send a confirmation message using [template](./TEMLATE.md) before starting work.
5. Wait for explicit user confirmation (`yes`).
6. After the user says `yes`, create a feature branch from `main`.
7. Implement using repository architecture constraints:
   - Follow `project-architect` rules.
   - For each new component, create `assets/components/<component-name>/` with:
     - `<component-name>.css`
     - `<component-name>.js`
8. Integrate component files into relevant pages and keep styles token-driven.
9. Validate behavior on desktop/mobile and verify no global style leakage from component CSS/JS.
10. Report back with:
   - What was built
   - Files changed
   - Assumptions made (especially when screenshot-only)
   - Remaining gaps or follow-ups

## Figma Handling Rules

- Prefer Dev Mode link over screenshot when both are available.
- If a Figma link has no `node-id`, ask for a node-specific URL.
- If screenshot-only input is ambiguous, implement a best-effort version and list exact uncertainties.
- Do not block progress waiting for perfect design specs when core requirements are clear.

## Output Contract

In the final response:

1. Reference changed files with paths.
2. Map implemented UI parts back to the user request.
3. Note any deviations from design and why.
