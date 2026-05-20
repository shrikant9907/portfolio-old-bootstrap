# Project Structure

```text
project-root/
├── index.html
├── css/
│   ├── portfolio-style.css              # Main style manifest that imports ordered design parts
│   ├── cursor-rocket.css                # Standalone rocket cursor styles
│   └── modules/
│       ├── 01-foundation.css            # Design tokens, reset, entry gate, core layout, responsive base
│       ├── 02-separated-layers.css      # Product gallery, proof ring, and client signal layers
│       ├── 03-polish-overrides.css      # Final layout/header/nav/panel tuning
│       └── 04-cinematic-upgrade.css     # Cinematic depth, entry motion, orbit polish, final production pass
├── js/
│   ├── cursor-rocket.js                 # Standalone rocket cursor behavior
│   └── portfolio/
│       ├── 01-config.js                 # Zones, skills, products, proof points, reviews, guide steps
│       ├── 02-dom-state-utils.js        # DOM selectors, shared state, helper functions
│       ├── 03-layer-renderer.js         # Orbit nodes, product cards, proof cards, review cards
│       ├── 04-guide-controller.js       # Guided tour overlay and step movement
│       ├── 05-scene-effects.js          # Starfield, orbit positioning, zoom visibility, animation loop
│       └── 06-main-controller.js        # App bootstrap, controls, zones, entry flow, keyboard/touch events
├── images/
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── og-shrikant-portfolio.png
│   └── shrikant-profile.jpg
├── manifest.json
├── robots.txt
├── sitemap.xml
├── README.md
├── CHANGELOG.md
├── SHRIMO_VERSE_REFACTOR_PROMPT.md
└── ProjectStructure.md
```
