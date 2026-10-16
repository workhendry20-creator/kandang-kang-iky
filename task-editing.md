# 📋 Task Breakdown: Modular Multi-Page Refactoring (Kandang Kang Iky)

## 🎯 Goal
Mengubah struktur landing page dari Single Long Page menjadi **Modular Multi-Page Architecture** agar halaman utama (`index.html`) tidak terlalu ramai dan user bisa langsung memilih halaman sesuai kebutuhan.

---

## 📁 Target Page Structure
1. `index.html` -> Gateway Utama (Hero & 3 Card Pilihan Intent)
2. `domba.html` -> Halaman Katalog Produk & Tabungan Domba
3. `konsultasi.html` -> Halaman Konsultasi Insinyur & Sains Peternakan
4. `dampak-sosial.html` -> Halaman Program Pemberdayaan & Kolaborasi CSR

---

## 🛠️ Step-by-Step Task Breakdown

### Phase 1: File Split & Page Creation
- [x] **Task 1.1**: Buat `domba.html` - Pindahkan section Katalog Domba & Kalkulator Tabungan ke file ini.
- [x] **Task 1.2**: Buat `konsultasi.html` - Pindahkan section Kepakaran Insinyur & Card Layanan Konsultasi ke file ini.
- [x] **Task 1.3**: Buat `dampak-sosial.html` - Pindahkan section Program Pemberdayaan & Impact Counter ke file ini.

### Phase 2: Gateway Refactoring (`index.html`)
- [x] **Task 2.1**: Sederhanakan `index.html` hanya berisi:
  - Header Navbar
  - Hero Section (Headline Insinyur & Penggerak Sosial)
  - **3 Hero Cards (Intent Selector)**:
    1. Card 1: Jual & Tabung Domba -> Link ke `domba.html`
    2. Card 2: Konsultasi Peternakan -> Link ke `konsultasi.html`
    3. Card 3: Kolaborasi & CSR -> Link ke `dampak-sosial.html`
  - Ringkasan Singkat & Footer
- [x] **Task 2.2**: Update Navbar & Footer di SEMUA file HTML agar link navigasinya konsisten menunjuk ke file `.html` yang sesuai.

### Phase 3: Verification & Push
- [x] **Task 3.1**: Uji alur perpindahan halaman (routing) dari `index.html` ke halaman turunan.
- [x] **Task 3.2**: Git commit & push to GitHub -> Auto-deploying to Vercel.