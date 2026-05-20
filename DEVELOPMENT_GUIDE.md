# Development Guide — Shrimo Verse

**Current Build:** `shrimo-verse-v1.3.1-visual-recovery`  
**Updated:** 20 May 2026

## Main Rule

This is not a normal website. Build it like a cinematic black/cyan universe product.

## Before Editing

Read:

1. `about-project.md`
2. `README.md`
3. `ProjectStructure.md`

## Local Test

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

## Design Rules

- Mobile first from 375px.
- One scene focus at a time.
- No article-style cards in the main view.
- No heavy borders everywhere.
- No orange/yellow selected states.
- Use black/cyan for UI, controls, active states, and selection.
- Keep Launch Dock simple and conversion-focused.
- Keep debug/status panels hidden from default cinematic view.

## Completion Rule

A feature is only complete if it is:

```txt
Planned → Coded → Loaded → Wired → Visible → Validated → Documented
```

## Visual QA Rule

Before packaging, inspect at least:

- 375px mobile arrival scene,
- 375px mobile Launch Dock,
- desktop arrival scene,
- guide open,
- settings open.

Do not ship if content overlaps, panels scroll internally in the main scene, or the screen feels like a website/dashboard.
