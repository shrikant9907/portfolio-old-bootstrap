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
