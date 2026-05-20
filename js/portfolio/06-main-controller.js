/*
 * Main Shrimo Verse controller
 * ----------------------------
 * Wires the data, DOM, renderers, guide, and effects together.
 * Keep business/content updates in 01-config.js and visual CSS updates in css/modules.
 */
(function initShrimoVerseApp(window, document) {
  'use strict';

  const SV = window.ShrimoVerse;
  if (!SV || !SV.config || !SV.dom || !SV.layers || !SV.guide || !SV.effects) {
    console.error('Shrimo Verse could not start because one or more JS modules failed to load.');
    return;
  }

  const { $, $$, getElements, createState, distance, setControlActive } = SV.dom;

  function boot() {
    const context = {
      config: SV.config,
      guideSteps: SV.config.getGuideSteps(),
      els: getElements(),
      state: createState(),
      actions: null,
      layers: null,
      guide: null,
      effects: null,
      motion: null,
      terminal: null,
      universe: null,
      commandDeck: null,
      polish: null,
      missionBriefing: null,
      performanceDirector: null
    };

    const actions = {
      setZone,
      setZoom,
      showObject,
      closeObject,
      stopAutoFlight,
      startAutoFlight,
      returnToCore
    };

    context.actions = actions;
    context.layers = SV.layers.createLayerRenderer(context);
    context.guide = SV.guide.createGuideController(context);
    context.effects = SV.effects.createSceneEffects(context);
    context.motion = SV.motion?.createMotionSystem?.(context) || null;
    context.terminal = SV.terminal?.createTypedTerminal?.(context) || null;
    context.universe = SV.cinematic?.createUniverse?.(context) || null;
    context.commandDeck = SV.commandDeck?.createCommandDeck?.(context) || null;
    context.polish = SV.polish?.createInteractionPolish?.(context) || null;
    context.missionBriefing = SV.missionBriefing?.createMissionBriefing?.(context) || null;
    context.performanceDirector = SV.performanceDirector?.createPerformanceDirector?.(context) || null;

    function init() {
      document.body.classList.toggle('touch-device', context.config.isTouch);
      context.layers.renderOrbitParticles();
      context.layers.renderSeparatedLayers();
      context.motion?.primeInitialState?.();
      bindControls();
      bindEntry();
      bindKeyboard();
      bindTouch();
      context.effects.bindCursor();
      context.effects.bindPageVisibility();
      context.effects.initStars();
      context.performanceDirector?.init?.();
      context.universe?.init?.();
      context.commandDeck?.init?.();
      context.polish?.init?.();
      context.missionBriefing?.init?.();
      context.terminal?.startEntry?.();
      context.terminal?.startCore?.();
      context.terminal?.startLaunchDock?.();
      setZone(0, { immediate: true });
      setZoom(1, { silent: true });
      context.effects.animate();
    }

    function on(element, eventName, handler, options) {
      if (element) element.addEventListener(eventName, handler, options);
    }

    function bindEntry() {
      const { els, state, config } = context;

      on(els.enterVerse, 'click', () => {
        if (state.entered) return;

        state.entered = true;
        state.isLaunching = true;
        state.launchStart = performance.now();
        context.terminal?.stopEntry?.();
        context.motion?.playEntryLaunch?.();
        context.universe?.launch?.();
        els.enterVerse.disabled = true;
        els.enterVerse.textContent = 'Entering...';
        els.entryGate.classList.add('is-launching');
        document.body.classList.add('is-entering-verse');

        const statusSteps = [
          [250, 'ALIGNING ROCKET PATH'],
          [800, 'OPENING ORBIT FIELD'],
          [1400, 'LOCKING SV CORE'],
          [1800, 'ENTERING DIGITAL UNIVERSE']
        ];

        statusSteps.forEach(([delay, label]) => {
          window.setTimeout(() => {
            const status = $('#entryStatus');
            if (status && state.isLaunching) status.textContent = label;
          }, config.prefersReducedMotion ? 40 : delay);
        });

        // The standalone rocket cursor handles movement. This flag remains available
        // for future entry choreography without coupling it to the cursor module.
        window.setTimeout(() => {
          if (!config.prefersReducedMotion) state.rocketCentering = true;
        }, config.prefersReducedMotion ? 40 : 250);

        window.setTimeout(() => {
          document.body.classList.add('verse-revealing');
        }, config.prefersReducedMotion ? 100 : 1800);

        window.setTimeout(() => {
          document.body.classList.add('verse-entered');
        }, config.prefersReducedMotion ? 140 : 2200);

        window.setTimeout(() => {
          els.entryGate.classList.add('is-hidden');
          document.body.classList.remove('is-entering-verse', 'verse-revealing');
          state.isLaunching = false;
          state.rocketCentering = false;
          setZone(0);
          context.motion?.revealInterface?.();
          window.setTimeout(() => context.guide.startGuide(), config.prefersReducedMotion ? 120 : 200);
        }, config.prefersReducedMotion ? 180 : 2400);
      });
    }

    function bindControls() {
      const { els } = context;

      on(els.guidedMode, 'click', () => {
        stopAutoFlight();
        context.guide.startGuide();
        setControlActive(els.guidedMode);
      });

      on(els.exploreMode, 'click', () => {
        stopAutoFlight();
        setControlActive(els.exploreMode);
        setZone(1);
      });

      on(els.autoFlight, 'click', () => toggleAutoFlight());
      on(els.pauseOrbit, 'click', () => togglePause());
      on(els.returnCore, 'click', () => returnToCore());
      on(els.replayGuide, 'click', () => context.guide.startGuide());
      on(els.brandReset, 'click', () => returnToCore());
      on(els.zoomIn, 'click', () => { stopAutoFlight(); setZoom(context.state.zoom + 0.15); });
      on(els.zoomOut, 'click', () => { stopAutoFlight(); setZoom(context.state.zoom - 0.15); });
      on(els.zoomRange, 'input', () => { stopAutoFlight(); setZoom(Number(els.zoomRange.value) / 100); });
      on(els.tooltipClose, 'click', closeObject);

      on(els.stage, 'click', (event) => {
        const isInsideObject = event.target.closest('.verse-node') ||
          event.target.closest('.world-dot') ||
          event.target.closest('.object-tooltip') ||
          event.target.closest('.sv-core');

        if (!isInsideObject) closeObject();
      });

      on(els.guideBack, 'click', () => context.guide.stepGuide(-1));
      on(els.guideNext, 'click', () => context.guide.stepGuide(1));

      $$('[data-action="auto"]').forEach((btn) => btn.addEventListener('click', startAutoFlight));
      $$('[data-action="guide"]').forEach((btn) => btn.addEventListener('click', () => context.guide.startGuide()));

      $$('[data-mobile]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.mobile;
          if (action === 'guide') context.guide.startGuide();
          if (action === 'explore') {
            stopAutoFlight();
            setControlActive(els.exploreMode);
            setZone(1);
          }
          if (action === 'auto') startAutoFlight();
          if (action === 'core') returnToCore();
        });
      });

      $$('[data-zone]', els.mobileDots).forEach((btn) => {
        btn.addEventListener('click', () => {
          stopAutoFlight();
          setZone(Number(btn.dataset.zone));
        });
      });

      on(els.zonePrev, 'click', () => {
        stopAutoFlight();
        setZone(context.state.currentZone - 1);
      });

      on(els.zoneNext, 'click', () => {
        stopAutoFlight();
        setZone(context.state.currentZone + 1);
      });
    }

    function togglePause() {
      const { els, state } = context;
      state.paused = !state.paused;
      document.body.classList.toggle('orbit-paused', state.paused);
      els.pauseOrbit.classList.toggle('is-active', state.paused);
      context.universe?.setPaused?.(state.paused);
    }

    function returnToCore() {
      stopAutoFlight();
      closeObject();
      setZoom(1);
      setZone(0);
      setControlActive(context.els.guidedMode);
    }

    function toggleAutoFlight() {
      context.state.autoActive ? stopAutoFlight() : startAutoFlight();
    }

    function startAutoFlight() {
      const { els, state, config } = context;

      context.guide.closeGuide();
      closeObject();
      state.autoActive = true;
      setControlActive(els.autoFlight);

      let index = 0;
      const lastZone = config.zones.length - 1;
      state.activeProduct = 0;
      state.activeProof = 0;
      state.activeReview = 0;

      const run = () => {
        if (!state.autoActive) return;

        const zone = Math.max(0, Math.min(lastZone, index));
        setZone(zone);
        if (zone === 2) context.layers.updateProductLayer();
        if (zone === 3) context.layers.updateProofLayer();
        if (zone === 4) context.layers.updateReviewLayer();

        const focus = activeParticleForZone(zone);
        if (focus?.el) {
          $$('.verse-node').forEach((node) => node.classList.remove('is-selected'));
          focus.el.classList.add('is-selected');
        }

        if (zone >= lastZone) {
          state.autoTimer = setTimeout(() => {
            stopAutoFlight();
            setControlActive(els.guidedMode);
          }, 4200);
          return;
        }

        index += 1;
        state.autoTimer = setTimeout(run, 5200);
      };

      run();
    }

    function stopAutoFlight() {
      const { els, state } = context;
      state.autoActive = false;
      clearTimeout(state.autoTimer);
      if (els.autoFlight) els.autoFlight.classList.remove('is-active');
    }

    function activeParticleForZone(zone) {
      if (zone === 0 || zone === 1) {
        return context.config.orbitParticles.find((particle) => particle.el && !particle.el.classList.contains('is-hidden-by-zoom')) || context.config.orbitParticles[0];
      }
      return null;
    }

    function setZone(zone, options = {}) {
      const { els, state, config } = context;
      state.currentZone = Math.max(0, Math.min(config.zones.length - 1, zone));
      const zoneData = config.zones[state.currentZone];

      els.missionKicker.textContent = zoneData.kicker;
      els.missionTitle.textContent = zoneData.title;
      els.missionCopy.textContent = zoneData.copy;
      els.stateName.textContent = zoneData.name;
      els.stateHint.textContent = zoneData.hint;
      els.launchDock.classList.toggle('is-visible', state.currentZone === 5);
      els.stage.dataset.zone = String(state.currentZone);

      $$('.mobile-zone-dots button').forEach((btn) => {
        const isActive = Number(btn.dataset.zone) === state.currentZone;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-current', isActive ? 'step' : 'false');
      });

      if (els.zonePrev) els.zonePrev.disabled = state.currentZone === 0;
      if (els.zoneNext) els.zoneNext.disabled = state.currentZone === config.zones.length - 1;

      if (state.currentZone === 3) {
        setTimeout(() => context.layers.animateProofNumbers(), 320);
      }

      updateLayerStates();
      context.universe?.setZone?.(state.currentZone);
      context.terminal?.setZone?.(state.currentZone);
      context.commandDeck?.updateZone?.(state.currentZone, options);
      context.polish?.updateLaunchReadiness?.(state.currentZone);
      context.missionBriefing?.updateZone?.(state.currentZone);
      context.performanceDirector?.updateZone?.(state.currentZone);
      if (!options.immediate) context.motion?.playZoneChange?.(state.currentZone);
      if (!options.immediate && !config.prefersReducedMotion) pulseZone();
    }

    function pulseZone() {
      context.els.missionPanel?.animate?.([
        { opacity: 0.72, transform: 'translateY(-46%)' },
        { opacity: 1, transform: 'translateY(-50%)' }
      ], { duration: 420, easing: 'ease-out' });
    }

    function updateLayerStates() {
      const { els, state, config } = context;
      const orbitActive = state.currentZone === 0 || state.currentZone === 1;

      els.layer.classList.toggle('is-muted', !orbitActive);
      els.productLayer.classList.toggle('is-visible', state.currentZone === 2);
      els.proofLayer.classList.toggle('is-visible', state.currentZone === 3);
      els.reviewLayer.classList.toggle('is-visible', state.currentZone === 4);

      config.orbitParticles.forEach((obj) => {
        if (!obj.el) return;

        const primaryVisible = orbitActive || (state.currentZone !== 5 && obj.depth === 'core');
        obj.el.classList.toggle('is-active-zone', orbitActive);
        obj.el.classList.toggle('is-inactive', !orbitActive);
        obj.el.classList.toggle('is-world-dim', !orbitActive);
        obj.el.style.pointerEvents = orbitActive ? 'auto' : 'none';
        obj.el.style.visibility = primaryVisible ? 'visible' : 'hidden';
      });

      context.effects.applyZoomVisibility();
    }

    function setZoom(value, options = {}) {
      const { els, state } = context;
      state.zoom = Math.max(0.7, Math.min(2.2, value));

      document.documentElement.style.setProperty('--zoom', String(state.zoom));
      els.plane?.classList.toggle('zoomed', state.zoom > 1.08);
      els.plane?.classList.toggle('deep-zoom', state.zoom > 1.52);

      if (!options.silent && els.zoomRange) {
        els.zoomRange.value = String(Math.round(state.zoom * 100));
      }

      if (els.zoomValue) {
        els.zoomValue.textContent = `${Math.round(state.zoom * 100)}%`;
      }

      context.effects.applyZoomVisibility();
      context.effects.updateNodePositions(performance.now());
      context.universe?.setZoom?.(state.zoom);
    }

    function showObject(obj, target) {
      const { els } = context;

      stopAutoFlight();
      $$('.verse-node,.sv-core,.world-dot').forEach((node) => node.classList.remove('is-selected', 'is-focused'));
      target?.classList.add(target === els.core ? 'is-focused' : 'is-selected');

      els.tooltipType.textContent = obj.category || 'Object';
      els.tooltipTitle.textContent = obj.label || obj.title || obj.name;
      els.tooltipDesc.textContent = obj.desc || obj.text || '';
      els.tooltipUse.textContent = obj.use || obj.company || '';

      if (obj.link) {
        els.tooltipLink.href = obj.link;
        els.tooltipLink.classList.add('is-visible');
        els.tooltipLink.textContent = obj.category === 'Contact' ? 'Open contact path' : 'Open path';
      } else {
        els.tooltipLink.classList.remove('is-visible');
      }

      els.tooltip.classList.add('is-open');
      els.tooltip.setAttribute('aria-hidden', 'false');
      context.motion?.playTooltipOpen?.(target);
      context.universe?.pulseAt?.(target);
    }

    function closeObject() {
      const { els } = context;
      els.tooltip.classList.remove('is-open');
      els.tooltip.setAttribute('aria-hidden', 'true');
      $$('.verse-node,.sv-core,.world-dot').forEach((node) => node.classList.remove('is-selected', 'is-focused'));
      document.body.classList.remove('cursor-lock');
    }

    function bindKeyboard() {
      window.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();

        if (event.key === 'Escape') {
          closeObject();
          context.guide.closeGuide();
          stopAutoFlight();
        }

        if (key === 'g') context.guide.startGuide();
        if (key === 'e') {
          stopAutoFlight();
          setControlActive(context.els.exploreMode);
          setZone(1);
        }
        if (key === 'a') toggleAutoFlight();
        if (event.key === ' ' && context.state.entered) {
          event.preventDefault();
          togglePause();
        }
        if (event.key === 'Home' || key === 'r') returnToCore();
        if (event.key === '+' || event.key === '=') { stopAutoFlight(); setZoom(context.state.zoom + 0.15); }
        if (event.key === '-' || event.key === '_') { stopAutoFlight(); setZoom(context.state.zoom - 0.15); }
        if (event.key === '?' || key === 'h') context.guide.startGuide();
        if (key === 'm') context.missionBriefing?.open?.();
        if (event.key === 'ArrowRight') { stopAutoFlight(); setZone(context.state.currentZone + 1); }
        if (event.key === 'ArrowLeft') { stopAutoFlight(); setZone(context.state.currentZone - 1); }
      });
    }

    function bindTouch() {
      const { els, state } = context;
      if (!els.stage) return;

      els.stage.addEventListener('touchstart', (event) => {
        if (event.touches.length === 1) {
          state.touchStartX = event.touches[0].clientX;
          state.touchStartY = event.touches[0].clientY;
        }
        if (event.touches.length === 2) {
          state.pinchStartDistance = distance(event.touches[0], event.touches[1]);
          state.pinchStartZoom = state.zoom;
        }
      }, { passive: true });

      els.stage.addEventListener('touchmove', (event) => {
        if (event.touches.length === 2 && state.pinchStartDistance) {
          const next = distance(event.touches[0], event.touches[1]);
          setZoom(state.pinchStartZoom * (next / state.pinchStartDistance));
        }
      }, { passive: true });

      els.stage.addEventListener('touchend', (event) => {
        if (state.pinchStartDistance) {
          state.pinchStartDistance = null;
          return;
        }

        const touch = event.changedTouches[0];
        if (!touch) return;

        const dx = touch.clientX - state.touchStartX;
        const dy = touch.clientY - state.touchStartY;
        if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy)) {
          setZone(state.currentZone + (dx < 0 ? 1 : -1));
        }
      }, { passive: true });
    }

    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})(window, document);
