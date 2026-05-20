(function () {
  'use strict';
  function init() {
    const SV = window.SV;
    SV.performance.apply();
    SV.scene.buildNav();
    SV.scene.setScene(0, true);
    SV.hud.bind();
    SV.guide.bind();
    SV.settings.bind();
    SV.launch.bind();
    SV.gestures.init();
    SV.effects?.initStars?.();

    SV.dom.enterVerse?.addEventListener('click', enterVerse);

    document.addEventListener('visibilitychange', () => {
      document.body.classList.toggle('is-paused', document.hidden);
    });
  }

  function enterVerse() {
    const SV = window.SV;
    const gate = SV.dom.entryGate;
    document.body.classList.add('is-launching');
    gate?.classList.add('is-launching');
    window.setTimeout(() => {
      gate?.classList.add('is-hidden');
      document.body.classList.add('verse-entered');
      document.body.classList.remove('is-launching');
      window.SV.motion?.haptic('success');
      SV.scene.setScene(0, true);
      SV.guide.show(false);
    }, 1150);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
