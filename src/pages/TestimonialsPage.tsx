import React, { useState } from 'react';
import { Language } from '../types';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { MessageSquare, Star, Building2, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

interface TestimonialsPageProps {
  lang: Language;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ lang }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setReview('');
    }, 3500);
  };

  const highImpactCases = [
    {
      companyFa: 'گروه صنعتی پترو پلاس',
      companyEn: 'PetroPlus Industrial Group',
      statsFa: 'تسهیلات ۲۰۰ میلیارد ریالی',
      statsEn: '$5M Credit Line',
      descFa: 'تامین مالی خرید تجهیزات خط تولید و گشایش اعتبار اسنادی (LC) ظرف کمتر از ۴۸ ساعت.',
      descEn: 'Production line equipment financing and LC opening issued within 48 hours.',
    },
    {
      companyFa: 'هلدینگ فناوری داده سامان',
      companyEn: 'Saman Tech Holding',
      statsFa: 'یکپارچه‌سازی API بانکی',
      statsEn: 'Enterprise Open API',
      descFa: 'اتصال سیستم حسابداری به APIهای پرداختی و مدیریت نقدینگی پیشرفته پوزیتیو بانک.',
      descEn: 'Seamless ERP accounting integration with Positivus automated payment APIs.',
    },
    {
      companyFa: 'زنجیره فروشگاه‌های زنجیره‌ای افق',
      companyEn: 'Ofogh Retail Chains',
      statsFa: '+۵,۰۰۰ پایانه فروش هوشمند',
      statsEn: '5,000+ Smart POS Terminals',
      descFa: 'تجهیز کامل شعب به کارتخوان‌های نسل جدید پوزیتیو با تسویه آنی شاخبک.',
      descEn: 'Full POS deployment with instant real-time settlement.',
    },
  ];

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#191A23] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#191A23] text-[#B9FF66] px-4 py-1.5 rounded-xl text-xs font-black">
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'fa' ? 'صدای مشتریان و شرکای تجاری' : 'Client Success & Testimonials'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#191A23] leading-tight">
              {lang === 'fa'
                ? 'تجربه مشتریان و نظرات کسب‌وکارهای همکار با پوزیتیو بانک'
                : 'Customer Feedback & Enterprise Success Stories'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#191A23]/80 leading-relaxed">
              {lang === 'fa'
                ? 'روایت واقعی مدیران شرکت‌های حقوقی و مشتریان حقیقی از سرعت خدمات، کیفیت اینترنت‌بانک و پشتیبانی تخصصی پوزیتیو بانک.'
                : 'Authentic reviews and enterprise case studies from corporate CFOs and personal banking clients.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Testimonials Slider / Grid Component */}
      <TestimonialsSection lang={lang} />

      {/* Enterprise Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#B9FF66] space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="inline-block bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl text-xs font-black">
              {lang === 'fa' ? 'مطالعات موردی شرکتی' : 'Enterprise Case Studies'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'fa' ? 'داستان موفقیت مشتریان کلیدی پوزیتیو بانک' : 'Transforming Business Operations'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highImpactCases.map((item, idx) => (
              <div key={idx} className="bg-[#2A2B38] border-2 border-gray-700 rounded-[28px] p-6 space-y-4 shadow-[4px_4px_0px_0px_#B9FF66]">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#B9FF66] text-[#191A23] rounded-2xl border border-[#191A23]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-[#B9FF66] bg-[#191A23] px-2.5 py-1 rounded-lg border border-[#B9FF66]/30">
                    {lang === 'fa' ? item.statsFa : item.statsEn}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white">
                  {lang === 'fa' ? item.companyFa : item.companyEn}
                </h3>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">
                  {lang === 'fa' ? item.descFa : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Review Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F3F3] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[6px_6px_0px_0px_#191A23] max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#191A23]">
              {lang === 'fa' ? 'تجربه خود از خدمات ما را به اشتراک بگذارید' : 'Submit Your Feedback'}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#191A23]/70">
              {lang === 'fa'
                ? 'دیدگاه شما به بهبود مستمر کیفیت خدمات پوزیتیو بانک کمک می‌کند.'
                : 'Your feedback helps us continuously improve our e-banking products.'}
            </p>
          </div>

          {feedbackSent ? (
            <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl p-6 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#191A23] mx-auto stroke-[2.5]" />
              <h4 className="text-base font-black text-[#191A23]">
                {lang === 'fa' ? 'نظر شما با موفقیت دریافت شد. متشکریم!' : 'Thank you for your rating & feedback!'}
              </h4>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none transition-transform hover:scale-125"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating ? 'text-[#191A23] fill-[#B9FF66]' : 'text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <textarea
                rows={3}
                required
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full bg-white border-2 border-[#191A23] rounded-2xl p-4 text-xs font-bold text-[#191A23] outline-none resize-none shadow-[2px_2px_0px_0px_#191A23]"
                placeholder={
                  lang === 'fa'
                    ? 'تجربه خود را در مورد کیفیت همراه بانک، تسهیلات یا پشتیبانی بنویسید...'
                    : 'Write your thoughts on e-banking app, loan processing or support...'
                }
              />

              <button
                type="submit"
                className="bg-[#191A23] text-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#191A23] font-black px-8 py-3 rounded-xl border-2 border-[#191A23] transition-colors text-xs shadow-[3px_3px_0px_0px_#191A23]"
              >
                {lang === 'fa' ? 'ثبت بازخورد' : 'Submit Feedback'}
              </button>

            </form>
          )}
        </div>
      </section>

    </div>
  );
};
