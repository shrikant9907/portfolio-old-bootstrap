# Changelog

## shrimo-verse-v1.0-experience

### Experience redesign

- Reframed the project from an animated portfolio screen into a guided cinematic Shrimo Verse experience.
- Added a clearer journey model: Landing Gate → Launch Sequence → Arrival Core → Technology Orbit → Product Missions → Proof Signals → Client Transmissions → Launch Dock.
- Reduced always-visible UI clutter so one main focus is active at a time.
- Added a compact chapter rail for controlled step-by-step exploration.
- Added a dedicated v1 settings drawer for motion, density, interface mode, tutorial replay, and restart.
- Added automatic one-time tutorial behavior per browser tab session using session storage.
- Added manual tutorial replay from Help and Settings.
- Added stronger landing and launch animation styling.
- Updated product terminology from Product Gallery to Product Missions.
- Updated review terminology from Client Signals to Client Transmissions.

### Code changes

- Added `js/experience/01-experience-director.js`.
- Added `css/modules/08-v1-experience-flow.css`.
- Updated `index.html` with Settings control, Settings panel, chapter rail, improved entry copy, and guide skip button.
- Updated `js/portfolio/02-dom-state-utils.js` with new element references and chapter transition state.
- Updated `js/portfolio/04-guide-controller.js` with session-aware onboarding behavior.
- Updated `js/portfolio/06-main-controller.js` to initialize the v1 experience director and route launch/chapter events through it.
- Updated `js/portfolio/01-config.js` with clearer chapter naming and guide language.

### Documentation cleanup

- Removed older conflicting planning markdown files.
- Rewrote `README.md` as the current run/edit guide.
- Rewrote `ProjectStructure.md` as the current architecture source of truth.
- Added `SHRIMO_VERSE_V1_EXPERIENCE_PROMPT.md` as the future upgrade prompt.

### Validation target

- Static build with no bundler required.
- Local testing through `python3 -m http.server 5500`.
- JavaScript syntax checks.
- CSS brace balance checks.
- HTML local reference checks.
- ZIP integrity check.
