# Step 37 — Bottom-Right Vertical HUD Controls

**Updated:** 20 May 2026, 21:25 IST  
**Build:** `shrimo-verse-bottom-right-vertical-controls.zip`

---

## Request

Move the main controls from the top-right to the bottom-right as a vertical control rail.

---

## Fixed in code

Updated:

```txt
css/portfolio-style.css
```

---

## Behavior

### Desktop

- Brand remains top-left.
- Main HUD icon controls move to bottom-right.
- Controls are vertical.
- Controls remain circular.
- Zoom control is shifted left to avoid overlap.
- Step bullets remain bottom-center.

### Tablet

- Vertical rail remains compact at bottom-right.

### Mobile

- Main HUD controls stay hidden so they do not compete with the mobile bottom dock.
- Exit button remains accessible near top-right.

---

## Acceptance criteria

- [x] Main icon controls are no longer top-right.
- [x] Main icon controls appear bottom-right.
- [x] Controls are vertical.
- [x] Controls are circular.
- [x] Zoom control does not overlap the HUD rail.
- [x] Bottom step navigation remains centered.
