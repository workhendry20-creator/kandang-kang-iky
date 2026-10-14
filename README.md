# 🐑 Kandang Kang Iky — Website Profil & Katalog Peternakan Domba

Website profil resmi, katalog hewan qurban & aqiqah, simulator tabungan berjangka, dan panel kendali peternakan **Kandang Kang Iky** yang berlokasi di Parung, Kabupaten Bogor, Jawa Barat.

---

## 🌟 Fitur Utama Website

1. **Profil & Varietas Domba Unggul (`index.html`)**
   - Menampilkan fokus pembibitan dan penggemukan jenis **Dorper**, **Cross Texel**, dan **Domba Garut**.
   - Penjelasan standar mutu, kesehatan, dan kelayakan syar'i (*poel*, tidak cacat, cukup umur).

2. **Inovasi Nutrisi Pakan Complete Feed**
   - Animasi *marquee* tak terbatas yang menampilkan bahan baku bernutrisi (Daun Singkong, Singkong, Pongkol Singkong, Dedak Padi, Bungkil Kedelai).

3. **Dokumentasi Lapangan & Galeri Interaktif**
   - Showcase foto kandang bersih, higienis, dan modern.
   - Fitur *Image Zoom Modal* responsif dengan dukungan tombol `Esc` dan klik backdrop untuk melihat foto berkualitas tinggi.

4. **Program Dampak Sosial & Kemitraan Lokal**
   - Slider otomatis dokumentasi pemberdayaan warga sekitar dalam penyediaan bahan pakan, pengolahan ransum, dan pemanfaatan pupuk organik.

5. **Kalkulator Simulator Tabungan Qurban (`simulasi.html`)**
   - Perhitungan cicilan/setoran qurban bulanan secara otomatis berdasarkan tipe domba dan tenor yang dipilih (3, 6, 9, 12 bulan).
   - Menghubungkan langsung ke WhatsApp dengan pesan terformat rapi sesuai paket yang dipilih.
   - Terintegrasi dengan parameter URL (contoh: `simulasi.html?type=tanduk`).

6. **Katalog Pricelist Resmi**
   - Tampilan pricelist domba tanduk Garut dan non-tanduk (Cross Texel / Dorper) yang dapat diperbesar dengan sekali klik.

7. **Pusat Kendali Admin Panel (`admin.html`)**
   - Panel pengubah teks banner hero, nomor kontak WhatsApp, Instagram, email, dan harga paket domba.
   - Penyimpanan data lokal (*LocalStorage*) dan generator konfigurasi JSON yang siap disinkronkan ke kode.

---

## 📁 Struktur Direktori Proyek

```text
kandang-kang-iky/
├── .gitignore              # Mengabaikan file OS (.DS_Store), cache, dan editor
├── README.md               # Dokumentasi lengkap proyek
├── index.html              # Halaman beranda utama website
├── simulasi.html           # Halaman kalkulator simulator tabungan qurban
├── admin.html              # Panel kendali admin & pembaruan data
├── css/
│   └── styles.css          # CSS kustom (animasi marquee, scrollbar, modal, dsb.)
├── js/
│   ├── config.js           # Konfigurasi terpusat (kontak, paket domba, storage helper)
│   ├── calculator.js       # Logika kalkulator tabungan & integrasi URL parameter
│   └── admin-panel.js      # Logika form admin panel, toast notifikasi, & ekspor JSON
└── assets/                 # Berkas gambar & media resmi
    ├── hero.jpeg           # Foto banner utama kandang
    ├── logo.jpg            # Logo lingkaran resmi Kandang Kang Iky
    ├── pict1.jpg           # Dokumentasi aktivitas domba 1
    ├── pict2.jpg           # Dokumentasi aktivitas domba 2
    ├── pict3.jpg           # Dokumentasi aktivitas domba 3
    ├── PL1.png             # Pricelist Domba Cross Texel & Dorper
    ├── PL2.png             # Pricelist Domba Tanduk Garut
    ├── bea1.jpg            # Dokumentasi kemitraan warga 1
    ├── bea2.jpg            # Dokumentasi kemitraan warga 2
    └── bea3.jpg            # Dokumentasi kemitraan warga 3
```

---

## 🚀 Cara Menjalankan Proyek

Proyek ini berbasis **Static Web (HTML, CSS, JavaScript)** yang sangat ringan, cepat, dan tidak memerlukan instalasi backend rumit.

### 1. Langsung Lewat Browser
Cukup buka file `index.html` dengan peramban (browser) apa saja (Google Chrome, Safari, Edge, Firefox).

### 2. Menggunakan Local Server (Disarankan untuk testing)
Jika Anda menggunakan ekstensi **Live Server** di VS Code atau menggunakan terminal:
```bash
# Menggunakan npx serve
npx serve .

# Atau menggunakan Python built-in server
python3 -m http.server 8000
```
Buka `http://localhost:8000` pada peramban Anda.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik berstandar SEO & aksesibilitas tinggi.
- **Tailwind CSS**: Styling utilitas modern dan responsif untuk tampilan desktop & mobile.
- **Vanilla CSS (`css/styles.css`)**: Animasi *marquee*, *lift hover*, *glassmorphism*, dan *custom scrollbar*.
- **Alpine.js**: Komponen interaktif ringan untuk navigasi mobile menu, FAQ accordion, dan galeri ulasan konsumen.
- **Vanilla JavaScript Modular**: Pemisahan logika bersih antara konfigurasi (`config.js`), simulator (`calculator.js`), dan admin (`admin-panel.js`).

---

## 📞 Informasi Kontak Resmi

- **Nama Peternakan:** Kandang Kang Iky
- **Lokasi:** Kecamatan Parung, Kabupaten Bogor, Jawa Barat
- **WhatsApp:** [0877-2972-7309](https://wa.me/6287729727309)
- **Instagram:** [@kandangkangiky](https://instagram.com/kandangkangiky)
- **Email:** kandangkangiky@gmail.com
