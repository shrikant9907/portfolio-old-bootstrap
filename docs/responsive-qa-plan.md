# Shrimo Verse — Responsive QA Plan

**Updated:** 21 May 2026, 03:55 IST

## Mobile

Test widths:
- 360 × 800
- 390 × 844
- 430 × 932

Must pass:
- no controls under bottom dock,
- no clipped buttons,
- SV core centered,
- Arrival nodes outside core safe radius,
- Launch Dock CTA visible,
- Product/Proof/Review cards readable.

## Tablet

Test sizes:
- 768 × 1024
- 820 × 1180
- 1024 × 768
- 1024 × 1366

Likely fixes:
- compact right-side cards,
- smaller mission panel,
- reduced orbit radius,
- controls outside panel zone.

## Desktop

Test sizes:
- 1366 × 768
- 1440 × 900
- 1920 × 1080

Likely fixes:
- panel max-height and lower safe zone,
- right control rail balance,
- orbit label density,
- no page scroll,
- Launch Dock conversion clarity.

## Phase 55 Brand Safe Zone Fix

**Updated:** 21 May 2026, 10:45 IST

Added a permanent top-left brand safe zone. Moving nodes, dots, and orbit particles must not visually cross the brand area.

## Phase 56 Desktop Card / Control Rail Safe Fix

**Updated:** 21 May 2026, 11:08 IST

Desktop/tablet now reserve a right-side control rail safe area. Scene cards must stay left of that rail. Guide overlay is hidden during full scene-card states to prevent overlap.

Mobile behavior is intentionally unchanged.

## Phase 57 Desktop Logo / Card Overlap Real Fix

**Updated:** 21 May 2026, 11:24 IST

The desktop/tablet layout now uses stronger safe zones: top-left brand, left mission lane, center universe, right scene-panel lane, and far-right control rail. Guide overlay is suppressed during full scene-card states.

## Phase 58 Desktop Final Lane Stability Fix

**Updated:** 21 May 2026, 11:42 IST

Desktop and tablet now use hard lanes: top-left brand shield, left mission lane, center universe, right scene-card lane, and far-right icon rail. Guide overlay is suppressed when it would compete with scene cards or tooltips.

## Phase 59 Desktop Orbit Particles Restored

**Updated:** 21 May 2026, 11:58 IST

Desktop Arrival and Technology scenes now require visible orbiting technology particles around SV. Brand safe-zone protection must hide only objects entering the logo area, not the whole desktop orbit.
