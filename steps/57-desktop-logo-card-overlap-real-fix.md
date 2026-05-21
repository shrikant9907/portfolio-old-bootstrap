

# Step 57 — Desktop Logo / Card Overlap Real Fix

**Updated:** 21 May 2026, 11:24 IST  
**Build:** `shrimo-verse-phase-57-desktop-logo-card-overlap-real-fix.zip`

## Problems fixed

1. Particles/rocket objects still appeared inside the top-left logo area.
2. Guide overlay still overlapped the left mission panel.
3. Guide overlay still competed with Product, Proof, Client, and Launch cards.
4. Desktop scene cards needed stronger right-control-rail containment.

## Fixes applied

- Increased desktop/tablet logo safe-zone size.
- Added runtime safe-zone hiding for nodes, dots, and rocket cursor parts.
- Added reliable `body[data-scene]` syncing from stage zone.
- Forced guide overlay to the right card lane on Arrival/Technology.
- Suppressed guide overlay during Product/Proof/Client/Launch scenes.
- Pulled scene cards away from the right-side controls.

## Acceptance criteria

- [x] No moving particle/rocket appears in the logo area on desktop.
- [x] Guide overlay does not cover the left mission panel.
- [x] Guide overlay does not overlap scene cards.
- [x] Scene cards do not overlap side controls.
- [x] Mobile rules remain untouched.
