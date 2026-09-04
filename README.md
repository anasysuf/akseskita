# ♿ AksesKita

[![npm version](https://img.shields.io/npm/v/akseskita.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/akseskita)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-%3C%2015KB%20gzipped-success.svg?style=flat-square)](https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> **All-in-One Assistive Web Suite: Blind-Friendly Screen Reader & TTS, Unified Accessibility Panel (A11y Profiles, 6-Level Typography, 7 Contrast Schemes, Visual Aids, Motion Control) & Interactive Visual AAC Communicator Board. Zero Dependencies, Bilingual (ID/EN), < 15KB gzipped.**

---

**Pilih Bahasa / Choose Language:**  
[🇮🇩 **Bahasa Indonesia**](#-bahasa-indonesia) &bull; [🇬🇧 **English**](#-english)

---

<a id="bahasa-indonesia"></a>
## 🇮🇩 Bahasa Indonesia

**AksesKita** adalah Web Component sumber terbuka (*open-source*) yang menggabungkan fitur **Pembaca Layar Tunanetra Cerdas (Screen Reader & Audio TTS)**, **Toolbar Aksesibilitas Web Terpadu (A11y Unified Scroll-Down)**, dan **Papan Komunikasi Visual (AAC Communicator)** interaktif ke dalam satu skrip JavaScript ringan (< 15KB gzipped) tanpa dependensi eksternal.

Misi kami adalah menghadirkan kesetaraan akses informasi web dan kemandirian komunikasi berbantuan bagi penyandang disabilitas penglihatan/tunanetra, epilepsi/fotosensitivitas, ADHD, disleksia, disabilitas motorik, autisme non-verbal, lansia, dan penderita afasia.

---

### ✨ Fitur Unggulan Aksesibilitas Lengkap

#### 1. 🔊 Pembaca Layar & Suara TTS Tunanetra (Fokus Utama)
* **Mode Pembaca Layar Interaktif (<kbd>Alt + R</kbd>):** Membaca elemen bersuara otomatis dengan konteks yang jelas (*"Tombol: Kirim"*, *"Tautan: Beranda"*, *"Judul: ..."*) saat kursor hover atau saat bernavigasi menggunakan tombol <kbd>Tab</kbd>.
* **Pembaca Seluruh Halaman Kontinu (<kbd>Alt + P</kbd>):** Membaca seluruh artikel/halaman dari atas ke bawah secara berurutan dengan penyorotan visual aktif (*auto-scroll highlight*).
* **Hentikan Suara Seketika (<kbd>Alt + S</kbd>):** Mematikan suara sintesis seketika kapan saja.
* **Pengatur Kecepatan Suara (Speech Rate):** 5 pilihan kecepatan suara (`0.75x`, `1.0x`, `1.25x`, `1.5x`, `2.0x`) ramah pengguna tunanetra berpengalaman.
* **Quick TTS Seleksi Teks:** Blok kalimat apa saja di halaman web, tombol melayang **"🔊 Dengarkan"** otomatis muncul di atas teks pilihan.

#### 2. 🌟 Profil Aksesibilitas 1-Klik (Preset Profiles)
* **Tunanetra Total (Blind Profile):** Otomatis mengaktifkan mode pembaca layar interaktif dan orientasi suara.
* **Gangguan Penglihatan (Vision Impaired):** Mengaktifkan kontras tinggi, memperbesar ukuran teks, serta menyorot tautan dan judul.
* **Ramah ADHD (ADHD Friendly):** Mengaktifkan *Reading Mask* (tirai baca), menghentikan animasi, dan *Super Focus* untuk mengurangi distraksi visual.
* **Aman Kejang (Seizure Safe):** Menghentikan animasi/kedipan visual dan menurunkan saturasi warna untuk mencegah pemicu kejang epilepsi.
* **Kognitif & Belajar (Cognitive & Learning):** Mengaktifkan font ramah disleksia, menambah spasi baris & huruf, serta garis pandu baca.
* **Gangguan Motorik (Motor Impaired):** Menampilkan kursor besar (*Big Cursor*) dan *Super Focus* ramah keyboard.

#### 3. 🔤 Penyesuaian Konten & Tipografi (Typography)
* **Ukuran Teks Dinamis Responsif:** 6 tingkat skala teks (`75%`, `100%`, `125%`, `150%`, `175%`, `200%`) yang aman tanpa merusak struktur menu navigasi.
* **Ketebalan Teks (Font Weight):** Mode cetak tebal (*Bolder text*) untuk kemudahan membaca.
* **Spasi Baris (Line Height):** 3 tingkat penyesuaian (Normal, 1.8x Lebar, 2.2x Sangat Lebar).
* **Spasi Huruf (Letter Spacing):** 3 tingkat kerning (Normal, +1px, +2px).
* **Font Khusus Disleksia:** Tipografi *OpenDyslexic* mode untuk mencegah pembalikan karakter.
* **Sorot Tautan & Judul:** Penanda visual kontras pada tautan (*hyperlinks*) dan heading halaman (H1-H6).
* **Perataan Teks (Text Align):** Kontrol perataan teks (Rata Kiri, Tengah, Kanan, Rata Kanan-Kiri).

#### 4. 🎨 Warna & Skema Kontras (Color & Contrast)
* **Kontras Tinggi (High Contrast):** Latar gelap pekat (`#0B0F19`) dengan teks kuning terang (`#FFFF00`) dan tautan cyan (`#38BDF8`).
* **Kontras Gelap (Dark Contrast):** Latar hitam pekat (`#121212`) dengan teks putih jernih (`#F8FAFC`).
* **Kontras Terang (Light Contrast):** Latar putih bersih (`#FFFFFF`) dengan teks hitam pekat (`#000000`).
* **Monokrom (Grayscale 100%):** Filter abu-abu non-destruktif.
* **Saturasi Rendah (Low Saturation 50%):** Meredam intensitas warna bagi pengguna sensitif cahaya.
* **Saturasi Tinggi (High Saturation 180%):** Meningkatkan kejernihan warna bagi pengguna buta warna parsial.
* **Balik Warna Cerdas (Invert):** Pembalikan warna yang melindungi media (gambar, video, canvas).

#### 5. 🔍 Alat Bantu Visual & Navigasi (Visual Aids)
* **Garis Pandu Baca (Reading Guide):** Penggaris baca interaktif horizontal (60 FPS `requestAnimationFrame`).
* **Tirai Baca (Reading Mask):** Meredupkan area luar dengan celah fokus horizontal mengikuti kursor.
* **Super Fokus (Super Focus Mode):** Meredupkan latar belakang dan menyorot elemen DOM yang sedang aktif/diarahkan.
* **Kursor Besar (Big Cursor):** Kursor navigasi raksasa kontras tinggi.

#### 6. 🛠️ Utilitas & Kontrol Gerak (Usability & Motion)
* **Hentikan Animasi (Stop Animations):** Mematikan CSS animations, transisi, dan mem-pause video yang berputar otomatis.
* **Sembunyikan Gambar (Hide Images):** Menyembunyikan gambar/video untuk pengalaman membaca berbasis teks murni.
* **Tooltip Gambar (Image Tooltips):** Menampilkan atribut teks alternatif (`alt`/`title`) sebagai tooltip visual melayang.

#### 7. 🗣️ Papan Komunikasi Visual AAC Dwibahasa (AAC Communicator)
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

### ⌨️ Pintasan Keyboard Lengkap

| Pintasan | Fungsi |
|---|---|
| <kbd>Alt</kbd> + <kbd>R</kbd> | **Aktif / Nonaktifkan Mode Pembaca Layar** (Screen Reader Navigation) |
| <kbd>Alt</kbd> + <kbd>P</kbd> | **Mulai / Jeda Baca Seluruh Halaman** (Continuous Page Reader) |
| <kbd>Alt</kbd> + <kbd>S</kbd> | **Hentikan Suara Seketika** (Instant Stop Speech) |
| <kbd>Alt</kbd> + <kbd>A</kbd> | Buka / Tutup Panel Aksesibilitas (Toolbar A11y) |
| <kbd>Alt</kbd> + <kbd>C</kbd> | Buka / Tutup Papan Komunikasi Visual (AAC Modal) |
| <kbd>Escape</kbd> | Menutup panel atau modal yang sedang aktif |
| <kbd>Tab</kbd> / <kbd>Enter</kbd> | Navigasi dan pemilihan elemen / kartu tanpa mouse |

---

<a id="english"></a>
## 🇬🇧 English

**AksesKita** is an open-source, zero-dependency Web Component that combines a **Blind-Friendly Screen Reader & TTS Engine**, a **Unified All-in-One Accessibility Toolbar**, and an interactive **Visual AAC Communicator Board** into a single lightweight script (< 15KB gzipped).

---

### ✨ Complete Accessibility Features

#### 1. 🔊 Screen Reader & Audio TTS (Primary Focus)
* **Screen Reader Mode (<kbd>Alt + R</kbd>):** Speaks elements aloud with clear contextual roles (*"Button: Submit"*, *"Link: Home"*, *"Heading 2: ..."*) on cursor hover or <kbd>Tab</kbd> navigation.
* **Continuous Page Reader (<kbd>Alt + P</kbd>):** Reads entire page/article from top to bottom with auto-scrolling sentence highlighting.
* **Instant Speech Stop (<kbd>Alt + S</kbd>):** Immediately stops active speech synthesis.
* **Configurable Speech Rate:** 5 speed presets (`0.75x`, `1.0x`, `1.25x`, `1.5x`, `2.0x`).
* **Selection Quick TTS:** Highlight text on any page to show the floating **"🔊 Listen"** action button.

#### 2. 🌟 1-Click Accessibility Profiles
* **Blind Profile:** Automatically turns on interactive screen reader navigation and speech orientation.
* **Vision Impaired Profile:** Enhances contrast, enlarges font size, and highlights hyperlinks & headings.
* **ADHD Friendly Profile:** Activates Reading Mask curtain, stops background motion, and enables Super Focus.
* **Seizure Safe Profile:** Eliminates flashing triggers, stops CSS animations, and reduces color saturation.
* **Cognitive & Learning Profile:** Applies OpenDyslexic typography, expands line & letter spacing, and enables Reading Guide.
* **Motor Impaired Profile:** Enables the Big Cursor and keyboard-friendly Super Focus navigation.

#### 3. 🔤 Content & Typography Adjustments
* **Responsive Dynamic Font Scaling:** 6 scale presets (`75%`, `100%`, `125%`, `150%`, `175%`, `200%`) designed to preserve menu layout integrity.
* **Font Weight:** Bold text toggle for enhanced contrast.
* **Line Height:** 3 spacing presets (Normal, 1.8x, 2.2x).
* **Letter Spacing:** 3 kerning presets (Normal, +1px, +2px).
* **Dyslexia Font:** OpenDyslexic typeface mode.
* **Highlight Links & Headings:** Distinct visual badges for links and H1-H6 headers.
* **Text Alignment:** Left, Center, Right, and Justified alignment.

#### 4. 🎨 Color & Contrast Schemes
* **High Contrast:** Dark background (`#0B0F19`) with bright yellow text (`#FFFF00`) and cyan links (`#38BDF8`).
* **Dark Contrast:** Pitch-black background (`#121212`) with clear white text (`#F8FAFC`).
* **Light Contrast:** Crisp white background (`#FFFFFF`) with deep black text (`#000000`).
* **Monochrome:** 100% grayscale filter.
* **Low Saturation (50%):** Mutes vivid colors for photosensitive users.
* **High Saturation (180%):** Boosts color saturation for partial color deficiency.
* **Smart Invert:** Media-safe color inversion.

#### 5. 🔍 Visual & Navigation Aids
* **Reading Guide:** Horizontal interactive ruler running at smooth 60 FPS (`requestAnimationFrame`).
* **Reading Mask:** Dimmed screen mask with a clear horizontal focus slit.
* **Super Focus:** Spotlights the active/hovered DOM element.
* **Big Cursor:** Large high-contrast custom mouse pointer.

#### 6. 🛠️ Usability & Motion Utilities
* **Stop Animations:** Disables all CSS animations, transitions, and pauses autoplaying videos.
* **Hide Images:** Hides media elements for distraction-free text-only browsing.
* **Image Tooltips:** Displays `alt`/`title` text as a floating visual tooltip.

#### 7. 🗣️ Visual AAC Communicator Board
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
| <kbd>Alt</kbd> + <kbd>R</kbd> | **Toggle Screen Reader Mode** (Hover & Tab Navigation) |
| <kbd>Alt</kbd> + <kbd>P</kbd> | **Start / Pause Continuous Page Reader** |
| <kbd>Alt</kbd> + <kbd>S</kbd> | **Instant Stop Speech** |
| <kbd>Alt</kbd> + <kbd>A</kbd> | Open / Close Accessibility Toolbar (A11y Panel) |
| <kbd>Alt</kbd> + <kbd>C</kbd> | Open / Close AAC Communicator Board |
| <kbd>Escape</kbd> | Dismiss active panel or modal |
| <kbd>Tab</kbd> / <kbd>Enter</kbd> | Navigate and activate elements/cards via keyboard |

---

## 📄 License

Distributed under the **MIT License**. Free for commercial, educational, NGO, and personal websites.
