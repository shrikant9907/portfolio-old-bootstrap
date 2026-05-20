# Shrimo Verse v0.0.5

Shrimo Verse is an interactive cinematic portfolio universe for Shrikant Yadav / Shrimo Innovations.

## What changed in v0.0.3

- Added a cinematic 3D/WebGL-ready universe layer.
- Added a safe vendor bridge for GSAP, Typed.js, and Three.js-style enhancements.
- Added local fallbacks so the static site does not break when CDN libraries are unavailable.
- Added typed terminal lines for the entry gate, SV core, zone status, and launch dock.
- Added GSAP-style motion hooks for entry launch, panel reveals, tooltips, and zone changes.
- Upgraded product cards with stack tags and impact/result copy.
- Added stronger cinematic CSS polish, depth, glass surfaces, glowing core energy, and CTA motion.

## Important testing note

Open this project through a local server, not by double-clicking `index.html`.

Recommended:

```bash
python3 -m http.server 3000
```

Then open:

```txt
http://localhost:3000
```

## Main file structure

```txt
css/
  portfolio-style.css
  cursor-rocket.css
  modules/
    01-foundation.css
    02-separated-layers.css
    03-polish-overrides.css
    04-cinematic-upgrade.css
    05-third-party-cinematic.css
    06-command-deck-and-polish.css
    07-mission-briefing-performance.css

js/
  vendors/
    00-vendor-bridge.js
  three/
    01-cinematic-universe.js
  animation/
    01-motion-system.js
  ui/
    01-typed-terminal.js
    02-command-deck.js
    03-interaction-polish.js
    04-mission-briefing.js
    05-performance-director.js
  portfolio/
    01-config.js
    02-dom-state-utils.js
    03-layer-renderer.js
    04-guide-controller.js
    05-scene-effects.js
    06-main-controller.js
  cursor-rocket.js
```

## Developer guide

- Update portfolio content in `js/portfolio/01-config.js`.
- Update DOM selectors in `js/portfolio/02-dom-state-utils.js`.
- Update rendered product/proof/review HTML in `js/portfolio/03-layer-renderer.js`.
- Update guide steps in `js/portfolio/01-config.js`.
- Update cinematic background behavior in `js/three/01-cinematic-universe.js`.
- Update motion choreography in `js/animation/01-motion-system.js`.
- Update typed messages in `js/ui/01-typed-terminal.js`.
- Update premium visual styling in `css/modules/05-third-party-cinematic.css`, `06-command-deck-and-polish.css`, or `07-mission-briefing-performance.css`.

## Dependency strategy

This project remains static and does not require a build step.

The HTML includes optional defer CDN references for Three.js, GSAP, and Typed.js. The local vendor bridge keeps the site working even when those CDN files do not load.


## v0.0.4 additions

- Live Build Deck cockpit for active zone, runtime, input, and enhancement status.
- Product cards upgraded into mini case studies with problem, approach, stack, and result.
- New interaction polish layer with magnetic hover and number-key zone shortcuts.
- CDN scripts now use `defer` so vendor detection runs in a more reliable order while fallbacks remain active.



## v0.0.5 additions

- Added a Mission Briefing drawer that explains the active zone, product case-study logic, proof context, review context, and next action.
- Added a Performance Director with Essential, Balanced, and Cinematic quality modes.
- Added keyboard shortcuts: `M` opens Mission Briefing and `Q` cycles visual quality.
- Added adaptive quality fallback that can reduce cinematic mode when FPS is consistently low.
- Fixed a duplicated guide-actions wrapper in `index.html`.
- Kept all upgrades isolated in `js/ui/04-mission-briefing.js`, `js/ui/05-performance-director.js`, and `css/modules/07-mission-briefing-performance.css`.
