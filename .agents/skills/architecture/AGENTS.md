# Architecture Skill

## Support Skill (Mandatory Order)

This skill applies architecture constraints during implementation.
In component builds, it is run by the active source-specific build skill after design extraction and before coding.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If required context is missing, resolve it before continuing.
- After constraints are applied, return control to the calling skill.

## Routing

- Do not use as entry skill for “build component from Figma/screenshot”.
- Use `build-component-figma` or `build-component-screenshots` first, then call this skill.
