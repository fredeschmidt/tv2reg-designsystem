---
name: build-task
description: Build components directly from the user prompt (for example "Build the component from this Figma link: <FIGMA_DEV_MODE_LINK>" or "Build the component from this screenshot").
---

# Build Task

Execute implementation work where the user prompt is the task definition, using provided design context (Figma Dev Mode link or screenshot) as the primary source of truth for the implementation. This skill is for cases where the user has a clear implementation request tied to specific design input, and the agent's job is to translate that into code with minimal back-and-forth.

## Trigger

Use this skill when the user asks in patterns like:

- `Build the component from this Figma link: <FIGMA_DEV_MODE_LINK>`
- `Build the component from this screenshot (tv2oj): <SCREENSHOT_REFERENCE>`

## Required Inputs

Collect these before coding:

1. Task definition from the user message
2. At least one design artifact:
   - Preferred: Figma Dev Mode link with `node-id`
   - Fallback: Screenshot (local file path, issue attachment, or embedded image)
3. If using a screenshot, the user must specify which theme it belongs to:
   - `tv2Oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`
   - The specified theme defines the source styling for the implementation
   - Other themes should be provided through existing design tokens (no per-theme hardcoded screenshot values)

If no design artifact is provided, ask for one before implementation.

## Workflow

1. Parse scope directly from the user request.
2. Extract key details from the design input:
   - For Figma: use Figma Dev Mode to extract styling (sizes, typography, spacing, tokens, colors, ect.) and ensure the component design matches the linked Figma exactly.
   - For screenshots: extract as much detail as possible as well as layout, component structure, and visual styling cues.
   - For screenshots: confirm the source theme (`tv2Oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`) before implementation. Use that theme as the canonical styling reference, then rely on tokens for the remaining themes.
3. Ask user where the component should be integrated:
   - If article: add component to `article.html` inside <article>, wrapped in <div class="article-component">.
   - If frontpage: add component to `index.html` inside <main>, wrapped in <div class="frontpage-component">.
4. Convert the prompt into clear implementation scope and acceptance checks (state assumptions when unspecified).
5. Send a confirmation message using [template](./TEMPLATE.md) before starting work.
6. Wait for user to confirm (`yes`).
7. If user confirmed, then create a branch locally with descriptive name (e.g. `build/<component-name>`).
8. Implement the component following the [core principles](../project-architect/SKILL.md) and using the design input as the primary source of truth.
9. Validate behavior on desktop/mobile and verify no global style leakage from component CSS/JS.
10. Report back with:
   - What was built
   - Files changed
   - Assumptions made (especially when screenshot-only)
   - Remaining gaps or follow-ups

