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
