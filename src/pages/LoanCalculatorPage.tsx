import React from 'react';
import { Language } from '../types';
import { LoanCalculatorSection } from '../components/LoanCalculatorSection';
import { Calculator, CheckCircle2, ShieldCheck, HelpCircle, ArrowUpLeft } from 'lucide-react';

interface LoanCalculatorPageProps {
  lang: Language;
  onApplyForLoan: (details: { loanName: string; amount: number; months: number; monthlyPayment: number }) => void;
  onOpenAccountModal: () => void;
}

export const LoanCalculatorPage: React.FC<LoanCalculatorPageProps> = ({
  lang,
  onApplyForLoan,
  onOpenAccountModal,
}) => {
  const faqs = [
    {
      qFa: 'نرخ سود تسهیلات به چه صورت محاسبه می‌شود؟',
      qEn: 'How is the interest rate calculated?',
      aFa: 'نرخ سود سالانه طبق بخشنامه رسمی بانک مرکزی بین ۱۸ تا ۲۳ درصد تعیین شده و به‌صورت ماهانه محاسبه می‌شود.',
      aEn: 'Annual interest rates comply with Central Bank guidelines (18%–23%) calculated on monthly outstanding balances.',
    },
    {
      qFa: 'آیا برای دریافت وام نیاز به ضامن معتبر است؟',
      qEn: 'Is a guarantor required for loans?',
      aFa: 'برای تسهیلات تا سقف ۲ میلیارد ریال بر اساس اعتبارسنجی هوشمند، بدون ضامن و فقط با چک صیادی امکان‌پذیر است.',
      aEn: 'For loans up to 200M IRR based on AI credit scoring, no guarantor is needed—only registered promissory notes.',
    },
    {
      qFa: 'مدت زمان واریز تسهیلات پس از تایید چقدر است؟',
      qEn: 'How long until funds are disbursed after approval?',
      aFa: 'پس از تکمیل مدارک و تایید اعتبارسنجی، مبلغ وام ظرف کمتر از ۴۸ ساعت کاری به حساب شما واریز خواهد شد.',
      aEn: 'Once documents are verified, funds are disbursed to your account within 48 business hours.',
    },
  ];

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#B9FF66] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] text-[#191A23] px-4 py-1.5 rounded-xl text-xs font-black">
              <Calculator className="w-4 h-4" />
              <span>{lang === 'fa' ? 'سامانه هوشمند محاسبات اعتباری' : 'Credit Simulator Engine'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {lang === 'fa'
                ? 'محاسبه‌گر آنلاین اقساط و دریافت آنلاین تسهیلات'
                : 'Online Loan Amortization Calculator & Approval'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-gray-300 leading-relaxed">
              {lang === 'fa'
                ? 'مبلغ و بازه زمانی بازپرداخت را مشخص کنید تا اقساط ماهانه، کل سود و جدول کامل بازپرداخت به‌صورت لحظه‌ای برای شما محاسبه شود.'
                : 'Adjust amount and tenure sliders to instantly calculate monthly payments, total interest, and complete payment breakdown.'}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Main Section */}
      <LoanCalculatorSection
        lang={lang}
        onApplyForLoan={onApplyForLoan}
      />

      {/* Loan Eligibility & Document Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Eligibility Card */}
          <div className="bg-white border-2 border-[#191A23] rounded-[32px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#191A23] space-y-4">
            <div className="inline-block bg-[#B9FF66] border border-[#191A23] text-[#191A23] px-3 py-1 rounded-xl text-xs font-black">
              {lang === 'fa' ? 'شرایط اعتبارسنجی' : 'Eligibility Criteria'}
            </div>
            <h3 className="text-2xl font-black text-[#191A23]">
              {lang === 'fa' ? 'شرایط عمومی دریافت تسهیلات' : 'General Qualification Rules'}
            </h3>
            
            <div className="space-y-3 pt-2">
              {[
                lang === 'fa' ? 'داشتن سن حداقل ۱۸ سال تمام' : 'Minimum age of 18 years old',
                lang === 'fa' ? 'عدم وجود چک برگشتی و بدهی معوق در شبکه بانکی' : 'No defaulted loans or bounced checks in banking registry',
                lang === 'fa' ? 'داشتن رتبه اعتباری A یا B در سامانه اعتبارسنجی' : 'Credit score rank A or B in central scoring system',
                lang === 'fa' ? 'داشتن حساب فعال در پوزیتیو بانک (حداقل ۳ ماه گردش)' : 'Active Positivus Bank account (min 3 months history)',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-bold text-[#191A23]">
                  <CheckCircle2 className="w-5 h-5 text-[#191A23] bg-[#B9FF66] rounded-full p-0.5 border border-[#191A23] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Card */}
          <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[32px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#191A23] space-y-4">
            <div className="inline-block bg-[#191A23] text-[#B9FF66] px-3 py-1 rounded-xl text-xs font-black">
              {lang === 'fa' ? 'مدارک مورد نیاز' : 'Required Documents'}
            </div>
            <h3 className="text-2xl font-black text-[#191A23]">
              {lang === 'fa' ? 'مدارک لازم جهت بارگذاری آنلاین' : 'Online Document Checklist'}
            </h3>

            <div className="space-y-3 pt-2">
              {[
                lang === 'fa' ? 'تصویر کارت ملی هوشمند و شناسنامه' : 'National Digital ID & Passport photo',
                lang === 'fa' ? 'گواهی اشتغال به کار یا گواهی درآمد متقاضی' : 'Proof of income / Employment verification certificate',
                lang === 'fa' ? 'پرینت ۳ ماهه حساب بانکی با مهر شعبه' : '3-month official bank statement',
                lang === 'fa' ? 'تاییدیه پستی محل سکونت (قبض یا سند/اجاره‌نامه)' : 'Proof of residence / Postal code verification',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-bold text-[#191A23]">
                  <ShieldCheck className="w-5 h-5 text-[#191A23] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#B9FF66] space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] border border-[#191A23] px-3 py-1 rounded-xl text-xs font-black text-[#191A23]">
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'fa' ? 'سوالات متداول تسهیلات' : 'Loan FAQs'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#191A23]">
              {lang === 'fa' ? 'پاسخ به سوالات پرتکرار وام‌گیرندگان' : 'Frequently Asked Questions About Borrowing'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-2xl p-6 shadow-[3px_3px_0px_0px_#191A23]">
                <h4 className="text-base font-black text-[#191A23] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#B9FF66] border border-[#191A23] rounded-full flex items-center justify-center text-xs">
                    ؟
                  </span>
                  {lang === 'fa' ? faq.qFa : faq.qEn}
                </h4>
                <p className="text-xs sm:text-sm text-[#191A23]/80 font-medium leading-relaxed pr-8 rtl:pr-8 ltr:pl-8">
                  {lang === 'fa' ? faq.aFa : faq.aEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
