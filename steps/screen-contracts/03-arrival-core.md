# Step Contract — Arrival Core

**Step ID:** `03-arrival-core`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Launch Sequence
Current State: Arrival Core
Next State: Technology Orbit
```

### Primary Trigger

```txt
Continue to Technology Orbit.
```

### Exit Transition

```txt
Core remains fixed while skill particles reveal around it.
```

---

## 2. Purpose

Orient the user and establish SV as the universe center.

### User Emotion

```txt
Arrival, clarity, calm control.
```

### Main Visual Focus

```txt
Fixed SV core with subtle orbit movement.
```

---

## 3. Visible Elements

- Fixed SV core
- Moving background particles
- Short scene title
- Short supporting message
- Minimal HUD
- Desktop previous/next arrows
- Bottom step navigation
- First tutorial card after entry

---

## 4. Hidden Elements

- Products
- Proof
- Reviews
- Contact CTAs
- Large panels
- Long descriptions

---

## 5. User Interaction

### Primary Action

```txt
Continue to Technology Orbit.
```

### Secondary Actions

```txt
Guide, settings, return to core, auto flight.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- SV core pulses once
- Orbit particles begin moving softly
- HUD fades in
- Tutorial appears after arrival if not seen in session

### User-Triggered Animation

- Next arrow routes to Technology Orbit
- Guide button opens compact mission briefing
- Settings opens compact panel without covering core

### Exit Animation

```txt
Core remains fixed while skill particles reveal around it.
```

---

## 7. Connected Layers, Cards, and Objects

- SV Core
- Universe Background
- HUD Controls
- Guide Controller
- Scene Navigation

---

## 8. Device Behavior

### Mobile 375px

- SV core 60–72px
- Short text only
- Tutorial above bottom dock
- No content overlapping core
- Bottom dock remains reachable

### Tablet 768px

- Core slightly larger
- Guide compact
- More space around scene caption

### Desktop 1366px+

- SV core 90–110px
- Previous/next arrows visible
- Guide bottom-right or safe side zone
- Background particles moving

---

## 9. Safe-Zone Rules

- SV core safe zone must stay protected.
- Top HUD must not cover scene title.
- Bottom dock/navigation must not cover CTA or panels.
- Guide/settings/detail must not fight for attention.
- Only one assist layer should be open at a time.

---

## 10. Content Limits

- Keep copy short.
- No article paragraphs.
- No dashboard panels.
- No excessive borders.
- No oversized headings.
- Medium border radius only for panels and controls.

---

## 11. Failure Risks

- Core covered
- Tutorial missing at journey start
- Desktop previous/next missing
- Nothing moving around the core
- Large dashboard panel visible

---

## 12. Acceptance Criteria

- [ ] SV core is clearly the center
- [ ] Tutorial appears first time after entry
- [ ] Particles move around core
- [ ] Previous/next exists on desktop
- [ ] No overlap

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Phase 1 Implementation Status

**Updated:** 20 May 2026, 17:35 IST

This screen was included in Phase 1.

The implementation must now be checked against this file before further changes.  
Future changes should update this contract first, then code.


---

## Phase 1 Start Flow Refinement

**Updated:** 20 May 2026, 17:55 IST

This contract now includes the Start-flow refinement:

- Entry heading must be `Welcome to Shrimo Verse.`
- Entry CTA must be `Start`.
- Entry screen must use the same universe background as the inner journey.
- Text spacing must be tight and cinematic, not loose like a website hero.
- Desktop Start click must make the rocket feel like it is moving toward the center.
- Launch particles/stars must travel outward with speed.
- Mobile, tablet, and desktop behavior must stay separately planned.


---

## Phase 1 Entry Background Only Decision

**Updated:** 20 May 2026, 18:05 IST

Before Start:

- Show the animated universe background only.
- Do not show skill labels or technology particles.
- Do not show inner scene text, HUD, guide, products, proof, reviews, or Launch Dock.
- A subtle SV core/atmosphere may remain as part of the background.
- Skills/tools should begin appearing only after the user starts the journey and reaches Arrival Core / Technology Orbit.


---

## Phase 2 Interaction Refinement

**Updated:** 20 May 2026, 18:25 IST

Interaction decisions:

- Do not show `Step 1 of 7`.
- Do not start guide with `Pilot the ship`.
- Guide must be skippable/closable.
- Desktop rocket performs one controlled lap after entry, then returns to cursor.
- Desktop mouse movement creates subtle background motion.
- Desktop double-click toggles zoom.
- Touch devices keep pinch zoom; two-finger double touch may toggle zoom.


---

## SV Core Circle Protection

**Updated:** 20 May 2026, 19:25 IST

The SV core must always stay circular.

Global button styling must not affect:

- `.sv-core`
- `.entry-sv-mini`
- `.core-ring`
- `.core-inner`

If any UI-wide button rule is added later, it must exclude or override the SV core.


---

## Realistic Universe Background System

**Updated:** 20 May 2026, 20:05 IST

The background for this scene must use the shared realistic black universe system.

Rules:

- black base,
- many stars,
- some blinking/shining stars,
- soft galaxy/dust clusters,
- no decorative background rings,
- desktop opposite-direction mouse parallax,
- SV core must not move,
- UI panels must not move with parallax,
- mobile uses reduced particle count.


---

## Pure Black Starfield Update

**Updated:** 20 May 2026, 20:35 IST

Background rules now require:

- pure black background,
- stars only,
- no clouds,
- no gradients,
- no decorative rings,
- stronger mouse-driven star motion on desktop,
- fixed SV core.


---

## Transparent UI and Circular Controls

**Updated:** 20 May 2026, 20:55 IST

Rules:

- cards/panels use around 50% transparent black,
- no solid card backgrounds except Start button,
- step bullets must not have a heavy wrapper,
- zoom bar must not look like a card wrapper,
- icon controls must be circular,
- Exit control must let the user return to Mission Entry.


---

## Bottom-Right Vertical HUD Controls

**Updated:** 20 May 2026, 21:25 IST

The main HUD icon controls must sit as a bottom-right vertical rail on desktop/tablet.

Rules:

- no top-right control row,
- circular icon controls,
- vertical stack,
- zoom control must not overlap,
- bottom step navigation remains centered,
- mobile keeps bottom dock as primary controls.


---

## Top-Right Controls Visibility Fix

**Updated:** 20 May 2026, 21:40 IST

Controls must be visible at the top-right on desktop, tablet, and mobile.

Rules:

- do not hide HUD controls on mobile,
- no bottom-right vertical rail,
- circular buttons,
- compact top-right row,
- mobile can horizontally scroll the row if needed.


---

## Bottom-Right Floating Icon Controls

**Updated:** 20 May 2026, 22:00 IST

Main HUD controls must appear as floating bottom-right icons.

Rules:

- no top-right control row,
- no icon backgrounds,
- no borders,
- no control wrapper card,
- hover/focus shows tooltip,
- bottom-right vertical alignment,
- compact but readable on mobile/tablet/desktop.


---

## Left-Center Clean Zoom Control

**Updated:** 20 May 2026, 22:18 IST

Zoom control rules:

- zoom stays left-center,
- no background,
- no border,
- no wrapper,
- same placement behavior from mobile to desktop.


---

## Actual Zoom Dock and Visible Floating Controls

**Updated:** 20 May 2026, 22:35 IST

Rules:

- use `.zoom-dock` for zoom positioning,
- zoom dock stays left-center with no background/border,
- HUD controls stay visible as bottom-right floating icons,
- hover/focus tooltip appears,
- no wrapper card around controls.


---

## Final Visible Controls Rail

**Updated:** 20 May 2026, 22:55 IST

Rules:

- move `.hud-controls` out of header into body at runtime,
- target `body > .floating-hud-controls` for final control styling,
- controls are visible bottom-right after Start,
- no icon background/border,
- hover/focus tooltip required,
- actual `.zoom-dock` stays left-center.


---

## Phase 44 Visual Hierarchy Cleanup

**Updated:** 20 May 2026, 23:35 IST

Rules added:

- reduce control glow in normal state,
- keep only hover/active controls visually strong,
- mission panels should not repeat floating control actions,
- Arrival Core should be calm and less crowded,
- zoom must stay closer to the left edge and visually quiet,
- bottom navigation must stay clean,
- copyright should be subtle.


---

## Phase 45 Core Center Protection

**Updated:** 20 May 2026, 23:50 IST

Critical rule:

- `.universe-plane` must always remain `position: absolute; inset: 0;`.
- `.sv-core` must always remain centered with `left: 50%; top: 50%; transform: translate(-50%, -50%);`.
- Never use generic layout cleanup rules on `.universe-plane`.


---

## Phase 46 Mobile Screen Fix

**Updated:** 20 May 2026, 23:59 IST

Mobile rules:

- bottom dock is the primary mobile control system,
- hide duplicate right floating rail on mobile,
- keep Exit at top-right,
- keep mission title compact,
- keep zoom close to the left edge and subtle,
- reduce Arrival Core node count,
- keep SV core centered with breathing room.
