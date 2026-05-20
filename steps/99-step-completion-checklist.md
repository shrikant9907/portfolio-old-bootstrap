# Step Completion Checklist

**Purpose:** Use this before marking any Shrimo Verse step complete.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Universal completion chain

A step is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

---

## Planning

- [ ] Scene purpose is defined.
- [ ] User focus is defined.
- [ ] Visible elements are listed.
- [ ] Hidden elements are listed.
- [ ] Next action is clear.
- [ ] Animation trigger is defined.
- [ ] Mobile/tablet/desktop behavior is defined.

---

## Coding

- [ ] HTML structure supports the scene.
- [ ] CSS is in responsibility-based file.
- [ ] JS connects to one source of truth.
- [ ] No duplicate logic added.
- [ ] No patch stacking.

---

## Loading

- [ ] CSS file is imported.
- [ ] JS file is referenced.
- [ ] No missing file references.
- [ ] No duplicate script references.

---

## Wiring

- [ ] Buttons call real functions.
- [ ] Scene state updates visibly.
- [ ] Controls update active states.
- [ ] Animations trigger from real user actions.
- [ ] Data is pulled from source data files.

---

## Visibility

- [ ] User can see the feature.
- [ ] Feature is readable.
- [ ] Feature does not overlap core/HUD/dock.
- [ ] Feature uses correct black/cyan styling.
- [ ] Mobile view works first.

---

## Usability

- [ ] Tap/click works.
- [ ] Keyboard works where needed.
- [ ] Touch targets are 44px+ on mobile.
- [ ] Escape closes panels.
- [ ] Guide/settings do not compete.

---

## Validation

- [ ] Mobile 375px checked.
- [ ] Tablet 768px checked.
- [ ] Desktop 1366px checked.
- [ ] JS syntax checked.
- [ ] CSS references checked.
- [ ] Duplicate IDs checked.

---

## Documentation

- [ ] Matching `steps/` file updated.
- [ ] `about-project.md` updated if behavior changed.
- [ ] `CHANGELOG.md` updated.
- [ ] `TESTING_CHECKLIST.md` updated if QA changed.
