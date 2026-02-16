# HOW TO: Request Work

This is the shortest way to make a valid request.

## Overview

1. Pick task type:
   - New component from screenshots
   - New component from Figma
   - Update existing component
2. Fill template
3. Send


### New component from screenshots

`
Build a new [component-name] from screenshots.
- Mobile screenshot (1st): [link]
- Desktop screenshot (2nd): [link]
- Source theme: [tv2Oj|tv2Nord|tv2Syd|tv2Fyn|tv2East|kosmopol]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

### New component from Figma

`
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Source theme: [theme or "default"]
- Placement target: [article.html|index.html]
- Notes: [optional]
`

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

