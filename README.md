# ♿ AksesKita

[![npm version](https://img.shields.io/npm/v/akseskita.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/akseskita)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-%3C%2015KB%20gzipped-success.svg?style=flat-square)](https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> **Bilingual (ID/EN) All-in-One Web Accessibility Toolbar & Visual AAC Communicator in a Lightweight (<15KB) Zero-Dependency Web Component.**
> 
> *Toolbar Aksesibilitas Web & Papan Komunikasi Visual (AAC) Dwibahasa dalam Satu Skrip Ringan Tanpa Dependensi.*

---

**Pilih Bahasa / Choose Language:**  
[🇮🇩 **Bahasa Indonesia**](#-bahasa-indonesia) &bull; [🇬🇧 **English**](#-english)

---

<a id="bahasa-indonesia"></a>
## 🇮🇩 Bahasa Indonesia

**AksesKita** adalah Web Component sumber terbuka (*open-source*) yang menggabungkan fitur **Toolbar Aksesibilitas Web (A11y)** dan **Papan Komunikasi Visual (AAC Communicator)** interaktif ke dalam satu skrip JavaScript ringan (< 15KB gzipped) tanpa dependensi eksternal.

Misi kami adalah menghadirkan kesetaraan akses informasi web dan kemandirian komunikasi berbantuan bagi penyandang autisme, disabilitas wicara, lansia, dan penderita afasia di seluruh dunia.

### ✨ Fitur Unggulan

#### 1. 🌐 Dukungan Bilingual Penuh (Bahasa Indonesia & English)
* **Peralihan Cepat (Toggle ID / EN):** Tombol switcher bahasa langsung di panel aksesibilitas dan modal AAC.
* **Terjemahan UI & Simbol Otomatis:** Seluruh label antarmuka, tombol, kategori, dan kartu simbol AAC langsung diterjemahkan secara dinamis.
* **Sintesis Suara Dwibahasa (Bilingual Speech Synthesis):** Suara TTS otomatis menyesuaikan aksen lokal Indonesia (`id-ID`) atau Inggris (`en-US`/`en-GB`) sesuai bahasa aktif.
* **Penyimpanan Preferensi:** Bahasa pilihan pengguna tersimpan di `localStorage` secara otomatis.

#### 2. 🔤 Toolbar Aksesibilitas Web (A11y Tools)
* **Ukuran Font Dinamis:** 4 tingkat pembesaran (100%, +15%, +30%, +50%) via manipulasi variabel CSS yang responsif.
* **Mode Ramah Disleksia:** Toggle font khusus (*OpenDyslexic* mode) untuk meningkatkan keterbacaan.
* **Skema Kontras & Filter Visual:**
  * **Kontras Tinggi:** Latar gelap pekat (`#0B0F19`) dengan teks kuning terang (`#FFFF00`) dan tautan cyan (`#38BDF8`).
  * **Monokrom:** Filter grayscale 100% menggunakan non-breaking backdrop overlay.
  * **Balik Warna (Invert):** Pembalikan warna cerdas yang melindungi elemen media (gambar, video, canvas).
  * **Sorot Tautan:** Penandaan visual mencolok pada tautan dan navigasi.
  * **Garis Pandu Baca (Reading Guide):** Penggaris baca interaktif horizontal (60 FPS `requestAnimationFrame`).
* **Quick TTS / Screen Reader Seleksi Teks:** Cukup seleksi teks apa pun di website, tombol mengambang **"🔊 Dengarkan" / "🔊 Listen"** akan muncul otomatis dan membaca teks dengan pelafalan yang sesuai.

#### 3. 🗣️ Papan Komunikasi Visual (AAC Communicator Modal)
* **Pita Kalimat (Sentence Strip):**
  * Susun urutan kartu simbol hanya dengan mengklik kartu.
  * Tombol **"🔊 Bicara / Speak"**: Membacakan kalimat satu per satu dengan efek visual highlight yang aktif mengikuti kata yang sedang dibunyikan.
  * Tombol **"⌫ Hapus / Delete"** (hapus kartu terakhir) & **"🗑️ Bersih / Clear"** (kosongkan pita).
* **Kategori & Simbol Bawaan Bilingual (40+ Kartu):**
  * **Kebutuhan / Needs (🍽️):** Mau Makan (Want Food), Mau Minum (Want Drink), Ke Toilet (Go to Restroom), Tolong (Help), Istirahat (Rest), Sakit (In Pain), Tidur (Sleep), Minum Obat (Take Medicine), Cuci Tangan (Wash Hands), Ganti Baju (Change Clothes).
  * **Respon / Responses (💬):** Ya (Yes), Tidak (No), Mau (Want), Tidak Mau (Don't Want), Terima Kasih (Thank You), Permisi (Excuse Me), Maaf (Sorry), Tolong Ulangi (Please Repeat), Mengerti (I Understand), Tidak Tahu (I Don't Know).
  * **Perasaan / Feelings (😊):** Senang (Happy), Sedih (Sad), Marah (Angry), Takut (Scared), Bingung (Confused), Lelah (Tired), Kaget (Surprised), Cemas (Anxious), Bangga (Proud).
  * **Aktivitas & Orang / Activities & People (👥):** Saya (I / Me), Kamu (You), Belajar (Study), Bermain (Play), Jalan-jalan (Go for a Walk), Pulang (Go Home), Ibu (Mother), Ayah (Father), Guru (Teacher), Teman (Friend), Dokter (Doctor).
* **Editor Kartu Kustom (CRUD Lokal Offline):**
  * Tambah kartu baru dengan upload gambar/foto kamera dari perangkat (dilengkapi kompresi gambar otomatis via Canvas).
  * Rekam suara asli via mic menggunakan native `MediaRecorder` API.
  * Data disimpan secara lokal dan aman di `IndexedDB` (`AksesKitaDB`).
* **Backup & Restore:** Ekspor dan impor seluruh konfigurasi kartu dalam format `.json`.

---

### 🚀 Cara Pemasangan Cepat

#### 1. Menggunakan Script Tag (CDN jsDelivr)
Letakkan satu baris tag script berikut sebelum tag penutup `</body>` atau di dalam `<head>` website Anda:

```html
<!-- CDN jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js" defer></script>
```

Widget `<akses-kita>` akan otomatis terpasang dan menampilkan tombol pemicu mengambang di pojok kanan bawah layar.

#### 2. Menggunakan npm / Bundler Modern (Vite, Webpack, Next.js)
```bash
npm install akseskita
```

Di file entri JavaScript / TypeScript Anda:
```javascript
import 'akseskita';
```

---

### ⌨️ Pintasan Keyboard

| Pintasan | Fungsi |
|---|---|
| <kbd>Alt</kbd> + <kbd>A</kbd> | Buka / Tutup Panel Aksesibilitas (Toolbar A11y) |
| <kbd>Alt</kbd> + <kbd>C</kbd> | Buka / Tutup Papan Komunikasi Visual (AAC Modal) |
| <kbd>Escape</kbd> | Menutup panel atau modal yang sedang aktif |
| <kbd>Tab</kbd> / <kbd>Enter</kbd> | Navigasi dan aktivasi kartu AAC via keyboard |

---

### 🛠️ Struktur Direktori Proyek

```
akseskita/
├── CONTRIBUTING.md              # Panduan kontribusi untuk developer
├── index.html                   # Halaman demo interaktif portal inklusi
├── dist/
│   ├── akseskita.js             # Bundle pengembangan (unminified)
│   ├── akseskita.min.js         # Bundle produksi (< 15KB gzipped)
│   └── akseskita.esm.js         # Bundle ES Module
├── src/
│   ├── db/
│   │   ├── default-cards.js     # Data bawaan kartu AAC Bilingual (ID & EN)
│   │   └── idb.js               # Wrapper native IndexedDB (AksesKitaDB)
│   ├── modules/
│   │   ├── a11y-contrast.js     # Filter warna & kontras tinggi
│   │   ├── a11y-font.js         # Pengatur skala font & font disleksia
│   │   ├── a11y-speech.js       # TTS reader dwibahasa & popover seleksi
│   │   ├── aac-engine.js        # Engine pita kalimat & sequential highlight
│   │   ├── audio-recorder.js    # Perekam suara mic lokal (MediaRecorder)
│   │   └── i18n.js              # Modul terjemahan dwibahasa (ID & EN)
│   ├── styles/
│   │   ├── host-inject.css.js   # CSS yang disuntikkan ke root web induk
│   │   └── widget.css.js        # CSS terisolasi Shadow DOM
│   └── index.js                 # Entry point Web Component <akses-kita>
├── rollup.config.mjs            # Konfigurasi bundler Rollup
├── package.json
└── README.md
```

---

<a id="english"></a>
## 🇬🇧 English

**AksesKita** is an open-source, zero-dependency Web Component that combines a **Web Accessibility Toolbar (A11y)** and an interactive **Visual AAC Communicator Board** into a single lightweight script (< 15KB gzipped).

Our mission is to foster digital inclusion and empower individuals with non-verbal autism, speech impairments, aphasia, cognitive disabilities, and elderly users with assistive web browsing and communication tools.

### ✨ Key Features

#### 1. 🌐 Full Bilingual Support (Indonesian & English)
* **Instant Toggle (ID / EN):** One-click language switcher pill right inside the A11y Panel and AAC Modal headers.
* **Automatic UI & Symbol Translations:** All labels, buttons, categories, and 40+ built-in AAC cards instantly adapt to the active language.
* **Bilingual Speech Synthesis (TTS):** Automatic voice selection matching the locale (`en-US`/`en-GB` or `id-ID`).
* **Persistent Preferences:** User language choice is automatically saved in `localStorage`.

#### 2. 🔤 Web Accessibility Toolbar (A11y Tools)
* **Dynamic Font Resizing:** 4 scaling steps (100%, +15%, +30%, +50%) through responsive CSS variable manipulation.
* **Dyslexia-Friendly Mode:** Toggle OpenDyslexic-style typography to enhance readability.
* **Contrast Schemes & Visual Filters:**
  * **High Contrast:** Deep dark background (`#0B0F19`) with high-visibility yellow text (`#FFFF00`) and cyan links (`#38BDF8`).
  * **Monochrome:** 100% grayscale filter utilizing a non-breaking backdrop overlay.
  * **Invert Colors:** Smart color inversion protecting media elements (images, videos, canvases).
  * **Highlight Links:** Distinct visual badges for links and navigation items.
  * **Reading Guide:** Horizontal interactive reading ruler running at smooth 60 FPS (`requestAnimationFrame`).
* **Quick TTS / Selection Screen Reader:** Simply select any text on the webpage to trigger the floating **"🔊 Listen" / "🔊 Dengarkan"** button.

#### 3. 🗣️ Visual AAC Communicator Board
* **Sentence Strip Builder:**
  * Build phrases by clicking symbol cards.
  * **"🔊 Speak / Bicara" Button:** Sequential playback with real-time highlighting on each spoken card (karaoke effect).
  * **"⌫ Delete" & "🗑️ Clear" Buttons:** Convenient sentence editing controls.
* **40+ Built-in Bilingual Symbol Cards & Categories:**
  * **Needs (🍽️):** Want Food, Want Drink, Go to Restroom, Help, Rest, In Pain, Sleep, Take Medicine, Wash Hands, Change Clothes.
  * **Responses (💬):** Yes, No, Want, Don't Want, Thank You, Excuse Me, Sorry, Please Repeat, I Understand, I Don't Know.
  * **Feelings (😊):** Happy, Sad, Angry, Scared, Confused, Tired, Surprised, Anxious, Proud.
  * **Activities & People (👥):** I / Me, You, Study, Play, Go for a Walk, Go Home, Mother, Father, Teacher, Friend, Doctor.
* **Custom Card Creator (Offline Local CRUD):**
  * Add custom cards with device photo upload / camera capture (with client-side Canvas image optimization).
  * Record real human voice via native `MediaRecorder` API.
  * Secure local persistence in client-side `IndexedDB` (`AksesKitaDB`).
* **Backup & Restore:** Full configuration export and import via `.json` files.

---

### 🚀 Quick Installation

#### 1. Via Script Tag (CDN jsDelivr)
Add this single script tag before the closing `</body>` tag or inside `<head>`:

```html
<!-- jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js" defer></script>
```

The `<akses-kita>` custom element will automatically mount with a floating trigger button at the bottom right.

#### 2. Via npm / Modern Bundlers (Vite, Webpack, Next.js)
```bash
npm install akseskita
```

In your main entry file:
```javascript
import 'akseskita';
```

---

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>Alt</kbd> + <kbd>A</kbd> | Open / Close Accessibility Toolbar (A11y Panel) |
| <kbd>Alt</kbd> + <kbd>C</kbd> | Open / Close AAC Communicator Board |
| <kbd>Escape</kbd> | Dismiss active panel or modal |
| <kbd>Tab</kbd> / <kbd>Enter</kbd> | Navigate and activate AAC cards via keyboard |

---

### 💻 Development & Contribution

We warmly welcome contributions from developers, speech therapists, accessibility advocates, and designers!

```bash
# 1. Clone repository
git clone https://github.com/anasysuf/akseskita.git
cd akseskita

# 2. Install dependencies
npm install

# 3. Start development watcher
npm run dev

# 4. Build production bundles
npm run build

# 5. Run local demo server
npm run serve
# Visit http://localhost:3000
```

Please check [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## 📬 Contact & Support

- **Email:** [mail@anasy.is-a.dev](mailto:mail@anasy.is-a.dev)
- **GitHub Issues:** [Submit an Issue or Feature Request](https://github.com/anasysuf/akseskita/issues)

---

## 📄 License

Distributed under the **MIT License**. Free for commercial, government, educational, NGO, and personal websites.
