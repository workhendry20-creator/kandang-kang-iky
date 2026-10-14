/**
 * Kandang Kang Iky - Admin Panel Script
 * Mengelola konten website, harga paket domba, kontak, dan sinkronisasi JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    const configManager = window.KandangConfig;
    if (!configManager) {
        console.error('KandangConfig tidak ditemukan!');
        return;
    }

    let currentConfig = configManager.getAppConfig();

    // DOM Elements - Form Inputs
    const inputHeroTitle = document.getElementById('inputHeroTitle');
    const inputHeroSubtitle = document.getElementById('inputHeroSubtitle');
    const inputHeroDescription = document.getElementById('inputHeroDescription');
    const inputWhatsapp = document.getElementById('inputWhatsapp');
    const inputInstagram = document.getElementById('inputInstagram');
    const inputEmail = document.getElementById('inputEmail');
    const inputAddress = document.getElementById('inputAddress');
    const inputPriceQurban = document.getElementById('inputPriceQurban');
    const inputPriceAqiqah = document.getElementById('inputPriceAqiqah');

    // DOM Elements - Packages Container
    const packagesContainer = document.getElementById('packagesContainer');

    // DOM Elements - JSON Output & Actions
    const jsonOutput = document.getElementById('jsonOutput');
    const btnSave = document.getElementById('btnSave');
    const btnReset = document.getElementById('btnReset');
    const btnCopy = document.getElementById('btnCopy');
    const toastNotification = document.getElementById('toastNotification');

    /**
     * Tampilkan Toast Notifikasi
     */
    function showToast(message, isError = false) {
        if (!toastNotification) return;
        toastNotification.textContent = message;
        toastNotification.className = `fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-xs font-semibold shadow-xl transition-all duration-300 z-50 ${
            isError ? 'bg-red-600 text-white' : 'bg-[#1E3E2B] text-white'
        }`;
        toastNotification.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            toastNotification.classList.add('opacity-0', 'pointer-events-none');
        }, 2500);
    }

    /**
     * Muat data konfigurasi ke dalam form
     */
    function loadConfigToForm(cfg) {
        if (inputHeroTitle) inputHeroTitle.value = cfg.heroTitle || '';
        if (inputHeroSubtitle) inputHeroSubtitle.value = cfg.heroSubtitle || '';
        if (inputHeroDescription) inputHeroDescription.value = cfg.heroDescription || '';
        if (inputWhatsapp) inputWhatsapp.value = cfg.whatsapp || '';
        if (inputInstagram) inputInstagram.value = cfg.instagram || '';
        if (inputEmail) inputEmail.value = cfg.email || '';
        if (inputAddress) inputAddress.value = cfg.address || '';
        if (inputPriceQurban) inputPriceQurban.value = cfg.priceQurban || '';
        if (inputPriceAqiqah) inputPriceAqiqah.value = cfg.priceAqiqah || '';

        renderPackages(cfg.dombaPackages || []);
        updateJSONOutput(cfg);
    }

    /**
     * Render daftar paket domba ke antarmuka kartu / tabel
     */
    function renderPackages(packages) {
        if (!packagesContainer) return;
        packagesContainer.innerHTML = '';

        packages.forEach((pkg, index) => {
            const card = document.createElement('div');
            card.className = 'p-4 bg-[#FAFAFA] border border-neutral-200/80 rounded-xl space-y-3';
            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider">#${index + 1} ${pkg.nama}</span>
                    <span class="text-[10px] px-2 py-0.5 bg-neutral-200/60 rounded font-semibold text-neutral-600">${pkg.badge || 'Paket'}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-semibold text-neutral-500 uppercase mb-1">Nama Paket</label>
                        <input type="text" data-index="${index}" data-field="nama" value="${pkg.nama}" class="pkg-input w-full bg-white border border-neutral-200 px-3 py-2 rounded-lg text-xs">
                    </div>
                    <div>
                        <label class="block text-[10px] font-semibold text-neutral-500 uppercase mb-1">Estimasi Bobot</label>
                        <input type="text" data-index="${index}" data-field="bobot" value="${pkg.bobot || ''}" class="pkg-input w-full bg-white border border-neutral-200 px-3 py-2 rounded-lg text-xs">
                    </div>
                    <div>
                        <label class="block text-[10px] font-semibold text-neutral-500 uppercase mb-1">Harga (Rupiah Angka)</label>
                        <input type="number" data-index="${index}" data-field="harga" value="${pkg.harga}" class="pkg-input w-full bg-white border border-neutral-200 px-3 py-2 rounded-lg text-xs font-mono">
                    </div>
                    <div>
                        <label class="block text-[10px] font-semibold text-neutral-500 uppercase mb-1">Label / Badge</label>
                        <input type="text" data-index="${index}" data-field="badge" value="${pkg.badge || ''}" class="pkg-input w-full bg-white border border-neutral-200 px-3 py-2 rounded-lg text-xs">
                    </div>
                </div>
            `;
            packagesContainer.appendChild(card);
        });

        // Event listener saat paket diedit
        document.querySelectorAll('.pkg-input').forEach(input => {
            input.addEventListener('input', () => {
                const idx = parseInt(input.getAttribute('data-index'), 10);
                const field = input.getAttribute('data-field');
                let val = input.value;
                if (field === 'harga') val = parseInt(val, 10) || 0;

                if (currentConfig.dombaPackages && currentConfig.dombaPackages[idx]) {
                    currentConfig.dombaPackages[idx][field] = val;
                    updateJSONOutput(currentConfig);
                }
            });
        });
    }

    /**
     * Membaca seluruh data dari form menjadi objek konfigurasi
     */
    function gatherFormData() {
        return {
            ...currentConfig,
            heroTitle: inputHeroTitle ? inputHeroTitle.value.trim() : currentConfig.heroTitle,
            heroSubtitle: inputHeroSubtitle ? inputHeroSubtitle.value.trim() : currentConfig.heroSubtitle,
            heroDescription: inputHeroDescription ? inputHeroDescription.value.trim() : currentConfig.heroDescription,
            whatsapp: inputWhatsapp ? inputWhatsapp.value.trim().replace(/[^0-9]/g, '') : currentConfig.whatsapp,
            whatsappDisplay: inputWhatsapp ? inputWhatsapp.value.trim() : currentConfig.whatsappDisplay,
            instagram: inputInstagram ? inputInstagram.value.trim().replace('@', '') : currentConfig.instagram,
            email: inputEmail ? inputEmail.value.trim() : currentConfig.email,
            address: inputAddress ? inputAddress.value.trim() : currentConfig.address,
            priceQurban: inputPriceQurban ? inputPriceQurban.value.trim() : currentConfig.priceQurban,
            priceAqiqah: inputPriceAqiqah ? inputPriceAqiqah.value.trim() : currentConfig.priceAqiqah,
            lastUpdated: new Date().toISOString()
        };
    }

    /**
     * Update kotak teks JSON
     */
    function updateJSONOutput(cfg) {
        if (!jsonOutput) return;
        jsonOutput.value = JSON.stringify(cfg, null, 2);
    }

    // Pasang listener input form utama
    const formInputs = [
        inputHeroTitle, inputHeroSubtitle, inputHeroDescription,
        inputWhatsapp, inputInstagram, inputEmail, inputAddress,
        inputPriceQurban, inputPriceAqiqah
    ];

    formInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                currentConfig = gatherFormData();
                updateJSONOutput(currentConfig);
            });
        }
    });

    // Tombol Simpan Konfigurasi
    if (btnSave) {
        btnSave.addEventListener('click', () => {
            currentConfig = gatherFormData();
            const success = configManager.saveAppConfig(currentConfig);
            if (success) {
                updateJSONOutput(currentConfig);
                showToast('✅ Pengaturan berhasil disimpan ke browser!');
            } else {
                showToast('❌ Gagal menyimpan pengaturan', true);
            }
        });
    }

    // Tombol Reset ke Default
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (confirm('Apakah Anda yakin ingin mengembalikan seluruh data ke pengaturan bawaan awal?')) {
                configManager.resetAppConfig();
                currentConfig = configManager.getAppConfig();
                loadConfigToForm(currentConfig);
                showToast('🔄 Konfigurasi berhasil di-reset ke bawaan');
            }
        });
    }

    // Tombol Salin JSON
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            if (!jsonOutput || !jsonOutput.value) return;
            jsonOutput.select();
            jsonOutput.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(jsonOutput.value)
                .then(() => showToast('📋 JSON berhasil disalin ke clipboard!'))
                .catch(() => showToast('Gagal menyalin JSON', true));
        });
    }

    // Inisialisasi awal
    loadConfigToForm(currentConfig);
});
