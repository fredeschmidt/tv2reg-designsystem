---
name: create-issue
description: Creates a fully specified Linear issue in the LETS GO team (Project: Tv2reg Design System) using a structured Markdown description + sub-issues.
---

# Create Issue Skill
Use the Create Issue skill to create a new Linear issue in the LETS GO team (Project: Tv2reg Design System) based on the user's request and any provided Figma link/screenshots. The skill will extract key details, classify the task type, discover the correct status/labels dynamically, and fill out the issue description with a structured template. It will also create sub-issues for each acceptance criterion if applicable. Finally, it will return the Linear issue identifier and direct link in the chat.

## Trigger   
This runs when the user asks to create an issue, e.g. "Create an issue for this Figma design". The user may optionally provide a Figma link and/or screenshots to help specify the task details.

## HARD RULES (must follow)
- Always create issues in Linear team: LETS GO (Project: Tv2reg Design System).
- Use Markdown in the issue `description`. 
- If Figma fetch fails: create the task only if user provided enough info; otherwise ask for screenshots.

## Workflow

1. Gather context:
- If user provided a Figma link: fetch context once.
- Otherwise rely on user text (and screenshots if present).

2. Extract key details (best effort):
- When a Figma link is provided, use Figma Dev Mode to extract styling (sizes, typography, spacing, tokens, colors, ect.) and ensure the component design matches the linked Figma exactly.
- Component name
- States/variants
- Copy/text
- Spacing/layout
- Typography
- Colors/tokens
- Sizes
- Interaction + accessibility notes
- Constraints (“must/must not”)

3. Classify task type (pick one):
- component | bug | change | tech debt

4. Discover labels:
- Fetch issue labels for the issue and pick the best label by name match:
  - component → "Component"
  - bug → "Bug"
  - change or tech debt → "Change"
- If no matching label exists, create without label and note that in the response.

5. Respond with [template](TEMPLATE.md) filled out with the extracted details and ask for confirmation before creating the issue in Linear. Preserve the emojis and formatting exactly as in the template.

6. Create issue:
- Team: LETS GO (Project: Tv2reg Design System)
- Status: set status to `backlog`, unless user explicitly asks for a different status.
- Title format: <human readable name> (do not append the identifier)

7. Fill `description` with this template (Markdown):

Problem:
- <one sentence>

Scope:
- Includes:
  - ...
- Excludes:
  - ...

Acceptance criteria:
- ...
- ... 

Definition of Done:
- ...
- ...

Decision note:
- <short key tradeoff>

Links:
- Figma: <url or "N/A">
- Docs: docs/components/<COMPONENT>.md
- ADR: docs/decisions/ADR-xxxx-title.md (if relevant)
- PR template: .github/pull_request_template.md

8. Add sub-issues for each acceptance criterion (if any) with the same format in `description` but focused on the specific criterion.
- Implementation sub-issue must mention states/variants + a11y requirements + token usage.
- Review/QA must include visual check vs Figma + test plan.

9. Return in chat ONLY:
- Linear issue identifier (e.g., AI-123)
- Direct Linear link
Then STOP.
