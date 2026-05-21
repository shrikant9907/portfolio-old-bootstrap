# Step 50 — Mobile Scene Stability Fix

**Updated:** 21 May 2026, 01:22 IST  
**Build:** `shrimo-verse-phase-50-mobile-scene-stability-fix.zip`

## Issues found from screenshots

1. Product Gallery card was too tall and behaved like a website card.
2. Proof Ring card was clipped on the left and overlapped the SV core.
3. Client Signals card was too narrow and text wrapped badly.
4. Launch Dock card was too tall and scroll-heavy.
5. Mobile still had too many competing layers.

## Fix

Mobile scene details now follow one bottom-sheet rule:

- centered above the mobile dock,
- safe left/right spacing,
- limited height,
- compact typography,
- hidden long secondary blocks,
- bottom dock remains the primary mobile control system.

## Acceptance criteria

- [x] Product Gallery is readable and compact on mobile.
- [x] Proof Ring card is not clipped.
- [x] Client Signals card is readable and not a narrow side strip.
- [x] Launch Dock fits above the bottom dock.
- [x] No scene card overlaps the dock.
- [x] No right-side floating controls on mobile.
