/**
 * AksesKita - A11y Contrast & Visual Filters Controller
 */

const STORAGE_KEY_CONTRAST = 'akseskita_contrast_mode';
const STORAGE_KEY_LINKS = 'akseskita_highlight_links';
const STORAGE_KEY_GUIDE = 'akseskita_reading_guide';

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
  root.classList.remove('akseskita-contrast-high', 'akseskita-monochrome', 'akseskita-invert');

  if (mode === 'high') {
    root.classList.add('akseskita-contrast-high');
  } else if (mode === 'mono') {
    root.classList.add('akseskita-monochrome');
  } else if (mode === 'invert') {
    root.classList.add('akseskita-invert');
  }

  try {
    localStorage.setItem(STORAGE_KEY_CONTRAST, mode);
  } catch (e) {}

  return mode;
}

export function isHighlightLinksEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_LINKS) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleHighlightLinks(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-highlight-links');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-highlight-links');
  } else {
    root.classList.remove('akseskita-highlight-links');
  }

  try {
    localStorage.setItem(STORAGE_KEY_LINKS, next.toString());
  } catch (e) {}

  return next;
}

export function isReadingGuideEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_GUIDE) === 'true';
  } catch (e) {
    return false;
  }
}

let guideMouseMoveHandler = null;
let rafId = null;

export function toggleReadingGuide(forcedState = null) {
  let guideEl = document.getElementById('akseskita-reading-guide');
  if (!guideEl) {
    guideEl = document.createElement('div');
    guideEl.id = 'akseskita-reading-guide';
    document.body.appendChild(guideEl);
  }

  const current = guideEl.style.display === 'block';
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    guideEl.style.display = 'block';
    if (!guideMouseMoveHandler) {
      let latestY = 0;
      guideMouseMoveHandler = (e) => {
        latestY = e.clientY;
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            guideEl.style.top = `${latestY}px`;
            rafId = null;
          });
        }
      };
      window.addEventListener('mousemove', guideMouseMoveHandler, { passive: true });
    }
  } else {
    guideEl.style.display = 'none';
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (guideMouseMoveHandler) {
      window.removeEventListener('mousemove', guideMouseMoveHandler);
      guideMouseMoveHandler = null;
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY_GUIDE, next.toString());
  } catch (e) {}

  return next;
}

export function resetContrast() {
  setContrast('normal');
  toggleHighlightLinks(false);
  toggleReadingGuide(false);
}

export function restoreContrastPreferences() {
  const contrast = getContrast();
  if (contrast && contrast !== 'normal') setContrast(contrast);

  if (isHighlightLinksEnabled()) toggleHighlightLinks(true);
  if (isReadingGuideEnabled()) toggleReadingGuide(true);
}
