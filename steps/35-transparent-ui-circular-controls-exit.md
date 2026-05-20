# Step 35 — Transparent UI, Circular Controls, Exit Button

**Updated:** 20 May 2026, 20:55 IST  
**Build:** `shrimo-verse-transparent-ui-exit-controls.zip`

## Decision

The interface should feel like a cinematic overlay over space, not solid website cards.

## UI transparency rule

All cards/panels use around 50% transparent black:

```css
rgba(5, 7, 10, .50)
```

Exception:

```txt
Start button stays solid/prominent.
```

## Remove wrapper feeling

The following should not look like card wrappers:

```txt
step bullets/navigation
zoom control bar
```

## Circular controls

Icon controls are circular:

```txt
HUD buttons
previous/next arrows
zoom +/-
product arrows
proof arrows
review arrows
product detail close/prev/next
Exit button
```

## Exit button

A new Exit control is added.

Behavior:

```txt
visible after Start
click returns to Mission Entry
resets current scene
stops auto flight
closes guide/detail/settings
restores Start button
```

## Acceptance criteria

- [x] Cards are around 50% transparent.
- [x] Step bullets have no heavy wrapper.
- [x] Zoom bar has no heavy wrapper.
- [x] Icon controls are circular.
- [x] Start button remains solid.
- [x] Exit button exists after entering.
- [x] Exit returns to beginning.
