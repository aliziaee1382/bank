import React from 'react';
import { Language } from '../types';

interface PartnersBannerProps {
  lang: Language;
}

export const PartnersBanner: React.FC<PartnersBannerProps> = ({ lang }) => {
  const partners = [
    { nameFa: 'بانک مرکزی ج.ا.ا', nameEn: 'Central Bank', code: 'CBI' },
    { nameFa: 'شبکه الکترونیکی شتاب', nameEn: 'Shetab Network', code: 'SHETAB' },
    { nameFa: 'شبکه پرداخت شاپرک', nameEn: 'Shaparak Gateway', code: 'SHAPARAK' },
    { nameFa: 'سازمان بورس و اوراق بهادار', nameEn: 'SEO Stock Exchange', code: 'SEO' },
    { nameFa: 'سامانه تسویه پایا و ساتنا', nameEn: 'Paya & Satna Settlement', code: 'PAYA' },
    { nameFa: 'شبکه بین‌المللی سوییفت', nameEn: 'SWIFT Banking Network', code: 'SWIFT' },
  ];

  return (
    <section className="py-8 bg-white dark:bg-[#111218] border-y border-[#191A23]/10 dark:border-white/10 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-[#191A23]/60 dark:text-gray-400 uppercase tracking-wider mb-6">
          {lang === 'fa' ? 'عضو رسمی شبکه‌های مالی و مجوزهای نظارتی' : 'Official Banking Accreditation & Financial Clearing Networks'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-3.5 xl:gap-4 opacity-85 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 border border-[#191A23]/20 dark:border-white/20 bg-[#F3F3F3] dark:bg-[#1F202C] hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-extrabold text-[#191A23] dark:text-white dark:hover:text-[#191A23] transition-all hover:border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] whitespace-nowrap"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#191A23] dark:bg-[#B9FF66]"></div>
              <span>{lang === 'fa' ? partner.nameFa : partner.nameEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
