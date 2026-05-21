# Phase 1 Refinement — Start Flow and Single Universe Background

**Updated:** 20 May 2026, 17:55 IST  
**Build:** `shrimo-verse-phase-1-start-flow-refined.zip`  
**Scope:** Mission Entry → Launch Sequence → Arrival Core

---

## 1. User-requested refinements

This update records and implements these Phase 1 decisions:

1. Entry heading text changed from `You are about to enter Shrimo Verse` to `Welcome to Shrimo Verse.`
2. Entry CTA text changed from `Enter Shrimo Verse` to `Start`.
3. Entry typography spacing reduced so lines do not feel too far apart.
4. Entry screen now sits over the same universe/stage background instead of feeling like a separate background.
5. Start click should feel like the rocket is moving toward the center of the screen.
6. Launch particles/stars should move outward faster so the user feels travel.
7. Device behavior must be managed separately for mobile, tablet, and desktop.

---

## 2. Updated screen contract

### Mission Entry

```txt
Previous: None
Current: Mission Entry
Next: Launch Sequence
Main CTA: Start
Heading: Welcome to Shrimo Verse.
Background: Same universe background as the inner stage
```

### Launch Sequence

```txt
Trigger: Start click/tap
Rocket behavior: Desktop rocket moves toward screen center
Particle behavior: Star particles streak outward faster
Background behavior: Same universe background continues through transition
```

### Arrival Core

```txt
Previous: Launch Sequence
Current: Arrival Core
Next: Technology Orbit
Requirement: Background must not feel different from entry
```

---

## 3. Device rules

### Mobile 375px

- No rocket cursor.
- Shorter heading spacing.
- Start button is compact but tappable.
- Launch transition is simpler and faster.
- No side panels.

### Tablet 768px

- Same background continuity.
- Moderate orbit expansion.
- CTA remains compact.
- Text spacing remains tight.

### Desktop 1366px+

- Rocket cursor moves toward center after Start.
- Flame/trail becomes more active.
- Particles streak faster outward.
- Previous/next arrows still appear after arrival.

---

## 4. Acceptance criteria

- [ ] Heading says `Welcome to Shrimo Verse.`
- [ ] Button says `Start`.
- [ ] Line spacing is tighter.
- [ ] Entry and inner screen use one continuous universe background.
- [ ] Desktop rocket moves toward center on Start.
- [ ] Travel particles feel faster during launch.
- [ ] Mobile/tablet/desktop rules remain documented.
