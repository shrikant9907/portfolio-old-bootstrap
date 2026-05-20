# Step Contract — Technology Orbit

**Step ID:** `04-technology-orbit`  
**Last Updated:** 20 May 2026, 17:05 IST  
**Status:** Original screen contract for this scene  
**Rule:** This step must be planned here before code changes. Do not rely on chat-only planning.

---

## 1. State Connection

```txt
Previous State: Arrival Core
Current State: Technology Orbit
Next State: Product Gallery
```

### Primary Trigger

```txt
Inspect a skill/tool or move to Product Gallery.
```

### Exit Transition

```txt
Skills fade/recede; product beacons activate separately.
```

---

## 2. Purpose

Show technical capability through moving orbit particles.

### User Emotion

```txt
Exploration, capability, technical depth.
```

### Main Visual Focus

```txt
Moving skills/tools around the fixed SV core.
```

---

## 3. Visible Elements

- SV core
- Orbit rings
- Moving technology particles
- Short scene label
- One selected skill/detail
- Previous/next controls

---

## 4. Hidden Elements

- Products
- Proof
- Reviews
- Contact actions
- Large product panels

---

## 5. User Interaction

### Primary Action

```txt
Inspect a skill/tool or move to Product Gallery.
```

### Secondary Actions

```txt
Zoom deeper, auto flight, guide, settings.
```

---

## 6. Animation Plan

### Entry / Idle Animation

- Skill particles reveal in orbit rings
- Orbit starts moving continuously
- First skill may softly lock as example

### User-Triggered Animation

- Hover: cyan-to-orange lock-on glow and scan ring
- Tap/click: scan ring opens and detail sheet appears
- Zoom: deep tools reveal gradually
- Exit: skill orbit recedes before Product Gallery appears

### Exit Animation

```txt
Skills fade/recede; product beacons activate separately.
```

---

## 7. Connected Layers, Cards, and Objects

- SV Core
- Orbit System
- Skill Data
- Zoom System
- Tooltip/Bottom Sheet

---

## 8. Device Behavior

### Mobile 375px

- Fewer particles
- Tap-first
- One selected skill at a time
- Detail opens as bottom sheet
- No hover dependency

### Tablet 768px

- Medium particle count
- Tap and hover supported
- Detail panel still compact

### Desktop 1366px+

- More particles
- Rocket cursor lock-on
- Scan ring on hover
- Previous/next arrows visible
- Labels readable

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

- Nothing moving around core
- Products/reviews/proof mixed into orbit
- Labels too long
- Too many particles causing overlap
- Detail covers core

---

## 12. Acceptance Criteria

- [ ] Many particles move around core
- [ ] Only skills/tools are in orbit
- [ ] Hover/tap feedback exists
- [ ] Mobile sheet works
- [ ] No overlap

---

## 13. Implementation Note

Before changing this scene, update this file first.

After changing this scene, verify:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```


---

## Phase 2 Implementation Status

**Updated:** 20 May 2026, 18:20 IST

Technology Orbit now has a stronger screen contract implementation:

- moving particles remain active around the SV core,
- more core/deep tools are visible on desktop/tablet,
- selected/hovered particles update a focused technology scan panel,
- tap/click opens detail tooltip or mobile bottom sheet,
- mobile uses compact bottom technology focus,
- desktop uses right-side technology focus,
- products/proof/reviews/contact remain hidden from this scene.

Future changes must preserve this separation.


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

## Screenshot QA No Dotted Rings

**Updated:** 20 May 2026, 21:10 IST

Scene rule:

- no dotted background/orbit guide rings,
- no pseudo-element decorative rings,
- proof signal nodes must be circular,
- detail panels must not overlap,
- repeated scene/state readout should stay hidden.


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
