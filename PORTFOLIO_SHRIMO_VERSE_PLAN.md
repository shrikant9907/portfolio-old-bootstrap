# Shrimo Verse Production Plan

## Concept
Shrimo Verse is not a normal portfolio page. It is an immersive black-and-cyan interactive portfolio universe for Shrikant Yadav where every particle has meaning. The visitor enters the world, explores technology/tool/product/proof nodes, zooms into hidden details, opens tooltips, resets the view, and reaches a conversion dock that replaces the traditional footer.

## Core experience
The page behaves like a single living world, not separate visible sections. It uses one full-screen stage with meaningful objects, visual depth, and guided/explore interaction modes.

## World zones
1. **Arrival Core** - introduces Shrimo Verse, Shrikant Yadav, Shrimo Innovations, and the core proof line.
2. **Technology Orbit** - reveals technologies, tools, and services as clickable particles around the core.
3. **Product Constellation** - surfaces larger product bodies: Shrimo Innovations, Digiting Card, Photocopywala, and Business Directory Platform.
4. **Proof Belt** - highlights 12+ years, 300+ projects, 100+ developers trained, and products built.
5. **Conversion Dock** - replaces a normal footer with a launch station containing WhatsApp, email, LinkedIn, GitHub, and Shrimo links.

## Particle categories
- Identity: Shrikant Yadav, Shrimo Innovations, Shrimo Verse Core
- Technologies: HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, WordPress, MongoDB, MySQL
- Tools: Figma, GSAP, Three.js, Git, Search Console, Analytics, APIs
- Services: Business Websites, Web Applications, SEO-ready Structure
- Products: Digiting Card, Photocopywala, Shrimo.com, Directory Platform
- Proof: 12+ Years, 300+ Projects, 100+ Developers, Products Built
- Conversion: Start Project, WhatsApp, Email, LinkedIn

## Interaction model
- Guided Mode: mouse wheel or keyboard moves the visitor through universe zones.
- Explore Mode: mouse wheel zooms in/out so hidden tool particles become more visible.
- Reset View: returns the user to Arrival Core, closes tooltips, restores guided mode, and resets the camera zoom.
- Pause Motion: pauses CSS and Three.js ambient motion.
- Tooltips: clicking any particle opens a meaningful explanation.

## Cursor system
Desktop visitors get a custom cyan explorer ship cursor. It rotates based on movement direction, leaves a soft cyan/white energy trail, and creates a small pulse on click. Touch devices keep the normal tap experience.

## Zoom system
- 1.0x: universe overview.
- 1.2x+: tools and smaller technology particles become clearer.
- 1.45x+: deep inspection mode with larger readable nodes.
- Zoom can be controlled through mouse wheel in Explore Mode or the +/− control dock.

## Infinite loop behavior
Guided Mode loops from the Conversion Dock back to Arrival Core instead of ending the page. This creates the feeling of an endless universe without duplicating DOM or creating performance issues.

## Control dock behavior
The top control bar is not a normal navbar. It is a studio control system with Guided Mode, Explore Mode, Pause Motion, Reset View, and Start Project.

## Footer/base station plan
There is no separate footer. The final visible world state is the Shrimo Base Station / Conversion Dock, containing the footer information and contact paths inside the universe itself.

## Responsive plan
- Desktop: full Shrimo Verse with ship cursor, Three.js field, zoom, tooltips, and guided/explore controls.
- Tablet: same world with reduced spacing and simplified control layout.
- Mobile: no custom cursor, reduced world scale, tappable nodes, simplified controls, and visible zoom/state docks.

## Performance plan
- Three.js is only used for a lightweight background field and meaningful object point map.
- All readable content and tooltips remain real HTML.
- Motion can be paused.
- Animations respect prefers-reduced-motion.
- No external images or heavy textures are used for the universe.

## Accessibility plan
- Skip link included.
- Entry dialog has accessible labels.
- Keyboard navigation supports arrows, page keys, plus/minus, Escape, and R reset.
- Focus styles are visible.
- Reduced motion mode skips heavy animation and disables moving effects.
- Tooltips can be closed and do not trap focus.

## Files modified
- `index.html`
- `css/portfolio-style.css`
- `js/portfolio-scripts.js`
- `PORTFOLIO_SHRIMO_VERSE_PLAN.md`
- `CHANGELOG.md`
- `TODO.md`

## Quality checklist
- Entry screen says “You are going to enter Shrimo Verse”.
- Enter and Skip intro work.
- Guided Mode works.
- Explore Mode works.
- Reset View works.
- Pause Motion works.
- Zoom controls work.
- Particle tooltips open and close.
- Rocket cursor appears only on desktop.
- Cursor leaves a cyan trail.
- Footer content appears inside Conversion Dock.
- End loops back to Arrival Core.
- No fake reviews are used.
- All visible particles are meaningful.
- Black + Cyan color direction is maintained.

## Real Signal Update Plan

### Added trust state
The Shrimo Verse route now includes a dedicated **Client Signal Stream** state after the Proof Belt. This keeps trust inside the universe flow instead of placing testimonials in a normal page section.

### Real reviews added
- Ram Dubey, Khyati Overseas Private Limited
- Rajeev T., International client
- Sergio W., International client

### Base Station update
The footer remains part of the world as **Shrimo Base Station**. It now includes visible contact beacons, location signal, core stack signal, and profile/company paths.

### Loader update
The loader now clearly shows that the user is entering Shrimo Verse and that real client signals are being synced before the world opens.

## Final Polish Notes

The final polish pass prioritizes the screen-first Shrimo Verse model. The experience should not read as a website container. It should feel like a viewport-native interface where the world, content panels, controls, tooltip, reviews, and base station all exist on one interactive screen.

Primary polish decisions:
- Full viewport stage behavior using `100dvh` and `100vw`.
- More compact heading scale for 1366px screens.
- Full-screen aligned control bar instead of centered max-width navbar behavior.
- Stronger mobile interaction support with swipe, pan, pinch zoom, and double-tap reset.
- Mobile reviews use swipeable cards; mobile tooltip behaves like a docked bottom panel.
- All particles remain meaningful; no decorative-only objects are added.
