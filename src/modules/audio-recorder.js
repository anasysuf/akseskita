/**
 * AksesKita - Native Audio Recorder
 * Uses MediaRecorder API to capture user voice recordings locally for custom AAC cards.
 */

let mediaRecorder = null;
let audioChunks = [];

export function isAudioRecordingSupported() {
  return typeof navigator !== 'undefined' && 
         navigator.mediaDevices && 
         typeof navigator.mediaDevices.getUserMedia === 'function' &&
         typeof window.MediaRecorder === 'function';
}

export async function startAudioRecording() {
  if (!isAudioRecordingSupported()) {
    throw new Error('Perekaman audio tidak didukung oleh browser ini.');
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  audioChunks = [];
  
  // Choose mimeType if supported
  let options = {};
  if (MediaRecorder.isTypeSupported('audio/webm')) {
    options = { mimeType: 'audio/webm' };
  } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
    options = { mimeType: 'audio/mp4' };
  }

  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      audioChunks.push(e.data);
    }
  };

  mediaRecorder.start();
  return true;
}

export function stopAudioRecording() {
  return new Promise((resolve, reject) => {
    if (!mediaRecorder || mediaRecorder.state === 'inactive') {
      return resolve(null);
    }

    mediaRecorder.onstop = () => {
      const mime = mediaRecorder.mimeType || 'audio/webm';
      const audioBlob = new Blob(audioChunks, { type: mime });
      
      // Stop all tracks to release mic
      if (mediaRecorder.stream) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }

      resolve(audioBlob);
    };

    mediaRecorder.onerror = (e) => reject(e.error);
    mediaRecorder.stop();
  });
}
