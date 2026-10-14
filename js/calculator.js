/**
 * Kandang Kang Iky - Tabungan & Simulasi Qurban Calculator
 * Logika perhitungan cicilan / tabungan qurban berjangka otomatis
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ambil konfigurasi domba aktif dari window.KandangConfig jika tersedia
    const config = (window.KandangConfig && typeof window.KandangConfig.getAppConfig === 'function')
        ? window.KandangConfig.getAppConfig()
        : {
            whatsapp: "6287729727309",
            dombaPackages: [
                { id: "nontanduk", nama: "Domba Non-Tanduk (Ekonomis)", bobot: "20-25 kg", harga: 2500000, tipe: "nontanduk" },
                { id: "tanduk", nama: "Domba Tanduk Garut (Standar)", bobot: "26-35 kg", harga: 3800000, tipe: "tanduk" },
                { id: "texel", nama: "Domba Cross Texel / Dorper (Premium)", bobot: "36-45 kg", harga: 4800000, tipe: "texel" },
                { id: "giant", nama: "Domba Super Giant (Jumbo)", bobot: "46-60+ kg", harga: 6500000, tipe: "giant" }
            ]
        };

    const dombaSelect = document.getElementById('pilih-domba');
    const tenorSelect = document.getElementById('pilih-tenor');
    const hasilElement = document.getElementById('hasil-cicilan');
    const totalElement = document.getElementById('total-harga');
    const waButton = document.getElementById('btn-wa-kalkulator');
    const ringkasanPaket = document.getElementById('ringkasan-paket');

    if (!dombaSelect || !tenorSelect) return;

    // Helper format rupiah
    const formatRp = (angka) => {
        if (window.KandangConfig && typeof window.KandangConfig.formatRupiah === 'function') {
            return window.KandangConfig.formatRupiah(angka);
        }
        return 'Rp ' + Number(angka).toLocaleString('id-ID');
    };

    // Render opsi domba ke dalam element <select>
    dombaSelect.innerHTML = config.dombaPackages.map(pkg => {
        return `<option value="${pkg.harga}" data-id="${pkg.id}" data-nama="${pkg.nama}" data-bobot="${pkg.bobot || ''}">
            ${pkg.nama} (${pkg.bobot ? pkg.bobot + ' — ' : ''}${formatRp(pkg.harga)})
        </option>`;
    }).join('');

    // Baca parameter dari URL (misal: ?type=nontanduk atau ?type=tanduk atau ?tenor=6)
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = (urlParams.get('type') || '').toLowerCase();
    const tenorParam = urlParams.get('tenor');

    if (typeParam) {
        for (let i = 0; i < dombaSelect.options.length; i++) {
            const opt = dombaSelect.options[i];
            const optId = (opt.getAttribute('data-id') || '').toLowerCase();
            const optText = opt.text.toLowerCase();
            if (optId.includes(typeParam) || optText.includes(typeParam)) {
                dombaSelect.selectedIndex = i;
                break;
            }
        }
    }

    if (tenorParam) {
        for (let i = 0; i < tenorSelect.options.length; i++) {
            if (tenorSelect.options[i].value === tenorParam) {
                tenorSelect.selectedIndex = i;
                break;
            }
        }
    }

    // Fungsi kalkulasi simulasi tabungan
    function hitungSimulasi() {
        const selectedOption = dombaSelect.options[dombaSelect.selectedIndex];
        if (!selectedOption) return;

        const hargaTotal = parseInt(dombaSelect.value, 10) || 0;
        const tenorBulan = parseInt(tenorSelect.value, 10) || 1;
        const namaPaket = selectedOption.getAttribute('data-nama') || selectedOption.text.split(' (')[0];
        const bobotPaket = selectedOption.getAttribute('data-bobot') || '';

        // Rumus cicilan: Harga Total / Tenor (Bulan)
        const estimasiCicilan = Math.ceil(hargaTotal / tenorBulan);

        // Tampilkan hasil ke DOM
        if (hasilElement) {
            hasilElement.innerText = `${formatRp(estimasiCicilan)} / bulan`;
        }

        if (totalElement) {
            totalElement.innerText = formatRp(hargaTotal);
        }

        if (ringkasanPaket) {
            ringkasanPaket.innerText = `${namaPaket} ${bobotPaket ? '(' + bobotPaket + ')' : ''} — Tenor ${tenorBulan} Bulan`;
        }

        // Susun teks WhatsApp yang ramah dan siap dikirim
        const waNumber = config.whatsapp || "6287729727309";
        const pesanWA = `Halo Kang Iky, saya ingin mendaftar program *Tabungan Qurban 2026* di Kandang Kang Iky:

📌 *Pilihan:* ${namaPaket}
⚖️ *Estimasi Bobot:* ${bobotPaket || 'Sesuai Standar'}
💵 *Total Harga:* ${formatRp(hargaTotal)}
🗓️ *Rencana Tenor:* ${tenorBulan} Bulan
💰 *Estimasi Setoran:* ${formatRp(estimasiCicilan)} / bulan

Mohon info nomor rekening resmi dan panduan pendaftarannya. Terima kasih!`;

        if (waButton) {
            waButton.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesanWA)}`;
        }
    }

    // Pasang listener pada perubahan select box
    dombaSelect.addEventListener('change', hitungSimulasi);
    tenorSelect.addEventListener('change', hitungSimulasi);

    // Jalankan kalkulasi saat halaman selesai dimuat
    hitungSimulasi();
});