import { ExpertProfile } from '../types/landing';

export const authorProfile: ExpertProfile = {
  name: 'Kang Iky',
  formalName: 'Ir. Rizky Ayuna Budiman, S.Pt',
  degrees: 'Insinyur Peternakan (Ir.) & Sarjana Peternakan (S.Pt)',
  title: 'Insinyur Peternakan & Praktisi Kandang Modern',
  role: 'Founder & Kepala Riset Peternakan',
  bio: 'Praktisi dan Insinyur Peternakan berdedikasi tinggi yang mengintegrasikan pendekatan sains dan prinsip syariat dalam tata kelola peternakan ruminansia. Berpengalaman dalam riset formulasi Complete Feed berbasis limbah pertanian lokal, seleksi genetik domba unggul (Dorper, Cross Texel, Garut), dan perancangan ekosistem kandang terpadu bebas bau di Parung, Bogor.',
  photo: 'assets/profile.jpg',
  credentials: [
    'Sarjana Peternakan (S.Pt) & Lulusan Program Profesi Insinyur (Ir.)',
    'Peneliti & Formulator Ransum Pakan Ruminansia Complete Feed',
    'Praktisi Biosekuriti Kandang Sehat & Sertifikasi Kelayakan Syar\'i',
    'Pelopor Ekosistem Peternakan Sirkular Berkelanjutan (Zero Waste)'
  ],
  metrics: [
    { label: 'Pengalaman Ternak', value: '10+ Tahun', description: 'Dedikasi di bidang ruminansia kecil' },
    { label: 'Kapasitas Kandang', value: '500+ Ekor', description: 'Penggemukan dan pembibitan aktif' },
    { label: 'Tingkat Kepuasan', value: '99.8%', description: 'Pekurban & mitra peternak' },
    { label: 'Pengolahan Limbah', value: '100% Zero Waste', description: 'Diolah menjadi pupuk organik bermanfaat' }
  ],
  specialties: [
    'Riset & Formulasi Complete Feed Nutrisi Presisi',
    'Manajemen Pemuliaan & Silang Genetik Domba Unggul',
    'Desain Kandang Ergonomis & Bebas Polusi Bau',
    'Konsultasi Bisnis & Manajemen Peternakan Domba'
  ]
};

export default authorProfile;
