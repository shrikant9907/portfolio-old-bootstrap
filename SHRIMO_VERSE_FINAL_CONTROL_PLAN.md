# Shrimo Verse Final Control Plan

## Product decision
Shrimo Verse is no longer treated as a normal portfolio or a normal page. It is a controllable full-screen universe. The visitor should feel they are entering a digital world, piloting a small rocket, zooming into meaningful particles, inspecting technologies/products/proof, and finally reaching the Launch Dock.

## What was going wrong
- Some headings were too large for 1366×768 screens and could overflow the visual stage.
- The entry screen looked clean but not immersive enough.
- The rocket did not feel active from the first screen.
- Zooming was only button/wheel based and not obvious enough.
- The core was visually too large by default.
- Particles needed a stronger hover/scan state.
- The universe needed more real technology particles.
- The user needed a system-controlled Auto Play path from Core to Launch Dock.

## Final correction direction
1. Keep the visual system black + cyan.
2. Use yellow/orange only for rocket thrust and hover scan energy.
3. Make the screen full-stage, not container-based.
4. Make headings readable first, cinematic second.
5. Make the SV core smaller by default and stronger on zoom.
6. Make every interaction controllable: zoom, mode, autoplay, pause, reset, launch.
7. Remove the visible entry skip button.
8. Add a stronger entry screen and fly-in animation.
9. Add an Auto Play mode to automatically show one information layer after another.

## Entry screen plan
- Text: “You are going to enter Shrimo Verse.”
- Supporting copy explains that the user can pilot, zoom, inspect, and launch.
- Hints appear: Move, Zoom, Inspect, Launch.
- Only one visible action: Enter Shrimo Verse.
- No visible skip button.
- Rocket cursor is active on desktop before entry.
- On click, the entry core expands and the world opens like a flight path.

## Heading scale rules
- 1366×768 desktop: main world headings target 32–42px.
- Large desktop: headings may grow, but max is controlled.
- Mobile: headings must remain around 22–31px.
- Panels can scroll internally if the viewport is too short, but should not feel like a page container.

## Core behavior
- SV core is smaller by default to keep the universe open.
- Zoomed state enlarges the core.
- Deep zoom enlarges it further, so the user feels they are entering the center object.

## Zoom control plan
- Top-right desktop zoom dock.
- Plus button.
- Minus button.
- Range slider with min/max limit.
- Current zoom label.
- Mobile keeps zoom controls near the bottom for thumb reach.

## Particle behavior
- All particles remain meaningful.
- Hover/selected particles use orange/yellow scan shadow.
- Tools are softer at normal zoom and become clearer when zoomed in.
- Active zone particles remain bright; inactive particles dim.

## Added technology/tool particles
- Tailwind CSS
- Bootstrap
- Sass / SCSS
- jQuery
- Express.js
- Redux
- JWT Auth
- WooCommerce
- Vercel / Hosting
- Performance

## Auto Play mode
Auto Play moves the visitor automatically through:
Core → Technology Orbit → Product Cluster → Signal Layer → Client Stream → Launch Dock.

For each state, Shrimo Verse opens a relevant tooltip:
- Core: Shrimo Verse Core
- Technology: Next.js
- Product: Digiting Card
- Signal: 300+ Projects
- Client Stream: Khyati Overseas review
- Launch Dock: Launch Project

## Mobile behavior
- No rocket cursor on touch devices.
- User taps particles to inspect.
- Zoom dock stays thumb-accessible.
- Tooltip behaves like a bottom sheet.
- Headings are smaller.
- Menu contains Guided Flight, Free Explore, Auto Play, Pause Orbit, Return to Core, and Flight Guide.

## Final quality checklist
- [x] Entry screen is more impressive.
- [x] No visible Skip Intro button.
- [x] Rocket cursor works from the first screen on desktop.
- [x] Rocket flame is yellow/orange.
- [x] Headings reduced for 1366×768.
- [x] Particle hover has orange scan shadow.
- [x] More technology/tool particles added.
- [x] SV core is smaller by default.
- [x] Core becomes bigger on zoom.
- [x] Zoom bar added with min/max limits.
- [x] Auto Play mode added.
- [x] Mobile behavior remains separate and touch-first.
- [x] Footer remains inside the universe as Launch Dock/Base Station.
