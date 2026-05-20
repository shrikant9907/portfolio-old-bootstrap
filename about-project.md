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
