(function () {
  'use strict';
  window.SV = window.SV || {};
  function ripple(event) {
    const target = event.target.closest('button, a, [role="button"]');
    if (!target || event.button > 0) return;
    const dot = document.createElement('span');
    dot.className = 'sv-ripple';
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    document.body.appendChild(dot);
    window.setTimeout(() => dot.remove(), 560);
  }
  function haptic(pattern = 'tap') {
    if (!('vibrate' in navigator)) return;
    const patterns = { tap: [10], success: [10, 18, 10], swipe: [12], error: [18, 20, 18] };
    try { navigator.vibrate(patterns[pattern] || patterns.tap); } catch (_) {}
  }
  function flash() {
    const el = window.SV.dom?.sceneFlash;
    if (!el) return;
    el.classList.remove('is-active');
    void el.offsetWidth;
    el.classList.add('is-active');
  }
  window.SV.motion = { ripple, haptic, flash };
  document.addEventListener('pointerdown', ripple, { passive: true });
}());
