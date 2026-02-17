# Build Component Screenshots Skill

## Source-Specific Build Skill

This skill is called by `build-component` when screenshots are the source.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If a step requires user input/confirmation, stop and wait.
- If blocked, resolve the blocker before moving on.

## Routing

Use this skill when the request provides two screenshots (mobile + desktop) as source of truth.
Require explicit source theme in the prompt and build against that concrete theme.

## Skill Handoffs

- Screenshot extraction: `read-screenshot`
- Architecture guardrails: `architecture`
- Branch wrap-up (only if explicitly requested): `wrap-up`
