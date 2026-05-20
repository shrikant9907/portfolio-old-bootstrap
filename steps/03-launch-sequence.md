# Step 03 — Launch Sequence

**Purpose:** Make the transition into Shrimo Verse feel cinematic.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

The user should feel motion into the universe.

This scene connects:

```txt
Mission Entry → Arrival Core
```

---

## Trigger

Launch Sequence starts when:

- user clicks Enter Shrimo Verse,
- user presses Enter/Space on the launch CTA.

---

## Visible content

During launch:

- minimal launch readout,
- expanding orbit,
- moving star/particle depth,
- SV core becoming central,
- no large panels,
- no guide blocking the view.

---

## Animation timeline

Recommended max duration: 2400ms.

```txt
0ms      CTA confirms
100ms    Entry text fades
300ms    Orbit ring expands
500ms    Star depth increases
900ms    Rocket acceleration feedback
1300ms   SV core gains prominence
1800ms   Scene darkens around core
2200ms   Arrival Core becomes active
2400ms   HUD appears
```

---

## Motion style

Use:

- fade,
- scale,
- orbit expansion,
- cyan streaks,
- subtle star warp.

Avoid:

- page fade only,
- chaotic particles,
- long loading screen,
- fast spinning UI,
- oversized blobs.

---

## Device behavior

### Mobile

- Use simple transition.
- Reduce particles.
- No rocket cursor.
- Keep animation short and smooth.

### Tablet

- Slightly richer orbit expansion.
- Touch-first control remains.

### Desktop

- Rocket cursor reacts.
- More star depth allowed.
- HUD appears after arrival.

---

## Completion checklist

- [ ] Launch starts only after user action.
- [ ] No abrupt jump.
- [ ] Total launch time is not too long.
- [ ] Arrival Core activates automatically after launch.
- [ ] Guide appears only once per session after arrival.
- [ ] Reduced motion uses a simple direct transition.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Launch Sequence
Previous: Mission Entry
Next: Arrival Core
Primary Trigger: Mission Entry CTA confirmation.
```

## Connected Layers / Cards / Objects

Connected layers:

- Launch Controller
- Universe Background
- SV Core
- Motion System

Card/panel rule:

```txt
No cards or panels. This is a timed motion bridge.
```

## Animation by Device

### Mobile 375px

```txt
Simple fade/scale launch under 1800–2200ms. Reduce particles and avoid heavy blur.
```

### Tablet 768px

```txt
Moderate orbit expansion, cyan travel lines, core lock.
```

### Desktop 1366px+

```txt
Rocket acceleration feedback, star stretch, orbit expansion, SV core lock.
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

- Long loader feeling
- Abrupt jump
- Guide/settings showing during launch
- Chaotic particles

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



---

## Phase 47 Entry Screen Purity Fix

Before Start, the user must see only the cinematic entry layer. Do not leak zoom, exit, step navigation, bottom dock, SV core, orbit labels, or detail overlays into the entry state.
