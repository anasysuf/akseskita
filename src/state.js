/**
 * AksesKita - State Management
 * Coordinates shared reactive state between A11y Toolbar and AAC Communicator.
 */

class AksesKitaState {
  constructor() {
    this.listeners = new Set();
    this.state = {
      isA11yOpen: false,
      isAACOpen: false,
      fontScale: 0,
      isDyslexia: false,
      contrastMode: 'normal',
      isHighlightLinks: false,
      isReadingGuide: false,
      sentence: []
    };
  }

  get() {
    return { ...this.state };
  }

  set(partial) {
    this.state = { ...this.state, ...partial };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.state);
      } catch (e) {
        console.error('[AksesKita State] Listener error:', e);
      }
    }
  }
}

export const appState = new AksesKitaState();
