/**
 * AksesKita - Internationalization (i18n) Module
 * Seamless bilingual support: Bahasa Indonesia (id) & English (en)
 */

const STORAGE_KEY_LANG = 'akseskita_lang';

export const translations = {
  id: {
    // Toolbar A11y
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y',
    openAacBtn: 'Buka Papan Bicara (AAC)',
    textSettings: 'Ukuran & Bentuk Teks',
    fontSmall: 'Kecil',
    fontNormal: 'Normal',
    fontLarge: 'Besar',
    fontDyslexia: 'Disleksia',
    contrastSettings: 'Kontras & Warna',
    contrastHigh: 'Kontras Tinggi',
    contrastMono: 'Monokrom',
    contrastInvert: 'Balik Warna',
    visualAids: 'Alat Bantu Visual',
    highlightLinks: 'Sorot Tautan',
    readingGuide: 'Garis Pandu',
    resetAll: 'Atur Ulang Semua',
    shortcutHint: 'Pintasan',
    close: 'Tutup',

    // AAC Modal
    aacTitle: 'AksesKita: Papan Bicara',
    aacSubtitle: 'Papan Komunikasi Visual Interaktif (AAC)',
    exportBtn: 'Ekspor',
    importBtn: 'Impor',
    sentencePlaceholder: 'Klik kartu simbol di bawah untuk menyusun kalimat...',
    speakBtn: 'Bicara',
    backspaceBtn: 'Hapus',
    clearBtn: 'Bersih',
    allCategory: 'Semua',
    addCardBtn: 'Tambah Kartu',
    newCardTitle: 'Buat Kartu Bicara Baru',
    cardLabel: 'Label Teks Kartu *',
    cardLabelPlaceholder: 'Contoh: Mau Es Krim',
    cardSpeech: 'Teks yang Diucapkan *',
    cardSpeechPlaceholder: 'Contoh: Saya ingin makan es krim rasa cokelat',
    cardCategory: 'Pilih Kategori *',
    cardImage: 'Ikon / Gambar Kartu',
    cardVoice: 'Rekam Suara Asli (Opsional)',
    voiceStatusDefault: 'Gunakan suara asli atau native TTS',
    voiceRecording: '🔴 Merekam suara...',
    voiceRecorded: '✅ Suara tersimpan!',
    recordBtn: 'Rekam',
    recordAgainBtn: 'Rekam Ulang',
    saveBtn: 'Simpan Kartu',
    cancelBtn: 'Batal',
    customBadge: 'Kustom',
    emptyCategory: 'Belum ada kartu di kategori ini.',
    emptyCategoryHint: 'Klik tombol "+ Tambah Kartu" di pojok kanan bawah untuk membuat kartu baru.',
    deleteConfirm: 'Apakah Anda yakin ingin menghapus kartu ini?',
    importSuccess: 'Berhasil mengimpor data AAC!',
    importFail: 'Gagal mengimpor file: ',
    fillRequired: 'Mohon isi label teks kartu.',
    micError: 'Gagal mengakses mikrofon: ',

    // Quick TTS
    ttsListen: 'Dengarkan',
  },
  en: {
    // Toolbar A11y
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y',
    openAacBtn: 'Open AAC Communicator',
    textSettings: 'Text Appearance',
    fontSmall: 'Small',
    fontNormal: 'Normal',
    fontLarge: 'Large',
    fontDyslexia: 'Dyslexia',
    contrastSettings: 'Contrast & Filters',
    contrastHigh: 'High Contrast',
    contrastMono: 'Monochrome',
    contrastInvert: 'Invert Colors',
    visualAids: 'Visual Aids',
    highlightLinks: 'Highlight Links',
    readingGuide: 'Reading Guide',
    resetAll: 'Reset All',
    shortcutHint: 'Shortcuts',
    close: 'Close',

    // AAC Modal
    aacTitle: 'AksesKita: AAC Communicator',
    aacSubtitle: 'Interactive Visual Communication Board (AAC)',
    exportBtn: 'Export',
    importBtn: 'Import',
    sentencePlaceholder: 'Click symbol cards below to build a sentence...',
    speakBtn: 'Speak',
    backspaceBtn: 'Delete',
    clearBtn: 'Clear',
    allCategory: 'All',
    addCardBtn: 'Add Card',
    newCardTitle: 'Create New AAC Card',
    cardLabel: 'Card Label *',
    cardLabelPlaceholder: 'e.g. Want Ice Cream',
    cardSpeech: 'Spoken Text *',
    cardSpeechPlaceholder: 'e.g. I would like chocolate ice cream',
    cardCategory: 'Select Category *',
    cardImage: 'Card Icon / Photo',
    cardVoice: 'Record Real Voice (Optional)',
    voiceStatusDefault: 'Use recorded voice or native TTS',
    voiceRecording: '🔴 Recording voice...',
    voiceRecorded: '✅ Voice saved!',
    recordBtn: 'Record',
    recordAgainBtn: 'Re-record',
    saveBtn: 'Save Card',
    cancelBtn: 'Cancel',
    customBadge: 'Custom',
    emptyCategory: 'No cards in this category yet.',
    emptyCategoryHint: 'Click the "+ Add Card" button in the bottom right corner to create one.',
    deleteConfirm: 'Are you sure you want to delete this card?',
    importSuccess: 'AAC data successfully imported!',
    importFail: 'Failed to import file: ',
    fillRequired: 'Please fill in the card label.',
    micError: 'Failed to access microphone: ',

    // Quick TTS
    ttsListen: 'Listen',
  }
};

let currentLang = 'id';

export function getLanguage() {
  if (typeof localStorage !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_LANG);
      if (stored === 'en' || stored === 'id') {
        currentLang = stored;
      }
    } catch (e) {}
  }
  return currentLang;
}

export function setLanguage(lang) {
  currentLang = (lang === 'en') ? 'en' : 'id';
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, currentLang);
    } catch (e) {}
  }
  return currentLang;
}

export function t(key) {
  const dict = translations[getLanguage()] || translations.id;
  return dict[key] || translations.id[key] || key;
}
