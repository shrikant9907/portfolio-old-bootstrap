
## v0.0.2 - Modular Code Refactor

- Split the monolithic portfolio JavaScript into six focused files under `js/portfolio/`.
- Split the main portfolio CSS into ordered design partials under `css/modules/`.
- Kept `css/portfolio-style.css` as the single stylesheet manifest.
- Updated `index.html` script loading order for the new modular JavaScript files.
- Added `SHRIMO_VERSE_REFACTOR_PROMPT.md` to document the exact refactor rules.
- Updated `README.md` and `ProjectStructure.md` with developer editing guidance.
- Fixed the missing page-visibility binding so the starfield/orbit loop can safely pause when the browser tab is hidden.
- Preserved the standalone rocket cursor as its own isolated cursor module.
- Removed the old unused monolithic `js/portfolio-scripts.js` from the active project.

## v0.0.1 - Rocket Cursor Replacement

- Replaced the old integrated ship cursor with the uploaded standalone rocket cursor design.
- Added `css/cursor-rocket.css` and `js/cursor-rocket.js` as dedicated cursor assets.
- Updated the desktop guide target to the new rocket cursor.
- Kept the portfolio animation loop stable by disabling duplicate cursor movement/trail code.
- Final delivery package excludes `.git` history and old source packaging clutter.

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
