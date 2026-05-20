(function () {
  'use strict';
  window.SV = window.SV || {};
  const steps = [
    ['Pilot the ship', 'Move through the scenes with arrows, bullets, swipe, or the mobile dock.'],
    ['Inspect skills', 'In Technology Orbit, tap a cyan signal to inspect how that tool supports real product work.'],
    ['Open focused details', 'Details appear as one focused panel or bottom sheet, never as crowded website cards.'],
    ['Product gallery', 'Projects live in their own scene as product beacons, not inside the skill orbit.'],
    ['Proof and signals', 'Proof and client signals appear separately so the journey stays clear.'],
    ['Launch project', 'The Launch Dock ends the universe with a direct WhatsApp project path.']
  ];
  function render() {
    const d = window.SV.dom;
    const i = window.SV.state.guideIndex;
    d.guideStep.textContent = `Step ${i + 1} of ${steps.length}`;
    d.guideTitle.textContent = steps[i][0];
    d.guideText.textContent = steps[i][1];
    d.guideProgress.style.width = `${((i + 1) / steps.length) * 100}%`;
    d.guideBack.disabled = i === 0;
    d.guideNext.textContent = i === steps.length - 1 ? 'Finish' : 'Next';
  }
  function show(manual = false) {
    if (!manual && sessionStorage.getItem(window.SV.state.guideSeenKey)) return;
    window.SV.state.guideIndex = 0;
    render();
    const overlay = window.SV.dom.guideOverlay;
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
  }
  function close() {
    sessionStorage.setItem(window.SV.state.guideSeenKey, 'yes');
    window.SV.dom.guideOverlay.classList.remove('is-visible');
    window.SV.dom.guideOverlay.setAttribute('aria-hidden', 'true');
  }
  function bind() {
    const d = window.SV.dom;
    d.replayGuide?.addEventListener('click', () => show(true));
    d.guidedMode?.addEventListener('click', () => show(true));
    d.guideSkip?.addEventListener('click', close);
    d.guideBack?.addEventListener('click', () => { window.SV.state.guideIndex = Math.max(0, window.SV.state.guideIndex - 1); render(); });
    d.guideNext?.addEventListener('click', () => {
      if (window.SV.state.guideIndex >= steps.length - 1) close();
      else { window.SV.state.guideIndex += 1; render(); }
    });
    d.resetGuideSession?.addEventListener('click', () => show(true));
  }
  window.SV.guide = { bind, show, close };
}());
