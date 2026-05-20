# Step Contract — Launch Sequence

**Step ID:** `02-launch-sequence`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Mission Entry
Current State: Launch Sequence
Next State: Arrival Core
```

### Primary Trigger

```txt
Automatic after Mission Entry CTA.
```

### Exit Transition

```txt
Arrival Core appears with SV core fixed and HUD softly revealed.
```

---

## 2. Purpose

Create a cinematic bridge from entry into the living universe.

### User Emotion

```txt
Motion, acceleration, anticipation, entering a digital world.
```

### Main Visual Focus

```txt
Circular orbit expansion, star movement, SV core stabilizing.
```

---

## 3. Visible Elements

- Launch readout
- Expanding circular orbit
- Moving star field
- Cyan travel lines
- SV core stabilizing

---

## 4. Hidden Elements

- Guide
- Settings
- Detail panels
- Product panels
- Proof metrics
- Client reviews
- Contact actions

---

## 5. User Interaction

### Primary Action

```txt
Automatic after Mission Entry CTA.
```

### Secondary Actions

```txt
None during transition. User should not be distracted.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- CTA confirmation state carries into launch
- Entry content fades completely
- Universe atmosphere increases speed

### User-Triggered Animation

- 0ms: CTA confirms
- 100ms: entry content begins fading
- 300ms: circular orbit expands
- 600ms: star field creates movement
- 900ms: rocket acceleration feedback on desktop
- 1300ms: SV core locks visually
- 1800ms: orbit particles prepare
- 2200ms: Arrival Core activates

### Exit Animation

```txt
Arrival Core appears with SV core fixed and HUD softly revealed.
```

---

## 7. Connected Layers, Cards, and Objects

- Mission Entry Layer
- Universe Background
- SV Core
- Motion System
- Arrival Core Scene

---

## 8. Device Behavior

### Mobile 375px

- Simplified launch
- No rocket cursor
- No heavy particle burst
- Animation target under 2200ms
- No extra panels

### Tablet 768px

- Moderate orbit expansion
- Cyan travel lines allowed
- No heavy blur

### Desktop 1366px+

- Rocket flame/trail can react
- More star depth
- Circular motion stronger
- Still controlled and readable

---

## 9. Safe-Zone Rules

- SV core safe zone must stay protected.
- Top HUD must not cover scene title.
- Bottom dock/navigation must not cover CTA or panels.
- Guide/settings/detail must not fight for attention.
- Only one assist layer should be open at a time.

---

## 10. Content Limits

- Keep copy short.
- No article paragraphs.
- No dashboard panels.
- No excessive borders.
- No oversized headings.
- Medium border radius only for panels and controls.

---

## 11. Failure Risks

- Abrupt jump
- Long loader feeling
- Random spinning effects
- Guide/settings visible during launch
- Background changes into unrelated style

---

## 12. Acceptance Criteria

- [ ] Launch feels cinematic
- [ ] Total duration does not feel slow
- [ ] Background remains the same universe
- [ ] Arrival Core starts cleanly

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Phase 1 Implementation Status

**Updated:** 20 May 2026, 17:35 IST

This screen was included in Phase 1.

The implementation must now be checked against this file before further changes.  
Future changes should update this contract first, then code.


---

## Phase 1 Start Flow Refinement

**Updated:** 20 May 2026, 17:55 IST

This contract now includes the Start-flow refinement:

- Entry heading must be `Welcome to Shrimo Verse.`
- Entry CTA must be `Start`.
- Entry screen must use the same universe background as the inner journey.
- Text spacing must be tight and cinematic, not loose like a website hero.
- Desktop Start click must make the rocket feel like it is moving toward the center.
- Launch particles/stars must travel outward with speed.
- Mobile, tablet, and desktop behavior must stay separately planned.


---

## Phase 1 Entry Background Only Decision

**Updated:** 20 May 2026, 18:05 IST

Before Start:

- Show the animated universe background only.
- Do not show skill labels or technology particles.
- Do not show inner scene text, HUD, guide, products, proof, reviews, or Launch Dock.
- A subtle SV core/atmosphere may remain as part of the background.
- Skills/tools should begin appearing only after the user starts the journey and reaches Arrival Core / Technology Orbit.


---

## Realistic Universe Background System

**Updated:** 20 May 2026, 20:05 IST

The background for this scene must use the shared realistic black universe system.

Rules:

- black base,
- many stars,
- some blinking/shining stars,
- soft galaxy/dust clusters,
- no decorative background rings,
- desktop opposite-direction mouse parallax,
- SV core must not move,
- UI panels must not move with parallax,
- mobile uses reduced particle count.


---

## Pure Black Starfield Update

**Updated:** 20 May 2026, 20:35 IST

Background rules now require:

- pure black background,
- stars only,
- no clouds,
- no gradients,
- no decorative rings,
- stronger mouse-driven star motion on desktop,
- fixed SV core.
