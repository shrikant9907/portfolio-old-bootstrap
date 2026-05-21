# Phase 3 Fix — Global Buttons and Product Detail Outside Click

**Updated:** 20 May 2026, 18:55 IST  
**Build:** `shrimo-verse-phase-3-global-buttons-overlay-fixed.zip`

---

## 1. What was wrong

The previous button sizing instruction was applied mainly around Product Gallery.  
It needed to apply across all screens/pages.

Also, product detail overlay needed to close when the user clicks outside the detail sheet.

---

## 2. Fixed in code

### Actual code files updated

```txt
css/portfolio-style.css
js/portfolio-scripts.js
```

### Outside click behavior

Product detail now closes when:

- user clicks X button,
- user clicks blurred backdrop,
- user clicks outside the detail sheet,
- user presses Escape.

### Global button system

Button sizing is now globally refined for:

- Mission Entry Start button,
- Mission scene action buttons,
- HUD icon buttons,
- Previous/next arrows,
- Guide buttons,
- Zoom controls,
- Product buttons,
- Product detail overlay buttons,
- Launch Dock buttons,
- Mobile dock-related buttons.

---

## 3. Global button rule

Buttons should be:

```txt
small
readable
medium radius
properly placed
not wasting screen space
not overpowering the scene
```

---

## 4. Acceptance criteria

- [ ] Product detail closes on outside/backdrop click.
- [ ] Product detail closes on Escape.
- [ ] Product detail close button works.
- [ ] Buttons are smaller globally, not only in Product Gallery.
- [ ] Text remains readable.
- [ ] Buttons do not create clutter on mobile.
- [ ] Buttons do not take too much desktop space.
