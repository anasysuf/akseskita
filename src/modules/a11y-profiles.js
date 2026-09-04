/**
 * AksesKita - 1-Click Accessibility Preset Profiles Controller
 * Matches modern accessibility standards (Seizure Safe, Vision Impaired,
 * ADHD Friendly, Cognitive & Learning, Motor Impaired, Blind Profile).
 */

import { 
  setFontScale, 
  setLineHeight, 
  setLetterSpacing, 
  toggleDyslexia, 
  toggleHighlightLinks, 
  toggleHighlightTitles,
  resetFont
} from './a11y-font.js';

import { 
  setContrast, 
  resetContrast 
} from './a11y-contrast.js';

import { 
  toggleReadingGuide, 
  toggleReadingMask, 
  toggleSuperFocus, 
  toggleBigCursor, 
  toggleStopAnimations, 
  toggleHideImages, 
  resetVisualAids 
} from './a11y-visual.js';

import { speakText } from './a11y-speech.js';
import { getLanguage } from './i18n.js';

const STORAGE_KEY_ACTIVE_PROFILE = 'akseskita_active_profile';

export function getActiveProfile() {
  try {
    return localStorage.getItem(STORAGE_KEY_ACTIVE_PROFILE) || null;
  } catch (e) {
    return null;
  }
}

export function resetAllSettings() {
  resetFont();
  resetContrast();
  resetVisualAids();
  try {
    localStorage.removeItem(STORAGE_KEY_ACTIVE_PROFILE);
  } catch (e) {}
}

export function applyProfile(profileId) {
  const current = getActiveProfile();

  // If clicking same profile, toggle off
  if (current === profileId) {
    resetAllSettings();
    return null;
  }

  // Reset before applying new profile
  resetAllSettings();

  switch (profileId) {
    case 'seizure':
      // Seizure Safe Profile: Stop animations, low saturation, mute flashes
      toggleStopAnimations(true);
      setContrast('low-sat');
      break;

    case 'vision':
      // Vision Impaired Profile: High contrast, larger font, highlight links & titles
      setContrast('high');
      setFontScale(2);
      toggleHighlightLinks(true);
      toggleHighlightTitles(true);
      break;

    case 'adhd':
      // ADHD Friendly Profile: Reading mask, stop animations, super focus
      toggleStopAnimations(true);
      toggleReadingMask(true);
      toggleSuperFocus(true);
      break;

    case 'cognitive':
      // Cognitive & Learning Profile: Dyslexia font, line height, letter spacing, reading guide
      toggleDyslexia(true);
      setLineHeight(1);
      setLetterSpacing(1);
      toggleReadingGuide(true);
      break;

    case 'motor':
      // Motor Impaired Profile: Big cursor, super focus, highlight links
      toggleBigCursor(true);
      toggleSuperFocus(true);
      toggleHighlightLinks(true);
      break;

    case 'blind':
      // Blind Profile: Audio TTS introduction & highlight links
      toggleHighlightLinks(true);
      const isEn = getLanguage() === 'en';
      const msg = isEn 
        ? 'Blind profile activated. Select any text to listen, or use Alt plus C for assistive AAC communicator.' 
        : 'Profil tunanetra aktif. Blok teks apa pun untuk mendengarkan, atau gunakan Alt tambah C untuk papan bicara.';
      speakText(msg);
      break;
  }

  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_PROFILE, profileId);
  } catch (e) {}

  return profileId;
}
