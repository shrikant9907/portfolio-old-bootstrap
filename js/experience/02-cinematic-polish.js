/*
 * Shrimo Verse v1.1 Cinematic Polish Director
 * -------------------------------------------
 * Wraps the v1 Experience Director with final production polish:
 * - movie-style warp overlay during launch
 * - temporary chapter captions so users understand every scene
 * - number-key chapter shortcuts
 * - cleaner settings accessibility states
 * - safer focus/clutter behavior without changing content data
 */
(function initShrimoVerseCinematicPolish(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};
  if (!SV.experience || !SV.experience.createExperienceDirector) return;

  const baseFactory = SV.experience.createExperienceDirector;

  const SCENES = [
    {
      code: 'Scene 01',
      title: 'Arrival Core',
      line: 'The identity core stabilizes before the user explores the world.'
    },
    {
      code: 'Scene 02',
      title: 'Technology Orbit',
      line: 'Skills orbit the SV core and reveal deeper tools through zoom and focus.'
    },
    {
      code: 'Scene 03',
      title: 'Product Missions',
      line: 'Projects open as mission files with problem, approach, stack, and result.'
    },
    {
      code: 'Scene 04',
      title: 'Proof Signals',
      line: 'Credibility appears as focused data signals instead of noisy badges.'
    },
    {
      code: 'Scene 05',
      title: 'Client Transmissions',
      line: 'Reviews arrive like readable transmissions from real delivery work.'
    },
    {
      code: 'Scene 06',
      title: 'Launch Dock',
      line: 'The journey ends with a focused path to start a project conversation.'
    }
  ];

  function isTypingTarget(event) {
    const el = event.target;
    if (!el) return false;
    return ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.isContentEditable;
  }

  function createPolishDirector(context, director) {
    const { $, $$ } = SV.dom;
    const { els, state, config } = context;
    let warpEl = null;
    let warpStatus = null;
    let captionEl = null;
    let captionTimer = null;
    let sceneTimer = null;

    function init() {
      document.body.classList.add('v11-cinematic-polish');
      document.body.dataset.build = 'v1.1-cinematic-polish';
      mountWarpOverlay();
      mountSceneCaption();
      addNativeTooltipFallbacks();
      bindChapterShortcuts();
      bindSettingsA11y();
      updateScene(0, { immediate: true });
    }

    function mountWarpOverlay() {
      if (document.getElementById('cinematicWarp')) {
        warpEl = document.getElementById('cinematicWarp');
        warpStatus = document.getElementById('cinematicWarpStatus');
        return;
      }

      warpEl = document.createElement('div');
      warpEl.className = 'cinematic-warp';
      warpEl.id = 'cinematicWarp';
      warpEl.setAttribute('aria-hidden', 'true');
      warpEl.innerHTML = `
        <div class="cinematic-warp__readout">
          <em id="cinematicWarpStatus">Launch path standing by</em>
          <strong>Entering Shrimo Verse</strong>
        </div>`;
      document.body.appendChild(warpEl);
      warpStatus = document.getElementById('cinematicWarpStatus');
    }

    function mountSceneCaption() {
      if (document.getElementById('sceneCaption')) {
        captionEl = document.getElementById('sceneCaption');
        return;
      }

      captionEl = document.createElement('aside');
      captionEl.className = 'scene-caption';
      captionEl.id = 'sceneCaption';
      captionEl.setAttribute('aria-live', 'polite');
      captionEl.setAttribute('aria-hidden', 'true');
      captionEl.innerHTML = '<span></span><strong></strong><em></em>';
      document.body.appendChild(captionEl);
    }

    function addNativeTooltipFallbacks() {
      $$('[data-tip]').forEach((el) => {
        if (!el.getAttribute('title')) el.setAttribute('title', el.dataset.tip || '');
      });
    }

    function bindChapterShortcuts() {
      window.addEventListener('keydown', (event) => {
        if (isTypingTarget(event) || event.altKey || event.ctrlKey || event.metaKey) return;
        if (!document.body.classList.contains('verse-entered')) return;

        const number = Number(event.key);
        if (number >= 1 && number <= SCENES.length) {
          event.preventDefault();
          context.actions.stopAutoFlight();
          context.actions.closeObject();
          context.actions.setZone(number - 1);
        }

        if (event.key === ']') {
          event.preventDefault();
          context.actions.stopAutoFlight();
          context.actions.setZone(state.currentZone + 1);
        }

        if (event.key === '[') {
          event.preventDefault();
          context.actions.stopAutoFlight();
          context.actions.setZone(state.currentZone - 1);
        }
      });
    }

    function bindSettingsA11y() {
      const toggle = els.settingsToggle;
      const panel = els.settingsPanel;
      if (!toggle || !panel) return;

      toggle.setAttribute('aria-controls', panel.id);
      toggle.setAttribute('aria-expanded', 'false');

      const sync = () => {
        const open = document.body.classList.contains('settings-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      };

      toggle.addEventListener('click', () => window.setTimeout(sync, 0));
      els.settingsClose?.addEventListener('click', () => window.setTimeout(sync, 0));
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') window.setTimeout(sync, 0);
      });
    }

    function beginLaunch() {
      document.body.classList.add('v11-launching');
      updateWarpStatus('Rocket path aligned');

      const steps = [
        [360, 'Energy core charging'],
        [860, 'Orbit field opening'],
        [1350, 'Warp tunnel engaged'],
        [1880, 'Arrival lock acquired']
      ];

      steps.forEach(([delay, text]) => {
        window.setTimeout(() => updateWarpStatus(text), config.prefersReducedMotion ? 40 : delay);
      });
    }

    function updateWarpStatus(text) {
      if (warpStatus) warpStatus.textContent = text;
    }

    function completeArrival() {
      document.body.classList.remove('v11-launching');
      document.body.classList.add('v11-arrival-scan');
      window.clearTimeout(sceneTimer);
      sceneTimer = window.setTimeout(() => {
        document.body.classList.remove('v11-arrival-scan');
      }, config.prefersReducedMotion ? 80 : 1500);
      updateScene(0, { force: true });
    }

    function updateScene(zoneIndex, options = {}) {
      const index = Math.max(0, Math.min(SCENES.length - 1, Number(zoneIndex) || 0));
      const scene = SCENES[index];
      document.documentElement.style.setProperty('--v11-scene-index', String(index));
      document.body.dataset.scene = String(index + 1).padStart(2, '0');

      if (!captionEl || !scene) return;

      const [code, title, line] = captionEl.children;
      if (code) code.textContent = scene.code;
      if (title) title.textContent = scene.title;
      if (line) line.textContent = scene.line;

      const shouldShow = !options.immediate || options.force;
      if (!shouldShow || config.prefersReducedMotion) return;

      captionEl.classList.add('is-visible');
      captionEl.setAttribute('aria-hidden', 'false');
      window.clearTimeout(captionTimer);
      captionTimer = window.setTimeout(() => {
        captionEl.classList.remove('is-visible');
        captionEl.setAttribute('aria-hidden', 'true');
      }, 2200);
    }

    return {
      init,
      beginLaunch,
      completeArrival,
      updateScene
    };
  }

  SV.experience.createExperienceDirector = function createWrappedExperienceDirector(context) {
    const director = baseFactory(context);
    const polish = createPolishDirector(context, director);

    const baseInit = director.init?.bind(director);
    const baseBeginLaunch = director.beginLaunch?.bind(director);
    const baseCompleteArrival = director.completeArrival?.bind(director);
    const baseUpdateZone = director.updateZone?.bind(director);

    return Object.assign({}, director, {
      init() {
        baseInit?.();
        polish.init();
      },
      beginLaunch() {
        baseBeginLaunch?.();
        polish.beginLaunch();
      },
      completeArrival() {
        baseCompleteArrival?.();
        polish.completeArrival();
      },
      updateZone(zoneIndex, options = {}) {
        baseUpdateZone?.(zoneIndex, options);
        polish.updateScene(zoneIndex, options);
      }
    });
  };
})(window, document);
