# Step 11 — Guide and Settings

**Purpose:** Help users without blocking the universe.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Guide goal

Guided Flight teaches the user how to explore.

It should feel like a mission briefing, not a website onboarding modal.

---

## Guide steps

```txt
Pilot the ship
Inspect skills
Open details
Product gallery
Client signals
Zoom deeper
Return to Core
Launch Project
```

---

## Guide behavior

- appears once per session,
- uses sessionStorage,
- can be replayed,
- short text only,
- Back / Next / Finish,
- closes cleanly,
- does not block SV core.

Desktop:

- bottom-right.

Mobile:

- above bottom dock,
- no core overlap.

---

## Settings goal

Settings should control experience quality and help.

Settings may include:

- quality mode,
- motion mode,
- replay guide,
- return to core,
- reset experience.

Settings should not become a dashboard.

---

## Rules

- only one panel open at a time,
- settings closes guide if needed,
- guide closes settings if needed,
- Escape closes active panel,
- mobile uses bottom sheet,
- desktop uses compact panel.

---

## Completion checklist

- [ ] Guide appears once per session.
- [ ] Replay Guide works.
- [ ] Settings opens and closes cleanly.
- [ ] Guide/settings do not overlap core.
- [ ] Only one panel open at a time.
- [ ] Mobile panel does not hide dock.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: Guide and Settings
Previous: Available after Arrival Core
Next: Returns to active scene
Primary Trigger: Guide button, Settings button, first-launch guide session rule.
```

## Connected Layers / Cards / Objects

Connected layers:

- Guide Panel
- Settings Panel
- Session Storage
- Scene Controller

Card/panel rule:

```txt
Use compact briefing/sheet. Avoid large dashboard settings.
```

## Animation by Device

### Mobile 375px

```txt
Bottom sheet slides up above dock. Close/finish returns focus to active scene.
```

### Tablet 768px

```txt
Centered/side compact sheet, never covers core.
```

### Desktop 1366px+

```txt
Bottom-right briefing or compact settings panel with cyan focus state.
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

- Guide blocks core
- Settings becomes dashboard
- Multiple panels open
- Internal scrollbars ugly

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

