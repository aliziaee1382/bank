import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Sparkles, User, Building, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';

interface AccountOpenModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AccountOpenModal: React.FC<AccountOpenModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [step, setStep] = useState<number>(1);
  const [accountCategory, setAccountCategory] = useState<'corporate' | 'personal'>('corporate');
  const [fullName, setFullName] = useState<string>('');
  const [nationalId, setNationalId] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [kycCompleted, setKycCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setKycCompleted(true);
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setFullName('');
    setNationalId('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#191A23] text-[#191A23] dark:text-[#F3F3F3] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-[40px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[10px_10px_0px_0px_#B9FF66] p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 rtl:left-6 ltr:right-6 w-10 h-10 rounded-full bg-[#F3F3F3] dark:bg-[#2A2B38] border-2 border-[#191A23] dark:border-white/20 hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] flex items-center justify-center font-bold transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5 text-[#191A23] dark:text-white dark:hover:text-[#191A23]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#B9FF66] text-[#191A23] rounded-2xl border border-[#191A23]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#191A23] dark:text-white">
              {lang === 'fa' ? 'افتتاح حساب غیرحضوری آنلاین' : 'Online Account Opening'}
            </h3>
            <p className="text-xs text-[#191A23]/70 dark:text-gray-300 font-bold">
              {lang === 'fa' ? 'صدور فوری کارت و ثبت‌نام در کمتر از ۳ دقیقه' : 'Instant card issue and account setup'}
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8 px-2 font-mono text-xs font-black">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#191A23]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full border border-[#191A23] flex items-center justify-center ${step >= 1 ? 'bg-[#B9FF66]' : 'bg-gray-200'}`}>1</span>
            <span>{lang === 'fa' ? 'اطلاعات اولیه' : 'Basic Info'}</span>
          </div>

          <div className="h-0.5 grow mx-4 bg-[#191A23]/20"></div>

          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#191A23]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full border border-[#191A23] flex items-center justify-center ${step >= 2 ? 'bg-[#B9FF66]' : 'bg-gray-200'}`}>2</span>
            <span>{lang === 'fa' ? 'احراز هویت' : 'Biometric KYC'}</span>
          </div>

          <div className="h-0.5 grow mx-4 bg-[#191A23]/20"></div>

          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#191A23]' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full border border-[#191A23] flex items-center justify-center ${step >= 3 ? 'bg-[#B9FF66]' : 'bg-gray-200'}`}>3</span>
            <span>{lang === 'fa' ? 'صدور کارت' : 'Virtual Card'}</span>
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            
            {/* Category Select */}
            <div className="flex bg-[#F3F3F3] p-1.5 rounded-2xl border border-[#191A23]">
              <button
                type="button"
                onClick={() => setAccountCategory('corporate')}
                className={`flex-1 py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 ${
                  accountCategory === 'corporate' ? 'bg-[#191A23] text-[#B9FF66]' : 'text-[#191A23]'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{lang === 'fa' ? 'حساب شرکتی / حقوقی' : 'Corporate Account'}</span>
              </button>

              <button
                type="button"
                onClick={() => setAccountCategory('personal')}
                className={`flex-1 py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 ${
                  accountCategory === 'personal' ? 'bg-[#191A23] text-[#B9FF66]' : 'text-[#191A23]'
                }`}
              >
                <User className="w-4 h-4" />
                <span>{lang === 'fa' ? 'حساب شخصی' : 'Personal Account'}</span>
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-[#191A23] block">
                {accountCategory === 'corporate' ? (lang === 'fa' ? 'نام شرکت / سازمان:' : 'Company Name:') : (lang === 'fa' ? 'نام و نام خانوادگی:' : 'Full Name:')}
              </label>
              <input
                type="text"
                required
                placeholder={accountCategory === 'corporate' ? 'شرکت فناوری فولاد نوین' : 'آرش رضایی'}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3 rounded-xl text-sm font-bold focus:outline-none focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#191A23] block">
                  {accountCategory === 'corporate' ? (lang === 'fa' ? 'شناسه ملی شرکت:' : 'Tax ID:') : (lang === 'fa' ? 'کد ملی ۱۰ رقمی:' : 'National ID:')}
                </label>
                <input
                  type="text"
                  required
                  placeholder="0018923019"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3 rounded-xl text-sm font-bold focus:outline-none focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#191A23] block">
                  {lang === 'fa' ? 'شماره همراه (به نام متقاضی):' : 'Mobile Phone:'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="09121112233"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#F3F3F3] border-2 border-[#191A23] p-3 rounded-xl text-sm font-bold focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#191A23] text-[#B9FF66] font-black py-3.5 rounded-2xl border-2 border-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] transition-colors shadow-[3px_3px_0px_0px_#191A23] text-sm mt-4 flex items-center justify-center gap-2"
            >
              <span>{lang === 'fa' ? 'ادامه و استعلام شاهکار' : 'Proceed to Biometric KYC'}</span>
              <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-6 text-center">
            <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 bg-[#B9FF66] text-[#191A23] rounded-2xl border-2 border-[#191A23] mx-auto flex items-center justify-center font-bold text-2xl animate-pulse">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-[#191A23]">
                {lang === 'fa' ? 'احراز هویت هوشمند بیومتریک' : 'AI Face Matching & Verification'}
              </h4>
              <p className="text-xs text-[#191A23]/80 font-medium max-w-md mx-auto">
                {lang === 'fa'
                  ? 'ارتباط مستمر با سامانه ثبت احوال و شاهکار انجام شد. لطفاً تصویر کارت ملی یا اسکن ویدئویی کوتاهی ارسال کنید.'
                  : 'National Registry query verified. Please upload a short video or face photo.'}
              </p>

              <div className="p-4 bg-white border border-[#191A23] rounded-2xl font-mono text-xs font-bold text-green-700">
                ✓ {lang === 'fa' ? 'تطبیق شماره همراه با کد ملی: تایید شد' : 'Phone & ID Match: Verified'}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#B9FF66] text-[#191A23] font-black py-4 rounded-2xl border-2 border-[#191A23] hover:bg-[#191A23] hover:text-[#B9FF66] transition-colors shadow-[4px_4px_0px_0px_#191A23] text-sm"
            >
              {lang === 'fa' ? 'تایید نهایی و صدور فوری حساب' : 'Confirm & Generate Virtual Card'}
            </button>
          </form>
        )}

        {/* STEP 3 - SUCCESS VIRTUAL CARD */}
        {step === 3 && (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div className="bg-[#B9FF66] border-2 border-[#191A23] p-4 rounded-2xl flex items-center justify-center gap-2 font-black text-[#191A23] text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>{lang === 'fa' ? 'افتتاح حساب با موفقیت انجام شد!' : 'Account Successfully Created!'}</span>
            </div>

            {/* Virtual Metallic Card Preview */}
            <div className="bg-[#191A23] text-white rounded-[32px] p-6 border-2 border-[#191A23] shadow-[6px_6px_0px_0px_#B9FF66] text-right rtl:text-right ltr:text-left space-y-6 relative overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-[#B9FF66]">Positivus Digital Card</span>
                <span className="text-xs font-bold bg-[#B9FF66] text-[#191A23] px-2 py-0.5 rounded">PLATINUM</span>
              </div>

              <div className="text-2xl font-mono font-black tracking-widest text-[#B9FF66]">
                5022 2910 8841 9002
              </div>

              <div className="flex justify-between items-end text-xs font-mono">
                <div>
                  <div className="text-gray-400 text-[9px] uppercase">Account Owner</div>
                  <div className="font-bold text-white uppercase">{fullName || 'POSITIVUS USER'}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] uppercase">CVV2</div>
                  <div className="font-bold text-[#B9FF66]">781</div>
                </div>
                <div>
                  <div className="text-gray-400 text-[9px] uppercase">EXP</div>
                  <div className="font-bold text-[#B9FF66]">10/31</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#191A23]/80 font-medium">
              {lang === 'fa'
                ? 'کارت فیزیکی شما در کادر امنیتی بسته‌بندی شده و ظرف ۲۴ ساعت آینده به آدرس شما ارسال می‌گردد.'
                : 'Your physical metallic card will be delivered to your address within 24 hours.'}
            </p>

            <button
              onClick={handleReset}
              className="w-full bg-[#191A23] text-white font-black py-3.5 rounded-2xl border-2 border-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] transition-colors shadow-[3px_3px_0px_0px_#191A23]"
            >
              {lang === 'fa' ? 'بستن و بازگشت به صفحه اصلی' : 'Close & Return to Home'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
