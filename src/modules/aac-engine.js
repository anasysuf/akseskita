import { speakText, stopSpeech } from './a11y-speech.js';
import { getLanguage } from './i18n.js';

let sentenceList = [];
let isPlaying = false;
let currentAudioElement = null;

export function getSentenceList() {
  return [...sentenceList];
}

export function addCardToSentence(card) {
  sentenceList.push({
    ...card,
    instanceId: 'inst_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)
  });
  return [...sentenceList];
}

export function removeCardFromSentence(index) {
  if (index >= 0 && index < sentenceList.length) {
    sentenceList.splice(index, 1);
  }
  return [...sentenceList];
}

export function removeLastCard() {
  if (sentenceList.length > 0) {
    sentenceList.pop();
  }
  return [...sentenceList];
}

export function clearSentence() {
  sentenceList = [];
  return [];
}

function getCardSpokenText(card) {
  const isEn = getLanguage() === 'en';
  if (isEn && (card.speechTextEn || card.labelEn)) {
    return card.speechTextEn || card.labelEn;
  }
  return card.speechText || card.label;
}

/**
 * Play single card (either recorded voice or Indonesian/English TTS)
 */
export async function playSingleCard(card) {
  stopSpeech();
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }

  const textToSpeak = getCardSpokenText(card);

  if (card.audioBlob) {
    return new Promise((resolve) => {
      try {
        let isCreatedUrl = false;
        let url;
        if (typeof card.audioBlob === 'string' && card.audioBlob.startsWith('data:')) {
          url = card.audioBlob;
        } else if (card.audioBlob instanceof Blob) {
          url = URL.createObjectURL(card.audioBlob);
          isCreatedUrl = true;
        }

        if (url) {
          const audio = new Audio(url);
          currentAudioElement = audio;

          const finishAudio = () => {
            currentAudioElement = null;
            if (isCreatedUrl) URL.revokeObjectURL(url);
            resolve();
          };

          audio.onended = finishAudio;
          audio.onerror = () => {
            if (isCreatedUrl) URL.revokeObjectURL(url);
            currentAudioElement = null;
            // Fallback to TTS
            speakText(textToSpeak).then(resolve);
          };
          audio.play().catch(() => {
            if (isCreatedUrl) URL.revokeObjectURL(url);
            currentAudioElement = null;
            speakText(textToSpeak).then(resolve);
          });
          return;
        }
      } catch (err) {
        console.warn('[AksesKita] Audio play error:', err);
      }
      resolve();
    });
  }

  return speakText(textToSpeak);
}

/**
 * Speak the whole sentence strip card by card with sequential visual highlight
 */
export async function speakSentence(onCardHighlight = () => {}) {
  if (isPlaying || sentenceList.length === 0) return;
  isPlaying = true;

  try {
    for (let i = 0; i < sentenceList.length; i++) {
      const item = sentenceList[i];
      onCardHighlight(i, item);
      await playSingleCard(item);
      // Small pause between words for natural speech
      await new Promise(r => setTimeout(r, 250));
    }
  } finally {
    isPlaying = false;
    onCardHighlight(-1, null); // Clear highlight
  }
}

export function stopSentencePlayback() {
  isPlaying = false;
  stopSpeech();
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }
}
