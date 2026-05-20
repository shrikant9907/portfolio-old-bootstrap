# Step 02 — Mission Entry

**Purpose:** Create curiosity before the user enters Shrimo Verse.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Scene goal

The visitor should feel:

> “Something futuristic is about to open.”

This is not a website hero section.  
It is Mission Control before launch.

---

## Visible content

Required visible content:

```txt
SHRIMO VERSE MISSION CONTROL
You are about to enter Shrimo Verse
Pilot the rocket, scan meaningful particles, inspect technologies, product signals, proof, client trust, and reach the Launch Dock when you are ready.
Move · Zoom · Inspect · Launch
Enter Shrimo Verse
```

---

## Hidden content

Do not show:

- projects,
- proof numbers,
- testimonials,
- contact buttons,
- large panels,
- dashboard controls,
- guide cards,
- settings.

---

## Layout

### Mobile 375px

- Center aligned.
- One heading.
- One short paragraph.
- Hint chips wrap cleanly.
- CTA full enough to tap easily.
- No rocket cursor.
- No side panels.

### Tablet 768px

- More breathing room.
- Still centered.
- Hint chips can sit in a row.
- Keep CTA prominent.

### Desktop 1366px+

- Rocket cursor active.
- Background can have more cinematic depth.
- CTA should feel like a launch control.
- No thick hero section border.

---

## Animation triggers

### On scene load

- Background dust slowly breathes.
- Hint chips softly reveal.
- CTA gets subtle cyan pulse.

### On hover desktop

- CTA glow increases.
- Rocket cursor flame reacts.

### On tap/click CTA

Triggers `Launch Sequence`.

Sequence:

1. Entry copy fades down.
2. Hint chips dissolve.
3. Orbit ring expands.
4. Rocket accelerates.
5. Launch readout appears.
6. App enters Launch Sequence.

---

## UX warnings

Do not add a “Skip Intro” button.  
Do not make the CTA overlap text.  
Do not make heading too large for 1366×768.  
Do not put content in article-style cards.

---

## Completion checklist

- [ ] Entry is visually calm and impressive.
- [ ] One CTA only.
- [ ] CTA works with click, Enter, and Space.
- [ ] Rocket cursor works on desktop entry screen.
- [ ] Rocket cursor is disabled on mobile.
- [ ] Entry does not show portfolio content too early.
- [ ] Transition into Launch Sequence is smooth.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Mission Entry
Previous: None
Next: Launch Sequence
Primary Trigger: User clicks/taps `Enter Shrimo Verse` or presses Enter/Space while CTA is focused.
```

## Connected Layers / Cards / Objects

Connected layers:

- Mission Entry Layer
- Universe Background
- Desktop Rocket Cursor
- Launch Controller

Card/panel rule:

```txt
No cards. Use one cinematic entry message and one CTA only.
```

## Animation by Device

### Mobile 375px

```txt
CTA tap ripple → entry text fade → direct launch transition. No rocket cursor, no heavy star burst.
```

### Tablet 768px

```txt
CTA pulse → entry content fades → subtle orbit ring expansion.
```

### Desktop 1366px+

```txt
CTA pulse → rocket flame accelerates → orbit expands → star dust stretches → launch readout begins.
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

- CTA overlaps heading
- Entry looks like website hero
- Skip intro appears
- Projects/proof/contact visible too early

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
