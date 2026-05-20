# Project Structure - Shrimo Verse v0.0.5

## Core idea

The project is split by responsibility so future developers can edit content, visuals, animation, and cinematic rendering without searching through one large file.

## CSS

- `css/portfolio-style.css` imports all design modules in order.
- `css/modules/01-foundation.css` owns base layout, variables, core UI, and responsive foundation.
- `css/modules/02-separated-layers.css` owns product/proof/review separated layers.
- `css/modules/03-polish-overrides.css` owns previous visual polish.
- `css/modules/04-cinematic-upgrade.css` owns older cinematic improvements.
- `css/modules/05-third-party-cinematic.css` owns v0.0.3 3D/motion/typed visual polish.

## JavaScript

- `js/vendors/00-vendor-bridge.js` safely exposes animation and typing helpers.
- `js/three/01-cinematic-universe.js` owns WebGL-ready/canvas cinematic background rendering.
- `js/animation/01-motion-system.js` owns GSAP-style motion choreography.
- `js/ui/01-typed-terminal.js` owns typewriter terminal copy.
- `js/portfolio/01-config.js` owns content and journey data.
- `js/portfolio/02-dom-state-utils.js` owns DOM references, state, and small helpers.
- `js/portfolio/03-layer-renderer.js` owns dynamic HTML for nodes, product cards, proof cards, and reviews.
- `js/portfolio/04-guide-controller.js` owns guided tour behavior.
- `js/portfolio/05-scene-effects.js` owns original star canvas, orbit positions, zoom visibility, and page visibility.
- `js/portfolio/06-main-controller.js` wires all modules together.
- `js/cursor-rocket.js` owns the rocket cursor only.

## Safe editing rule

If you are changing text or data, edit config first.
If you are changing visual style, edit CSS modules.
If you are changing behavior, edit the smallest matching JS module.

## v0.0.4 structure additions

```txt
js/ui/02-command-deck.js
  Live cockpit for zone progress, runtime status, library/fallback state, and active build intelligence.

js/ui/03-interaction-polish.js
  Desktop magnetic hover, number-key zone shortcuts, input-mode tracking, and launch readiness state.

css/modules/06-command-deck-and-polish.css
  Styling for the command deck, mission intelligence panel, case-study strips, magnetic states, and final dock polish.
```

Keep future advanced UI layers isolated in `js/ui/` and `css/modules/` instead of adding more logic to `06-main-controller.js`.


## v0.0.5 structure additions

```txt
js/ui/04-mission-briefing.js
  Drawer-style product/developer briefing for the active zone, selected product, proof signal, review signal, and launch path.

js/ui/05-performance-director.js
  Visual quality controller with Essential, Balanced, and Cinematic modes plus light FPS-based downgrade protection.

css/modules/07-mission-briefing-performance.css
  Styling for the briefing drawer, performance mode switcher, and quality-level visual states.
```

Keyboard shortcuts added in v0.0.5:

- `M` opens Mission Briefing.
- `Q` cycles Essential, Balanced, and Cinematic quality modes.
