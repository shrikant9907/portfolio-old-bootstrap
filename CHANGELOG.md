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
