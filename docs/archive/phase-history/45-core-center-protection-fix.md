# Step 45 — SV Core Center Protection Fix

**Updated:** 20 May 2026, 23:50 IST  
**Build:** `shrimo-verse-phase-45-core-center-protected.zip`

---

## Problem

Phase 44 accidentally changed the `.universe-plane` layer from `absolute` behavior to `relative`.

That broke the coordinate system used by `.sv-core`.

The SV core is positioned like this:

```css
.sv-core {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

This only works correctly when the parent universe plane is a full-screen absolute layer.

---

## Fix

The universe plane is now protected:

```css
.universe-plane {
  position: absolute !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
}
```

The SV core is also protected:

```css
.sv-core {
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
}
```

---

## Non-negotiable future rule

Never apply generic layout rules to `.universe-plane`.

Wrong:

```css
.universe-plane {
  position: relative;
}
```

Correct:

```css
.universe-plane {
  position: absolute;
  inset: 0;
}
```

---

## Acceptance criteria

- [x] SV core appears at the exact center.
- [x] Universe plane remains full-screen absolute.
- [x] Particle layer still works.
- [x] Mobile core remains centered.
- [x] Global UI cleanup rules cannot move the core.
