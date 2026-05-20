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
