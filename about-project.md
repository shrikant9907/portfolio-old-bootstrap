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


## Recovered Cinematic Product Build

This build uses the older visually working universe interface as the product base and fixes the reported product bugs without replacing the app with a clean skeleton.

## Screen Contracts and Meaningful Changes

**Updated:** 20 May 2026, 17:05 IST

Shrimo Verse now uses screen contracts inside:

```txt
steps/screen-contracts/
```

These files are the source of truth for how each screen works.

Future changes must be meaningful and must connect to a screen contract, not chat-only planning.

## Phase 1 Start Flow Refinement

**Updated:** 20 May 2026, 17:55 IST

Phase 1 now defines the entry screen as part of the same universe background, not a separate hero screen. The Start action should feel like the user is beginning travel into the center of Shrimo Verse.

## Phase 1 Entry Background Only

**Updated:** 20 May 2026, 18:05 IST

The Mission Entry screen now keeps the same universe background but hides skill particles and inner journey content until the user clicks Start.

This keeps the first screen clean and prevents early clutter.

## Phase 2 Technology Orbit Update

**Updated:** 20 May 2026, 18:20 IST

Technology Orbit now has a stronger focused scan behavior. Skills/tools stay separate from Product Gallery, Proof Ring, Client Signals, and Launch Dock.

## Phase 2 Interaction Refinement

**Updated:** 20 May 2026, 18:25 IST

The initial guide no longer teaches obvious cursor movement. The ship itself demonstrates life by taking a small round after entry and returning to the cursor.

## Phase 3 Product Gallery

**Updated:** 20 May 2026, 18:45 IST

Product Gallery now works as a focused product mission layer with Challenge, Solution, Stack, and Result for each product. It stays separate from the Technology Orbit.

## Phase 3 Product Gallery Responsive Focus

**Updated:** 20 May 2026, 18:20 IST

Product Gallery now separates quick browsing from deep reading. On mobile, full details open only when requested through a slide-up overlay with blur and navigation.

## Global Button and Overlay Fix

**Updated:** 20 May 2026, 18:55 IST

Button sizing/placement is now treated as a global interface rule across Shrimo Verse, not a single Product Gallery fix. Product detail overlay now closes through outside click/backdrop click.

## Final All Phases Complete

**Updated:** 20 May 2026, 19:45 IST

Shrimo Verse now has the complete planned journey from entry to final contact. Proof Ring, Client Signals, and Launch Dock are implemented as separate focused layers after Product Gallery.

## Realistic Universe Background System

**Updated:** 20 May 2026, 20:05 IST

Shrimo Verse now uses a realistic black universe background instead of artificial ring-style background decoration. The SV core stays fixed and all background motion happens behind it.

## Pure Black Starfield Background

**Updated:** 20 May 2026, 20:35 IST

Shrimo Verse now uses a pure black starfield universe: no clouds, no gradients, and no decorative rings. The effect is cleaner and more focused on star depth and motion.

## Transparent UI and Circular Controls

**Updated:** 20 May 2026, 20:55 IST

Shrimo Verse now uses transparent cinematic overlays instead of solid cards. Controls are circular and an Exit button is available after entering.

## Screenshot QA No Dotted Rings

**Updated:** 20 May 2026, 21:10 IST

The universe UI now avoids decorative dotted rings completely. Proof signals are circular and detail panels are cleaner.

## Bottom-Right Vertical HUD Controls

**Updated:** 20 May 2026, 21:25 IST

Shrimo Verse now places the main icon controls as a bottom-right vertical rail, making the top-right area cleaner and the control system more game-like.

## Top-Right Controls Visibility Fix

**Updated:** 20 May 2026, 21:40 IST

Shrimo Verse controls now stay visible at the top-right across desktop, tablet, and mobile.

## Bottom-Right Floating Icon Controls

**Updated:** 20 May 2026, 22:00 IST

Shrimo Verse now uses a bottom-right floating control rail inspired by lightweight social-app icon treatment: clean, background-free, and tooltip-driven.

## Left-Center Clean Zoom Control

**Updated:** 20 May 2026, 22:18 IST

Shrimo Verse now uses a clean left-side zoom control with no background wrapper, keeping the universe view lighter and less UI-heavy.

## Controls Visible and Actual Zoom Dock Fix

**Updated:** 20 May 2026, 22:35 IST

Shrimo Verse now uses the correct zoom selector `.zoom-dock` and keeps the main floating HUD controls visible at the bottom-right.
