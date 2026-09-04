/**
 * AksesKita - A11y Font Resizing & Dyslexia Mode Controller
 */

const STORAGE_KEY_SCALE = 'akseskita_font_scale';
const STORAGE_KEY_DYSLEXIA = 'akseskita_dyslexia_mode';

export function getFontScale() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_SCALE) || '0', 10);
  } catch (e) {
    return 0;
  }
}

export function setFontScale(level) {
  const clamped = Math.max(0, Math.min(3, level));
  const root = document.documentElement;
  
  // Remove existing scale classes
  root.classList.remove(
    'akseskita-scale-0',
    'akseskita-scale-1',
    'akseskita-scale-2',
    'akseskita-scale-3'
  );

  if (clamped > 0) {
    root.classList.add(`akseskita-scale-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCALE, clamped.toString());
  } catch (e) {}

  return clamped;
}

export function isDyslexiaEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_DYSLEXIA) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleDyslexia(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-dyslexia');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-dyslexia');
  } else {
    root.classList.remove('akseskita-dyslexia');
  }

  try {
    localStorage.setItem(STORAGE_KEY_DYSLEXIA, next.toString());
  } catch (e) {}

  return next;
}

export function resetFont() {
  setFontScale(0);
  toggleDyslexia(false);
}

export function restoreFontPreferences() {
  const scale = getFontScale();
  if (scale > 0) setFontScale(scale);

  const dyslexia = isDyslexiaEnabled();
  if (dyslexia) toggleDyslexia(true);
}
