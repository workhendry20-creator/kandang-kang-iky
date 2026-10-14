import React from 'react';
import { Award, GraduationCap, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { authorProfile } from '../data/authorProfile';
import { getWhatsappUrl } from '../utils/whatsapp';

export const ExpertiseSection: React.FC = () => {
  const consultUrl = getWhatsappUrl('consult');

  return (
    <section id="insinyur" className="py-16 sm:py-24 bg-white border-t border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#478A14] uppercase bg-[#478A14]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <GraduationCap className="w-4 h-4" />
            Pendekatan Sains & Syariat
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E3E2B] tracking-tight leading-tight">
            Dikelola Langsung Oleh Insinyur Peternakan
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 leading-relaxed">
            Menghadirkan standar peternakan modern di Parung, Bogor dengan landasan riset nutrisi presisi, pemuliaan genetik unggul, dan biosekuriti kandang berstandar syar'i.
          </p>
        </div>

        {/* Profile Card Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 border border-neutral-200/70 shadow-sm">
          {/* Photo & Identity Column */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-md mb-6 group">
              <img
                src={authorProfile.photo}
                alt={authorProfile.formalName}
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="bg-[#478A14] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                  Verified Insinyur
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E3E2B] tracking-tight">
              {authorProfile.formalName}
            </h3>
            <p className="text-xs font-bold text-[#478A14] uppercase tracking-wider mt-1">
              {authorProfile.title}
            </p>
            <p className="text-xs text-neutral-500 font-light mt-3 leading-relaxed">
              {authorProfile.bio}
            </p>

            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 bg-[#1E3E2B] hover:bg-[#152e20] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Konsultasi Bersama Kang Iky</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Credentials, Pillars & Metrics Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Credentials List */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200/60 shadow-xs">
              <h4 className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#478A14]" />
                Kualifikasi & Pengalaman Profesi
              </h4>
              <ul className="space-y-2.5">
                {authorProfile.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-600 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#478A14] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scientific Pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#478A14]/10 text-[#478A14] flex items-center justify-center mb-2.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider mb-1">
                  Riset Complete Feed
                </h5>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Formula pakan teruji berbasis limbah pertanian (singkong, dedak, kedelai) yang memacu bobot alami tanpa gemuk air.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#478A14]/10 text-[#478A14] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-[#1E3E2B] uppercase tracking-wider mb-1">
                  Kandang Bebas Bau & Higienis
                </h5>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Sirkulasi udara panggung dan dekomposisi feses instan menjaga domba tetap sehat, tidak stres, dan ramah warga sekitar.
                </p>
              </div>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {authorProfile.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-neutral-200/50 text-center shadow-xs">
                  <div className="text-base sm:text-lg font-extrabold text-[#1E3E2B] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
