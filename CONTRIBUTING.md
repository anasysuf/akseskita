# Panduan Kontribusi AksesKita (Contributing Guidelines)

Terima kasih atas minat Anda untuk berkontribusi pada **AksesKita**! Proyek ini didedikasikan untuk membangun ekosistem web Indonesia yang inklusif, dapat diakses oleh semua orang, serta mendukung sahabat disabilitas dan non-verbal melalui teknologi komunikasi asistif (AAC).

---

## 🌟 Cara Anda Dapat Berkontribusi

Anda dapat berkontribusi dalam berbagai bentuk:
1. **Menambahkan Simbol & Kartu AAC Baru:** Menambah kosakata Bahasa Indonesia atau kategori asistif yang sering dibutuhkan di kehidupan sehari-hari (sekolah, rumah sakit, transportasi publik).
2. **Melaporkan Kendala / Bug:** Menemukan inkonsistensi styling, kendala *screen reader*, atau masalah kompatibilitas peramban.
3. **Peningkatan Fitur Aksesibilitas (A11y):** Meningkatkan kepatuhan terhadap standar WCAG 2.2 AA / AAA.
4. **Dokumentasi & Tutorial:** Memperbaiki dokumentasi, membuat panduan integrasi untuk WordPress, Laravel, Next.js, dsb.

---

## 🛠️ Alur Kerja Pengembangan (Development Workflow)

### 1. Fork & Clone Repository
```bash
# Clone repository hasil fork Anda
git clone https://github.com/<username-anda>/akseskita.git
cd akseskita

# Pasang dependensi pengembangan
npm install
```

### 2. Buat Branch Baru
Gunakan nama branch yang deskriptif:
```bash
git checkout -b feature/tambah-kategori-medis
# atau
git checkout -b fix/kontras-mode-ios
```

### 3. Jalankan Lingkungan Pengembangan
```bash
# Menjalankan bundler dengan live watch
npm run dev

# Jalankan server lokal di terminal lain untuk melihat demo
npm run serve
# Buka http://localhost:3000 pada peramban
```

### 4. Struktur Kode Penting
- `src/db/default-cards.js`: Daftar kategori dan kartu AAC bawaan Bahasa Indonesia.
- `src/modules/`: Logika modular (font scale, contrast filter, TTS speech, sentence engine, audio recorder).
- `src/styles/`: Styling terisolasi Shadow DOM (`widget.css.js`) dan suntikan web induk (`host-inject.css.js`).
- `src/index.js`: Web Component utama `<akses-kita>`.

### 5. Bangun Bundle & Validasi
Sebelum membuat commit, pastikan bundle berhasil di-build tanpa error:
```bash
npm run build
```

Pastikan bundle di folder `dist/` terbarui dan ukuran `dist/akseskita.min.js` tetap ringkas (< 35KB).

---

## 🎨 Panduan Menambah Simbol AAC Baru

Bila Anda ingin menambahkan kartu simbol AAC baru di `src/db/default-cards.js`, ikuti konvensi berikut:
```javascript
{
  id: 501,                        // ID numerik unik
  categoryId: 1,                  // 1: Kebutuhan, 2: Respon, 3: Perasaan, 4: Aktivitas & Orang
  label: 'Nama Singkat',          // Label teks pada kartu (maks 2-3 kata)
  speechText: 'Kalimat lengkap',  // Kalimat yang dibacakan oleh TTS
  iconEmoji: '🍱',                // Emoji yang mewakili, atau inline SVG
  bgColor: '#FFF7ED',             // Warna latar kartu
  borderColor: '#EA580C',         // Warna border kartu
  isDefault: true
}
```

---

## 📝 Konvensi Commit & Pull Request (PR)

Gunakan format pesan commit yang jelas (Conventional Commits):
- `feat: tambah simbol kebutuhan medis pada papan AAC`
- `fix: perbaiki z-index garis pandu baca pada modal`
- `docs: perbarui panduan integrasi Next.js pada README`

Setelah selesai:
1. Push branch Anda ke repository fork di GitHub.
2. Buat **Pull Request (PR)** ke branch `main` repository utama.
3. Jelaskan perubahan yang Anda lakukan dan lampirkan tangkapan layar jika ada perubahan visual.

---

## 💬 Hubungi Tim & Pengembang

Jika Anda memiliki pertanyaan seputar kontribusi atau ingin mendiskusikan ide arsitektur baru, hubungi kami melalui:
- **Email:** [mail@anasy.is-a.dev](mailto:mail@anasy.is-a.dev)
- **GitHub Issues:** [Buat Issue Baru](https://github.com/akseskita/akseskita/issues)

Terima kasih telah bersama-sama mewujudkan internet Indonesia yang ramah dan setara untuk semua! 🇮🇩
