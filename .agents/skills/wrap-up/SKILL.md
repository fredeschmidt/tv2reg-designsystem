---
name: wrap-up
description: Commits, pushes, merges to main locally, ends on main. Never deletes branches.
---

# Wrap Up Branch Skill
Use the Wrap Up skill to commit your changes, push the branch to remote, merge it to main locally, and end on the main branch. This skill ensures that you follow a structured workflow while wrapping up your work on a feature or fix, and it will never delete branches or deploy automatically.    

## Trigger    
Trigger this only when the user explicitly asks to wrap up a branch, e.g. "Wrap up this branch". The skill will guide you through the process of committing, pushing, merging, and switching branches.

## HARD RULES (must follow)
- Never delete branches automatically.
- Never deploy automatically.

## Workflow
1. Check working tree:
- If untracked files exist: stage them.
- If there are changes: stage them.

2. Commit:
- Use a descriptive commit message summarizing the feature/fix.

3. Push:
- Push/publish the current branch to remote.

4. Merge to main (local):
- Switch to main
- Pull/rebase main (if applicable)
- Merge feature branch into main
- If there are merge conflicts: STOP and ask user.

5. End state:
- Leave repo on main
- Confirm completion in chat.
