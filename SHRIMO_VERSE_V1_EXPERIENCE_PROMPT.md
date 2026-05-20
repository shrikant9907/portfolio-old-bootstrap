# Shrimo Verse v1 Experience Build Prompt

Use this prompt for future upgrades to avoid confusion.

## Goal

Build Shrimo Verse as a cinematic, game-like, guided portfolio experience — not a normal website page with random animations.

The user journey must be:

```txt
Landing Gate → Launch Sequence → Arrival Core → Technology Orbit → Product Missions → Proof Signals → Client Transmissions → Launch Dock
```

## Core principles

1. Keep the project static HTML/CSS/JavaScript.
2. Do not convert to React.
3. Keep real readable HTML for SEO and accessibility.
4. Use Three.js only as a visual enhancement layer.
5. Use GSAP only for controlled cinematic sequencing.
6. Use Typed.js only for terminal-style text.
7. Keep fallbacks if external libraries fail.
8. Show only one primary focus at a time.
9. Avoid permanent cluttered panels.
10. Controls must use consistent SVG icons with tooltips.
11. Tutorial should appear automatically only once per browser tab session.
12. Settings should allow motion, density, interface, tutorial replay, and restart controls.
13. Motion must respect reduced-motion preferences.
14. Mobile must stay clean and lightweight.

## Design direction

The experience should feel like a sci-fi mission system:

- Landing creates curiosity.
- Enter button triggers launch.
- Stars and UI move like a ship entering a universe.
- SV core is the stable center.
- Skills orbit the core.
- Projects open as mission files.
- Proof appears as data signals.
- Reviews appear as transmissions.
- Contact appears at the Launch Dock.

## Avoid

- Generic portfolio sections.
- Card grids everywhere.
- Too many visible panels.
- Random motion without purpose.
- Heavy 3D models.
- Moving readable content into WebGL.
- Showing tutorial on every refresh.
- Adding new libraries without a real reason.

## Current main files for future upgrades

```txt
css/modules/08-v1-experience-flow.css
js/experience/01-experience-director.js
js/portfolio/01-config.js
js/portfolio/06-main-controller.js
js/portfolio/04-guide-controller.js
README.md
ProjectStructure.md
CHANGELOG.md
```

## Final quality bar

A user should feel:

```txt
I clicked Enter → I launched into a universe → I explored Shrikant's skills and products step by step → I saw proof → I reached contact naturally.
```
