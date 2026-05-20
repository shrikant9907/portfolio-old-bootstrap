# Step Contract — Product Gallery

**Step ID:** `05-product-gallery`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Technology Orbit
Current State: Product Gallery
Next State: Proof Ring
```

### Primary Trigger

```txt
Inspect product or continue to Proof Ring.
```

### Exit Transition

```txt
Product scan closes; Proof Ring forms.
```

---

## 2. Purpose

Show real work as focused product missions.

### User Emotion

```txt
Understanding, confidence, practical trust.
```

### Main Visual Focus

```txt
One active product mission scan.
```

---

## 3. Visible Elements

- Product beacons
- One active product
- Short mission scan panel
- Challenge, Solution, Stack, Result, Action
- Previous/next controls

---

## 4. Hidden Elements

- Technology detail
- Proof metrics
- Reviews
- Contact dock unless action requested

---

## 5. User Interaction

### Primary Action

```txt
Inspect product or continue to Proof Ring.
```

### Secondary Actions

```txt
Next/previous product, product CTA.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Technology particles recede
- Product beacons appear
- First product beacon locks
- Scan panel fades/slides in

### User-Triggered Animation

- Product select: beacon pulses cyan
- Panel content transitions with fade/slide
- CTA hover/tap gets cyan launch feedback

### Exit Animation

```txt
Product scan closes; Proof Ring forms.
```

---

## 7. Connected Layers, Cards, and Objects

- Product Data
- Product Beacons
- Product Scan Panel
- CTA Actions

---

## 8. Device Behavior

### Mobile 375px

- One product at a time
- No grid
- Compact mission sheet
- Readable short copy

### Tablet 768px

- One active product plus small index
- No dashboard grid

### Desktop 1366px+

- Product beacons can spread in scene
- One focused product scan remains primary
- No fake screenshots

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

- Product grid on mobile
- Article-style panel
- Huge border radius
- Excessive padding
- Products mixed into technology orbit

---

## 12. Acceptance Criteria

- [ ] One product focus only
- [ ] Panel looks like scan, not website card
- [ ] Mobile no grid
- [ ] Transition from tech is clean

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Phase 3 Product Gallery Implementation

**Updated:** 20 May 2026, 18:45 IST

Product Gallery now uses a mission-scan format.

Required fields per product:

- Mission code
- Challenge
- Solution
- Stack
- Result
- Primary path
- Start similar mission path

Interaction rules:

- one product focus at a time,
- beacons select product,
- product scan arrows switch product,
- no grid,
- no fake screenshots,
- technology orbit dimmed in this scene.


---

## Phase 3 Responsive Focus Refinement

**Updated:** 20 May 2026, 18:20 IST

Product Gallery now has two states:

### Compact state

- title,
- short summary,
- product mission code,
- compact product nav,
- View Mission Details,
- small actions.

### Detail state

- full overlay/sheet,
- blurred backdrop,
- close/cross button,
- previous/next product arrows,
- Challenge / Solution / Stack / Result.

Mobile must not show full product details by default.
Desktop must use available space intentionally.


---

## Global Button and Overlay Fix

**Updated:** 20 May 2026, 18:55 IST

Button sizing/placement is a global UI rule, not only a Product Gallery rule.

All screens must use smaller, readable, medium-radius buttons that do not waste screen space.

Product detail overlay must close on:

- close button,
- blurred backdrop / outside click,
- Escape key.
