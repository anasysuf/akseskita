/**
 * AksesKita - Speech Synthesis & Quick Floating Text Reader
 * Indonesian voice priority with intelligent fallback.
 */

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
 * Get preferred Indonesian voice, or default
 */
export function getIndonesianVoice() {
  const voices = cachedVoices.length ? cachedVoices : loadVoices();
  
  // Try exact id-ID match
  let voice = voices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID');
  if (voice) return voice;

  // Try language starting with 'id'
  voice = voices.find(v => v.lang.toLowerCase().startsWith('id'));
  if (voice) return voice;

  // Try Indonesian in name
  voice = voices.find(v => v.name.toLowerCase().includes('indonesia'));
  if (voice) return voice;

  return null;
}

/**
 * Speak text out loud with resume keepalive
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
    const idVoice = getIndonesianVoice();

    if (idVoice) {
      utterance.voice = idVoice;
      utterance.lang = idVoice.lang;
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = options.rate || 0.95;
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

/**
 * Initialize Quick TTS Floating popover on host text selection
 */
export function initQuickTTS() {
  if (typeof document === 'undefined') return;

  let popover = document.getElementById('akseskita-tts-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'akseskita-tts-popover';
    popover.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      <span>Dengarkan</span>
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

      if (text.length > 2) {
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

  popover.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedText) {
      speakText(selectedText);
      popover.style.display = 'none';
    }
  });
}
