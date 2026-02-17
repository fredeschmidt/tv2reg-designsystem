# Build Component Figma Skill

## MANDATORY SKILL FOR FIGMA REQUESTS

**DO NOT BYPASS THIS SKILL** when a Figma link is provided in a request.

If a Figma Dev Mode node link is in the request, **YOU MUST USE THIS SKILL.** No exceptions, no manual implementations.

## Execution Contract (Non-Negotiable, Mandatory)

- Read `SKILL.md` before taking any action—do not proceed without it.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion of any workflow step.
- Escalate (ask user) if a step requires confirmation or decision.
- Block and resolve any blockers before advancing—do not work around them.
- **If you implement manually instead of using this skill, you have failed the contract.**

## Routing (CRITICAL)

**When a Figma link is provided, MANDATORY USE OF THIS SKILL:**
1. Request contains a Figma Dev Mode node link (with node-id parameter)
2. Placement target is specified (article.html, index.html, etc.)

**DO NOT:** Build the component manually. Delegate to this skill immediately.

**Source of Truth:**
- Figma design is the source of truth.
- Build is white-label (token-driven, theme-agnostic).
- Token behavior provides theming flexibility across all regions.

## Skill Handoffs

- Architecture guardrails: `architecture`
- Branch wrap-up (only if explicitly requested): `wrap-up`
