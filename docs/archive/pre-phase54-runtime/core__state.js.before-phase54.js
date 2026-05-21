(function () {
  'use strict';
  window.SV = window.SV || {};
  const scenes = window.SHRIMO_SCENES || [];
  window.SV.state = {
    entered: false,
    sceneIndex: 0,
    scenes,
    selectedNode: null,
    autoTimer: null,
    guideIndex: 0,
    settings: {
      motion: localStorage.getItem('sv-motion') || 'balanced',
      quality: localStorage.getItem('sv-quality') || 'balanced'
    },
    guideSeenKey: 'shrimo-verse-guide-seen-clean-scene'
  };
}());
