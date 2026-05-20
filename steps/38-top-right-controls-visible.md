# Step 38 — Top-Right Controls Visibility Fix

**Updated:** 20 May 2026, 21:40 IST  
**Build:** `shrimo-verse-top-right-controls-visible.zip`

---

## Issue

The previous update moved controls to a bottom-right vertical rail.  
The requested correction is that controls should be visible at the top-right from mobile to desktop.

---

## Fix

Updated:

```txt
css/portfolio-style.css
```

---

## Behavior

### Desktop

- Main HUD controls are visible top-right.
- Controls are horizontal.
- Controls remain circular.

### Tablet

- Main HUD controls stay top-right.
- Size is slightly compact.

### Mobile

- Main HUD controls stay top-right.
- Controls are compact.
- If space is tight, the control row can horizontally scroll.
- Controls are no longer hidden.

---

## Acceptance criteria

- [x] Controls are visible on desktop.
- [x] Controls are visible on tablet.
- [x] Controls are visible on mobile.
- [x] Controls are positioned top-right.
- [x] Controls remain circular.
- [x] Bottom-right vertical rail override is removed by final CSS.
