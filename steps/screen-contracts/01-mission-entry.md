# Step Contract — Mission Entry

**Step ID:** `01-mission-entry`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: None
Current State: Mission Entry
Next State: Launch Sequence
```

### Primary Trigger

```txt
Click/tap Enter Shrimo Verse.
```

### Exit Transition

```txt
Move into Launch Sequence. Entry content must not remain visible behind the launch layer.
```

---

## 2. Purpose

Create curiosity and make the user choose to enter Shrimo Verse.

### User Emotion

```txt
Mystery, premium sci-fi confidence, controlled anticipation.
```

### Main Visual Focus

```txt
Mission Control entry message, circular black/cyan universe background, and one launch CTA.
```

---

## 3. Visible Elements

- Small label: SHRIMO VERSE MISSION CONTROL
- Heading: You are about to enter Shrimo Verse
- Short supporting text about piloting, scanning, inspecting, proof, and launch
- Hint chips: Move, Zoom, Inspect, Launch
- Primary CTA: Enter Shrimo Verse
- Desktop rocket cursor
- Circular black/cyan atmospheric background

---

## 4. Hidden Elements

- Main HUD controls
- Guide card
- Settings panel
- Technology details
- Product Gallery
- Proof Ring
- Client Signals
- Launch Dock contact actions
- Any dashboard/status/debug panels

---

## 5. User Interaction

### Primary Action

```txt
Click/tap Enter Shrimo Verse.
```

### Secondary Actions

```txt
Mouse move with rocket cursor on desktop only.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Circular cyan orbit breathes slowly
- Star dust drifts subtly
- CTA gets a calm cyan pulse
- Rocket cursor shows idle body on desktop

### User-Triggered Animation

- CTA click creates cyan energy pulse
- Entry text fades softly
- Circular orbit expands outward
- Rocket accelerates on desktop
- Star field stretches slightly
- SV core begins forming

### Exit Animation

```txt
Move into Launch Sequence. Entry content must not remain visible behind the launch layer.
```

---

## 7. Connected Layers, Cards, and Objects

- Universe Background
- Mission Entry Layer
- Rocket Cursor
- Launch Controller

---

## 8. Device Behavior

### Mobile 375px

- 375px base
- No rocket cursor
- Centered content
- One CTA
- No side panels
- No crowded hint chips
- Heading must fit without clipping
- CTA must remain reachable above browser bottom UI

### Tablet 768px

- Same focused composition
- More vertical breathing room
- Hint chips can sit in one row if space allows
- Still no HUD clutter

### Desktop 1366px+

- Rocket cursor active
- Circular black/cyan background depth stronger
- Heading fits 1366×768
- No website hero layout
- No large bordered card

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

- Looks like website hero
- CTA overlaps text
- Skip intro appears
- Projects/proof/contact visible too early
- Background is flat or different from universe style

---

## 12. Acceptance Criteria

- [ ] Entry feels impressive before any interaction
- [ ] One clear CTA only
- [ ] Desktop rocket cursor works
- [ ] Mobile has no rocket cursor
- [ ] Circular black/cyan atmosphere is visible
- [ ] No content overlap

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
