
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

## v0.0.3 - Cinematic 3D + Motion Upgrade

- Added optional async CDN hooks for Three.js, GSAP, and Typed.js.
- Added `js/vendors/00-vendor-bridge.js` with local fallbacks so the static project keeps working without CDN access.
- Added `js/three/01-cinematic-universe.js` for a WebGL-ready/canvas cinematic universe layer.
- Added `js/animation/01-motion-system.js` for GSAP-style entry, zone, panel, and tooltip choreography.
- Added `js/ui/01-typed-terminal.js` for controlled typed mission copy.
- Added `css/modules/05-third-party-cinematic.css` for premium 3D depth, glass surfaces, core energy, library badges, product stack tags, and CTA motion.
- Updated `index.html` with a dedicated cinematic canvas, core terminal line, zone terminal line, library badges, and launch dock typed copy.
- Updated product data with technology stack and impact/result fields.
- Kept all existing portfolio controls, rocket cursor, guide, orbit zoom, product gallery, proof ring, reviews, and launch dock behavior.
- Kept the project static and deployable without a build step.

## v0.0.4 - Command Deck and product storytelling upgrade

- Added a Live Build Deck cockpit that shows active zone progress, runtime/library status, input mode, and motion/3D fallback state.
- Added zone intelligence copy so each section explains the frontend/product skill being demonstrated.
- Upgraded product cards into mini case-study panels with problem, approach, stack, result, and action paths.
- Added interaction polish module for magnetic desktop hover, numeric keyboard shortcuts, input-mode tracking, and launch readiness state.
- Added `css/modules/06-command-deck-and-polish.css` to keep the new cockpit and interaction layer isolated from the base visual system.
- Switched CDN library tags from `async` to `defer` so vendor bridge detection is more reliable while still preserving fallback behavior.
- Kept the project static, SEO-readable, and deployable without a build step.


## v0.0.5 - Mission Briefing and Performance Director upgrade

- Added Mission Briefing drawer for deeper case-study storytelling and developer explanation per zone.
- Added `js/ui/04-mission-briefing.js` to keep briefing behavior isolated from the main controller.
- Added Performance Director with Essential, Balanced, and Cinematic modes.
- Added `js/ui/05-performance-director.js` for quality switching, local preference persistence, keyboard shortcut support, and FPS-based downgrade protection.
- Added `css/modules/07-mission-briefing-performance.css` for the new drawer, quality selector, and mode-specific visual tuning.
- Added `M` shortcut to open Mission Briefing and `Q` shortcut to cycle visual quality.
- Updated the cinematic universe renderer so canvas particle counts can respond to selected performance mode.
- Fixed duplicated guide action markup in `index.html`.
- Kept the project static, modular, SEO-readable, and deployable without a build step.
