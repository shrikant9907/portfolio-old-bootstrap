# Changelog


## Phase 50 Mobile Scene Stability Fix — 21 May 2026, 01:22 IST

- Converted mobile Product, Proof, Review, and Launch panels into stable bottom sheets.
- Fixed clipped Proof and Client panels on mobile.
- Reduced Product Gallery mobile card height and hid long mission grid details.
- Made Launch Dock compact and safe above the bottom dock.
- Hid mobile zoom during scene browsing and removed duplicate right-side control rail on mobile.
- Added `steps/50-mobile-scene-stability-fix.md`.


## Phase 49 Logo Left + Arrival Node Center Fix — 21 May 2026, 00:58 IST

- Forced ShrimoVerse wordmark back to the top-left.
- Kept Exit at the top-right.
- Added a mobile Arrival layout pass to center a curated set of visible nodes around the SV core.
- Hid the remaining mobile Arrival nodes to keep the composition clean.
- Added `steps/49-logo-left-node-center-fix.md`.


## Phase 48 Mobile Arrival Layout Polish — 21 May 2026, 00:38 IST

- Reduced mobile Arrival Core heading and copy size.
- Made mission panel narrower and calmer.
- Reduced left zoom visibility and pushed it closer to the edge.
- Kept SV core centered and slightly reduced mobile size.
- Reduced visible Arrival Core technology nodes on mobile.
- Refined mobile bottom dock spacing.
- Added `steps/48-mobile-arrival-layout-polish.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog


## Phase 47 Entry Screen Purity Fix — 21 May 2026, 00:18 IST

- Hid zoom, exit, step navigation, mobile dock, and floating controls before Start.
- Hid SV core, particle layer, and orbit lines before Start.
- Kept cinematic universe elements available again during the launch transition.
- Removed entry progress line.
- Made entry hint chips lighter and smaller.
- Forced viewport overflow hidden to remove the entry-screen scrollbar.
- Added `steps/47-entry-screen-purity-fix.md`.

## Phase 46 Mobile Screen Fix — 20 May 2026, 23:59 IST

- Hid duplicate right-side floating control rail on mobile.
- Kept mobile bottom dock as primary journey control system.
- Kept Exit control visible at top-right.
- Reduced mobile mission title/copy sizing.
- Softened and shortened left zoom control on mobile.
- Reduced visible Arrival Core technology nodes on mobile.
- Reduced mobile SV core size slightly while keeping it centered.
- Added `steps/46-mobile-screen-fix.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Phase 45 Core Center Protection — 20 May 2026, 23:50 IST

- Fixed Phase 44 regression where `.universe-plane` could become relative.
- Restored `.universe-plane` to full-screen absolute positioning.
- Protected `.sv-core` with forced center positioning.
- Added mobile/tablet center protection.
- Added `steps/45-core-center-protection-fix.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Phase 44 Visual Hierarchy Cleanup — 20 May 2026, 23:35 IST

- Reduced normal-state glow on right floating controls.
- Normalized control ordering with JS without cloning nodes.
- Made wordmark smaller and quieter.
- Hid repeated action buttons inside scene mission panels.
- Moved zoom closer to the left edge and softened its styling.
- Reduced label collisions in Arrival Core by calming/hiding lower-priority nodes.
- Simplified bottom navigation and softened dots/arrows.
- Softened desktop copyright.
- Added `steps/44-visual-hierarchy-cleanup.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Final Visible Controls Rail — 20 May 2026, 22:55 IST

- Moved `.hud-controls` into body at runtime as `.floating-hud-controls`.
- Added final CSS targeting `body > .floating-hud-controls`.
- Kept controls bottom-right with no background/border.
- Added hover/focus tooltip behavior.
- Kept actual `.zoom-dock` left-center.
- Cache-busted CSS and JS references in `index.html`.
- Added `steps/42-final-visible-controls-rail.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Controls Visible and Actual Zoom Dock Fix — 20 May 2026, 22:35 IST

- Fixed the root cause: actual zoom element is `.zoom-dock`, not `.zoom-control`.
- Moved `.zoom-dock` to left-center.
- Removed zoom dock background and border.
- Made bottom-right HUD controls clearly visible as floating icons.
- Added hover/focus tooltips to HUD icons.
- Added `steps/41-controls-visible-actual-zoom-dock-fix.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Left-Center Clean Zoom Control — 20 May 2026, 22:18 IST

- Moved zoom control to the left-center of the screen.
- Removed zoom control background.
- Removed zoom control border.
- Removed zoom control wrapper feeling.
- Applied the same behavior from mobile to desktop.
- Added `steps/40-left-center-clean-zoom-control.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Bottom-Right Instagram-Style Floating Icons — 20 May 2026, 22:00 IST

- Moved main HUD controls to the bottom-right.
- Removed icon backgrounds and border wrappers.
- Kept the controls as a clean vertical floating rail.
- Added hover/focus tooltips for each control.
- Added `steps/39-bottom-right-instagram-floating-icons.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Top-Right Controls Visibility Fix — 20 May 2026, 21:40 IST

- Restored main HUD controls to top-right.
- Made HUD controls visible across desktop, tablet, and mobile.
- Removed the bottom-right vertical rail behavior through final CSS override.
- Kept controls circular and compact.
- Added `steps/38-top-right-controls-visible.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Bottom-Right Vertical HUD Controls — 20 May 2026, 21:25 IST

- Moved main HUD icon controls from top-right row to bottom-right vertical rail.
- Kept controls circular.
- Shifted zoom control left to avoid overlap with the vertical rail.
- Kept bottom step navigation centered.
- Kept mobile bottom dock as primary controls.
- Added `steps/37-bottom-right-vertical-controls.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Screenshot QA No Dotted Rings and Proof Circle Fix — 20 May 2026, 21:10 IST

- Removed remaining dotted orbit/guide rings from Technology, Product, Proof, and Client scenes.
- Disabled generated pseudo-element rings around particles, proof nodes, product nodes, and review nodes.
- Forced Proof Ring signal nodes to true circular shape.
- Fixed Proof detail card text overlap.
- Hid duplicated Technology Scan panel when object tooltip is open.
- Hid repeated bottom-left state readout.
- Added `steps/36-screenshot-qa-no-dotted-rings-proof-circles.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Transparent UI, Circular Controls, Exit Button — 20 May 2026, 20:55 IST

- Made cards and panels use around 50% transparent black.
- Removed heavy wrapper feeling from step bullets/navigation.
- Removed heavy wrapper feeling from zoom control bar.
- Converted icon controls to circular controls.
- Added Exit button to return from the journey to Mission Entry.
- Kept Start button solid and prominent.
- Added `steps/35-transparent-ui-circular-controls-exit.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Pure Black Starfield Background — 20 May 2026, 20:35 IST

- Simplified the universe background to pure black starfield only.
- Removed cloud/fog clusters and gradient-based space aura.
- Kept star-only rendering with increased quantity.
- Increased desktop mouse-driven star parallax strength.
- Kept SV core fixed.
- Added `steps/34-pure-black-starfield-background.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Background Parallax Visibility Fix — 20 May 2026, 20:20 IST

- Strengthened desktop background parallax so it is visible.
- Applied parallax directly inside the canvas star/galaxy draw logic.
- Stars and galaxy dust now move opposite to mouse direction.
- Kept SV core fixed and unaffected.
- Removed old ring transform influence from background parallax.
- Added `steps/33-background-parallax-visibility-fix.md`.
- Updated README and TESTING_CHECKLIST.


# Changelog

## Realistic Universe Background System — 20 May 2026, 20:05 IST

- Replaced ring-style background direction with a black realistic universe background.
- Hid decorative background rings from entry/world layers.
- Added many layered stars with random blinking/shining behavior.
- Added low-opacity drifting galaxy/dust clusters.
- Added desktop opposite-direction mouse parallax for background only.
- Kept SV core fixed and circular.
- Kept mobile/tablet particle counts lower for performance.
- Added `steps/32-realistic-universe-background-system.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Final All Phases Complete — 20 May 2026, 19:45 IST

- Completed Phase 4 Proof Ring with focused proof signals and previous/next controls.
- Completed Phase 5 Client Signals with readable review transmissions and previous/next controls.
- Completed Phase 6 Launch Dock with WhatsApp as primary final CTA.
- Completed Phase 7 guide/control/settings polish with compact global button behavior and SV core protection.
- Completed Phase 8 final package validation and documentation updates.
- Added `steps/27-phase-4-proof-ring.md`.
- Added `steps/28-phase-5-client-signals.md`.
- Added `steps/29-phase-6-launch-dock.md`.
- Added `steps/30-phase-7-guide-settings-polish.md`.
- Added `steps/31-phase-8-final-qa-and-handoff.md`.
- Updated README, about-project, screen contracts, TESTING_CHECKLIST, and CHANGELOG.


# Changelog

## SV Core Circle Protection Fix — 20 May 2026, 19:25 IST

- Fixed SV core becoming rounded-square after global button styling.
- Added protected circular CSS rules for `.sv-core`, `.entry-sv-mini`, `.core-ring`, and `.core-inner`.
- Added `steps/26-sv-core-circle-protection-fix.md`.
- Updated screen contracts and testing checklist.


# Changelog

## Interaction Fix — Zoom, Touch, Buttons, Product Details — 20 May 2026, 19:15 IST

- Added robust background zoom patch for desktop double-click.
- Added robust plus/minus/slider zoom binding.
- Added touch pinch zoom and two-finger double-touch zoom toggle.
- Added reliable product detail outside/backdrop click close behavior.
- Added global button compact styling confirmation across screens.
- Added `steps/25-interaction-fix-zoom-touch-buttons.md`.
- Updated README and TESTING_CHECKLIST.


# Changelog

## Global Button and Product Detail Outside Click Fix — 20 May 2026, 18:55 IST

- Added robust product detail outside-click closing.
- Product detail now closes on backdrop/outside click and Escape.
- Added global button sizing system across all screens/pages.
- Applied smaller readable buttons to mission actions, HUD, guide, zoom, product actions, overlay actions, and Launch Dock.
- Added `steps/24-phase-3-global-buttons-overlay-fix.md`.
- Updated screen contracts, README, about-project, and testing checklist.


# Changelog

## Phase 3 Code Fix — Product Overlay HTML Shell — 20 May 2026, 18:42 IST

- Added missing `#productDetailOverlay` shell to `index.html`.
- Confirmed Product Gallery overlay CSS exists in `css/portfolio-style.css`.
- Confirmed Product Gallery overlay JS exists in `js/portfolio-scripts.js`.
- Added `steps/23-phase-3-code-fix-product-overlay.md`.
- Updated README and TESTING_CHECKLIST.


# Changelog

## Phase 3 Product Gallery Responsive Focus — 20 May 2026, 18:20 IST

- Refined Product Gallery desktop layout to use available screen space better.
- Hid repeated scene info/status in Product Gallery.
- Hid Start Auto Flight / Learn Controls in Product Gallery.
- Added compact default Product Gallery state.
- Added `View Mission Details` trigger.
- Added full product detail overlay with blur backdrop.
- Added close/cross button for product detail overlay.
- Added previous/next product arrows inside detail overlay.
- Improved mobile Product Gallery readability and reduced visible content.
- Added `steps/22-phase-3-product-gallery-responsive-focus.md`.
- Updated Product Gallery screen contract and testing checklist.


# Changelog

## Phase 3 — Product Gallery Mission Scan — 20 May 2026, 18:45 IST

- Improved Product Gallery as a separate product mission layer.
- Added Challenge / Solution / Stack / Result structure to products.
- Added mission codes for products.
- Added product scan previous/next controls.
- Product beacons now update the focused product on hover/focus in Product Gallery.
- Technology orbit is dimmed more clearly during Product Gallery.
- Mobile Product Gallery stays one focused panel, not a grid.
- Added `steps/21-phase-3-product-gallery.md`.
- Updated Product Gallery screen contract and testing checklist.


# Changelog

## Phase 2 Interaction Refinement — 20 May 2026, 18:25 IST

- Removed `Pilot the ship` from the first guide flow.
- Removed `Step 1 of 7` style guide label and replaced it with `MISSION BRIEFING`.
- Added a skip/close action to the guide card.
- Added a desktop rocket lap after entry before returning to cursor.
- Added subtle desktop background motion based on mouse movement.
- Added desktop double-click zoom toggle.
- Kept touch pinch zoom and added two-finger double-touch zoom toggle.
- Added `steps/20-phase-2-interaction-refinement.md`.
- Updated relevant screen contracts and testing checklist.


# Changelog

## Phase 2 — Technology Orbit Update — 20 May 2026, 18:20 IST

- Improved Technology Orbit as its own focused scene.
- Added generated Technology Scan focus panel inside the orbit layer.
- Hover/focus now updates the technology scan panel.
- Click/tap still opens the detail tooltip/bottom sheet.
- Increased Technology Orbit movement speed slightly.
- More core/deep skill particles are available in Technology Orbit on desktop/tablet.
- Preserved separation from Product Gallery, Proof Ring, Client Signals, and Launch Dock.
- Added `steps/19-phase-2-technology-orbit.md`.
- Updated the Technology Orbit screen contract and testing checklist.


# Changelog

## Phase 1 Entry Background Only — 20 May 2026, 18:05 IST

- Hid skill labels and inner scene content before the user clicks Start.
- Kept the animated universe background visible on the first screen.
- Kept subtle SV core/background atmosphere allowed before Start.
- Skills/tools now appear only after the user starts the journey.
- Added `steps/18-phase-1-entry-background-only.md`.
- Updated Mission Entry, Launch Sequence, and Arrival Core screen contracts.
- Updated README, about-project, and testing checklist.


# Changelog

## Phase 1 Start Flow Refinement — 20 May 2026, 17:55 IST

- Changed entry heading to `Welcome to Shrimo Verse.`
- Changed entry CTA to `Start`.
- Reduced excessive line spacing on the entry screen.
- Made entry screen use the same universe/stage background instead of feeling separate.
- Improved desktop launch so the rocket moves toward the center after Start.
- Increased launch star/particle travel speed for a stronger movement feeling.
- Added `steps/17-phase-1-start-flow-refinement.md`.
- Updated Phase 1 screen contracts and testing checklist.


# Changelog

## Phase 1 — Entry / Launch / Arrival Update — 20 May 2026, 17:35 IST

- Improved Mission Entry first impression with stronger circular black/cyan atmosphere.
- Added stronger launch-state animation behavior without adding a new CSS file.
- Preserved background continuity from entry into Arrival Core.
- Improved desktop previous/next arrow visibility after entry.
- Improved first tutorial behavior after user enters the journey.
- Reduced oversized heading/radius behavior in Phase 1 areas.
- Added `steps/16-phase-1-entry-launch-arrival.md`.
- Updated Phase 1 screen contracts.


# Changelog

## Screen Contracts and Meaningful Change Protocol Added — 20 May 2026, 17:05 IST

- Added `steps/screen-contracts/` as the source of truth for every original screen/scene.
- Added a detailed screen contract for Mission Entry, Launch Sequence, Arrival Core, Technology Orbit, Product Gallery, Proof Ring, Client Signals, and Launch Dock.
- Added `steps/screen-contracts/00-contract-index.md`.
- Added `steps/15-meaningful-change-protocol.md`.
- Updated README, about-project, project-rules, TESTING_CHECKLIST, and steps index.
- Future work must update the matching screen contract before code changes.
- Future changes must be meaningful, contract-based, and not random patch stacking.


# Changelog

## Final stable production build

### Visual system
- Rebuilt Shrimo Verse as a full-screen universe interface.
- Removed grid/dashboard look.
- Added pure black cinematic background with subtle star field.
- Made SV / Shrimo Verse the fixed center core.
- Added product gallery orbit objects.
- Simplified particle labels by removing category prefixes.

### Interaction
- Added SVG HUD controls with tooltips.
- Added desktop rocket cursor with yellow/orange flame.
- Added orange/yellow lock-on glow for particle hover.
- Added Orbit Zoom slider with min/max.
- Added Auto Flight loop through all universe zones.
- Added First Launch Guide.
- Added Return to Core and Pause Orbit.

### Mobile
- Added mobile-specific bottom control dock.
- Disabled rocket cursor on touch devices.
- Added tap-based particles and bottom-sheet tooltip behavior.
- Added swipe zone navigation and mobile-safe sizing.

### Content
- Added real reviews from Ram Dubey, Rajeev T., and Sergio W.
- Added technologies, tools, services, product objects, proof objects, review objects, and contact paths.
- Used profile/contact data for mobile, email, LinkedIn, location, skills, and professional positioning.

### Production stability
- No heavy WebGL dependency required for the stable build.
- JS syntax checked.
- JSON-LD kept valid.
- One H1 retained.
- No .git included.

## Cluster Fix Update

- Cleaned the central orbit so it now contains only skills, technologies, and selected tools.
- Removed products, reviews, proof, and contact actions from the SV core orbit.
- Added a separate Product Gallery layer with product dots and one focused gallery panel.
- Added a separate Client Signal layer with review dots and one readable review panel.
- Added a separate Proof Ring layer with proof dots and focused proof details.
- Kept Launch Dock separate as the final conversion area.
- Improved Auto Flight so it moves through clean layers instead of highlighting crowded orbit labels.
- Added zoom visibility rules so deeper tools only appear when the user zooms in.
- Added `SHRIMO_VERSE_CLUSTER_FIX_PLAN.md` to document the final cleanup decision.

## Recovered Cinematic Product Bug Fix — 20 May 2026, 17:20 IST

- Recovered the visually fuller working Shrimo Verse app as the base instead of the incomplete clean skeleton.
- Preserved the original stable decisions: fixed SV core, black cinematic background, desktop rocket cursor, mobile dock, no heavy WebGL dependency, technology-only orbit, Product Gallery, Proof Ring, Client Signals, and Launch Dock as separate layers.
- Fixed the product bugs reported after the incomplete build:
  - restored moving orbit particles around the SV core,
  - strengthened circular/cosmic background after entry,
  - restored desktop previous/next arrows,
  - forced first-launch guide to appear after entry,
  - reduced oversized heading/border radius styling,
  - improved safe-zone spacing to reduce content overlap,
  - improved canvas galaxy/starfield movement,
  - made the entry CTA more impressive with full “Enter Shrimo Verse” copy.
- Kept all mandatory docs, AI-agent files, and `steps/` planning system.

## Wordmark / Exit / Copyright / Arrow Cleanup — 20 May 2026, 23:10 IST

- Removed `SV` badge from the wordmark.
- Reduced the visible header to a floating top-right wordmark only.
- Moved exit control to the top-right corner.
- Added bottom-left desktop copyright.
- Removed border/background from prev/next arrows.
- Added `steps/43-wordmark-exit-copyright-arrow-cleanup.md`.
