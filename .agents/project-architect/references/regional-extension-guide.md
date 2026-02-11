# Regional Extension Guide

Use this when deciding whether a change belongs in shared core or regional scope.

## Layer Ownership

1. Shared core:
   - canonical tokens
   - shared components
   - base page semantics
2. Regional system:
   - region-specific layouts
   - region-only components
   - region token namespace
3. Regional products:
   - experiments and campaigns

## What Regions Can Customize

- Layout systems and composition
- Region-only components
- Interaction patterns
- Namespaced regional tokens (`--region-[name]-*`)

## What Must Stay Shared

- Editorial semantics and hierarchy
- Accessibility baseline
- Canonical component contracts
- Shared token meaning

## Escalate to Shared Core When

- A new semantic role is needed across regions
- Existing shared tokens cannot express editorial intent
- Multiple regions need the same capability
- Accessibility cannot be met without shared changes

## Red Flags

- Forking shared components to apply brand styling
- Encoding meaning in page layout
- Overriding semantics with per-page selectors
- Replacing shared tokens with raw values
