---
name: wrap-up
description: Commits, pushes, merges to main locally, ends on main. Never deletes branches.
---

# Wrap Up Branch Skill

Use this skill to commit changes, push the branch, merge to `main` locally, and finish on `main`.

## Mandatory Execution Rules

- Read this file before acting.
- Execute all workflow steps in exact order.
- Execute all sub-bullets under each step.
- Do not skip, combine, or reorder steps.
- If blocked (for example merge conflicts), stop and ask the user.
- Never delete branches automatically.
- Never deploy automatically.

## Trigger

Run only when the user explicitly asks to wrap up a branch.
Example: `Wrap up this branch`.

## Workflow (Execute In Order)

1. Check working tree:
   - if untracked files exist, stage them,
   - if there are tracked changes, stage them.

2. Commit:
   - use a descriptive commit message summarizing the feature/fix.

3. Push:
   - push/publish the current branch to remote.

4. Merge to main (local):
   - switch to `main`,
   - pull/rebase `main` (if applicable),
   - merge feature branch into `main`,
   - if merge conflicts occur, stop and ask user.

5. End state:
   - leave repo on `main`,
   - confirm completion in chat.
