import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Language } from '../types';
import { processStepsData } from '../data/bankData';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const [openStep, setOpenStep] = useState<string>('01');

  const toggleStep = (stepNumber: string) => {
    setOpenStep(openStep === stepNumber ? '' : stepNumber);
  };

  return (
    <section id="process" className="py-20 bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#191A23] dark:text-white flex items-center gap-3">
            <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
              {lang === 'fa' ? 'راهنمای گام‌به‌گام' : 'Step-by-Step Guide'}
            </span>
            <span>{lang === 'fa' ? 'عضویت و دریافت خدمات' : 'Onboarding Process'}</span>
          </h2>
          <p className="text-base text-[#191A23]/80 dark:text-gray-300 font-medium max-w-xl">
            {lang === 'fa'
              ? 'مراحل ساده افتتاح حساب آنلاین، احراز هویت بیومتریک و شروع استفاده از خدمات نوین پوزیتیو بانک.'
              : 'Our simple step-by-step process to open an account and unlock seamless corporate banking.'}
          </p>
        </div>

        {/* Positivus Accordion List */}
        <div className="space-y-6">
          {processStepsData.map((step) => {
            const isOpen = openStep === step.number;

            return (
              <div
                key={step.number}
                className={`rounded-[30px] sm:rounded-[40px] border-2 border-[#191A23] transition-all duration-300 p-6 sm:p-8 ${
                  isOpen
                    ? 'bg-[#B9FF66] text-[#191A23] shadow-[6px_6px_0px_0px_#191A23]'
                    : 'bg-[#F3F3F3] dark:bg-[#1F202C] text-[#191A23] dark:text-white shadow-[4px_4px_0px_0px_#191A23] dark:shadow-[4px_4px_0px_0px_#B9FF66] hover:bg-[#B9FF66]/30'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleStep(step.number)}
                  className="w-full flex items-center justify-between text-right rtl:text-right ltr:text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`text-3xl sm:text-5xl font-black font-mono ${isOpen ? 'text-[#191A23]' : 'text-[#191A23] dark:text-[#B9FF66]'}`}>
                      {step.number}
                    </span>
                    <h3 className={`text-lg sm:text-2xl font-black ${isOpen ? 'text-[#191A23]' : 'text-[#191A23] dark:text-white'}`}>
                      {lang === 'fa' ? step.titleFa : step.titleEn}
                    </h3>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F3F3] border-2 border-[#191A23] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#191A23]">
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-[#191A23] stroke-[3]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#191A23] stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t-2 border-[#191A23]/20 animate-in fade-in duration-200">
                    <p className="text-base sm:text-lg font-medium text-[#191A23] leading-relaxed">
                      {lang === 'fa' ? step.descFa : step.descEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
