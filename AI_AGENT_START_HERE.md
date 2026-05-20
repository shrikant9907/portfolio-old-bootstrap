# AI Agent Start Here — Shrimo Verse

**Project:** Shrimo Verse  
**Owner:** Shrikant Yadav / Shrimo Innovations  
**Last Updated:** 20 May 2026, 16:25 IST  
**Purpose:** Mandatory start file for Codex, Claude, Gemini, Copilot, Cursor, and any AI coding assistant.

---

## 1. Read This First

Before editing code, read these files in this exact order:

```txt
1. AGENTS.md
2. project-rules.md
3. about-project.md
4. CHANGELOG.md
5. steps/00-master-product-planning-system.md
6. steps/00-flow-transition-map.md
7. steps/00-steps-index.md
8. TESTING_CHECKLIST.md
9. ProjectStructure.md
```

Do not start coding until you understand these files.

---

## 2. What This Project Is

Shrimo Verse is not a normal website.

It is:

- a cinematic interactive universe,
- a futuristic AI/product interface,
- a game-style exploration experience,
- a premium frontend showcase,
- a guided portfolio journey from curiosity to contact.

The interface should feel like:

> “I entered Shrimo Verse and explored a living digital universe.”

It must not feel like:

- Bootstrap portfolio,
- dashboard,
- article page,
- SaaS landing page,
- card grid,
- normal footer/contact website.

---

## 3. Non-Negotiable Build Rules

1. Do not patch-stack new CSS/JS files.
2. Do not add a new “final fix” file to hide old problems.
3. Fix the root cause.
4. Keep the project static HTML/CSS/JS.
5. Do not convert to React.
6. Build mobile-first from 375px.
7. Keep black/cyan as the main visual identity.
8. Use orange/yellow only for rocket fire, lock-on, active bullet, click burst, or launch emphasis.
9. Keep `README.md`, `about-project.md`, `project-rules.md`, `CHANGELOG.md`, and `steps/` in the root.
10. Never delete the `steps/` folder.

---

## 4. Required Output Before Code Changes

Before making major changes, output:

```txt
1. Audit findings
2. Conflicting files list
3. Files to keep
4. Files to remove or merge
5. Scene-by-scene rebuild/change plan
6. Motion trigger plan
7. Mobile/tablet/desktop layout plan
8. QA checklist
```

Only after that should code changes start.

---

## 5. Scene Flow

The product flow is:

```txt
Mission Entry
  ↓
Launch Sequence
  ↓
Arrival Core
  ↓
Technology Orbit
  ↓
Product Gallery
  ↓
Proof Ring
  ↓
Client Signals
  ↓
Launch Dock
```

Each scene must have:

- one focus,
- one short message,
- one primary action,
- one transition,
- one clear next step.

---

## 6. Feature Completion Rule

A feature is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```

Do not mark something complete just because a file exists.

---

## 7. Visual QA Rule

Before calling a build final, verify:

### Mobile 375px

- Mission Entry
- Arrival Core
- Technology Orbit
- Product Gallery
- Launch Dock
- Guide open
- Settings open

### Tablet 768px

- Arrival Core
- Product Gallery
- Settings

### Desktop 1366px

- Mission Entry
- Arrival Core
- Technology Orbit
- Guide open
- Settings open
- Launch Dock

Do not package if:

- text is unreadable,
- controls overlap,
- SV core is covered,
- guide blocks core,
- dashboard panels appear,
- article-style boxes appear,
- mobile feels squeezed,
- desktop feels like website.

---

## 8. Mandatory Files

Every future ZIP/build must keep:

```txt
README.md
about-project.md
project-rules.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
steps/
AGENTS.md
CLAUDE.md
GEMINI.md
AI_AGENT_START_HERE.md
```

---

## 9. Quick Local Test

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

---

## 10. If Unsure

If uncertain, do not guess.

Read:

```txt
project-rules.md
steps/00-master-product-planning-system.md
steps/00-flow-transition-map.md
```

Then propose a plan before editing.
