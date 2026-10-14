import { ConsultationService } from '../types/landing';

export const consultationServices: ConsultationService[] = [
  {
    id: 'formulasi-pakan',
    title: 'Formulasi Pakan Complete Feed',
    description: 'Penyusunan rasio nutrisi (Karbohidrat, Protein, Serat, Mineral) memanfaatkan limbah pertanian lokal. Meningkatkan ADG (Average Daily Gain) bobot domba secara maksimal tanpa bahan kimia sintetis.',
    targetAudience: 'Peternak mandiri, pengelola kandang penggemukan, dan investor pakan ternak',
    icon: 'Wheat',
    features: [
      'Analisis kandungan bahan baku lokal sekitar peternakan',
      'Penyusunan resep ransum Complete Feed spesifik per fase bobot',
      'Optimasi rasio FCR (Feed Conversion Ratio) hemat biaya',
      'Panduan fermentasi, pengeringan, dan penyimpanan pakan tahan lama'
    ],
    duration: 'Sesi Konsultasi & Pendampingan Formulasi',
    priceNote: 'Konsultasi 1-on-1 bersama Insinyur Peternakan'
  },
  {
    id: 'audit-kandang',
    title: 'Audit Kandang & Biosekuriti Higienis',
    description: 'Konsultasi tata letak konstruksi kandang panggung, sirkulasi udara optimal, manajemen kebersihan bebas bau, pencegahan penyakit menular, serta penanganan sanitasi harian.',
    targetAudience: 'Pemula yang hendak membangun kandang, atau peternak yang ingin merenovasi standar biosekuriti',
    icon: 'ShieldCheck',
    features: [
      'Evaluasi denah kandang, pencahayaan alami, & ventilasi angin',
      'Protokol desinfeksi, karantina hewan baru, dan biosekuriti',
      'Desain tempat pakan ergonomis minim pakan tercecer',
      'Sistem pemisahan kotoran padat dan urin tanpa aroma menyengat'
    ],
    duration: 'Audit Virtual / Kunjungan Lapangan',
    priceNote: 'Solusi kandang ramah lingkungan sekitar pemukiman'
  },
  {
    id: 'pendampingan-bisnis',
    title: 'Mentoring Bisnis Qurban & Pembibitan',
    description: 'Pendampingan komprehensif mulai dari pemilihan bakalan unggul (Garut, Texel, Dorper), kalkulasi pemeliharaan periodik, manajemen risiko mortalitas, hingga strategi pemasaran musim qurban.',
    targetAudience: 'Calon agropreneur, kelompok tani ternak, dan profesional yang ingin terjun ke bisnis peternakan',
    icon: 'GraduationCap',
    features: [
      'Standarisasi seleksi bibit poel dan sehat syar\'i',
      'Penyusunan proyeksi finansial & cashflow peternakan',
      'Strategi program tabungan qurban berjangka dan pemasaran digital',
      'SOP penanganan hewan saat pengantaran (Free Ongkir aman & minim stres)'
    ],
    duration: 'Program Mentoring Terstruktur',
    priceNote: 'Pendampingan langsung dari hulu hingga hilir'
  }
];

export const consultationData = consultationServices;
export default consultationServices;
