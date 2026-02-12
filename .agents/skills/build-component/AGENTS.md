# Build Component Skill

## Entry Skill (Mandatory)

This is the first skill to run for any **new component build**.
Do not start implementation from another skill.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If a step requires user input/confirmation, stop and wait.
- If a step is blocked, resolve the blocker before moving on.

## Routing

Use this skill when the user asks to build a component from:
- a Figma Dev Mode link, or
- screenshots (mobile + desktop).

## Skill Handoffs

- Screenshot extraction: `read-screenshot`
- Architecture guardrails: `project-architect`
- Branch wrap-up (only if explicitly requested): `wrap-up`
