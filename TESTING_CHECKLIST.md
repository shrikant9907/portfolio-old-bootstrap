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
