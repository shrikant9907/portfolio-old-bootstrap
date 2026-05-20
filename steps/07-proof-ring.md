# Step 07 — Proof Ring

**Purpose:** Build credibility through focused proof signals.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

The user sees proof that Shrikant/Shrimo can actually deliver.

This is not a stats section.  
It is a proof signal layer.

---

## Proof signals

```txt
12+ Years Experience
300+ Projects Delivered
100+ Developers Trained
Multiple Products Built
```

---

## Visible content

- proof signal nodes,
- one highlighted proof at a time,
- short explanation,
- optional count-up only when scene becomes active.

---

## Animation triggers

Scene enter:

- proof ring forms,
- numbers count up once,
- active proof glows.

Proof select:

- signal pulse,
- short detail opens,
- number remains stable after count-up.

Scene exit:

- proof ring fades,
- Client Signals activate.

---

## Mobile behavior

- proof signals stack or appear one at a time,
- number readable,
- tap for detail,
- no oversized stat cards.

---

## Desktop behavior

- ring markers around core,
- selected proof detail appears away from core,
- no dashboard stats grid.

---

## Completion checklist

- [ ] Proof is separate from tech/products.
- [ ] Numbers are readable.
- [ ] Count-up runs only once per activation.
- [ ] No large card grid.
- [ ] Detail does not overlap controls or core.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Proof Ring
Previous: Product Gallery
Next: Client Signals
Primary Trigger: Next scene, Auto Flight, Guide step, or Proof Ring nav.
```

## Connected Layers / Cards / Objects

Connected layers:

- Proof Signal Nodes
- Proof Detail
- Count-up Motion

Card/panel rule:

```txt
No dashboard statistic cards. Use signal nodes and one proof detail.
```

## Animation by Device

### Mobile 375px

```txt
One proof signal active, number fades/counts once, detail expands only on tap.
```

### Tablet 768px

```txt
2-column or ring-like proof signals with one active detail.
```

### Desktop 1366px+

```txt
Proof ring forms around core, active proof pulses, number count-up once.
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

- Oversized stat cards
- All numbers fighting for attention
- Proof mixed with products or tech
- Count-up repeats too often

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

