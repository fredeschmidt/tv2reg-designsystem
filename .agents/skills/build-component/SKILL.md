---
name: build-component
description: Build components directly from the user prompt (for example "Build the component from this Figma link: <FIGMA_DEV_MODE_LINK>" or "Build the component from this screenshot").
---

# Build Component

Execute implementation work where the user prompt is the task definition, using provided design context (Figma Dev Mode link or screenshot) as the primary source of truth for the implementation. This skill is for cases where the user has a clear implementation request tied to specific design input, and the agent's job is to translate that into code with minimal back-and-forth.

## Trigger

Use this skill when the user asks in patterns like:

- `Build the component from this Figma link: <FIGMA_DEV_MODE_LINK>`
- `Build the XX component from these screenshots (tv2Oj): <MOBILE_SCREENSHOT_REFERENCE> + <DESKTOP_SCREENSHOT_REFERENCE>`

For new screenshot-driven components, this is the entry skill and should run first.

## Required Inputs

Collect these before coding:

1. Task definition from the user message
2. At least one design artifact:
   - Preferred: Figma Dev Mode link with `node-id`
   - Fallback: Two screenshots: one mobile view and one desktop view
3. If using a screenshot, the user must specify which theme it belongs to:
   - `tv2oj`/`tv2Oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`
   - The specified theme defines the source styling for the implementation
   - Other themes should be provided through existing design tokens (no per-theme hardcoded screenshot values)

If no design artifact is provided, ask for one before implementation.
If screenshot-driven and one viewport screenshot is missing, ask for the missing mobile/desktop screenshot before implementation.

## Workflow

1. Parse scope directly from the user request.
2. Extract key details from the design input:
   - For Figma: use Figma Dev Mode to extract styling (sizes, typography, spacing, tokens, colors, etc.) and ensure the component design matches the linked Figma exactly.
   - For screenshots: trigger and follow the [Read Screenshot skill](../read-screenshot/SKILL.md) to extract visual details from both screenshots first (mobile + desktop), using the specified theme as the styling reference. Do not assume missing values; ask for clarification when necessary.
   - For screenshots: confirm the source theme (`tv2Oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`) before implementation. Use that theme as the canonical styling reference, then rely on tokens for the remaining themes.
   - For screenshots: map colors to existing color tokens and map typography to existing font tokens (family, size, weight, line-height) instead of hardcoded values.
3. Ask user where the component should be integrated:
   - If article: add component to `article.html` inside <article>, wrapped in <div class="article-component">.
   - If frontpage: add component to `index.html` inside <main>, wrapped in <div class="frontpage-component">.
4. Convert the prompt into clear implementation scope and acceptance checks (state assumptions when unspecified).
5. Send a confirmation message using [template](./TEMPLATE.md) before starting work.
6. Wait for user to confirm (`yes`).
7. If user confirmed, then create a branch locally with descriptive name (e.g. `build/<component-name>`).
8. Trigger and apply the [Project Architect skill](../project-architect/SKILL.md) before implementation for repository architecture constraints, then return to this workflow.
9. Implement the component using the design input as the primary source of truth and within the Project Architect constraints.
10. Validate behavior on desktop/mobile and verify no global style leakage from component CSS/JS.
   - Confirm screenshot-driven styling uses token colors and token typography (font family, size, weight, line-height), not raw one-off values unless explicitly approved.

11. Report back with:
   - What was built
   - Files changed
   - Assumptions made (especially when screenshot-only)
   - Any visual deltas remaining for "1:1" tasks and why
   - Remaining gaps or follow-ups
