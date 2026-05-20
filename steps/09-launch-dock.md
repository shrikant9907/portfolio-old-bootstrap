# Step 09 — Launch Dock

**Purpose:** Convert exploration into project conversation.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

Launch Dock is the final destination, replacing a normal footer.

The user should clearly know how to contact.

---

## Actions

```txt
WhatsApp
Call
Email
LinkedIn
GitHub
Shrimo
Digital Profile
```

---

## Priority

Primary:

- WhatsApp

Secondary:

- Call
- Email

Tertiary:

- LinkedIn
- GitHub
- Shrimo
- Digital Profile

---

## Visual style

- black glass,
- cyan beacons,
- cyan primary CTA,
- optional orange/yellow only for special launch emphasis,
- not a footer,
- not article layout,
- no repeated bordered chips.

---

## Mobile behavior

- WhatsApp full-width or clearly primary,
- Call/Email secondary,
- social/profile tertiary,
- no crowding,
- 44px+ tap targets.

---

## Desktop behavior

- WhatsApp remains primary,
- secondary actions visible but not equal,
- scene remains calm and decisive.

---

## Animation triggers

Scene enter:

- launch beacon activates,
- primary CTA glows once,
- support actions reveal softly.

CTA tap:

- cyan ripple,
- optional haptic,
- link opens.

Auto Flight end:

- stops here,
- guides user toward Launch Project.

---

## Completion checklist

- [ ] WhatsApp is visually primary.
- [ ] Contact links work.
- [ ] No footer layout.
- [ ] No article card.
- [ ] Mobile CTA is easy to tap.
- [ ] Auto Flight stops at Launch Dock.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Launch Dock
Previous: Client Signals
Next: None — final destination
Primary Trigger: Next scene from Client Signals, Auto Flight ending, Launch control.
```

## Connected Layers / Cards / Objects

Connected layers:

- WhatsApp CTA
- Call/Email Secondary Actions
- Social/Profile Links
- Conversion Data

Card/panel rule:

```txt
Not a footer and not an article card. Use final launch signal layout.
```

## Animation by Device

### Mobile 375px

```txt
Launch beacon activates, WhatsApp CTA glows once, secondary actions reveal softly.
```

### Tablet 768px

```txt
WhatsApp primary with secondary actions grouped nearby.
```

### Desktop 1366px+

```txt
Final dock settles, primary launch action glows, contact beacons stabilize.
```

## Transition Rules

Before entering this scene:

1. Close any panel that does not belong to this scene.
2. Preserve the SV core safe zone.
3. Update the active bottom step/navigation state.
4. Reveal only this scene’s main focus.
5. Keep unrelated scene layers hidden.

Before exiting this scene:

1. Close open details unless the next scene needs them.
2. Fade or recede current scene elements.
3. Trigger the next scene’s reveal motion.
4. Do not show both previous and next scene content at full attention.

## Failure Risks to Avoid

- Footer layout
- All CTAs same priority
- WhatsApp not primary
- Too many bordered chips

## Scene Completion Test

- [ ] Previous and next scene are clear.
- [ ] Trigger is real and wired.
- [ ] Mobile behavior is defined.
- [ ] Tablet behavior is defined.
- [ ] Desktop behavior is defined.
- [ ] Visible elements support one clear focus.
- [ ] Hidden elements are actually hidden.
- [ ] Animation supports the scene purpose.
- [ ] No website/card/dashboard feeling appears.

