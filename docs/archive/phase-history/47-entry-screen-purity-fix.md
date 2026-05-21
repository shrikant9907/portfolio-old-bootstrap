# Step 47 — Entry Screen Purity Fix

**Updated:** 21 May 2026, 00:18 IST  
**Build:** `shrimo-verse-phase-47-entry-screen-purity-fix.zip`

## Goal

Make the first screen feel like a clean launch moment.

Before Start, show only:
- black star background
- mission label
- welcome heading
- short supporting copy
- small hint chips
- Start button

## Issues fixed

1. Zoom control was visible before Start.
2. Exit icon was visible before Start.
3. Step navigation / progress elements leaked into the entry screen.
4. SV core and universe elements were faintly visible before Start.
5. Hint chips felt too heavy.
6. Entry screen showed overflow / scrollbar.

## Fixes applied

- Hide zoom, exit, HUD, bottom dock, step nav, tooltips, detail cards, orbit particles, universe plane, SV core, and orbit lines before Start.
- Keep those hidden only for the pure entry state.
- Reveal the cinematic universe again during the launch transition.
- Hide the entry progress line.
- Make hint chips smaller, lighter, and cleaner.
- Force viewport overflow hidden.

## Acceptance criteria

- [x] No zoom before Start.
- [x] No exit before Start.
- [x] No step nav before Start.
- [x] No core or orbit labels before Start.
- [x] Hint chips are lighter.
- [x] No entry-screen scrollbar.
