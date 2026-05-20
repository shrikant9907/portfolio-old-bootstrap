# Step Contract — Launch Dock

**Step ID:** `08-launch-dock`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Client Signals
Current State: Launch Dock
Next State: None
```

### Primary Trigger

```txt
WhatsApp / Launch Project.
```

### Exit Transition

```txt
No next scene. Auto Flight stops here.
```

---

## 2. Purpose

Convert the visitor into contact/project conversation.

### User Emotion

```txt
Ready, decisive, confident.
```

### Main Visual Focus

```txt
WhatsApp primary CTA as final launch action.
```

---

## 3. Visible Elements

- Final launch message
- WhatsApp primary CTA
- Call and Email secondary
- LinkedIn/GitHub/Shrimo/Digital Profile tertiary
- Short confidence line

---

## 4. Hidden Elements

- Technology orbit
- Product gallery
- Proof ring
- Review cards

---

## 5. User Interaction

### Primary Action

```txt
WhatsApp / Launch Project.
```

### Secondary Actions

```txt
Call, email, social/profile links.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Launch beacon activates
- WhatsApp CTA glows once
- Secondary actions reveal softly

### User-Triggered Animation

- CTA tap/click creates cyan ripple
- Optional haptic on supported mobile
- Link opens

### Exit Animation

```txt
No next scene. Auto Flight stops here.
```

---

## 7. Connected Layers, Cards, and Objects

- Contact Data
- WhatsApp Link
- Secondary Contact Actions
- Launch Dock Scene

---

## 8. Device Behavior

### Mobile 375px

- WhatsApp clearly primary
- Large enough to tap
- Secondary actions smaller
- No footer layout

### Tablet 768px

- WhatsApp primary
- Call/email grouped
- Tertiary links quiet

### Desktop 1366px+

- Calm final destination
- Not crowded
- Not footer
- No article card

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

- WhatsApp not primary
- Footer layout
- Article card
- All CTAs same priority
- Auto Flight loops past dock

---

## 12. Acceptance Criteria

- [ ] WhatsApp primary
- [ ] Auto Flight stops here
- [ ] No article card
- [ ] Contact actions work

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Global Button and Overlay Fix

**Updated:** 20 May 2026, 18:55 IST

Button sizing/placement is a global UI rule, not only a Product Gallery rule.

All screens must use smaller, readable, medium-radius buttons that do not waste screen space.

Product detail overlay must close on:

- close button,
- blurred backdrop / outside click,
- Escape key.


---

## Final Phase Completion

**Updated:** 20 May 2026, 19:45 IST

Phase 6 completed: WhatsApp primary launch CTA, compact actions, not a footer, mobile tappable layout.


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
