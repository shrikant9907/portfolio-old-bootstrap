# Step 06 — Product Gallery

**Purpose:** Show products/projects as a separate focused layer.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

The user should inspect work without confusing it with technology orbit.

Product Gallery is not a card grid.  
It is a product scan layer.

---

## Products

```txt
Shrimo Innovations
Digiting Card
Photocopywala
Business Directory Platform
```

---

## Visible content

- product beacons/dots,
- one active product focus,
- short product scan panel,
- next/previous product controls if needed.

---

## Product panel structure

Keep content short:

```txt
Mission Name
Challenge
Solution
Stack
Result
Action
```

Do not use long paragraphs.

---

## Mobile behavior

- one product visible at a time,
- bottom sheet or focused panel,
- swipe/tap to move between products,
- no grid,
- no fake screenshot.

---

## Tablet behavior

- one active product + small product index.
- still avoid a full dashboard grid.

---

## Desktop behavior

- product beacons may spread around scene,
- one focused scan panel,
- hover/focus effects.

---

## Animation triggers

Scene enter:

- product beacons reveal.
- first product locks softly.

Product select:

- selected beacon pulses cyan.
- panel slides/fades in.
- optional launch highlight on CTA.

Scene exit:

- panel closes,
- beacons fade,
- Proof Ring activates.

---

## Completion checklist

- [ ] Products are not inside Technology Orbit.
- [ ] One focused product is visible.
- [ ] Product copy is short.
- [ ] Mobile does not show card grid.
- [ ] Panel does not overlap SV core or controls.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Product Gallery
Previous: Technology Orbit
Next: Proof Ring
Primary Trigger: Next scene, Auto Flight, Guide step, or Product Gallery nav.
```

## Connected Layers / Cards / Objects

Connected layers:

- Product Beacons
- Product Scan Panel
- Product Data
- Launch Action

Card/panel rule:

```txt
One product scan panel at a time. Avoid grid/card layout.
```

## Animation by Device

### Mobile 375px

```txt
Technology orbit recedes, one product appears, product sheet slides up.
```

### Tablet 768px

```txt
Product beacon row/index appears, focused product scan fades in.
```

### Desktop 1366px+

```txt
Product beacons activate separately from core orbit, focused product scan locks in.
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

- Product grid on mobile
- Fake screenshots
- Article-style large bordered panel
- Products orbiting core with skills

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

