# Build Component Figma Skill

## Source-Specific Build Skill

This skill is called by `build-component` when Figma is the source.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If a step requires user confirmation, stop and wait.
- If blocked, resolve the blocker before moving on.

## Routing

Use this skill when the request contains a Figma Dev Mode node link.
Treat the Figma design as white-label and keep theme behavior token-driven.

## Skill Handoffs

- Architecture guardrails: `architecture`
- Branch wrap-up (only if explicitly requested): `wrap-up`
