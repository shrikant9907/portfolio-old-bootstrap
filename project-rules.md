# Shrimo Verse — Project Rules

**File Purpose:** Mandatory project rules and build standard  
**Project:** Shrimo Verse  
**Owner:** Shrikant Yadav / Shrimo Innovations  
**Last Updated:** 20 May 2026, 15:05 IST  
**Status:** Required in every future ZIP  

---

## 1. Non-Negotiable Project Identity

Shrimo Verse is **not a normal website**.

Shrimo Verse must be treated as:

- a cinematic interactive universe,
- a futuristic AI/product interface,
- a game-style exploration experience,
- a premium creative frontend showcase,
- and a guided portfolio journey that ends in a project conversation.

It must not feel like:

- a homepage with sections,
- a Bootstrap portfolio,
- a dashboard,
- a SaaS landing page,
- an article page,
- a card grid,
- or a normal website with space effects.

The correct feeling is:

> “I entered Shrimo Verse and now I am exploring a living digital universe.”

---

## 2. Core Build Rule

Do **not** fix UI problems by stacking new CSS/JS version files on top of broken layers.

Wrong process:

```txt
Problem found → add another CSS override
Problem found → add another JS guard
Problem found → package another version
```

Correct process:

```txt
Audit → identify root cause → remove conflict → consolidate structure → rebuild clean scene → visually verify → package
```

A future developer must always fix the root cause, not hide problems with late overrides.

---

## 3. Mandatory Build Process

Before writing new code, do this first:

1. Audit `index.html`.
2. Audit all CSS files and list what each file controls.
3. Audit all JS files and list what each file controls.
4. Identify duplicate controls.
5. Identify duplicate IDs.
6. Identify duplicate script references.
7. Identify obsolete patch/recovery files.
8. Identify CSS conflicts and z-index conflicts.
9. Identify dashboard/article/card-style UI that should be removed.
10. Create a cleanup map before implementation.

No major build should start without an audit.

---

## 4. Feature Completion Rule

A feature is complete only when it passes this full chain:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

Examples:

- Ripple feedback is not complete because CSS exists. It is complete only when tapping a real control shows the ripple.
- Performance mode is not complete because device detection exists. It is complete only when the visual layer actually changes particle count/effects.
- A mobile CTA is not primary because docs say so. It is primary only when the mobile UI visually enforces it.

---

## 5. Scene-First Experience Rule

The experience must be scene-based.

Scenes:

1. Mission Entry
2. Launch Sequence
3. Arrival Core
4. Technology Orbit
5. Product Gallery
6. Proof Ring
7. Client Signals
8. Launch Dock

Every scene must define:

- one main focus,
- one short title,
- one short supporting message,
- one clear next action,
- one animation identity,
- allowed controls,
- hidden elements,
- mobile behavior,
- tablet behavior,
- desktop behavior.

At any moment the user must clearly understand:

1. Where am I?
2. What am I looking at?
3. What can I do next?

If an element does not support the current scene, hide it, collapse it, or move it into a drawer.

---

## 6. One-Focus Rule

Do not show everything at once.

Correct:

- one visual focus,
- one short message,
- minimal HUD,
- optional detail drawer,
- guided next action.

Wrong:

- multiple panels open,
- dashboard widgets visible by default,
- large article-style text cards,
- scrollbars inside small panels,
- guide competing with settings,
- controls covering content,
- content overlapping the SV core.

---

## 7. Mobile-First Rule

Build from **375px mobile first**.

Mobile is not a compressed desktop.  
Mobile is the primary experience.

Mobile must have:

- no horizontal scroll,
- no rocket cursor,
- fewer particles,
- touch-first controls,
- 44px+ tap targets,
- readable text,
- bottom controls reachable by thumb,
- detail panels as bottom sheets,
- guide above bottom dock,
- one focus at a time,
- no large side panels,
- no dashboard layout,
- no article-style padding,
- no overlapping controls.

Then enhance for tablet and desktop.

---

## 8. Tablet Rule

At 768px:

- keep the mobile clarity,
- add more breathing space,
- keep touch-first interactions,
- do not show too many panels,
- do not turn the layout into a dashboard,
- allow wider sheets only when clarity improves.

---

## 9. Desktop Rule

At 1366px+:

- enhance cinematic depth,
- keep a clean transparent HUD,
- protect the SV core,
- keep bottom step navigation clean,
- add hover states only as enhancement,
- do not create a crowded navbar,
- do not create wide website sections,
- do not use article/card-heavy composition.

Desktop should feel more cinematic, not more cluttered.

---

## 10. Visual Identity Rule

The main visual identity is **Black + Cyan**.

Use:

```css
--black: #05070A;
--black-soft: #0B1016;
--surface: #111827;

--cyan: #22D3EE;
--cyan-bright: #67E8F9;
--cyan-soft: #A5F3FC;

--text: #F8FAFC;
--text-secondary: #B6C2CF;
--text-muted: #7C8A99;

--border-cyan: rgba(34, 211, 238, 0.22);
```

Orange/yellow is allowed only for:

- rocket fire,
- active step bullet,
- hover lock-on energy,
- click burst,
- launch emphasis.

Do not use orange/yellow for:

- normal selected controls,
- normal active buttons,
- settings UI,
- panel borders,
- general backgrounds,
- regular selected states.

Do not use:

- purple,
- red,
- green,
- random gradients,
- colorful particles,
- dashboard colors,
- bright website-style backgrounds.

---

## 11. Background Rule

The background must feel like deep black cinematic space.

Use:

- black void,
- sparse cyan dust,
- faint orbit rings,
- subtle circular trails,
- soft cyan glow,
- low-opacity atmospheric depth.

Avoid:

- grid wallpaper,
- dashboard patterns,
- noisy textures,
- colorful nebula,
- large flat blobs,
- section dividers,
- effects fighting with content.

The background supports the scene. It must never become the scene’s biggest problem.

---

## 12. Typography Rule

Use:

- Headings: Montserrat
- Body: Open Sans

Rules:

- headings must fit 1366×768,
- headings must never overlap the SV core,
- no giant text that breaks the universe,
- no long paragraphs in the main scene,
- body copy should be short and human,
- labels may feel technical,
- details go inside drawers/sheets.

Recommended scale:

```css
.entry-heading {
  font-size: clamp(30px, 3.8vw, 50px);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.state-heading {
  font-size: clamp(26px, 3.2vw, 46px);
  line-height: 1.18;
  letter-spacing: -0.02em;
}

.body-text {
  font-size: clamp(14px, 1.15vw, 17px);
  line-height: 1.65;
}

.small-label {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

---

## 13. Layout Safe Zones

Protect these areas:

- center SV core safe zone,
- top HUD zone,
- bottom step navigation zone,
- mobile bottom control zone,
- guide card zone,
- settings/panel zone.

Nothing important should overlap these zones.

If overlap happens, fix the layout root cause. Do not hide it with z-index.

---

## 14. SV Core Rule

The SV core is the sun of the universe.

Rules:

- fixed at viewport center,
- does not move randomly,
- everything orbits around it,
- protected safe zone around it,
- desktop size around 90–110px,
- laptop 1366px around 92px,
- mobile size around 60–72px,
- never overlaps heading, guide, tooltip, settings, or controls.

Visual:

- black glass circular body,
- cyan outer ring,
- soft breathing cyan glow,
- SV in bright cyan,
- subtle ring motion.

---

## 15. Mission Entry Rules

Mission Entry must build curiosity.

Required content:

```txt
SHRIMO VERSE MISSION CONTROL
You are about to enter Shrimo Verse
Pilot the rocket, scan meaningful particles, inspect technologies, product signals, proof, client trust, and reach the Launch Dock when you are ready.
Move · Zoom · Inspect · Launch
Enter Shrimo Verse
```

Rules:

- no Skip Intro button,
- no project cards,
- no dashboard blocks,
- no large bordered panels,
- rocket cursor active on desktop,
- rocket cursor disabled on mobile,
- CTA must not overlap text,
- transition must feel like launch, not page fade.

---

## 16. Launch Sequence Rules

When user clicks Enter:

1. Entry content fades.
2. Orbit expands.
3. Rocket accelerates.
4. SV core locks into center.
5. Universe stage appears.
6. Guide appears only if not already seen this session.

Maximum entry transition: around 2400ms.

Do not make the user wait too long.  
Do not use abrupt jumps.

---

## 17. Technology Orbit Rules

Only technologies, skills, and tools should orbit the SV core.

Allowed orbit groups:

```txt
Inner Orbit:
HTML5, CSS3, JavaScript, TypeScript

Middle Orbit:
React, Next.js, Node.js, Express.js, PHP, WordPress

Outer Orbit:
MongoDB, MySQL, Tailwind CSS, Bootstrap, Sass / SCSS, jQuery, Redux, JWT Auth

Deep Zoom Orbit:
WooCommerce, Git, Figma, GSAP, Three.js, APIs, Performance, Hosting, Analytics, Search Console
```

Do not orbit:

- projects,
- reviews,
- proof metrics,
- contact actions.

Particle labels must stay short:

```txt
HTML5
React
Next.js
Git
WordPress
```

Do not use labels like:

```txt
Technology - HTML
Tool - Git
Service - Website Design
```

---

## 18. Product Gallery Rules

Products must be separate from Technology Orbit.

Projects:

- Shrimo Innovations
- Digiting Card
- Photocopywala
- Business Directory Platform

Rules:

- do not orbit project names around the core,
- use beacons or a focused product layer,
- one focused product panel at a time,
- no card grid on mobile,
- no fake screenshots,
- if no image exists, use a black/cyan cinematic placeholder,
- panel should feel like a product scan, not a website card.

---

## 19. Proof Ring Rules

Proof must be separate from technologies and products.

Proof signals:

- 12+ Years Experience
- 300+ Projects Delivered
- 100+ Developers Trained
- Multiple Products Built

Rules:

- show proof as signal nodes/ring markers,
- keep numbers readable,
- one proof focus at a time,
- avoid oversized statistic cards,
- animate only when Proof Ring becomes active.

---

## 20. Client Signals Rules

Reviews must be separate from technology orbit.

Rules:

- use only real reviews,
- show one readable review at a time,
- 3 review signal dots,
- active dot may use orange/yellow glow,
- review should feel like an intercepted client signal,
- not a normal testimonial section.

---

## 21. Launch Dock Rules

Launch Dock replaces the footer.

Actions:

- WhatsApp
- Call
- Email
- LinkedIn
- GitHub
- Shrimo
- Digital Profile

Rules:

- final destination of the universe,
- WhatsApp is primary,
- black/cyan style,
- orange/yellow only for launch emphasis if needed,
- no footer layout,
- no article card feeling,
- no excessive padding,
- no repeated bordered chips,
- mobile CTA must be clear and tappable.

---

## 22. HUD Rules

The HUD must feel like a space explorer console, not a website navbar.

Desktop HUD:

Left:

- SV icon
- Shrimo Verse

Right icon controls:

- Guided Flight
- Free Explore
- Auto Flight
- Pause Orbit
- Return to Core
- Replay Guide
- Launch Project

Rules:

- SVG icons,
- tooltips,
- transparent/minimal header,
- no thick navbar border,
- no large framed bar,
- no crowded controls.

Mobile HUD:

- bottom controls,
- thumb reachable,
- not crowded,
- no seven-button tight row if it hurts usability.

---

## 23. Bottom Step Navigation Rules

Desktop:

- bottom-center,
- bottom: 10px,
- previous arrow,
- step bullets,
- next arrow.

Steps:

1. Arrival Core
2. Technology Orbit
3. Product Gallery
4. Proof Ring
5. Client Signals
6. Launch Dock

Active bullet:

- orange/yellow glow allowed.

Inactive bullet:

- muted cyan/grey.

---

## 24. Guide Rules

Guided Flight teaches the visitor how to use Shrimo Verse.

Guide steps:

- Pilot the ship
- Inspect skills
- Open details
- Product gallery
- Client signals
- Zoom deeper
- Return to Core
- Launch Project

Rules:

- short text,
- Back / Next / Finish,
- desktop bottom-right,
- mobile above bottom dock,
- does not block SV core,
- appears once per session,
- can be replayed,
- closes cleanly.

---

## 25. Auto Flight Rules

Auto Flight flow:

```txt
Arrival Core → Technology Orbit → Product Gallery → Proof Ring → Client Signals → Launch Dock → Stop
```

Rules:

- do not loop forever,
- user can pause,
- user interaction pauses/stops autoplay,
- end at Launch Dock,
- final state should guide user toward Launch Project.

---

## 26. Rocket Cursor Rules

Desktop only.

Visual:

- cyan rocket body,
- yellow/orange fire,
- sharp and premium,
- not cartoonish,
- not oversized,
- not distracting.

Behavior:

Idle:

- rocket visible,
- flame hidden or tiny.

Moving:

- flame appears,
- trail follows speed.

Hover particle:

- reticle appears,
- particle gets orange/yellow lock-on,
- label brightens.

Click:

- cyan burst,
- orange flash,
- tooltip opens.

Mobile:

- no rocket cursor,
- touch-first controls only.

---

## 27. Panel and Tooltip Rules

Desktop tooltip:

- floating black glass panel,
- cyan border,
- title,
- category,
- short description,
- close button.

Mobile tooltip:

- bottom sheet,
- readable text,
- close button,
- optional action button.

Rules:

- never block the SV core,
- never cover bottom navigation,
- close with Escape,
- one panel open at a time,
- avoid ugly internal scrollbars,
- avoid permanent large panels.

---

## 28. Motion Rules

Use:

- orbit motion,
- soft pulse,
- scan ring,
- fade + scale,
- zoom easing,
- subtle rocket trail,
- proof count-up only in Proof Ring.

Avoid:

- chaotic particles,
- fast spinning UI,
- over-bouncy animation,
- random effects,
- too much trail,
- animation that blocks reading.

Timing:

```txt
Hover: 160–220ms
Tooltip open: 300–420ms
Entry reveal: 800–1200ms
Universe entry: max 2400ms
Zoom movement: 280–360ms
Guide step reveal: 400–600ms
```

---

## 29. Accessibility Rules

Required:

- every control is a real button,
- aria-label on icon controls,
- keyboard focus visible,
- Escape closes panels,
- reduced motion supported,
- no focus traps,
- readable contrast,
- touch targets 44px+ on mobile,
- all essential actions usable without mouse-only interaction.

Reduced motion:

- stop orbit animation,
- remove cursor trail,
- simplify transitions,
- keep content fully available.

---

## 30. Performance Rules

Do:

- reduce particles on mobile,
- pause animation when tab inactive,
- avoid large textures,
- avoid memory leaks,
- throttle cursor trail,
- render only needed particles,
- avoid layout-heavy animations.

Do not:

- use hundreds of uncontrolled particles,
- add large images without purpose,
- keep console errors,
- include missing assets,
- include `.git` folder in final ZIP.

---

## 31. Documentation Rules

Every final ZIP must include these files at root:

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
```

`README.md` gives setup and quick developer entry.

`about-project.md` gives full project understanding.

`project-rules.md` defines the mandatory build standard.

All three must stay together.

---

## 32. Visual QA Before Packaging

Before packaging, visually verify:

Mobile 375:

- Mission Entry
- Arrival Core
- Technology Orbit
- Product Gallery
- Launch Dock
- Guide open
- Settings open

Tablet 768:

- Arrival Core
- Product Gallery
- Settings

Desktop 1366:

- Mission Entry
- Arrival Core
- Technology Orbit
- Guide open
- Settings open
- Launch Dock

Do not package if:

- text is unreadable,
- controls overlap,
- panel has ugly internal scroll,
- SV core is covered,
- too many panels are visible,
- background covers content,
- mobile feels squeezed,
- desktop feels like dashboard,
- it looks like website layout.

---

## 33. Packaging Rules

Before creating ZIP:

1. Validate all local file references.
2. Validate CSS imports.
3. Run JavaScript syntax checks.
4. Check duplicate IDs.
5. Check duplicate scripts.
6. Exclude `.git`, `.github`, `.agents`, `.codex`, `node_modules`, and backup folders.
7. Include `README.md`, `about-project.md`, and `project-rules.md` at root.
8. Check ZIP integrity.
9. Be honest about what was and was not visually tested.

---

## 34. Final Success Definition

A successful Shrimo Verse build feels:

- cinematic,
- interactive,
- controlled,
- minimal,
- premium,
- game-like,
- futuristic,
- readable,
- fast,
- memorable.

It fails if it feels:

- like a website,
- like a dashboard,
- like Bootstrap,
- like an article page,
- like random animation,
- like too much content,
- like overlapping UI,
- like old web design.

---

## 35. Required First Output Before Future Major Builds

Before changing code for any future major build, output:

1. Audit findings.
2. Conflicting files list.
3. Files to delete or merge.
4. Clean target structure.
5. Scene-by-scene rebuild plan.
6. Animation trigger plan.
7. Mobile/tablet/desktop visual plan.

Only after that should code changes start.


---

## CHANGELOG Historical Source Rule

`CHANGELOG.md` is mandatory and must always remain in the root. It preserves the old stable production decisions, including the full-screen universe interface, no grid/dashboard look, fixed SV core, SVG HUD controls, desktop rocket cursor, mobile bottom dock, no heavy WebGL dependency, clean central orbit, Product Gallery, Client Signals, Proof Ring, and Launch Dock separation.

Before changing Shrimo Verse, read `CHANGELOG.md`, `project-rules.md`, and `about-project.md` together.


## 36. Mandatory Steps Folder

Updated: 20 May 2026, 15:40 IST

Every future ZIP must include a root `steps/` folder.

The `steps/` folder must contain scene-by-scene planning markdown files from start to end. These files define:

- scene purpose,
- scene connection,
- animation triggers,
- visible and hidden elements,
- mobile/tablet/desktop behavior,
- completion checklist.

Do not delete `steps/`.
Do not start major coding without reading the relevant step file.

## 37. Master Product Planning System

Updated: 20 May 2026, 15:55 IST

Every future major build must read:

```txt
steps/00-master-product-planning-system.md
```

This file contains the refined expert-level planning system for Shrimo Verse.

Do not start coding until the product experience decision, full scene map, scene-by-scene UX table, motion trigger plan, responsive layout plan, conversion plan, keep/remove files list, development order, and QA checklist are prepared.

## 38. Step Flow Management Rule

Updated: 20 May 2026, 16:10 IST

Every scene step must define:

```txt
Previous
Current
Next
Primary Trigger
Connected Layers
Connected Cards / Panels
Mobile Animation
Tablet Animation
Desktop Animation
Failure Risks
Completion Test
```

If this is missing, the step is not ready for coding.
