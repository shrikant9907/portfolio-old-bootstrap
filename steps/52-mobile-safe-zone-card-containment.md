# Step 52 — Mobile Safe Zone and Card Containment Fix

**Updated:** 21 May 2026, 02:40 IST  
**Build:** `shrimo-verse-phase-52-mobile-safe-zone-fix.zip`

---

## Goal

Fix the remaining mobile problems identified from the screenshots.

The main rule is:

> No mobile scene control, card, or button should hide/crop under the bottom navigation.

---

## Issues fixed

1. Product Gallery buttons were going under the bottom dock.
2. Client Signal card was too tall and too close to the dock.
3. Launch Dock CTA area was not fully protected from the dock.
4. Arrival Core nodes still needed a stronger no-node radius around the SV core.
5. Product / Proof / Client / Launch cards needed one consistent mobile bottom-sheet containment rule.
6. Tablet needed a separate containment guard so it does not behave like a broken mix of mobile and desktop.

---

## Fixes applied

### Global mobile safe zone

Added fixed mobile safe-area variables:

```css
--sv-mobile-dock-h
--sv-mobile-dock-gap
--sv-mobile-sheet-bottom
--sv-mobile-sheet-max
```

All mobile scene sheets now stop above the dock.

### Product Gallery

- Reduced content height.
- Kept buttons visible.
- Hid the heavy mission grid on mobile.
- Kept product actions above dock.

### Proof Ring

- Reduced panel height.
- Hid desktop side navigation on mobile.
- Clamped long text.

### Client Signals

- Converted to compact readable sheet.
- Clamped long review text.
- Kept next action above dock.

### Launch Dock

- Kept one primary CTA visible.
- Reduced secondary actions.
- Removed duplicate / low-priority actions on mobile.
- Kept visible buttons above the bottom dock.

### Arrival Core

- Added precise mobile orbit offsets.
- Nodes now sit outside a protected radius around the SV core.

### Tablet/Desktop

- Added tablet containment guard.
- Added desktop panel height guard.

---

## Acceptance criteria

- [x] No Product Gallery button hides under the mobile bottom dock.
- [x] No Launch Dock button hides/crops under the mobile bottom dock.
- [x] Client Signal card remains readable and above dock.
- [x] Arrival Core nodes stay outside the SV core.
- [x] Tablet panels are contained.
- [x] Desktop panels do not touch bottom controls.
