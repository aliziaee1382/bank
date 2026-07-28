import React from 'react';
import { Language } from '../types';
import { ProcessSection } from '../components/ProcessSection';
import { Workflow, Smartphone, ShieldCheck, UserCheck, ArrowUpLeft, CheckCircle } from 'lucide-react';

interface ProcessPageProps {
  lang: Language;
  onOpenAccountModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({
  lang,
  onOpenAccountModal,
}) => {
  const stepsTimeline = [
    {
      num: '۰۱',
      titleFa: 'احراز هویت هوشمند تصویری',
      titleEn: 'AI Facial Verification',
      descFa: 'ضبط ویدئوی کوتاه چند ثانیه‌ای و تطبیق الگوریتمی با تصویر ثبت احوال.',
      descEn: 'Short video recording matched against official national biometric registry.',
      icon: UserCheck,
    },
    {
      num: '۰۲',
      titleFa: 'ثبت اطلاعات هویتی و شغلی',
      titleEn: 'Personal & Professional Details',
      descFa: 'تکمیل فرم استاندارد اطلاعات فردی، کد پستی و شماره همراه به نام متقاضی.',
      descEn: 'Standard form entry for national code, registered mobile, and address.',
      icon: Smartphone,
    },
    {
      num: '۰۳',
      titleFa: 'امضای الکترونیکی قراردادها',
      titleEn: 'Digital Contract Signing',
      descFa: 'صدور گواهی امضای دیجیتال قانونی و صدور آنی حساب بانکی.',
      descEn: 'Issuance of compliant digital signature certificate and instant account creation.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#B9FF66] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] text-[#191A23] px-4 py-1.5 rounded-xl text-xs font-black">
              <Workflow className="w-4 h-4" />
              <span>{lang === 'fa' ? 'نقشه راه افتتاح حساب آنلاین' : 'Digital Onboarding Roadmap'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {lang === 'fa'
                ? 'مراحل ثبت‌نام و افتتاح حساب غیرحضوری در پوزیتیو بانک'
                : 'Step-by-Step Digital Account Setup & Verification'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-gray-300 leading-relaxed">
              {lang === 'fa'
                ? 'بدون نیاز به مراجعه حضوری به شعبه، فقط با تلفن همراه خود و در کمتر از ۵ دقیقه حساب بانکی فعال بسازید.'
                : 'Zero branch visits required. Open and activate your fully compliant bank account in under 5 minutes.'}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAccountModal}
                className="bg-[#B9FF66] text-[#191A23] hover:bg-white font-black px-6 py-3.5 rounded-2xl border-2 border-[#191A23] shadow-[4px_4px_0px_0px_#191A23] transition-colors text-xs sm:text-sm flex items-center gap-2"
              >
                <span>{lang === 'fa' ? 'شروع افتتاح حساب غیرحضوری' : 'Start Instant Registration'}</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Accordion Main Component */}
      <ProcessSection lang={lang} />

      {/* Step Highlight Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#191A23] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#191A23]">
              {lang === 'fa' ? 'فناوری‌های به‌کار رفته در احراز هویت' : 'Technologies Behind Our Verification'}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#191A23]/70">
              {lang === 'fa'
                ? 'استفاده از هوش مصنوعی برای ارتقای امنیت و سرعت فرایند افتتاح حساب'
                : 'AI-driven biometric engines guaranteeing maximum security and speed'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepsTimeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border-2 border-[#191A23] rounded-[28px] p-6 shadow-[4px_4px_0px_0px_#191A23] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl flex items-center justify-center font-black text-[#191A23]">
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-2xl font-black text-[#191A23]/40">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#191A23]">
                    {lang === 'fa' ? item.titleFa : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#191A23]/80 font-medium leading-relaxed">
                    {lang === 'fa' ? item.descFa : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
