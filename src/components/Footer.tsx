import React, { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Language, PageId } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBankingModal: () => void;
  onOpenAccountModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onOpenBankingModal,
  onOpenAccountModal,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  // Play cat meow sound using Web Audio API synthesis on hover
  const playMeowSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const now = ctx.currentTime;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, now);
      masterGain.connect(ctx.destination);

      // Primary oscillator for the meow pitch glide
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';

      // Pitch glide curve: 'm' -> 'e' -> 'o' -> 'w'
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(720, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.38);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      // Harmonics for a sweet organic timbre
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(720, now);
      osc2.frequency.exponentialRampToValueAtTime(1440, now + 0.12);
      osc2.frequency.exponentialRampToValueAtTime(800, now + 0.38);

      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.linearRampToValueAtTime(0.1, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      osc.connect(gain);
      gain.connect(masterGain);

      osc2.connect(gain2);
      gain2.connect(masterGain);

      osc.start(now);
      osc2.start(now);

      osc.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch {
      // Audio play blocked or unsupported
    }
  };

  return (
    <footer id="contact" className="bg-[#191A23] text-white rounded-t-[45px] pt-16 pb-8 border-t-2 border-[#191A23] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Bar: Logo & Navigation Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-right rtl:text-right ltr:text-left focus:outline-none group"
          >
            <div className="w-10 h-10 bg-[#B9FF66] rounded-xl flex items-center justify-center text-[#191A23] font-black text-2xl border border-[#191A23] transition-transform group-hover:scale-105">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
              Positivus<span className="text-[#191A23] bg-[#B9FF66] px-1.5 py-0.5 rounded text-sm font-bold">Bank</span>
            </span>
          </button>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-300">
            <button onClick={() => onNavigate('home')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'صفحه اصلی' : 'Home'}</button>
            <button onClick={() => onNavigate('services')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'خدمات بانکی' : 'Services'}</button>
            <button onClick={() => onNavigate('loan-calculator')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'محاسبه‌گر وام' : 'Loan Calculator'}</button>
            <button onClick={() => onNavigate('exchange-rates')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'نرخ روز ارز' : 'Exchange Rates'}</button>
            <button onClick={() => onNavigate('process')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'مراحل ثبت‌نام' : 'Process'}</button>
            <button onClick={() => onNavigate('team')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'تیم مدیریتی' : 'Leadership'}</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'تماس با ما' : 'Contact'}</button>
            <button onClick={() => onNavigate('testimonials')} className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'نظرات مشتریان' : 'Reviews'}</button>
          </nav>

          {/* Quick Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAccountModal}
              className="bg-[#B9FF66] text-[#191A23] hover:bg-white px-4 py-2 rounded-xl text-xs font-black border border-[#191A23] transition-colors shadow-[2px_2px_0px_0px_#ffffff]"
            >
              {lang === 'fa' ? 'افتتاح حساب آنلاین' : 'Open Account'}
            </button>
            <button
              onClick={onOpenBankingModal}
              className="bg-white/10 text-white hover:bg-[#B9FF66] hover:text-[#191A23] px-4 py-2 rounded-xl text-xs font-black border border-white/20 transition-colors"
            >
              {lang === 'fa' ? 'اینترنت‌بانک' : 'E-Banking'}
            </button>
          </div>

        </div>

        {/* Middle Section: Contact Details & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-4 text-gray-300 text-sm">
            <div className="inline-block bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-md text-xs font-black mb-2">
              {lang === 'fa' ? 'ارتباط با مرکز مشتریان' : 'Contact Us'}
            </div>

            <div className="flex items-center gap-3 font-medium">
              <Phone className="w-5 h-5 text-[#B9FF66]" />
              <span>{lang === 'fa' ? 'تلفن مرکز تماس ۲۴ ساعته: ۰۲۱-۸۸۹۹۰۰۰۰ (کد ۵ رقم: ۱۵۶۰)' : '24/7 Priority Support: +98 (21) 88990000'}</span>
            </div>

            <div className="flex items-center gap-3 font-medium">
              <Mail className="w-5 h-5 text-[#B9FF66]" />
              <span>{lang === 'fa' ? 'پست الکترونیک رسمی: info@positivusbank.ir' : 'Corporate Email: info@positivusbank.ir'}</span>
            </div>

            <div className="flex items-start gap-3 font-medium">
              <MapPin className="w-5 h-5 text-[#B9FF66] shrink-0 mt-0.5" />
              <span>{lang === 'fa' ? 'آدرس برج مرکزی: تهران، خیابان ولیعصر، بالاتر از میرداماد، برج اختصاصی پوزیتیو بانک' : 'Headquarters: Positivus Bank Tower, Valiasr Ave, Tehran'}</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-[#292A32] border border-white/10 rounded-[30px] p-6 sm:p-8 space-y-4">
            <h4 className="text-lg font-black text-white">
              {lang === 'fa' ? 'عضویت در خبرنامه تحلیلی بازارهای مالی' : 'Subscribe to Financial Market Insights'}
            </h4>
            <p className="text-xs text-gray-400">
              {lang === 'fa'
                ? 'آخرین تحلیل‌های اقتصادی، تحولات نرخ ارز و بخشنامه‌های صادراتی را هفتگی دریافت کنید.'
                : 'Receive weekly FX analysis, central bank policies, and trade updates.'}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'fa' ? 'ایمیل کاری یا شخصی خود را وارد کنید' : 'Enter your business email'}
                className="bg-[#191A23] border border-white/20 text-white placeholder-gray-500 px-4 py-3 rounded-2xl text-xs font-medium focus:outline-none focus:border-[#B9FF66] grow"
              />
              <button
                type="submit"
                className="bg-[#B9FF66] text-[#191A23] hover:bg-white font-extrabold px-6 py-3 rounded-2xl text-xs border border-[#191A23] transition-colors shrink-0 flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    <span>{lang === 'fa' ? 'عضو شدید' : 'Subscribed!'}</span>
                  </>
                ) : (
                  <>
                    <span>{lang === 'fa' ? 'اشتراک' : 'Subscribe'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between text-xs text-gray-400 gap-4 font-medium">
          <div className="text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
            © {new Date().getFullYear()} {lang === 'fa' ? 'پوزیتیو بانک. تمامی حقوق مادی و معنوی محفوظ است. تحت نظارت بانک مرکزی ج.ا.ا' : 'Positivus Bank. All rights reserved. Central Bank regulated.'}
          </div>

          {/* Designer / Developer Credit */}
          <div className="flex items-center gap-1.5 text-gray-300 bg-[#292A32] px-3.5 py-1.5 rounded-xl border border-white/10 group relative">
            <span>{lang === 'fa' ? 'طراحی و توسعه توسط :' : 'Designed & Developed by:'}</span>
            <a
              href="https://ali0003.ir"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playMeowSound}
              className="font-extrabold text-[#B9FF66] hover:underline text-sm dir-ltr inline-flex items-center gap-1 tracking-wider group/link"
              title={lang === 'fa' ? 'میووو! 🐾' : 'Meow! 🐾'}
            >
              <span>0003</span>
              <span className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity">🐱</span>
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'قوانین و مقررات' : 'Terms of Service'}</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">{lang === 'fa' ? 'امنیت سایبری' : 'Security'}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
