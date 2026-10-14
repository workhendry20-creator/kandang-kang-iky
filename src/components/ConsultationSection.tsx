import React from 'react';
import { Wheat, ShieldCheck, GraduationCap, Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { consultationServices } from '../data/consultation';
import { getWhatsappUrl } from '../utils/whatsapp';

export const ConsultationSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat':
        return <Wheat className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <section id="konsultasi" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#478A14] uppercase bg-[#478A14]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-4 h-4" />
            Layanan Edukasi & Bimbingan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E3E2B] tracking-tight leading-tight">
            Konsultasi Peternakan Modern
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 leading-relaxed">
            Dapatkan bimbingan teknis profesional langsung dari Ir. Rizky Ayuna Budiman, S.Pt untuk meningkatkan efisiensi pakan, kesehatan kandang, dan profitabilitas peternakan Anda.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {consultationServices.map((service) => {
            const waUrl = getWhatsappUrl('consult', { serviceTitle: service.title });

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#478A14]/10 text-[#478A14] flex items-center justify-center transition group-hover:bg-[#478A14] group-hover:text-white">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Target */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1E3E2B] tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#478A14] uppercase tracking-wider mb-3">
                    Sasaran: {service.targetAudience}
                  </div>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="border-t border-neutral-100 pt-5 mb-6 space-y-2.5">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Materi / Output Layanan:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 font-light leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[#478A14] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-neutral-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1E3E2B] hover:bg-[#478A14] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 shadow-xs group-hover:shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Jadwalkan Konsultasi</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 transform group-hover:translate-x-1 transition duration-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
