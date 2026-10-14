# 📋 Task Breakdown & Agent Execution Rules: Kandang Kang Iky Enhancement

## 🎯 Project Goal
Meningkatkan landing page Kandang Kang Iky (`index.html`) untuk menonjolkan 3 pilar utama:
1. **Penyediaan & Tabungan Domba** (Komersial B2C / Qurban & Aqiqah)
2. **Konsultasi Peternakan Modern** (Kepakaran Insinyur Peternakan & Formulasi Complete Feed)
3. **Kolaborasi & Impact Sosial** (Pemberdayaan Peternakan Lokal & Zero Waste Organic)

---

## 🛑 Agent Operating Rules (STRICT)

1. **Vanilla HTML/JS Architecture Only**:
   - DILARANG membuat file React (`.tsx`, `.jsx`) atau menginstal modul build baru.
   - Semua penambahan komponen UI dilakukan langsung di dalam file `index.html` menggunakan kelas Tailwind CSS dan Lucide Icons / Font Awesome yang sudah terpasang.

2. **Preserve Existing Theme & Locked Features**:
   - **Colors**: DILARANG mengubah warna utama (Emerald/Forest Green `#0F5132`, Accent Yellow/Gold, Neutral Slate/Gray).
   - **🔒 UNTOUCHED FEATURES**: DILARANG MENGUBAH / MENGHAPUS integrasi Google Sheets (`Log Titipan`, `Katalog Tabungan`, `Kalkulator/Skema Setoran`). Fitur-fitur ini WAJIB tetap berjalan normal tanpa error.

3. **Output Token Economy (Hemat Token)**:
   - Berikan respon SINGKAT & PADAT (Maksimal 3-5 kalimat per konfirmasi/laporan).
   - Jangan tampilkan ulang seluruh isi file HTML jika hanya mengubah beberapa baris; cukup tunjukkan diff atau snippet komponen yang diperbarui.
   - Tidak perlu memberikan penjelasan teoretis panjang lebar.

4. **Self-Verification Protocol (Cek Hasil)**:
   - Sebelum menandai task selesai (`[x]`), pastikan struktur tag HTML tertutup dengan benar, tidak ada sintaks JavaScript broken di console, dan tampilan responsive (Mobile & Desktop).
   - Konfirmasikan bahwa fitur lama (seperti Log Titipan/Katalog Domba) tetap berfungsi normal.

---

## 🚀 Git & Auto-Deployment Protocol (Vercel Integration)

1. **Mandatory Commit & Push per Task**:
   - Setelah setiap task selesai dibuat dan lolos uji verifikasi, Agent WAJIB langsung melakukan **Git Commit** dan **Git Push** ke branch utama (`main` / `master`).
   - Gunakan format pesan commit yang jelas:
     - `fix: cleanup tsx files and prepare index.html structure`
     - `feat: update navbar, hero section, and dynamic whatsapp router (Task 1)`
     - `feat: add expertise and consultation sections (Task 2)`
     - `feat: add social impact section and complete navigation links (Task 3)`

2. **Automated Vercel Deployment Check**:
   - Pastikan setiap *push* ke GitHub berhasil memicu *Automatic Deployment* di Vercel tanpa ada error.

3. **Short Deployment Status Reporting**:
   - Pada setiap laporan akhir task, Agent wajib mencantumkan status Git & Deploy secara singkat:
     > ✅ **Task X Selesai & Terverifikasi.**
     > 📌 **Commit:** `feat: ...`
     > 🚀 **Git Status:** Pushed to GitHub (`main`) → Auto-deploying to Vercel.
     > Ready to proceed to Task Y?

---

## 🛠️ Step-by-Step Task Breakdown

### Phase 0: Cleanup & Workspace Preparation
- [ ] **Task 0.1**: Hapus semua file `.tsx` / `.ts` / folder React baru yang tidak sengaja dibuat di iterasi sebelumnya (jika ada).
- [ ] **Task 0.2**: Pastikan repositori bersih dan fokus penuh pada `index.html` serta aset lokal pendukung.

---

### Phase 1: Navigation, Hero & WhatsApp Router (`index.html`)
- [ ] **Task 1.1**: Update `<nav>` di `index.html`:
  - Tambahkan link navigasi: `#konsultasi` ("Konsultasi Insinyur") dan `#dampak-sosial` ("Dampak Sosial").
  - PERTAHANKAN link navigasi lama (Log Titipan, Tabungan, Katalog).
- [ ] **Task 1.2**: Update Section Hero di `index.html`:
  - Perbarui *headline* & *subheadline* untuk mencakup elemen Insinyur Peternakan, Konsultasi, dan Dampak Sosial.
  - Tambahkan Dual/Triple CTA Buttons (misal: `Beli/Tabung Domba`, `Konsultasi Peternakan`, `Kolaborasi Sosial`).
  - Pertahankan visual background & style yang ada.
- [ ] **Task 1.3**: Buat script JavaScript sederhana di bagian bawah `index.html` untuk fungsi WhatsApp Router dinamis (`sendWhatsapp(intent)`):
  - `intent === 'buy'` -> Pesan seputar pembelian/tabungan domba.
  - `intent === 'consult'` -> Pesan seputar konsultasi sains peternakan.
  - `intent === 'social'` -> Pesan seputar program kemitraan/kolaborasi CSR.

---

### Phase 2: Expertise & Consultation Sections (`index.html`)
- [ ] **Task 2.1**: Tambahkan Section Kepakaran Insinyur (`<section id="keahlian">`):
  - Foto profil: Gunakan gambar profil yang ada di aset (`profile.jpg` atau dari folder assets).
  - Data Diri: **Ir. Rizky Ayuna Budiman, S.Pt** (Insinyur Peternakan & Penggerak Sosial).
  - Highlight keunggulan sains: Formulasi *Complete Feed* berbasis limbah pertanian, standar *Triple Health Check*, dan riset genetik (Dorper, Cross Texel, Garut).
- [ ] **Task 2.2**: Tambahkan Section Layanan Konsultasi (`<section id="konsultasi">`):
  - Buat Grid Card Layanan: *Formulasi Pakan & Nutrisi*, *Audit & Design Management Kandang*, dan *Pelatihan Agropreneur*.
  - Setiap card memiliki tombol CTA yang memanggil fungsi `sendWhatsapp('consult')`.

---

### Phase 3: Social Impact Section & Footer Integration (`index.html`)
- [ ] **Task 3.1**: Tambahkan Section Dampak Sosial (`<section id="dampak-sosial">`):
  - Tampilkan 3 pilar gerakan: *Pemberdayaan Peternak Lokal*, *Sirkular Ekonomi & Zero Waste Organic*, dan *Edukasi Pemuda*.
  - Sertakan counter/metrik statistik dampak sosial (misal: Jumlah peternak binaan, tonase limbah pertanian terolah).
  - Sediakan tombol CTA khusus kolaborasi: `sendWhatsapp('social')`.
- [ ] **Task 3.2**: Perbarui Footer untuk memastikan alamat, kontak, dan tautan sosial media mencakup seluruh pilar layanan.

---

### Phase 4: Audit & Verification
- [ ] **Task 4.1**: Audit keterbacaan & alur scroll dari Hero hingga Footer. Pastikan urutan section intuitif:
  `Hero -> Expertise/Authority -> Catalog (Beli/Nabung) -> Consultation -> Social Impact -> Log Titipan -> Footer`
- [ ] **Task 4.2**: Jalankan verifikasi responsivitas UI di tampilan mobile (viewport 375px) dan desktop (viewport 1440px).
- [ ] **Task 4.3**: Pastikan integrasi Google Sheets (Log Titipan) tetap berjalan 100% tanpa error di console.

---

## 📢 Reporting Format for Agent
Di setiap akhir pengerjaan *sub-task*, Agent HARUS memberikan respon singkat dengan format berikut:

```text
✅ [Task ID] Selesai
- File diubah/dibuat: index.html
- Status Git & Deploy: Pushed to main -> Auto-deploying to Vercel
- Hasil Verifikasi: Pass (No Broken HTML / Google Sheets Log OK)
- Next Task: [Task ID selanjutnya]