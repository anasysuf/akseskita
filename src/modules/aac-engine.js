/**
 * AksesKita - AAC Sentence Builder & Speech Engine
 * Coordinates sentence strip sequence, card playback, and visual highlight callbacks.
 */

import { speakText, stopSpeech } from './a11y-speech.js';

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

/**
 * Play single card (either recorded voice or Indonesian TTS)
 */
export async function playSingleCard(card) {
  stopSpeech();
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }

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
            speakText(card.speechText || card.label).then(resolve);
          };
          audio.play().catch(() => {
            if (isCreatedUrl) URL.revokeObjectURL(url);
            currentAudioElement = null;
            speakText(card.speechText || card.label).then(resolve);
          });
          return;
        }
      } catch (err) {
        console.warn('[AksesKita] Audio play error:', err);
      }
      resolve();
    });
  }

  return speakText(card.speechText || card.label);
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
