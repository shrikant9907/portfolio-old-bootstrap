/*
  Rocket Cursor Design
  --------------------
  Extracted and simplified from the original project cursor code.

  How it works:
  1. Detects whether the device is a desktop/fine-pointer device.
  2. Creates the rocket cursor HTML automatically.
  3. Tracks the real mouse position.
  4. Smoothly moves the rocket toward the real mouse position.
  5. Rotates the rocket based on pointer movement direction.
  6. Creates small flame particles while moving and a bigger burst on click.

  No external library is required.
*/

(function () {
  'use strict';

  const DEFAULT_OPTIONS = {
    // Higher value = cursor follows faster. Original project used 0.2.
    smoothing: 0.2,

    // Minimum movement before a normal trail particle is created.
    trailMinDistance: 3,

    // Minimum time gap between trail particles in milliseconds.
    trailInterval: 28,

    // How long each trail particle stays in the DOM.
    trailLifetime: 650,

    // Main selectors that should slightly change the flame on hover.
    hoverSelector: 'a, button, [role="button"], input, textarea, select, [data-cursor-lock]'
  };

  let animationFrameId = null;
  let options = { ...DEFAULT_OPTIONS };
  let elements = null;
  let mouse = { x: -100, y: -100 };
  let current = { x: -100, y: -100 };
  let previous = { x: -100, y: -100 };
  let lastTrailTime = 0;
  let hasPointerStarted = false;

  function isFinePointerDevice() {
    // Use any-pointer/any-hover so hybrid laptops with touchscreens still get the desktop rocket
    // when a real mouse/trackpad is available. The old maxTouchPoints check disabled the cursor
    // on many desktop machines that report touch capability.
    const hasAnyFinePointer = window.matchMedia('(any-pointer: fine)').matches || window.matchMedia('(pointer: fine)').matches;
    const hasAnyHover = window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches;
    return hasAnyFinePointer && hasAnyHover;
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function shouldEnableCursor() {
    // Reduced motion should remove trail/noisy animation, not make the desktop cursor disappear.
    return isFinePointerDevice();
  }

  function createCursorMarkup() {
    // If the markup already exists, reuse it. This avoids duplicate cursors in SPAs.
    let cursor = document.getElementById('rocketCursor');
    let trailLayer = document.getElementById('cursorTrailLayer');

    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'rocketCursor';
      cursor.className = 'rocket-cursor';
      cursor.setAttribute('aria-hidden', 'true');

      cursor.innerHTML = [
        '<span class="rocket-body"></span>',
        '<span class="rocket-wing left"></span>',
        '<span class="rocket-wing right"></span>',
        '<span class="rocket-flame"></span>'
      ].join('');

      document.body.appendChild(cursor);
    }

    if (!trailLayer) {
      trailLayer = document.createElement('div');
      trailLayer.id = 'cursorTrailLayer';
      trailLayer.className = 'cursor-trail-layer';
      trailLayer.setAttribute('aria-hidden', 'true');
      document.body.appendChild(trailLayer);
    }

    return { cursor, trailLayer };
  }

  function updateMousePosition(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    // On first movement, place all tracking points together.
    // This prevents the rocket from flying in from the page corner.
    if (!hasPointerStarted) {
      current.x = mouse.x;
      current.y = mouse.y;
      previous.x = mouse.x;
      previous.y = mouse.y;
      hasPointerStarted = true;
    }
  }

  function createTrail(x, y, isBurst) {
    if (prefersReducedMotion()) return;
    if (!elements || !elements.trailLayer) return;

    const dot = document.createElement('span');
    dot.className = isBurst ? 'trail-dot is-burst' : 'trail-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.setProperty('--trail-size', isBurst ? '18px' : '7px');

    elements.trailLayer.appendChild(dot);

    // Remove old particles so the DOM stays clean and fast.
    window.setTimeout(() => {
      dot.remove();
    }, options.trailLifetime);
  }

  function handlePointerDown() {
    document.body.classList.add('rocket-cursor-pressed');
    createTrail(current.x, current.y, true);
  }

  function handlePointerUp() {
    document.body.classList.remove('rocket-cursor-pressed');
  }

  function handleHoverState(event) {
    const eventTarget = event.target;
    const target = eventTarget && typeof eventTarget.closest === 'function'
      ? eventTarget.closest(options.hoverSelector)
      : null;
    document.body.classList.toggle('rocket-cursor-hover', Boolean(target));
  }

  function animateCursor(time) {
    if (!elements || !elements.cursor) return;

    // Smooth follow movement.
    current.x += (mouse.x - current.x) * options.smoothing;
    current.y += (mouse.y - current.y) * options.smoothing;

    const deltaX = current.x - previous.x;
    const deltaY = current.y - previous.y;
    const distance = Math.hypot(deltaX, deltaY);

    // Rocket points upward by default, so +90deg aligns it with movement direction.
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90;

    // Offset is half-ish of the rocket size so the tip feels close to the pointer.
    elements.cursor.style.transform = `translate3d(${current.x - 14}px, ${current.y - 18}px, 0) rotate(${angle}deg)`;

    // Create flame particles only when the cursor has moved enough.
    if (distance > options.trailMinDistance && time - lastTrailTime > options.trailInterval) {
      createTrail(current.x, current.y, false);
      lastTrailTime = time;
    }

    previous.x = current.x;
    previous.y = current.y;

    animationFrameId = window.requestAnimationFrame(animateCursor);
  }

  function bindEvents() {
    window.addEventListener('pointermove', updateMousePosition, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointerover', handleHoverState, { passive: true });
    window.addEventListener('pointerout', handleHoverState, { passive: true });
  }

  function unbindEvents() {
    window.removeEventListener('pointermove', updateMousePosition);
    window.removeEventListener('pointerdown', handlePointerDown);
    window.removeEventListener('pointerup', handlePointerUp);
    window.removeEventListener('pointerover', handleHoverState);
    window.removeEventListener('pointerout', handleHoverState);
  }

  function initRocketCursor(customOptions = {}) {
    options = { ...DEFAULT_OPTIONS, ...customOptions };

    if (!shouldEnableCursor()) return;

    elements = createCursorMarkup();
    document.body.classList.add('rocket-cursor-enabled');
    document.body.classList.toggle('rocket-cursor-reduced-motion', prefersReducedMotion());

    bindEvents();
    animationFrameId = window.requestAnimationFrame(animateCursor);
  }

  function destroyRocketCursor() {
    unbindEvents();

    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    document.body.classList.remove(
      'rocket-cursor-enabled',
      'rocket-cursor-hover',
      'rocket-cursor-pressed',
      'rocket-cursor-reduced-motion'
    );

    if (elements) {
      elements.cursor?.remove();
      elements.trailLayer?.remove();
      elements = null;
    }
  }

  // Expose controls for developers who want manual control in React/Next.js/etc.
  window.initRocketCursor = initRocketCursor;
  window.destroyRocketCursor = destroyRocketCursor;

  // Auto-start for normal HTML pages.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initRocketCursor());
  } else {
    initRocketCursor();
  }
}());
