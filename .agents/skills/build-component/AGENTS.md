# Build Component Skill

## First Step (Mandatory)

This skill is always the first step for new component build requests.
It routes to one source-specific build skill.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion.
- If a step requires user input/confirmation, stop and wait.
- If a step is blocked, resolve the blocker before moving on.

## Routing

Use this skill first whenever the user asks to build a new component.

Route as follows:

- Figma request -> `build-component-figma`
    - Figma flow is white-label token-driven.
- Screenshot request -> `build-component-screenshots`
-   Screenshot flow requires explicit source theme in prompt.

## Skill Handoffs

- Figma build flow: `build-component-figma`
- Screenshot build flow: `build-component-screenshots`
