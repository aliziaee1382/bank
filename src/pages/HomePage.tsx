import React from 'react';
import { Language, PageId } from '../types';
import { Hero } from '../components/Hero';
import { PartnersBanner } from '../components/PartnersBanner';
import { ArrowUpLeft, Calculator, Coins, Workflow, Briefcase, Users, PhoneCall, ShieldCheck, Zap, Award } from 'lucide-react';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenAccountModal: () => void;
  onOpenBankingModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenAccountModal,
  onOpenBankingModal,
}) => {
  const portalCards = [
    {
      id: 'services' as PageId,
      titleFa: 'خدمات بانکی',
      titleEn: 'Banking Services',
      descFa: 'تسهیلات حقوقی، کارت‌های اعتباری و حساب‌های ارزی',
      descEn: 'Corporate credit, cards & forex accounts',
      icon: Briefcase,
      color: 'bg-[#B9FF66]',
    },
    {
      id: 'loan-calculator' as PageId,
      titleFa: 'محاسبه‌گر آنلاین وام',
      titleEn: 'Loan Calculator',
      descFa: 'محاسبه فوری اقساط، سود و جدول بازپرداخت',
      descEn: 'Instant loan amortization & installment estimation',
      icon: Calculator,
      color: 'bg-[#F3F3F3]',
    },
    {
      id: 'exchange-rates' as PageId,
      titleFa: 'نرخ لحظه‌ای ارز و طلا',
      titleEn: 'Live Exchange Rates',
      descFa: 'تابلو قیمت زنده دلار، یورو و مسکوکات',
      descEn: 'Real-time FX prices & precious metals',
      icon: Coins,
      color: 'bg-[#F3F3F3]',
    },
    {
      id: 'process' as PageId,
      titleFa: 'مراحل افتتاح حساب',
      titleEn: 'Account Setup Guide',
      descFa: 'راهنمای ۵ دقیقه‌ای ثبت‌نام غیرحضوری',
      descEn: 'Step-by-step digital onboarding roadmap',
      icon: Workflow,
      color: 'bg-[#B9FF66]',
    },
    {
      id: 'team' as PageId,
      titleFa: 'تیم مدیریتی',
      titleEn: 'Leadership Team',
      descFa: 'آشنایی با اعضای هیئت مدیره و راهبران بانک',
      descEn: 'Meet our executive board and leaders',
      icon: Users,
      color: 'bg-[#F3F3F3]',
    },
    {
      id: 'contact' as PageId,
      titleFa: 'ارتباط و پشتیبانی شعب',
      titleEn: 'Contact & Support',
      descFa: 'پشتیبانی ۲۴ ساعته، شعب و دفاتر مرکزی',
      descEn: '24/7 call center & branch locator',
      icon: PhoneCall,
      color: 'bg-[#F3F3F3]',
    },
  ];

  return (
    <div className="space-y-16 py-6">
      
      {/* Overview Hero */}
      <Hero
        lang={lang}
        onOpenAccountModal={onOpenAccountModal}
        onOpenBankingModal={onOpenBankingModal}
      />

      {/* Corporate Accreditations */}
      <PartnersBanner lang={lang} />

      {/* Main Pages Portal Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white rounded-[36px] p-8 sm:p-12 relative overflow-hidden shadow-[12px_12px_0px_0px_#B9FF66] border-2 border-[#191A23]">
          
          <div className="relative z-10 max-w-3xl space-y-4 mb-10">
            <span className="inline-block bg-[#B9FF66] text-[#191A23] px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest">
              {lang === 'fa' ? 'درگاه دسترسی سریع' : 'Quick Navigation Hub'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {lang === 'fa' ? 'صفحات تخصصی پوزیتیو بانک' : 'Explore Positivus Specialized Sections'}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
              {lang === 'fa'
                ? 'برای بررسی دقیق‌تر ابزارها، محاسبات مالی و خدمات بانکداری، وارد بخش مربوطه شوید.'
                : 'Access our dedicated portals for detailed calculators, live rates, and corporate services.'}
            </p>
          </div>

          {/* Grid of Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {portalCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => onNavigate(card.id)}
                  className="bg-white dark:bg-[#1F202C] text-[#191A23] dark:text-[#F3F3F3] border-2 border-[#191A23] dark:border-[#B9FF66]/40 rounded-[28px] p-6 cursor-pointer hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] transition-all duration-200 group shadow-[6px_6px_0px_0px_#B9FF66] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] rounded-2xl group-hover:bg-white group-hover:text-[#191A23] transition-colors">
                        <CardIcon className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#F3F3F3] dark:bg-[#2A2B38] border border-[#191A23] dark:border-white/20 flex items-center justify-center group-hover:bg-[#191A23] group-hover:text-[#B9FF66] transition-colors">
                        <ArrowUpLeft className="w-5 h-5 stroke-[2.5] text-[#191A23] dark:text-white group-hover:text-[#B9FF66]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#191A23] dark:text-white group-hover:text-[#191A23]">
                        {lang === 'fa' ? card.titleFa : card.titleEn}
                      </h3>
                      <p className="text-xs text-[#191A23]/80 dark:text-gray-300 group-hover:text-[#191A23]/90 font-semibold mt-1.5 leading-relaxed">
                        {lang === 'fa' ? card.descFa : card.descEn}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#191A23]/10 dark:border-white/10 flex items-center justify-between text-xs font-black text-[#191A23] dark:text-white group-hover:text-[#191A23]">
                    <span>{lang === 'fa' ? 'ورود به صفحه اختصاصی' : 'Open Dedicated Page'}</span>
                    <span className="bg-[#191A23] dark:bg-[#B9FF66] text-white dark:text-[#191A23] px-2 py-0.5 rounded text-[10px] group-hover:bg-white group-hover:text-[#191A23] transition-colors">
                      {lang === 'fa' ? 'مشاهده' : 'View'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66]/40 p-6 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_0px_#191A23] dark:shadow-[6px_6px_0px_0px_#B9FF66] space-y-3">
            <div className="w-12 h-12 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl flex items-center justify-center font-black">
              <Zap className="w-6 h-6 text-[#191A23]" />
            </div>
            <h3 className="text-xl font-black text-[#191A23] dark:text-white">
              {lang === 'fa' ? 'سرعت فوق‌العاده در پردازش' : 'Ultra-Fast Processing'}
            </h3>
            <p className="text-xs sm:text-sm text-[#191A23]/80 dark:text-gray-300 font-medium leading-relaxed">
              {lang === 'fa'
                ? 'افتتاح حساب غیرحضوری و استعلام تسهیلات در کمتر از ۵ دقیقه انجام می‌پذیرد.'
                : 'Digital account opening and credit inquiries processed within 5 minutes.'}
            </p>
          </div>

          <div className="bg-[#B9FF66] text-[#191A23] border-2 border-[#191A23] p-6 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_0px_#191A23] space-y-3">
            <div className="w-12 h-12 bg-white border-2 border-[#191A23] rounded-2xl flex items-center justify-center font-black">
              <ShieldCheck className="w-6 h-6 text-[#191A23]" />
            </div>
            <h3 className="text-xl font-black text-[#191A23]">
              {lang === 'fa' ? 'امنیت لایه سه‌گانه بانکداری' : 'Triple-Layer Security'}
            </h3>
            <p className="text-xs sm:text-sm text-[#191A23]/90 font-semibold leading-relaxed">
              {lang === 'fa'
                ? 'رمزنگاری کامل داده‌ها، احراز هویت بیومتریک و مجوز رسمی از بانک مرکزی.'
                : 'End-to-end data encryption, biometric verification, and central bank compliance.'}
            </p>
          </div>

          <div className="bg-[#191A23] text-white border-2 border-[#191A23] p-6 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_0px_#B9FF66] space-y-3">
            <div className="w-12 h-12 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl flex items-center justify-center text-[#191A23] font-black">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">
              {lang === 'fa' ? 'رتبه ۱ رضایت مشتریان' : '#1 Customer Satisfaction'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
              {lang === 'fa'
                ? 'پشتیبانی تخصصی ۲۴/۷ برای کسب‌وکارهای بزرگ و مشتریان حقیقی.'
                : '24/7 dedicated support team for high-volume corporate and retail clients.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
