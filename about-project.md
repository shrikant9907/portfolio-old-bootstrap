# About Project — Shrimo Verse

**Project:** Shrimo Verse  
**Current Build:** `shrimo-verse-clean-scene-system`  
**Updated:** 20 May 2026, 15:35 IST  
**Owner:** Shrikant Yadav / Shrimo Innovations

## Project vision

Shrimo Verse is a cinematic black/cyan interactive universe. It is a futuristic product/game/AI-style portfolio experience where a visitor enters, explores, inspects, and finally reaches a project launch path.

It must not be treated as a normal website, dashboard, Bootstrap portfolio, or article-like page.

## Core experience

```txt
Mission Entry
Launch Sequence
Arrival Core
Technology Orbit
Product Gallery
Proof Ring
Client Signals
Launch Dock
```

Each scene has one main focus, one short message, one clear next action, and only the controls required for that state.

## Current cleanup result

This build removed the earlier patch-stack problem. The previous project had many versioned CSS files and UI guard scripts layered over each other, which caused visual conflicts, duplicate controls, dashboard panels, excessive borders, and overlapping information.

The clean build now uses responsibility-based CSS and JavaScript.

## Design rules

- Main background: black / deep black.
- Main UI: cyan.
- Text: white, soft cyan, muted grey.
- Orange/yellow: only for rocket fire, active step bullet, lock-on, click burst, or launch emphasis.
- No normal website sections.
- No heavy bordered article cards.
- No dashboard panels in the main scene.
- One focus at a time.
- Mobile first, then tablet, then desktop.

## Current architecture

CSS:

```txt
css/portfolio-style.css
css/modules/01-tokens.css
css/modules/02-reset-base.css
css/modules/03-universe-background.css
css/modules/04-layout-shell.css
css/modules/05-hud-controls.css
css/modules/06-scenes.css
css/modules/07-orbit-system.css
css/modules/08-panels-drawers.css
css/modules/09-mobile-first.css
css/modules/10-motion-accessibility.css
```

JavaScript:

```txt
js/core/state.js
js/core/dom.js
js/core/events.js
js/data/scenes.js
js/data/skills.js
js/data/products.js
js/data/proof.js
js/data/reviews.js
js/controllers/app-controller.js
js/controllers/scene-controller.js
js/controllers/hud-controller.js
js/controllers/guide-controller.js
js/controllers/settings-controller.js
js/controllers/orbit-controller.js
js/controllers/launch-controller.js
js/effects/motion.js
js/effects/performance.js
js/effects/gestures.js
js/effects/starfield.js
js/cursor-rocket.js
```

## Future work

Future work should improve one scene at a time, with visual verification after every scene. Do not stack new override files. Do not call a feature complete unless it is planned, coded, loaded, wired, visible, usable, validated, and documented.


---

## Rocket Cursor Fix Note

Updated on: 20 May 2026

The desktop rocket cursor is part of the stable Shrimo Verse identity. It must work from the Mission Entry screen on desktop/fine-pointer devices, must stay above the entry gate/HUD layers, and must remain disabled on mobile/touch devices. Future UI cleanup must not remove or hide this cursor accidentally.

---


## Mandatory Steps Folder

**Updated:** 20 May 2026, 15:40 IST

Every future ZIP must include the root `steps/` folder.

The `steps/` folder contains the planned scene-by-scene system for Shrimo Verse:

1. Mission Entry
2. Launch Sequence
3. Arrival Core
4. Technology Orbit
5. Product Gallery
6. Proof Ring
7. Client Signals
8. Launch Dock

Each step file documents the purpose, visible content, hidden content, animation triggers, device behavior, and completion checklist.

This folder must not be removed.

## Master Product Planning System

**Updated:** 20 May 2026, 15:55 IST

The final refined planning system for Shrimo Verse is stored in:

```txt
steps/00-master-product-planning-system.md
```

This file defines the product strategy, scene flow, UI impression, motion trigger plan, conversion strategy, mobile/tablet/desktop plan, architecture rules, documentation rules, and validation standard.

Future builds must read this file before coding.

## Steps Flow Management Upgrade

**Updated:** 20 May 2026, 16:10 IST

The project now has stronger scene planning inside `steps/`.

Each scene step documents how it connects to the previous/next scene and how animations should behave on mobile, tablet, and desktop.

This is required so future updates do not break flow, overlap controls, or create website-like layouts.

## AI Agent Entry System

**Updated:** 20 May 2026, 16:25 IST

Shrimo Verse now includes dedicated AI-agent instruction files so coding assistants can understand the project automatically.

Required files:

```txt
AI_AGENT_START_HERE.md
AGENTS.md
CLAUDE.md
GEMINI.md
```

These files tell AI tools to read project rules, about-project, changelog, and steps before editing.

## Final Working Project Package

**Updated:** 20 May 2026, 16:45 IST

The current final project package keeps the working static Shrimo Verse app together with:

- mandatory project rules,
- full about-project guide,
- preserved changelog memory,
- AI-agent entry files,
- complete scene planning in `steps/`,
- final validation record in `FINAL_PROJECT_CHECK.md`.
