# project-architect

## Purpose
This skill explains the architecture of `tv2reg-designsystem` so contributors can add features without breaking the shared multi-region model.

## Project Goal
Build one shared HTML solution for TV2 regional sites, where visual identity changes by theme tokens only.

Current pages:
- `index.html` (frontpage)
- `article.html` (article template)
- `design-manual.html` (token and typography reference)

## Core Architecture

### 1) Shared page structure
All pages are static HTML and share these concepts:
- Same top header and navigation
- Same theme selector (`#themeSelect`)
- Same global CSS/JS assets

Do not fork per-region HTML files. Regions must stay token-driven.

### 2) Token-driven theming
Token source is `assets/tokens.css` and loaded via `@import` in `assets/styles.css`.

`assets/tokens.css` contains:
- Base tokens in `:root` (color, typography, spacing, radius, shadow)
- Region overrides on `html[data-theme="..."]`

Supported themes:
- `tv2Oj`
- `tv2Nord`
- `tv2Syd`
- `tv2Fyn`
- `tv2East`
- `kosmopol`

Rule: component/layout styles must use CSS variables (tokens), not hardcoded region colors.

### 3) Styling layers
- `assets/tokens.css`: design tokens only
- `assets/styles.css`: layout + component styling only, importing tokens at top

If new design decisions are reusable, add token first, then consume it in styles.

### 4) Theme runtime behavior
`assets/theme.js` controls theme switching.

Flow:
1. Define valid themes in `THEMES`
2. Read saved theme from `localStorage` (`tv2-region-theme`)
3. Apply theme on `<html data-theme="...">`
4. Populate `<select id="themeSelect">`
5. Persist changes to `localStorage`

Rule: keep theme names in JS aligned with token selectors in CSS.

## Working Conventions

### HTML
- Keep semantic structure simple and shared.
- Header/navigation/theme picker should be identical across pages.
- Avoid page-specific inline styles/scripts.

### CSS
- Prefer tokenized values: `var(--...)`
- Keep responsive behavior centralized in `assets/styles.css`
- Add new tokens in `assets/tokens.css` when introducing new visual properties

### JS
- Keep `theme.js` minimal and framework-free.
- No page-specific behavior in theme script.

## How To Extend Safely

### Add a new region theme
1. Add new `html[data-theme="newTheme"]` block in `assets/tokens.css`
2. Add `"newTheme"` to `THEMES` in `assets/theme.js`
3. Verify switcher updates and persists correctly

### Add a new shared page
1. Reuse existing header/nav/theme picker markup
2. Include only `assets/styles.css` and `assets/theme.js`
3. Use tokenized classes/components

### Add new component style
1. Check if current tokens are enough
2. If not, add token(s) to `:root` and per-theme overrides where needed
3. Implement component rules in `assets/styles.css`

## Known Constraints
- Static HTML/CSS/JS only (no framework/build step yet)
- Theme consistency relies on exact theme key names across CSS and JS
- Browser support for `color-mix()` may vary in older environments

## Quick Validation Checklist
- Theme selector appears and works on all pages
- Theme persists after reload/navigation
- No region-specific hardcoded colors in component rules
- All pages still render on mobile and desktop
