/*
 * Interaction Polish
 * ------------------
 * Small production-grade interaction improvements that make the portfolio
 * feel more expensive without changing the original journey:
 * - magnetic hover movement on desktop
 * - keyboard number shortcuts for zones
 * - focus-safe active input tracking
 * - launch dock readiness state
 */
(function initInteractionPolish(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createInteractionPolish(context) {
    const { els, state, config } = context;
    const { $$ } = SV.dom;

    const MAGNETIC_SELECTOR = '.hud-btn, .mission-btn, .launch-primary-btn, .product-btn, .briefing-actions button, .quality-switch button, .briefing-close, .verse-node, .world-dot, .sv-core';
    const magneticCleanups = [];

    function init() {
      bindInputMode();
      bindNumberShortcuts();
      bindMagneticHover();
      bindTapFeedback();
      updateLaunchReadiness(0);
    }

    function bindInputMode() {
      window.addEventListener('keydown', () => {
        state.lastInteractionType = 'keyboard';
        document.body.classList.add('using-keyboard');
      });

      window.addEventListener('pointerdown', (event) => {
        state.lastInteractionType = event.pointerType === 'touch' ? 'touch' : 'mouse';
        document.body.classList.toggle('using-keyboard', false);
      }, { passive: true });

      window.addEventListener('touchstart', () => {
        state.lastInteractionType = 'touch';
      }, { passive: true });
    }

    function bindNumberShortcuts() {
      window.addEventListener('keydown', (event) => {
        const target = event.target;
        const isTyping = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
        if (isTyping || event.altKey || event.ctrlKey || event.metaKey) return;

        const number = Number(event.key);
        if (!Number.isInteger(number) || number < 1 || number > config.zones.length) return;

        context.actions.stopAutoFlight();
        context.actions.setZone(number - 1);
      });
    }

    function bindMagneticHover() {
      if (config.isTouch || config.prefersReducedMotion) return;

      const bindOne = (el) => {
        if (!el || el.dataset.magneticBound === 'true') return;
        el.dataset.magneticBound = 'true';

        const onMove = (event) => {
          const rect = el.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          const strength = el.classList.contains('verse-node') || el.classList.contains('world-dot') ? 0.16 : 0.09;
          el.style.setProperty('--magnet-x', `${x * strength}px`);
          el.style.setProperty('--magnet-y', `${y * strength}px`);
          el.classList.add('is-magnetic');
        };

        const onLeave = () => {
          el.style.setProperty('--magnet-x', '0px');
          el.style.setProperty('--magnet-y', '0px');
          el.classList.remove('is-magnetic');
        };

        el.addEventListener('pointermove', onMove, { passive: true });
        el.addEventListener('pointerleave', onLeave, { passive: true });
        magneticCleanups.push(() => {
          el.removeEventListener('pointermove', onMove);
          el.removeEventListener('pointerleave', onLeave);
        });
      };

      $$(MAGNETIC_SELECTOR).forEach(bindOne);

      // Rendered product/proof/review dots are rebuilt later, so observe the stage
      // and bind magnetic behavior to newly inserted interactive elements.
      if (els.stage && 'MutationObserver' in window) {
        const observer = new MutationObserver(() => $$(MAGNETIC_SELECTOR).forEach(bindOne));
        observer.observe(els.stage, { childList: true, subtree: true });
        magneticCleanups.push(() => observer.disconnect());
      }
    }



    function bindTapFeedback() {
      const selector = 'button, a, .verse-node, .world-dot, .sv-core';
      document.addEventListener('pointerdown', (event) => {
        const target = event.target.closest(selector);
        if (!target || target.closest('[disabled]') || event.button > 0) return;
        createRipple(event.clientX, event.clientY);
        if (event.pointerType === 'touch' || event.pointerType === 'pen') {
          SV.haptics?.trigger?.('tap');
        }
      }, { passive: true });

      document.addEventListener('click', (event) => {
        const target = event.target.closest(selector);
        if (!target || target.closest('[disabled]')) return;
        if (state.lastInteractionType === 'touch') return;
        target.classList.add('tap-confirmed');
        window.setTimeout(() => target.classList.remove('tap-confirmed'), 260);
      }, { passive: true });
    }

    function createRipple(x, y) {
      const ripple = document.createElement('span');
      ripple.className = 'sv-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 560);
    }

    function updateLaunchReadiness(zoneIndex) {
      const ready = zoneIndex >= config.zones.length - 1;
      document.body.classList.toggle('launch-path-ready', ready);
      if (els.launchDock) {
        els.launchDock.dataset.ready = ready ? 'true' : 'false';
      }
    }

    function destroy() {
      magneticCleanups.splice(0).forEach((cleanup) => cleanup());
    }

    return {
      init,
      updateLaunchReadiness,
      destroy
    };
  }

  SV.polish = { createInteractionPolish };
})(window, document);
