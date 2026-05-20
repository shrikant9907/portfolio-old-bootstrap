/*
 * Performance Director
 * --------------------
 * Controls visual quality without changing content. This helps the portfolio
 * feel premium on strong devices and stable on weaker phones/laptops.
 */
(function initPerformanceDirector(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createPerformanceDirector(context) {
    const { els, state, config } = context;
    const STORAGE_KEY = 'shrimo-verse-quality';
    const MODES = ['essential', 'balanced', 'cinematic'];
    let sampleTimer = null;
    let lastAutoDowngradeAt = 0;

    function init() {
      state.performanceMode = resolveInitialMode();
      applyMode(state.performanceMode, { silent: true });
      bindButtons();
      bindKeyboardShortcut();
      startHealthWatcher();
    }

    function resolveInitialMode() {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (MODES.includes(stored)) return stored;
      } catch (error) {
        // Local storage can be unavailable in privacy modes; ignore safely.
      }

      if (config.prefersReducedMotion) return 'essential';
      if (config.isTouch || window.innerWidth < 780) return 'balanced';
      return 'cinematic';
    }

    function bindButtons() {
      if (!els.qualitySwitch) return;
      els.qualitySwitch.addEventListener('click', (event) => {
        const button = event.target.closest('[data-quality]');
        if (!button) return;
        applyMode(button.dataset.quality);
      });
    }

    function bindKeyboardShortcut() {
      window.addEventListener('keydown', (event) => {
        const isTyping = event.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName);
        if (isTyping || event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key.toLowerCase() !== 'q') return;

        const currentIndex = MODES.indexOf(state.performanceMode);
        const next = MODES[(currentIndex + 1) % MODES.length];
        applyMode(next);
      });
    }

    function applyMode(mode, options = {}) {
      if (!MODES.includes(mode)) return;

      state.performanceMode = mode;
      document.documentElement.dataset.quality = mode;
      document.body.classList.toggle('quality-essential', mode === 'essential');
      document.body.classList.toggle('quality-balanced', mode === 'balanced');
      document.body.classList.toggle('quality-cinematic', mode === 'cinematic');

      if (!options.silent) {
        try { window.localStorage.setItem(STORAGE_KEY, mode); } catch (error) { /* ignore */ }
      }

      updateButtons(mode);
      updateDeckMessage(mode, options.reason);
      context.universe?.setQuality?.(mode);
    }

    function updateButtons(mode) {
      if (!els.qualitySwitch) return;
      Array.from(els.qualitySwitch.querySelectorAll('[data-quality]')).forEach((button) => {
        const active = button.dataset.quality === mode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    function updateDeckMessage(mode, reason) {
      if (!els.deckAdvisor) return;
      const label = mode.charAt(0).toUpperCase() + mode.slice(1);
      if (reason === 'fps') {
        els.deckAdvisor.textContent = `Performance Director switched to ${label} mode to keep animation smooth.`;
        return;
      }
      if (reason === 'visibility') {
        els.deckAdvisor.textContent = `Performance Director restored ${label} mode after tab focus returned.`;
        return;
      }
    }

    function startHealthWatcher() {
      if (config.prefersReducedMotion) return;

      sampleTimer = window.setInterval(() => {
        if (document.hidden || state.paused) return;
        if (state.performanceMode !== 'cinematic') return;
        if (!state.runtimeFps) return;

        if (state.runtimeFps < 32) state.lowFpsSamples += 1;
        else state.lowFpsSamples = Math.max(0, state.lowFpsSamples - 1);

        const enoughTimePassed = performance.now() - lastAutoDowngradeAt > 12000;
        if (state.lowFpsSamples >= 3 && enoughTimePassed) {
          lastAutoDowngradeAt = performance.now();
          state.lowFpsSamples = 0;
          applyMode('balanced', { reason: 'fps' });
        }
      }, 1800);

      document.addEventListener('visibilitychange', () => {
        if (!document.hidden && state.performanceMode) {
          updateDeckMessage(state.performanceMode, 'visibility');
        }
      });
    }

    function updateZone() {
      updateButtons(state.performanceMode);
    }

    function destroy() {
      if (sampleTimer) window.clearInterval(sampleTimer);
    }

    return { init, applyMode, updateZone, destroy };
  }

  SV.performanceDirector = { createPerformanceDirector };
})(window, document);
