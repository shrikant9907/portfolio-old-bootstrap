# Step Contract — Proof Ring

**Step ID:** `06-proof-ring`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Product Gallery
Current State: Proof Ring
Next State: Client Signals
```

### Primary Trigger

```txt
Inspect proof or continue to Client Signals.
```

### Exit Transition

```txt
Proof markers dim; Client Signal dots appear.
```

---

## 2. Purpose

Build credibility with measurable signals.

### User Emotion

```txt
Trust, validation, confidence.
```

### Main Visual Focus

```txt
Proof signal markers and one active number.
```

---

## 3. Visible Elements

- Proof signal markers
- One active proof
- Number
- Short meaning

---

## 4. Hidden Elements

- Products
- Reviews
- Contact actions
- Technology details

---

## 5. User Interaction

### Primary Action

```txt
Inspect proof or continue to Client Signals.
```

### Secondary Actions

```txt
Next/previous proof.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Proof ring forms
- Number counts up once
- Active proof pulses

### User-Triggered Animation

- Proof select changes active marker
- Detail fades in
- Count-up does not repeat unnecessarily

### Exit Animation

```txt
Proof markers dim; Client Signal dots appear.
```

---

## 7. Connected Layers, Cards, and Objects

- Proof Data
- Proof Ring
- Count-up Motion
- Scene Navigation

---

## 8. Device Behavior

### Mobile 375px

- One proof focus
- Stack only if needed
- Readable number

### Tablet 768px

- Moderate ring or compact markers
- One active detail

### Desktop 1366px+

- Proof markers around core
- Not a dashboard grid

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

- Oversized stat cards
- Dashboard layout
- All metrics fight at once
- Count-up repeats constantly

---

## 12. Acceptance Criteria

- [ ] Proof is separate layer
- [ ] One active proof
- [ ] Numbers readable
- [ ] No dashboard/grid feeling

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Final Phase Completion

**Updated:** 20 May 2026, 19:45 IST

Phase 4 completed: proof signal ring, one focus, previous/next proof controls, no stats dashboard, mobile compact view.


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

## Transparent UI and Circular Controls

**Updated:** 20 May 2026, 20:55 IST

Rules:

- cards/panels use around 50% transparent black,
- no solid card backgrounds except Start button,
- step bullets must not have a heavy wrapper,
- zoom bar must not look like a card wrapper,
- icon controls must be circular,
- Exit control must let the user return to Mission Entry.


---

## Screenshot QA No Dotted Rings

**Updated:** 20 May 2026, 21:10 IST

Scene rule:

- no dotted background/orbit guide rings,
- no pseudo-element decorative rings,
- proof signal nodes must be circular,
- detail panels must not overlap,
- repeated scene/state readout should stay hidden.


---

## Phase 50 Mobile Scene Stability Fix

Mobile scene detail cards must use a centered bottom-sheet layout above the mobile dock. Do not use desktop side panels on mobile. Keep content compact and hide secondary long sections until the user opens full details.
