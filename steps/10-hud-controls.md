# Step 10 — HUD Controls

**Purpose:** Define the command interface for exploring Shrimo Verse.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## HUD goal

Controls should feel like a space explorer console.

They must not feel like a website navbar.

---

## Desktop HUD

Left:

```txt
SV icon
Shrimo Verse
```

Right controls:

```txt
Guided Flight
Free Explore
Auto Flight
Pause Orbit
Return to Core
Replay Guide
Launch Project
```

Rules:

- SVG icons,
- tooltips,
- transparent/minimal,
- no thick navbar border,
- no duplicate buttons,
- no crowded text buttons.

---

## Mobile dock

Suggested:

```txt
Guide
Explore
Auto
Core
Launch
Settings
```

Rules:

- bottom reachable,
- 44px+ targets,
- no cramped 7-button row,
- no overlap with bottom sheet,
- no rocket cursor.

---

## Bottom step navigation

Desktop:

```txt
Previous arrow
Step bullets
Next arrow
```

Bottom offset:

```css
bottom: 10px;
```

Steps:

```txt
Arrival Core
Technology Orbit
Product Gallery
Proof Ring
Client Signals
Launch Dock
```

---

## Control interactions

Tap/click:

- cyan ripple,
- optional haptic,
- active state updates.

Hover desktop:

- cyan glow,
- tooltip appears,
- rocket cursor can react.

Keyboard:

- Enter/Space activates,
- Escape closes panels,
- Tab order stays logical.

---

## Completion checklist

- [ ] Controls are real buttons.
- [ ] Every icon button has aria-label.
- [ ] No duplicate controls.
- [ ] No duplicate IDs.
- [ ] Desktop HUD is not a navbar.
- [ ] Mobile dock is thumb-friendly.
- [ ] Active scene state is visible.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: HUD Controls
Previous: Applies globally
Next: Applies globally
Primary Trigger: User taps/clicks HUD, bottom dock, or keyboard shortcut.
```

## Connected Layers / Cards / Objects

Connected layers:

- Scene Controller
- Guide Controller
- Settings Controller
- Launch Controller
- Gesture System

Card/panel rule:

```txt
No cards. HUD is compact command interface.
```

## Animation by Device

### Mobile 375px

```txt
Tap ripple, active control cyan state, dock remains thumb-reachable.
```

### Tablet 768px

```txt
Larger tap zones, tooltips optional.
```

### Desktop 1366px+

```txt
Hover glow, tooltip, rocket cursor reaction, active cyan state.
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

- Duplicate controls
- Website navbar look
- Crowded row
- Controls hide content

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
