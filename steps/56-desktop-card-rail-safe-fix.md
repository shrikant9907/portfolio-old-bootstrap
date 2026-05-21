

# Step 56 — Desktop Card / Control Rail Safe Fix

**Updated:** 21 May 2026, 11:08 IST  
**Build:** `shrimo-verse-phase-56-desktop-card-rail-safe-fix.zip`

## Problems fixed

1. Technology particles were still visually passing behind the top-left ShrimoVerse logo.
2. Desktop scene cards overlapped the right-side floating control icons.
3. Guide card overlapped Product, Proof, Client, and Launch scene panels.
4. Desktop space was not reserved like a game/app control system.

## Fixes applied

- Added runtime brand safe-zone detection for DOM particles and dots.
- Hid nodes when they enter the top-left logo safe zone on desktop/tablet.
- Added a desktop right-control-rail safe area.
- Moved scene cards left of the right control rail.
- Hid the guide card automatically during Product, Proof, Client, and Launch scenes.
- Kept mobile rules untouched.

## Acceptance criteria

- [x] No technology particle/label appears behind the logo on desktop/tablet.
- [x] Cards do not overlap right-side control icons.
- [x] Guide card does not overlap scene cards.
- [x] Mobile safe-zone rules are not changed.
