import React, { useState } from 'react';
import { Calculator, Check, ShieldCheck, HelpCircle, ArrowUpLeft } from 'lucide-react';
import { Language, LoanType } from '../types';
import { loanTypesData } from '../data/bankData';

interface LoanCalculatorSectionProps {
  lang: Language;
  onApplyForLoan: (loanDetails: { loanName: string; amount: number; months: number; monthlyPayment: number }) => void;
}

export const LoanCalculatorSection: React.FC<LoanCalculatorSectionProps> = ({ lang, onApplyForLoan }) => {
  const [selectedLoan, setSelectedLoan] = useState<LoanType>(loanTypesData[0]);
  const [amount, setAmount] = useState<number>(selectedLoan.minAmount * 2);
  const [months, setMonths] = useState<number>(24);
  const [rate, setRate] = useState<number>(selectedLoan.defaultRate);

  // Switch loan type resets ranges
  const handleSelectLoanType = (loan: LoanType) => {
    setSelectedLoan(loan);
    setAmount(Math.round((loan.minAmount + loan.maxAmount) / 2));
    setMonths(Math.min(36, loan.maxMonths));
    setRate(loan.defaultRate);
  };

  // Monthly installment formula
  // P = principal, r = monthly interest rate, n = number of months
  // M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
  const calculateInstallment = () => {
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) return amount / months;
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateInstallment();
  const totalRepayment = monthlyPayment * months;
  const totalInterest = Math.max(0, totalRepayment - amount);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US').format(num);
  };

  return (
    <section id="loan-calculator" className="py-20 bg-[#F3F3F3] dark:bg-[#111218] border-y-2 border-[#191A23] dark:border-[#B9FF66]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#191A23] dark:text-white flex items-center gap-3">
            <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
              {lang === 'fa' ? 'محاسبه‌گر هوشمند' : 'Smart Loan Calculator'}
            </span>
            <span>{lang === 'fa' ? 'تسهیلات و وام' : 'Simulate Your Credit'}</span>
          </h2>
          <p className="text-base text-[#191A23]/80 dark:text-gray-300 font-medium max-w-xl">
            {lang === 'fa'
              ? 'مبلغ و مدت بازپرداخت مورد نظر خود را مشخص کنید تا میزان اقساط و سود بانکی بلافاصله محاسبه شود.'
              : 'Choose your desired funding type, duration, and amount to view monthly installments in real time.'}
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-[40px] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#191A23] dark:shadow-[8px_8px_0px_0px_#B9FF66]">
          
          {/* Loan Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {loanTypesData.map((loan) => (
              <button
                key={loan.id}
                onClick={() => handleSelectLoanType(loan)}
                className={`px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm border-2 border-[#191A23] transition-all shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] cursor-pointer ${
                  selectedLoan.id === loan.id
                    ? 'bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23]'
                    : 'bg-[#F3F3F3] dark:bg-[#2A2B38] text-[#191A23] dark:text-white hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] dark:hover:text-[#191A23]'
                }`}
              >
                {lang === 'fa' ? loan.nameFa : loan.nameEn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Amount */}
              <div className="space-y-3 bg-[#F3F3F3] dark:bg-[#2A2B38] p-6 rounded-2xl border border-[#191A23] dark:border-white/20">
                <div className="flex justify-between items-center text-sm sm:text-base font-extrabold text-[#191A23] dark:text-white">
                  <span>{lang === 'fa' ? 'مبلغ درخواست تسهیلات:' : 'Loan Amount:'}</span>
                  <span className="bg-[#B9FF66] text-[#191A23] border border-[#191A23] px-3 py-1 rounded-lg text-lg font-black">
                    {formatNumber(amount)} {lang === 'fa' ? 'تومان' : 'Toman'}
                  </span>
                </div>

                <input
                  type="range"
                  min={selectedLoan.minAmount}
                  max={selectedLoan.maxAmount}
                  step={selectedLoan.stepAmount}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer accent-[#191A23] border border-[#191A23]"
                />

                <div className="flex justify-between text-xs font-mono font-bold text-[#191A23]/60">
                  <span>{formatNumber(selectedLoan.minAmount)} تومان</span>
                  <span>{formatNumber(selectedLoan.maxAmount)} تومان</span>
                </div>
              </div>

              {/* Slider 2: Duration (Months) */}
              <div className="space-y-3 bg-[#F3F3F3] p-6 rounded-2xl border border-[#191A23]">
                <div className="flex justify-between items-center text-sm sm:text-base font-extrabold text-[#191A23]">
                  <span>{lang === 'fa' ? 'مدت بازپرداخت (ماه):' : 'Repayment Months:'}</span>
                  <span className="bg-[#191A23] text-white px-3 py-1 rounded-lg text-lg font-black">
                    {formatNumber(months)} {lang === 'fa' ? 'ماه' : 'Months'}
                  </span>
                </div>

                <input
                  type="range"
                  min={12}
                  max={selectedLoan.maxAmount ? selectedLoan.maxMonths : 60}
                  step={6}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer accent-[#191A23] border border-[#191A23]"
                />

                <div className="flex justify-between text-xs font-mono font-bold text-[#191A23]/60">
                  <span>۱۲ ماه</span>
                  <span>{selectedLoan.maxMonths} ماه</span>
                </div>
              </div>

              {/* Interest Rate Note */}
              <div className="flex items-center gap-3 bg-[#B9FF66]/30 border border-[#191A23] p-4 rounded-xl text-xs sm:text-sm font-bold text-[#191A23]">
                <ShieldCheck className="w-5 h-5 text-[#191A23] shrink-0" />
                <span>
                  {lang === 'fa'
                    ? `نرخ سود سالانه مصوب: ${rate}٪ | بدون جریمه دیرکرد در صورت فعال‌سازی برداشت خودکار از حساب.`
                    : `Approved Annual Interest Rate: ${rate}% | No late payment penalties with automated direct debit.`}
                </span>
              </div>

            </div>

            {/* Calculations Result Box */}
            <div className="lg:col-span-5 bg-[#191A23] text-white rounded-[32px] p-6 sm:p-8 border-2 border-[#191A23] shadow-[5px_5px_0px_0px_#B9FF66] space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <div className="text-xs uppercase font-mono tracking-wider text-[#B9FF66] font-bold">
                  {lang === 'fa' ? 'خلاصه محاسبه تسهیلات' : 'Loan Summary'}
                </div>
                <Calculator className="w-5 h-5 text-[#B9FF66]" />
              </div>

              <div className="space-y-4">
                
                {/* Monthly Payment */}
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs text-gray-300 font-semibold mb-1">
                    {lang === 'fa' ? 'مبلغ قسط ماهانه:' : 'Estimated Monthly Payment:'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#B9FF66]">
                    {formatNumber(monthlyPayment)} <span className="text-sm font-normal text-white">{lang === 'fa' ? 'تومان / ماه' : 'Toman/mo'}</span>
                  </div>
                </div>

                {/* Total Interest */}
                <div className="flex justify-between items-center text-sm font-semibold pt-2 border-t border-white/10">
                  <span className="text-gray-300">{lang === 'fa' ? 'مجموع سود تسهیلات:' : 'Total Interest:'}</span>
                  <span className="font-mono font-bold text-white">{formatNumber(totalInterest)} {lang === 'fa' ? 'تومان' : 'Toman'}</span>
                </div>

                {/* Total Repayment */}
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-gray-300">{lang === 'fa' ? 'مجموع کل بازپرداخت:' : 'Total Repayment:'}</span>
                  <span className="font-mono font-bold text-[#B9FF66]">{formatNumber(totalRepayment)} {lang === 'fa' ? 'تومان' : 'Toman'}</span>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onApplyForLoan({
                    loanName: lang === 'fa' ? selectedLoan.nameFa : selectedLoan.nameEn,
                    amount,
                    months,
                    monthlyPayment,
                  })
                }
                className="w-full bg-[#B9FF66] hover:bg-white text-[#191A23] font-black py-4 rounded-2xl border-2 border-[#191A23] transition-all shadow-[3px_3px_0px_0px_#191A23] flex items-center justify-center gap-2 group"
              >
                <span>{lang === 'fa' ? 'ثبت درخواست آنلاین این تسهیلات' : 'Apply Online For Loan'}</span>
                <ArrowUpLeft className="w-5 h-5 stroke-[2.5] group-hover:translate-x-[-2px]" />
              </button>

              <div className="text-[11px] text-gray-400 text-center font-medium">
                {lang === 'fa' ? 'بررسی شایستگی اعتباری و واریز در کمتر از ۴۸ ساعت کاری.' : 'Instant pre-approval check in less than 48 hours.'}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
