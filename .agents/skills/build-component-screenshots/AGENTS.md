# Build Component Screenshots Skill

## MANDATORY SKILL FOR SCREENSHOT REQUESTS

**DO NOT BYPASS THIS SKILL** when screenshots are provided in a request.

If screenshots (mobile + desktop) are in the request, **YOU MUST USE THIS SKILL.** No exceptions, no manual implementations.

## Execution Contract (Non-Negotiable, Mandatory)

- Read `SKILL.md` before taking any action—do not proceed without it.
- Execute every workflow step and sub-step in exact order.
- Do not skip, merge, reorder, or "infer" completion of any workflow step.
- Escalate (ask user) if a step requires confirmation or decision.
- Block and resolve any blockers before advancing—do not work around them.
- **If you implement manually instead of using this skill, you have failed the contract.**

## Routing (CRITICAL)

**When ALL of these are true, MANDATORY USE OF THIS SKILL:**
1. Request contains two screenshots (mobile + desktop)
2. Source theme is explicitly specified (e.g., tv2Oj, tv2Nord, etc.)
3. Placement target is specified (article.html, index.html, etc.)

**DO NOT:** Build the component manually. Delegate to this skill immediately.

**Source of Truth:**
- Screenshots are the design source of truth.
- Source theme is the concrete behavior context (not white-label).
- Build against the exact theme provided.

## Skill Handoffs

- Screenshot extraction: `read-screenshot`
- Architecture guardrails: `architecture`
- Branch wrap-up (only if explicitly requested): `wrap-up`
