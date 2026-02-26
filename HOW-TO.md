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

Routing model (MANDATORY - ALWAYS FOLLOW):
- **Figma link provided:** MUST use `build-component-figma` skill (no manual builds)
- These skill delegations are non-negotiable execution contracts.

### New component from Figma

`
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

### Update existing component

`
Update existing [component-name].
- Reference: [Figma node link|exact visual/text spec]
- Theme context: [optional]
- Requested changes: [list]
- Allowed scope: [CSS only|CSS + markup|CSS + markup + JS]
`

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
