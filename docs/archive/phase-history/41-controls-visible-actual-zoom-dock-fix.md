# Step 41 — Controls Visible and Actual Zoom Dock Left Fix

**Updated:** 20 May 2026, 22:35 IST  
**Build:** `shrimo-verse-controls-visible-zoom-left-fixed.zip`

---

## Issue found

The zoom UI in the project is named:

```txt
.zoom-dock
```

The previous update targeted:

```txt
.zoom-control
```

That is why the zoom bar stayed on the right side and the bottom-right floating controls were difficult to see.

---

## Fixed

### Controls

- Main HUD controls are visible.
- Controls are bottom-right.
- Controls are floating icons.
- Controls have no background.
- Controls have no border.
- Tooltips appear on hover/focus.

### Zoom

- Actual `.zoom-dock` moved to left-center.
- Zoom background removed.
- Zoom border removed.
- Zoom wrapper removed.

---

## Acceptance criteria

- [x] HUD controls are visible.
- [x] HUD controls are bottom-right floating icons.
- [x] HUD controls have hover tooltips.
- [x] Zoom dock is left-center.
- [x] Zoom dock has no background.
- [x] Zoom dock has no border.
- [x] Works from mobile to desktop.
