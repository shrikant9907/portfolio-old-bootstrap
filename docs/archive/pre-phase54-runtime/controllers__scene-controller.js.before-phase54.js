(function () {
  'use strict';
  window.SV = window.SV || {};
  function current() { return window.SV.state.scenes[window.SV.state.sceneIndex]; }
  function updateCaption(scene) {
    const d = window.SV.dom;
    d.sceneCaption?.classList.add('is-changing');
    window.setTimeout(() => {
      d.sceneKicker.textContent = scene.kicker;
      d.sceneTitle.textContent = scene.title;
      d.sceneCopy.textContent = scene.copy;
      d.sceneTerminal.textContent = scene.terminal;
      d.sceneActions.innerHTML = '';
      const action = document.createElement('button');
      action.type = 'button';
      action.className = 'mission-btn primary';
      action.textContent = scene.action;
      action.addEventListener('click', () => scene.id === 'launch' ? window.open('https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20want%20to%20launch%20a%20project.', '_blank', 'noopener') : next());
      d.sceneActions.appendChild(action);
      d.sceneCaption?.classList.remove('is-changing');
    }, 120);
  }
  function updateNav(scene) {
    const d = window.SV.dom;
    const index = window.SV.state.sceneIndex;
    d.chapterCurrent.textContent = String(index + 1).padStart(2, '0');
    d.chapterCount.textContent = String(window.SV.state.scenes.length).padStart(2, '0');
    d.chapterTitle.textContent = scene.label;
    d.$$('.chapter-rail__item').forEach((button, i) => button.classList.toggle('is-active', i === index));
    d.$$('.mobile-zone-dots button').forEach((button, i) => button.classList.toggle('is-active', i === index));
  }
  function setScene(index, silent = false) {
    const total = window.SV.state.scenes.length;
    window.SV.state.sceneIndex = Math.max(0, Math.min(index, total - 1));
    const scene = current();
    document.body.dataset.scene = scene.id;
    closePanels(false);
    updateCaption(scene);
    updateNav(scene);
    window.SV.orbit?.renderForScene(scene.id);
    if (!silent) window.SV.motion?.flash();
    window.SV.events?.emit('scenechange', { scene, index: window.SV.state.sceneIndex });
  }
  function next() { setScene(window.SV.state.sceneIndex + 1); }
  function previous() { setScene(window.SV.state.sceneIndex - 1); }
  function closePanels(closeGuide = true) {
    const d = window.SV.dom;
    d.tooltip?.classList.remove('is-visible');
    d.tooltip?.setAttribute('aria-hidden', 'true');
    d.settingsPanel?.classList.remove('is-visible');
    d.settingsPanel?.setAttribute('aria-hidden', 'true');
    if (closeGuide) {
      d.guideOverlay?.classList.remove('is-visible');
      d.guideOverlay?.setAttribute('aria-hidden', 'true');
    }
  }
  function buildNav() {
    const d = window.SV.dom;
    d.chapterRailItems.innerHTML = '';
    d.mobileZoneDots.innerHTML = '';
    window.SV.state.scenes.forEach((scene, index) => {
      const bullet = document.createElement('button');
      bullet.type = 'button';
      bullet.className = 'chapter-rail__item';
      bullet.setAttribute('aria-label', scene.label);
      bullet.dataset.tip = scene.label;
      bullet.addEventListener('click', () => setScene(index));
      d.chapterRailItems.appendChild(bullet);
      const mob = bullet.cloneNode();
      mob.addEventListener('click', () => setScene(index));
      d.mobileZoneDots.appendChild(mob);
    });
  }
  window.SV.scene = { current, setScene, next, previous, closePanels, buildNav };
}());
