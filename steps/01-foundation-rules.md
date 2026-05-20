# Step 01 — Foundation Rules

**Purpose:** Define the base system before any scene is built.  
**Last Updated:** 20 May 2026, 15:40 IST

---

## Product identity

Shrimo Verse is not a website.

It is a:

- cinematic interactive universe,
- game-like product journey,
- futuristic AI/tool interface,
- premium creative frontend showcase,
- guided portfolio experience.

Wrong direction:

- homepage sections,
- dashboard cards,
- article panels,
- Bootstrap portfolio,
- generic SaaS layout.

Correct direction:

- black/cyan universe,
- central SV core,
- orbit-based discovery,
- guided scene flow,
- minimal HUD,
- one focus at a time.

---

## Scene list

```txt
Mission Entry
Launch Sequence
Arrival Core
Technology Orbit
Product Gallery
Proof Ring
Client Signals
Launch Dock
```

---

## Layer system

The interface should be separated into stable layers:

```txt
App Shell
  Universe Background
  Mission Entry Layer
  Universe Stage Layer
  Orbit Layer
  Scene Caption Layer
  HUD Layer
  Detail Panel Layer
  Guide Layer
  Settings Layer
  Mobile Dock Layer
```

Each layer has one job.  
Do not let one layer become a dumping ground.

---

## Color rules

Main system:

```css
--black: #05070A;
--black-soft: #0B1016;
--surface: #111827;
--cyan: #22D3EE;
--cyan-bright: #67E8F9;
--cyan-soft: #A5F3FC;
--text: #F8FAFC;
--text-secondary: #B6C2CF;
--text-muted: #7C8A99;
--border-cyan: rgba(34, 211, 238, 0.22);
```

Yellow/orange only for:

- rocket fire,
- active step bullet,
- hover lock-on,
- click burst,
- launch emphasis.

Never use orange/yellow as the normal selected state.

---

## Mobile-first base

Build from 375px first.

Mobile must have:

- no horizontal scroll,
- no side panels,
- no rocket cursor,
- bottom controls,
- readable text,
- 44px+ tap targets,
- one focus at a time,
- bottom sheet for detail panels,
- no overlapping content.

Tablet enhances spacing.  
Desktop enhances cinematic depth.

---

## Feature completion

A feature is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

---

## Foundation validation

Before building scenes:

- [ ] `README.md` exists.
- [ ] `about-project.md` exists.
- [ ] `project-rules.md` exists.
- [ ] `CHANGELOG.md` exists.
- [ ] `steps/` folder exists.
- [ ] No obsolete patch stacking is being used as the main solution.
- [ ] CSS and JS structure has a clear responsibility map.
- [ ] Mobile-first rules are accepted before desktop enhancement.
