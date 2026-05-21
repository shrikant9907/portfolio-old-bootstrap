# Testing Checklist — Shrimo Verse

Updated: 20 May 2026, 15:35 IST

## Package validation

- [ ] JavaScript syntax passes.
- [ ] CSS imports exist.
- [ ] HTML local file references exist.
- [ ] No duplicate IDs.
- [ ] No duplicate scripts.
- [ ] ZIP integrity passes.
- [ ] `.git`, `.github`, `.agents`, `.codex`, `node_modules`, and backup folders are excluded.
- [ ] `README.md`, `about-project.md`, and `project-rules.md` exist at root.

## Mobile 375px visual QA

- [ ] Mission Entry fits without overlap.
- [ ] CTA does not overlap text.
- [ ] Arrival Core has one focus.
- [ ] Technology Orbit nodes are tappable.
- [ ] Product Gallery shows focused beacons.
- [ ] Launch Dock WhatsApp CTA is clear.
- [ ] Bottom dock does not hide important content.
- [ ] No horizontal scroll.
- [ ] Guide appears above bottom controls.
- [ ] Settings is a readable bottom sheet.

## Tablet 768px visual QA

- [ ] Scene still feels focused.
- [ ] Touch controls remain usable.
- [ ] Panels do not compete with core.

## Desktop 1366px visual QA

- [ ] Mission Entry feels cinematic.
- [ ] SV core is protected.
- [ ] HUD is minimal, not navbar-like.
- [ ] No dashboard/live-deck appears by default.
- [ ] Guide does not block core.
- [ ] Settings does not cover main focus.
- [ ] Launch Dock feels like final destination, not footer.

## Browser/device testing to do locally

- [ ] Chrome desktop.
- [ ] Firefox desktop.
- [ ] Android Chrome.
- [ ] iPhone Safari.
- [ ] Reduced motion mode.
- [ ] Slow mobile device if available.

## Honesty rule

Do not claim Lighthouse scores or real device testing unless actually measured.


## Rocket Cursor Desktop Test

- [ ] On desktop/mouse device, the native cursor is hidden and the cyan rocket cursor is visible on the Mission Entry screen.
- [ ] Rocket cursor stays visible above the entry gate, HUD, guide, and settings layers.
- [ ] Rocket flame/trail appears when moving on normal motion mode.
- [ ] Hovering buttons/particles changes rocket hover state.
- [ ] Clicking creates a small burst.
- [ ] On mobile/touch devices, rocket cursor is disabled and normal touch controls work.
- [ ] In reduced-motion mode, cursor remains visible on desktop but trail/noisy flame motion is reduced.


## Steps Folder Validation

Updated: 20 May 2026, 15:40 IST

- [ ] Root `steps/` folder exists.
- [ ] `steps/00-steps-index.md` exists.
- [ ] All scene step markdown files exist.
- [ ] Matching step file was updated for any changed scene.
- [ ] Each completed scene passes its step checklist.

## Step Flow Management Validation

Updated: 20 May 2026, 16:10 IST

Before approving a scene:

- [ ] Previous scene is defined.
- [ ] Next scene is defined.
- [ ] Trigger is defined.
- [ ] Connected layers/cards are listed.
- [ ] Mobile animation is defined.
- [ ] Tablet animation is defined.
- [ ] Desktop animation is defined.
- [ ] Failure risks are listed.
- [ ] Scene completion test is present.
- [ ] Relevant step file is updated.

## AI Agent File Validation

Updated: 20 May 2026, 16:25 IST

Before final ZIP:

- [ ] `AI_AGENT_START_HERE.md` exists.
- [ ] `AGENTS.md` exists.
- [ ] `CLAUDE.md` exists.
- [ ] `GEMINI.md` exists.
- [ ] Agent files point to `project-rules.md`.
- [ ] Agent files point to `about-project.md`.
- [ ] Agent files point to `CHANGELOG.md`.
- [ ] Agent files point to `steps/`.


## Recovered Product Bug QA

Verify entry impact, circular background after entry, moving orbit particles, desktop arrows, first guide, no content overlap, medium font/radius, galaxy movement, and launch dock clarity.

## Screen Contract Validation

Updated: 20 May 2026, 17:05 IST

Before accepting a screen:

- [ ] Screen contract exists.
- [ ] Previous/current/next states are defined.
- [ ] Visible and hidden elements are defined.
- [ ] Animation plan exists.
- [ ] Mobile/tablet/desktop behavior exists.
- [ ] Failure risks are listed.
- [ ] Acceptance criteria pass.
- [ ] Related code change is documented.

## Phase 1 Testing

Updated: 20 May 2026, 17:35 IST

Check these first:

- [ ] Mission Entry looks cinematic, not like a website hero.
- [ ] Circular black/cyan background is visible before entry.
- [ ] Enter Shrimo Verse triggers launch transition.
- [ ] Background remains consistent after entry.
- [ ] Arrival Core shows SV core.
- [ ] Particles move around core.
- [ ] Desktop previous/next arrows appear.
- [ ] Initial tutorial appears after entry unless completed in current session.
- [ ] Mobile has no rocket cursor.
- [ ] No content overlaps core/HUD/dock.

## Phase 1 Start Flow Refinement Test

Updated: 20 May 2026, 17:55 IST

- [ ] Heading says `Welcome to Shrimo Verse.`
- [ ] Button says `Start`.
- [ ] Entry line spacing is not too loose.
- [ ] Entry and inner screen feel like one background.
- [ ] Desktop rocket moves toward center on Start.
- [ ] Launch particles travel outward with speed.
- [ ] Mobile has no rocket cursor.
- [ ] Tablet keeps background continuity.

## Phase 1 Entry Background Only Test

Updated: 20 May 2026, 18:05 IST

- [ ] First screen does not show skill labels.
- [ ] First screen does not show technology particles.
- [ ] Animated circular background is visible.
- [ ] Start CTA is visible.
- [ ] After Start, journey content appears.
- [ ] Mobile/tablet/desktop do not reveal skills before Start.

## Phase 2 Technology Orbit Test

Updated: 20 May 2026, 18:20 IST

- [ ] Start the journey and reach Technology Orbit.
- [ ] Skill/tool particles move around the SV core.
- [ ] Products/proof/reviews/contact are not mixed into the orbit.
- [ ] Hover/focus updates the Technology Scan panel on desktop.
- [ ] Click/tap opens detail panel or bottom sheet.
- [ ] Zoom reveals deeper tools.
- [ ] Mobile shows compact technology focus without overlap.
- [ ] Previous/next arrows still work on desktop.

## Phase 2 Interaction Refinement Test

Updated: 20 May 2026, 18:25 IST

- [ ] Guide does not show `Step 1 of 7`.
- [ ] Guide does not show `Pilot the ship`.
- [ ] Guide can be skipped/closed.
- [ ] Rocket takes one round after entering on desktop.
- [ ] Rocket returns to cursor after the round.
- [ ] Desktop mouse movement subtly moves background.
- [ ] Desktop double-click toggles zoom.
- [ ] Mobile pinch/two-finger zoom works.

## Phase 3 Product Gallery Test

Updated: 20 May 2026, 18:45 IST

- [ ] Product Gallery appears after Technology Orbit.
- [ ] Product Gallery shows one product focus at a time.
- [ ] Product scan has Challenge / Solution / Stack / Result.
- [ ] Product beacons switch active product.
- [ ] Product scan previous/next arrows work.
- [ ] Mobile does not show a product grid.
- [ ] Technology particles are dimmed in Product Gallery.
- [ ] Proof/reviews/contact do not appear as competing content.

## Phase 3 Product Gallery Responsive Focus Test

Updated: 20 May 2026, 18:20 IST

- [ ] Product Gallery default mobile view is compact.
- [ ] Full details are hidden until user clicks View Mission Details.
- [ ] Detail overlay has blur backdrop.
- [ ] Detail overlay has close button.
- [ ] Detail overlay has previous/next product arrows.
- [ ] Backdrop click closes overlay.
- [ ] Escape closes overlay.
- [ ] Start Auto Flight and Learn Controls are hidden in Product Gallery.
- [ ] Desktop uses left/center/right space cleanly.

## Phase 3 Product Overlay Code Test

Updated: 20 May 2026, 18:42 IST

- [ ] `#productDetailOverlay` exists in `index.html`.
- [ ] `View Mission Details` opens the overlay.
- [ ] Overlay close button works.
- [ ] Overlay backdrop click works.
- [ ] Overlay previous/next arrows work.
- [ ] Mobile overlay slides from bottom.

## Global Button and Overlay Fix Test

Updated: 20 May 2026, 18:55 IST

- [ ] Product detail closes when clicking outside the sheet.
- [ ] Product detail closes when clicking blurred backdrop.
- [ ] Product detail closes on Escape.
- [ ] Buttons look smaller on Mission Entry.
- [ ] Buttons look smaller on mission panels.
- [ ] HUD buttons remain compact.
- [ ] Guide buttons remain compact.
- [ ] Launch Dock buttons remain compact.
- [ ] Mobile buttons are still tappable.

## Interaction Fix — Zoom Touch Buttons Test

Updated: 20 May 2026, 19:15 IST

- [ ] Desktop double-click stage/background toggles zoom.
- [ ] Plus zoom button works.
- [ ] Minus zoom button works.
- [ ] Zoom slider works.
- [ ] Mobile pinch zoom works.
- [ ] Two-finger double touch toggles zoom.
- [ ] Product detail outside click closes overlay.
- [ ] Product detail backdrop click closes overlay.
- [ ] Escape closes product detail.
- [ ] Buttons are smaller globally but readable.

## SV Core Circle Protection Test

Updated: 20 May 2026, 19:25 IST

- [ ] SV core is circular on desktop.
- [ ] SV core is circular on mobile.
- [ ] Entry mini SV marker is circular.
- [ ] Global button rules do not make the core rounded-square.

## Final All Phases Test

Updated: 20 May 2026, 19:45 IST

- [ ] Mission Entry shows clean background and Start.
- [ ] Launch transition works.
- [ ] Arrival Core shows circular SV core.
- [ ] Technology Orbit has moving skills/tools.
- [ ] Product Gallery has compact scan and detail overlay.
- [ ] Proof Ring shows one proof focus and controls.
- [ ] Client Signals shows one readable review and controls.
- [ ] Launch Dock shows WhatsApp as primary.
- [ ] Buttons are compact globally.
- [ ] SV core remains circular.
- [ ] Desktop, tablet, and mobile layouts are visually checked.

## Realistic Universe Background Test

Updated: 20 May 2026, 20:05 IST

- [ ] Background is black.
- [ ] Many small stars are visible.
- [ ] Some larger stars shine/blink.
- [ ] Soft galaxy/dust clusters move slowly.
- [ ] Large decorative background rings are not visible.
- [ ] Entry and inner scenes use one continuous background.
- [ ] Desktop mouse movement shifts background opposite direction.
- [ ] SV core does not move with mouse.
- [ ] UI panels do not move with mouse.
- [ ] Mobile remains smooth.

## Background Parallax Visibility Test

Updated: 20 May 2026, 20:20 IST

- [ ] Move mouse right: background shifts subtly left.
- [ ] Move mouse left: background shifts subtly right.
- [ ] Move mouse down: background shifts subtly up.
- [ ] SV core stays fixed.
- [ ] UI panels stay fixed.
- [ ] Mobile background does not use mouse parallax.

## Pure Black Starfield Test

Updated: 20 May 2026, 20:35 IST

- [ ] Background is pure black.
- [ ] No cloud/fog clusters are visible.
- [ ] No background gradients are visible.
- [ ] No decorative rings are visible.
- [ ] Star count looks noticeably higher.
- [ ] Mouse movement affects stars more strongly on desktop.
- [ ] SV core stays fixed.

## Transparent UI and Circular Controls Test

Updated: 20 May 2026, 20:55 IST

- [ ] Cards/panels are around 50% transparent.
- [ ] Start button remains solid.
- [ ] Step bullets have no heavy wrapper.
- [ ] Zoom bar has no heavy wrapper.
- [ ] Icon controls are circular.
- [ ] Exit button appears after Start.
- [ ] Exit button returns to Mission Entry.
- [ ] SV core remains circular.

## Screenshot QA No Dotted Rings Test

Updated: 20 May 2026, 21:10 IST

- [ ] Technology Orbit has no dotted background ring.
- [ ] Product Gallery has no dotted/guide ring.
- [ ] Proof Ring has no dotted/guide ring.
- [ ] Client Signals has no dotted/guide ring.
- [ ] Proof signals are circular.
- [ ] Proof detail panel text does not overlap.
- [ ] Technology tooltip hides duplicate scan panel.
- [ ] Bottom-left repeated state readout is hidden.

## Bottom-Right Vertical HUD Controls Test

Updated: 20 May 2026, 21:25 IST

- [ ] Main HUD controls are not shown as a top-right row.
- [ ] Main HUD controls appear bottom-right on desktop.
- [ ] Main HUD controls are vertical.
- [ ] Controls remain circular.
- [ ] Zoom control does not overlap the control rail.
- [ ] Bottom step navigation remains centered.
- [ ] Mobile bottom dock remains primary.

## Top-Right Controls Visibility Test

Updated: 20 May 2026, 21:40 IST

- [ ] HUD controls are visible top-right on desktop.
- [ ] HUD controls are visible top-right on tablet.
- [ ] HUD controls are visible top-right on mobile.
- [ ] Controls are circular.
- [ ] Controls are not hidden on mobile.
- [ ] Controls are not stuck at bottom-right.

## Bottom-Right Floating Icon Controls Test

Updated: 20 May 2026, 22:00 IST

- [ ] HUD controls appear bottom-right.
- [ ] Controls have no background.
- [ ] Controls have no border wrapper.
- [ ] Controls stack vertically.
- [ ] Hover/focus shows tooltip.
- [ ] Mobile/tablet/desktop controls remain visible.

## Left-Center Clean Zoom Control Test

Updated: 20 May 2026, 22:18 IST

- [ ] Zoom control is positioned at left-center on desktop.
- [ ] Zoom control is positioned at left-center on tablet.
- [ ] Zoom control is positioned at left-center on mobile.
- [ ] Zoom control has no background.
- [ ] Zoom control has no border.
- [ ] Zoom control has no wrapper card.

## Controls Visible and Actual Zoom Dock Fix Test

Updated: 20 May 2026, 22:35 IST

- [ ] HUD controls are visible at bottom-right.
- [ ] HUD controls have no background.
- [ ] HUD controls have no border.
- [ ] Hover/focus tooltip appears on HUD controls.
- [ ] Zoom dock is left-center.
- [ ] Zoom dock has no background.
- [ ] Zoom dock has no border.
- [ ] Zoom dock is no longer right-side.

## Final Visible Controls Rail Test

Updated: 20 May 2026, 22:55 IST

- [ ] After Start, controls appear bottom-right.
- [ ] Controls are not hidden by the header.
- [ ] Controls have no background.
- [ ] Controls have no border.
- [ ] Hover/focus tooltip appears.
- [ ] Zoom dock is left-center.
- [ ] Browser loads cache-busted CSS/JS.

## Wordmark / Exit / Copyright / Arrow Cleanup Test

- [ ] ShrimoVerse shows without the SV badge.
- [ ] Wordmark is visible at the top-right after entering.
- [ ] Exit control is at the top-right corner.
- [ ] Copyright is bottom-left on desktop.
- [ ] Prev/next arrows have no border or background.

## Phase 44 Visual Hierarchy Cleanup Test

Updated: 20 May 2026, 23:35 IST

- [ ] Right floating icons are visible but less bright.
- [ ] Only hover/active icon glows strongly.
- [ ] ShrimoVerse wordmark is smaller and quieter.
- [ ] Mission panel no longer shows repeated action buttons.
- [ ] Zoom control is closer to left edge and less intrusive.
- [ ] Arrival Core has fewer/calm labels.
- [ ] Bottom navigation is clean.
- [ ] Desktop copyright is subtle.

## Phase 45 Core Center Protection Test

Updated: 20 May 2026, 23:50 IST

- [ ] SV core is exactly centered on desktop.
- [ ] SV core is exactly centered on tablet.
- [ ] SV core is exactly centered on mobile.
- [ ] Technology particles orbit around the centered core.
- [ ] Changing UI panels does not move the core.
- [ ] `.universe-plane` remains absolute/full-screen.

## Phase 46 Mobile Screen Fix Test

Updated: 20 May 2026, 23:59 IST

- [ ] Mobile does not show duplicate right-side floating controls.
- [ ] Mobile bottom dock remains visible and primary.
- [ ] Exit stays visible top-right.
- [ ] Arrival title fits without feeling oversized.
- [ ] Zoom is subtle and close to the left edge.
- [ ] Arrival Core has fewer visible labels.
- [ ] SV core is centered and readable.

## Phase 47 Entry Screen Purity Fix

**Updated:** 21 May 2026, 00:18 IST

Phase 47 cleans the pre-start entry screen so only the cinematic welcome layer is visible.

See: `steps/47-entry-screen-purity-fix.md`

## Phase 48 Mobile Arrival Layout Polish Test

Updated: 21 May 2026, 00:38 IST

- [ ] Arrival Core heading is compact on mobile.
- [ ] Mission panel does not feel cramped.
- [ ] Zoom is subtle and near the left edge.
- [ ] SV core is centered.
- [ ] Arrival Core shows fewer nodes.
- [ ] Bottom dock remains primary.

## Phase 49 Logo Left + Arrival Node Center Fix Test

Updated: 21 May 2026, 00:58 IST

- [ ] Logo shows at top-left.
- [ ] Exit shows at top-right.
- [ ] Mobile Arrival shows only a few centered nodes around SV.
- [ ] Nodes look balanced around the core.

## Phase 50 Mobile Scene Stability Fix Test

- [ ] Product Gallery card fits above the mobile dock.
- [ ] Proof Ring card is centered and not clipped.
- [ ] Client Signals card is readable.
- [ ] Launch Dock is compact and not scroll-heavy.
- [ ] Right-side desktop controls are hidden on mobile.

## Phase 51 Final Mobile Issue Fixes Test

Updated: 21 May 2026, 02:10 IST

- [ ] Arrival Core mobile shows 4 balanced nodes outside the SV core radius.
- [ ] No node goes behind or overlaps the core.
- [ ] Product Gallery mobile card is readable and stable.
- [ ] Proof Ring mobile card is not clipped.
- [ ] Client Signals mobile card is readable.
- [ ] Launch Dock mobile shows all visible buttons fully without clipping.
- [ ] Launch Dock mobile does not duplicate WhatsApp as both primary and secondary CTA.

## Phase 52 Mobile Safe Zone and Card Containment Test

Updated: 21 May 2026, 02:40 IST

- [ ] Product Gallery buttons are fully visible above the mobile dock.
- [ ] Launch Dock primary CTA is fully visible above the mobile dock.
- [ ] Launch Dock secondary actions are not cropped.
- [ ] Client Signal card is readable and not under the dock.
- [ ] Proof Ring card is not clipped.
- [ ] Arrival Core nodes do not overlap the SV core.
- [ ] Tablet card layout is contained.
- [ ] Desktop panels do not touch bottom controls.

## Phase 54 Planned Structure Conversion Test

Updated: 21 May 2026, 03:55 IST

- [ ] `css/portfolio-style.css` is import-only.
- [ ] CSS modules load in the planned order.
- [ ] `js/portfolio-scripts.js` is an ES module entrypoint.
- [ ] `index.html` uses `type="module"`.
- [ ] Current UI still loads after runtime bridge.
- [ ] Old root docs are archived.
- [ ] Old phase-fix step files are archived.
- [ ] Active docs exist under `docs/`.

## Phase 55 Brand Safe Zone Fix Test

Updated: 21 May 2026, 10:45 IST

- [ ] Desktop: no technology particle passes behind the ShrimoVerse logo.
- [ ] Tablet: no technology particle passes behind the ShrimoVerse logo.
- [ ] Mobile: logo remains readable.
- [ ] Exit remains visible top-right.
- [ ] SV core remains centered.

## Phase 56 Desktop Card / Control Rail Safe Fix Test

Updated: 21 May 2026, 11:08 IST

- [ ] Desktop Arrival: no moving label appears behind logo.
- [ ] Desktop Technology: tooltip/card does not overlap side controls.
- [ ] Desktop Product: card does not overlap side controls and guide is hidden.
- [ ] Desktop Proof: card does not overlap side controls and guide is hidden.
- [ ] Desktop Client: card does not overlap side controls and guide is hidden.
- [ ] Desktop Launch: card/actions do not overlap side controls and guide is hidden.
- [ ] Tablet: card stays left of controls.
- [ ] Mobile: unchanged from previous safe-zone behavior.

## Phase 57 Desktop Logo / Card Overlap Real Fix Test

Updated: 21 May 2026, 11:24 IST

- [ ] Desktop: rocket/particles do not appear behind logo.
- [ ] Desktop Arrival: guide is on right, not over left mission.
- [ ] Desktop Product: guide hidden, product card not over controls.
- [ ] Desktop Proof: guide hidden, proof card not over controls.
- [ ] Desktop Client: guide hidden, review card not over controls.
- [ ] Desktop Launch: guide hidden, launch card not over controls.
- [ ] Tablet follows same safe-zone behavior.
- [ ] Mobile unchanged.

## Phase 58 Desktop Final Lane Stability Fix Test

Updated: 21 May 2026, 11:42 IST

- [ ] Desktop logo area has no particles/rocket/trail behind it.
- [ ] Desktop guide does not appear over left mission text.
- [ ] Product card does not overlap right icon rail.
- [ ] Proof card does not overlap right icon rail.
- [ ] Client card does not overlap right icon rail.
- [ ] Launch card does not overlap right icon rail.
- [ ] Technology tooltip suppresses guide overlay.
- [ ] Mobile view remains unchanged.

## Phase 59 Desktop Orbit Particles Restored Test

Updated: 21 May 2026, 11:58 IST

- [ ] Desktop Arrival shows visible particles around SV core.
- [ ] Desktop Technology shows fuller moving technology orbit.
- [ ] No particle passes behind ShrimoVerse logo.
- [ ] Product/Proof/Client/Launch cards still avoid the right control rail.
- [ ] Mobile remains unchanged.

## Phase 60 Desktop Orbit Visual Verification Test

- [ ] Desktop Arrival has visible nodes around SV.
- [ ] Desktop Technology has readable nodes in two rings.
- [ ] Technology tooltip does not overlap guide.
- [ ] Nodes do not pass behind the logo.
- [ ] Product/Proof/Client/Launch cards avoid the right rail.
- [ ] Mobile remains unchanged.

## Phase 61 Desktop Orbit No-Overlap Test

- [ ] Desktop Arrival has 6 calm nodes around SV.
- [ ] Desktop Technology has readable non-overlapping nodes.
- [ ] Technology guide card is hidden.
- [ ] Nodes stay outside the logo safe zone.
- [ ] Mobile unchanged.

## Phase 62 Desktop Orbit Controller Cleanup Test

- [ ] Desktop Arrival only shows Phase61 clean orbit nodes.
- [ ] Desktop Technology only shows Phase61 clean orbit nodes.
- [ ] No node labels overlap.
- [ ] No nodes enter brand safe zone.
- [ ] Cards still avoid right-side controls.

## Phase 63 Production QA Checkpoint Test

Updated: 21 May 2026, 12:20 IST

- [ ] Desktop: all scenes visually checked.
- [ ] Tablet: all scenes visually checked.
- [ ] Mobile: all scenes visually checked.
- [ ] Refresh restore checked.
- [ ] Tutorial visual spotlight checked.
- [ ] Social/contact icons checked.
