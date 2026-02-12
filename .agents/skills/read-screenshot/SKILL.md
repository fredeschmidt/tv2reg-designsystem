---
name: read-screenshot
description: Extracts complete visual detail from a screenshot and recreates it as HTML/CSS with pixel-accurate 1:1 parity.
---

# Read Screenshot

Use this skill when a screenshot is the design source of truth and the goal is to reconstruct the UI in semantic HTML and scoped CSS with a strict 1:1 visual result.

## Trigger

Use this skill when `build-component` receives a screenshot-driven component request, then return to `build-component` after extraction.

If the request references both a Figma Dev Mode link and a screenshot, prefer Figma values for exact specs and use the screenshot only for visual validation.

## Required Inputs

Collect these before coding:

1. Screenshot sources:
   - Two screenshots are required for component builds: one mobile view and one desktop view
2. Placement target in project:
   - `article.html` inside `<article>` wrapped in `<div class="article-component">`, or
   - `index.html` inside `<main>` wrapped in `<div class="frontpage-component">`
3. Theme context when relevant:
   - `tv2oj`, `tv2Nord`, `tvSyd`, `tv2Fyn`, `tv2East`, or `kosmopol`
4. Viewport assumptions if not obvious:
   - Approximate frame width for both mobile and desktop screenshots

If a required input is missing, ask before implementation.

## Extraction Rules (Non-Negotiable)

1. Capture every visible detail from both screenshots:
   - Layout structure, spacing, alignment, sizing, typography hierarchy, line-height, weights, colors, borders, radii, shadows, overlays, icon treatment, and responsive behavior implied by composition.
2. Do not hand-wave unknowns:
   - When a value cannot be inferred reliably, state the assumption explicitly and mark it as a potential delta.
3. Preserve semantics:
   - Use semantic HTML elements where possible (`article`, `section`, headings, lists, buttons, links, figure/caption).
4. Keep CSS scoped:
   - No leaking global resets or overrides.
5. Use existing tokens/theme variables first:
   - Avoid hardcoded one-off values unless screenshot fidelity requires it and token coverage is missing.
6. For screenshot-based builds, token mapping is required by default:
   - Use tokenized colors for backgrounds, text, borders, and accents.
   - Use tokenized typography for font family, font size, font weight, and line-height.
   - Only use hardcoded color/typography values when token coverage is missing and document each exception.

## Workflow

1. Inspect both screenshots and list observable primitives:
   - Grid/frame size, component blocks, spacing rhythm, type scale, color palette, edge treatments, and visual effects.
2. Derive a DOM plan:
   - Map each visible region to semantic containers before writing CSS.
3. Implement HTML first:
   - Ensure clean, minimal, semantic structure.
4. Implement CSS in passes:
   - Pass 1: layout and geometry
   - Pass 2: typography and spacing (map to typography tokens first)
   - Pass 3: color/effects (backgrounds, borders, shadows, gradients; map colors to tokens first)
   - Pass 4: responsive adjustments
5. Run a visual-match pass:
   - Compare implementation against both screenshots at matching viewports (mobile + desktop).
   - Iterate until mismatch is negligible.
6. Perform self-review against the screenshot again:
   - Re-check both original screenshots after the latest edits and confirm the build still looks the same on mobile and desktop.
   - If differences remain, loop back to CSS/HTML refinements before final reporting.
7. Report remaining deltas:
   - Only if exact parity is blocked by missing assets/fonts/source dimensions.

## 1:1 Acceptance Criteria

The result is accepted only when:

1. Visual parity:
   - The layout and component geometry are pixel-accurate at target mobile and desktop viewports.
2. Typographic parity:
   - Font family fallback path, size, weight, line-height, and letter spacing visually match.
3. Color/effect parity:
   - Backgrounds, text colors, borders, shadows, and opacity/overlay effects match.
4. Token compliance:
   - Color and typography styling uses existing tokens by default; any hardcoded exception is documented.
5. Structural quality:
   - HTML is semantic and CSS is scoped to the component.
6. Transparent assumptions:
   - Any non-verifiable values are documented explicitly.

## Output Requirements

When reporting completion, include:

1. What was recreated from the screenshot
2. Files changed
3. Assumptions made
4. Any remaining deltas and exact reason they cannot be eliminated
