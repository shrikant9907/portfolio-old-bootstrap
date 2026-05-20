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

---

## v1.3.2 Visual Stability Update — 20 May 2026

This update fixes screenshot-reported visual breakage from v1.3/v1.3.1. The build removes duplicated desktop HUD controls, restores readable scene brightness, simplifies the landing gate, removes warm/yellow leakage from normal UI states, prevents article-like panels from dominating the screen, and keeps the mobile HUD compact and thumb-friendly. The project remains black/cyan, scene-first, and mobile-first.

Important: this is a visual stabilization build. Real mobile-device testing and Lighthouse testing should still be completed before production publishing.

## v1.3.2 Visual Stability Reference

Implementation prompt: `SHRIMO_VERSE_V1_3_2_VISUAL_STABILITY_PROMPT.md`
