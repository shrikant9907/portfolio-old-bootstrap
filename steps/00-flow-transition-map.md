# Shrimo Verse — Flow and Transition Map

**Purpose:** Defines previous/next flow, scene connection, animation handoff, and device behavior across the full product journey.  
**Last Updated:** 20 May 2026, 16:10 IST  
**Status:** Mandatory planning reference before coding scene transitions.

---

## 1. Global Flow

```txt
Mission Entry
  ↓
Launch Sequence
  ↓
Arrival Core
  ↓
Technology Orbit
  ↓
Product Gallery
  ↓
Proof Ring
  ↓
Client Signals
  ↓
Launch Dock
```

This flow must stay clear.  
Do not jump randomly between unrelated layers unless the user explicitly selects a control.

---

## 2. Scene Connection Matrix

| Step | Previous | Current Scene | Next | Primary Trigger | Transition Motion | Conversion Role |
|---|---|---|---|---|---|---|
| 01 | None | Mission Entry | Launch Sequence | Enter CTA / Enter / Space | CTA pulse, entry fade, orbit expansion | Curiosity and first commitment |
| 02 | Mission Entry | Launch Sequence | Arrival Core | Launch auto-complete | Star motion, core lock, HUD reveal | Creates memorable entry |
| 03 | Launch Sequence | Arrival Core | Technology Orbit | Next / Auto / Guide | Core pulse, orbit preparation | Orientation |
| 04 | Arrival Core | Technology Orbit | Product Gallery | Next / Auto / Guide | Skills reveal, lock-on scan, skills recede | Capability |
| 05 | Technology Orbit | Product Gallery | Proof Ring | Next / Auto / Guide | Product beacons appear, scan panel closes | Real work |
| 06 | Product Gallery | Proof Ring | Client Signals | Next / Auto / Guide | Proof ring forms, count-up, fade to signals | Credibility |
| 07 | Proof Ring | Client Signals | Launch Dock | Next / Auto / Guide | Signal lock, review slide, route to dock | Trust |
| 08 | Client Signals | Launch Dock | None | Next / Auto end | Launch beacon activates, CTA glow | Contact/conversion |

---

## 3. Universal Transition Rules

Every transition must follow this sequence:

```txt
1. Close active panel/sheet if not part of the next scene.
2. Fade or dim current scene objects.
3. Keep SV core protected.
4. Reveal the next scene’s main object.
5. Update bottom step navigation.
6. Update HUD active state.
7. Trigger scene-specific introduction animation.
8. Restore user interaction.
```

Do not transition by instantly replacing everything unless reduced motion is active.

---

## 4. Device-Specific Transition Rules

### Mobile 375px

- Use short transitions.
- Avoid heavy particles.
- No rocket cursor.
- Detail panels become bottom sheets.
- One active object only.
- Never cover bottom dock.

Recommended timing:

```txt
Scene transition: 260–420ms
Panel open: 280–360ms
Tap feedback: 120–220ms
```

### Tablet 768px

- Add more breathing space.
- Keep touch-first interaction.
- Use moderate orbit/panel motion.
- Avoid multiple simultaneous panels.

Recommended timing:

```txt
Scene transition: 360–520ms
Panel open: 320–420ms
```

### Desktop 1366px+

- Use richer depth and hover lock-on.
- Rocket cursor may react.
- Scene transitions may use more layered motion.
- Still do not expose dashboard UI.

Recommended timing:

```txt
Scene transition: 520–760ms
Panel open: 320–420ms
Hover lock-on: 160–220ms
```

---

## 5. Layer Connection Rules

### Technology Orbit

Connected to:

- SV core,
- orbit particles,
- skill detail panel,
- zoom system.

Must not connect directly to:

- product cards,
- reviews,
- proof metrics,
- contact actions.

### Product Gallery

Connected to:

- product beacons,
- one active product scan panel,
- product actions.

Must not be mixed with skill orbit.

### Proof Ring

Connected to:

- proof signal markers,
- one active proof detail,
- count-up animation.

Must not become a dashboard stats grid.

### Client Signals

Connected to:

- review signal dots,
- one active review transmission.

Must not become a testimonial carousel grid.

### Launch Dock

Connected to:

- WhatsApp primary CTA,
- secondary contact actions,
- final conversion message.

Must not look like a website footer.

---

## 6. Scene State Checklist

Before coding a transition, confirm:

- [ ] Previous scene is defined.
- [ ] Next scene is defined.
- [ ] Entry trigger is defined.
- [ ] Exit trigger is defined.
- [ ] Main visual object is defined.
- [ ] Hidden elements are defined.
- [ ] Mobile behavior is defined.
- [ ] Tablet behavior is defined.
- [ ] Desktop behavior is defined.
- [ ] Reduced motion fallback is defined.
- [ ] Conversion purpose is clear.
