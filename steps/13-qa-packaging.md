# Step 13 — QA and Packaging

**Purpose:** Prevent broken builds from being called final.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Visual QA states

Check these before packaging.

### Mobile 375px

- Mission Entry
- Arrival Core
- Technology Orbit
- Product Gallery
- Launch Dock
- Guide open
- Settings open

### Tablet 768px

- Arrival Core
- Product Gallery
- Settings

### Desktop 1366px

- Mission Entry
- Arrival Core
- Technology Orbit
- Guide open
- Settings open
- Launch Dock

---

## Do not package if

- text is unreadable,
- controls overlap,
- panel has ugly internal scroll,
- SV core is covered,
- too many panels are visible,
- background covers content,
- mobile feels squeezed,
- desktop feels like dashboard,
- it looks like website layout.

---

## Code validation

Before ZIP:

- [ ] JS syntax passes.
- [ ] CSS imports exist.
- [ ] CSS braces are balanced.
- [ ] HTML local file references exist.
- [ ] No duplicate IDs.
- [ ] No duplicate scripts.
- [ ] No missing assets.
- [ ] No `.git`, `.github`, `.agents`, `.codex`, `node_modules`, backup folders.
- [ ] ZIP integrity passes.

---

## Required root files

Every ZIP must include:

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
steps/
```

---

## Honesty rule

Do not claim:

- real mobile testing unless done,
- Lighthouse scores unless measured,
- browser visual QA if browser automation failed.

Package validation is not the same as real-device QA.

---

# Expert Flow Management Refinement

**Updated:** 20 May 2026, 16:10 IST  
**Purpose:** Makes previous/next, device animation, connected layers, and failure risks explicit.

## Scene Identity

```txt
Scene: QA and Packaging
Previous: All build steps
Next: Final ZIP delivery
Primary Trigger: Before final package is created.
```

## Connected Layers / Cards / Objects

Connected layers:

- All files
- All docs
- All scenes
- All validation scripts

Card/panel rule:

```txt
Not applicable.
```

## Animation by Device

### Mobile 375px

```txt
Must validate mobile states visually or state honestly if not tested.
```

### Tablet 768px

```txt
Must validate tablet states visually or state honestly if not tested.
```

### Desktop 1366px+

```txt
Must validate desktop states visually or state honestly if not tested.
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

- Claiming visual testing without doing it
- Missing docs
- Duplicate IDs/scripts
- ZIP with .git/node_modules

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

