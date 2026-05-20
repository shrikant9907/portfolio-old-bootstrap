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
