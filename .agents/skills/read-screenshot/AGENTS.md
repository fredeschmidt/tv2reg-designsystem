# Read Screenshot Skill

## Support Skill (Mandatory Order)

This skill is used during `build-component-screenshots` for screenshot-driven builds.
It is not a first-step skill; it runs when `build-component-screenshots` calls it.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If required input is missing, ask and wait.
- After extraction is complete, return control to `build-component-screenshots`.

## Routing

Use this skill when the design source is screenshots (mobile + desktop) and the goal is 1:1 visual reconstruction.

## Dependencies

- Called by: `build-component-screenshots`
- Returns to: `build-component-screenshots`
