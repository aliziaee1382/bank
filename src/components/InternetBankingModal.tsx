import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CreditCard, ArrowUpRight, CheckCircle2, User, Building, LogOut, RefreshCw, Send, Smartphone } from 'lucide-react';
import { Language } from '../types';

interface InternetBankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InternetBankingModal: React.FC<InternetBankingModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [accountType, setAccountType] = useState<'personal' | 'corporate'>('corporate');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('1010889923');
  const [password, setPassword] = useState<string>('••••••••');
  const [otpCode, setOtpCode] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);

  // Transfer Simulation
  const [transferAmount, setTransferAmount] = useState<string>('50000000');
  const [destinationIban, setDestinationIban] = useState<string>('IR1205400000012345678901');
  const [transferSuccess, setTransferSuccess] = useState<boolean>(false);

  // Card Lock Toggle
  const [cardLocked, setCardLocked] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    setOtpSent(true);
    setOtpCode('894102');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleQuickDemoLogin = () => {
    setIsLoggedIn(true);
  };

  const handleExecuteTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setTransferAmount('50000000');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#191A23] text-[#191A23] dark:text-[#F3F3F3] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[10px_10px_0px_0px_#B9FF66] p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 rtl:left-6 ltr:right-6 w-10 h-10 rounded-full bg-[#F3F3F3] dark:bg-[#2A2B38] border-2 border-[#191A23] dark:border-white/20 hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] flex items-center justify-center font-bold transition-colors z-20 cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5 text-[#191A23] dark:text-white dark:hover:text-[#191A23]" />
        </button>

        {!isLoggedIn ? (
          /* LOGIN VIEW */
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] rounded-2xl border border-[#191A23]">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#191A23] dark:text-white">
                  {lang === 'fa' ? 'درگاه اینترنت‌بانک پوزیتیو' : 'Positivus Internet Banking'}
                </h3>
                <p className="text-xs text-[#191A23]/70 dark:text-gray-300 font-semibold">
                  {lang === 'fa' ? 'پورتال امن بانکداری دیجیتال و مدیریت حساب‌های شرکتی' : 'Secure digital banking portal for enterprise users'}
                </p>
              </div>
            </div>

            {/* Account Type Tabs */}
            <div className="flex bg-[#F3F3F3] dark:bg-[#2A2B38] p-1.5 rounded-2xl border border-[#191A23] dark:border-white/10">
              <button
                onClick={() => setAccountType('corporate')}
                className={`flex-1 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  accountType === 'corporate'
                    ? 'bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] shadow-[2px_2px_0px_0px_#B9FF66]'
                    : 'text-[#191A23] dark:text-white hover:bg-[#B9FF66]/40'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{lang === 'fa' ? 'حساب حقوقی و شرکتی' : 'Corporate Account'}</span>
              </button>

              <button
                onClick={() => setAccountType('personal')}
                className={`flex-1 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  accountType === 'personal'
                    ? 'bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] shadow-[2px_2px_0px_0px_#B9FF66]'
                    : 'text-[#191A23] dark:text-white hover:bg-[#B9FF66]/40'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{lang === 'fa' ? 'حساب حقیقی / شخصی' : 'Personal Account'}</span>
              </button>
            </div>

            {/* Quick Demo Login Banner */}
            <div className="bg-[#B9FF66] border-2 border-[#191A23] p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[3px_3px_0px_0px_#191A23]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#191A23] shrink-0" />
                <div>
                  <div className="text-xs font-black text-[#191A23]">
                    {lang === 'fa' ? 'ورود آزمایشی یک‌کلیکی بدون رمز:' : 'Instant Demo Portal Sandbox:'}
                  </div>
                  <div className="text-xs text-[#191A23]/80 font-medium">
                    {lang === 'fa' ? 'مشاهده فوری پنل مدیریت حساب شرکت فولاد نوین' : 'Explore live dashboard features with sample account data'}
                  </div>
                </div>
              </div>

              <button
                onClick={handleQuickDemoLogin}
                className="w-full sm:w-auto bg-[#191A23] text-white px-5 py-2.5 rounded-xl font-black text-xs hover:bg-white hover:text-[#191A23] border border-[#191A23] transition-colors shrink-0"
              >
                {lang === 'fa' ? 'ورود دموی سریع' : 'Launch Live Demo'}
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#191A23] block">
                  {accountType === 'corporate' ? (lang === 'fa' ? 'شناسه ملی شرکت / کد کاربری:' : 'Corporate Tax ID / User Code:') : (lang === 'fa' ? 'کد ملی / نام کاربری:' : 'National ID / Username:')}
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3.5 rounded-xl text-sm font-bold text-[#191A23] focus:outline-none focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#191A23] block">
                  {lang === 'fa' ? 'رمز عبور اینترنت‌بانک:' : 'Password:'}
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3.5 rounded-xl text-sm font-bold text-[#191A23] focus:outline-none focus:bg-white"
                />
              </div>

              {/* OTP Row */}
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#191A23] block">
                  {lang === 'fa' ? 'رمز یکبار مصرف (پیامکی/توکن):' : 'Dynamic OTP Code:'}
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    placeholder="894102"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3.5 rounded-xl text-sm font-mono font-bold text-[#191A23] focus:outline-none focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="bg-[#F3F3F3] hover:bg-[#B9FF66] text-[#191A23] font-bold border-2 border-[#191A23] px-4 rounded-xl text-xs shrink-0 transition-colors shadow-[2px_2px_0px_0px_#191A23]"
                  >
                    {otpSent ? (lang === 'fa' ? 'رمز ارسال شد (۸۹۴۱۰۲)' : 'Sent (894102)') : (lang === 'fa' ? 'دریافت رمز پویا' : 'Request OTP')}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#191A23] text-[#B9FF66] font-black py-4 rounded-2xl border-2 border-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] transition-all shadow-[4px_4px_0px_0px_#191A23] text-sm mt-4 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{lang === 'fa' ? 'ورود امن به سامانه اینترنت‌بانک' : 'Secure Login'}</span>
              </button>
            </form>

          </div>
        ) : (
          /* LOGGED IN DASHBOARD VIEW */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Header / Account Overview Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#191A23] text-white p-6 rounded-[32px] border-2 border-[#191A23] shadow-[5px_5px_0px_0px_#B9FF66]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B9FF66] text-[#191A23] font-black flex items-center justify-center text-xl border border-[#191A23]">
                  P
                </div>
                <div>
                  <div className="text-xs font-mono text-[#B9FF66] uppercase">
                    {accountType === 'corporate' ? (lang === 'fa' ? 'حساب حقوقی شرکتی' : 'Corporate Business Account') : (lang === 'fa' ? 'حساب شخصی متصل به شتاب' : 'Personal Checking')}
                  </div>
                  <h4 className="text-xl font-black text-white">
                    {accountType === 'corporate' ? (lang === 'fa' ? 'شرکت صنایع فولاد نوین آریا (سهامی خاص)' : 'Novin Steel Industries Corp.') : (lang === 'fa' ? 'دکتر آرش رضایی' : 'Dr. Arash Rezaei')}
                  </h4>
                  <div className="text-xs font-mono text-gray-300">
                    {lang === 'fa' ? 'شماره شبا:' : 'IBAN:'} IR92 0150 0000 0100 8899 7701
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="bg-white/10 hover:bg-red-500 hover:text-white text-gray-300 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 border border-white/20"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'خروج' : 'Logout'}</span>
                </button>
              </div>
            </div>

            {/* Main Balance Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-[28px] p-6 shadow-[4px_4px_0px_0px_#191A23]">
                <div className="text-xs font-extrabold text-[#191A23]/70 uppercase">
                  {lang === 'fa' ? 'موجودی قابل برداشت:' : 'Available Balance:'}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#191A23] font-mono mt-1">
                  ۴,۸۵۰,۰۰۰,۰۰۰ <span className="text-xs font-normal">تومان</span>
                </div>
                <div className="text-[11px] font-bold text-[#191A23]/80 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'مسدودی: ۰ تومان' : 'Blocked: 0 Toman'}</span>
                </div>
              </div>

              <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[28px] p-6 shadow-[4px_4px_0px_0px_#191A23]">
                <div className="text-xs font-extrabold text-[#191A23]/70 uppercase">
                  {lang === 'fa' ? 'خط اعتباری فعال:' : 'Active Credit Line:'}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#191A23] font-mono mt-1">
                  ۱۰,۰۰۰,۰۰۰,۰۰۰ <span className="text-xs font-normal">تومان</span>
                </div>
                <div className="text-[11px] font-bold text-[#191A23]/80 mt-2">
                  {lang === 'fa' ? 'سقف آماده گشایش LC' : 'Ready for LC Opening'}
                </div>
              </div>

              {/* Quick Card Status */}
              <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[28px] p-6 shadow-[4px_4px_0px_0px_#191A23] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#B9FF66] uppercase">
                    {lang === 'fa' ? 'وضعیت کارت پلاتینیوم:' : 'Platinum Card Status:'}
                  </div>
                  <div className="text-sm font-bold font-mono text-white mt-1">
                    5892 1012 8899 9012
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                  <span className="text-xs text-gray-300 font-bold">
                    {cardLocked ? (lang === 'fa' ? 'کارت قفل است' : 'Card Locked') : (lang === 'fa' ? 'کارت فعال است' : 'Card Active')}
                  </span>
                  <button
                    onClick={() => setCardLocked(!cardLocked)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs border border-[#191A23] transition-colors ${
                      cardLocked ? 'bg-red-500 text-white' : 'bg-[#B9FF66] text-[#191A23]'
                    }`}
                  >
                    {cardLocked ? (lang === 'fa' ? 'بازکردن قفل' : 'Unlock Card') : (lang === 'fa' ? 'قفل موقت کارت' : 'Lock Card')}
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Transfer Widget */}
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[32px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#191A23]">
              <h4 className="text-xl font-black text-[#191A23] mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#191A23]" />
                <span>{lang === 'fa' ? 'انتقال وجه شتابی / پایا / ساتنا' : 'Quick Wire Transfer'}</span>
              </h4>

              {transferSuccess && (
                <div className="mb-4 bg-[#B9FF66] border-2 border-[#191A23] p-4 rounded-2xl flex items-center gap-3 text-xs font-black text-[#191A23] animate-in zoom-in-95">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    {lang === 'fa'
                      ? 'حواله با موفقیت صادر شد! کد پیگیری پایا: PAYA-90182741'
                      : 'Transfer executed successfully! Reference PAYA-90182741'}
                  </span>
                </div>
              )}

              <form onSubmit={handleExecuteTransfer} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6 space-y-1">
                  <label className="text-xs font-bold text-[#191A23] block">
                    {lang === 'fa' ? 'شماره شبا / کارت مقصد:' : 'Destination IBAN:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={destinationIban}
                    onChange={(e) => setDestinationIban(e.target.value)}
                    className="w-full bg-white border border-[#191A23] p-3 rounded-xl text-xs font-mono font-bold"
                  />
                </div>

                <div className="sm:col-span-4 space-y-1">
                  <label className="text-xs font-bold text-[#191A23] block">
                    {lang === 'fa' ? 'مبلغ انتقال (تومان):' : 'Amount (Toman):'}
                  </label>
                  <input
                    type="number"
                    required
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="w-full bg-white border border-[#191A23] p-3 rounded-xl text-xs font-mono font-bold"
                  />
                </div>

                <div className="sm:col-span-2 flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-[#191A23] text-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#191A23] font-black py-3 rounded-xl text-xs border border-[#191A23] transition-colors shadow-[2px_2px_0px_0px_#191A23]"
                  >
                    {lang === 'fa' ? 'انتقال آنی' : 'Transfer Now'}
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-white border-2 border-[#191A23] rounded-[32px] p-6 shadow-[5px_5px_0px_0px_#191A23]">
              <h4 className="text-lg font-black text-[#191A23] mb-4">
                {lang === 'fa' ? 'آخرین گردش‌های حساب' : 'Recent Account Activity'}
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
                  <thead>
                    <tr className="border-b-2 border-[#191A23] text-[#191A23] font-black">
                      <th className="py-3 px-2">{lang === 'fa' ? 'تاریخ و زمان' : 'Date'}</th>
                      <th className="py-3 px-2">{lang === 'fa' ? 'نوع تراکنش' : 'Type'}</th>
                      <th className="py-3 px-2">{lang === 'fa' ? 'توضیحات' : 'Description'}</th>
                      <th className="py-3 px-2">{lang === 'fa' ? 'مبلغ' : 'Amount'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#191A23]/10 font-medium">
                    <tr>
                      <td className="py-3 px-2 font-mono text-gray-500">1403/05/06 - 11:30</td>
                      <td className="py-3 px-2 font-bold text-green-700">واریز ساتنا</td>
                      <td className="py-3 px-2">واریز بابت حواله ارزی شرکت پتروشیمی</td>
                      <td className="py-3 px-2 font-mono font-bold text-green-700">+۳,۵۰۰,۰۰۰,۰۰۰ تومان</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-gray-500">1403/05/05 - 16:10</td>
                      <td className="py-3 px-2 font-bold text-red-600">برداشت پایا</td>
                      <td className="py-3 px-2">تسویه حقوق کارکنان دپارتمان فنی</td>
                      <td className="py-3 px-2 font-mono font-bold text-red-600">-۶۵۰,۰۰۰,۰۰۰ تومان</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono text-gray-500">1403/05/04 - 09:45</td>
                      <td className="py-3 px-2 font-bold text-green-700">سود صندوق</td>
                      <td className="py-3 px-2">سود دوره صندوق درآمد ثابت پوزیتیو</td>
                      <td className="py-3 px-2 font-mono font-bold text-green-700">+۱۴۵,۰۰۰,۰۰۰ تومان</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
