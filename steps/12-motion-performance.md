# Step 12 — Motion and Performance

**Purpose:** Keep the universe alive without making it unstable.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Motion style

Use motion only when it supports meaning.

Allowed:

- orbit motion,
- soft pulse,
- scan ring,
- fade + scale,
- zoom easing,
- rocket trail,
- proof count-up.

Avoid:

- chaotic particles,
- fast spinning UI,
- over-bouncy animation,
- random effects,
- animation that blocks reading.

---

## Timing

```txt
Hover: 160–220ms
Tooltip open: 300–420ms
Entry reveal: 800–1200ms
Universe entry: max 2400ms
Zoom movement: 280–360ms
Guide step reveal: 400–600ms
```

---

## Performance modes

Use:

```txt
Essential
Balanced
Cinematic
```

Essential:

- fewer particles,
- less glow,
- reduced motion,
- best for low-end mobile.

Balanced:

- default,
- moderate effects,
- stable on most devices.

Cinematic:

- richer depth,
- desktop/high-end focus.

---

## Device behavior

Mobile:

- fewer particles,
- 30fps-friendly,
- no rocket cursor,
- simple transitions if needed.

Tablet:

- moderate particles,
- touch remains primary.

Desktop:

- fuller scene depth,
- rocket cursor,
- hover enhancements.

---

## Reduced motion

If reduced motion is requested:

- stop orbit animation,
- remove cursor trail,
- simplify transitions,
- keep all content available.

---

## Completion checklist

- [ ] Motion supports the scene purpose.
- [ ] Reduced motion works.
- [ ] Animation pauses when tab hidden.
- [ ] Mobile particle count is reduced.
- [ ] No heavy WebGL dependency required for stable build.
- [ ] No console errors.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Motion and Performance
Previous: Applies globally
Next: Applies globally
Primary Trigger: Scene transitions, hover/tap, quality mode changes, reduced motion preference.
```

## Connected Layers / Cards / Objects

Connected layers:

- Motion System
- Performance Controller
- Device Capability
- Quality Mode

Card/panel rule:

```txt
No cards. This step controls behavior and visual load.
```

## Animation by Device

### Mobile 375px

```txt
Reduced particle count, short transition, no rocket cursor.
```

### Tablet 768px

```txt
Moderate particles and controlled motion.
```

### Desktop 1366px+

```txt
Fuller depth, hover scan, rocket cursor, cinematic mode if enabled.
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

- Performance mode stored but not applied
- Too many particles on mobile
- Random animation
- Reduced motion ignored

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

