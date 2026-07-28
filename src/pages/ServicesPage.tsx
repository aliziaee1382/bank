import React from 'react';
import { Language, ServiceItem } from '../types';
import { ServicesSection } from '../components/ServicesSection';
import { Briefcase, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenAccountModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onSelectService,
  onOpenAccountModal,
}) => {
  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#191A23] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#191A23] text-[#B9FF66] px-4 py-1.5 rounded-xl text-xs font-black">
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'fa' ? 'صفحه اختصاصی خدمات' : 'Services Portal'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#191A23] leading-tight">
              {lang === 'fa'
                ? 'خدمات جامع بانکداری شرکتی و شخصی پوزیتیو'
                : 'Comprehensive Corporate & Personal Banking Services'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#191A23]/80 leading-relaxed">
              {lang === 'fa'
                ? 'مجموعه‌ای کامل از راهکارهای اعتباری، تسهیلات بانکی، خدمات ارزی، سرمایه‌گذاری و کارت‌های هوشمند مجهز به فناوری‌های نوآورانه.'
                : 'A full suite of corporate credit solutions, digital accounts, forex services, smart cards, and high-yield investments.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenAccountModal}
                className="bg-[#191A23] text-[#B9FF66] hover:bg-white hover:text-[#191A23] px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm border-2 border-[#191A23] shadow-[4px_4px_0px_0px_#191A23] transition-colors"
              >
                {lang === 'fa' ? 'افتتاح حساب آنلاین فوری' : 'Open Digital Account'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Component */}
      <ServicesSection
        lang={lang}
        onSelectService={onSelectService}
      />

      {/* Bottom Service Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[28px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#191A23] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-[#191A23]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-[#191A23]">
                {lang === 'fa' ? 'نیاز به خدمت سفارشی‌سازی شده دارید؟' : 'Need a Customized Corporate Plan?'}
              </h4>
              <p className="text-xs sm:text-sm text-[#191A23]/80 font-medium">
                {lang === 'fa'
                  ? 'کارشناسان ارشد مالی ما آماده تدوین پکیج‌های بانکی متناسب با حجم گردش مالی شما هستند.'
                  : 'Our financial advisors build tailored banking packages for your corporate volume.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAccountModal}
            className="w-full md:w-auto bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-[#191A23] font-black px-6 py-3.5 rounded-2xl border-2 border-[#191A23] transition-colors text-xs sm:text-sm shrink-0"
          >
            {lang === 'fa' ? 'درخواست مشاوره اختصاصی' : 'Request Corporate Advisory'}
          </button>
        </div>
      </section>

    </div>
  );
};
