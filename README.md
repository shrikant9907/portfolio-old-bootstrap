# Shrimo Verse v1.1 Cinematic Polish

Shrimo Verse is a static HTML/CSS/JavaScript interactive portfolio experience for Shrikant Yadav and Shrimo Innovations.

This version is focused on a stable test-ready cinematic journey:

1. Landing Gate
2. Movie-style launch transition
3. Arrival Core
4. Technology Orbit
5. Product Missions
6. Proof Signals
7. Client Transmissions
8. Launch Dock contact flow

The project remains static and can be tested without a build step.

## How to test locally

Run from the project folder:

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

Do not test by double-clicking `index.html` because browser module/CDN behavior is more reliable through a local server.

## What changed in v1.1

- Added stronger cinematic launch overlay.
- Added temporary scene captions for chapter changes.
- Added number shortcuts `1` to `6` for chapters.
- Reduced visual clutter and improved one-focus-at-a-time behavior.
- Improved HUD hierarchy, mobile spacing, and overlap prevention.
- Expanded settings accessibility states.
- Removed duplicate Three.js script reference.
- Fixed duplicate auto-flight zone call.
- Cleaned markdown files so this build is easier to understand.

## Important controls

| Control | Action |
|---|---|
| Enter Shrimo Verse | Starts launch sequence |
| 1-6 | Jump to chapters |
| Arrow Left / Right | Previous / next chapter |
| `[` / `]` | Previous / next chapter |
| `A` | Auto Flight |
| `G` or `H` or `?` | Guide |
| `M` | Mission Briefing |
| `Q` | Change performance quality |
| `S` | Settings |
| `R` or Home | Return to Arrival Core |
| Space | Pause / resume orbit after entry |

## Development rule

Keep this project as a progressive-enhancement static site:

- HTML content stays readable and SEO-friendly.
- Three.js/canvas remains a visual layer, not the content layer.
- GSAP/Typed.js are enhancements with fallbacks.
- The user should see one main focus at a time.
- Avoid adding random effects that increase clutter.

## Current build files to know

- `index.html` — page structure, SEO, controls, core stage.
- `css/portfolio-style.css` — CSS manifest importing ordered modules.
- `css/modules/09-v1-1-cinematic-polish.css` — final visual polish layer.
- `js/experience/01-experience-director.js` — v1 experience flow.
- `js/experience/02-cinematic-polish.js` — v1.1 launch/chapter polish wrapper.
- `js/portfolio/01-config.js` — content data for zones, skills, products, proof, reviews.
- `js/portfolio/06-main-controller.js` — main app wiring.

## Final testing checklist

Before publishing, test:

- Landing Gate → Enter → launch → Arrival Core.
- Chapter navigation using rail, arrows, keyboard, and mobile controls.
- Product, proof, and review chapters.
- Guide appears once per tab session and can be replayed.
- Settings panel opens/closes and changes motion/density/interface.
- Launch Dock links open correctly.
- No console errors.
- Mobile width around 360px, tablet width around 768px, desktop width around 1366px.
