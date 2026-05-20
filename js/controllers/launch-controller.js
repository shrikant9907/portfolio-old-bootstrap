(function () {
  'use strict';
  window.SV = window.SV || {};
  function startAutoFlight() {
    stopAutoFlight();
    window.SV.state.autoTimer = setInterval(() => {
      if (window.SV.state.sceneIndex >= window.SV.state.scenes.length - 1) return stopAutoFlight();
      window.SV.scene.next();
    }, 2600);
  }
  function stopAutoFlight() {
    if (window.SV.state.autoTimer) clearInterval(window.SV.state.autoTimer);
    window.SV.state.autoTimer = null;
  }
  function bind() {
    window.SV.dom.autoFlight?.addEventListener('click', startAutoFlight);
    window.SV.dom.pauseOrbit?.addEventListener('click', stopAutoFlight);
    window.SV.dom.sceneActions?.addEventListener('click', (event) => {
      if (event.target.closest('.mission-btn')) stopAutoFlight();
    });
    document.addEventListener('pointerdown', (event) => {
      if (!event.target.closest('#autoFlight')) stopAutoFlight();
    }, { passive: true });
  }
  window.SV.launch = { bind, startAutoFlight, stopAutoFlight };
}());
