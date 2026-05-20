# Project Structure — Shrimo Verse v1.0 Experience

This file is the current source of truth. Older planning markdown files were removed to avoid confusion.

## Root

```txt
index.html              Main static page
README.md               Current run/edit instructions
ProjectStructure.md     Current architecture guide
CHANGELOG.md            Version history
SHRIMO_VERSE_V1_EXPERIENCE_PROMPT.md  Final build prompt and rules
manifest.json           PWA metadata
robots.txt              Search crawling rule
sitemap.xml             Sitemap
```

## CSS

```txt
css/portfolio-style.css
```

The main CSS entry file. Keep this as the only portfolio stylesheet in `index.html`.

```txt
css/modules/01-foundation.css
css/modules/02-separated-layers.css
css/modules/03-polish-overrides.css
css/modules/04-cinematic-upgrade.css
css/modules/05-third-party-cinematic.css
css/modules/06-command-deck-and-polish.css
css/modules/07-mission-briefing-performance.css
css/modules/08-v1-experience-flow.css
```

### Current main CSS file to edit

For the current v1 cinematic flow, edit:

```txt
css/modules/08-v1-experience-flow.css
```

Use older modules only when changing base layout, existing layer rendering, or previous visual systems.

## JavaScript

### Content and configuration

```txt
js/portfolio/01-config.js
```

Use this to update portfolio data, products, proof, reviews, and guide text.

### DOM and shared state

```txt
js/portfolio/02-dom-state-utils.js
```

Update this when adding or renaming HTML IDs.

### Rendering layers

```txt
js/portfolio/03-layer-renderer.js
```

Owns visible orbit nodes, product mission cards, proof signals, and review transmissions.

### Guide behavior

```txt
js/portfolio/04-guide-controller.js
```

Owns onboarding guide steps. In v1, the guide appears automatically once per browser tab session and can be replayed manually.

### Scene effects

```txt
js/portfolio/05-scene-effects.js
```

Owns star canvas, orbit positioning, cursor tracking, page visibility, and zoom visibility.

### Main controller

```txt
js/portfolio/06-main-controller.js
```

Wires modules together. Add new module creation here only when a new module needs shared context.

### v1 experience coordinator

```txt
js/experience/01-experience-director.js
```

Owns landing, launch, chapter state, settings drawer, chapter rail, and high-level experience rules.

### Optional enhancement modules

```txt
js/three/01-cinematic-universe.js
js/animation/01-motion-system.js
js/ui/01-typed-terminal.js
js/ui/02-command-deck.js
js/ui/03-interaction-polish.js
js/ui/04-mission-briefing.js
js/ui/05-performance-director.js
js/vendors/00-vendor-bridge.js
js/cursor-rocket.js
```

These improve the experience but should not contain core content data.

## Architecture rule

Shrimo Verse uses progressive enhancement:

```txt
Readable HTML content
+ CSS visual world
+ JavaScript interaction
+ optional Three.js / GSAP / Typed.js enhancements
+ fallback behavior if libraries fail
```

Do not move important readable portfolio content fully into canvas/WebGL.
