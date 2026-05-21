(function () {
  'use strict';
  window.SV = window.SV || {};
  function refreshButtons() {
    window.SV.dom.$$('.settings-segment button').forEach(button => {
      const setting = button.dataset.setting;
      const value = button.dataset.value;
      const active = window.SV.state.settings[setting] === value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  function set(setting, value) {
    window.SV.state.settings[setting] = value;
    if (setting === 'quality') localStorage.setItem('sv-quality', value);
    if (setting === 'motion') localStorage.setItem('sv-motion', value);
    window.SV.performance?.apply();
    refreshButtons();
  }
  function bind() {
    window.SV.dom.settingsPanel?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-setting]');
      if (!button) return;
      set(button.dataset.setting, button.dataset.value);
    });
    window.SV.dom.restartExperience?.addEventListener('click', () => { window.SV.hud.toggleSettings(false); window.SV.scene.setScene(0); });
    refreshButtons();
  }
  window.SV.settings = { bind, set, refreshButtons };
}());
