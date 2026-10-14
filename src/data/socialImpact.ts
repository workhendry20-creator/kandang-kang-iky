import { SocialProgram } from '../types/landing';

export interface SocialImpactMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export const socialImpactMetrics: SocialImpactMetric[] = [
  {
    id: 'petani-mitra',
    label: 'Petani Mitra Lokal',
    value: '15+ Keluarga Tani',
    description: 'Pemasok rutin limbah pertanian segar bernilai tambah ekonomis',
    icon: 'Users'
  },
  {
    id: 'zero-waste',
    label: 'Pengolahan Limbah',
    value: '100% Zero Waste',
    description: 'Seluruh kotoran kandang dikonversi menjadi pupuk organik berkualitas',
    icon: 'Recycle'
  },
  {
    id: 'pemuda-desa',
    label: 'Pemberdayaan Pemuda',
    value: '20+ Tenaga Lokal',
    description: 'Mendapat pelatihan vokasi pakan dan peternakan modern mandiri',
    icon: 'Sparkles'
  },
  {
    id: 'distribusi-qurban',
    label: 'Penyaluran Amanah',
    value: '500+ Hewan / Thn',
    description: 'Terdistribusi tepat sasaran ke masyarakat dan pelosok daerah',
    icon: 'HeartHandshake'
  }
];

export const socialPrograms: SocialProgram[] = [
  {
    id: 'sirkular-pakan',
    title: 'Model Sirkular Bahan Pakan Lokal',
    description: 'Menyerap sisa hasil panen singkong, dedak, dan daun singkong dari petani sekitar Parung. Petani mendapatkan pemasukan tambahan dan peternakan memperoleh bahan baku ransum bernutrisi tinggi.',
    impactMetrics: 'Peningkatan pendapatan petani mitra & pengurangan sampah organik pertanian',
    image: 'assets/bea1.jpg',
    category: 'Ekonomi Sirkular',
    keyPoints: [
      'Pembelian bahan limbah pertanian dengan harga wajar dan pasti',
      'Mengurangi limbah organik yang membusuk di lahan tani',
      'Kemitraan jangka panjang saling menguntungkan petani dan peternak'
    ]
  },
  {
    id: 'pelatihan-pemuda',
    title: 'Pelatihan & Alih Teknologi Peternakan',
    description: 'Memberikan workshop praktis pembuatan Complete Feed, biosekuriti kandang, dan tata laksana pemeliharaan ternak bagi para pemuda di lingkungan sekitar untuk menciptakan lapangan kerja baru di sektor agribisnis.',
    impactMetrics: 'Membuka lapangan kerja riil & mencetak agropreneur muda daerah',
    image: 'assets/bea2.jpg',
    category: 'Edukasi & Vokasi',
    keyPoints: [
      'Pelatihan formulasi pakan fermentasi dan pencacahan bahan baku',
      'Edukasi sanitasi kandang dan penanganan kesehatan domba dasar',
      'Peluang kemitraan pemasaran dan logistik pengantaran domba'
    ]
  },
  {
    id: 'pupuk-organik',
    title: 'Konversi Limbah Pupuk Organik (Zero Waste)',
    description: 'Kotoran domba dan sisa pakan diolah secara terpadu melalui proses dekomposisi terkontrol menjadi pupuk kompos kaya hara, yang kemudian dibagikan dan digunakan kembali oleh petani mitra untuk memupuk tanaman mereka.',
    impactMetrics: 'Kandang 100% ramah lingkungan bebas bau & menyuburkan tanah petani',
    image: 'assets/bea3.jpg',
    category: 'Kelestarian Lingkungan',
    keyPoints: [
      'Menghilangkan polusi bau dan lalat di sekitar area kandang',
      'Menyediakan pupuk organik bermutu tinggi untuk tanah pertanian',
      'Mewujudkan siklus alamiah: dari tanah kembali ke tanah'
    ]
  },
  {
    id: 'kolaborasi-csr',
    title: 'Kemitraan CSR & Qurban Berdampak Sosial',
    description: 'Membuka pintu kolaborasi bagi instansi, perusahaan, yayasan, dan komunitas untuk menyalurkan program CSR qurban dan aqiqah ke pelosok daerah yang minim konsumsi daging, dipantau secara transparan dan amanah.',
    impactMetrics: 'Penyaluran daging qurban berkeadilan sosial bagi keluarga prasejahtera',
    image: 'assets/hero.jpeg',
    category: 'Kolaborasi Sosial & CSR',
    keyPoints: [
      'Dokumentasi video dan laporan pertanggungjawaban lengkap bagi mitra',
      'Penyembelihan higienis berstandar syariat Islam',
      'Pemetaan distribusi tepat sasaran ke wilayah pelosok yang membutuhkan'
    ]
  }
];

export const socialImpactData = {
  metrics: socialImpactMetrics,
  programs: socialPrograms
};

export default socialImpactData;
