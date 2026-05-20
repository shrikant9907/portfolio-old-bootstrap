# CLAUDE.md — Shrimo Verse Instructions

**For Claude Code / Claude agents**  
**Last Updated:** 20 May 2026, 16:25 IST

---

## Before You Work

Read:

```txt
AI_AGENT_START_HERE.md
AGENTS.md
project-rules.md
about-project.md
CHANGELOG.md
steps/00-master-product-planning-system.md
steps/00-flow-transition-map.md
```

Do not edit files before reading those.

---

## Expected Claude Behavior

When asked to change this project:

1. Start with an audit.
2. Explain what files are relevant.
3. Identify root cause.
4. Avoid patch stacking.
5. Make the smallest clean structural change that preserves the product vision.
6. Update docs after code changes.
7. Keep `steps/` updated.

---

## Product Mindset

Shrimo Verse is a cinematic universe/product experience, not a website.

Do not make:

- website sections,
- dashboard cards,
- large bordered article panels,
- generic navbars,
- crowded controls,
- multiple panels fighting for attention.

Do make:

- one-focus-at-a-time scenes,
- mobile-first layout,
- cinematic black/cyan atmosphere,
- minimal HUD,
- clean guide/settings behavior,
- smooth scene transitions.

---

## Required Planning Before Major Work

Before coding, provide:

```txt
Audit findings
Files to keep
Files to remove or merge
Scene flow plan
Animation trigger plan
Mobile/tablet/desktop plan
QA checklist
```

---

## Mandatory Docs to Preserve

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
steps/
AGENTS.md
CLAUDE.md
GEMINI.md
AI_AGENT_START_HERE.md
```
