---
name: build-component
description: First step for every new component request. Routes to build-component-figma or build-component-screenshots.
---

# Build Component

This is the mandatory **first step** for every new component build request.
It only routes to one source-specific build skill.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked, stop and resolve the blocker first.
- If a step says ask/wait for user, ask and wait.

## Trigger

Use first when the user asks to build a new component.
Source type is always exclusive: exactly one of Figma or screenshots.
Figma requests are always white-label token-driven.
Screenshot requests are always from one concrete theme and must include that theme in the prompt.

Use these exact request patterns:

```md
Build a new [component-name] from screenshots.
- Mobile screenshot (1st): [link]
- Desktop screenshot (2nd): [link]
- Screenshot dimensions: [mobile WxH px, desktop WxH px]
- Viewport widths used (if known): [mobile px, desktop px]
- Source theme: [tv2Oj|tv2Nord|tv2Syd|tv2Fyn|tv2East|kosmopol]
- Placement target: [article.html|index.html]
- Notes: [optional]
```

```md
Build a new [component-name] from Figma.
- Figma node link (with node-id): [link]
- Placement target: [article.html|index.html]
- Notes: [optional]
```

## Required Inputs

Collect before routing:

1. Task definition from user prompt.
2. Design source:
   - Figma Dev Mode link with `node-id`, or
   - two screenshots (mobile + desktop).
3. Source theme for screenshot requests:
   - must be explicitly provided in prompt,
   - allowed values: `tv2Oj`, `tv2Nord`, `tv2Syd`, `tv2Fyn`, `tv2East`, `kosmopol`.

If any required input is missing, ask before routing.

## Workflow (Execute In Order)

1. Parse the user request and identify design source type.
2. Route to one source-specific build skill:
   - Figma link with `node-id` -> run [Build Component Figma](../build-component-figma/SKILL.md).
   - Two screenshots (mobile + desktop) -> run [Build Component Screenshots](../build-component-screenshots/SKILL.md).
3. If source type is unclear:
   - ask a single clarification question and wait.
4. After routing, do not duplicate implementation steps in this skill.
   - the selected source-specific skill owns extraction, architecture handoff, implementation, validation, and reporting.
