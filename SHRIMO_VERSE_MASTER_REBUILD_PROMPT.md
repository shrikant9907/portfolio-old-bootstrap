# SHRIMO VERSE — MASTER REBUILD PLAN + FINAL IMPLEMENTATION PROMPT

> **Purpose:** This single markdown file replaces all previous Shrimo Verse `.md` files. Keep this one file in the project root. If the project ever needs to be rebuilt, upgraded, reviewed, or handed to another AI/developer, use this file as the complete source of truth.

---

## 1. Final Product Vision

**Shrimo Verse** is not a normal portfolio website.

It is an interactive, game-inspired, cinematic portfolio universe for **Shrikant Yadav / Shrimo Innovations**.

The experience should feel like the user is entering a meaningful digital universe where:

- **SV / Shrimo Verse** is the fixed center core like the sun.
- Skills and technologies orbit around the core.
- Projects are shown separately as a clean gallery layer.
- Reviews are shown separately as client signal dots/cards.
- Proof is shown separately as credibility signals.
- Contact actions appear as a Launch Dock, not a normal footer.
- The visitor can move through steps, inspect particles, zoom, use guided flow, and launch a project.

The goal is to make the portfolio itself prove creativity, frontend skill, interaction thinking, and product-level polish.

---

## 2. Final Experience Type

Build Shrimo Verse as:

**A black cinematic interactive universe with game-like controls.**

Do **not** build it as:

- a Bootstrap portfolio
- a normal hero + sections page
- a dashboard UI
- a crowded particle cloud
- a long SEO landing page
- a random animation demo

The user should feel:

> “I entered Shrimo Verse and I can explore it.”

Not:

> “I am scrolling through website sections.”

---

## 3. Brand / Person Data

Use these exact project identity details:

```text
Name: Shrikant Yadav
Brand/Product Experience Name: Shrimo Verse
Company: Shrimo Innovations
Location: Narmadapuram / Hoshangabad, Madhya Pradesh, India
Role: Full Stack Engineer, Web Designer, Product Builder
Experience: 12+ years
Projects delivered: 300+
Developers trained: 100+
Primary contact: +91 9907472038
Email: shrikant9907@gmail.com
LinkedIn: https://www.linkedin.com/in/shrikant9907/
GitHub: https://github.com/shrikant9907
Shrimo website: https://shrimo.com/
Digital profile: https://digitingcard.com/p/shrikant-yadav
```

Professional positioning:

```text
Full-stack engineer building SaaS products, APIs, scalable web systems, WordPress websites, React/Next.js applications, and business-focused digital products.
```

---

## 4. Real Reviews Only

Use these real reviews. Do not invent fake reviews.

### Review 1

```text
Text: Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.
Name: Ram Dubey
Company: Khyati Overseas Private Limited
```

### Review 2

```text
Text: A project many people said could not be done was handled quickly, with practical suggestions and fast execution.
Name: Rajeev T.
Company: International client
```

### Review 3

```text
Text: The work was delivered on time, communication stayed professional, and the final result matched expectations.
Name: Sergio W.
Company: International client
```

---

## 5. Final Color System

Use primarily **Black + Cyan**.

Controlled exception: use **Yellow/Orange only** for rocket fire, thrust, active bullets, hover lock-on, and click feedback.

### Core Palette

```css
--black: #05070A;
--black-soft: #0B1016;
--surface: #111827;
--cyan: #22D3EE;
--cyan-bright: #67E8F9;
--cyan-soft: #A5F3FC;
--text: #F8FAFC;
--text-2: #B6C2CF;
--muted: #7C8A99;
--border: rgba(34, 211, 238, 0.22);
```

### Fire / Active Interaction Palette

```css
--fire: #FFB020;
--fire-edge: #FF6B00;
--fire-glow: rgba(255, 176, 32, 0.35);
```

### Strict Color Rules

- Do not use purple.
- Do not use red.
- Do not use green.
- Do not use random gradients.
- Do not make particles multi-colored.
- Keep cyan as the universe signal color.
- Use yellow/orange only for interaction emphasis.

---

## 6. Background Rules

The background must feel like deep black space.

Use:

- pure black cinematic background
- subtle cyan glow
- orbit rings
- sparse star dust
- faint circular trails
- very soft depth shadows

Do not use:

- grid background
- website section backgrounds
- dashboard panels
- tech wallpaper patterns
- visible containers
- horizontal dividers
- colorful nebula effects

The background should support the universe, not compete with it.

---

## 7. Typography Rules

Use:

```text
Headings: Montserrat
Body: Open Sans
```

### Desktop Heading Rules

The heading must fit a **1366×768** screen.

```css
Entry heading: clamp(30px, 3.8vw, 50px);
Universe state heading: clamp(26px, 3.2vw, 46px);
Body text: clamp(14px, 1.15vw, 17px);
Small labels: 11px–13px;
```

Rules:

- No giant headings.
- No heading outside screen height.
- No heading overlapping the SV core.
- No excessive line breaks.
- Heading should be larger than body text but not dominate the whole universe.

---

## 8. Entry Screen Final Requirements

The entry screen should feel like **Mission Control before entering Shrimo Verse**.

### Entry Content

```text
Small label:
SHRIMO VERSE MISSION CONTROL

Main heading:
You are about to enter Shrimo Verse

Supporting text:
Pilot the rocket, zoom into meaningful particles, inspect technologies, products, proof signals, and reach the Launch Dock when you are ready.

Hint chips:
Move
Zoom
Inspect
Launch

Button:
Enter Shrimo Verse
```

### Entry Screen Rules

- No visible Skip Intro button.
- Rocket cursor must be active from the first desktop screen.
- Rocket must not overlap the heading.
- SV mission marker must not hide behind heading text.
- SV mission marker should be subtle and placed safely above/behind content.
- Heading size must be smaller and readable.
- Button should feel like a launch button.

### Entry Animation

When user clicks **Enter Shrimo Verse**:

1. Entry content fades.
2. Orbit expands.
3. Rocket feels like it is entering the universe.
4. SV core becomes the fixed center.
5. First Launch Guide starts.

No abrupt jump.

---

## 9. Header / HUD Rules

The header must be simplified and transparent.

### Header Should Look Like

- A minimal universe HUD.
- Not a website navbar.
- Not a big framed bar.
- Transparent background.
- No hard border frame.

### Header Layout

Left:

```text
SV icon
Shrimo Verse
```

Right:

Icon controls:

- Guided Flight
- Free Explore
- Auto Flight
- Pause Orbit
- Return to Core
- Replay Guide
- Launch Project

### Header Rules

- Use SVG icons only.
- Use tooltips for controls.
- Do not use text-heavy buttons.
- Controls should feel game-like.
- Keep the header visually light.

---

## 10. Control Names and Meanings

### Guided Flight

Starts the learning/tour guide that teaches the visitor how to use Shrimo Verse.

### Replay Guide

Starts the same guide again after the user has completed or closed it.

### Free Explore

Lets the user inspect particles and move around manually.

### Auto Flight

Automatically moves through the universe steps once. It must be **limited**, not infinite.

### Pause Orbit

Pauses orbit/motion.

### Return to Core

Returns to the center SV core and resets the view.

### Launch Project

Opens WhatsApp/contact path.

---

## 11. Rocket Cursor Rules

Use the previous cleaner rocket cursor style.

### Desktop Only

- Desktop has rocket cursor.
- Mobile does not.

### Rocket Visual

- Cyan rocket body.
- Yellow/orange fire trail.
- Not cartoonish.
- Not too large.
- Not distracting.

### Fire Animation

Revert to the earlier smoother flame animation:

- fire appears behind rocket while moving
- yellow/orange glow
- short flame at slow movement
- stronger flame at fast movement
- not too many trail particles
- no heavy distracting burst

### Hover Particle State

On hover:

- particle gets orange/yellow lock-on glow
- cursor reticle appears
- label becomes brighter

---

## 12. SV Core Rules

SV / Shrimo Verse is the center core.

It behaves like the sun.

### Rules

- fixed in center
- does not move
- everything else orbits around it
- smaller by default
- grows visually only through zoom
- should never overlap heading, buttons, tooltip, or controls
- protected safe zone around it

### Desktop Size

```text
Default: 90–110px
Laptop 1366: around 92px
Mobile: around 72px
```

### Core Label

```text
SV
Shrimo Verse Core
```

---

## 13. Orbit System Final Structure

Only skills / technologies / selected tools should orbit around the SV core.

Do not place products, reviews, proof, or contact inside the same technology orbit.

### Concentric Orbit Rings

#### Inner Orbit — Core Basics

```text
HTML5
CSS3
JavaScript
TypeScript
```

#### Middle Orbit — Frameworks / Runtime / CMS

```text
React
Next.js
Node.js
Express.js
PHP
WordPress
```

#### Outer Orbit — Databases / Styling / Libraries

```text
MongoDB
MySQL
Tailwind CSS
Bootstrap
Sass / SCSS
jQuery
Redux
JWT Auth
```

#### Deep Zoom Orbit — Hidden Tools

Visible only when zooming in.

```text
WooCommerce
Git
Figma
GSAP
Three.js
APIs
Performance
Hosting
Analytics
Search Console
```

### Particle Label Rules

Correct:

```text
HTML5
React
Next.js
Git
WordPress
```

Wrong:

```text
Technology - HTML
Technology React
Tool - Git
```

Keep labels short and simple.

---

## 14. Project Gallery Rules

Projects must not clutter the core orbit.

Projects should be shown separately in **Product Gallery**.

### Known Projects

```text
Shrimo Innovations
Digiting Card
Photocopywala
Business Directory Platform
```

### How User Sees Past Projects

The user can access projects by:

1. clicking the **Product Gallery bullet**
2. pressing the **Next arrow** until Product Gallery opens
3. starting **Auto Flight**
4. using the guide/free explore flow

Inside Product Gallery:

- project dots appear
- one focused project panel appears
- user can click dots to switch projects
- project panel shows title, short description, and link if available

### Project Visual Rules

- no crowded project labels around core
- no fake screenshots
- if image unavailable, use black/cyan placeholder
- use larger gallery panel, not small chips

---

## 15. Review / Client Signal Rules

Reviews must not orbit as normal technology particles.

Use a separate **Client Signals** layer.

### Review Behavior

- 3 review dots
- one readable review card at a time
- active dot highlighted
- review panel should be easy to read

### Review Dots

- initials or small signal mark
- orange/yellow active state
- tooltip on hover/focus

---

## 16. Proof Ring Rules

Proof must not be mixed with technologies.

Use separate Proof Ring step.

Proof signals:

```text
12+ Years Experience
300+ Projects Delivered
100+ Developers Trained
Multiple Products Built
```

Behavior:

- proof dots or proof ring
- one proof focus panel
- readable, not huge
- not mixed into technology orbit

---

## 17. Launch Dock Rules

Launch Dock is the footer replacement.

It must not look like a normal website footer.

It is the final destination inside Shrimo Verse.

### Launch Dock Actions

```text
WhatsApp
Call
Email
LinkedIn
GitHub
Shrimo
Digital Profile
```

### Launch Dock Rules

- black glass style
- cyan beacons
- action links clear
- not a traditional footer block
- appears as final universe destination

---

## 18. Bottom Step Navigation Rules

Use bottom-center bullets and arrows.

### Desktop Position

Place at bottom center with **10px gap from bottom**.

```css
bottom: 10px;
```

### Required Elements

- Previous arrow
- Step bullets
- Next arrow

### Bullet States

Inactive:

- muted grey/cyan

Active:

- yellow/orange
- glow
- tooltip visible on hover/focus and active

### Bullet Steps

```text
Arrival Core
Technology Orbit
Product Gallery
Proof Ring
Client Signals
Launch Dock
```

### Arrow Rules

- previous disabled on first step
- next disabled on last step
- arrows should use SVG
- arrows should feel like game controls

---

## 19. Zoom Control Rules

Keep Orbit Zoom as a controlled slider.

### Requirements

- min zoom: 70%
- max zoom: 220%
- plus button
- minus button
- draggable slider
- zoom value display
- labels/hidden tools reveal as zoom increases

### Important

Zoom must not make the experience uncontrollable.

Every zoom level must remain usable.

---

## 20. Auto Flight Rules

Auto Flight must be limited, not infinite.

Flow:

```text
Arrival Core
Technology Orbit
Product Gallery
Proof Ring
Client Signals
Launch Dock
STOP
```

Rules:

- do not loop forever
- user can pause
- user can stop by Free Explore
- user can Return to Core
- user interaction should pause or stop autoplay

---

## 21. First Launch Guide Rules

After entering Shrimo Verse, show the guide.

### Guide Steps

1. Pilot the ship
2. Inspect skills
3. Open details
4. Project gallery
5. Client signals
6. Zoom deeper
7. Return to Core

### Step Card Position

Desktop:

- bottom-right
- not center
- should not block core or text

Mobile:

- above bottom control dock
- readable and tappable

Guide should have:

- step number
- short title
- short explanation
- Back / Next
- Finish at the end

---

## 22. Mobile Experience Rules

Mobile should not copy desktop fully.

### Mobile Principles

- no rocket cursor
- touch-first
- fewer particles
- simpler animation
- bottom control dock
- tap particles to inspect
- swipe between steps
- tooltip becomes bottom sheet
- pinch zoom only if stable

### Mobile Controls

Bottom dock:

```text
Guide
Explore
Auto
Core
Launch
```

### Mobile Content

- no horizontal scroll
- text readable
- particles not too small
- controls 44px+ touch target
- no layout overlap

---

## 23. Tooltip Rules

Tooltips must be clear.

Desktop:

- floating black glass panel
- cyan border
- close button
- title, category, description, use case

Mobile:

- bottom sheet
- readable text
- close button
- optional action button

---

## 24. Accessibility Rules

- keyboard focus visible
- controls have `aria-label`
- tooltips closable with Escape
- reduced motion support
- no focus traps
- readable contrast
- touch targets at least 44px on mobile

---

## 25. Performance Rules

- avoid large textures
- no heavy random particles
- no memory leaks
- throttle cursor trail
- pause animation when tab inactive
- no console errors
- no missing assets
- no `.git` folder in final ZIP

---

## 26. File Structure Target

Keep project simple and static.

```text
project-root/
├── index.html
├── css/
│   └── portfolio-style.css
├── js/
│   └── portfolio-scripts.js
├── images/
├── robots.txt
├── sitemap.xml
├── manifest.json
└── SHRIMO_VERSE_MASTER_REBUILD_PROMPT.md
```

This markdown file is the only `.md` file required.

---

## 27. Final Master Implementation Prompt

Copy and use the prompt below whenever you need to rebuild or upgrade the project.

```text
Act as a senior creative director, product designer, game-style interaction designer, and production-level HTML/CSS/JavaScript developer.

Rebuild Shrimo Verse as a stable interactive portfolio universe.

This is not a normal portfolio website. It must feel like a cinematic black-space universe where SV / Shrimo Verse is the fixed center core and only skills, technologies, and selected tools orbit around it. Projects, reviews, proof, and contact actions must be handled separately as clean focused layers.

Use Black + Cyan as the main visual system. Use Yellow/Orange only for rocket fire, active bullets, particle hover lock-on, and click feedback.

The entry screen must say:
SHRIMO VERSE MISSION CONTROL
You are about to enter Shrimo Verse
Pilot the rocket, zoom into meaningful particles, inspect technologies, products, proof signals, and reach the Launch Dock when you are ready.
Button: Enter Shrimo Verse

There must be no Skip Intro button.

The rocket cursor must work from the first desktop screen. Use the previous clean rocket style with cyan body and yellow/orange flame. Do not use the newer weaker rocket style. Disable rocket cursor on mobile.

SV core must stay fixed in the center like the sun. It must not move. Everything else orbits around it. The core must never overlap headings, buttons, tooltips, or controls.

The technology orbit must be split into multiple circles:
Inner orbit: HTML5, CSS3, JavaScript, TypeScript.
Middle orbit: React, Next.js, Node.js, Express.js, PHP, WordPress.
Outer orbit: MongoDB, MySQL, Tailwind CSS, Bootstrap, Sass / SCSS, jQuery, Redux, JWT Auth.
Deep zoom orbit: WooCommerce, Git, Figma, GSAP, Three.js, APIs, Performance, Hosting, Analytics, Search Console.

Particle labels must be simple. Show HTML5, React, Git, WordPress, not Technology - HTML or Tool - Git.

Projects must be separate from the orbit. Product Gallery should use dots and a focused panel for Shrimo Innovations, Digiting Card, Photocopywala, and Business Directory Platform.

Client reviews must be separate from the orbit. Client Signals should use dots and one readable review card at a time. Use only the three real reviews provided in this file.

Proof must be a separate Proof Ring, not mixed into the orbit. Show 12+ Years, 300+ Projects, 100+ Developers Trained, and Multiple Products Built.

Launch Dock must replace the traditional footer. It should include WhatsApp, Call, Email, LinkedIn, GitHub, Shrimo, and Digital Profile.

The header must be simplified and transparent. It should not look like a normal navbar or a bordered container. Left side: SV + Shrimo Verse. Right side: SVG controls with tooltips.

Controls: Guided Flight, Free Explore, Auto Flight, Pause Orbit, Return to Core, Replay Guide, Launch Project.

Guided Flight starts the learning/tour guide. Replay Guide starts the same guide again after it has been closed or completed.

Auto Flight must be limited, not infinite. It should move through Arrival Core → Technology Orbit → Product Gallery → Proof Ring → Client Signals → Launch Dock and then stop.

Add bottom-center step navigation with Previous arrow, bullets, and Next arrow. On desktop the step navigation should sit 10px from the bottom. Active bullet must be orange/yellow and have tooltip. Bullets represent Arrival Core, Technology Orbit, Product Gallery, Proof Ring, Client Signals, Launch Dock.

The First Launch Guide step card must be positioned bottom-right on desktop and above the mobile bottom dock on mobile.

Mobile must be touch-first and simplified. No rocket cursor. Use bottom controls: Guide, Explore, Auto, Core, Launch. Tapping particles opens a bottom sheet. Swipe can move between steps. No horizontal scroll.

Use Montserrat for headings and Open Sans for body. Heading sizes must be safe for 1366×768 screens. Entry heading should use clamp(30px, 3.8vw, 50px). Universe state heading should use clamp(26px, 3.2vw, 46px).

Do not use grid background. Use black cinematic space with subtle cyan glow, sparse stars, orbit rings, and soft circular trails.

Before final output, verify:
- no Skip Intro button
- rocket cursor works on desktop entry screen
- rocket fire is yellow/orange
- no rocket cursor on mobile
- header is transparent and simplified
- SV core does not overlap text
- heading fits 1366×768
- only technologies/skills/tools orbit around core
- projects are separate dot gallery
- reviews are separate signal dots
- proof is separate
- Launch Dock works
- bottom bullets are 10px from desktop bottom
- active bullet is orange/yellow
- bullets and controls have tooltips
- previous/next arrows work
- Auto Flight stops at Launch Dock
- guide card is bottom-right on desktop
- mobile bottom controls work
- tooltips close correctly
- JS has no syntax errors
- no missing local assets
- no .git included
- final ZIP is production-ready
```

---

## 28. Future Upgrade Suggestions

Use these later, after the stable version is live.

### Upgrade 1 — Sound System

Add optional soft sound effects:

- entry whoosh
- hover lock-on beep
- click chime
- zoom in/out tone
- return-to-core sound

Keep sound muted by default or ask permission first.

### Upgrade 2 — Project Screenshot Previews

Add real screenshots for:

- Shrimo Innovations
- Digiting Card
- Photocopywala
- Business Directory Platform

Only use real screenshots. Do not fake.

### Upgrade 3 — Save User Preference

Use `localStorage` to remember:

- entered Shrimo Verse
- guide completed
- last selected mode
- muted sound state

### Upgrade 4 — Better Mobile Gesture System

Add smoother swipe transitions between:

- Core
- Tech
- Projects
- Proof
- Reviews
- Launch

### Upgrade 5 — Advanced Project Deep Dive

Each project can open a mini case-study panel:

- problem
- solution
- stack
- result
- link

Keep it short.

### Upgrade 6 — Real Analytics Events

Track:

- enter universe
- guide completed
- product opened
- review opened
- launch clicked
- WhatsApp clicked

Use privacy-friendly analytics.

### Upgrade 7 — Audio Narrated Auto Flight

Add optional voice/narration for Auto Flight.

Do not autoplay audio without user consent.

### Upgrade 8 — Accessibility Mode

Add a visible `Simple Mode` toggle that converts the universe into readable stacked panels for users who prefer less motion.

---

## 29. Final Quality Score Target

Target quality:

```text
Creativity: 95/100
Interaction clarity: 95/100
Visual polish: 95/100
Mobile usability: 90/100
Performance: 90/100
Conversion clarity: 95/100
```

The final project should feel like a premium interactive product, not a normal website.
