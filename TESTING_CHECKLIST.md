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
