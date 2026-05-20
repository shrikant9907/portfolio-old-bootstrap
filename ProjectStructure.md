# Shrimo Verse Project Structure

Current stable test build: **v1.1 Cinematic Polish**

This project is a static portfolio experience. It does not use React, Vite, Next.js, or a build tool. Keep the structure simple and predictable.

## Root files

```txt
index.html
README.md
ProjectStructure.md
CHANGELOG.md
manifest.json
robots.txt
sitemap.xml
```

## CSS structure

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
    08-v1-experience-flow.css
    09-v1-1-cinematic-polish.css
```

### CSS rule

`portfolio-style.css` is the only main CSS file linked in `index.html`. Add new visual modules by importing them there in order.

Use later modules for overrides. Do not edit many old modules for one visual polish change unless the base rule is wrong.

## JavaScript structure

```txt
js/
  vendors/
    00-vendor-bridge.js

  cursor-rocket.js

  portfolio/
    01-config.js
    02-dom-state-utils.js
    03-layer-renderer.js
    04-guide-controller.js
    05-scene-effects.js
    06-main-controller.js

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

  experience/
    01-experience-director.js
    02-cinematic-polish.js
```

## File responsibilities

### `js/portfolio/01-config.js`
Update this file when changing portfolio content:

- chapters/zones
- skills and tools
- products
- proof points
- reviews
- guide steps
- runtime labels

### `js/experience/01-experience-director.js`
Owns the v1 flow:

- landing state
- launch state
- chapter state
- settings panel
- once-per-session guide logic

### `js/experience/02-cinematic-polish.js`
Owns the v1.1 polish layer:

- cinematic warp overlay
- scene captions
- chapter keyboard shortcuts
- settings accessibility sync
- final clutter-control behavior

### `css/modules/09-v1-1-cinematic-polish.css`
Owns final presentation polish:

- movie-style launch visuals
- chapter-specific colors and scene mood
- improved HUD hierarchy
- mobile spacing
- short-screen overlap prevention

## Development rules

1. Keep readable content in HTML/data, not only in WebGL.
2. Keep Three.js/canvas as the visual universe layer.
3. Keep GSAP/Typed.js optional with fallbacks.
4. Do not show everything at once.
5. Every chapter should have one main focus.
6. Guide should appear only once per browser tab session unless replayed.
7. Use SVG icons for controls.
8. Always test desktop, tablet, and mobile.
9. Do not include `.git`, `.github`, `.agents`, `.codex`, or old ZIP files in final delivery.

## Recommended next change location

| Task | File |
|---|---|
| Change portfolio text/content | `js/portfolio/01-config.js` |
| Change launch/scene polish | `js/experience/02-cinematic-polish.js` and `css/modules/09-v1-1-cinematic-polish.css` |
| Change guide steps | `js/portfolio/01-config.js` |
| Change settings behavior | `js/experience/01-experience-director.js` |
| Change 3D/canvas world | `js/three/01-cinematic-universe.js` |
| Change cards/proof/reviews rendering | `js/portfolio/03-layer-renderer.js` |


## v1.2 Mobile-First Additions — 20 May 2026, 12:56 PM IST

```txt
css/modules/10-v1-2-mobile-first-polish.css
js/animation/02-haptic-feedback.js
js/ui/06-gesture-controls.js
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
```

These files implement the mobile-first polish layer, tap feedback, optional haptics, swipe navigation, and developer testing guidance.
