# Step 48 — Mobile Arrival Layout Polish

**Updated:** 21 May 2026, 00:38 IST  
**Build:** `shrimo-verse-phase-48-mobile-arrival-polish.zip`

---

## Issues checked from screenshot

1. Arrival Core heading was still too large on mobile.
2. The mission panel was too visually heavy in the top-left.
3. The left zoom control was too visible and competed with the content.
4. Arrival Core still showed too many technology labels on mobile.
5. The SV core was centered, but the surrounding nodes made the middle feel crowded.
6. Bottom dock looked correct and should remain the primary mobile controller.

---

## Fixes applied

### Mission panel

- Smaller mobile heading.
- Smaller copy.
- Narrower panel width.
- Better top-left spacing.

### Zoom

- Pushed closer to the left edge.
- Shortened and reduced opacity.
- Becomes clearer only on hover/focus.

### SV core

- Kept exact center.
- Slightly reduced size for breathing room.

### Arrival nodes

- Mobile Arrival Core now shows fewer nodes.
- Extra technology labels are hidden until later steps.

### Bottom dock

- Kept as primary mobile control.
- Slightly refined spacing and sizing.

---

## Acceptance criteria

- [x] Arrival heading no longer dominates the screen.
- [x] Zoom is no longer visually heavy.
- [x] SV core remains centered.
- [x] Arrival Core mobile has fewer visible labels.
- [x] Bottom dock remains primary.
