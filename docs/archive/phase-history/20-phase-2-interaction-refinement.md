# Phase 2 Interaction Refinement — Guide, Rocket Lap, Background Motion, Zoom

**Updated:** 20 May 2026, 18:25 IST  
**Build:** `shrimo-verse-phase-2-interaction-refined.zip`  
**Scope:** Arrival Core + Technology Orbit interaction refinement

---

## 1. Decisions implemented

### Guide / Tutorial

- Removed the first desktop tutorial step: `Pilot the ship`.
- Removed the guide text format `Step 1 of 7`.
- Guide label now reads `MISSION BRIEFING`.
- User can skip/close the guide from the guide card.
- Guide now starts with useful discovery, not basic cursor instruction.

### Rocket behavior after Start

After the user enters:

1. rocket moves toward the center during launch,
2. app reaches Arrival Core,
3. rocket performs one controlled circular lap around the center,
4. rocket returns to the user's real cursor location.

This makes the ship feel alive without making the tutorial explain it.

### Desktop background motion

After entry, desktop mouse movement subtly shifts the background aura/orbit layers.  
This gives a small motion response without distracting the user.

### Zoom interaction

Desktop:

- double-click stage/background to zoom in/out.

Mobile/tablet:

- two-finger pinch remains supported.
- two-finger double touch toggles zoom.

---

## 2. Device rules

### Mobile

- No rocket cursor.
- Guide is skippable.
- Two-finger pinch zoom works.
- Two-finger double touch toggles zoom.
- Background motion stays lightweight.

### Tablet

- Same as mobile for touch behavior.
- Guide remains compact.
- Zoom must not break layout.

### Desktop

- Rocket cursor performs one lap after entry.
- Mouse movement creates subtle background motion.
- Double-click zoom toggles universe zoom.
- Guide is skippable and starts with skill inspection.

---

## 3. Acceptance criteria

- [ ] No `Step 1 of 7` text appears.
- [ ] No `Pilot the ship` guide step appears.
- [ ] Guide can be skipped/closed.
- [ ] Rocket takes one round after entering and returns to cursor.
- [ ] Desktop mouse movement gives subtle background motion.
- [ ] Desktop double-click toggles zoom.
- [ ] Mobile two-finger zoom/pinch remains supported.
- [ ] No content overlap is introduced.
