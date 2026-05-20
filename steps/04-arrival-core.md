# Step 04 — Arrival Core

**Purpose:** Introduce the user to the universe center.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

Arrival Core is the first real Shrimo Verse state.

User should understand:

- this is Shrimo Verse,
- SV is the central core,
- they can explore the universe step by step.

---

## Visible content

- fixed SV core,
- short scene heading,
- short supporting text,
- minimal HUD,
- bottom step navigation,
- optional first guide if not seen.

---

## Hidden content

Do not show:

- all skill details,
- project panels,
- proof cards,
- reviews,
- launch contact actions.

---

## SV core rules

- fixed center,
- protected safe zone,
- black glass body,
- cyan outer ring,
- subtle breathing glow,
- never covered by guide/settings/panels.

---

## Animation

### On arrival

- SV core pulses once.
- Scene label fades in.
- HUD reveals softly.
- Orbit remains calm.

### On Next

Transition to Technology Orbit:

- core stays fixed,
- skill orbit becomes active,
- scene copy fades,
- skill particles reveal.

---

## Device behavior

### Mobile

- Core 60–72px.
- Text above or below core, not covering it.
- Bottom dock safe.
- Guide appears above dock.

### Tablet

- Slightly larger core.
- More spacing around text.

### Desktop

- Core around 90–110px.
- More ambient orbit depth.
- Transparent HUD.

---

## Completion checklist

- [ ] SV core is fixed and visible.
- [ ] No content overlaps the core.
- [ ] User understands where to go next.
- [ ] Guide does not block the core.
- [ ] Navigation to Technology Orbit works.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Arrival Core
Previous: Launch Sequence
Next: Technology Orbit
Primary Trigger: Launch timeline completes, or user selects Core/Home.
```

## Connected Layers / Cards / Objects

Connected layers:

- SV Core
- Scene Caption
- HUD
- Guide Controller

Card/panel rule:

```txt
No cards. Only short identity message and optional guide.
```

## Animation by Device

### Mobile 375px

```txt
Core pulse once, short caption fades in, bottom dock appears.
```

### Tablet 768px

```txt
Core pulse, caption reveal, calm ambient orbit.
```

### Desktop 1366px+

```txt
Core pulse, HUD reveal, subtle ring rotation and depth atmosphere.
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

- Core covered
- Guide blocks core
- Long description visible
- Dashboard panel visible

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

