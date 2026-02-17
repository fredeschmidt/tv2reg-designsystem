# HOW TO: Request Work

> **🚨 CRITICAL ROUTING RULE**
>
> - **Providing screenshots?** → Use `build-component-screenshots` skill (MANDATORY)
> - **Providing Figma link?** → Use `build-component-figma` skill (MANDATORY)
>
> These are non-optional workflows. Manual implementations bypass the required design verification and quality gates.

This is the shortest way to make a valid request.

## Overview

1. Pick task type:
   - New component from screenshots
   - New component from Figma
   - Update existing component
2. Fill template
3. Send

Token default for implementation:
- Component and layout CSS should use the new token API (`--base-*` by default, `--core-*` when needed).
- Legacy aliases (`--md-*`, `--news-*`, `--color-*`, `--font-*`, `--space-*`) are compatibility-only.

Routing model (MANDATORY - ALWAYS FOLLOW):
- **Screenshots provided:** MUST use `build-component-screenshots` skill (no manual builds)
- **Figma link provided:** MUST use `build-component-figma` skill (no manual builds)
- These skill delegations are non-negotiable execution contracts.
- Figma requests are white-label: themes are token-driven.
- Screenshot requests are concrete-theme: prompt must include the source theme.


### New component from screenshots

`
Build a new [component-name] from screenshots.
- Mobile screenshot (1st)
- Desktop screenshot (2nd)
- Source theme: [tv2Oj|tv2Nord|tv2Syd|tv2Fyn|tv2East|kosmopol]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

Viewport assumptions are always fixed: screenshot 1 is mobile `390px`, screenshot 2 is desktop `1728px`.
Source theme is required for screenshot requests.

### New component from Figma

`
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

Figma requests are treated as white-label. Theme behavior must come from tokens.

### Update existing component

`
Update existing [component-name].
- Mobile screenshot (1st): [link]
- Desktop screenshot (2nd): [link]
- Theme to match: [theme]
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
- Reference: [screenshot or exact spec]
- Scope: this component only
`
