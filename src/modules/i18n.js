/**
 * AksesKita - Internationalization (i18n) Module
 * Seamless bilingual support: Bahasa Indonesia (id) & English (en)
 */

const STORAGE_KEY_LANG = 'akseskita_lang';

export const translations = {
  id: {
    // Toolbar A11y Header & Tabs
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y Pro',
    openAacBtn: 'Buka Papan Bicara (AAC)',
    tabProfiles: 'Profil Cepat',
    tabContent: 'Tipografi',
    tabColor: 'Warna',
    tabVisual: 'Alat Visual',
    tabAudio: 'Suara (TTS)',
    shortcutHint: 'Pintasan',
    resetAll: 'Atur Ulang Semua',
    close: 'Tutup',

    // Preset Profiles
    profilesSection: '🌟 Profil Aksesibilitas 1-Klik',
    profileSeizureTitle: 'Aman Kejang',
    profileSeizureDesc: 'Hentikan animasi & kurangi saturasi warna',
    profileVisionTitle: 'Gangguan Penglihatan',
    profileVisionDesc: 'Kontras tinggi, perbesar teks, & sorot tautan',
    profileAdhdTitle: 'Ramah ADHD',
    profileAdhdDesc: 'Fokus intensif, tirai baca, kurangi gangguan',
    profileCognitiveTitle: 'Kognitif & Belajar',
    profileCognitiveDesc: 'Font disleksia, spasi luas, & garis pandu',
    profileMotorTitle: 'Gangguan Motorik',
    profileMotorDesc: 'Kursor besar & navigasi fokus ramah keyboard',
    profileBlindTitle: 'Tunanetra Total',
    profileBlindDesc: 'Pengoptimalan screen reader & navigasi suara',

    // Content & Typography Adjustments
    contentSection: '🔤 Konten & Tipografi',
    fontSize: 'Ukuran Teks',
    fontSmall: 'Kecil',
    fontNormal: 'Normal',
    fontLarge: 'Besar',
    fontXLarge: 'Sangat Besar',
    fontBolder: 'Tebalkan Teks',
    lineHeight: 'Spasi Baris',
    lineHeightNormal: 'Normal',
    lineHeightWide: 'Lebar',
    lineHeightWider: 'Sangat Lebar',
    letterSpacing: 'Spasi Huruf',
    letterSpacingNormal: 'Normal',
    letterSpacingWide: 'Lebar',
    letterSpacingWider: 'Sangat Lebar',
    fontDyslexia: 'Font Disleksia',
    highlightLinks: 'Sorot Tautan',
    highlightTitles: 'Sorot Judul',
    textAlign: 'Perataan Teks',
    alignLeft: 'Kiri',
    alignCenter: 'Tengah',
    alignRight: 'Kanan',
    alignJustify: 'Rata Kanan Kiri',

    // Color & Contrast
    colorSection: '🎨 Warna & Kontras',
    contrastHigh: 'Kontras Tinggi',
    contrastDark: 'Kontras Gelap',
    contrastLight: 'Kontras Terang',
    contrastMono: 'Monokrom',
    contrastLowSat: 'Saturasi Rendah',
    contrastHighSat: 'Saturasi Tinggi',
    contrastInvert: 'Balik Warna',

    // Visual & Navigation Aids
    visualSection: '🔍 Alat Bantu Visual & Navigasi',
    readingGuide: 'Garis Pandu Baca',
    readingMask: 'Tirai Baca (Mask)',
    superFocus: 'Super Fokus',
    bigCursor: 'Kursor Besar',

    // Usability & Motion Utilities
    usabilitySection: '🛠️ Utilitas & Kontrol Gerak',
    stopAnimations: 'Hentikan Animasi',
    hideImages: 'Sembunyikan Gambar',
    imageTooltips: 'Tooltip Gambar',

    // Audio & Screen Reader for Blind Users
    audioSection: '🔊 Pembaca Layar & Suara (TTS)',
    screenReaderMode: 'Mode Pembaca Layar (Hover/Tab)',
    screenReaderDesc: 'Baca elemen bersuara saat kursor hover atau tekan tombol Tab (Alt + R)',
    pageReader: 'Baca Seluruh Halaman',
    pageReaderPlaying: 'Membaca Halaman...',
    stopPageReader: 'Hentikan Baca (Alt + S)',
    speechRate: 'Kecepatan Suara',
    rateSlow: '0.75x Lambat',
    rateNormal: '1.0x Normal',
    rateFast: '1.25x Cepat',
    rateVeryFast: '1.5x Sangat Cepat',

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
    selectionTtsTitle: 'Seleksi Teks Cepat (Quick TTS)',
    selectionTtsDesc: 'Blok / sorot kalimat apa saja pada halaman web, lalu klik tombol melayang "Dengarkan" yang muncul di atas teks pilihan.',
  },
  en: {
    // Toolbar A11y Header & Tabs
    toolbarTitle: 'AksesKita',
    a11yBadge: 'A11y Pro',
    openAacBtn: 'Open AAC Communicator',
    tabProfiles: 'Profiles',
    tabContent: 'Content',
    tabColor: 'Color',
    tabVisual: 'Visual Aids',
    tabAudio: 'Audio & TTS',
    shortcutHint: 'Shortcuts',
    resetAll: 'Reset All',
    close: 'Close',

    // Preset Profiles
    profilesSection: '🌟 1-Click Accessibility Profiles',
    profileSeizureTitle: 'Seizure Safe Profile',
    profileSeizureDesc: 'Stops animations and reduces color saturation',
    profileVisionTitle: 'Vision Impaired Profile',
    profileVisionDesc: 'High contrast, larger font, & highlighted links',
    profileAdhdTitle: 'ADHD Friendly Profile',
    profileAdhdDesc: 'Reading mask, super focus, & lower distractions',
    profileCognitiveTitle: 'Cognitive & Learning',
    profileCognitiveDesc: 'Dyslexia font, wide spacing, & reading guide',
    profileMotorTitle: 'Motor Impaired Profile',
    profileMotorDesc: 'Big cursor & keyboard-friendly super focus',
    profileBlindTitle: 'Blind Profile',
    profileBlindDesc: 'Screen reader optimization & voice guidance',

    // Content & Typography Adjustments
    contentSection: '🔤 Content & Typography',
    fontSize: 'Font Size',
    fontSmall: 'Small',
    fontNormal: 'Normal',
    fontLarge: 'Large',
    fontXLarge: 'Extra Large',
    fontBolder: 'Bolder Text',
    lineHeight: 'Line Height',
    lineHeightNormal: 'Normal',
    lineHeightWide: 'Wide',
    lineHeightWider: 'Extra Wide',
    letterSpacing: 'Letter Spacing',
    letterSpacingNormal: 'Normal',
    letterSpacingWide: 'Wide',
    letterSpacingWider: 'Extra Wide',
    fontDyslexia: 'Dyslexia Font',
    highlightLinks: 'Highlight Links',
    highlightTitles: 'Highlight Titles',
    textAlign: 'Text Alignment',
    alignLeft: 'Left',
    alignCenter: 'Center',
    alignRight: 'Right',
    alignJustify: 'Justify',

    // Color & Contrast
    colorSection: '🎨 Color & Contrast',
    contrastHigh: 'High Contrast',
    contrastDark: 'Dark Contrast',
    contrastLight: 'Light Contrast',
    contrastMono: 'Monochrome',
    contrastLowSat: 'Low Saturation',
    contrastHighSat: 'High Saturation',
    contrastInvert: 'Invert Colors',

    // Visual & Navigation Aids
    visualSection: '🔍 Visual & Navigation Aids',
    readingGuide: 'Reading Guide',
    readingMask: 'Reading Mask',
    superFocus: 'Super Focus',
    bigCursor: 'Big Cursor',

    // Usability & Motion Utilities
    usabilitySection: '🛠️ Usability & Motion Control',
    stopAnimations: 'Stop Animations',
    hideImages: 'Hide Images',
    imageTooltips: 'Image Tooltips',

    // Audio & Screen Reader for Blind Users
    audioSection: '🔊 Screen Reader & Audio (TTS)',
    screenReaderMode: 'Screen Reader Mode (Hover/Tab)',
    screenReaderDesc: 'Read elements aloud when hovering or pressing Tab (Alt + R)',
    pageReader: 'Read Entire Page',
    pageReaderPlaying: 'Reading Page...',
    stopPageReader: 'Stop Reading (Alt + S)',
    speechRate: 'Speech Speed Rate',
    rateSlow: '0.75x Slow',
    rateNormal: '1.0x Normal',
    rateFast: '1.25x Fast',
    rateVeryFast: '1.5x Very Fast',

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
    selectionTtsTitle: 'Selection Quick TTS',
    selectionTtsDesc: 'Highlight or select any text on the webpage, then click the floating "Listen" button that appears directly above your selection.',
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
