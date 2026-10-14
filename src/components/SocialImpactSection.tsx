import React from 'react';
import { Users, Recycle, HeartHandshake, Sparkles, ArrowRight, CheckCircle2, HandHeart } from 'lucide-react';
import { socialPrograms, socialImpactMetrics } from '../data/socialImpact';
import { getWhatsappUrl } from '../utils/whatsapp';

export const SocialImpactSection: React.FC = () => {
  const csrWaUrl = getWhatsappUrl('social');

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Recycle':
        return <Recycle className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5" />;
    }
  };

  return (
    <section id="dampak-sosial" className="py-16 sm:py-24 bg-white border-t border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#478A14] uppercase bg-[#478A14]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <HandHeart className="w-4 h-4" />
            Kolaborasi & Pemberdayaan Warga
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E3E2B] tracking-tight leading-tight">
            Dampak Sosial & Keberlanjutan
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 leading-relaxed">
            Lebih dari sekadar peternakan komersial, Kandang Kang Iky menggerakkan model ekonomi sirkular terpadu yang memberdayakan petani sekitar Parung dan menjaga kelestarian lingkungan.
          </p>
        </div>

        {/* Counter Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {socialImpactMetrics.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 border border-neutral-200/70 text-center shadow-2xs hover:shadow-sm transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#478A14]/10 text-[#478A14] flex items-center justify-center mx-auto mb-3">
                {getMetricIcon(item.icon)}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1E3E2B] tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider mt-1">
                {item.label}
              </div>
              <p className="text-[11px] text-neutral-400 font-light mt-1 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars Card Showcase */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {socialPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#FAFAFA] rounded-3xl overflow-hidden border border-neutral-200/70 shadow-2xs hover:shadow-md transition duration-300 flex flex-col justify-between group"
            >
              <div className="h-48 sm:h-56 w-full overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-xs text-[#1E3E2B] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {program.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                    {program.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                    {program.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {program.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-500 font-light leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#478A14] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-semibold text-[#478A14]">Hasil Nyata:</span>
                  <span className="italic text-neutral-500 text-right truncate ml-2">
                    {program.impactMetrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CSR Collaboration Call to Action Banner */}
        <div className="bg-gradient-to-br from-[#1E3E2B] to-[#2c593e] rounded-3xl p-8 sm:p-10 text-white shadow-md relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-emerald-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
              Kemitraan Sosial & CSR
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
              Buka Peluang Kolaborasi CSR Peternakan Bersama Kami
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 font-light leading-relaxed mb-6">
              Kami membuka kerja sama dengan perusahaan, instansi, dan lembaga sosial untuk pengadaan hewan qurban berkeadilan, edukasi peternakan desa, maupun pengembangan pupuk organik.
            </p>
            <a
              href={csrWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#478A14] hover:bg-[#3d7511] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md hover:shadow-lg cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Diskusikan Program CSR & Kemitraan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpactSection;
