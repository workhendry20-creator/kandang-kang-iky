// Data default jika database belum terhubung (Nanti disinkronkan dengan admin-panel.js)
const defaultDombaData = [
    { id: "ekonomis", nama: "Tipe Ekonomis (20-25 kg)", harga: 2500000 },
    { id: "premium", nama: "Tipe Premium (26-35 kg)", harga: 3800000 },
    { id: "giant", nama: "Tipe Super Giant (36-50+ kg)", harga: 5500000 }
];

// Fungsi format angka ke Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Fungsi utama kalkulator
function hitungSimulasi() {
    const dombaSelect = document.getElementById('pilih-domba');
    const tenorSelect = document.getElementById('pilih-tenor');
    const hasilElement = document.getElementById('hasil-cicilan');
    const wakatotiButton = document.getElementById('btn-wa-kalkulator');

    if (!dombaSelect || !tenorSelect || !hasilElement) return;

    // Ambil harga dari opsi yang dipilih
    const hargaSelected = parseInt(dombaSelect.value);
    const tipeNama = dombaSelect.options[dombaSelect.selectedIndex].text.split(' - ')[0];
    const tenorBulan = parseInt(tenorSelect.value);

    // Rumus Matematika: $ Cicilan = Harga / Tenor $
    const estimasiCicilan = Math.round(hargaSelected / tenorBulan);

    // Tampilkan hasil ke layar
    hasilElement.innerText = `${formatRupiah(estimasiCicilan)} / bulan`;

    // Update teks otomatis untuk tombol WhatsApp
    const pesanWA = encodeURIComponent(`Halo Kang Iky, saya sudah mencoba simulasi di website dan tertarik ikutan program Tabungan/Cicilan untuk *${tipeNama}* dengan tenor *${tenorBulan} Bulan* (${formatRupiah(estimasiCicilan)}/bln). Mohon info pendaftarannya ya!`);
    wakatotiButton.href = `https://wa.me/628123456789?text=${pesanWA}`;
}

// Inisialisasi awal saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const dombaSelect = document.getElementById('pilih-domba');
    
    // Render opsi domba ke dalam select HTML
    dombaSelect.innerHTML = defaultDombaData.map(d => 
        `<option value="${d.harga}">${d.nama} - ${formatRupiah(d.harga)}</option>`
    ).join('');

    // Jalankan hitungan pertama kali
    hitungSimulasi();

    // Pasang event listener agar hitungan berubah otomatis saat user mengganti pilihan
    dombaSelect.addEventListener('change', hitungSimulasi);
    tenorSelect.addEventListener('change', hitungSimulasi);
});