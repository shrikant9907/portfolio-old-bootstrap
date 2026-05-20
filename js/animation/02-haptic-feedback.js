/*
 * v1.2 Haptic Feedback
 * --------------------
 * Progressive enhancement only. Android browsers may vibrate; iOS Safari may
 * ignore it. Visual feedback is always the primary confirmation.
 */
(function initShrimoVerseHaptics(window) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};
  const patterns = {
    tap: [10],
    success: [10, 20, 10],
    error: [18, 20, 18, 20, 18],
    swipe: [12]
  };

  function canVibrate() {
    return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
  }

  function trigger(type = 'tap') {
    if (!canVibrate()) return false;
    try {
      navigator.vibrate(patterns[type] || patterns.tap);
      return true;
    } catch (error) {
      return false;
    }
  }

  SV.haptics = { trigger, canVibrate };
})(window);
