# ♿ AksesKita

[![npm version](https://img.shields.io/npm/v/akseskita.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/akseskita)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-%3C%2015KB%20gzipped-success.svg?style=flat-square)](https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> **All-in-One Assistive Web Suite: Comprehensive Accessibility Toolbar (A11y Profiles, Typography, Contrast, Visual Aids, Motion Control) & Interactive Visual AAC Communicator Board. Zero Dependencies, Bilingual (ID/EN), < 15KB gzipped.**

---

**Pilih Bahasa / Choose Language:**  
[🇮🇩 **Bahasa Indonesia**](#-bahasa-indonesia) &bull; [🇬🇧 **English**](#-english)

---

<a id="bahasa-indonesia"></a>
## 🇮🇩 Bahasa Indonesia

**AksesKita** adalah Web Component sumber terbuka (*open-source*) yang menggabungkan fitur **Toolbar Aksesibilitas Web Komprehensif (A11y)** dan **Papan Komunikasi Visual (AAC Communicator)** interaktif ke dalam satu skrip JavaScript ringan (< 15KB gzipped) tanpa dependensi eksternal.

Misi kami adalah menghadirkan kesetaraan akses informasi web dan kemandirian komunikasi berbantuan bagi penyandang disabilitas penglihatan, epilepsi/fotosensitivitas, ADHD, disleksia, disabilitas motorik, autisme non-verbal, lansia, dan penderita afasia di seluruh dunia.

---

### ✨ Fitur Unggulan Aksesibilitas Lengkap

#### 1. 🌟 Profil Aksesibilitas 1-Klik (Preset Profiles)
* **Aman Kejang (Seizure Safe):** Menghentikan animasi/kedipan visual dan menurunkan saturasi warna untuk mencegah pemicu kejang epilepsi & fotosensitif.
* **Gangguan Penglihatan (Vision Impaired):** Mengaktifkan kontras tinggi, memperbesar ukuran font (+30%), serta menyorot tautan dan judul.
* **Ramah ADHD (ADHD Friendly):** Mengaktifkan *Reading Mask* (tirai baca), menghentikan animasi, dan mengaktifkan mode *Super Focus* untuk mengurangi distraksi visual.
* **Kognitif & Belajar (Cognitive & Learning):** Mengaktifkan font ramah disleksia, menambah spasi baris & huruf, serta mengaktifkan garis pandu baca horizontal.
* **Gangguan Motorik (Motor Impaired):** Menampilkan kursor besar (*Big Cursor*), *Super Focus* ramah keyboard, dan area klik yang diperjelas.
* **Tunanetra Total (Blind Profile):** Optimalisasi navigasi suara (*Screen Reader / TTS*) dan panduan vokal interaktif.

#### 2. 🔤 Penyesuaian Konten & Tipografi (Typography)
* **Ukuran Font Dinamis:** 5 tingkat skala teks responsif (Normal, +15%, +30%, +50%, +75%).
* **Ketebalan Teks (Font Weight):** Mode cetak tebal (*Bolder text*) untuk kemudahan membaca.
* **Spasi Baris (Line Height):** 3 tingkat penyesuaian (Normal, 1.8x Lebar, 2.2x Sangat Lebar).
* **Spasi Huruf (Letter Spacing):** 3 tingkat kerning (Normal, +1px, +2px).
* **Font Khusus Disleksia:** Tipografi *OpenDyslexic* mode untuk mencegah pembalikan karakter.
* **Sorot Tautan & Judul:** Penanda visual kontras pada tautan (*hyperlinks*) dan heading halaman (H1-H6).
* **Perataan Teks (Text Align):** Kontrol perataan teks (Rata Kiri, Tengah, Kanan, Rata Kanan-Kiri).

#### 3. 🎨 Warna & Skema Kontras (Color & Contrast)
* **Kontras Tinggi (High Contrast):** Latar gelap pekat (`#0B0F19`) dengan teks kuning terang (`#FFFF00`) dan tautan cyan (`#38BDF8`).
* **Kontras Gelap (Dark Contrast):** Latar hitam pekat (`#121212`) dengan teks putih jernih (`#F8FAFC`).
* **Kontras Terang (Light Contrast):** Latar putih bersih (`#FFFFFF`) dengan teks hitam pekat (`#000000`).
* **Monokrom (Grayscale 100%):** Filter abu-abu non-destruktif.
* **Saturasi Rendah (Low Saturation 50%):** Meredam intensitas warna bagi pengguna sensitif cahaya.
* **Saturasi Tinggi (High Saturation 180%):** Meningkatkan kejernihan warna bagi pengguna buta warna parsial.
* **Balik Warna Cerdas (Invert):** Pembalikan warna yang melindungi media (gambar, video, canvas).

#### 4. 🔍 Alat Bantu Visual & Navigasi (Visual Aids)
* **Garis Pandu Baca (Reading Guide):** Penggaris baca interaktif horizontal (60 FPS `requestAnimationFrame`).
* **Tirai Baca (Reading Mask):** Meredupkan area luar dengan celah fokus horizontal mengikuti kursor.
* **Super Fokus (Super Focus Mode):** Meredupkan latar belakang dan menyorot elemen DOM yang sedang aktif/diarahkan.
* **Kursor Besar (Big Cursor):** Kursor navigasi raksasa kontras tinggi.
* **Quick TTS (Screen Reader Seleksi):** Tombol melayang **"🔊 Dengarkan / Listen"** muncul otomatis saat memilih teks di halaman web.

#### 5. 🛠️ Utilitas & Kontrol Gerak (Usability & Motion)
* **Hentikan Animasi (Stop Animations):** Mematikan CSS animations, transisi, dan mem-pause video yang berputar otomatis.
* **Sembunyikan Gambar (Hide Images):** Menyembunyikan gambar/video untuk pengalaman membaca berbasis teks murni.
* **Tooltip Gambar (Image Tooltips):** Menampilkan atribut teks alternatif (`alt`/`title`) sebagai tooltip visual melayang.

#### 6. 🗣️ Papan Komunikasi Visual AAC Dwibahasa (AAC Communicator)
* **Pita Kalimat (Sentence Strip):** Susun kalimat dengan mengklik kartu simbol dan dengarkan dengan efek visual *highlight karaoke*.
* **40+ Simbol Bawaan Dwibahasa:** Kebutuhan (Needs), Respon (Responses), Perasaan (Feelings), Aktivitas & Orang (Activities & People).
* **Editor Kartu Kustom:** Tambah kartu foto via upload/kamera (dengan kompresi Canvas otomatis) & rekam suara asli via mic.
* **Penyimpanan Lokal Offline:** Tersimpan aman di `IndexedDB` lokal dengan fitur Ekspor/Impor JSON.

---

### 🚀 Cara Pemasangan Cepat

#### 1. Menggunakan Script Tag (CDN jsDelivr)
Letakkan satu baris tag script berikut sebelum tag penutup `</body>` atau di dalam `<head>` website Anda:

```html
<!-- CDN jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js" defer></script>
```

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

<a id="english"></a>
## 🇬🇧 English

**AksesKita** is an open-source, zero-dependency Web Component that combines a **Comprehensive Web Accessibility Toolbar (A11y)** and an interactive **Visual AAC Communicator Board** into a single lightweight script (< 15KB gzipped).

---

### ✨ Complete Accessibility Features

#### 1. 🌟 1-Click Accessibility Profiles
* **Seizure Safe Profile:** Eliminates flashing triggers, suppresses CSS animations, and reduces color saturation.
* **Vision Impaired Profile:** Enhances contrast, scales font size (+30%), and highlights all hyperlinks and headings.
* **ADHD Friendly Profile:** Activates the Reading Mask curtain, stops background animations, and enables Super Focus mode.
* **Cognitive & Learning Profile:** Applies OpenDyslexic typography, expands line & letter spacing, and enables the Reading Guide.
* **Motor Impaired Profile:** Enables the high-visibility Big Cursor and keyboard-friendly Super Focus navigation.
* **Blind Profile:** Audio TTS speech synthesis integration with spoken orientation prompts.

#### 2. 🔤 Content & Typography Adjustments
* **Dynamic Font Scaling:** 5 scaling levels (Normal, +15%, +30%, +50%, +75%).
* **Font Weight:** Bold text toggle for enhanced contrast.
* **Line Height:** 3 spacing presets (Normal, 1.8x, 2.2x).
* **Letter Spacing:** 3 kerning presets (Normal, +1px, +2px).
* **Dyslexia Font:** OpenDyslexic typeface mode.
* **Highlight Links & Headings:** Distinct visual badges for links and H1-H6 headers.
* **Text Alignment:** Left, Center, Right, and Justified alignment.

#### 3. 🎨 Color & Contrast Schemes
* **High Contrast:** Dark background (`#0B0F19`) with bright yellow text (`#FFFF00`) and cyan links (`#38BDF8`).
* **Dark Contrast:** Pitch-black background (`#121212`) with clear white text (`#F8FAFC`).
* **Light Contrast:** Crisp white background (`#FFFFFF`) with deep black text (`#000000`).
* **Monochrome:** 100% grayscale filter.
* **Low Saturation (50%):** Mutes vivid colors for photosensitive users.
* **High Saturation (180%):** Boosts color saturation for partial color deficiency.
* **Smart Invert:** Media-safe color inversion.

#### 4. 🔍 Visual & Navigation Aids
* **Reading Guide:** Horizontal interactive ruler running at smooth 60 FPS (`requestAnimationFrame`).
* **Reading Mask:** Dimmed screen mask with a clear horizontal focus slit.
* **Super Focus:** Spotlights the active/hovered DOM element.
* **Big Cursor:** Large high-contrast custom mouse pointer.
* **Quick TTS Screen Reader:** Floating **"🔊 Listen"** popover upon text selection.

#### 5. 🛠️ Usability & Motion Utilities
* **Stop Animations:** Disables all CSS animations, transitions, and pauses autoplaying videos.
* **Hide Images:** Hides media elements for distraction-free text-only browsing.
* **Image Tooltips:** Displays `alt`/`title` text as a floating visual tooltip.

#### 6. 🗣️ Visual AAC Communicator Board
* **Sentence Strip Builder:** Build phrases by clicking symbol cards with sequential spoken audio playback.
* **40+ Bilingual Default Cards:** Needs, Responses, Feelings, Activities & People.
* **Custom Card Creator:** Device photo upload with automatic Canvas compression + microphone voice recorder.
* **Local Offline Storage:** Saved securely in client-side `IndexedDB` with JSON backup/restore.

---

### 🚀 Quick Installation

#### Via Script Tag (jsDelivr CDN):
```html
<script src="https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js" defer></script>
```

#### Via npm:
```bash
npm install akseskita
```

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

## 📄 License

Distributed under the **MIT License**. Free for commercial, educational, NGO, and personal websites.
