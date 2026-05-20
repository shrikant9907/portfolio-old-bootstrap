/*
 * v1.2 Mobile Gesture Controls
 * ----------------------------
 * Mobile-first navigation layer:
 * - swipe left/right to move chapters
 * - first-session swipe hint
 * - optional haptic feedback
 * Pinch zoom remains handled by the main controller so browser zoom conflicts
 * stay minimal.
 */
(function initGestureControls(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createGestureControls(context) {
    const { els, state, config } = context;
    const HINT_KEY = 'shrimoVerseSwipeHintSeen:v12';
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let hintEl = null;

    function init() {
      if (!els.stage || !config.isTouch) return;
      createHint();
      bindSwipe();
      maybeShowHint();
    }

    function createHint() {
      hintEl = document.createElement('div');
      hintEl.className = 'swipe-hint';
      hintEl.textContent = 'Swipe to navigate';
      hintEl.setAttribute('role', 'status');
      hintEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(hintEl);
    }

    function maybeShowHint() {
      let seen = false;
      try { seen = window.sessionStorage.getItem(HINT_KEY) === 'yes'; } catch (error) { seen = false; }
      if (seen || !hintEl) return;
      document.body.dataset.swipeReady = 'true';
      hintEl.classList.add('is-visible');
      window.setTimeout(() => hintEl?.classList.remove('is-visible'), 3200);
    }

    function markHintSeen() {
      try { window.sessionStorage.setItem(HINT_KEY, 'yes'); } catch (error) { /* ignore */ }
      hintEl?.classList.remove('is-visible');
    }

    function bindSwipe() {
      els.stage.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) return;
        const touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        startTime = performance.now();
      }, { passive: true });

      els.stage.addEventListener('touchend', (event) => {
        if (!startTime || event.changedTouches.length !== 1) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        const elapsed = performance.now() - startTime;
        const horizontal = Math.abs(dx) > Math.abs(dy) * 1.35;
        const distance = Math.abs(dx);
        const fastEnough = elapsed < 900;
        const startsOnPanel = event.target.closest('.settings-panel, .mission-briefing, .object-tooltip, .guide-overlay, .launch-dock, .mobile-control-dock');

        startTime = 0;
        if (startsOnPanel || !horizontal || distance < 62 || !fastEnough) return;

        context.actions.stopAutoFlight();
        context.actions.closeObject();
        context.actions.setZone(state.currentZone + (dx < 0 ? 1 : -1));
        SV.haptics?.trigger?.('swipe');
        markHintSeen();

        if (hintEl) {
          hintEl.dataset.direction = dx < 0 ? 'right' : 'left';
          hintEl.textContent = dx < 0 ? 'Next chapter' : 'Previous chapter';
          hintEl.classList.add('is-visible');
          window.setTimeout(() => hintEl?.classList.remove('is-visible'), 900);
        }
      }, { passive: true });
    }

    return { init };
  }

  SV.gestureControls = { createGestureControls };
})(window, document);
