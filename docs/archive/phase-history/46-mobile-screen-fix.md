# Step 46 — Mobile Screen Fix

**Updated:** 20 May 2026, 23:59 IST  
**Build:** `shrimo-verse-phase-46-mobile-screen-fix.zip`

---

## Issues found in mobile screenshot

1. Right-side floating icons repeated the bottom dock controls.
2. Mission title was too large and broke badly.
3. Left zoom control was too heavy and too close to content.
4. Arrival Core had too many visible skill labels.
5. SV core needed more breathing room on mobile.
6. Bottom dock was the better mobile control system and should be primary.

---

## Fixes applied

### Mobile controls

- Right floating HUD rail hidden on mobile.
- Bottom dock kept as the primary journey control system.
- Exit stays top-right as the only system-level action.

### Mobile mission panel

- Title size reduced.
- Copy size reduced.
- Panel width controlled.
- Repeated buttons remain hidden.

### Mobile zoom

- Zoom moved closer to the left edge.
- Zoom height reduced.
- Icons and label reduced.
- No background/border.

### Arrival Core particles

- Arrival Core now shows fewer visible nodes on mobile.
- Extra nodes are hidden until later states.

### SV Core

- Core remains centered.
- Mobile size reduced slightly for breathing room.

---

## Acceptance criteria

- [x] No duplicate right-side controls on mobile.
- [x] Bottom dock remains primary on mobile.
- [x] Exit remains available top-right.
- [x] Mission title fits better.
- [x] Zoom is less intrusive.
- [x] Fewer Arrival Core labels appear on mobile.
- [x] SV core remains centered.
