/**
 * AksesKita - Advanced Blind-Accessible Text-to-Speech & Screen Reader Engine
 * Features:
 * 1. Screen Reader Mode (Read-on-Focus & Read-on-Hover for keyboard/mouse navigation).
 * 2. Continuous Full Page / Article Reader with visual sentence tracking.
 * 3. Text Selection Quick TTS Floating Popover with ARIA Live announcements.
 * 4. Configurable Speech Rate (0.75x to 2.0x).
 * 5. Bilingual Voice Synthesis (Indonesian id-ID & English en-US/en-GB).
 * 6. Global Blind Shortcuts (Alt+R: Screen Reader, Alt+P: Read Page, Alt+S: Stop Speech).
 */

import { getLanguage, t } from './i18n.js';

const STORAGE_KEY_RATE = 'akseskita_speech_rate';
const STORAGE_KEY_SCREEN_READER = 'akseskita_screen_reader_mode';

let cachedVoices = [];

function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
}

/**
 * Get preferred voice based on active language (id or en)
 */
export function getVoiceForLanguage(lang = null) {
  const targetLang = lang || getLanguage();
  const voices = cachedVoices.length ? cachedVoices : loadVoices();

  if (targetLang === 'en') {
    let voice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
    if (voice) return voice;
    voice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB');
    if (voice) return voice;
    voice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
    if (voice) return voice;
    return null;
  } else {
    let voice = voices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID');
    if (voice) return voice;
    voice = voices.find(v => v.lang.toLowerCase().startsWith('id'));
    if (voice) return voice;
    voice = voices.find(v => v.name.toLowerCase().includes('indonesia'));
    if (voice) return voice;
    return null;
  }
}

/**
 * Speech Rate Management (0.75x to 2.0x)
 */
export function getSpeechRate() {
  try {
    return parseFloat(localStorage.getItem(STORAGE_KEY_RATE) || '1.0');
  } catch (e) {
    return 1.0;
  }
}

export function setSpeechRate(rate) {
  const clamped = Math.max(0.75, Math.min(2.0, rate));
  try {
    localStorage.setItem(STORAGE_KEY_RATE, clamped.toString());
  } catch (e) {}
  return clamped;
}

/**
 * Core Speak Text Function with Chrome keepalive workaround
 */
export function speakText(text, options = {}) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
      return resolve();
    }

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}

    const utterance = new SpeechSynthesisUtterance(text);
    const lang = options.lang || getLanguage();
    const voice = getVoiceForLanguage(lang);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'en' ? 'en-US' : 'id-ID';
    }

    utterance.rate = options.rate || getSpeechRate();
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    let resumeInterval = null;

    const cleanup = () => {
      if (resumeInterval) {
        clearInterval(resumeInterval);
        resumeInterval = null;
      }
      resolve();
    };

    utterance.onstart = () => {
      // Chrome keepalive bug workaround
      resumeInterval = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          clearInterval(resumeInterval);
        } else {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 10000);
    };

    utterance.onend = cleanup;
    utterance.onerror = (e) => {
      console.warn('[AksesKita] Speech error:', e);
      cleanup();
    };

    window.speechSynthesis.speak(utterance);
  });
}

/**
 * Stop any active speech synthesis
 */
export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

/* ==========================================================================
   Screen Reader Mode (Read-on-Hover / Read-on-Focus for Blind Users)
   ========================================================================== */
let isScreenReaderActive = false;
let screenReaderHoverDebounce = null;
let currentHighlightedElement = null;

export function isScreenReaderEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY_SCREEN_READER) === 'true';
  } catch (e) {
    return false;
  }
}

function getAccessibleElementDescription(el) {
  if (!el || el.closest('akses-kita') || el.closest('#akseskita-tts-popover')) return null;

  const isEn = getLanguage() === 'en';
  const tag = el.tagName.toLowerCase();

  // 1. Images
  if (tag === 'img') {
    const desc = el.alt || el.title || (isEn ? 'Image without description' : 'Gambar tanpa deskripsi');
    return isEn ? `Image: ${desc}` : `Gambar: ${desc}`;
  }

  // 2. Buttons
  if (tag === 'button' || el.getAttribute('role') === 'button') {
    const text = el.innerText || el.getAttribute('aria-label') || el.title || '';
    if (!text.trim()) return null;
    return isEn ? `Button: ${text.trim()}` : `Tombol: ${text.trim()}`;
  }

  // 3. Links
  if (tag === 'a' || el.getAttribute('role') === 'link') {
    const text = el.innerText || el.getAttribute('aria-label') || el.title || '';
    if (!text.trim()) return null;
    return isEn ? `Link: ${text.trim()}` : `Tautan: ${text.trim()}`;
  }

  // 4. Headings (H1 - H6)
  if (/^h[1-6]$/.test(tag) || el.getAttribute('role') === 'heading') {
    const text = el.innerText || '';
    if (!text.trim()) return null;
    const level = tag.replace('h', '');
    return isEn ? `Heading level ${level}: ${text.trim()}` : `Judul tingkat ${level}: ${text.trim()}`;
  }

  // 5. Paragraphs & List Items
  if (['p', 'li', 'blockquote', 'summary', 'span', 'figcaption'].includes(tag)) {
    // Only read if it has direct text content or is the primary container
    const text = el.innerText ? el.innerText.trim() : '';
    if (text.length > 1 && text.length < 500) {
      return text;
    }
  }

  return null;
}

function highlightElement(el) {
  if (currentHighlightedElement && currentHighlightedElement !== el) {
    currentHighlightedElement.classList.remove('akseskita-reader-highlight');
  }
  if (el) {
    currentHighlightedElement = el;
    el.classList.add('akseskita-reader-highlight');
  }
}

function removeHighlight() {
  if (currentHighlightedElement) {
    currentHighlightedElement.classList.remove('akseskita-reader-highlight');
    currentHighlightedElement = null;
  }
}

function handleScreenReaderTarget(target) {
  if (!isScreenReaderActive || !target) return;
  const description = getAccessibleElementDescription(target);

  if (description) {
    highlightElement(target);
    speakText(description);
  }
}

const onScreenReaderMouseOver = (e) => {
  if (screenReaderHoverDebounce) clearTimeout(screenReaderHoverDebounce);
  screenReaderHoverDebounce = setTimeout(() => {
    handleScreenReaderTarget(e.target);
  }, 120);
};

const onScreenReaderFocusIn = (e) => {
  handleScreenReaderTarget(e.target);
};

export function toggleScreenReaderMode(forcedState = null) {
  const next = forcedState !== null ? forcedState : !isScreenReaderActive;
  isScreenReaderActive = next;

  if (isScreenReaderActive) {
    document.addEventListener('mouseover', onScreenReaderMouseOver, { passive: true });
    document.addEventListener('focusin', onScreenReaderFocusIn, { passive: true });
    
    const isEn = getLanguage() === 'en';
    const announcement = isEn 
      ? 'Screen reader navigation mode activated. Hover or press Tab to read elements aloud. Press Alt plus S to stop.'
      : 'Mode pembaca layar aktif. Arahkan kursor atau tekan Tab untuk mendengar elemen. Tekan Alt tambah S untuk berhenti.';
    speakText(announcement);
  } else {
    document.removeEventListener('mouseover', onScreenReaderMouseOver);
    document.removeEventListener('focusin', onScreenReaderFocusIn);
    removeHighlight();
    stopSpeech();
  }

  try {
    localStorage.setItem(STORAGE_KEY_SCREEN_READER, isScreenReaderActive.toString());
  } catch (e) {}

  return isScreenReaderActive;
}

/* ==========================================================================
   Continuous Page / Article Full Reader
   ========================================================================== */
let isReadingPage = false;
let pageElementsToRead = [];
let currentPageIndex = 0;

export function isPageReaderPlaying() {
  return isReadingPage;
}

export async function startPageReader() {
  if (typeof document === 'undefined') return;

  // Gather meaningful readable text elements on page
  const selectors = 'h1, h2, h3, h4, h5, h6, p, li, blockquote';
  const nodes = Array.from(document.querySelectorAll(selectors))
    .filter(el => {
      if (el.closest('akses-kita') || el.closest('#akseskita-tts-popover') || el.offsetParent === null) {
        return false;
      }
      const text = el.innerText ? el.innerText.trim() : '';
      return text.length > 2;
    });

  if (nodes.length === 0) {
    speakText(getLanguage() === 'en' ? 'No readable content found on this page.' : 'Tidak ditemukan konten teks untuk dibaca.');
    return;
  }

  pageElementsToRead = nodes;
  currentPageIndex = 0;
  isReadingPage = true;

  const isEn = getLanguage() === 'en';
  await speakText(isEn ? 'Starting continuous page reading...' : 'Memulai pembacaan seluruh halaman...');

  readNextPageBlock();
}

async function readNextPageBlock() {
  if (!isReadingPage || currentPageIndex >= pageElementsToRead.length) {
    stopPageReader();
    const isEn = getLanguage() === 'en';
    speakText(isEn ? 'Finished reading page.' : 'Selesai membaca seluruh halaman.');
    return;
  }

  const el = pageElementsToRead[currentPageIndex];
  if (el) {
    highlightElement(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const text = el.innerText.trim();
    await speakText(text);

    if (isReadingPage) {
      currentPageIndex++;
      setTimeout(() => {
        readNextPageBlock();
      }, 250);
    }
  }
}

export function stopPageReader() {
  isReadingPage = false;
  pageElementsToRead = [];
  currentPageIndex = 0;
  removeHighlight();
  stopSpeech();
}

export function togglePageReader() {
  if (isReadingPage) {
    stopPageReader();
    return false;
  } else {
    startPageReader();
    return true;
  }
}

/* ==========================================================================
   Quick TTS Floating Popover on Selection
   ========================================================================== */
export function initQuickTTS() {
  if (typeof document === 'undefined') return;

  let popover = document.getElementById('akseskita-tts-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'akseskita-tts-popover';
    popover.setAttribute('role', 'button');
    popover.setAttribute('tabindex', '0');
    popover.setAttribute('aria-label', t('ttsListen'));
    popover.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      <span id="akseskita-tts-popover-text">${t('ttsListen')}</span>
    `;
    document.body.appendChild(popover);
  }

  let selectedText = '';
  let selectionDebounce = null;

  const handleSelection = () => {
    if (selectionDebounce) clearTimeout(selectionDebounce);
    selectionDebounce = setTimeout(() => {
      const selection = window.getSelection();
      const text = selection ? selection.toString().trim() : '';

      if (text.length > 1) {
        selectedText = text;
        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          const top = window.scrollY + rect.top - 46;
          const left = window.scrollX + rect.left + rect.width / 2;

          popover.style.top = `${Math.max(10, top)}px`;
          popover.style.left = `${Math.max(10, left)}px`;
          popover.style.transform = 'translateX(-50%)';
          popover.style.display = 'flex';
        } catch (e) {}
      } else {
        popover.style.display = 'none';
      }
    }, 60);
  };

  document.addEventListener('mouseup', handleSelection, { passive: true });
  document.addEventListener('keyup', handleSelection, { passive: true });

  const triggerTTS = () => {
    if (selectedText) {
      speakText(selectedText);
      popover.style.display = 'none';
    }
  };

  popover.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    triggerTTS();
  });

  popover.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerTTS();
    }
  });

  // Restore saved screen reader mode
  if (isScreenReaderEnabled()) {
    toggleScreenReaderMode(true);
  }
}
