# Step 42 — Final Visible Controls Rail

**Updated:** 20 May 2026, 22:55 IST  
**Build:** `shrimo-verse-controls-rail-visible-final.zip`

---

## Problem

The controls were not visible because `.hud-controls` stayed inside the header system and older header/mobile rules could still hide, constrain, or visually override it.

The browser could also keep older CSS because the filename stayed the same.

---

## Fix

### JavaScript

The actual `.hud-controls` element is moved into `<body>` at runtime:

```txt
header .hud-controls → body > .floating-hud-controls
```

This keeps existing event listeners because the same DOM node is moved, not cloned.

### CSS

Final CSS now targets:

```txt
body > .floating-hud-controls
```

This avoids header conflicts.

### Cache

`index.html` now loads:

```txt
css/portfolio-style.css?v=controls-rail-visible-final
js/portfolio-scripts.js?v=controls-rail-visible-final
```

This forces the browser to load the updated files.

---

## Final behavior

- Controls visible after Start.
- Bottom-right floating icons.
- No icon background.
- No icon border.
- Tooltip on hover/focus.
- Actual `.zoom-dock` left-center.
- Zoom has no background/border.

---

## Acceptance criteria

- [x] Controls appear after Start.
- [x] Controls are visible at bottom-right.
- [x] Controls are not inside the header visually.
- [x] Controls have no background.
- [x] Controls have hover tooltips.
- [x] Zoom dock is left-center.
- [x] CSS/JS are cache-busted.
