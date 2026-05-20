# Project Structure — Shrimo Verse

Updated: 20 May 2026, 15:35 IST

## Root

```txt
index.html
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
ROOT_CLEANUP_AUDIT.md
manifest.json
robots.txt
sitemap.xml
```

## CSS

The CSS is responsibility-based. Do not add versioned patch files.

```txt
css/
  portfolio-style.css
  cursor-rocket.css
  modules/
    01-tokens.css
    02-reset-base.css
    03-universe-background.css
    04-layout-shell.css
    05-hud-controls.css
    06-scenes.css
    07-orbit-system.css
    08-panels-drawers.css
    09-mobile-first.css
    10-motion-accessibility.css
```

## JavaScript

```txt
js/
  core/
    state.js
    dom.js
    events.js
  data/
    scenes.js
    skills.js
    products.js
    proof.js
    reviews.js
  controllers/
    app-controller.js
    scene-controller.js
    hud-controller.js
    guide-controller.js
    settings-controller.js
    orbit-controller.js
    launch-controller.js
  effects/
    motion.js
    performance.js
    gestures.js
    starfield.js
  cursor-rocket.js
```
