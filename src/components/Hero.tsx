import React from 'react';
import { ArrowUpLeft, ShieldCheck, Zap, CreditCard, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenAccountModal: () => void;
  onOpenBankingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenAccountModal,
  onOpenBankingModal,
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Action Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] border border-[#191A23] px-3.5 py-1.5 rounded-full text-xs md:text-sm font-extrabold text-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
              <Sparkles className="w-4 h-4 text-[#191A23]" />
              <span>{lang === 'fa' ? 'نسل جدید بانکداری دیجیتال و شرکتی' : 'Next-Gen Corporate & Digital Banking'}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#191A23] dark:text-white leading-[1.5] sm:leading-[1.5] lg:leading-[1.45] tracking-tight">
              {lang === 'fa' ? (
                <>
                  مدیریت هوشمند دارایی‌ها و{' '}
                  <span className="inline-block bg-[#B9FF66] text-[#191A23] px-2 py-0.5 rounded-lg border border-[#191A23] my-1 align-middle">
                    توسعه مالی
                  </span>{' '}
                  کسب‌وکار شما
                </>
              ) : (
                <>
                  Navigating the{' '}
                  <span className="inline-block bg-[#B9FF66] text-[#191A23] px-2 py-0.5 rounded-lg border border-[#191A23] my-1 align-middle">
                    financial landscape
                  </span>{' '}
                  for success
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#191A23]/80 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'fa'
                ? 'پوزیتیو بانک به صاحبان کسب‌وکار و سرمایه‌گذاران کمک می‌کند تا با بهره‌گیری از خطوط اعتباری سریع، خدمات ارزی تخصصی و اینترنت‌بانک نوین، دارایی‌های خود را با شفافیت کامل مدیریت کنند.'
                : 'Our corporate banking platform helps businesses and investors grow through instant credit lines, international FX trade, high-yield funds, and automated digital treasury management.'}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenAccountModal}
                className="w-full sm:w-auto bg-[#191A23] dark:bg-[#B9FF66] text-white dark:text-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] dark:hover:bg-white border-2 border-[#191A23] px-8 py-4 rounded-2xl font-extrabold text-base transition-all shadow-[4px_4px_0px_0px_#B9FF66] dark:shadow-[4px_4px_0px_0px_#191A23] flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>{lang === 'fa' ? 'افتتاح حساب غیرحضوری' : 'Open Account Online'}</span>
                <ArrowUpLeft className="w-5 h-5 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
              </button>

              <button
                onClick={onOpenBankingModal}
                className="w-full sm:w-auto bg-[#F3F3F3] dark:bg-[#2A2B38] hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] text-[#191A23] dark:text-white dark:hover:text-[#191A23] border-2 border-[#191A23] dark:border-[#B9FF66]/30 px-7 py-4 rounded-2xl font-bold text-base transition-all shadow-[4px_4px_0px_0px_#191A23] dark:shadow-[4px_4px_0px_0px_#B9FF66] flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-5 h-5" />
                <span>{lang === 'fa' ? 'ورود به پورتال بانک' : 'Portal Access'}</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-bold text-[#191A23] dark:text-white">
              <div className="flex items-center gap-2 bg-[#F3F3F3] dark:bg-[#2A2B38] px-3 py-1.5 rounded-lg border border-[#191A23]/30 dark:border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#191A23] dark:text-[#B9FF66]" />
                <span>{lang === 'fa' ? 'تحت نظارت بانک مرکزی' : 'Central Bank Certified'}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F3F3F3] dark:bg-[#2A2B38] px-3 py-1.5 rounded-lg border border-[#191A23]/30 dark:border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#191A23] dark:text-[#B9FF66]" />
                <span>{lang === 'fa' ? 'پایداری ۹۹.۹۹٪ خدمات' : '99.99% Uptime'}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F3F3F3] dark:bg-[#2A2B38] px-3 py-1.5 rounded-lg border border-[#191A23]/30 dark:border-white/10">
                <Zap className="w-4 h-4 text-[#191A23] dark:text-[#B9FF66]" />
                <span>{lang === 'fa' ? 'تسویه فوری چابک' : 'Instant Settlement'}</span>
              </div>
            </div>

          </div>

          {/* Money & Coin Lottie Animation Column (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <div className="w-full flex items-center justify-center min-h-[500px] lg:min-h-[560px]">
              <dotlottie-wc
                src="https://lottie.host/c95ba19b-dae8-448d-88bc-98eed980cbf1/vVQ5tFOcBz.lottie"
                style={{ width: '400px', height: '400px', maxWidth: '585px', maxHeight: '585px' }}
                autoplay
                loop
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
