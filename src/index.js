/**
 * AksesKita - All-in-One Assistive Web Suite Indonesia
 * Unified Web Accessibility Toolbar & Visual AAC Communicator
 * Zero Dependency Web Component (<akses-kita>)
 * Bilingual: Bahasa Indonesia & English
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
import { 
  setFontScale, 
  getFontScale, 
  toggleDyslexia, 
  isDyslexiaEnabled, 
  resetFont, 
  restoreFontPreferences 
} from './modules/a11y-font.js';
import { 
  setContrast, 
  getContrast, 
  toggleHighlightLinks, 
  isHighlightLinksEnabled, 
  toggleReadingGuide, 
  isReadingGuideEnabled, 
  resetContrast, 
  restoreContrastPreferences 
} from './modules/a11y-contrast.js';
import { 
  speakText, 
  stopSpeech, 
  initQuickTTS 
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
    
    // Restore user settings
    restoreFontPreferences();
    restoreContrastPreferences();
    initQuickTTS();
    this.syncA11yUIState();

    // Init DB & default cards
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
      <button id="fab-trigger" class="fab-trigger" aria-label="Buka Menu Aksesibilitas dan Papan Komunikasi AksesKita" title="Aksesibilitas (Alt + A)">
        <span class="fab-icon">♿</span>
        <span>AksesKita</span>
      </button>

      <!-- Toolbar A11y Panel -->
      <div id="a11y-panel" class="panel-container hidden" role="dialog" aria-modal="false" aria-label="Menu Aksesibilitas Web">
        <div class="panel-header">
          <div class="panel-title-wrapper">
            <span style="font-size: 20px;">♿</span>
            <div>
              <h3>AksesKita</h3>
            </div>
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
          <!-- CTA AAC Communicator -->
          <div class="panel-section">
            <span class="section-label">🗣️ ${lang === 'en' ? 'Assistive Communication' : 'Komunikasi Asistif'}</span>
            <button id="open-aac-btn" class="btn-aac-launch" title="Shortcut: Alt + C">
              <span style="font-size: 22px;">🗣️</span>
              <span>${t('openAacBtn')}</span>
            </button>
          </div>

          <!-- Text Resizing & Font -->
          <div class="panel-section">
            <span class="section-label">🔤 ${t('textSettings')}</span>
            <div class="button-grid cols-4">
              <button id="btn-font-dec" class="tool-btn" aria-label="${t('fontSmall')}">
                <span class="btn-icon">A-</span>
                <span>${t('fontSmall')}</span>
              </button>
              <button id="btn-font-reset" class="tool-btn" aria-label="${t('fontNormal')}">
                <span class="btn-icon">A</span>
                <span>${t('fontNormal')}</span>
              </button>
              <button id="btn-font-inc" class="tool-btn" aria-label="${t('fontLarge')}">
                <span class="btn-icon">A+</span>
                <span>${t('fontLarge')}</span>
              </button>
              <button id="btn-dyslexia" class="tool-btn" aria-label="${t('fontDyslexia')}">
                <span class="btn-icon">📖</span>
                <span>${t('fontDyslexia')}</span>
              </button>
            </div>
          </div>

          <!-- Color Schemes & Filters -->
          <div class="panel-section">
            <span class="section-label">🎨 ${t('contrastSettings')}</span>
            <div class="button-grid cols-3">
              <button id="btn-contrast-high" class="tool-btn" data-contrast="high">
                <span class="btn-icon">🌓</span>
                <span>${t('contrastHigh')}</span>
              </button>
              <button id="btn-contrast-mono" class="tool-btn" data-contrast="mono">
                <span class="btn-icon">⬛</span>
                <span>${t('contrastMono')}</span>
              </button>
              <button id="btn-contrast-invert" class="tool-btn" data-contrast="invert">
                <span class="btn-icon">🔄</span>
                <span>${t('contrastInvert')}</span>
              </button>
            </div>
          </div>

          <!-- Visual Aids -->
          <div class="panel-section">
            <span class="section-label">🔍 ${t('visualAids')}</span>
            <div class="button-grid">
              <button id="btn-highlight-links" class="tool-btn">
                <span class="btn-icon">🔗</span>
                <span>${t('highlightLinks')}</span>
              </button>
              <button id="btn-reading-guide" class="tool-btn">
                <span class="btn-icon">📏</span>
                <span>${t('readingGuide')}</span>
              </button>
            </div>
          </div>
        </div>

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

    // Language Toggle Buttons (Panel and AAC header)
    root.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    // Font actions
    root.getElementById('btn-font-inc').addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current + 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-dec').addEventListener('click', () => {
      const current = getFontScale();
      setFontScale(current - 1);
      this.syncA11yUIState();
    });

    root.getElementById('btn-font-reset').addEventListener('click', () => {
      setFontScale(0);
      this.syncA11yUIState();
    });

    root.getElementById('btn-dyslexia').addEventListener('click', () => {
      toggleDyslexia();
      this.syncA11yUIState();
    });

    // Contrast actions
    root.getElementById('btn-contrast-high').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'high' ? 'normal' : 'high');
      this.syncA11yUIState();
    });

    root.getElementById('btn-contrast-mono').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'mono' ? 'normal' : 'mono');
      this.syncA11yUIState();
    });

    root.getElementById('btn-contrast-invert').addEventListener('click', () => {
      const current = getContrast();
      setContrast(current === 'invert' ? 'normal' : 'invert');
      this.syncA11yUIState();
    });

    // Visual aids
    root.getElementById('btn-highlight-links').addEventListener('click', () => {
      toggleHighlightLinks();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reading-guide').addEventListener('click', () => {
      toggleReadingGuide();
      this.syncA11yUIState();
    });

    root.getElementById('btn-reset-all').addEventListener('click', () => {
      resetFont();
      resetContrast();
      this.syncA11yUIState();
    });

    // Sentence Actions
    root.getElementById('btn-aac-speak').addEventListener('click', () => {
      this.playCurrentSentence();
    });

    root.getElementById('btn-aac-backspace').addEventListener('click', () => {
      removeLastCard();
      this.renderSentenceStrip();
    });

    root.getElementById('btn-aac-clear').addEventListener('click', () => {
      clearSentence();
      this.renderSentenceStrip();
    });

    // Card Creator
    const creatorModal = root.getElementById('card-creator-modal');
    root.getElementById('btn-open-creator').addEventListener('click', () => {
      this.openCardCreator();
    });
    root.getElementById('close-creator-btn').addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-cancel-creator').addEventListener('click', () => {
      creatorModal.classList.add('hidden');
    });
    root.getElementById('btn-save-card').addEventListener('click', () => {
      this.saveCustomCard();
    });

    // Optimized Image File Compression
    const imageInput = root.getElementById('input-card-image');
    imageInput.addEventListener('change', async (e) => {
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

    // Audio recording button
    const recordBtn = root.getElementById('btn-record-voice');
    const recordText = root.getElementById('btn-record-text');
    const recordStatus = root.getElementById('recorder-status');

    recordBtn.addEventListener('click', async () => {
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
    root.getElementById('btn-export-aac').addEventListener('click', async () => {
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
    root.getElementById('btn-import-aac').addEventListener('click', () => {
      importInput.click();
    });

    importInput.addEventListener('change', async (e) => {
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
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        const panel = this.shadowRoot.getElementById('a11y-panel');
        panel.classList.toggle('hidden');
      }
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
      if (e.key === 'Escape') {
        const panel = this.shadowRoot.getElementById('a11y-panel');
        const aacModal = this.shadowRoot.getElementById('aac-modal');
        const creatorModal = this.shadowRoot.getElementById('card-creator-modal');
        if (!creatorModal.classList.contains('hidden')) {
          creatorModal.classList.add('hidden');
        } else if (!aacModal.classList.contains('hidden')) {
          aacModal.classList.add('hidden');
          stopSentencePlayback();
        } else if (!panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
        }
      }
    });
  }

  syncA11yUIState() {
    const root = this.shadowRoot;
    const currentScale = getFontScale();
    const isDyslexia = isDyslexiaEnabled();
    const currentContrast = getContrast();
    const isLinks = isHighlightLinksEnabled();
    const isGuide = isReadingGuideEnabled();

    root.getElementById('btn-dyslexia')?.classList.toggle('active', isDyslexia);
    root.getElementById('btn-font-inc')?.classList.toggle('active', currentScale > 0);
    root.getElementById('btn-font-reset')?.classList.toggle('active', currentScale === 0);

    root.getElementById('btn-contrast-high')?.classList.toggle('active', currentContrast === 'high');
    root.getElementById('btn-contrast-mono')?.classList.toggle('active', currentContrast === 'mono');
    root.getElementById('btn-contrast-invert')?.classList.toggle('active', currentContrast === 'invert');

    root.getElementById('btn-highlight-links')?.classList.toggle('active', isLinks);
    root.getElementById('btn-reading-guide')?.classList.toggle('active', isGuide);
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

    // Bind card clicks & keyboard Enter/Space
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

    // Bind delete clicks
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

    // Remove single card button listener
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

    // Populate categories
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
