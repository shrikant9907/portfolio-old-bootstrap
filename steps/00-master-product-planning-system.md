# Shrimo Verse — Master Product Planning System

**Project:** Shrimo Verse  
**File Purpose:** Final expert product planning system before any coding/build work  
**Last Updated:** 20 May 2026, 15:55 IST  
**Status:** Mandatory planning reference inside `steps/`  

---

## 1. Role and Mindset

Act as a senior creative director, cinematic product designer, game UI designer, UX strategist, motion designer, and production frontend architect.

Do **not** think like a website developer.

Do **not** think in sections, cards, dashboards, or patch files.

Think like you are building a futuristic interactive product experience.

Shrimo Verse is:

- a cinematic digital universe,
- a game-style product journey,
- a futuristic AI/tool interface,
- an interactive portfolio experience,
- a conversion-focused exploration system.

Shrimo Verse is not:

- a normal portfolio website,
- a dashboard,
- a Bootstrap layout,
- an article page,
- a SaaS landing page,
- a random animation demo,
- a card grid,
- a normal footer/contact website.

The visitor should feel:

> “I entered Shrimo Verse and explored a living digital universe.”

The visitor should never feel:

> “I opened a website page with animations.”

---

## 2. Final Product Strategy

The product should be built around this journey:

```txt
Curiosity → Entry → Launch → Arrival → Explore → Trust → Contact
```

Each step has one job:

```txt
Mission Entry      → Create curiosity
Launch Sequence    → Make entry feel cinematic
Arrival Core       → Orient the user
Technology Orbit   → Show technical capability
Product Gallery    → Show real work
Proof Ring         → Build credibility
Client Signals     → Build trust
Launch Dock        → Convert to contact
```

No scene should show everything together.

The rule is:

```txt
One scene.
One focus.
One action.
One transition.
```

---

## 3. Final Scene Decision System

Before coding any scene, this table must be completed:

```txt
Scene Name:
Purpose:
User Emotion:
Main Visual Focus:
Visible Elements:
Hidden Elements:
Primary Action:
Secondary Actions:
Animation Trigger:
Animation Behavior:
Exit Transition:
Mobile Layout:
Tablet Layout:
Desktop Layout:
Conversion Role:
Failure Risks:
Validation Checklist:
```

This prevents random UI decisions.

---

## 4. Final Screen Flow Plan

### 4.1 Mission Entry

Purpose: Create curiosity.

Visible:

```txt
SHRIMO VERSE MISSION CONTROL
You are about to enter Shrimo Verse
Short supporting text
Hint chips: Move · Zoom · Inspect · Launch
Button: Enter Shrimo Verse
```

Hidden:

```txt
projects
reviews
proof
contact
settings
guide
orbit details
dashboard panels
```

Animation:

```txt
CTA pulse → text fade → orbit expand → rocket acceleration → launch sequence
```

Mobile:

```txt
centered content
no rocket cursor
one CTA
no clutter
```

Desktop:

```txt
rocket cursor active
deep black/cyan atmosphere
still minimal
```

Main risk:

```txt
It must not look like a website hero section.
```

---

### 4.2 Launch Sequence

Purpose: Create cinematic transition.

Trigger:

```txt
Enter Shrimo Verse click/tap
```

Animation:

```txt
0ms      CTA confirms
100ms    entry fades
300ms    orbit expands
600ms    star movement begins
900ms    rocket acceleration
1300ms   SV core becomes stronger
1800ms   universe stage opens
2200ms   Arrival Core activates
```

Rule:

```txt
Maximum 2400ms.
No long loader.
No abrupt jump.
```

---

### 4.3 Arrival Core

Purpose: Orient the user.

Visible:

```txt
SV core
short intro
minimal HUD
bottom navigation
guide only once per session
```

Hidden:

```txt
skills details
projects
proof
reviews
contact actions
large panels
```

Animation:

```txt
SV core pulse → HUD reveal → first guide if needed
```

Main rule:

```txt
SV core must never be covered.
```

---

### 4.4 Technology Orbit

Purpose: Show capability.

Visible:

```txt
SV core
skill/tool orbit
one selected skill
short detail
```

Only these can orbit:

```txt
HTML5
CSS3
JavaScript
TypeScript
React
Next.js
Node.js
Express.js
PHP
WordPress
MongoDB
MySQL
Tailwind CSS
Bootstrap
Sass / SCSS
jQuery
Redux
JWT Auth
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

Do not orbit:

```txt
projects
reviews
proof
contact actions
service paragraphs
```

Interaction:

```txt
hover → lock-on glow + scan ring
tap/click → detail sheet
zoom → reveal deeper tools
```

---

### 4.5 Product Gallery

Purpose: Show real work.

Products:

```txt
Shrimo Innovations
Digiting Card
Photocopywala
Business Directory Platform
```

Layout:

```txt
one product focus at a time
product beacons
short scan panel
no mobile grid
no fake screenshots
```

Panel structure:

```txt
Mission name
Challenge
Solution
Stack
Result
Action
```

Main rule:

```txt
This must feel like a product scan, not a website card.
```

---

### 4.6 Proof Ring

Purpose: Build credibility.

Proof signals:

```txt
12+ Years Experience
300+ Projects Delivered
100+ Developers Trained
Multiple Products Built
```

Behavior:

```txt
proof ring forms
number count-up once
one active proof detail
```

Avoid:

```txt
dashboard stats
oversized cards
all metrics fighting at once
```

---

### 4.7 Client Signals

Purpose: Build trust.

Use only real reviews:

```txt
Ram Dubey
Rajeev T.
Sergio W.
```

Layout:

```txt
3 signal dots
one active review
client name
short quote
next/previous
```

Main rule:

```txt
This is an intercepted client signal, not a testimonial section.
```

---

### 4.8 Launch Dock

Purpose: Convert.

Action hierarchy:

```txt
Primary:
WhatsApp

Secondary:
Call
Email

Tertiary:
LinkedIn
GitHub
Shrimo
Digital Profile
```

Mobile:

```txt
WhatsApp clearly primary
secondary actions smaller
no footer layout
no article box
```

Desktop:

```txt
final destination
calm and decisive
not crowded
```

Auto Flight:

```txt
stops here
does not loop forever
guides user to launch/contact
```

---

## 5. Final UI and Visual Rules

### 5.1 Color

Main identity:

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
```

Orange/yellow only for:

```txt
rocket fire
active bullet
hover lock-on
click burst
launch emphasis
```

Never use orange/yellow for:

```txt
normal selected buttons
settings selected state
panel borders
backgrounds
general UI
```

---

### 5.2 Background

Correct:

```txt
deep black space
sparse cyan dust
faint orbit rings
soft cyan glow
subtle depth
```

Wrong:

```txt
grid wallpaper
dashboard background
large cyan blob covering content
colorful nebula
section dividers
noisy texture
```

---

### 5.3 Borders

Use borders only for:

```txt
active controls
focused particles
small HUD elements
tooltips/sheets
selected objects
```

Do not use borders for:

```txt
large content cards
article boxes
every chip
dashboard panels
```

---

### 5.4 Typography

Use:

```txt
Headings: Montserrat
Body: Open Sans
```

Rules:

```txt
short headings
short body copy
no article paragraphs
no giant text covering core
labels can be technical
details go into drawers/sheets
```

---

## 6. Final Mobile-First Plan

Mobile is the base, not a compressed desktop.

### Mobile 375px budget

```txt
1 main object
1 heading
1 short text
1 primary action
1 bottom dock
1 optional bottom sheet
```

Mobile must have:

```txt
no horizontal scroll
no rocket cursor
no side panels
no crowded control row
44px+ tap targets
readable text
bottom controls
bottom sheet details
one focus at a time
```

### Tablet 768px

```txt
more space
still touch-first
no dashboard layout
no extra clutter
```

### Desktop 1366px+

```txt
more cinematic depth
rocket cursor
hover lock-on
transparent HUD
bottom step navigation
no website navbar
no dashboard panels
```

---

## 7. Final Animation System

Every motion must have a reason.

Motion types:

```txt
Reveal   → scene appears
Lock-on  → user selects item
Scan     → inspecting object
Orbit    → universe feels alive
Route    → moving between scenes
Launch   → entry/contact action
```

Trigger map:

```txt
Enter button      → launch sequence
Next scene        → route transition
Hover particle    → lock-on + scan ring
Tap particle      → detail sheet
Zoom              → deeper tools reveal
Auto Flight       → timed scene route
Guide next        → controlled explanation
Launch CTA        → final conversion feedback
```

No random animation.

---

## 8. Final Architecture Rules

No patch stacking.

Do not create:

```txt
final-fix.css
visual-recovery.css
v1-5-patch.css
override-again.css
guard-again.js
```

Use responsibility-based files.

### CSS

```txt
01-tokens.css
02-reset-base.css
03-universe-background.css
04-layout-shell.css
05-hud-controls.css
06-scenes.css
07-orbit-system.css
08-panels-drawers.css
09-mobile-first.css
10-motion-accessibility.css
```

### JS

```txt
core/state.js
core/dom.js
core/events.js

data/scenes.js
data/skills.js
data/products.js
data/proof.js
data/reviews.js

controllers/app-controller.js
controllers/scene-controller.js
controllers/hud-controller.js
controllers/guide-controller.js
controllers/settings-controller.js
controllers/orbit-controller.js
controllers/launch-controller.js

effects/cursor-rocket.js
effects/motion.js
effects/performance.js
effects/gestures.js
```

One source of truth for scenes.  
One source of truth for controls.  
One source of truth for content.

---

## 9. Final Conversion Strategy

The journey should naturally move the user toward contact:

```txt
Entry        → curiosity
Arrival      → identity
Technology   → capability
Products     → real work
Proof        → credibility
Reviews      → trust
Launch Dock  → contact
```

The user should never ask:

```txt
What should I do now?
```

Every scene should make the next step obvious.

---

## 10. Final Documentation System

Every ZIP must include:

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
steps/
```

Rules:

```txt
project-rules.md = law
about-project.md = full vision
CHANGELOG.md = historical memory
steps/ = scene-by-scene build map
README.md = quick start
```

Never delete these.

---

## 11. Final Validation Standard

A feature is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

Before ZIP:

```txt
JS syntax passes
CSS imports exist
HTML references exist
No duplicate IDs
No duplicate scripts
Required docs exist
steps/ exists
No .git/node_modules/backup folders
ZIP integrity passes
```

Visual QA must check:

```txt
Mobile 375:
Mission Entry
Arrival Core
Technology Orbit
Product Gallery
Launch Dock
Guide open
Settings open

Tablet 768:
Arrival Core
Product Gallery
Settings

Desktop 1366:
Mission Entry
Arrival Core
Technology Orbit
Guide open
Settings open
Launch Dock
```

Do not package if:

```txt
text unreadable
controls overlap
SV core covered
guide blocks core
dashboard panels appear
article boxes appear
mobile feels squeezed
desktop feels like website
```

---

## 12. Final Development Order

```txt
1. Audit current project
2. Identify conflicting files
3. Decide what to keep/remove/merge
4. Clean CSS structure
5. Clean JS state system
6. Rebuild Mission Entry
7. Rebuild Launch Sequence
8. Rebuild Arrival Core
9. Rebuild Technology Orbit
10. Rebuild Product Gallery
11. Rebuild Proof Ring
12. Rebuild Client Signals
13. Rebuild Launch Dock
14. Add Guide + Settings
15. Add Motion + Performance
16. Validate mobile/tablet/desktop
17. Package ZIP
```

---

## 13. Required Output Before Coding

Before any code change, output this plan first:

```txt
1. Product experience decision
2. Full scene map
3. Scene-by-scene UX table
4. Motion trigger plan
5. Mobile/tablet/desktop layout plan
6. Conversion plan
7. Visual system rules
8. Files to keep
9. Files to remove or merge
10. Development order
11. QA checklist
```

Only after this is approved should code changes start.

---

## 14. Mandatory Previous / Next / Device Animation Planning

**Updated:** 20 May 2026, 16:10 IST

Every step file must clearly define:

```txt
Previous:
Current:
Next:
Primary Trigger:
Connected Layers:
Connected Cards / Panels:
Mobile Animation:
Tablet Animation:
Desktop Animation:
Exit Transition:
Failure Risks:
Scene Completion Test:
```

Do not code a scene if previous/next flow is unclear.

Do not code a scene if mobile/tablet/desktop behavior is not defined.

Do not code a scene if the animation trigger is not defined.

This rule comes from the master prompt requirement that every scene must answer:

1. Why does this scene exist?
2. What should the user feel?
3. What should the user notice first?
4. What should the user do next?
5. What should stay hidden?
6. What animation should happen?
7. What happens after this scene?
8. How does this help conversion?

