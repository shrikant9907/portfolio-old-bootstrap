# AGENTS.md — Shrimo Verse AI Coding Rules

**For:** Codex, OpenAI coding agents, Cursor agents, Copilot-style agents, and general AI development tools  
**Last Updated:** 20 May 2026, 16:25 IST

---

## Start Here

Read these files first:

```txt
AI_AGENT_START_HERE.md
project-rules.md
about-project.md
CHANGELOG.md
steps/00-master-product-planning-system.md
steps/00-flow-transition-map.md
steps/00-steps-index.md
```

---

## Project Identity

Shrimo Verse is a cinematic product/game/AI universe experience.

It is not a normal website.

Do not create dashboard layouts, article cards, Bootstrap-like sections, random patch files, or generic portfolio screens.

---

## Working Standard

Before code:

1. Audit existing structure.
2. Identify conflicting files/rules.
3. Plan scene behavior.
4. Plan mobile/tablet/desktop layout.
5. Plan animation triggers.
6. Then code.

After code:

1. Validate JS syntax.
2. Validate CSS imports.
3. Check duplicate IDs.
4. Check duplicate scripts.
5. Confirm root docs and `steps/` exist.
6. Update docs.

---

## No Patch Stacking

Do not create files like:

```txt
final-fix.css
visual-recovery.css
v1-5-patch.css
override-again.css
guard-again.js
```

Use responsibility-based files only.

---

## Architecture Direction

CSS should stay responsibility-based:

```txt
01-tokens.css
02-reset-base.css
03-universe-background.css
04-layout-shell.css
05-hud-controls.css
06-scenes.css
07-orbit-system.css
08-panels-drawers.css
09-mobile-first.css
10-motion-accessibility.css
```

JS should stay controller/state-based:

```txt
core/
data/
controllers/
effects/
```

One source of truth for scenes, controls, and content.

---

## Mandatory Product Flow

```txt
Mission Entry → Launch Sequence → Arrival Core → Technology Orbit → Product Gallery → Proof Ring → Client Signals → Launch Dock
```

Each scene must define previous, next, trigger, animation, visible elements, hidden elements, and device behavior.

---

## Color Rules

Main UI:

```txt
Black + Cyan
```

Orange/yellow only for:

```txt
rocket fire
active bullet
hover lock-on
click burst
launch emphasis
```

Do not use orange/yellow for normal selected UI.

---

## Completion Rule

A feature is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```
