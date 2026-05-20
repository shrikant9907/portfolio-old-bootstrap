# Step Contract — Client Signals

**Step ID:** `07-client-signals`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Proof Ring
Current State: Client Signals
Next State: Launch Dock
```

### Primary Trigger

```txt
Read signal or continue to Launch Dock.
```

### Exit Transition

```txt
Signals route toward Launch Dock.
```

---

## 2. Purpose

Build trust through real review transmissions.

### User Emotion

```txt
Human trust, reassurance, social proof.
```

### Main Visual Focus

```txt
One active client transmission.
```

---

## 3. Visible Elements

- Three signal dots
- One active review
- Client name
- Short quote
- Previous/next review control

---

## 4. Hidden Elements

- Technology orbit
- Product panels
- Proof details
- Launch Dock until final scene

---

## 5. User Interaction

### Primary Action

```txt
Read signal or continue to Launch Dock.
```

### Secondary Actions

```txt
Next/previous review.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Signal dots appear
- First review locks
- Transmission line fades in

### User-Triggered Animation

- Review select changes dot glow
- Quote fades/slides
- Mobile swipe changes review if enabled

### Exit Animation

```txt
Signals route toward Launch Dock.
```

---

## 7. Connected Layers, Cards, and Objects

- Review Data
- Client Signal Dots
- Review Panel
- Scene Navigation

---

## 8. Device Behavior

### Mobile 375px

- One review only
- Readable short text
- Swipe/tap navigation

### Tablet 768px

- Review panel compact
- Signal dots clear

### Desktop 1366px+

- Signal stream atmosphere
- One selected quote primary

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

- Fake reviews
- Testimonial grid
- Long paragraphs
- Reviews mixed into orbit

---

## 12. Acceptance Criteria

- [ ] Only real reviews
- [ ] One review focus
- [ ] No testimonial section look
- [ ] Readable on mobile

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```
