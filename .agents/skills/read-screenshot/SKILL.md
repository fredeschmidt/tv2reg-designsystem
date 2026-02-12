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
4. Viewport assumptions (default, unless user says otherwise):
   - first screenshot is mobile viewport at `390px` width,
   - second screenshot is desktop viewport at `1728px` width.

If any required input is missing, ask before implementation.

## Viewport Calibration Rules (Non-Negotiable)

1. Assume screenshot order by default:
   - screenshot 1 = mobile (`390px` wide),
   - screenshot 2 = desktop (`1728px` wide).
2. Use these viewport widths to estimate element dimensions:
   - derive proportional widths, spacing, and typography scale from the screenshot-to-viewport ratio,
   - validate derived sizes across both mobile and desktop before finalizing CSS values.
3. Only deviate from these viewport defaults when the user explicitly provides different viewport sizes.

## Extraction Rules (Non-Negotiable)

1. Capture all visible details from both screenshots:
   - layout, spacing, alignment, sizing, typography, colors, borders, radii, shadows, overlays, icons, and responsive behavior.
2. Scan screenshots for visible text content before implementation:
   - extract all readable copy (headlines, body, labels, quotes, captions, metadata, CTA text),
   - preserve original wording and punctuation when legible,
   - if text is partially unreadable, mark uncertain fragments explicitly as assumptions.
3. Convert extracted text into semantic HTML based on editorial meaning:
   - use tags that match intent (`h*`, `p`, `blockquote`, `figcaption`, `time`, `a`, `button`, etc.),
   - avoid generic wrappers (`div`, `span`) when a semantic element fits,
   - document ambiguous cases and why a semantic choice was made.
4. No guesswork without disclosure:
   - if a value is uncertain, state the assumption and mark as potential delta.
5. Preserve semantic HTML.
6. Keep CSS fully scoped to the component.
7. Use existing tokens first.
8. Token mapping is required for screenshot builds:
   - colors: tokenized by default,
   - typography: tokenized family, size, weight, line-height by default via semantic typography tokens,
   - apply typography/color tokens that match the chosen semantic role (for example quote text -> quote tokens, metadata -> meta tokens),
   - typography must prefer semantic token usage (for example `font: var(--news-sys-typography-quote)`) over legacy `--font-*` aliases in component CSS,
   - when a semantic typography token is applied, do not override `font-size`, `font-weight`, or `line-height` unless absolutely required and documented as a delta,
   - hardcoded fallback only when token coverage is missing, and document each exception.

## Workflow (Execute In Order)

1. Inspect both screenshots and list observable primitives:
   - frame/grid, blocks, spacing rhythm, type scale, color palette, effects, edge treatments.
2. Run a text extraction pass:
   - list all detected text strings by region/role,
   - classify each string by semantic intent (headline, paragraph, quote, caption, metadata, control label, etc.).
3. Derive DOM plan:
   - map visible regions to semantic containers before CSS.
4. Implement HTML first using the semantic mapping from step 2.
5. Implement CSS in passes:
   - Pass 1: layout + geometry,
   - Pass 2: typography + spacing (semantic token-mapped first),
   - Pass 3: color + effects (token-mapped first),
   - Pass 4: responsive adjustments.
6. Run visual match pass:
   - compare mobile and desktop against screenshots,
   - iterate until mismatch is minimal.
7. Run self-review pass again:
   - re-check both screenshots after latest edits,
   - if mismatch remains, loop back to HTML/CSS refinements.
8. Report deltas:
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
