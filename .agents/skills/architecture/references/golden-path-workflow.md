# Golden Path Workflow

Treat one canonical page as a system-level validation surface.
In this repo, use `article.html` as the golden path until a dedicated page exists.

## Workflow

1. Freeze structure while validating system changes.
2. Implement semantics with shared components and tokens only.
3. Validate all supported themes.
4. Validate light/dark behavior if mode tokens are introduced.
5. Fix token/system gaps, not page-specific output.

## Acceptance Gates

- No page-specific style exceptions.
- No theme-specific component forks.
- No raw values in component rules when a token should exist.
- Editorial hierarchy remains readable on mobile and desktop.
- Theme switch behavior still works and persists.

## Suggested Test Matrix

Run each page in:

- `tv2Oj`
- `tv2Nord`
- `tv2Syd`
- `tv2Fyn`
- `tv2East`
- `kosmopol`

For each theme, verify:

- body text contrast
- headline hierarchy
- metadata legibility
- interaction affordances (focus/hover if present)
