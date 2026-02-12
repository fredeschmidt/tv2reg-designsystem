---
name: read-screenshot
description: Extract complete visual details from screenshots and reconstruct the component with semantic HTML and scoped CSS.
---

# Read Screenshot

Use this skill when screenshots are the design source of truth.
Goal: reconstruct the component with strict mobile + desktop visual parity.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked or input is missing, ask and wait.
- When done, return to `build-component`.

## Trigger

Run this skill when `build-component` handles a screenshot-driven component request.

If both Figma and screenshots are provided, Figma values are canonical; screenshots are for visual validation.

## Required Inputs

Collect before implementation:

1. Two screenshots:
   - one mobile,
   - one desktop.
2. Placement target:
   - `article.html` inside `<article>` wrapped in `<div class="article-component">`, or
   - `index.html` inside `<main>` wrapped in `<div class="frontpage-component">`.
3. Source theme when relevant:
   - `tv2Oj`, `tv2Nord`, `tv2Syd`, `tv2Fyn`, `tv2East`, or `kosmopol`.
4. Viewport assumptions if frame size is unclear:
   - approximate width for mobile and desktop captures.

If any required input is missing, ask before implementation.

## Extraction Rules (Non-Negotiable)

1. Capture all visible details from both screenshots:
   - layout, spacing, alignment, sizing, typography, colors, borders, radii, shadows, overlays, icons, and responsive behavior.
2. No guesswork without disclosure:
   - if a value is uncertain, state the assumption and mark as potential delta.
3. Preserve semantic HTML.
4. Keep CSS fully scoped to the component.
5. Use existing tokens first.
6. Token mapping is required for screenshot builds:
   - colors: tokenized by default,
   - typography: tokenized family, size, weight, line-height by default,
   - hardcoded fallback only when token coverage is missing, and document each exception.

## Workflow (Execute In Order)

1. Inspect both screenshots and list observable primitives:
   - frame/grid, blocks, spacing rhythm, type scale, color palette, effects, edge treatments.
2. Derive DOM plan:
   - map visible regions to semantic containers before CSS.
3. Implement HTML first.
4. Implement CSS in passes:
   - Pass 1: layout + geometry,
   - Pass 2: typography + spacing (token-mapped first),
   - Pass 3: color + effects (token-mapped first),
   - Pass 4: responsive adjustments.
5. Run visual match pass:
   - compare mobile and desktop against screenshots,
   - iterate until mismatch is minimal.
6. Run self-review pass again:
   - re-check both screenshots after latest edits,
   - if mismatch remains, loop back to HTML/CSS refinements.
7. Report deltas:
   - only remaining, non-removable deltas with exact reason.

## 1:1 Acceptance Criteria

Accepted only when all are true:

1. Visual parity: geometry/layout match mobile and desktop.
2. Typographic parity: family, size, weight, line-height, spacing match.
3. Color/effect parity: backgrounds, text, borders, shadows, opacity/effects match.
4. Token compliance: colors + typography tokenized by default; any hardcoded exceptions documented.
5. Structural quality: semantic HTML + scoped CSS.
6. Transparent assumptions: all uncertain values documented.

## Output Requirements

When reporting completion, include:

1. What was recreated from screenshots.
2. Files changed.
3. Assumptions made.
4. Remaining deltas and exact reason they cannot be removed.
