# Step 08 — Client Signals

**Purpose:** Show real reviews as incoming transmissions.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

The user receives trust signals from real clients.

This is not a normal testimonial section.  
It should feel like intercepted client transmissions.

---

## Review rules

Use only real reviews.

Known review names from stable changelog:

```txt
Ram Dubey
Rajeev T.
Sergio W.
```

Do not invent fake reviews.

---

## Visible content

- 3 signal dots,
- one readable review at a time,
- client name,
- source/context if available,
- next/previous review control.

---

## Animation triggers

Scene enter:

- signal dots appear,
- first review receives “signal lock”.

Review select:

- active dot glows,
- quote fades/slides in,
- no large carousel grid.

Scene exit:

- signal fades,
- Launch Dock activates.

---

## Mobile behavior

- one review card/transmission,
- easy to read,
- swipe or tap to change,
- bottom sheet optional,
- no side panels.

---

## Desktop behavior

- signal stream can be ambient,
- one selected review remains primary,
- tooltip/panel must stay compact.

---

## Completion checklist

- [ ] Reviews are real.
- [ ] One review is primary.
- [ ] Client Signals are separate from Technology Orbit.
- [ ] Mobile review is readable.
- [ ] No testimonial grid.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Client Signals
Previous: Proof Ring
Next: Launch Dock
Primary Trigger: Next scene, Auto Flight, Guide step, or Client Signals nav.
```

## Connected Layers / Cards / Objects

Connected layers:

- Review Signal Dots
- Review Transmission
- Client Review Data

Card/panel rule:

```txt
One signal/review transmission at a time. Not testimonial grid.
```

## Animation by Device

### Mobile 375px

```txt
One review slides/fades in, swipe/tap changes signal.
```

### Tablet 768px

```txt
Signal dots plus one readable review card/panel.
```

### Desktop 1366px+

```txt
Incoming signal lock, active dot glow, quote fades/slides.
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

- Fake reviews
- Review grid
- Too much text
- Reviews mixed into technology orbit

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

