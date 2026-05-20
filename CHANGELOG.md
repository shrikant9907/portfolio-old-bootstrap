# Changelog

## Steps Flow Management Refined — 20 May 2026, 16:10 IST

- Added `steps/00-flow-transition-map.md`.
- Updated major step files with previous/next scene mapping.
- Added connected layers/cards/objects for each step.
- Added mobile/tablet/desktop animation behavior to each step.
- Added transition rules and failure risks for each step.
- Updated master planning system with mandatory previous/next/device animation planning.
- Updated README, about-project, project-rules, and testing checklist references.


# Changelog

## Master Product Planning System Added — 20 May 2026, 15:55 IST

- Added `steps/00-master-product-planning-system.md`.
- Stored the refined expert-level product strategy, scene flow, UI impression rules, motion trigger plan, conversion strategy, architecture rules, and QA standard.
- Updated `README.md`, `about-project.md`, `project-rules.md`, and `steps/00-steps-index.md` to reference the master plan.
- Future builds must read the master plan before coding.


# Changelog

## Steps Planning Folder Added — 20 May 2026, 15:40 IST

- Added permanent root `steps/` folder.
- Added pre-planned markdown files for every Shrimo Verse scene from Mission Entry to QA/Packaging.
- Documented how scenes connect, what triggers animation, and how each scene behaves on mobile, tablet, and desktop.
- Updated `README.md`, `about-project.md`, and `project-rules.md` to mark `steps/` as mandatory.
- Future builds must keep this folder and update the relevant step file when behavior changes.


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

## Rocket Cursor Fix — 20 May 2026

- Fixed desktop rocket cursor visibility after clean-scene-system rebuild.
- Raised rocket cursor/trail layer above entry gate and HUD layers so it remains visible from the first Mission Entry screen.
- Reworked desktop pointer detection so hybrid laptops with touch support still get the rocket cursor when a fine pointer/mouse is available.
- Reduced-motion mode now removes trail/noisy flame motion instead of fully disabling the desktop rocket cursor.
- Preserved touch/mobile rule: rocket cursor remains disabled on mobile and coarse-pointer devices.
