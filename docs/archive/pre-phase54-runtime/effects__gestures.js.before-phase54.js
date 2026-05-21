(function () {
  'use strict';
  window.SV = window.SV || {};
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  const blocked = '.settings-panel.is-visible, .object-tooltip.is-visible, .guide-overlay.is-visible, input, textarea, select, a, button';
  function onStart(event) {
    if (event.touches.length !== 1 || event.target.closest(blocked)) return;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    startTime = Date.now();
  }
  function onEnd(event) {
    if (!startTime || event.target.closest(blocked)) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    const elapsed = Date.now() - startTime;
    startTime = 0;
    if (elapsed > 900 || Math.abs(dx) < 58 || Math.abs(dx) < Math.abs(dy) * 1.35) return;
    if (dx < 0) window.SV.scene?.next();
    else window.SV.scene?.previous();
    window.SV.motion?.haptic('swipe');
  }
  function init() {
    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
  }
  window.SV.gestures = { init };
}());
