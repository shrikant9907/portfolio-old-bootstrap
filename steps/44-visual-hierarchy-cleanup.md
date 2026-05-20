# Step 44 — Visual Hierarchy Cleanup

**Updated:** 20 May 2026, 23:35 IST  
**Build:** `shrimo-verse-phase-44-visual-hierarchy-cleanup.zip`

---

## Goal

Improve the interface quality without adding new features.

This phase focuses on readability, control hierarchy, cleaner UI chrome, and reducing repeated actions.

---

## Fixes applied

### 1. Star readability mask

Stars remain visible, but important content zones are protected with subtle dark readability masks:

- left mission text,
- SV core area,
- right floating controls,
- bottom navigation.

### 2. Right control glow reduced

Normal control state is quieter.  
Only hover/active state gets stronger orange emphasis.

### 3. Control ordering normalized

Preferred order:

```txt
Guide
Explore
Auto Flight
Pause
Core
Help
Launch
```

Exit remains separate at top-right.

### 4. Wordmark refined

ShrimoVerse wordmark is smaller and quieter.

### 5. Left mission panel cleaned

Scene-level repeated buttons are hidden.  
Primary actions now live in the floating control system.

### 6. Zoom spacing improved

Zoom moved closer to the left edge and visually softened.

### 7. Label collisions reduced

Arrival Core shows fewer/lighter particles.  
Technology Orbit remains the fuller inspection state.

### 8. Bottom navigation simplified

Prev/next arrows remain clean.  
Step bullets are quieter and lighter.

### 9. Copyright softened

Desktop copyright is reduced in size and opacity.

---

## Acceptance criteria

- [x] Right icons are less visually dominant.
- [x] Wordmark is quieter.
- [x] Arrival Core is calmer.
- [x] Repeated mission buttons are hidden.
- [x] Zoom is less intrusive.
- [x] Bottom navigation is clean.
- [x] Copyright is subtle.
- [x] Labels collide less in Arrival Core.
