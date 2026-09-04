# ♿ AksesKita (All-in-One Assistive Web Suite Indonesia)

[![npm version](https://img.shields.io/npm/v/akseskita.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/akseskita)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-%3C%2015KB%20gzipped-success.svg?style=flat-square)](https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg?style=flat-square)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> **Toolbar Aksesibilitas Web & Papan Komunikasi Visual (AAC) dalam Satu Skrip Ringan Indonesia.**

**AksesKita** adalah Web Component sumber terbuka (*open-source*) berbahasa Indonesia yang menggabungkan fitur **Toolbar Aksesibilitas Web (A11y)** dan **Papan Komunikasi Visual (AAC Communicator)** interaktif ke dalam satu skrip JavaScript ringan (< 15KB gzipped) tanpa dependensi eksternal.

Misi kami adalah menghadirkan kesetaraan akses informasi web dan kemandirian komunikasi berbantuan bagi penyandang autisme, disabilitas wicara, lansia, dan penderita afasia di seluruh Indonesia.

---

## ✨ Fitur Unggulan

### 1. 🔤 Toolbar Aksesibilitas Web (A11y Tools)
* **Ukuran Font Dinamis:** 4 tingkat pembesaran (100%, +15%, +30%, +50%) via manipulasi variabel CSS yang responsif.
* **Mode Ramah Disleksia:** Toggle font khusus (*OpenDyslexic* mode) untuk meningkatkan keterbacaan.
* **Skema Kontras & Filter Visual:**
  * **Kontras Tinggi:** Latar gelap pekat (`#0B0F19`) dengan teks kuning terang (`#FFFF00`) dan tautan cyan (`#38BDF8`).
  * **Monokrom:** Filter grayscale 100% menggunakan non-breaking backdrop overlay.
  * **Balik Warna (Invert):** Pembalikan warna cerdas yang melindungi elemen media (gambar, video, canvas).
  * **Sorot Tautan:** Penandaan visual mencolok pada tautan dan navigasi.
  * **Garis Pandu Baca (Reading Guide):** Penggaris baca interaktif horizontal (60 FPS `requestAnimationFrame`).
* **Quick TTS / Screen Reader Seleksi Teks:** Cukup seleksi teks apa pun di website, tombol mengambang **"🔊 Dengarkan"** akan muncul otomatis dan membaca teks dengan pelafalan Bahasa Indonesia (`id-ID`).

### 2. 🗣️ Papan Komunikasi Visual (AAC Communicator Modal)
* **Pita Kalimat (Sentence Strip):**
  * Susun urutan kartu simbol hanya dengan mengklik kartu.
  * Tombol **"🔊 Bicara"**: Membacakan kalimat satu per satu dengan efek visual highlight yang aktif mengikuti kata yang sedang dibunyikan.
  * Tombol **"⌫ Hapus"** (hapus kartu terakhir) & **"🗑️ Bersih"** (kosongkan pita).
* **Kategori & Simbol Bawaan Indonesia:**
  * **Kebutuhan (🍽️):** Mau Makan, Mau Minum, Ke Toilet, Tolong, Istirahat, Sakit, Tidur, Minum Obat, Cuci Tangan, Ganti Baju.
  * **Respon (💬):** Ya, Tidak, Mau, Tidak Mau, Terima Kasih, Permisi, Maaf, Tolong Ulangi, Mengerti, Tidak Tahu.
  * **Perasaan (😊):** Senang, Sedih, Marah, Takut, Bingung, Lelah, Kaget, Cemas, Bangga.
  * **Aktivitas & Orang (👥):** Saya, Kamu, Belajar, Bermain, Jalan-jalan, Pulang, Ibu, Ayah, Guru, Teman, Dokter.
* **Editor Kartu Kustom (CRUD Lokal Offline):**
  * Tambah kartu baru dengan upload gambar/foto kamera dari perangkat (dilengkapi kompresi gambar otomatis via Canvas).
  * Rekam suara asli via mic menggunakan native `MediaRecorder` API.
  * Data disimpan secara lokal dan aman di `IndexedDB` (`AksesKitaDB`).
* **Backup & Restore:** Ekspor dan impor seluruh konfigurasi kartu dalam format `.json`.

---

## 🚀 Cara Pemasangan Cepat

### 1. Menggunakan Script Tag (CDN jsDelivr)
Cukup letakkan satu baris tag script berikut sebelum tag penutup `</body>` atau di dalam `<head>` website Anda:

```html
<!-- CDN jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/akseskita@latest/dist/akseskita.min.js" defer></script>
```

Widget `<akses-kita>` akan otomatis terpasang dan menampilkan tombol pemicu mengambang di pojok kanan bawah layar.

### 2. Menggunakan npm / Bundler Modern (Vite, Webpack, Next.js)
```bash
npm install akseskita
```

Di entry point JavaScript / TypeScript Anda:
```javascript
import 'akseskita';
```

---

## ⌨️ Pintasan Keyboard (Keyboard Shortcuts)

| Pintasan | Fungsi |
|---|---|
| <kbd>Alt</kbd> + <kbd>A</kbd> | Buka / Tutup Panel Aksesibilitas (Toolbar A11y) |
| <kbd>Alt</kbd> + <kbd>C</kbd> | Buka / Tutup Papan Komunikasi Visual (AAC Modal) |
| <kbd>Escape</kbd> | Menutup panel atau modal yang sedang aktif |
| <kbd>Tab</kbd> / <kbd>Enter</kbd> | Navigasi dan aktivasi kartu AAC via keyboard |

---

## 🛠️ Struktur Direktori Proyek

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
│   │   ├── default-cards.js     # Data bawaan kartu AAC Bahasa Indonesia
│   │   └── idb.js               # Wrapper native IndexedDB (AksesKitaDB)
│   ├── modules/
│   │   ├── a11y-contrast.js     # Filter warna & kontras tinggi
│   │   ├── a11y-font.js         # Pengatur skala font & font disleksia
│   │   ├── a11y-speech.js       # TTS reader Bahasa Indonesia & popover seleksi
│   │   ├── aac-engine.js        # Engine pita kalimat & sequential highlight
│   │   └── audio-recorder.js    # Perekam suara mic lokal (MediaRecorder)
│   ├── styles/
│   │   ├── host-inject.css.js   # CSS yang disuntikkan ke root web induk
│   │   └── widget.css.js        # CSS terisolasi Shadow DOM
│   ├── index.js                 # Entry point Web Component <akses-kita>
│   └── state.js                 # State manager
├── rollup.config.mjs            # Konfigurasi bundler Rollup
├── package.json
└── README.md
```

---

## 🤝 Mari Berkontribusi! (Contributing)

Kami sangat menyambut kontribusi dari siapa pun — baik pengembang web, terapis wicara, desainer UI/UX, maupun pegiat disabilitas!

Silakan baca panduan lengkapnya di [CONTRIBUTING.md](CONTRIBUTING.md).

### Ide Kontribusi yang Sangat Dibutuhkan:
- 🍱 Menambah kartu simbol AAC baru di `src/db/default-cards.js` (kosakata medis, sekolah, transportasi).
- ♿ Meningkatkan kepatuhan aksesibilitas WCAG 2.2.
- 🌐 Penambahan tema kontras baru atau pengaturan kecepatan suara.
- 📖 Panduan dan plugin integrasi untuk platform CMS (WordPress, Moodle, Drupal).

---

## 💻 Panduan Pengembang (Development)

1. **Clone repository:**
   ```bash
   git clone https://github.com/akseskita/akseskita.git
   cd akseskita
   npm install
   ```

2. **Jalankan watcher pengembangan:**
   ```bash
   npm run dev
   ```

3. **Membangun bundle produksi:**
   ```bash
   npm run build
   ```

4. **Menjalankan demo server lokal:**
   ```bash
   npm run serve
   # Buka http://localhost:3000 pada peramban Anda
   ```

---

## 📬 Kontak & Komunitas

Punya pertanyaan, ide kolaborasi, atau butuh bantuan integrasi?
- **Email:** [mail@anasy.is-a.dev](mailto:mail@anasy.is-a.dev)
- **Issues:** [Laporkan Masalah / Usulan](https://github.com/akseskita/akseskita/issues)

---

## 📄 Lisensi
Didistribusikan di bawah lisensi **MIT**. Bebas digunakan untuk situs komersial, instansi pemerintah, portal pendidikan, LSM, maupun personal.
