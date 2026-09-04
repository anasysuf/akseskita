/**
 * AksesKita - Advanced Typography & Content Adjustments Controller
 * Font Resizing (75% - 200%), Font Weight, Line Height, Letter Spacing,
 * Dyslexia Mode, Link Highlighting, Title Highlighting, and Text Alignment.
 */

const STORAGE_KEY_SCALE = 'akseskita_font_scale';
const STORAGE_KEY_WEIGHT = 'akseskita_font_weight';
const STORAGE_KEY_LINE_HEIGHT = 'akseskita_line_height';
const STORAGE_KEY_LETTER_SPACING = 'akseskita_letter_spacing';
const STORAGE_KEY_DYSLEXIA = 'akseskita_dyslexia_mode';
const STORAGE_KEY_LINKS = 'akseskita_highlight_links';
const STORAGE_KEY_TITLES = 'akseskita_highlight_titles';
const STORAGE_KEY_ALIGN = 'akseskita_text_align';

// 1. Font Scale (-1: 75%, 0: 100%, 1: 125%, 2: 150%, 3: 175%, 4: 200%)
export function getFontScale() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_SCALE) || '0', 10);
  } catch (e) {
    return 0;
  }
}

export function getFontScalePercentage(level = null) {
  const current = level !== null ? level : getFontScale();
  switch (current) {
    case -1: return '75%';
    case 1: return '125%';
    case 2: return '150%';
    case 3: return '175%';
    case 4: return '200%';
    case 0:
    default: return '100%';
  }
}

export function setFontScale(level) {
  const clamped = Math.max(-1, Math.min(4, level));
  const root = document.documentElement;
  
  root.classList.remove(
    'akseskita-scale-sub1',
    'akseskita-scale-0',
    'akseskita-scale-1',
    'akseskita-scale-2',
    'akseskita-scale-3',
    'akseskita-scale-4'
  );

  const scaleMap = {
    '-1': 0.8,
    '0': 1.0,
    '1': 1.25,
    '2': 1.5,
    '3': 1.75,
    '4': 2.0
  };

  const scaleVal = scaleMap[clamped] || 1.0;
  root.style.setProperty('--akseskita-font-scale', scaleVal.toString());

  if (clamped === -1) {
    root.classList.add('akseskita-scale-sub1');
  } else if (clamped > 0) {
    root.classList.add(`akseskita-scale-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCALE, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 2. Font Weight (normal, bold)
export function isFontBold() {
  try {
    return localStorage.getItem(STORAGE_KEY_WEIGHT) === 'bold';
  } catch (e) {
    return false;
  }
}

export function toggleFontBold(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-font-bold');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-font-bold');
  } else {
    root.classList.remove('akseskita-font-bold');
  }

  try {
    localStorage.setItem(STORAGE_KEY_WEIGHT, next ? 'bold' : 'normal');
  } catch (e) {}

  return next;
}

// 3. Line Height (0: normal, 1: 1.8x, 2: 2.2x)
export function getLineHeight() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_LINE_HEIGHT) || '0', 10);
  } catch (e) {
    return 0;
  }
}

export function setLineHeight(level) {
  const clamped = Math.max(0, Math.min(2, level));
  const root = document.documentElement;

  root.classList.remove('akseskita-lh-1', 'akseskita-lh-2');
  if (clamped > 0) {
    root.classList.add(`akseskita-lh-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_LINE_HEIGHT, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 4. Letter Spacing (0: normal, 1: +1px, 2: +2px)
export function getLetterSpacing() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_LETTER_SPACING) || '0', 10);
  } catch (e) {
    return 0;
  }
}

export function setLetterSpacing(level) {
  const clamped = Math.max(0, Math.min(2, level));
  const root = document.documentElement;

  root.classList.remove('akseskita-ls-1', 'akseskita-ls-2');
  if (clamped > 0) {
    root.classList.add(`akseskita-ls-${clamped}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_LETTER_SPACING, clamped.toString());
  } catch (e) {}

  return clamped;
}

// 5. Dyslexia Mode
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

// 6. Highlight Links
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

// 7. Highlight Headings / Titles
export function isHighlightTitlesEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_TITLES) === 'true';
  } catch (e) {
    return false;
  }
}

export function toggleHighlightTitles(forcedState = null) {
  const root = document.documentElement;
  const current = root.classList.contains('akseskita-highlight-titles');
  const next = forcedState !== null ? forcedState : !current;

  if (next) {
    root.classList.add('akseskita-highlight-titles');
  } else {
    root.classList.remove('akseskita-highlight-titles');
  }

  try {
    localStorage.setItem(STORAGE_KEY_TITLES, next.toString());
  } catch (e) {}

  return next;
}

// 8. Text Alignment ('left', 'center', 'right', 'justify', 'default')
export function getTextAlign() {
  try {
    return localStorage.getItem(STORAGE_KEY_ALIGN) || 'default';
  } catch (e) {
    return 'default';
  }
}

export function setTextAlign(align) {
  const root = document.documentElement;
  root.classList.remove(
    'akseskita-align-left',
    'akseskita-align-center',
    'akseskita-align-right',
    'akseskita-align-justify'
  );

  if (align && align !== 'default') {
    root.classList.add(`akseskita-align-${align}`);
  }

  try {
    localStorage.setItem(STORAGE_KEY_ALIGN, align);
  } catch (e) {}

  return align;
}

// Reset all typography
export function resetFont() {
  setFontScale(0);
  toggleFontBold(false);
  setLineHeight(0);
  setLetterSpacing(0);
  toggleDyslexia(false);
  toggleHighlightLinks(false);
  toggleHighlightTitles(false);
  setTextAlign('default');
}

// Restore saved preferences
export function restoreFontPreferences() {
  const scale = getFontScale();
  if (scale !== 0) setFontScale(scale);

  if (isFontBold()) toggleFontBold(true);

  const lh = getLineHeight();
  if (lh > 0) setLineHeight(lh);

  const ls = getLetterSpacing();
  if (ls > 0) setLetterSpacing(ls);

  if (isDyslexiaEnabled()) toggleDyslexia(true);
  if (isHighlightLinksEnabled()) toggleHighlightLinks(true);
  if (isHighlightTitlesEnabled()) toggleHighlightTitles(true);

  const align = getTextAlign();
  if (align && align !== 'default') setTextAlign(align);
}
