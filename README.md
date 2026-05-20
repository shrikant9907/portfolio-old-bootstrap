# Shrimo Verse

> **New developer note:** Start by reading [`about-project.md`](./about-project.md).  
> It is the main project understanding file and must stay beside this README in every final ZIP.

## Current Build

**Build:** `shrimo-verse-v1.2-mobile-first-polish`  
**Documentation Updated:** 20 May 2026, 12:56 PM IST  
**Strategy:** Mobile-first cinematic portfolio experience  
**Owner:** Shrikant Yadav / Shrimo Innovations

## What This Project Is

Shrimo Verse is a static HTML/CSS/JavaScript portfolio that behaves like a sci-fi, guided, game-like product journey.

The intended visitor flow is:

```txt
Landing Gate → Initiate Launch → Arrival Core → Technology Orbit → Product Missions → Proof Signals → Client Transmissions → Launch Dock
```

The most important design rule:

> Build for 375px mobile first. Tablet and desktop should enhance the same journey, not replace it.

## v1.2 Focus

This version adds a final mobile-first polish layer:

- mobile-safe spacing and typography,
- tap-first feedback and ripple effects,
- optional haptic feedback where browsers support it,
- swipe left/right chapter navigation,
- device capability detection,
- better low-end mobile performance mode,
- stronger Product Mission, Proof Signal, and Client Transmission cards,
- WhatsApp-first Launch Dock conversion,
- updated developer and testing documentation.

## Required Root Documentation

These two files must always be in the project root:

```txt
README.md
about-project.md
```

`README.md` is for quick setup and testing.  
`about-project.md` explains the full idea, architecture, journey, controls, current version, and future plan.

## Local Testing

From the project root:

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

Do not test ES-module/CDN behavior by double-clicking the HTML file. Use a local server.

## Main Controls

```txt
1 → Arrival Core
2 → Technology Orbit
3 → Product Missions
4 → Proof Signals
5 → Client Transmissions
6 → Launch Dock
[ or ArrowLeft  → Previous Chapter
] or ArrowRight → Next Chapter
M → Mission Briefing
Q → Quality Mode
S → Settings
Esc → Close active panel/modal
```

On mobile:

```txt
Swipe left  → Next Chapter
Swipe right → Previous Chapter
Tap controls from the bottom dock
Use WhatsApp as the primary Launch Dock action
```

## Before Creating Any Future ZIP

1. Update `about-project.md`.
2. Update `README.md`.
3. Update `CHANGELOG.md`.
4. Keep both `README.md` and `about-project.md` at project root.
5. Exclude `.git`, `.github`, `.agents`, `.codex`, backups, and temporary folders.
6. Validate JavaScript syntax.
7. Check CSS imports.
8. Check local file references.
9. Check duplicate IDs and duplicate scripts.
10. Confirm ZIP integrity.
