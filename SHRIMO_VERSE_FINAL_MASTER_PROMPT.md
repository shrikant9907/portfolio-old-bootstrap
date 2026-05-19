# Shrimo Verse Final Master Prompt

Act as a senior creative director, immersive UI designer, Three.js architect, GSAP motion designer, interaction designer, and production frontend developer.

Build Shrimo Verse as a full-screen controllable interactive universe, not a normal website. It should feel like a premium game-like product experience while staying professional and conversion-focused.

## Core requirements
- Use black + cyan as the main universe palette.
- Use yellow/orange only for rocket thrust and hover scan energy.
- No visible normal page containers.
- The interface must work as the screen itself.
- Hide the section feeling. Treat content as universe states.
- Make every particle meaningful.
- Add more technologies/tools as inspectable particles.
- User can zoom in/out using controls with min/max limits.
- User can click particles to open tooltips.
- User can reset view.
- User can pause orbit.
- User can use Free Explore.
- User can use Guided Flight.
- User can use Auto Play to move through information automatically.
- Footer must be Launch Dock/Base Station inside the universe.

## Entry screen
- Show: “You are going to enter Shrimo Verse.”
- Make the entry cinematic and impressive.
- The rocket cursor must work from the first desktop screen.
- No visible Skip Intro button.
- On Enter, animate like the user is going into the universe.

## Typography
- Headings must be smaller and readable on 1366×768.
- Headings must never overflow the screen height.
- Main state heading should be larger than body text but not dominate the viewport.

## Core behavior
- Keep SV / Shrimo Verse core small by default.
- On zoom, the core becomes bigger and more important.
- Deep zoom reveals tools and deeper technology details.

## Hover behavior
- Particle hover should show orange/yellow scan shadow.
- Selected particles should feel locked/scanned.
- Inactive particles should dim by state.

## Auto Play mode
- Auto Play should automatically move through:
  Core → Technology Orbit → Product Cluster → Signal Layer → Client Stream → Launch Dock.
- Each stage should open one important tooltip automatically.
- User can stop Auto Play anytime.

## Mobile
- No rocket cursor.
- Use tap, swipe, and bottom-sheet style tooltip.
- Zoom controls remain reachable.
- Text must remain readable.
- No horizontal scroll.
- Touch targets must be comfortable.

## Final testing
- Test at 1366×768 desktop.
- Test Android Chrome mobile.
- Test Enter animation, Auto Play, Free Explore, zoom slider, particle hover/click, reset, pause, and Launch Dock.
