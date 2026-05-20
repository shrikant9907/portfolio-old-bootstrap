# Shrimo Verse Steps Index

**Project:** Shrimo Verse  
**Folder Purpose:** Permanent scene planning and implementation guide  
**Last Updated:** 20 May 2026, 15:40 IST  
**Status:** Mandatory in every future ZIP  

---

## Why this folder exists

The `steps/` folder protects the project from random patching.

Shrimo Verse must be built as a cinematic universe/product experience.  
Every screen must be planned before it is coded.

This folder explains:

1. what every scene does,
2. how every scene connects to the next,
3. what the user sees,
4. what stays hidden,
5. what animates,
6. what triggers the animation,
7. how it works on mobile, tablet, and desktop,
8. what must be tested before the step is complete.

---

## Mandatory step order

Do not build randomly.

Follow this order:

```txt
01 Foundation Rules
02 Mission Entry
03 Launch Sequence
04 Arrival Core
05 Technology Orbit
06 Product Gallery
07 Proof Ring
08 Client Signals
09 Launch Dock
10 HUD Controls
11 Guide and Settings
12 Motion and Performance
13 QA and Packaging
```

---

## Master planning file

Read this first before any future code change:

```txt
steps/00-master-product-planning-system.md
```

## Required files

```txt
steps/
  00-master-product-planning-system.md
  00-steps-index.md
  01-foundation-rules.md
  02-mission-entry.md
  03-launch-sequence.md
  04-arrival-core.md
  05-technology-orbit.md
  06-product-gallery.md
  07-proof-ring.md
  08-client-signals.md
  09-launch-dock.md
  10-hud-controls.md
  11-guide-settings.md
  12-motion-performance.md
  13-qa-packaging.md
  99-step-completion-checklist.md
```

---

## How to use this folder

Before editing a scene:

1. Read `project-rules.md`.
2. Read `about-project.md`.
3. Read the matching file from `steps/`.
4. Fix the root cause, not symptoms.
5. Build only one feature/scene at a time.
6. Validate mobile first, then tablet, then desktop.
7. Update the matching step file if behavior changes.

---

## Completion rule

A step is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

Do not mark a step complete because a file exists.

---

## Flow Management Upgrade

**Updated:** 20 May 2026, 16:10 IST

Each step file now includes an **Expert Flow Management Refinement** section.

That section defines:

- previous step,
- next step,
- primary trigger,
- connected layers/cards/objects,
- mobile animation behavior,
- tablet animation behavior,
- desktop animation behavior,
- transition rules,
- failure risks,
- scene completion test.

Future developers must keep these sections updated whenever scene behavior changes.



- `14-product-bug-recovery-plan.md` — tracks recovered product bugs and expected behavior after restoration.
