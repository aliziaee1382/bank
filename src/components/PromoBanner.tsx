import React from 'react';
import { ArrowUpLeft, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../types';

interface PromoBannerProps {
  lang: Language;
  onOpenAccountModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ lang, onOpenAccountModal }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[45px] p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_#191A23] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Content */}
          <div className="space-y-6 max-w-xl text-center md:text-right rtl:md:text-right ltr:md:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] border border-[#191A23] px-3 py-1 rounded-full text-xs font-black text-[#191A23]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'fa' ? 'بدون نیاز به مراجعه حضوری به شعبه' : '100% Branchless Registration'}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[#191A23] leading-tight">
              {lang === 'fa'
                ? 'کسب‌وکار خود را با خدمات بانکداری هوشمند پوزیتیو متحول کنید'
                : 'Let’s scale your corporate financial potential together'}
            </h3>

            <p className="text-base text-[#191A23]/80 font-medium">
              {lang === 'fa'
                ? 'با ثبت‌نام غیرحضوری، در کمتر از ۵ دقیقه حساب بانکی شرکتی یا شخصی خود را فعال کرده و از دسترسی به تسهیلات کم‌بهره بهره‌مند شوید.'
                : 'Contact us today to learn how our corporate digital banking services can help your business grow and succeed online.'}
            </p>

            <button
              onClick={onOpenAccountModal}
              className="bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-[#191A23] border-2 border-[#191A23] px-8 py-4 rounded-2xl font-black text-base transition-all shadow-[4px_4px_0px_0px_#B9FF66] inline-flex items-center gap-3 group"
            >
              <span>{lang === 'fa' ? 'افتتاح حساب آنلاین رایگان' : 'Get your free account proposal'}</span>
              <ArrowUpLeft className="w-5 h-5 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>

          {/* Positivus Neo-Brutalist Vector Graphic Decorative Element */}
          <div className="relative z-10 shrink-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#B9FF66] border-2 border-[#191A23] rounded-[40px] shadow-[6px_6px_0px_0px_#191A23] flex flex-col items-center justify-center p-6 relative group hover:rotate-2 transition-transform">
              <div className="w-16 h-16 bg-[#191A23] text-[#B9FF66] rounded-2xl flex items-center justify-center mb-3 border border-[#191A23]">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="text-2xl font-black text-[#191A23] text-center">
                Positivus
              </div>
              <div className="text-xs font-bold text-[#191A23]/80 text-center mt-1">
                {lang === 'fa' ? 'بانکداری آینده' : 'Future of Banking'}
              </div>

              {/* Orbiting star */}
              <div className="absolute -top-3 -right-3 bg-white border-2 border-[#191A23] p-2 rounded-xl shadow-[2px_2px_0px_0px_#191A23]">
                ⚡
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
