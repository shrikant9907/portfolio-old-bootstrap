# Phase 1 Refinement — Entry Background Only

**Updated:** 20 May 2026, 18:05 IST  
**Build:** `shrimo-verse-phase-1-entry-background-only.zip`  
**Scope:** Mission Entry before Start

---

## Decision

Before the user clicks **Start**, the first screen should show only the animated universe background.

Do not show:

- skill labels,
- technology particles,
- product objects,
- proof signals,
- review signals,
- Launch Dock,
- HUD controls,
- inner scene text.

The first screen should feel clean and cinematic.

---

## Why

The previous update made the entry use the same universe background, which was correct, but skills became visible too early. That broke the scene contract.

Correct behavior:

```txt
Mission Entry = background atmosphere + welcome message + Start
After Start = launch transition
Arrival Core = SV core + skills/orbit can begin appearing
```

---

## Updated Contract

### Mission Entry

```txt
Visible:
- animated circular black/cyan background
- subtle SV core allowed
- Welcome to Shrimo Verse.
- short supporting text
- hint chips
- Start button

Hidden:
- skills/tools
- products
- proof
- reviews
- launch dock
- HUD
- guide/settings
```

### Launch Sequence

```txt
Skills remain hidden during launch.
Travel particles and background motion are visible.
Arrival Core reveals the inner scene after launch.
```

---

## Device Rules

### Mobile

- No skills before Start.
- No rocket cursor.
- Background animation only.
- Start CTA remains clear.

### Tablet

- No skills before Start.
- Same background atmosphere.

### Desktop

- No skills before Start.
- Rocket cursor may appear.
- Background/orbit atmosphere may move.
- Skills appear after Start/Arrival Core only.

---

## Acceptance Criteria

- [ ] No skill labels visible on the first screen.
- [ ] Animated background remains visible.
- [ ] Start screen is clean.
- [ ] Skills appear only after Start and journey entry.
- [ ] Mobile/tablet/desktop behavior documented.
