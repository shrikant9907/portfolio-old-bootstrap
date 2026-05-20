/*
 * Shrimo Verse v1 Experience Director
 * -----------------------------------
 * Owns the cinematic product-experience layer: landing state, launch state,
 * chapter focus attributes, settings drawer, and reduced-clutter behavior.
 *
 * Keep business/content data in portfolio/01-config.js. Keep rendering in the
 * renderer modules. This file only coordinates the user journey so future
 * developers can improve the experience without hunting through every module.
 */
(function initShrimoVerseExperienceDirector(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  const CHAPTER_SLUGS = [
    'arrival-core',
    'technology-orbit',
    'product-missions',
    'proof-signals',
    'client-transmissions',
    'launch-dock'
  ];

  function createExperienceDirector(context) {
    const { $, $$ } = SV.dom;
    const { els, config, state } = context;
    const SESSION_GUIDE_KEY = 'shrimoVerseGuideSeen:v1';
    const SETTINGS_KEY = 'shrimoVerseSettings:v1';

    const defaultSettings = {
      motion: config.prefersReducedMotion ? 'reduced' : 'balanced',
      density: config.isTouch ? 'low' : 'balanced',
      interface: 'focus',
      guideMode: 'once'
    };

    let settings = readSettings();

    function init() {
      document.body.dataset.experienceStage = state.entered ? 'verse' : 'landing';
      document.body.dataset.chapter = CHAPTER_SLUGS[state.currentZone] || CHAPTER_SLUGS[0];
      document.body.classList.add('experience-v1-ready');
      applySettings();
      bindSettingsPanel();
      bindChapterRail();
      bindSafePanelClose();
      updateZone(state.currentZone, { immediate: true });
    }

    function readSettings() {
      try {
        const saved = JSON.parse(window.localStorage.getItem(SETTINGS_KEY) || '{}');
        return Object.assign({}, defaultSettings, saved);
      } catch (error) {
        return Object.assign({}, defaultSettings);
      }
    }

    function saveSettings() {
      try {
        window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch (error) {
        // Browsers can block storage in strict modes. The UI still works for the session.
      }
    }

    function beginLaunch() {
      document.body.dataset.experienceStage = 'launching';
      document.body.classList.add('experience-launching');
      closeSettings();
    }

    function completeArrival() {
      document.body.dataset.experienceStage = 'verse';
      document.body.classList.remove('experience-launching');
      document.body.classList.add('experience-arrived');
      updateZone(0);
    }

    function updateZone(zoneIndex, options = {}) {
      const safeIndex = Math.max(0, Math.min(CHAPTER_SLUGS.length - 1, Number(zoneIndex) || 0));
      const slug = CHAPTER_SLUGS[safeIndex];
      const zone = config.zones[safeIndex];

      document.body.dataset.chapter = slug;
      document.documentElement.style.setProperty('--chapter-index', String(safeIndex));
      document.documentElement.style.setProperty('--chapter-progress', String((safeIndex + 1) / CHAPTER_SLUGS.length));

      $$('.chapter-rail__item').forEach((item, index) => {
        const active = index === safeIndex;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-current', active ? 'step' : 'false');
      });

      const current = $('#chapterCurrent');
      const title = $('#chapterTitle');
      const count = $('#chapterCount');
      if (current) current.textContent = `0${safeIndex + 1}`;
      if (title && zone) title.textContent = zone.name;
      if (count) count.textContent = `0${CHAPTER_SLUGS.length}`;

      if (!options.immediate) {
        document.body.classList.add('chapter-transitioning');
        window.clearTimeout(state.chapterTransitionTimer);
        state.chapterTransitionTimer = window.setTimeout(() => {
          document.body.classList.remove('chapter-transitioning');
        }, config.prefersReducedMotion ? 80 : 560);
      }
    }

    function shouldShowGuideAutomatically() {
      try {
        return settings.guideMode !== 'never' && window.sessionStorage.getItem(SESSION_GUIDE_KEY) !== 'yes';
      } catch (error) {
        return settings.guideMode !== 'never';
      }
    }

    function markGuideSeen() {
      try {
        window.sessionStorage.setItem(SESSION_GUIDE_KEY, 'yes');
      } catch (error) {
        // No-op. Session storage can be unavailable in private/restricted contexts.
      }
    }

    function resetGuideForSession() {
      try {
        window.sessionStorage.removeItem(SESSION_GUIDE_KEY);
      } catch (error) {
        // No-op.
      }
    }

    function bindSettingsPanel() {
      const toggle = $('#settingsToggle');
      const close = $('#settingsClose');
      const reset = $('#resetGuideSession');
      const restart = $('#restartExperience');

      toggle?.addEventListener('click', () => {
        const willOpen = !els.body.classList.contains('settings-open');
        els.body.classList.toggle('settings-open', willOpen);
        $('#settingsPanel')?.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
      });

      close?.addEventListener('click', closeSettings);

      reset?.addEventListener('click', () => {
        resetGuideForSession();
        context.guide.startGuide({ manual: true });
      });

      restart?.addEventListener('click', () => {
        context.actions.stopAutoFlight();
        context.actions.closeObject();
        context.actions.setZoom(1);
        context.actions.setZone(0);
        closeSettings();
      });

      $$('[data-v1-setting]').forEach((button) => {
        button.addEventListener('click', () => {
          const key = button.dataset.v1Setting;
          const value = button.dataset.v1Value;
          if (!key || !value) return;
          settings[key] = value;
          saveSettings();
          applySettings();
        });
      });
    }

    function applySettings() {
      els.body.dataset.motion = settings.motion;
      els.body.dataset.density = settings.density;
      els.body.dataset.interface = settings.interface;
      els.body.dataset.guideMode = settings.guideMode;

      $$('.settings-segment button[data-v1-setting]').forEach((button) => {
        const key = button.dataset.v1Setting;
        const active = settings[key] === button.dataset.v1Value;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      // Map v1 settings to the existing quality director when available.
      if (settings.density === 'low') {
        els.qualitySwitch?.querySelector('[data-quality="essential"]')?.click();
      } else if (settings.density === 'cinematic') {
        els.qualitySwitch?.querySelector('[data-quality="cinematic"]')?.click();
      } else {
        els.qualitySwitch?.querySelector('[data-quality="balanced"]')?.click();
      }
    }

    function closeSettings() {
      els.body.classList.remove('settings-open');
      $('#settingsPanel')?.setAttribute('aria-hidden', 'true');
    }

    function bindChapterRail() {
      $$('.chapter-rail__item').forEach((button, index) => {
        button.addEventListener('click', () => {
          context.actions.stopAutoFlight();
          context.actions.setZone(index);
        });
      });
    }

    function bindSafePanelClose() {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeSettings();
        if (event.key.toLowerCase() === 's') {
          const active = document.activeElement;
          const isTyping = active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName);
          if (!isTyping) $('#settingsToggle')?.click();
        }
      });
    }

    return {
      init,
      beginLaunch,
      completeArrival,
      updateZone,
      shouldShowGuideAutomatically,
      markGuideSeen,
      resetGuideForSession
    };
  }

  SV.experience = { createExperienceDirector };
})(window, document);
