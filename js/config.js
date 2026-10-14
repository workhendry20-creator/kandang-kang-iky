/**
 * Kandang Kang Iky - Global Configuration & Utilities
 * Menyimpan konfigurasi umum, data katalog hewan, dan helper fungsi
 */

const STORAGE_KEY = 'kandang_kang_iky_config';

const DEFAULT_CONFIG = {
    brandName: "Kandang Kang Iky",
    tagline: "Pusat Penggemukan & Pembibitan Domba Unggul",
    heroTitle: "Cari Domba Sehat & Sesuai Syariat?",
    heroSubtitle: "Kandang Kang Iky Solusinya!",
    heroDescription: "Menyediakan domba qurban dan aqiqah berkualitas tinggi, dirawat dengan amanah dan terpercaya di Parung, Bogor.",
    whatsapp: "6287729727309",
    whatsappDisplay: "0877-2972-7309",
    instagram: "kandangkangiky",
    instagramUrl: "https://instagram.com/kandangkangiky",
    email: "kandangkangiky@gmail.com",
    address: "Kecamatan Parung, Kabupaten Bogor, Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Kecamatan+Parung+Bogor",
    priceQurban: "Mulai Rp 2.500.000",
    priceAqiqah: "Mulai Rp 1.900.000",
    dombaPackages: [
        {
            id: "nontanduk",
            nama: "Domba Non-Tanduk (Ekonomis)",
            bobot: "20 - 25 kg",
            harga: 2500000,
            tipe: "nontanduk",
            badge: "Pilihan Ekonomis",
            deskripsi: "Daging padat alami, rasio karkas tinggi, ramah di kantong."
        },
        {
            id: "tanduk",
            nama: "Domba Tanduk Garut (Standar)",
            bobot: "26 - 35 kg",
            harga: 3800000,
            tipe: "tanduk",
            badge: "Paling Diminati",
            deskripsi: "Postur gagah bertanduk artistik khas Garut, lincah & sehat."
        },
        {
            id: "texel",
            nama: "Domba Cross Texel / Dorper (Premium)",
            bobot: "36 - 45 kg",
            harga: 4800000,
            tipe: "texel",
            badge: "Kualitas Unggul",
            deskripsi: "Genetik daging padat tebal, persentase daging maksimal."
        },
        {
            id: "giant",
            nama: "Domba Super Giant (Jumbo)",
            bobot: "46 - 60+ kg",
            harga: 6500000,
            tipe: "giant",
            badge: "Eksklusif Jumbo",
            deskripsi: "Bobot spektakuler, persembahan qurban terbaik dan istimewa."
        }
    ]
};

/**
 * Mengambil konfigurasi aktif (dari localStorage jika ada, atau fallback ke default)
 */
function getAppConfig() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return { ...DEFAULT_CONFIG, ...parsed };
        }
    } catch (e) {
        console.warn('Gagal membaca data dari localStorage, menggunakan default:', e);
    }
    return DEFAULT_CONFIG;
}

/**
 * Menyimpan konfigurasi baru ke localStorage
 */
function saveAppConfig(newConfig) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
        return true;
    } catch (e) {
        console.error('Gagal menyimpan data ke localStorage:', e);
        return false;
    }
}

/**
 * Reset konfigurasi ke pengaturan awal
 */
function resetAppConfig() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (e) {
        console.error('Gagal me-reset localStorage:', e);
        return false;
    }
}

/**
 * Format angka ke format mata uang Rupiah (IDR)
 * Contoh: 2500000 -> "Rp 2.500.000"
 */
function formatRupiah(angka) {
    if (isNaN(angka)) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka).replace(/\u00a0/g, ' ');
}

// Ekspor ke window agar dapat diakses di seluruh skrip browser
window.KandangConfig = {
    STORAGE_KEY,
    DEFAULT_CONFIG,
    getAppConfig,
    saveAppConfig,
    resetAppConfig,
    formatRupiah
};
