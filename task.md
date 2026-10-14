# 📋 Task Breakdown & Agent Execution Rules: Kandang Kang Iky Enhancement

## 🎯 Project Goal
Meningkatkan landing page Kandang Kang Iky untuk menonjolkan 3 pilar utama:
1. **Penyediaan/Tabungan Domba** (E-Commerce / B2C Komersial)
2. **Konsultasi Peternakan Modern** (Latar Belakang Insinyur Peternakan)
3. **Kolaborasi & Impact Sosial** (Penggerak Pemberdayaan Masyarakat)

---

## 🛑 Agent Operating Rules (STRICT)

1. **Preserve Existing Theme & Design System**:
   - DILARANG MENGUBAH warna utama (Emerald/Forest Green, Accent Yellow/Gold, Neutral Dark/Light Slate).
   - DILARANG MENGUBAH struktur folder dasar atau membuang komponen yang sudah ada (misal: sistem log Google Sheets, katalog tabungan).
   - Pertahankan skema Tailwind CSS dan icon set (`lucide-react`) yang sedang digunakan.

2. **Output Token Economy (Hemat Token)**:
   - Berikan respon SINGKAT & PADAT (Maksimal 3-5 kalimat per konfirmasi/laporan).
   - Jangan tampilkan ulang seluruh isi file jika hanya mengubah beberapa baris; cukup tunjukkan diff atau fungsi/komponen yang diperbarui.
   - Tidak perlu memberikan penjelasan teoretis panjang lebar.

3. **Self-Verification Protocol (Cek Hasil)**:
   - Sebelum menandai task selesai (`[x]`), jalankan `npm run dev` atau `npm run build` / type-check (`tsc --noEmit` jika ada) untuk memastikan tidak ada *breaking changes* / *syntax error*.
   - Konfirmasikan bahwa fitur lama (seperti Log Titipan/Katalog Domba) tetap berfungsi normal.

---

## 🚀 Git & Auto-Deployment Protocol (Vercel Integration)

1. **Mandatory Commit & Push per Task**:
   - Setelah setiap task selesai dibuat dan lolos uji verifikasi (`build` / `type-check`), Agent WAJIB langsung melakukan **Git Commit** dan **Git Push** ke branch utama (`main` / `master`).
   - Gunakan format pesan commit yang jelas dan terstruktur:
     - `feat: add data schema for consultation & social impact (Task 1)`
     - `feat: add consultation section & dynamic whatsapp router (Task 2)`
     - `refactor: update navbar & hero cta for multi-value proposition (Task 3)`

2. **Automated Vercel Deployment Check**:
   - Pastikan setiap *push* ke GitHub berhasil memicu *Automatic Deployment* di Vercel tanpa ada error pada proses *build*.
   - Jika *build* di Vercel gagal, Agent wajib memprioritaskan perbaikan bug (*fix*) sebelum melanjutkan ke task berikutnya.

3. **Short Deployment Status Reporting**:
   - Pada setiap laporan akhir task, Agent wajib mencantumkan status Git & Deploy secara singkat.
   - Contoh format laporan singkat Agent:
     > ✅ **Task X Selesai & Terverifikasi.**
     > 📌 **Commit:** `feat: ...`
     > 🚀 **Git Status:** Pushed to GitHub (`main`) → Auto-deploying to Vercel.
     > Ready to proceed to Task Y?

## 🛠️ Step-by-Step Task Breakdown

### Phase 1: Data Architecture & Types (Non-Breaking)
- [ ] **Task 1.1**: Buat type definitions baru di `src/types/landing.ts` untuk:
  - `ConsultationService` (id, title, description, targetAudience, icon)
  - `SocialProgram` (id, title, impactMetrics, description, image)
  - `ExpertProfile` (name, title, bio, credentials, metrics)
  - `ContactIntent` (`'buy' | 'consult' | 'social'`)
- [ ] **Task 1.2**: Buat file data statis `src/data/consultationData.ts` yang berisi daftar paket/layanan konsultasi insinyur.
- [ ] **Task 1.3**: Buat file data statis `src/data/socialImpactData.ts` yang berisi program pemberdayaan masyarakat & statistik dampak.
- [ ] **Task 1.4**: Buat utilitas helper `src/utils/whatsapp.ts` untuk me-generate link WhatsApp dinamis berdasarkan `ContactIntent` dan template pesan yang relevan.

---

### Phase 2: Navigation & Hero Refactoring
- [ ] **Task 2.1**: Update `src/components/Navbar.tsx`:
  - Tambahkan link navigasi: `Konsultasi Insinyur` dan `Dampak Sosial`.
  - Update tombol CTA header agar mendukung pilihan *intent* (Modal/Dropdown sederhana atau redirect WA langsung).
- [ ] **Task 2.2**: Refactor `src/components/Hero.tsx`:
  - Perbarui *headline* dan *subheadline* untuk mencakup elemen Insinyur Peternakan & Pemberdayaan Sosial.
  - Tambahkan Dual/Triple CTA Button (Misal: `Pilih Domba`, `Konsultasi Peternakan`, `Kolaborasi CSR`).
  - Pertahankan visual background & style yang ada.

---

### Phase 3: New Feature Components Development
- [ ] **Task 3.1**: Buat komponen `src/components/ExpertiseSection.tsx`:
  - Menampilkan profil Kang Iky sebagai Insinyur Peternakan.
  fotonya ambil dari folder assets yang profile.jpg
  dengan data diri:
  Nama: Ir. Rizky Ayuna Budiman, S.Pt
  - Highlight keunggulan sains (pakan formulasi, riset genetik, tata kelola kandang).
  - Integrasikan ke `src/App.tsx` / `src/pages/Home.tsx`.
- [ ] **Task 3.2**: Buat komponen `src/components/ConsultationSection.tsx`:
  - Tampilkan card-card layanan konsultasi (Formulasi Pakan, Audit Kandang, Training).
  - Setiap card memiliki CTA button langsung ke WhatsApp dengan preset message konsultasi.
  - Integrasikan ke `App.tsx`.
- [ ] **Task 3.3**: Buat komponen `src/components/SocialImpactSection.tsx`:
  - Tampilkan pilar pemberdayaan peternak lokal & pengolahan limbah (zero waste).
  - Sertukan counter/metrik statistik dampak sosial.
  - Sediakan CTA khusus kolaborasi/CSR.
  - Integrasikan ke `App.tsx`.

---

### Phase 4: Integration, Audit & Verification
- [ ] **Task 4.1**: Lakukan audit keterbacaan & alur navigasi dari Hero hingga Footer. Pastikan urutan section logis:
  `Hero -> Expertise/Authority -> Catalog (Beli/Nabung) -> Consultation -> Social Impact -> Log Titipan -> Footer`
- [ ] **Task 4.2**: Jalankan verifikasi responsivitas UI (Mobile & Desktop).
- [ ] **Task 4.3**: Jalankan build check (`npm run build` atau `npx tsc`) dan pastikan 0 error.

---

## 📢 Reporting Format for Agent
Di setiap akhir pengerjaan *sub-task*, Agent HARUS memberikan respon singkat dengan format berikut:

```text
✅ [Task ID] Selesai
- File diubah/dibuat: [path/file.ext]
- Hasil Verifikasi: Pass (Build OK / No Type Errors)
- Status Ringkas: [1 kalimat penjelas singkat]
- Next Task: [Task ID selanjutnya]
```