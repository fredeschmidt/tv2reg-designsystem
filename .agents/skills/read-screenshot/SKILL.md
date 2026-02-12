---
name: read-screenshot
description: Extracts complete visual detail from a screenshot and recreates it as HTML/CSS with pixel-accurate 1:1 parity.
---

# Read Screenshot

Use this skill when a screenshot is the design source of truth and the goal is to reconstruct the UI in semantic HTML and scoped CSS with a strict 1:1 visual result.

## Trigger

Use this skill when the user asks in patterns like:

- `Build this from screenshot`
- `Recreate this image in HTML/CSS`
- `Match this UI 1:1 from screenshot`
- `Extract all details from this screenshot`

Also trigger this skill when `build-component` receives a screenshot-driven component request, then return to `build-component` after extraction.

If the request references both a Figma Dev Mode link and a screenshot, prefer Figma values for exact specs and use the screenshot only for visual validation.

## Required Inputs

Collect these before coding:

1. Screenshot source:
   - Local file path, attachment, or embedded image
2. Placement target in project:
   - `article.html` inside `<article>` wrapped in `<div class="article-component">`, or
   - `index.html` inside `<main>` wrapped in `<div class="frontpage-component">`
3. Theme context when relevant:
   - `tv2oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`
4. Viewport assumptions if not obvious:
   - Desktop/mobile and approximate frame width

If a required input is missing, ask before implementation.

## Extraction Rules (Non-Negotiable)

1. Capture every visible detail from the screenshot:
   - Layout structure, spacing, alignment, sizing, typography hierarchy, line-height, weights, colors, borders, radii, shadows, overlays, icon treatment, and responsive behavior implied by composition.
2. Do not hand-wave unknowns:
   - When a value cannot be inferred reliably, state the assumption explicitly and mark it as a potential delta.
3. Preserve semantics:
   - Use semantic HTML elements where possible (`article`, `section`, headings, lists, buttons, links, figure/caption).
4. Keep CSS scoped:
   - No leaking global resets or overrides.
5. Use existing tokens/theme variables first:
   - Avoid hardcoded one-off values unless screenshot fidelity requires it and token coverage is missing.

## Workflow

1. Inspect screenshot and list observable primitives:
   - Grid/frame size, component blocks, spacing rhythm, type scale, color palette, edge treatments, and visual effects.
2. Derive a DOM plan:
   - Map each visible region to semantic containers before writing CSS.
3. Implement HTML first:
   - Ensure clean, minimal, semantic structure.
4. Implement CSS in passes:
   - Pass 1: layout and geometry
   - Pass 2: typography and spacing
   - Pass 3: color/effects (backgrounds, borders, shadows, gradients)
   - Pass 4: responsive adjustments
5. Run a visual-match pass:
   - Compare implementation against screenshot at the same viewport.
   - Iterate until mismatch is negligible.
6. Perform self-review against the screenshot again:
   - Re-check the original screenshot after the latest edits and confirm the build still looks the same.
   - If differences remain, loop back to CSS/HTML refinements before final reporting.
7. Report remaining deltas:
   - Only if exact parity is blocked by missing assets/fonts/source dimensions.

## 1:1 Acceptance Criteria

The result is accepted only when:

1. Visual parity:
   - The layout and component geometry are pixel-accurate at target viewport.
2. Typographic parity:
   - Font family fallback path, size, weight, line-height, and letter spacing visually match.
3. Color/effect parity:
   - Backgrounds, text colors, borders, shadows, and opacity/overlay effects match.
4. Structural quality:
   - HTML is semantic and CSS is scoped to the component.
5. Transparent assumptions:
   - Any non-verifiable values are documented explicitly.

## Output Requirements

When reporting completion, include:

1. What was recreated from the screenshot
2. Files changed
3. Assumptions made
4. Any remaining deltas and exact reason they cannot be eliminated
