# Changelog

## Shrimo Verse Production Version

### Creative direction
- Renamed the experience to **Shrimo Verse**.
- Replaced the normal portfolio/section feeling with a single interactive universe.
- Changed the experience model from scrolling sections to guided/explore world states.
- Applied a strict Black + Cyan visual system.

### Entry experience
- Added cinematic entry gate: “Preparing Shrimo Verse” and “You are going to enter Shrimo Verse”.
- Added Enter Shrimo Verse and Skip intro actions.
- Added smooth core formation animation.

### Interaction
- Added Guided Mode.
- Added Explore Mode.
- Added Reset View.
- Added Pause Motion.
- Added zoom controls.
- Added keyboard controls.
- Added loop behavior from Conversion Dock back to Arrival Core.

### World system
- Added meaningful universe particles for identity, technologies, tools, services, products, proof, and conversion.
- Added clickable tooltips for every particle.
- Added zoom-based reveal behavior for hidden tool particles.
- Added Shrimo Verse Core as the main visual anchor.

### Cursor
- Added desktop-only custom ship/rocket cursor.
- Added cyan/white fire trail while moving.
- Added click burst trail effect.
- Disabled custom cursor for touch/mobile devices.

### Footer / conversion
- Removed the feeling of a separate footer.
- Added **Shrimo Base Station / Conversion Dock** as the final world zone.
- Added WhatsApp, Email, LinkedIn, GitHub, and Shrimo contact paths.

### Performance and accessibility
- Kept readable text in HTML, not WebGL.
- Used Three.js only for lightweight atmosphere/meaningful point field.
- Added prefers-reduced-motion handling.
- Added skip link and keyboard controls.
- Avoided fake reviews and meaningless particles.

## Real Signal Update

### Client trust
- Added three real client reviews supplied by the user.
- Added a new **Client Signal Stream** world state between Proof Belt and Conversion Dock.
- Added clickable trust particles for Khyati Overseas, Rajeev T., Sergio W., Clear Communication, and Practical Suggestions.
- Removed the earlier placeholder-only trust approach.

### Profile and contact grounding
- Updated Shrimo Verse objects and Base Station copy using uploaded profile details: Narmadapuram/Hoshangabad location, mobile, email, LinkedIn, Digiting Card profile, MERN + Next.js focus, React, Next.js, and TypeScript skills.
- Added Call and Digital Profile contact beacons inside the Conversion Dock.

### Loader and footer visibility
- Strengthened the loader sequence with visible status steps: Preparing Shrimo Verse → Syncing real client signals → You are going to enter Shrimo Verse.
- Expanded the footer into a visible **Shrimo Base Station** panel inside the same universe instead of a separate footer section.

## Final Polish Pass - Screen-First Shrimo Verse

- Added `SHRIMO_VERSE_FINAL_CHECKLIST.md`.
- Tuned the experience to work as a full-screen world instead of a container-based layout.
- Reduced heading scale for 1366px laptop screens.
- Made the fixed control bar full-screen aligned instead of max-width container aligned.
- Added stronger responsive typography clamps.
- Added touch gesture support:
  - swipe navigation in Guided Mode,
  - drag/pan in Explore Mode,
  - pinch zoom,
  - double-tap Reset View.
- Improved mobile control drawer behavior.
- Added mobile bottom-sheet tooltip behavior.
- Enlarged touch targets for mobile and tablet.
- Tuned review stream for horizontal mobile swiping.
- Kept rocket cursor desktop-only.
- Preserved real reviews and Shrimo Base Station footer-as-dock concept.
