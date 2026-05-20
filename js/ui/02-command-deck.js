/*
 * Command Deck UI
 * ---------------
 * Adds a developer-friendly live cockpit to the portfolio.
 * It explains what the experience is demonstrating without hiding content
 * inside WebGL, and it keeps runtime status visible for future debugging.
 */
(function initCommandDeck(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createCommandDeck(context) {
    const { els, state, config } = context;
    const { $ } = SV.dom;

    let fpsFrames = 0;
    let fpsStartedAt = performance.now();
    let fpsTimer = null;
    let lastZone = -1;

    function init() {
      if (!els.commandDeck || !els.deckMetrics) return;
      renderMetrics();
      updateZone(0, { immediate: true });
      bindVisibilityObserver();
      trackRuntimeFps();
    }

    function renderMetrics() {
      const metrics = getMetrics();
      els.deckMetrics.innerHTML = metrics.map((item) => `
        <div class="deck-metric" data-metric="${item.id}">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <em>${item.desc}</em>
        </div>
      `).join('');
    }

    function getMetrics() {
      const realThree = SV.vendor?.hasThree;
      const realGsap = SV.vendor?.hasRealGsap;
      const realTyped = SV.vendor?.hasRealTyped;
      const baseMetrics = config.systemMetrics || [];

      return baseMetrics.map((metric) => {
        if (metric.id === 'webgl') {
          return {
            ...metric,
            value: realThree ? 'Three.js Online' : 'Canvas Fallback',
            desc: realThree ? 'External 3D library detected and ready.' : 'Local canvas renderer keeps the universe alive.'
          };
        }
        if (metric.id === 'motion') {
          return {
            ...metric,
            value: config.prefersReducedMotion ? 'Reduced' : (realGsap ? 'GSAP Online' : 'Mini Motion'),
            desc: config.prefersReducedMotion ? 'Motion is limited for accessibility.' : 'Timeline-style motion is available.'
          };
        }
        if (metric.id === 'engine') {
          return {
            ...metric,
            value: realTyped ? 'Typed + HTML' : 'HTML Fallback',
            desc: realTyped ? 'Typing layer detected with readable HTML fallback.' : 'Readable static content remains the source of truth.'
          };
        }
        return metric;
      });
    }

    function updateZone(zoneIndex, options = {}) {
      const zone = config.zones[zoneIndex];
      if (!zone || !els.commandDeck) return;

      const progress = ((zoneIndex + 1) / config.zones.length) * 100;
      if (els.deckZoneName) els.deckZoneName.textContent = zone.name;
      if (els.deckProgressBar) els.deckProgressBar.style.width = `${progress}%`;
      if (els.deckAdvisor) els.deckAdvisor.textContent = zone.proof || zone.hint;
      if (els.intelFocus) els.intelFocus.textContent = zone.focus || zone.name;
      if (els.intelProof) els.intelProof.textContent = zone.proof || zone.copy;

      els.commandDeck.dataset.zone = String(zoneIndex);
      if (els.missionIntelligence) els.missionIntelligence.dataset.zone = String(zoneIndex);

      if (lastZone !== zoneIndex && !options.immediate) {
        flashDeck();
      }
      lastZone = zoneIndex;
    }

    function flashDeck() {
      els.commandDeck.classList.remove('is-refreshing');
      // Force a fresh CSS animation without depending on a library.
      void els.commandDeck.offsetWidth;
      els.commandDeck.classList.add('is-refreshing');
    }

    function trackRuntimeFps() {
      if (!els.deckMetrics || config.prefersReducedMotion) return;

      const loop = () => {
        fpsFrames += 1;
        const now = performance.now();
        if (now - fpsStartedAt >= 1000) {
          state.runtimeFps = fpsFrames;
          fpsFrames = 0;
          fpsStartedAt = now;
          updateFpsMetric();
        }
        fpsTimer = requestAnimationFrame(loop);
      };

      fpsTimer = requestAnimationFrame(loop);
    }

    function updateFpsMetric() {
      const metric = $('[data-metric="controls"] strong', els.deckMetrics);
      if (!metric) return;
      const input = state.lastInteractionType === 'touch' ? 'Touch' : 'Keyboard + Mouse';
      metric.textContent = `${input} · ${Math.min(state.runtimeFps || 0, 60)}fps`;
    }

    function bindVisibilityObserver() {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && fpsTimer) {
          cancelAnimationFrame(fpsTimer);
          fpsTimer = null;
          return;
        }
        if (!document.hidden && !fpsTimer) {
          fpsFrames = 0;
          fpsStartedAt = performance.now();
          trackRuntimeFps();
        }
      });
    }

    return {
      init,
      updateZone,
      renderMetrics
    };
  }

  SV.commandDeck = { createCommandDeck };
})(window, document);
