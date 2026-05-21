(function () {
  'use strict';
  window.SV = window.SV || {};
  const events = new EventTarget();
  window.SV.events = {
    on(type, handler) { events.addEventListener(type, handler); },
    off(type, handler) { events.removeEventListener(type, handler); },
    emit(type, detail = {}) { events.dispatchEvent(new CustomEvent(type, { detail })); }
  };
}());
