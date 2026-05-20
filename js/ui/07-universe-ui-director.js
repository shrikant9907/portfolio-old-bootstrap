/*
 * Shrimo Verse v1.3 Universe UI Director
 * --------------------------------------
 * Final experience cleanup layer. This module does not add new content; it
 * protects the cinematic interface from website-like overlap and keeps the
 * black/cyan command system coherent.
 */
(function initUniverseUiDirector(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function closeLayer(selector, className, ariaHidden = true) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.remove(className);
    if (ariaHidden) element.setAttribute('aria-hidden', 'true');
  }

  function closeCompetingLayers(except) {
    if (except !== 'settings') {
      document.body.classList.remove('settings-open');
      const settings = document.getElementById('settingsPanel');
      settings?.setAttribute('aria-hidden', 'true');
    }
    if (except !== 'briefing') closeLayer('#missionBriefing', 'is-open');
    if (except !== 'tooltip') closeLayer('#objectTooltip', 'is-open');
    if (except !== 'guide') closeLayer('#guideOverlay', 'is-visible');
  }

  function syncPanelState() {
    const openLayer = document.body.classList.contains('settings-open') ||
      document.querySelector('#missionBriefing.is-open, #objectTooltip.is-open, #guideOverlay.is-visible, #launchDock.is-visible');
    document.body.classList.toggle('has-open-info-layer', Boolean(openLayer));
  }

  function bindPanelExclusivity() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('#settingsToggle, [data-mobile="settings"]')) {
        window.setTimeout(() => { closeCompetingLayers('settings'); syncPanelState(); }, 0);
      }
      if (event.target.closest('#briefingOpen')) {
        window.setTimeout(() => { closeCompetingLayers('briefing'); syncPanelState(); }, 0);
      }
      if (event.target.closest('.verse-node, .world-dot, .sv-core')) {
        window.setTimeout(() => { closeCompetingLayers('tooltip'); syncPanelState(); }, 0);
      }
      if (event.target.closest('#replayGuide, [data-mobile="guide"], [data-action="guide"]')) {
        window.setTimeout(() => { closeCompetingLayers('guide'); syncPanelState(); }, 0);
      }
    }, true);

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeCompetingLayers('none');
      syncPanelState();
    });

    if ('MutationObserver' in window) {
      const observer = new MutationObserver(syncPanelState);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-chapter', 'data-quality-mode'] });
      ['missionBriefing', 'objectTooltip', 'guideOverlay', 'launchDock'].forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element, { attributes: true, attributeFilter: ['class', 'aria-hidden'] });
      });
    }
  }

  function markInteractiveControls() {
    const controls = document.querySelectorAll('button, a, .verse-node, .world-dot, .sv-core');
    controls.forEach((control) => {
      if (!control.hasAttribute('aria-label') && !control.textContent.trim()) {
        control.setAttribute('aria-label', 'Shrimo Verse control');
      }
      control.dataset.v13Interactive = 'true';
    });
  }

  function init() {
    document.body.dataset.build = 'v1.3.1-visual-recovery';
    document.documentElement.dataset.visualSystem = 'black-cyan-cinematic';
    document.body.classList.add('universe-ui-v13-ready');
    bindPanelExclusivity();
    markInteractiveControls();
    syncPanelState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  SV.universeUiDirector = { closeCompetingLayers, syncPanelState };
})(window, document);
