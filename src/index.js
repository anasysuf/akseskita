/**
 * AksesKita - All-in-One Assistive Web Suite
 * Comprehensive Web Accessibility Widget (Profiles, Typography, Contrast, Visual Aids, Usability)
 * & Interactive Visual AAC Communicator Board (Bilingual ID / EN)
 * Zero Dependency Web Component (<akses-kita>)
 */

import { hostStyles } from './styles/host-inject.css.js';
import { a11yStyles, aacModalStyles } from './styles/widget.css.js';
import { 
  openAksesKitaDB, 
  getAllCategories, 
  getAllCards, 
  addCard, 
  deleteCard, 
  exportBackup, 
  importBackup, 
  initDefaultData 
} from './db/idb.js';
import { defaultCategories, defaultCards } from './db/default-cards.js';
import { 
  getLanguage, 
  setLanguage, 
  t 
} from './modules/i18n.js';

// Profiles Controller
import { 
  applyProfile, 
  getActiveProfile, 
  resetAllSettings 
} from './modules/a11y-profiles.js';

// Typography Controller
import { 
  setFontScale, 
  getFontScale, 
  getFontScalePercentage,
  toggleFontBold, 
  isFontBold,
  setLineHeight, 
  getLineHeight,
  setLetterSpacing, 
  getLetterSpacing,
  toggleDyslexia, 
  isDyslexiaEnabled, 
  toggleHighlightLinks, 
  isHighlightLinksEnabled, 
  toggleHighlightTitles,
  isHighlightTitlesEnabled,
  setTextAlign,
  getTextAlign,
  restoreFontPreferences 
} from './modules/a11y-font.js';

// Contrast Controller
import { 
  setContrast, 
  getContrast, 
  restoreContrastPreferences 
} from './modules/a11y-contrast.js';

// Visual & Usability Controller
import { 
  toggleReadingGuide, 
  isReadingGuideEnabled,
  toggleReadingMask, 
  isReadingMaskEnabled,
  toggleSuperFocus, 
  isSuperFocusEnabled,
  toggleBigCursor, 
  isBigCursorEnabled,
  toggleStopAnimations, 
  isStopAnimationsEnabled,
  toggleHideImages, 
  isHideImagesEnabled,
  toggleImageTooltips, 
  isImageTooltipsEnabled,
  restoreVisualPreferences 
} from './modules/a11y-visual.js';

// Speech & Screen Reader & AAC
import { 
  speakText, 
  stopSpeech, 
  initQuickTTS,
  toggleScreenReaderMode,
  isScreenReaderEnabled,
  togglePageReader,
  stopPageReader,
  isPageReaderPlaying,
  getSpeechRate,
  setSpeechRate
} from './modules/a11y-speech.js';
import { 
  getSentenceList, 
  addCardToSentence, 
  removeCardFromSentence, 
  removeLastCard, 
  clearSentence, 
  playSingleCard, 
  speakSentence, 
  stopSentencePlayback 
} from './modules/aac-engine.js';
import { 
  isAudioRecordingSupported, 
  startAudioRecording, 
  stopAudioRecording 
} from './modules/audio-recorder.js';

class AksesKitaElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.activeTab = 'profiles'; // 'profiles', 'content', 'color', 'visual'
    this.activeCategoryId = 'all';
    this.categories = [];
    this.cards = [];
    this.isRecording = false;
    this.currentRecordedAudioBlob = null;
    this.customImageBase64 = null;
  }

  async connectedCallback() {
    this.injectHostStyles();
    this.render();
    this.bindEvents();
    this.initShortcuts();
    
    // Restore user preferences
    restoreFontPreferences();
    restoreContrastPreferences();
    restoreVisualPreferences();
    initQuickTTS();
    this.syncA11yUIState();

    // Init IndexedDB & default AAC symbols
    try {
      await openAksesKitaDB();
      await initDefaultData(defaultCategories, defaultCards);
      await this.loadAACData();
    } catch (err) {
      console.warn('[AksesKita] DB Init warning:', err);
    }
  }

  injectHostStyles() {
    if (typeof document === 'undefined') return;
    const styleId = 'akseskita-host-injected-styles';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = hostStyles;
      document.head.appendChild(styleEl);
    }
  }

  render() {
    const lang = getLanguage();

    this.shadowRoot.innerHTML = `
      <style>
        ${a11yStyles}
        ${aacModalStyles}
      </style>

      <!-- FAB Trigger Button -->
      <button id="fab-trigger" class="fab-trigger" aria-label="Buka Menu Aksesibilitas AksesKita" title="Aksesibilitas (Alt + A)">
        <span class="fab-icon">♿</span>
        <span>AksesKita</span>
      </button>

      <!-- Toolbar A11y Panel -->
      <div id="a11y-panel" class="panel-container hidden" role="dialog" aria-modal="false" aria-label="Menu Aksesibilitas Web">
        <!-- Panel Header -->
        <div class="panel-header">
          <div class="panel-title-wrapper">
            <span style="font-size: 20px;">♿</span>
            <h3>AksesKita</h3>
            <span class="panel-title-badge">${t('a11yBadge')}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="lang-toggle-bar" aria-label="Pilih Bahasa / Choose Language">
              <button class="lang-btn ${lang === 'id' ? 'active' : ''}" data-lang="id" title="Bahasa Indonesia">ID</button>
              <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" title="English">EN</button>
            </div>
            <button id="close-panel-btn" class="btn-icon-close" aria-label="${t('close')}">&times;</button>
          </div>
        </div>

        <div class="panel-body">
          <!-- SECTION 1: AUDIO & SCREEN READER (BLIND ACCESSIBILITY - FOCUS UTAMA) -->
          <div class="section-group">
            <div class="section-label">
              <span>🔊 ${t('audioSection')}</span>
              <span class="section-tag-focus">Fokus Utama</span>
            </div>

            <!-- Screen Reader Mode Switch Card -->
            <div id="card-screen-reader-box" class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span style="font-size: 18px;">🦯</span>
                  <span>${t('screenReaderMode')}</span>
                </div>
                <span class="shortcut-kbd">Alt + R</span>
              </div>
              <p class="audio-card-desc">${t('screenReaderDesc')}</p>
              <button id="btn-screen-reader" class="btn-audio-action">
                <span>🔈</span>
                <span id="label-screen-reader-toggle">Aktifkan Pembaca Layar</span>
              </button>
            </div>

            <!-- Continuous Page Reader -->
            <div class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span style="font-size: 18px;">📖</span>
                  <span>${t('pageReader')}</span>
                </div>
                <span class="shortcut-kbd">Alt + P</span>
              </div>
              <div style="display: flex; gap: 8px; margin-top: 4px;">
                <button id="btn-page-reader" class="btn-audio-action" style="flex: 1;">
                  <span>▶️</span>
                  <span id="label-page-reader">${t('pageReader')}</span>
                </button>
                <button id="btn-stop-speech" class="btn-audio-action danger" title="${t('stopPageReader')} (Alt + S)">
                  <span>⏹️</span>
                  <span>${t('stopPageReader')}</span>
                </button>
              </div>
            </div>

            <!-- Speech Rate Adjuster -->
            <div class="audio-card-box">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap">
                  <span style="font-size: 18px;">⚡</span>
                  <span>${t('speechRate')}</span>
                </div>
              </div>
              <div class="speech-rate-grid">
                <button class="speech-rate-chip" data-rate="0.75">0.75x</button>
                <button class="speech-rate-chip" data-rate="1.0">1.0x</button>
                <button class="speech-rate-chip" data-rate="1.25">1.25x</button>
                <button class="speech-rate-chip" data-rate="1.5">1.5x</button>
                <button class="speech-rate-chip" data-rate="2.0">2.0x</button>
              </div>
            </div>

            <!-- Selection Quick TTS Info Card -->
            <div class="audio-card-box" style="background: #f0fdf4; border-color: #bbf7d0;">
              <div class="audio-card-top">
                <div class="audio-card-title-wrap" style="color: #166534;">
                  <span>✨</span>
                  <span>${t('selectionTtsTitle')}</span>
                </div>
              </div>
              <p class="audio-card-desc" style="color: #15803d;">${t('selectionTtsDesc')}</p>
            </div>
          </div>

          <!-- SECTION 2: 1-CLICK PROFILES -->
          <div class="section-group">
            <div class="section-label">
              <span>🌟 ${t('profilesSection')}</span>
            </div>
            <div class="profiles-grid">
              <div class="profile-card" data-profile="blind">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🦯</span>
                  <span class="profile-card-title">${t('profileBlindTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileBlindDesc')}</p>
              </div>

              <div class="profile-card" data-profile="vision">
                <div class="profile-card-header">
                  <span class="profile-card-icon">👁️</span>
                  <span class="profile-card-title">${t('profileVisionTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileVisionDesc')}</p>
              </div>

              <div class="profile-card" data-profile="adhd">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🎯</span>
                  <span class="profile-card-title">${t('profileAdhdTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileAdhdDesc')}</p>
              </div>

              <div class="profile-card" data-profile="seizure">
                <div class="profile-card-header">
                  <span class="profile-card-icon">⚡</span>
                  <span class="profile-card-title">${t('profileSeizureTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileSeizureDesc')}</p>
              </div>

              <div class="profile-card" data-profile="cognitive">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🧠</span>
                  <span class="profile-card-title">${t('profileCognitiveTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileCognitiveDesc')}</p>
              </div>

              <div class="profile-card" data-profile="motor">
                <div class="profile-card-header">
                  <span class="profile-card-icon">🖐️</span>
                  <span class="profile-card-title">${t('profileMotorTitle')}</span>
                </div>
                <p class="profile-card-desc">${t('profileMotorDesc')}</p>
              </div>
            </div>
          </div>

          <!-- SECTION 3: CONTENT & TYPOGRAPHY -->
          <div class="section-group">
            <!-- Font Sizing (75% - 200%) -->
            <div style="margin-bottom: 14px;">
              <span class="section-label">🔤 ${t('fontSize')} (75% - 200%)</span>
              <div class="font-scaler-box">
                <button id="btn-font-dec" class="font-step-btn" title="${t('fontSmall')} (-25%)">－</button>
                <div id="font-scale-indicator" class="font-scale-value-badge">${getFontScalePercentage()}</div>
                <button id="btn-font-inc" class="font-step-btn" title="${t('fontLarge')} (+25%)">＋</button>
                <button id="btn-font-reset" class="btn-secondary-action" style="padding: 6px 12px; font-size: 11px;">Reset</button>
              </div>
              <div class="font-presets-row">
                <button class="font-preset-chip" data-scale="-1">75%</button>
                <button class="font-preset-chip" data-scale="0">100%</button>
                <button class="font-preset-chip" data-scale="1">125%</button>
                <button class="font-preset-chip" data-scale="2">150%</button>
                <button class="font-preset-chip" data-scale="3">175%</button>
                <button class="font-preset-chip" data-scale="4">200%</button>
              </div>
            </div>

            <!-- Typography Adjustments -->
            <div style="margin-bottom: 14px;">
              <span class="section-label">📐 ${t('contentSection')}</span>
              <div class="button-grid cols-3">
                <button id="btn-font-bold" class="tool-btn">
                  <span class="btn-icon">𝗕</span>
                  <span>${t('fontBolder')}</span>
                </button>
                <button id="btn-dyslexia" class="tool-btn">
                  <span class="btn-icon">📖</span>
                  <span>${t('fontDyslexia')}</span>
                </button>
                <button id="btn-line-height" class="tool-btn">
                  <span class="btn-icon">↕️</span>
                  <span id="label-line-height">${t('lineHeight')}</span>
                </button>
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <div class="button-grid cols-3">
                <button id="btn-letter-spacing" class="tool-btn">
                  <span class="btn-icon">↔️</span>
                  <span id="label-letter-spacing">${t('letterSpacing')}</span>
                </button>
                <button id="btn-highlight-links" class="tool-btn">
                  <span class="btn-icon">🔗</span>
                  <span>${t('highlightLinks')}</span>
                </button>
                <button id="btn-highlight-titles" class="tool-btn">
                  <span class="btn-icon">🏷️</span>
                  <span>${t('highlightTitles')}</span>
                </button>
              </div>
            </div>

            <!-- Text Alignment -->
            <div>
              <span class="section-label">📜 ${t('textAlign')}</span>
              <div class="align-segmented-bar">
                <button class="align-btn" data-align="left" title="${t('alignLeft')}">⬅️</button>
                <button class="align-btn" data-align="center" title="${t('alignCenter')}">↔️</button>
                <button class="align-btn" data-align="right" title="${t('alignRight')}">➡️</button>
                <button class="align-btn" data-align="justify" title="${t('alignJustify')}">☰</button>
              </div>
            </div>
          </div>

          <!-- SECTION 4: COLOR & CONTRAST -->
          <div class="section-group">
            <span class="section-label">🎨 ${t('colorSection')}</span>
            <div class="button-grid cols-3">
              <button id="btn-contrast-high" class="tool-btn" data-contrast="high">
                <span class="btn-icon">🌓</span>
                <span>${t('contrastHigh')}</span>
              </button>
              <button id="btn-contrast-dark" class="tool-btn" data-contrast="dark">
                <span class="btn-icon">🌑</span>
                <span>${t('contrastDark')}</span>
              </button>
              <button id="btn-contrast-light" class="tool-btn" data-contrast="light">
                <span class="btn-icon">🌕</span>
                <span>${t('contrastLight')}</span>
              </button>
              <button id="btn-contrast-mono" class="tool-btn" data-contrast="mono">
                <span class="btn-icon">⬛</span>
                <span>${t('contrastMono')}</span>
              </button>
              <button id="btn-contrast-low-sat" class="tool-btn" data-contrast="low-sat">
                <span class="btn-icon">🌫️</span>
                <span>${t('contrastLowSat')}</span>
              </button>
              <button id="btn-contrast-high-sat" class="tool-btn" data-contrast="high-sat">
                <span class="btn-icon">🌈</span>
                <span>${t('contrastHighSat')}</span>
              </button>
              <button id="btn-contrast-invert" class="tool-btn" data-contrast="invert" style="grid-column: 1 / -1;">
                <span class="btn-icon">🔄</span>
                <span>${t('contrastInvert')}</span>
              </button>
            </div>
          </div>

          <!-- SECTION 5: VISUAL & USABILITY -->
          <div class="section-group">
            <div style="margin-bottom: 14px;">
              <span class="section-label">🔍 ${t('visualSection')}</span>
              <div class="button-grid cols-2">
                <button id="btn-reading-guide" class="tool-btn">
                  <span class="btn-icon">📏</span>
                  <span>${t('readingGuide')}</span>
                </button>
                <button id="btn-reading-mask" class="tool-btn">
                  <span class="btn-icon">🕶️</span>
                  <span>${t('readingMask')}</span>
                </button>
                <button id="btn-super-focus" class="tool-btn">
                  <span class="btn-icon">🔦</span>
                  <span>${t('superFocus')}</span>
                </button>
                <button id="btn-big-cursor" class="tool-btn">
                  <span class="btn-icon">👆</span>
                  <span>${t('bigCursor')}</span>
                </button>
              </div>
            </div>

            <div>
              <span class="section-label">🛠️ ${t('usabilitySection')}</span>
              <div class="button-grid cols-3">
                <button id="btn-stop-anim" class="tool-btn">
                  <span class="btn-icon">⏸️</span>
                  <span>${t('stopAnimations')}</span>
                </button>
                <button id="btn-hide-images" class="tool-btn">
                  <span class="btn-icon">🖼️🚫</span>
                  <span>${t('hideImages')}</span>
                </button>
                <button id="btn-image-tooltips" class="tool-btn">
                  <span class="btn-icon">💬</span>
                  <span>${t('imageTooltips')}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- CTA AAC COMMUNICATOR -->
          <button id="open-aac-btn" class="btn-aac-launch" title="Shortcut: Alt + C">
            <span style="font-size: 20px;">🗣️</span>
            <span>${t('openAacBtn')}</span>
          </button>
        </div>

        <!-- Panel Footer -->
        <div class="panel-footer">
          <button id="btn-reset-all" class="reset-link">${t('resetAll')}</button>
          <span>${t('shortcutHint')}: <b>Alt + A</b></span>
        </div>
      </div>

      <!-- Fullscreen AAC Communicator Modal -->
      <div id="aac-modal" class="aac-backdrop hidden" role="dialog" aria-modal="true" aria-label="${t('aacTitle')}">
        <div class="aac-window">
          <!-- Header -->
          <div class="aac-header">
            <div class="aac-header-left">
              <div class="aac-header-icon">🗣️</div>
              <div>
                <h2 class="aac-header-title">${t('aacTitle')}</h2>
                <p class="aac-header-subtitle">${t('aacSubtitle')}</p>
              </div>
            </div>
            <div class="aac-header-actions">
              <div class="lang-toggle-bar" aria-label="Pilih Bahasa / Choose Language">
                <button class="lang-btn ${lang === 'id' ? 'active' : ''}" data-lang="id" title="Bahasa Indonesia">ID</button>
                <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" title="English">EN</button>
              </div>
              <button id="btn-export-aac" class="btn-secondary-action" title="${t('exportBtn')} JSON">
                💾 ${t('exportBtn')}
              </button>
              <button id="btn-import-aac" class="btn-secondary-action" title="${t('importBtn')} JSON">
                📥 ${t('importBtn')}
              </button>
              <input type="file" id="import-file-input" accept=".json" style="display: none;" />
              <button id="close-aac-btn" class="btn-icon-close" aria-label="${t('close')}" style="font-size: 24px;">&times;</button>
            </div>
          </div>

          <!-- Sentence Strip (Pita Kalimat) -->
          <div class="sentence-strip-wrapper">
            <div id="sentence-container" class="sentence-items-container">
              <div class="sentence-empty-placeholder">
                <span>${t('sentencePlaceholder')}</span>
              </div>
            </div>
            <div class="sentence-actions">
              <button id="btn-aac-speak" class="btn-speak-main">
                <span style="font-size: 20px;">🔊</span>
                <span>${t('speakBtn')}</span>
              </button>
              <button id="btn-aac-backspace" class="btn-strip-action" title="${t('backspaceBtn')}">
                <span style="font-size: 16px;">⌫</span>
                <span>${t('backspaceBtn')}</span>
              </button>
              <button id="btn-aac-clear" class="btn-strip-action" title="${t('clearBtn')}">
                <span style="font-size: 16px;">🗑️</span>
                <span>${t('clearBtn')}</span>
              </button>
            </div>
          </div>

          <!-- Category Filter Bar -->
          <div id="category-tabs" class="category-tabs-bar">
            <!-- Rendered dynamically -->
          </div>

          <!-- Main Cards Grid View -->
          <div id="aac-cards-grid" class="aac-body">
            <!-- Rendered dynamically -->
          </div>

          <!-- Floating Add Card Action -->
          <button id="btn-open-creator" class="btn-fab-add" title="${t('addCardBtn')}">
            <span style="font-size: 18px;">➕</span>
            <span>${t('addCardBtn')}</span>
          </button>

          <!-- Custom Card Creator Dialog -->
          <div id="card-creator-modal" class="custom-card-modal hidden">
            <div class="custom-card-dialog">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 17px; font-weight: 800;">${t('newCardTitle')}</h3>
                <button id="close-creator-btn" class="btn-icon-close">&times;</button>
              </div>

              <div class="form-group">
                <label for="input-card-label">${t('cardLabel')}</label>
                <input type="text" id="input-card-label" class="form-input" placeholder="${t('cardLabelPlaceholder')}" />
              </div>

              <div class="form-group">
                <label for="input-card-speech">${t('cardSpeech')}</label>
                <input type="text" id="input-card-speech" class="form-input" placeholder="${t('cardSpeechPlaceholder')}" />
              </div>

              <div class="form-group">
                <label for="select-card-cat">${t('cardCategory')}</label>
                <select id="select-card-cat" class="form-select"></select>
              </div>

              <div class="form-group">
                <label>${t('cardImage')}</label>
                <div style="display: flex; gap: 10px; align-items: center;">
                  <input type="file" id="input-card-image" accept="image/*" class="form-input" style="flex: 1;" />
                  <div id="preview-image-box" style="width: 44px; height: 44px; border-radius: 8px; border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; font-size: 20px; background: #f8fafc; overflow: hidden;">
                    🖼️
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>${t('cardVoice')}</label>
                <div class="recorder-box">
                  <span id="recorder-status" style="font-size: 13px; color: #475569;">${t('voiceStatusDefault')}</span>
                  <button type="button" id="btn-record-voice" class="btn-record">
                    <span>🎙️</span>
                    <span id="btn-record-text">${t('recordBtn')}</span>
                  </button>
                </div>
              </div>

              <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px;">
                <button type="button" id="btn-cancel-creator" class="btn-secondary-action">${t('cancelBtn')}</button>
                <button type="button" id="btn-save-card" class="btn-speak-main" style="padding: 10px 18px; font-size: 14px;">${t('saveBtn')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const root = this.shadowRoot;

    // Panel & FAB Triggers
    const fabTrigger = root.getElementById('fab-trigger');
    const panel = root.getElementById('a11y-panel');
    const closePanelBtn = root.getElementById('close-panel-btn');
    const openAacBtn = root.getElementById('open-aac-btn');
    const aacModal = root.getElementById('aac-modal');
    const closeAacBtn = root.getElementById('close-aac-btn');

    fabTrigger.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });

    closePanelBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
    });

    openAacBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
      aacModal.classList.remove('hidden');
      this.loadAACData();
    });

    closeAacBtn.addEventListener('click', () => {
      aacModal.classList.add('hidden');
      stopSentencePlayback();
    });

    // Language Toggle Buttons
    root.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Preset Profiles
    root.querySelectorAll('.profile-card').forEach(card => {
      card.addEventListener('click', () => {
        const profileId = card.getAttribute('data-profile');
        applyProfile(profileId);
        this.syncA11yUIState();
      });
    });

    // Font Sizing (75% - 200%)
    root.getElementById('btn-font-dec')?.addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current - 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-reset')?.addEventListener('click', () => {
      setFontScale(0);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-inc')?.addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current + 1);
      this.syncA11yUIState();
    });

    root.querySelectorAll('.font-preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const scale = parseInt(chip.getAttribute('data-scale'), 10);
        setFontScale(scale);
        this.syncA11yUIState();
      });
    });

    // Typography Controls
    root.getElementById('btn-font-bold')?.addEventListener('click', () => {
      toggleFontBold();
      this.syncA11yUIState();
    });

    root.getElementById('btn-dyslexia')?.addEventListener('click', () => {
      toggleDyslexia();
      this.syncA11yUIState();
    });

    root.getElementById('btn-line-height')?.addEventListener('click', () => {
      const current = getLineHeight();
      const next = (current + 1) % 3;
      setLineHeight(next);
      this.syncA11yUIState();
    });

    root.getElementById('btn-letter-spacing')?.addEventListener('click', () => {
      const current = getLetterSpacing();
      const next = (current + 1) % 3;
      setLetterSpacing(next);
      this.syncA11yUIState();
    });

    root.getElementById('btn-highlight-links')?.addEventListener('click', () => {
      toggleHighlightLinks();
      this.syncA11yUIState();
    });

    root.getElementById('btn-highlight-titles')?.addEventListener('click', () => {
      toggleHighlightTitles();
      this.syncA11yUIState();
    });

    // Text Alignment
    root.querySelectorAll('.align-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const align = btn.getAttribute('data-align');
        const current = getTextAlign();
        setTextAlign(current === align ? 'default' : align);
        this.syncA11yUIState();
      });
    });

    // Contrast Controls
    const contrastModes = ['high', 'dark', 'light', 'mono', 'low-sat', 'high-sat', 'invert'];
    contrastModes.forEach(mode => {
      const btn = root.querySelector(`button[data-contrast="${mode}"]`);
      btn?.addEventListener('click', () => {
        const current = getContrast();
        setContrast(current === mode ? 'normal' : mode);
        this.syncA11yUIState();
      });
    });

    // Visual & Navigation Aids
    root.getElementById('btn-reading-guide')?.addEventListener('click', () => {
      toggleReadingGuide();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reading-mask')?.addEventListener('click', () => {
      toggleReadingMask();
      this.syncA11yUIState();
    });

    root.getElementById('btn-super-focus')?.addEventListener('click', () => {
      toggleSuperFocus();
      this.syncA11yUIState();
    });

    root.getElementById('btn-big-cursor')?.addEventListener('click', () => {
      toggleBigCursor();
      this.syncA11yUIState();
    });

    // Usability & Motion Utilities
    root.getElementById('btn-stop-anim')?.addEventListener('click', () => {
      toggleStopAnimations();
      this.syncA11yUIState();
    });

    root.getElementById('btn-hide-images')?.addEventListener('click', () => {
      toggleHideImages();
      this.syncA11yUIState();
    });

    root.getElementById('btn-image-tooltips')?.addEventListener('click', () => {
      toggleImageTooltips();
      this.syncA11yUIState();
    });

    // Audio & Screen Reader Controls (Blind Accessible)
    root.getElementById('btn-screen-reader')?.addEventListener('click', () => {
      toggleScreenReaderMode();
      this.syncA11yUIState();
    });

    root.getElementById('btn-page-reader')?.addEventListener('click', () => {
      togglePageReader();
      this.syncA11yUIState();
    });

    root.getElementById('btn-stop-speech')?.addEventListener('click', () => {
      stopPageReader();
      stopSpeech();
      this.syncA11yUIState();
    });

    root.querySelectorAll('.speech-rate-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const rate = parseFloat(chip.getAttribute('data-rate'));
        setSpeechRate(rate);
        this.syncA11yUIState();
        speakText(getLanguage() === 'en' ? `Speed set to ${rate}x` : `Kecepatan suara diatur ke ${rate}x`);
      });
    });

    // Reset All Settings
    root.getElementById('btn-reset-all')?.addEventListener('click', () => {
      resetAllSettings();
      this.syncA11yUIState();
    });

    // Sentence Actions
    root.getElementById('btn-aac-speak')?.addEventListener('click', () => {
      this.playCurrentSentence();
    });

    root.getElementById('btn-aac-backspace')?.addEventListener('click', () => {
      removeLastCard();
      this.renderSentenceStrip();
    });

    root.getElementById('btn-aac-clear')?.addEventListener('click', () => {
      clearSentence();
      this.renderSentenceStrip();
    });

    // Card Creator
    const creatorModal = root.getElementById('card-creator-modal');
    root.getElementById('btn-open-creator')?.addEventListener('click', () => {
      this.openCardCreator();
    });
    root.getElementById('close-creator-btn')?.addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-cancel-creator')?.addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-save-card')?.addEventListener('click', () => {
      this.saveCustomCard();
    });

    // Image Compression
    const imageInput = root.getElementById('input-card-image');
    imageInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const compressed = await this.resizeImage(file, 300, 300);
          this.customImageBase64 = compressed;
          root.getElementById('preview-image-box').innerHTML = `<img src="${compressed}" alt="Preview" style="width:100%;height:100%;object-fit:cover;" />`;
        } catch (err) {
          console.warn('[AksesKita] Image resize fallback:', err);
        }
      }
    });

    // Audio Recording
    const recordBtn = root.getElementById('btn-record-voice');
    const recordText = root.getElementById('btn-record-text');
    const recordStatus = root.getElementById('recorder-status');

    recordBtn?.addEventListener('click', async () => {
      if (!this.isRecording) {
        try {
          await startAudioRecording();
          this.isRecording = true;
          recordBtn.classList.add('recording');
          recordText.textContent = getLanguage() === 'en' ? 'Stop' : 'Berhenti';
          recordStatus.textContent = t('voiceRecording');
        } catch (err) {
          alert((t('micError')) + (err.message || 'Error'));
        }
      } else {
        try {
          const blob = await stopAudioRecording();
          this.isRecording = false;
          this.currentRecordedAudioBlob = blob;
          recordBtn.classList.remove('recording');
          recordText.textContent = t('recordAgainBtn');
          recordStatus.textContent = t('voiceRecorded');
        } catch (err) {
          console.error(err);
        }
      }
    });

    // Backup & Restore
    root.getElementById('btn-export-aac')?.addEventListener('click', async () => {
      try {
        const backupJson = await exportBackup();
        const blob = new Blob([backupJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `akseskita_aac_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (err) {
        alert(t('importFail') + err.message);
      }
    });

    const importInput = root.getElementById('import-file-input');
    root.getElementById('btn-import-aac')?.addEventListener('click', () => {
      importInput.click();
    });

    importInput?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        const text = await file.text();
        try {
          await importBackup(text);
          await this.loadAACData();
          alert(t('importSuccess'));
        } catch (err) {
          alert(t('importFail') + err.message);
        }
      }
    });
  }

  changeLanguage(newLang) {
    setLanguage(newLang);
    const root = this.shadowRoot;
    const isPanelOpen = !root.getElementById('a11y-panel').classList.contains('hidden');
    const isAacOpen = !root.getElementById('aac-modal').classList.contains('hidden');

    this.render();
    this.bindEvents();
    this.syncA11yUIState();
    this.renderCategoryTabs();
    this.renderCardGrid();
    this.renderSentenceStrip();

    if (isPanelOpen) {
      this.shadowRoot.getElementById('a11y-panel').classList.remove('hidden');
    }
    if (isAacOpen) {
      this.shadowRoot.getElementById('aac-modal').classList.remove('hidden');
    }
  }

  initShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Alt + A: Open/Close A11y Panel
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        const panel = this.shadowRoot.getElementById('a11y-panel');
        panel.classList.toggle('hidden');
      }
      // Alt + C: Open/Close AAC Communicator
      if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        aacModal.classList.toggle('hidden');
        if (!aacModal.classList.contains('hidden')) {
          this.loadAACData();
        } else {
          stopSentencePlayback();
        }
      }
      // Alt + R: Toggle Screen Reader Mode
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        toggleScreenReaderMode();
        this.syncA11yUIState();
      }
      // Alt + P: Toggle Continuous Page Reader
      if (e.altKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        togglePageReader();
        this.syncA11yUIState();
      }
      // Alt + S: Stop Speech immediately
      if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        stopPageReader();
        stopSpeech();
        this.syncA11yUIState();
      }
      // Escape: Close opened modal/panel
      if (e.key === 'Escape') {
        const panel = this.shadowRoot.getElementById('a11y-panel');
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        const creatorModal = this.shadowRoot.getElementById('card-creator-modal');
        if (creatorModal && !creatorModal.classList.contains('hidden')) {
          creatorModal.classList.add('hidden');
        } else if (aacModal && !aacModal.classList.contains('hidden')) {
          aacModal.classList.add('hidden');
          stopSentencePlayback();
        } else if (panel && !panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
        }
      }
    });
  }

  syncA11yUIState() {
    const root = this.shadowRoot;
    const isEn = getLanguage() === 'en';
    const activeProfile = getActiveProfile();
    const scale = getFontScale();
    const bold = isFontBold();
    const lh = getLineHeight();
    const ls = getLetterSpacing();
    const dyslexia = isDyslexiaEnabled();
    const links = isHighlightLinksEnabled();
    const titles = isHighlightTitlesEnabled();
    const align = getTextAlign();
    const contrast = getContrast();
    const guide = isReadingGuideEnabled();
    const mask = isReadingMaskEnabled();
    const focus = isSuperFocusEnabled();
    const bigCursor = isBigCursorEnabled();
    const stopAnim = isStopAnimationsEnabled();
    const hideImgs = isHideImagesEnabled();
    const tooltips = isImageTooltipsEnabled();
    const screenReader = isScreenReaderEnabled();
    const pageReaderPlaying = isPageReaderPlaying();
    const currentRate = getSpeechRate();

    // Profiles
    root.querySelectorAll('.profile-card').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-profile') === activeProfile);
    });

    // Font Sizing (75% - 200%)
    const indicator = root.getElementById('font-scale-indicator');
    if (indicator) {
      indicator.textContent = getFontScalePercentage(scale);
    }
    root.querySelectorAll('.font-preset-chip').forEach(chip => {
      const chipScale = parseInt(chip.getAttribute('data-scale'), 10);
      chip.classList.toggle('active', chipScale === scale);
    });

    // Typography
    root.getElementById('btn-font-bold')?.classList.toggle('active', bold);
    root.getElementById('btn-dyslexia')?.classList.toggle('active', dyslexia);
    root.getElementById('btn-line-height')?.classList.toggle('active', lh > 0);
    root.getElementById('btn-letter-spacing')?.classList.toggle('active', ls > 0);
    root.getElementById('btn-highlight-links')?.classList.toggle('active', links);
    root.getElementById('btn-highlight-titles')?.classList.toggle('active', titles);

    // Alignment
    root.querySelectorAll('.align-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-align') === align);
    });

    // Contrast
    root.querySelectorAll('button[data-contrast]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-contrast') === contrast);
    });

    // Visual & Usability
    root.getElementById('btn-reading-guide')?.classList.toggle('active', guide);
    root.getElementById('btn-reading-mask')?.classList.toggle('active', mask);
    root.getElementById('btn-super-focus')?.classList.toggle('active', focus);
    root.getElementById('btn-big-cursor')?.classList.toggle('active', bigCursor);
    root.getElementById('btn-stop-anim')?.classList.toggle('active', stopAnim);
    root.getElementById('btn-hide-images')?.classList.toggle('active', hideImgs);
    root.getElementById('btn-image-tooltips')?.classList.toggle('active', tooltips);

    // Audio & Screen Reader UI
    const screenReaderCard = root.getElementById('card-screen-reader-box');
    const screenReaderBtn = root.getElementById('btn-screen-reader');
    const screenReaderLabel = root.getElementById('label-screen-reader-toggle');
    if (screenReaderCard) {
      screenReaderCard.classList.toggle('active', screenReader);
    }
    if (screenReaderBtn) {
      screenReaderBtn.classList.toggle('active', screenReader);
    }
    if (screenReaderLabel) {
      screenReaderLabel.textContent = screenReader 
        ? (isEn ? 'Screen Reader Active (ON)' : 'Pembaca Layar Aktif (ON)')
        : (isEn ? 'Enable Screen Reader (OFF)' : 'Aktifkan Pembaca Layar (OFF)');
    }

    const pageReaderBtn = root.getElementById('btn-page-reader');
    const pageReaderLabel = root.getElementById('label-page-reader');
    if (pageReaderBtn) {
      pageReaderBtn.classList.toggle('active', pageReaderPlaying);
    }
    if (pageReaderLabel) {
      pageReaderLabel.textContent = pageReaderPlaying ? t('pageReaderPlaying') : t('pageReader');
    }

    root.querySelectorAll('.speech-rate-chip').forEach(chip => {
      const rate = parseFloat(chip.getAttribute('data-rate'));
      chip.classList.toggle('active', Math.abs(rate - currentRate) < 0.05);
    });
  }

  async loadAACData() {
    this.categories = await getAllCategories();
    this.cards = await getAllCards();
    this.renderCategoryTabs();
    this.renderCardGrid();
    this.renderSentenceStrip();
  }

  renderCategoryTabs() {
    const tabsContainer = this.shadowRoot.getElementById('category-tabs');
    if (!tabsContainer) return;
    const isEn = getLanguage() === 'en';

    let html = `
      <button class="cat-tab-btn ${this.activeCategoryId === 'all' ? 'active' : ''}" data-cat-id="all">
        <span>🌟</span>
        <span>${t('allCategory')}</span>
      </button>
    `;

    this.categories.forEach(cat => {
      const isActive = String(this.activeCategoryId) === String(cat.id);
      const catLabel = (isEn && cat.nameEn) ? cat.nameEn : cat.name;
      html += `
        <button class="cat-tab-btn ${isActive ? 'active' : ''}" data-cat-id="${cat.id}">
          <span>${cat.icon || '📁'}</span>
          <span>${catLabel}</span>
        </button>
      `;
    });

    tabsContainer.innerHTML = html;

    tabsContainer.querySelectorAll('.cat-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategoryId = btn.getAttribute('data-cat-id');
        this.renderCategoryTabs();
        this.renderCardGrid();
      });
    });
  }

  resizeImage(file, maxWidth = 300, maxHeight = 300) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  renderCardGrid() {
    const gridContainer = this.shadowRoot.getElementById('aac-cards-grid');
    if (!gridContainer) return;
    const isEn = getLanguage() === 'en';

    const filteredCards = this.activeCategoryId === 'all' 
      ? this.cards 
      : this.cards.filter(c => String(c.categoryId) === String(this.activeCategoryId));

    if (filteredCards.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b;">
          <p style="font-size: 16px; font-weight: 600;">${t('emptyCategory')}</p>
          <p style="font-size: 13px; margin-top: 6px;">${t('emptyCategoryHint')}</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filteredCards.map(card => {
      const isCustom = !card.isDefault;
      const displayLabel = (isEn && card.labelEn) ? card.labelEn : card.label;
      let iconHtml = '';
      if (card.image) {
        iconHtml = `<img src="${card.image}" alt="${displayLabel}" loading="lazy" />`;
      } else if (card.iconEmoji) {
        iconHtml = `<span>${card.iconEmoji}</span>`;
      } else {
        iconHtml = `<span>💬</span>`;
      }

      return `
        <div class="aac-card" tabindex="0" role="button" data-card-id="${card.id}" aria-label="${displayLabel}">
          ${isCustom ? `<span class="aac-card-badge-custom">${t('customBadge')}</span>` : ''}
          ${isCustom ? `<button class="aac-card-delete-btn" data-delete-id="${card.id}" aria-label="Delete ${displayLabel}" title="${t('backspaceBtn')}">&times;</button>` : ''}
          <div class="aac-card-icon-wrap" style="background: ${card.bgColor || '#f8fafc'}; border-color: ${card.borderColor || '#e2e8f0'};">
            ${iconHtml}
          </div>
          <span class="aac-card-label">${displayLabel}</span>
        </div>
      `;
    }).join('');

    const triggerCard = (cardEl) => {
      const cardId = cardEl.getAttribute('data-card-id');
      const card = this.cards.find(c => String(c.id) === String(cardId));
      if (card) {
        addCardToSentence(card);
        playSingleCard(card);
        this.renderSentenceStrip();
      }
    };

    gridContainer.querySelectorAll('.aac-card').forEach(cardEl => {
      cardEl.addEventListener('click', (e) => {
        if (e.target.closest('.aac-card-delete-btn')) return;
        triggerCard(cardEl);
      });

      cardEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerCard(cardEl);
        }
      });
    });

    gridContainer.querySelectorAll('.aac-card-delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const deleteId = btn.getAttribute('data-delete-id');
        if (confirm(t('deleteConfirm'))) {
          await deleteCard(deleteId);
          await this.loadAACData();
        }
      });
    });
  }

  renderSentenceStrip() {
    const container = this.shadowRoot.getElementById('sentence-container');
    if (!container) return;
    const isEn = getLanguage() === 'en';

    const sentence = getSentenceList();
    if (sentence.length === 0) {
      container.innerHTML = `
        <div class="sentence-empty-placeholder">
          <span>${t('sentencePlaceholder')}</span>
        </div>
      `;
      return;
    }

    container.innerHTML = sentence.map((item, index) => {
      let icon = item.iconEmoji || '💬';
      if (item.image) {
        icon = `<img src="${item.image}" style="width:20px;height:20px;border-radius:4px;object-fit:cover;" />`;
      }
      const displayLabel = (isEn && item.labelEn) ? item.labelEn : item.label;

      return `
        <div class="sentence-card" id="sentence-item-${index}" data-index="${index}">
          <span class="sentence-card-icon">${icon}</span>
          <span class="sentence-card-label">${displayLabel}</span>
          <button class="sentence-card-remove" data-remove-index="${index}" title="${t('backspaceBtn')}">&times;</button>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.sentence-card-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-remove-index'), 10);
        removeCardFromSentence(idx);
        this.renderSentenceStrip();
      });
    });
  }

  async playCurrentSentence() {
    const root = this.shadowRoot;
    const container = root.getElementById('sentence-container');
    container.classList.add('active-listening');

    await speakSentence((activeIndex) => {
      const cards = root.querySelectorAll('.sentence-card');
      cards.forEach((el, idx) => {
        if (idx === activeIndex) {
          el.classList.add('highlight-reading');
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          el.classList.remove('highlight-reading');
        }
      });
    });

    container.classList.remove('active-listening');
  }

  openCardCreator() {
    const root = this.shadowRoot;
    const modal = root.getElementById('card-creator-modal');
    const catSelect = root.getElementById('select-card-cat');
    const isEn = getLanguage() === 'en';

    catSelect.innerHTML = this.categories.map(c => `
      <option value="${c.id}">${(isEn && c.nameEn) ? c.nameEn : c.name}</option>
    `).join('');

    root.getElementById('input-card-label').value = '';
    root.getElementById('input-card-speech').value = '';
    root.getElementById('preview-image-box').innerHTML = '🖼️';
    root.getElementById('recorder-status').textContent = t('voiceStatusDefault');
    root.getElementById('btn-record-text').textContent = t('recordBtn');
    
    this.customImageBase64 = null;
    this.currentRecordedAudioBlob = null;
    this.isRecording = false;

    modal.classList.remove('hidden');
  }

  async saveCustomCard() {
    const root = this.shadowRoot;
    const label = root.getElementById('input-card-label').value.trim();
    const speechText = root.getElementById('input-card-speech').value.trim() || label;
    const categoryId = parseInt(root.getElementById('select-card-cat').value, 10);

    if (!label) {
      alert(t('fillRequired'));
      return;
    }

    const newCard = {
      categoryId,
      label,
      speechText,
      labelEn: label,
      speechTextEn: speechText,
      image: this.customImageBase64 || null,
      audioBlob: this.currentRecordedAudioBlob || null,
      iconEmoji: this.customImageBase64 ? null : '✨',
      bgColor: '#FEF3C7',
      borderColor: '#F59E0B',
      isDefault: false
    };

    await addCard(newCard);
    root.getElementById('card-creator-modal').classList.add('hidden');
    await this.loadAACData();
  }
}

// Define Custom Element
if (typeof customElements !== 'undefined' && !customElements.get('akses-kita')) {
  customElements.define('akses-kita', AksesKitaElement);
}

// Auto mount to DOM
if (typeof window !== 'undefined') {
  const mountAksesKita = () => {
    if (!document.querySelector('akses-kita')) {
      const widget = document.createElement('akses-kita');
      document.body.appendChild(widget);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAksesKita);
  } else {
    mountAksesKita();
  }
}

export default AksesKitaElement;
