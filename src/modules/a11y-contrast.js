/**
 * AksesKita - Color & Contrast Adjustments Controller
 * High Contrast, Dark Contrast, Light Contrast, Monochrome,
 * Low Saturation, High Saturation, and Invert Colors.
 */

const STORAGE_KEY_CONTRAST = 'akseskita_contrast_mode';

export function getContrast() {
  try {
    return localStorage.getItem(STORAGE_KEY_CONTRAST) || 'normal';
  } catch (e) {
    return 'normal';
  }
}

function ensureContrastOverlays() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById('akseskita-monochrome-overlay')) {
    const monoOverlay = document.createElement('div');
    monoOverlay.id = 'akseskita-monochrome-overlay';
    document.body.appendChild(monoOverlay);
  }
  if (!document.getElementById('akseskita-invert-overlay')) {
    const invertOverlay = document.createElement('div');
    invertOverlay.id = 'akseskita-invert-overlay';
    document.body.appendChild(invertOverlay);
  }
}

export function setContrast(mode) {
  if (typeof document === 'undefined') return mode;
  ensureContrastOverlays();

  const root = document.documentElement;
  root.classList.remove(
    'akseskita-contrast-high',
    'akseskita-contrast-dark',
    'akseskita-contrast-light',
    'akseskita-monochrome',
    'akseskita-low-sat',
    'akseskita-high-sat',
    'akseskita-invert'
  );

  if (mode === 'high') {
    root.classList.add('akseskita-contrast-high');
  } else if (mode === 'dark') {
    root.classList.add('akseskita-contrast-dark');
  } else if (mode === 'light') {
    root.classList.add('akseskita-contrast-light');
  } else if (mode === 'mono') {
    root.classList.add('akseskita-monochrome');
  } else if (mode === 'low-sat') {
    root.classList.add('akseskita-low-sat');
  } else if (mode === 'high-sat') {
    root.classList.add('akseskita-high-sat');
  } else if (mode === 'invert') {
    root.classList.add('akseskita-invert');
  }

  try {
    localStorage.setItem(STORAGE_KEY_CONTRAST, mode);
  } catch (e) {}

  return mode;
}

export function resetContrast() {
  setContrast('normal');
}

export function restoreContrastPreferences() {
  const contrast = getContrast();
  if (contrast && contrast !== 'normal') {
    setContrast(contrast);
  }
}
