# HOW TO: Request Work

> **🚨 CRITICAL ROUTING RULE**
>
> - **Providing Figma link?** → Use `build-component-figma` skill (MANDATORY)
>
> These are non-optional workflows. Manual implementations bypass the required design verification and quality gates.

This is the shortest way to make a valid request.

## Overview

1. Pick task type:
   - New component from Figma
   - Update existing component
2. Fill template
3. Send

Token default for implementation:
- Component and layout CSS should use the new token API (`--base-*` by default, `--core-*` when needed).
- Legacy aliases (`--md-*`, `--news-*`, `--color-*`, `--font-*`, `--space-*`) are compatibility-only.
- Accessibility is mandatory: preserve semantic HTML, keyboard operability, visible focus states, and WCAG AA contrast.
- Class naming should follow BEM for component-scoped, predictable CSS.
Routing model (MANDATORY - ALWAYS FOLLOW):
- **Figma link provided:** MUST use `build-component-figma` skill (no manual builds)
- These skill delegations are non-negotiable execution contracts.

Token usage for component builds:
- Use semantic `--base-*` tokens in component/layout CSS by default.
- Use `--core-*` only when no semantic `--base-*` token exists for the need.
- Do not hardcode raw color/typography/spacing values when a token exists.
- Keep theme differences in token layers, not component selectors.

### New component from Figma

`
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

Figma requests are treated as white-label. Theme behavior must come from tokens.
All implementations must keep accessible structure (semantic roles, labels, keyboard flow, contrast).
### Update existing component

`
Update existing [component-name].
- Reference: [Figma node link|exact visual/text spec]
- Theme context: [optional]
- Requested changes: [list]
- Allowed scope: [CSS only|CSS + markup|CSS + markup + JS]
`

All updates must avoid A11y regressions in semantics, keyboard navigation, and contrast.

## Theme Overrides (If one theme should look different)

By default, all themes reuse the same component frame.
If one theme must differ, request it explicitly:

`
Add theme-specific override for [theme].
- Base source theme: [theme]
- Differences: [exact list]
- Reference: [exact spec]
- Scope: this component only
`
