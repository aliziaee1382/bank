import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Language } from '../types';
import { testimonialsData } from '../data/bankData';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#191A23] dark:text-white flex items-center gap-3">
            <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
              {lang === 'fa' ? 'نظرات مشتریان' : 'Testimonials'}
            </span>
            <span>{lang === 'fa' ? 'تجربه شرکت‌ها و سرمایه‌گذاران' : 'Hear From Our Clients'}</span>
          </h2>
          <p className="text-base text-[#191A23]/80 dark:text-gray-300 font-medium max-w-xl">
            {lang === 'fa'
              ? 'رضایت صاحبان صنایع و مدیران ارشد مالی از خدمات و تسهیلات اعتباری پوزیتیو بانک.'
              : 'Read how our innovative financial services helped companies achieve their corporate objectives.'}
          </p>
        </div>

        {/* Positivus Dark Testimonials Box */}
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[45px] p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_#B9FF66] relative overflow-hidden">
          
          <div className="max-w-4xl mx-auto">
            
            {/* Speech Bubble Container */}
            <div className="border-2 border-[#B9FF66] rounded-[32px] p-8 sm:p-10 relative bg-[#191A23] shadow-[4px_4px_0px_0px_#B9FF66]">
              <Quote className="w-10 h-10 text-[#B9FF66] opacity-40 absolute top-4 right-6 rtl:right-6 ltr:left-6" />
              
              <p className="text-lg sm:text-2xl font-bold leading-relaxed text-white relative z-10 pt-4">
                {lang === 'fa' ? activeTestimonial.quoteFa : activeTestimonial.quoteEn}
              </p>
            </div>

            {/* Author Info & Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 px-4">
              
              {/* Author details */}
              <div>
                <h4 className="text-xl font-black text-[#B9FF66]">
                  {lang === 'fa' ? activeTestimonial.authorFa : activeTestimonial.authorEn}
                </h4>
                <p className="text-xs text-gray-300 font-medium">
                  {lang === 'fa' ? activeTestimonial.roleFa : activeTestimonial.roleEn} — {lang === 'fa' ? activeTestimonial.companyFa : activeTestimonial.companyEn}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border-2 border-[#B9FF66] bg-[#191A23] text-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#191A23] flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ArrowRight className="w-5 h-5 rtl:rotate-0 ltr:rotate-180" />
                </button>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#B9FF66] font-bold">
                  {testimonialsData.map((_, idx) => (
                    <span
                      key={idx}
                      className={`inline-block h-2.5 rounded-full transition-all ${
                        idx === currentIndex ? 'w-8 bg-[#B9FF66]' : 'w-2.5 bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border-2 border-[#B9FF66] bg-[#191A23] text-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#191A23] flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ArrowLeft className="w-5 h-5 rtl:rotate-0 ltr:rotate-180" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
