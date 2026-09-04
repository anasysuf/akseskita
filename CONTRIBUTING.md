# Panduan Kontribusi / Contributing Guidelines

[🇮🇩 **Bahasa Indonesia**](#-panduan-kontribusi-bahasa-indonesia) &bull; [🇬🇧 **English Guidelines**](#-english-contributing-guidelines)

---

<a id="panduan-kontribusi-bahasa-indonesia"></a>
## 🇮🇩 Panduan Kontribusi (Bahasa Indonesia)

Terima kasih atas minat Anda untuk berkontribusi pada **AksesKita**! Proyek ini bersifat sumber terbuka (*open-source*) dan didedikasikan untuk membangun ekosistem web yang inklusif, ramah disabilitas, serta memberdayakan komunikasi berbantuan (AAC) bagi siapa pun.

### 🌟 Cara Anda Dapat Berkontribusi
1. **Menambahkan Kartu Simbol AAC Dwibahasa:** Menambah kosakata sehari-hari (sekolah, fasilitas medis, transportasi publik, hobi) lengkap dengan teks Bahasa Indonesia dan English.
2. **Peningkatan Aksesibilitas (A11y):** Meningkatkan kepatuhan terhadap standar WCAG 2.2 Level AA / AAA.
3. **Melaporkan & Memperbaiki Bug:** Menemukan inkonsistensi peramban, visual glitch, atau masalah sintesis suara (TTS).
4. **Dokumentasi & Integrasi Framework:** Menulis panduan integrasi untuk React, Vue, Angular, Svelte, Next.js, WordPress, atau CMS lainnya.

---

### 🛠️ Alur Kerja Pengembangan (Development Workflow)

#### 1. Fork & Clone Repository
```bash
# Clone repository fork Anda
git clone https://github.com/<username-anda>/akseskita.git
cd akseskita

# Pasang dependensi pengembangan
npm install
```

#### 2. Buat Branch Baru
```bash
git checkout -b feature/tambah-kartu-medis
# atau
git checkout -b fix/contrast-mode-safari
```

#### 3. Jalankan Lingkungan Pengembangan
```bash
# Menjalankan bundler dengan live watch
npm run dev

# Jalankan server demo lokal di terminal terpisah
npm run serve
# Buka http://localhost:3000 pada peramban Anda
```

#### 4. Struktur Direktori Penting
- [`src/modules/i18n.js`](src/modules/i18n.js): Kamus terjemahan dwibahasa (`id` & `en`).
- [`src/db/default-cards.js`](src/db/default-cards.js): Daftar kartu simbol AAC dan kategori bawaan.
- [`src/modules/`](src/modules/): Logika modular (*font scale*, *contrast*, *TTS reader*, *sentence engine*, *audio recorder*).
- [`src/styles/`](src/styles/): CSS terisolasi Shadow DOM (`widget.css.js`) dan suntikan host web (`host-inject.css.js`).
- [`src/index.js`](src/index.js): Web Component utama `<akses-kita>`.

#### 5. Panduan Menambahkan Kartu AAC Baru
Saat menambahkan kartu baru di `src/db/default-cards.js`, pastikan menyertakan properti dwibahasa (`labelEn` dan `speechTextEn`):
```javascript
{
  id: 501,                             // ID numerik unik
  categoryId: 1,                       // 1: Kebutuhan, 2: Respon, 3: Perasaan, 4: Aktivitas & Orang
  label: 'Minum Air',                  // Label kartu Indonesia (2-3 kata)
  speechText: 'Saya mau minum air',    // Kalimat ucapan TTS Indonesia
  labelEn: 'Drink Water',              // Label kartu English
  speechTextEn: 'I want to drink water', // Kalimat ucapan TTS English
  iconEmoji: '💧',                     // Emoji atau data URL gambar
  bgColor: '#E0F2FE',                  // Warna latar kartu
  borderColor: '#0284C7',              // Warna border kartu
  isDefault: true
}
```

#### 6. Bangun Bundle & Validasi
Sebelum membuat commit, pastikan bundle berhasil dikompilasi tanpa error:
```bash
npm run build
```

---

### 📝 Konvensi Commit & Pull Request (PR)
Gunakan format pesan commit standar (Conventional Commits):
- `feat: tambah simbol kebutuhan medis pada papan AAC`
- `fix: perbaiki z-index garis pandu baca pada modal`
- `docs: perbarui panduan integrasi Next.js pada README`

**Langkah Mengajukan PR:**
1. Push branch Anda ke GitHub fork: `git push origin feature/nama-fitur`.
2. Buka [Pull Request di GitHub](https://github.com/anasysuf/akseskita/pulls) dan arahkan target ke branch **`dev`** (atau `main`).
3. Jelaskan perubahan yang dilakukan dan lampirkan tangkapan layar jika berkaitan dengan antarmuka (UI).

---

<a id="english-contributing-guidelines"></a>
## 🇬🇧 English Contributing Guidelines

Thank you for your interest in contributing to **AksesKita**! This open-source project is dedicated to making the web accessible to everyone and providing interactive AAC assistive communication tools.

### 🌟 How You Can Contribute
1. **Adding Bilingual AAC Symbol Cards:** Expand daily communication cards (medical, school, transport, social) with both Indonesian and English text.
2. **Accessibility (A11y) Improvements:** Enhance compliance with WCAG 2.2 AA / AAA standards.
3. **Bug Reports & Fixes:** Identify browser quirks, responsive issues, or speech synthesis edge cases.
4. **Documentation & Integrations:** Create guides and examples for popular frameworks (React, Vue, Next.js, WordPress, etc.).

---

### 🛠️ Development Workflow

#### 1. Fork & Clone Repository
```bash
git clone https://github.com/<your-username>/akseskita.git
cd akseskita
npm install
```

#### 2. Create a Feature Branch
```bash
git checkout -b feature/new-medical-cards
```

#### 3. Start Local Development
```bash
# Start Rollup build watcher
npm run dev

# In another terminal, start local demo server
npm run serve
# Visit http://localhost:3000
```

#### 4. Adding New AAC Symbol Cards
When adding symbol cards in `src/db/default-cards.js`, ensure all bilingual fields are provided:
```javascript
{
  id: 501,                               // Unique numeric ID
  categoryId: 1,                         // 1: Needs, 2: Responses, 3: Feelings, 4: Activities & People
  label: 'Minum Air',                    // Indonesian label
  speechText: 'Saya mau minum air',      // Indonesian TTS speech
  labelEn: 'Drink Water',                // English label
  speechTextEn: 'I want to drink water', // English TTS speech
  iconEmoji: '💧',                       // Emoji or image URL
  bgColor: '#E0F2FE',                    // Card background color
  borderColor: '#0284C7',                // Card border color
  isDefault: true
}
```

#### 5. Build and Verify
Ensure production bundles build cleanly with zero errors:
```bash
npm run build
```

---

### 📝 Commit & Pull Request Workflow

Follow Conventional Commits format:
- `feat: add emergency and medical symbol cards`
- `fix: resolve reading guide z-index on mobile viewports`
- `docs: improve React integration instructions`

**Submitting a PR:**
1. Push your branch to your GitHub fork: `git push origin feature/your-feature-name`.
2. Open a [Pull Request on GitHub](https://github.com/anasysuf/akseskita/pulls) targeting the **`dev`** branch.
3. Describe your changes clearly and attach screenshots if any UI elements were modified.

---

## 📬 Questions & Community Support

- **Email:** [mail@anasy.is-a.dev](mailto:mail@anasy.is-a.dev)
- **GitHub Issues:** [Open an Issue](https://github.com/anasysuf/akseskita/issues)

*Thank you for helping build a more inclusive and accessible digital world! ♿🌐*
