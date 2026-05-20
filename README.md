# Shrimo Verse

Static HTML/CSS/JavaScript portfolio universe for Shrikant Yadav.

## What this version focuses on

- Modular JavaScript structure for easier future updates
- Split CSS design partials with clear ownership
- Realistic deep-universe entry animation
- Fixed SV core as the center of the system
- Technology-only orbit around the core
- Separate Product Gallery, Proof Ring, Client Signals, and Launch Dock
- Smooth desktop rocket cursor with velocity-based flame
- Touch-first mobile controls
- Working WhatsApp, call, email, LinkedIn, GitHub, Shrimo, and digital profile links

## Editing guide

- Update portfolio content in `js/portfolio/01-config.js`.
- Update DOM IDs and shared helpers in `js/portfolio/02-dom-state-utils.js`.
- Update product/proof/review rendering in `js/portfolio/03-layer-renderer.js`.
- Update onboarding guide behavior in `js/portfolio/04-guide-controller.js`.
- Update orbit movement, starfield, and zoom visibility in `js/portfolio/05-scene-effects.js`.
- Update entry flow, controls, keyboard, touch, and zone logic in `js/portfolio/06-main-controller.js`.
- Update visual styles inside `css/modules/` instead of one large CSS file.

## Run locally

You can open `index.html` directly, but serving the folder is better for real browser testing:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Upload the full folder contents to any static hosting service.
