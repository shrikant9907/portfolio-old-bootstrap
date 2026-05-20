/*
 * DOM, state, and small utility helpers
 * -------------------------------------
 * This file keeps selectors and shared helpers in one predictable place.
 * When HTML IDs change, update getElements() first before touching logic files.
 */
(function initShrimoVerseDomHelpers(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function getElements() {
    return {
      body: document.body,
      entryGate: $('#entryGate'),
      enterVerse: $('#enterVerse'),
      verse3dCanvas: $('#verse3dCanvas'),
      coreTerminal: $('#coreTerminal'),
      zoneTerminalLine: $('#zoneTerminalLine'),
      launchDockTyped: $('#launchDockTyped'),
      guidedMode: $('#guidedMode'),
      exploreMode: $('#exploreMode'),
      autoFlight: $('#autoFlight'),
      pauseOrbit: $('#pauseOrbit'),
      returnCore: $('#returnCore'),
      replayGuide: $('#replayGuide'),
      brandReset: $('#brandReset'),
      zoomIn: $('#zoomIn'),
      zoomOut: $('#zoomOut'),
      zoomRange: $('#zoomRange'),
      zoomValue: $('#zoomValue'),
      plane: $('#universePlane'),
      layer: $('#particleLayer'),
      productLayer: $('#productGalleryLayer'),
      proofLayer: $('#proofRingLayer'),
      reviewLayer: $('#clientSignalLayer'),
      core: $('#svCore'),
      stage: $('#verseStage'),
      tooltip: $('#objectTooltip'),
      tooltipClose: $('#tooltipClose'),
      tooltipType: $('#tooltipType'),
      tooltipTitle: $('#tooltipTitle'),
      tooltipDesc: $('#tooltipDesc'),
      tooltipUse: $('#tooltipUse'),
      tooltipLink: $('#tooltipLink'),
      missionKicker: $('#missionKicker'),
      missionTitle: $('#missionTitle'),
      missionCopy: $('#missionCopy'),
      stateName: $('#stateName'),
      stateHint: $('#stateHint'),
      missionPanel: $('#missionPanel'),
      stateReadout: $('#stateReadout'),
      commandDeck: $('#commandDeck'),
      deckZoneName: $('#deckZoneName'),
      deckProgressBar: $('#deckProgressBar'),
      deckMetrics: $('#deckMetrics'),
      deckAdvisor: $('#deckAdvisor'),
      missionIntelligence: $('#missionIntelligence'),
      intelFocus: $('#intelFocus'),
      intelProof: $('#intelProof'),
      launchDock: $('#launchDock'),
      guideOverlay: $('#guideOverlay'),
      guideTitle: $('#guideTitle'),
      guideText: $('#guideText'),
      guideStep: $('#guideStep'),
      guideProgress: $('#guideProgress'),
      guideBack: $('#guideBack'),
      guideNext: $('#guideNext'),
      mobileDots: $('#mobileZoneDots'),
      zonePrev: $('#zonePrev'),
      zoneNext: $('#zoneNext'),
      zoneNav: $('#zoneNav')
    };
  }

  function createState() {
    return {
      currentZone: 0,
      zoom: 1,
      paused: false,
      autoTimer: null,
      autoActive: false,
      guideIndex: 0,
      entered: false,
      touchStartX: 0,
      touchStartY: 0,
      pinchStartDistance: null,
      pinchStartZoom: 1,
      activeProduct: 0,
      activeReview: 0,
      activeProof: 0,
      proofAnimated: false,
      launchStart: 0,
      isLaunching: false,
      pageHidden: false,
      rocketCentering: false,
      hoverTooltipTimer: null,
      lastInteractionType: 'mouse',
      runtimeFps: 0,
      activeEngine: 'fallback'
    };
  }

  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  function escapeAttr(value) {
    return String(value).replace(/[&<>"]/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    }[ch]));
  }

  function distance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function setControlActive(control) {
    $$('.hud-btn').forEach((btn) => btn.classList.remove('is-active'));
    if (control) control.classList.add('is-active');
  }

  SV.dom = {
    $,
    $$,
    getElements,
    createState,
    initials,
    escapeAttr,
    distance,
    setControlActive
  };
})(window, document);
