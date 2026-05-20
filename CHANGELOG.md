# Changelog

## Phase 3 — Product Gallery Mission Scan — 20 May 2026, 18:45 IST

- Improved Product Gallery as a separate product mission layer.
- Added Challenge / Solution / Stack / Result structure to products.
- Added mission codes for products.
- Added product scan previous/next controls.
- Product beacons now update the focused product on hover/focus in Product Gallery.
- Technology orbit is dimmed more clearly during Product Gallery.
- Mobile Product Gallery stays one focused panel, not a grid.
- Added `steps/21-phase-3-product-gallery.md`.
- Updated Product Gallery screen contract and testing checklist.


# Changelog

## Phase 2 Interaction Refinement — 20 May 2026, 18:25 IST

- Removed `Pilot the ship` from the first guide flow.
- Removed `Step 1 of 7` style guide label and replaced it with `MISSION BRIEFING`.
- Added a skip/close action to the guide card.
- Added a desktop rocket lap after entry before returning to cursor.
- Added subtle desktop background motion based on mouse movement.
- Added desktop double-click zoom toggle.
- Kept touch pinch zoom and added two-finger double-touch zoom toggle.
- Added `steps/20-phase-2-interaction-refinement.md`.
- Updated relevant screen contracts and testing checklist.


# Changelog

## Phase 2 — Technology Orbit Update — 20 May 2026, 18:20 IST

- Improved Technology Orbit as its own focused scene.
- Added generated Technology Scan focus panel inside the orbit layer.
- Hover/focus now updates the technology scan panel.
- Click/tap still opens the detail tooltip/bottom sheet.
- Increased Technology Orbit movement speed slightly.
- More core/deep skill particles are available in Technology Orbit on desktop/tablet.
- Preserved separation from Product Gallery, Proof Ring, Client Signals, and Launch Dock.
- Added `steps/19-phase-2-technology-orbit.md`.
- Updated the Technology Orbit screen contract and testing checklist.


# Changelog

## Phase 1 Entry Background Only — 20 May 2026, 18:05 IST

- Hid skill labels and inner scene content before the user clicks Start.
- Kept the animated universe background visible on the first screen.
- Kept subtle SV core/background atmosphere allowed before Start.
- Skills/tools now appear only after the user starts the journey.
- Added `steps/18-phase-1-entry-background-only.md`.
- Updated Mission Entry, Launch Sequence, and Arrival Core screen contracts.
- Updated README, about-project, and testing checklist.


# Changelog

## Phase 1 Start Flow Refinement — 20 May 2026, 17:55 IST

- Changed entry heading to `Welcome to Shrimo Verse.`
- Changed entry CTA to `Start`.
- Reduced excessive line spacing on the entry screen.
- Made entry screen use the same universe/stage background instead of feeling separate.
- Improved desktop launch so the rocket moves toward the center after Start.
- Increased launch star/particle travel speed for a stronger movement feeling.
- Added `steps/17-phase-1-start-flow-refinement.md`.
- Updated Phase 1 screen contracts and testing checklist.


# Changelog

## Phase 1 — Entry / Launch / Arrival Update — 20 May 2026, 17:35 IST

- Improved Mission Entry first impression with stronger circular black/cyan atmosphere.
- Added stronger launch-state animation behavior without adding a new CSS file.
- Preserved background continuity from entry into Arrival Core.
- Improved desktop previous/next arrow visibility after entry.
- Improved first tutorial behavior after user enters the journey.
- Reduced oversized heading/radius behavior in Phase 1 areas.
- Added `steps/16-phase-1-entry-launch-arrival.md`.
- Updated Phase 1 screen contracts.


# Changelog

## Screen Contracts and Meaningful Change Protocol Added — 20 May 2026, 17:05 IST

- Added `steps/screen-contracts/` as the source of truth for every original screen/scene.
- Added a detailed screen contract for Mission Entry, Launch Sequence, Arrival Core, Technology Orbit, Product Gallery, Proof Ring, Client Signals, and Launch Dock.
- Added `steps/screen-contracts/00-contract-index.md`.
- Added `steps/15-meaningful-change-protocol.md`.
- Updated README, about-project, project-rules, TESTING_CHECKLIST, and steps index.
- Future work must update the matching screen contract before code changes.
- Future changes must be meaningful, contract-based, and not random patch stacking.


# Changelog

## Final stable production build

### Visual system
- Rebuilt Shrimo Verse as a full-screen universe interface.
- Removed grid/dashboard look.
- Added pure black cinematic background with subtle star field.
- Made SV / Shrimo Verse the fixed center core.
- Added product gallery orbit objects.
- Simplified particle labels by removing category prefixes.

### Interaction
- Added SVG HUD controls with tooltips.
- Added desktop rocket cursor with yellow/orange flame.
- Added orange/yellow lock-on glow for particle hover.
- Added Orbit Zoom slider with min/max.
- Added Auto Flight loop through all universe zones.
- Added First Launch Guide.
- Added Return to Core and Pause Orbit.

### Mobile
- Added mobile-specific bottom control dock.
- Disabled rocket cursor on touch devices.
- Added tap-based particles and bottom-sheet tooltip behavior.
- Added swipe zone navigation and mobile-safe sizing.

### Content
- Added real reviews from Ram Dubey, Rajeev T., and Sergio W.
- Added technologies, tools, services, product objects, proof objects, review objects, and contact paths.
- Used profile/contact data for mobile, email, LinkedIn, location, skills, and professional positioning.

### Production stability
- No heavy WebGL dependency required for the stable build.
- JS syntax checked.
- JSON-LD kept valid.
- One H1 retained.
- No .git included.

## Cluster Fix Update

- Cleaned the central orbit so it now contains only skills, technologies, and selected tools.
- Removed products, reviews, proof, and contact actions from the SV core orbit.
- Added a separate Product Gallery layer with product dots and one focused gallery panel.
- Added a separate Client Signal layer with review dots and one readable review panel.
- Added a separate Proof Ring layer with proof dots and focused proof details.
- Kept Launch Dock separate as the final conversion area.
- Improved Auto Flight so it moves through clean layers instead of highlighting crowded orbit labels.
- Added zoom visibility rules so deeper tools only appear when the user zooms in.
- Added `SHRIMO_VERSE_CLUSTER_FIX_PLAN.md` to document the final cleanup decision.

## Recovered Cinematic Product Bug Fix — 20 May 2026, 17:20 IST

- Recovered the visually fuller working Shrimo Verse app as the base instead of the incomplete clean skeleton.
- Preserved the original stable decisions: fixed SV core, black cinematic background, desktop rocket cursor, mobile dock, no heavy WebGL dependency, technology-only orbit, Product Gallery, Proof Ring, Client Signals, and Launch Dock as separate layers.
- Fixed the product bugs reported after the incomplete build:
  - restored moving orbit particles around the SV core,
  - strengthened circular/cosmic background after entry,
  - restored desktop previous/next arrows,
  - forced first-launch guide to appear after entry,
  - reduced oversized heading/border radius styling,
  - improved safe-zone spacing to reduce content overlap,
  - improved canvas galaxy/starfield movement,
  - made the entry CTA more impressive with full “Enter Shrimo Verse” copy.
- Kept all mandatory docs, AI-agent files, and `steps/` planning system.
