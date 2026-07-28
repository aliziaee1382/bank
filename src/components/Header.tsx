import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Globe,
  Lock,
  ArrowUpLeft,
  Building2,
  ChevronDown,
  Calculator,
  Coins,
  Workflow,
  Users,
  PhoneCall,
  MessageSquare,
  Briefcase,
  Home,
  Sun,
  Moon,
  UserPlus,
  Sparkles
} from 'lucide-react';
import { Language, Theme, PageId } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBankingModal: () => void;
  onOpenAccountModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  theme,
  toggleTheme,
  currentPage,
  onNavigate,
  onOpenBankingModal,
  onOpenAccountModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'features' | 'about' | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'fa' ? 'en' : 'fa';
    setLang(nextLang);
    document.documentElement.setAttribute('lang', nextLang);
    document.documentElement.setAttribute('dir', nextLang === 'fa' ? 'rtl' : 'ltr');
  };

  const handleNavClick = (pageId: PageId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const featureItems: { pageId: PageId; labelFa: string; labelEn: string; descFa: string; descEn: string; icon: any }[] = [
    {
      pageId: 'loan-calculator',
      labelFa: 'محاسبه‌گر وام',
      labelEn: 'Loan Calculator',
      descFa: 'محاسبه آنلاین اقساط و سود',
      descEn: 'Calculate installments & interest',
      icon: Calculator
    },
    {
      pageId: 'exchange-rates',
      labelFa: 'نرخ روز ارز',
      labelEn: 'Live Exchange Rates',
      descFa: 'قیمت لحظه‌ای دلار، یورو و طلا',
      descEn: 'Real-time FX & precious metals',
      icon: Coins
    },
    {
      pageId: 'process',
      labelFa: 'مراحل ثبت‌نام',
      labelEn: 'How It Works',
      descFa: 'راهنمای گام به گام دریافت خدمات',
      descEn: 'Step-by-step account setup guide',
      icon: Workflow
    },
  ];

  const aboutItems: { pageId: PageId; labelFa: string; labelEn: string; descFa: string; descEn: string; icon: any }[] = [
    {
      pageId: 'team',
      labelFa: 'تیم مدیریتی',
      labelEn: 'Leadership',
      descFa: 'مدیران ارشد و اعضای هیئت مدیره',
      descEn: 'Executive team & board members',
      icon: Users
    },
    {
      pageId: 'contact',
      labelFa: 'تماس با ما',
      labelEn: 'Contact Us',
      descFa: 'راه‌های ارتباطی و شعب',
      descEn: 'Branches and support channels',
      icon: PhoneCall
    },
    {
      pageId: 'testimonials',
      labelFa: 'نظرات مشتریان',
      labelEn: 'Testimonials',
      descFa: 'تجربه مشتریان حقوقی و حقیقی',
      descEn: 'Client feedback & reviews',
      icon: MessageSquare
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#191A23]/95 backdrop-blur-md border-b border-[#191A23]/10 dark:border-white/10 py-3 sm:py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Bank Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-right rtl:text-right ltr:text-left focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#191A23] dark:bg-[#B9FF66] rounded-xl flex items-center justify-center text-[#B9FF66] dark:text-[#191A23] font-black text-2xl shadow-[3px_3px_0px_0px_#B9FF66] dark:shadow-[3px_3px_0px_0px_#191A23] transition-transform group-hover:scale-105 shrink-0">
            <Building2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#191A23] dark:text-white flex items-center gap-1.5">
              Positivus<span className="text-[#B9FF66] bg-[#191A23] px-1.5 py-0.5 rounded text-sm font-bold border border-[#B9FF66]/30">Bank</span>
            </span>
            <span className="text-[10px] text-[#191A23]/70 dark:text-gray-300 font-medium -mt-1">
              {lang === 'fa' ? 'پوزیتیو بانک - بانکداری نوین' : 'Modern Corporate Banking'}
            </span>
          </div>
        </button>

        {/* Grouped Desktop Navigation */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-semibold text-[#191A23] dark:text-white">
          
          {/* Home Link */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] font-black'
                : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/20 dark:hover:border-white/20'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{lang === 'fa' ? 'صفحه اصلی' : 'Home'}</span>
          </button>

          {/* Bank Services Dropdown (خدمات بانکی) */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              onMouseEnter={() => setActiveDropdown('services')}
              className={`px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'services' || activeDropdown === 'services'
                  ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] font-black'
                  : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/20 dark:hover:border-white/20'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'fa' ? 'خدمات بانکی' : 'Bank Services'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {/* Bank Services Submenu */}
            {activeDropdown === 'services' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full mt-2 w-80 bg-white dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-2xl shadow-[6px_6px_0px_0px_#B9FF66] p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 ltr:left-0 rtl:right-0"
              >
                {/* Internet Banking Portal */}
                <button
                  onClick={() => {
                    setActiveDropdown(null);
                    onOpenBankingModal();
                  }}
                  className="w-full text-right rtl:text-right ltr:text-left flex items-start gap-3 p-3 rounded-xl border border-[#191A23] dark:border-[#B9FF66]/30 bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] hover:bg-[#222430] dark:hover:bg-[#a3f04f] transition-all group shadow-[2px_2px_0px_0px_#B9FF66] dark:shadow-[2px_2px_0px_0px_#191A23] cursor-pointer"
                >
                  <div className="p-2 bg-[#B9FF66] dark:bg-[#191A23] text-[#191A23] dark:text-[#B9FF66] rounded-lg shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-sm flex items-center justify-between">
                      <span>{lang === 'fa' ? 'ورود به اینترنت‌بانک' : 'E-Banking Login'}</span>
                      <ArrowUpLeft className="w-4 h-4 opacity-80 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform" />
                    </div>
                    <div className="text-[11px] opacity-80 font-medium mt-0.5">
                      {lang === 'fa' ? 'پورتال امن بانکداری دیجیتال شرکتی و شخصی' : 'Secure corporate & personal portal'}
                    </div>
                  </div>
                </button>

                {/* Open Account Online */}
                <button
                  onClick={() => {
                    setActiveDropdown(null);
                    onOpenAccountModal();
                  }}
                  className="w-full text-right rtl:text-right ltr:text-left flex items-start gap-3 p-3 rounded-xl border border-[#191A23] dark:border-white/20 bg-[#F3F3F3] dark:bg-[#2A2B38] hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] hover:text-[#191A23] dark:hover:text-[#191A23] transition-all group cursor-pointer"
                >
                  <div className="p-2 bg-[#B9FF66] border border-[#191A23] rounded-lg text-[#191A23] shrink-0 mt-0.5">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#191A23] dark:text-white group-hover:text-[#191A23]">
                      {lang === 'fa' ? 'افتتاح حساب آنلاین' : 'Open Account Online'}
                    </div>
                    <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 group-hover:text-[#191A23]/80 font-medium mt-0.5">
                      {lang === 'fa' ? 'افتتاح حساب غیرحضوری و صدور فوری کارت' : 'Instant digital account & card setup'}
                    </div>
                  </div>
                </button>

                <div className="border-t border-[#191A23]/10 dark:border-white/10 my-1"></div>

                {/* All Services Page */}
                <button
                  onClick={() => handleNavClick('services')}
                  className={`w-full text-right rtl:text-right ltr:text-left flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${
                    currentPage === 'services'
                      ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] font-black'
                      : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/30 dark:hover:border-white/20'
                  }`}
                >
                  <div className="p-2 bg-[#F3F3F3] dark:bg-[#2A2B38] border border-[#191A23] dark:border-[#B9FF66]/30 rounded-lg text-[#191A23] dark:text-[#B9FF66] shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                      {lang === 'fa' ? 'معرفی کلی خدمات بانکی' : 'All Banking Services'}
                    </div>
                    <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium mt-0.5">
                      {lang === 'fa' ? 'تسهیلات، خطوط اعتباری، خدمات ارزی و صندوق‌ها' : 'Credit lines, FX trade & investment funds'}
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Features Dropdown (امکانات) */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
              onMouseEnter={() => setActiveDropdown('features')}
              className={`px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 cursor-pointer ${
                ['loan-calculator', 'exchange-rates', 'process'].includes(currentPage) || activeDropdown === 'features'
                  ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] font-black'
                  : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/20 dark:hover:border-white/20'
              }`}
            >
              <span>{lang === 'fa' ? 'امکانات و ابزارها' : 'Features'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
            </button>

            {/* Features Submenu */}
            {activeDropdown === 'features' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full mt-2 w-72 bg-white dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-2xl shadow-[6px_6px_0px_0px_#B9FF66] p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50 ltr:left-0 rtl:right-0"
              >
                {featureItems.map((item) => {
                  const ItemIcon = item.icon;
                  const isActive = currentPage === item.pageId;
                  return (
                    <button
                      key={item.pageId}
                      onClick={() => handleNavClick(item.pageId)}
                      className={`w-full text-right rtl:text-right ltr:text-left flex items-start gap-3 p-2.5 rounded-xl border transition-all group cursor-pointer ${
                        isActive
                          ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]'
                          : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/30 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="p-2 bg-[#F3F3F3] dark:bg-[#2A2B38] border border-[#191A23] dark:border-[#B9FF66]/30 rounded-lg text-[#191A23] dark:text-[#B9FF66] group-hover:bg-white dark:group-hover:bg-[#B9FF66] dark:group-hover:text-[#191A23] shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                          {lang === 'fa' ? item.labelFa : item.labelEn}
                        </div>
                        <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                          {lang === 'fa' ? item.descFa : item.descEn}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* About Us Dropdown (درباره ما) */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
              onMouseEnter={() => setActiveDropdown('about')}
              className={`px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 cursor-pointer ${
                ['team', 'contact', 'testimonials'].includes(currentPage) || activeDropdown === 'about'
                  ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23] font-black'
                  : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/20 dark:hover:border-white/20'
              }`}
            >
              <span>{lang === 'fa' ? 'درباره ما' : 'About Us'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {/* About Submenu */}
            {activeDropdown === 'about' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full mt-2 w-72 bg-white dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-2xl shadow-[6px_6px_0px_0px_#B9FF66] p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50 ltr:left-0 rtl:right-0"
              >
                {aboutItems.map((item) => {
                  const ItemIcon = item.icon;
                  const isActive = currentPage === item.pageId;
                  return (
                    <button
                      key={item.pageId}
                      onClick={() => handleNavClick(item.pageId)}
                      className={`w-full text-right rtl:text-right ltr:text-left flex items-start gap-3 p-2.5 rounded-xl border transition-all group cursor-pointer ${
                        isActive
                          ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]'
                          : 'border-transparent hover:bg-[#F3F3F3] dark:hover:bg-[#2A2B38] hover:border-[#191A23]/30 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="p-2 bg-[#F3F3F3] dark:bg-[#2A2B38] border border-[#191A23] dark:border-[#B9FF66]/30 rounded-lg text-[#191A23] dark:text-[#B9FF66] group-hover:bg-white dark:group-hover:bg-[#B9FF66] dark:group-hover:text-[#191A23] shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                          {lang === 'fa' ? item.labelFa : item.labelEn}
                        </div>
                        <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                          {lang === 'fa' ? item.descFa : item.descEn}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </nav>

        {/* Right Header Controls (Theme Toggle & Language Selector) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Icon-Only Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border border-[#191A23] dark:border-[#B9FF66]/40 rounded-xl bg-[#F3F3F3] dark:bg-[#2A2B38] hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] text-[#191A23] dark:text-[#B9FF66] dark:hover:text-[#191A23] transition-all shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] flex items-center justify-center shrink-0 cursor-pointer"
            title={theme === 'dark' ? (lang === 'fa' ? 'تغییر به تم روشن' : 'Switch to Light Mode') : (lang === 'fa' ? 'تغییر به تم دارک' : 'Switch to Dark Mode')}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[#B9FF66] hover:text-[#191A23] stroke-[2.5] transition-colors" />
            ) : (
              <Moon className="w-5 h-5 text-[#191A23] stroke-[2.5] transition-colors" />
            )}
          </button>

          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 border border-[#191A23] dark:border-white/20 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-[#F3F3F3] dark:bg-[#2A2B38] dark:text-white hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] dark:hover:text-[#191A23] transition-colors shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-[#191A23] dark:text-white" />
            <span>{lang === 'fa' ? 'English' : 'فارسی'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Icon-Only Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 border border-[#191A23] dark:border-[#B9FF66]/40 rounded-lg bg-[#F3F3F3] dark:bg-[#2A2B38] text-[#191A23] dark:text-[#B9FF66] flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#B9FF66]" /> : <Moon className="w-4 h-4 text-[#191A23]" />}
          </button>

          <button
            onClick={toggleLanguage}
            className="border border-[#191A23] dark:border-white/20 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#F3F3F3] dark:bg-[#2A2B38] text-[#191A23] dark:text-white cursor-pointer"
          >
            {lang === 'fa' ? 'EN' : 'فا'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#191A23] dark:border-white/20 rounded-xl bg-[#F3F3F3] dark:bg-[#2A2B38] text-[#191A23] dark:text-white shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#191A23] border-b-2 border-[#191A23] dark:border-[#B9FF66] px-6 py-6 mt-2 space-y-5 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Home Link */}
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl border font-black text-sm text-[#191A23] dark:text-white cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[3px_3px_0px_0px_#191A23]'
                : 'bg-[#F3F3F3] dark:bg-[#2A2B38] border-[#191A23]/20 dark:border-white/10'
            }`}
          >
            <Home className="w-5 h-5 text-[#191A23] dark:text-[#B9FF66]" />
            <span>{lang === 'fa' ? 'صفحه اصلی' : 'Home Overview'}</span>
          </button>

          {/* Group: خدمات بانکی */}
          <div className="space-y-2">
            <div className="text-xs font-black text-[#191A23]/60 dark:text-gray-400 uppercase tracking-wider px-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'fa' ? 'خدمات بانکی' : 'Bank Services'}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {/* E-Banking Portal */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBankingModal();
                }}
                className="w-full text-right rtl:text-right ltr:text-left flex items-center gap-3 p-3 rounded-xl border bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] border-[#191A23] shadow-[3px_3px_0px_0px_#B9FF66] dark:shadow-[3px_3px_0px_0px_#191A23] cursor-pointer"
              >
                <div className="p-2 bg-[#B9FF66] dark:bg-[#191A23] text-[#191A23] dark:text-[#B9FF66] rounded-lg shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">
                    {lang === 'fa' ? 'ورود به اینترنت‌بانک' : 'E-Banking Login'}
                  </div>
                  <div className="text-[11px] opacity-80 font-medium">
                    {lang === 'fa' ? 'پورتال امن بانکداری دیجیتال' : 'Secure e-banking portal'}
                  </div>
                </div>
              </button>

              {/* Open Account Online */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccountModal();
                }}
                className="w-full text-right rtl:text-right ltr:text-left flex items-center gap-3 p-3 rounded-xl border bg-white dark:bg-[#2A2B38] border-[#191A23]/20 dark:border-white/10 hover:bg-[#B9FF66] transition-all cursor-pointer"
              >
                <div className="p-2 bg-[#B9FF66] rounded-lg border border-[#191A23] text-[#191A23] shrink-0">
                  <UserPlus className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                    {lang === 'fa' ? 'افتتاح حساب آنلاین' : 'Open Account Online'}
                  </div>
                  <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                    {lang === 'fa' ? 'افتتاح حساب غیرحضوری و آنلاین' : 'Instant account setup'}
                  </div>
                </div>
              </button>

              {/* All Services Page */}
              <button
                onClick={() => handleNavClick('services')}
                className={`w-full text-right rtl:text-right ltr:text-left flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  currentPage === 'services'
                    ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]'
                    : 'bg-white dark:bg-[#2A2B38] hover:bg-[#F3F3F3] dark:hover:bg-[#323444] border-[#191A23]/20 dark:border-white/10'
                }`}
              >
                <div className="p-2 bg-[#F3F3F3] dark:bg-[#1F202C] border border-[#191A23] dark:border-[#B9FF66]/30 rounded-lg text-[#191A23] dark:text-[#B9FF66] shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                    {lang === 'fa' ? 'معرفی کلی خدمات بانکی' : 'All Banking Services'}
                  </div>
                  <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                    {lang === 'fa' ? 'تسهیلات، اعتبار در حساب و خدمات ارزی' : 'Credit lines, FX & treasury'}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Group: امکانات */}
          <div className="space-y-2">
            <div className="text-xs font-black text-[#191A23]/60 dark:text-gray-400 uppercase tracking-wider px-1">
              {lang === 'fa' ? 'امکانات و ابزارها' : 'Features & Tools'}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {featureItems.map((item) => {
                const ItemIcon = item.icon;
                const isActive = currentPage === item.pageId;
                return (
                  <button
                    key={item.pageId}
                    onClick={() => handleNavClick(item.pageId)}
                    className={`w-full text-right rtl:text-right ltr:text-left flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]'
                        : 'bg-white dark:bg-[#2A2B38] hover:bg-[#F3F3F3] dark:hover:bg-[#323444] border-[#191A23]/20 dark:border-white/10'
                    }`}
                  >
                    <div className="p-2 bg-[#B9FF66] rounded-lg border border-[#191A23] text-[#191A23]">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                        {lang === 'fa' ? item.labelFa : item.labelEn}
                      </div>
                      <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                        {lang === 'fa' ? item.descFa : item.descEn}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group: درباره ما */}
          <div className="space-y-2">
            <div className="text-xs font-black text-[#191A23]/60 dark:text-gray-400 uppercase tracking-wider px-1">
              {lang === 'fa' ? 'درباره ما' : 'About Us'}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {aboutItems.map((item) => {
                const ItemIcon = item.icon;
                const isActive = currentPage === item.pageId;
                return (
                  <button
                    key={item.pageId}
                    onClick={() => handleNavClick(item.pageId)}
                    className={`w-full text-right rtl:text-right ltr:text-left flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#B9FF66] text-[#191A23] border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]'
                        : 'bg-white dark:bg-[#2A2B38] hover:bg-[#F3F3F3] dark:hover:bg-[#323444] border-[#191A23]/20 dark:border-white/10'
                    }`}
                  >
                    <div className="p-2 bg-[#B9FF66] rounded-lg border border-[#191A23] text-[#191A23]">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-[#191A23] dark:text-white">
                        {lang === 'fa' ? item.labelFa : item.labelEn}
                      </div>
                      <div className="text-[11px] text-[#191A23]/70 dark:text-gray-300 font-medium">
                        {lang === 'fa' ? item.descFa : item.descEn}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};



