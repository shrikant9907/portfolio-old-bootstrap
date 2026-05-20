# Changelog

## v1.3.1 — Visual Recovery (20 May 2026)

### Fixed

- Recovered the interface from the over-layered v1.3 screen.
- Added `css/modules/12-v1-3-1-visual-recovery.css` as the final cleanup layer.
- Hidden dashboard/debug panels from the default cinematic view.
- Removed heavy article-style borders, padding, and internal scrolling from the main scene caption.
- Reduced the oversized background aura that was covering the scene.
- Simplified Launch Dock into a clean black/cyan conversion signal.
- Made WhatsApp primary without using orange/yellow as the main CTA color.
- Kept call/email as secondary actions and hid excess mobile contact links.
- Simplified mobile HUD styling and reduced visual noise.
- Updated README.md and about-project.md for the visual recovery direction.

### Validation

- JavaScript syntax checked.
- CSS imports checked.
- CSS brace structure checked.
- HTML local file references checked.
- Duplicate IDs checked.
- Duplicate scripts checked.
- Required root docs checked.
- ZIP integrity checked.

### Not Claimed

- No real iPhone/Android testing was performed in this sandbox.
- No Lighthouse score is claimed.

---


## v1.3 — Cinematic Universe UI (20 May 2026, 01:45 PM IST)

### Added
- Added `css/modules/11-v1-3-cinematic-universe-ui.css` as the final black/cyan cinematic visual layer.
- Added `js/ui/07-universe-ui-director.js` to keep information layers exclusive and reduce visual overlap.
- Added Settings quality buttons that also use the shared `[data-quality]` system.

### Improved
- Reframed the UI as a scene-based futuristic universe, not a website layout.
- Reworked the mobile control dock into a thumb-friendly two-row command HUD.
- Converted selected/active states to black/cyan styling.
- Made mission information read more like a cinematic scene caption.
- Improved Launch Dock conversion hierarchy with WhatsApp as the primary CTA.
- Strengthened performance-mode integration with document state and particle rendering.
- Wired ripple feedback for pointer activation and haptic feedback for supported touch input.

### Fixed
- Removed duplicate mobile swipe handling from the main controller so gesture controls own chapter swipes.
- Replaced orange/yellow rendering in the cinematic universe with cyan rendering.
- Improved panel exclusivity so settings, guide, briefing, tooltip, and launch layers do not compete visually.

### Validation
- JavaScript syntax checked.
- CSS imports checked.
- HTML local references checked.
- Duplicate IDs checked.
- Duplicate scripts checked.
- Required root docs checked.
- ZIP integrity checked.


---

# Changelog

## v1.2 Mobile-First Polish — 20 May 2026, 12:56 PM IST

### Added
- New mobile-first final CSS layer: `css/modules/10-v1-2-mobile-first-polish.css`.
- New haptic helper: `js/animation/02-haptic-feedback.js`.
- New gesture controls: `js/ui/06-gesture-controls.js`.
- Swipe left/right chapter navigation on mobile.
- Touch ripple feedback for interactive controls.
- Device capability detection for low, medium, and high performance conditions.
- Mobile-first Launch Dock with WhatsApp as the primary CTA.
- `DEVELOPMENT_GUIDE.md` and `TESTING_CHECKLIST.md`.

### Improved
- Mobile spacing, typography, tap targets, and panel behavior.
- Product Mission cards now show Challenge, Solution, Stack, and Result more clearly.
- Proof Signals now include context explanations.
- Client Transmissions now show rating/signal quality and next/previous controls.
- Three.js/canvas particle density now respects device capability and quality mode.
- Entry copy and launch CTA are now clearer for mobile-first users.

### Protected
- Static HTML/CSS/JS architecture remains unchanged.
- No React conversion.
- `README.md` and `about-project.md` remain at project root.
- Progressive enhancement remains the architecture rule.

---

## v1.1 Cinematic Polish

Stable test-ready polished version.

### Added

- New final polish CSS module: `css/modules/09-v1-1-cinematic-polish.css`.
- New polish controller: `js/experience/02-cinematic-polish.js`.
- Movie-style warp overlay during launch.
- Temporary scene caption for every chapter transition.
- Number-key shortcuts `1` to `6` for chapter navigation.
- Bracket shortcuts `[` and `]` for previous/next chapter.
- Chapter-specific accent colors and scene mood.
- Stronger focus styles for keyboard users.
- Better mobile spacing and short-screen overlap prevention.
- Native title fallback for SVG icon tooltips.
- Settings `aria-expanded` / `aria-controls` sync.

### Improved

- Landing screen now feels more like a curiosity gate.
- Launch sequence feels more cinematic and less like a normal page transition.
- HUD controls are cleaner and less dominant.
- Mission panel has better hierarchy and scanning transition.
- Command deck stays compact by default but expands in Expanded interface mode.
- Launch Dock feels more focused as the final conversion step.
- Markdown documentation is simplified to avoid old-version confusion.

### Fixed

- Removed duplicate `js/three/01-cinematic-universe.js` script reference from `index.html`.
- Removed duplicate `setZone(zone)` call during auto-flight.
- Removed old v1 prompt markdown file from the final package.

## v1.0 Experience

- Added guided experience flow.
- Added Landing Gate and Launch Sequence state.
- Added chapter rail.
- Added settings panel.
- Added once-per-session guide behavior.
- Updated documentation for the new experience model.

## v0.0.5

- Added Mission Briefing drawer.
- Added Performance Director.
- Added quality modes.

## v0.0.4

- Added Live Build Deck.
- Added Mission Intelligence panel.
- Improved product case-study cards.

## v0.0.3

- Added cinematic Three.js/canvas universe layer.
- Added GSAP-style motion system.
- Added Typed.js-style terminal layer.

## v0.0.2

- Split JavaScript and CSS into modular files.

## v0.0.1

- Added custom rocket cursor system.
