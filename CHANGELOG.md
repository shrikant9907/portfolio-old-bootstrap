# Changelog

## v1.1 Cinematic Polish

Stable test-ready polished version.

### Added

- New final polish CSS module: `css/modules/09-v1-1-cinematic-polish.css`.
- New polish controller: `js/experience/02-cinematic-polish.js`.
- Movie-style warp overlay during launch.
- Temporary scene caption for every chapter transition.
- Number-key shortcuts `1` to `6` for chapter navigation.
- Bracket shortcuts `[` and `]` for previous/next chapter.
- Chapter-specific accent colors and scene mood.
- Stronger focus styles for keyboard users.
- Better mobile spacing and short-screen overlap prevention.
- Native title fallback for SVG icon tooltips.
- Settings `aria-expanded` / `aria-controls` sync.

### Improved

- Landing screen now feels more like a curiosity gate.
- Launch sequence feels more cinematic and less like a normal page transition.
- HUD controls are cleaner and less dominant.
- Mission panel has better hierarchy and scanning transition.
- Command deck stays compact by default but expands in Expanded interface mode.
- Launch Dock feels more focused as the final conversion step.
- Markdown documentation is simplified to avoid old-version confusion.

### Fixed

- Removed duplicate `js/three/01-cinematic-universe.js` script reference from `index.html`.
- Removed duplicate `setZone(zone)` call during auto-flight.
- Removed old v1 prompt markdown file from the final package.

## v1.0 Experience

- Added guided experience flow.
- Added Landing Gate and Launch Sequence state.
- Added chapter rail.
- Added settings panel.
- Added once-per-session guide behavior.
- Updated documentation for the new experience model.

## v0.0.5

- Added Mission Briefing drawer.
- Added Performance Director.
- Added quality modes.

## v0.0.4

- Added Live Build Deck.
- Added Mission Intelligence panel.
- Improved product case-study cards.

## v0.0.3

- Added cinematic Three.js/canvas universe layer.
- Added GSAP-style motion system.
- Added Typed.js-style terminal layer.

## v0.0.2

- Split JavaScript and CSS into modular files.

## v0.0.1

- Added custom rocket cursor system.
