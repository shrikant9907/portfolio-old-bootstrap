# Shrimo Verse — Clean Scene System

> Start here: read `project-rules.md` first, then `about-project.md`.

**Current Build:** `shrimo-verse-clean-scene-system`  
**Updated:** 20 May 2026, 15:35 IST  
**Owner:** Shrikant Yadav / Shrimo Innovations

## What changed in this build

This build fixes the root cause of the broken UI by removing stacked version/recovery layers and rebuilding the visible experience as a clean scene-first system.

The project is still static HTML/CSS/JavaScript. It was not converted to React or any framework.

## Required root docs

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
ROOT_CLEANUP_AUDIT.md
```

## Local testing

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

## Scene flow

```txt
Mission Entry → Launch Sequence → Arrival Core → Technology Orbit → Product Gallery → Proof Ring → Client Signals → Launch Dock
```

## Controls

Desktop:

```txt
[ / ] = previous / next scene
1–6 = jump to scenes
Esc = close open panel
```

Mobile:

```txt
Bottom dock + swipe left/right
```

## Developer note

Do not add another visual recovery CSS file. If something breaks visually, audit the root cause and update the responsibility-based CSS/JS module that owns it.


## Rocket Cursor Fix Note

This build restores the desktop rocket cursor. It is enabled only on devices with a fine pointer/hover support and remains disabled on touch/mobile devices. Reduced-motion mode keeps the cursor visible but removes the trail/noisy flame motion.


## Mandatory Steps Folder

**Updated:** 20 May 2026, 15:40 IST

This project must always include the root `steps/` folder.

Before editing any scene or feature, read:

```txt
project-rules.md
about-project.md
steps/00-steps-index.md
```

The `steps/` folder contains pre-planned markdown files for each Shrimo Verse scene from start to end, including scene purpose, connection, animation triggers, and mobile/tablet/desktop behavior.

## Master Product Planning System

**Updated:** 20 May 2026, 15:55 IST

The refined expert-level product plan is now stored permanently at:

```txt
steps/00-master-product-planning-system.md
```

Before any future code or UI work, read in this order:

```txt
project-rules.md
about-project.md
steps/00-master-product-planning-system.md
steps/00-steps-index.md
```

This prevents patch stacking and forces product-first, scene-first, mobile-first planning.

## Steps Flow Management Upgrade

**Updated:** 20 May 2026, 16:10 IST

The `steps/` folder has been refined so each major step now includes:

- previous scene,
- next scene,
- trigger,
- connected layers/cards,
- mobile animation,
- tablet animation,
- desktop animation,
- transition rules,
- failure risks,
- completion test.

Read `steps/00-flow-transition-map.md` first, then the relevant step file.

## AI Agent Entry Files

**Updated:** 20 May 2026, 16:25 IST

This project now includes standard AI-agent instruction files so Codex, Claude, Gemini, Copilot, Cursor, and similar tools can start without manual explanation.

Root agent files:

```txt
AI_AGENT_START_HERE.md
AGENTS.md
CLAUDE.md
GEMINI.md
```

Additional assistant files:

```txt
.github/copilot-instructions.md
.cursor/rules/shrimo-verse.mdc
```

All agents should read `AI_AGENT_START_HERE.md` first.

## Final Working Project Package

**Updated:** 20 May 2026, 16:45 IST

This package includes the working Shrimo Verse app, required docs, AI-agent files, and the complete `steps/` planning system.

See:

```txt
FINAL_PROJECT_CHECK.md
```

for the final package validation record.


## Recovered Cinematic Product Build

This build recovers the visually fuller working Shrimo Verse app as the active product base and merges the mandatory docs, steps, and AI-agent files into it.

## Screen Contracts and Meaningful Changes

**Updated:** 20 May 2026, 17:05 IST

Planning must now live inside markdown files, not only chat.

Before changing any screen, read and update:

```txt
steps/screen-contracts/00-contract-index.md
steps/screen-contracts/<scene-file>.md
steps/15-meaningful-change-protocol.md
```

Every screen contract defines:

- previous state,
- current state,
- next state,
- visible elements,
- hidden elements,
- user interactions,
- animation plan,
- device behavior,
- safe zones,
- failure risks,
- acceptance criteria.

## Phase 1 Entry Launch Arrival Update

**Updated:** 20 May 2026, 17:35 IST

Phase 1 improves only:

```txt
Mission Entry → Launch Sequence → Arrival Core
```

See:

```txt
steps/16-phase-1-entry-launch-arrival.md
```

## Phase 1 Start Flow Refinement

**Updated:** 20 May 2026, 17:55 IST

The entry screen now follows the refined Phase 1 contract:

```txt
Heading: Welcome to Shrimo Verse.
CTA: Start
Background: same universe background as inner journey
Launch: rocket moves toward center on desktop, particles travel outward faster
```

See:

```txt
steps/17-phase-1-start-flow-refinement.md
```

## Phase 1 Entry Background Only

**Updated:** 20 May 2026, 18:05 IST

Before the user clicks **Start**, the first screen must show only the animated universe background and entry content.

Skills/tools/inner scene content are hidden until the journey starts.

See:

```txt
steps/18-phase-1-entry-background-only.md
```

## Phase 2 Technology Orbit Update

**Updated:** 20 May 2026, 18:20 IST

Phase 2 improves only:

```txt
Technology Orbit
```

See:

```txt
steps/19-phase-2-technology-orbit.md
```

## Phase 2 Interaction Refinement

**Updated:** 20 May 2026, 18:25 IST

Refined guide, rocket, mouse background motion, and zoom behavior.

See:

```txt
steps/20-phase-2-interaction-refinement.md
```

## Phase 3 Product Gallery

**Updated:** 20 May 2026, 18:45 IST

Phase 3 updates only the Product Gallery scene.

See:

```txt
steps/21-phase-3-product-gallery.md
```

## Phase 3 Product Gallery Responsive Focus

**Updated:** 20 May 2026, 18:20 IST

Product Gallery now uses compact default content and a focused detail overlay.

See:

```txt
steps/22-phase-3-product-gallery-responsive-focus.md
```

## Phase 3 Code Fix Product Overlay

**Updated:** 20 May 2026, 18:42 IST

The Product Gallery detail overlay is now implemented in actual code across:

```txt
index.html
css/portfolio-style.css
js/portfolio-scripts.js
```

See:

```txt
steps/23-phase-3-code-fix-product-overlay.md
```

## Global Button and Overlay Fix

**Updated:** 20 May 2026, 18:55 IST

Global button sizing and product detail outside-click close behavior are now applied in code.

See:

```txt
steps/24-phase-3-global-buttons-overlay-fix.md
```

## Interaction Fix — Zoom Touch Buttons

**Updated:** 20 May 2026, 19:15 IST

Background zoom, touch zoom, product detail outside close, and global button sizing were fixed at code level.

See:

```txt
steps/25-interaction-fix-zoom-touch-buttons.md
```

## SV Core Circle Protection

**Updated:** 20 May 2026, 19:25 IST

The central SV core is protected from global button styling and must always remain circular.

See:

```txt
steps/26-sv-core-circle-protection-fix.md
```

## Final All Phases Complete

**Updated:** 20 May 2026, 19:45 IST

All planned phases are implemented in one final package:

```txt
Phase 1: Mission Entry / Launch / Arrival
Phase 2: Technology Orbit
Phase 3: Product Gallery
Phase 4: Proof Ring
Phase 5: Client Signals
Phase 6: Launch Dock
Phase 7: Guide / Controls / Settings polish
Phase 8: Final QA / Handoff
```

Final package:

```txt
shrimo-verse-final-all-phases-complete.zip
```
