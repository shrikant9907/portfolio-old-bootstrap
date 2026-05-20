# Development Guide — Shrimo Verse v1.2

**Updated:** 20 May 2026, 12:56 PM IST

## Main Development Rule

This is a static HTML/CSS/JavaScript project. Do not convert it to React or rebuild the architecture unless the project direction changes completely.

## Start Here

1. Read `about-project.md`.
2. Read `README.md`.
3. Check `ProjectStructure.md`.
4. Run the project locally with:

```bash
python3 -m http.server 5500
```

## v1.2 Files Added

```txt
css/modules/10-v1-2-mobile-first-polish.css
js/animation/02-haptic-feedback.js
js/ui/06-gesture-controls.js
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
```

## File Responsibilities

- `css/modules/10-v1-2-mobile-first-polish.css` owns final mobile-first polish and should be loaded last.
- `js/animation/02-haptic-feedback.js` owns optional vibration feedback.
- `js/ui/06-gesture-controls.js` owns swipe navigation and swipe hint UI.
- `js/ui/05-performance-director.js` owns Essential/Balanced/Cinematic mode and device capability detection.
- `js/portfolio/01-config.js` owns portfolio content data.
- `js/portfolio/03-layer-renderer.js` owns Product, Proof, and Review card rendering.

## Mobile-First Rule

Base styles should work at 375px without media queries. Add enhancements at 768px and 1366px.

## Do Not

- Do not show all portfolio data at once.
- Do not make desktop the source layout.
- Do not add heavy 3D models.
- Do not rely on haptic vibration for important feedback.
- Do not remove `README.md` or `about-project.md`.
