(function () {
  'use strict';
  window.SV = window.SV || {};
  function detectCapability() {
    const cores = navigator.hardwareConcurrency || 2;
    const memory = navigator.deviceMemory || 4;
    const coarse = matchMedia('(pointer: coarse)').matches;
    if ((coarse && cores <= 4) || cores <= 2 || memory <= 2) return 'low';
    if (coarse || cores <= 6 || memory <= 4) return 'medium';
    return 'high';
  }
  function apply() {
    const body = document.body;
    const capability = detectCapability();
    const quality = window.SV.state?.settings?.quality || localStorage.getItem('sv-quality') || (capability === 'low' ? 'essential' : 'balanced');
    const motion = window.SV.state?.settings?.motion || localStorage.getItem('sv-motion') || (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'balanced');
    body.dataset.deviceCapability = capability;
    body.dataset.qualityMode = quality;
    body.dataset.motion = motion;
    window.SV?.events?.emit?.('qualitychange', { capability, quality, motion });
    return { capability, quality, motion };
  }
  window.SV.performance = { detectCapability, apply };
}());
