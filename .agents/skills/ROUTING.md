# Component Build Skill Routing (MANDATORY)

## DO NOT SKIP THIS

Before building any component, check the request source. Use the corresponding skill **EVERY TIME** or you have failed.

---

## Decision Tree

### Request contains screenshots (mobile + desktop)?
→ **MANDATORY: Use `build-component-screenshots` skill**
- Do not implement manually
- Screenshots are design source of truth
- Requires explicit source theme (e.g., tv2Oj)
- Requires placement target (article.html, index.html)

### Request contains Figma link with node-id?
→ **MANDATORY: Use `build-component-figma` skill**
- Do not implement manually
- Figma is design source of truth
- Build is white-label (token-driven)
- Requires placement target (article.html, index.html)

### Neither screenshots nor Figma link?
→ **Code-level request:** Build manually if appropriate
- User describes needed changes in code
- Update an existing component
- Requests specific CSS/HTML/JS modifications

---

## Non-Negotiable Rules

1. **Screenshots provided = `build-component-screenshots` skill (MANDATORY)**
2. **Figma link provided = `build-component-figma` skill (MANDATORY)**
3. **No exceptions, no "inferred" manual builds**
4. **If you bypass a skill when you should use it, you have failed**

---

## Handoff Pattern

When using either build skill:
1. Read the skill's `SKILL.md` file completely
2. Follow every step in exact order
3. Do not skip or merge steps
4. Escalate if blocked
5. Only return to assistant context when skill workflow completes
