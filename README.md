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
