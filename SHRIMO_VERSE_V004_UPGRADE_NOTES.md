# Shrimo Verse v0.0.4 Upgrade Notes

## Goal

v0.0.4 improves the portfolio from a cinematic visual experiment into a clearer product/developer showcase. The upgrade adds a live command cockpit, stronger case-study content, and interaction polish while keeping the project static and safe to deploy.

## New modules

```txt
js/ui/02-command-deck.js
js/ui/03-interaction-polish.js
css/modules/06-command-deck-and-polish.css
```

## How the new pieces work

### Command Deck

The Command Deck is a small live cockpit panel. It reads the active zone from the main controller and shows:

- current zone
- journey progress
- engine/runtime status
- Three.js/canvas fallback status
- motion status
- input mode and approximate FPS

This is intentionally HTML-based so it remains readable, accessible, and easy for future developers to change.

### Mission Intelligence

Each zone now has `focus` and `proof` fields in `js/portfolio/01-config.js`. These lines explain what skill or product-thinking layer the current section is demonstrating.

### Product Case Study Strip

Product cards now support:

- `problem`
- `approach`
- `stack`
- `result`

This makes each product feel like a small case study instead of a basic portfolio card.

### Interaction Polish

The interaction module adds:

- magnetic hover movement on desktop
- number-key zone shortcuts from `1` to `6`
- keyboard/mouse/touch input tracking
- launch dock readiness state

## Safe editing guide

- Update content in `js/portfolio/01-config.js`.
- Update the Command Deck layout in `js/ui/02-command-deck.js`.
- Update premium hover/keyboard behavior in `js/ui/03-interaction-polish.js`.
- Update styling only in `css/modules/06-command-deck-and-polish.css` unless changing the base design.

## Testing

Use a local server:

```bash
python3 -m http.server 3000
```

Open:

```txt
http://localhost:3000
```

Do not test ES/script-heavy static projects by double-clicking `index.html` when external libraries or module-like loading behavior is involved.
