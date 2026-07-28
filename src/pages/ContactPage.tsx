import React, { useState } from 'react';
import { Language } from '../types';
import { PhoneCall, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Building2, Headphones, ShieldAlert } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'general', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      titleFa: 'مرکز تماس و پشتیبانی ۲۴/۷',
      titleEn: '24/7 Call Center',
      valueFa: '۰۲۱-۸۸۹۹۰۰۰۰ (داخلی ۱)',
      valueEn: '+98 (21) 8899-0000',
      descFa: 'پاسخگویی شبانه‌روزی بدون تعطیلی',
      descEn: 'Round-the-clock customer support',
      icon: PhoneCall,
    },
    {
      titleFa: 'پشتیبانی اختصاصی اینترنت‌بانک',
      titleEn: 'Digital Banking Desk',
      valueFa: '۰۲۱-۸۸۹۹۰۱۰۱',
      valueEn: '+98 (21) 8899-0101',
      descFa: 'راهنمایی فنی سامانه‌های آنلاین و رمزدوم',
      descEn: 'Technical assistance for e-banking app',
      icon: Headphones,
    },
    {
      titleFa: 'دفتر مرکزی پوزیتیو بانک',
      titleEn: 'Headquarters Address',
      valueFa: 'تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج پوزیتیو، پلاک ۱۲۰',
      valueEn: 'Positivus Tower, No. 120, Valiasr St, Tehran, Iran',
      descFa: 'کد پستی: ۱۹۹۱۸۸۸۸۱۱',
      descEn: 'Postal Code: 1991888811',
      icon: MapPin,
    },
    {
      titleFa: 'ساعات کاری شعب و ستاد',
      titleEn: 'Working Hours',
      valueFa: 'شنبه تا چهارشنبه: ۰۷:۳۰ الی ۱۶:۰۰ | پنج‌شنبه: ۰۷:۳۰ الی ۱۲:۳۰',
      valueEn: 'Sat–Wed: 07:30 – 16:00 | Thu: 07:30 – 12:30',
      descFa: 'خدمات آنلاین ۲۴ ساعته فعال است',
      descEn: 'Online channels are available 24/7',
      icon: Clock,
    },
  ];

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#B9FF66] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] text-[#191A23] px-4 py-1.5 rounded-xl text-xs font-black">
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'fa' ? 'مرکز ارتباط با مشتریان' : 'Customer Relations Desk'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {lang === 'fa'
                ? 'تماس با پوزیتیو بانک و پشتیبانی شبانه‌روزی'
                : 'Contact Positivus Bank & 24/7 Support'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-gray-300 leading-relaxed">
              {lang === 'fa'
                ? 'تیم پشتیبانی ما آماده پاسخگویی به سوالات، ثبت بازخوردها و ارائه مشاوره اختصاصی به شماست.'
                : 'Our support team is ready to answer questions, record feedback, and offer personal assistance.'}
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66]/40 rounded-[28px] p-6 shadow-[5px_5px_0px_0px_#191A23] dark:shadow-[5px_5px_0px_0px_#B9FF66] space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl flex items-center justify-center text-[#191A23]">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#191A23] dark:text-white">
                      {lang === 'fa' ? info.titleFa : info.titleEn}
                    </h3>
                    <p className="text-xs text-[#191A23]/70 dark:text-gray-300 font-semibold mt-1">
                      {lang === 'fa' ? info.descFa : info.descEn}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#191A23]/10 dark:border-white/10 text-xs font-black text-[#191A23] dark:text-gray-200 dir-ltr text-left">
                  {lang === 'fa' ? info.valueFa : info.valueEn}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66] rounded-[36px] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#B9FF66] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#B9FF66] border border-[#191A23] px-3.5 py-1.5 rounded-xl text-xs font-black text-[#191A23]">
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'fa' ? 'ارسال پیام مستقیم' : 'Direct Message'}</span>
            </div>

            <h2 className="text-3xl font-black text-[#191A23] dark:text-white">
              {lang === 'fa' ? 'فرم دریافت دیدگاه‌ها و درخواست مشاوره' : 'Send Us A Message or Inquiry'}
            </h2>

            <p className="text-xs sm:text-sm text-[#191A23]/80 dark:text-gray-300 font-medium leading-relaxed">
              {lang === 'fa'
                ? 'لطفاً فرم مقابل را تکمیل کنید. کارشناسان پشتیبانی پوزیتیو بانک ظرف حداکثر ۲ ساعت کاری با شما تماس خواهند گرفت.'
                : 'Please complete the form below. Our support specialists will respond within 2 business hours.'}
            </p>

            <div className="bg-white dark:bg-[#2A2B38] border-2 border-[#191A23] dark:border-white/20 rounded-2xl p-6 shadow-[4px_4px_0px_0px_#191A23] dark:shadow-[4px_4px_0px_0px_#B9FF66] space-y-3">
              <div className="flex items-center gap-3 text-xs font-bold text-[#191A23] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#B9FF66] bg-[#191A23] rounded-full p-0.5" />
                <span>{lang === 'fa' ? 'پاسخگویی سریع به ایمیل‌ها و شماره تماس‌ها' : 'Fast email & phone dispatch'}</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-[#191A23] dark:text-white">
                <CheckCircle2 className="w-4 h-4 text-[#B9FF66] bg-[#191A23] rounded-full p-0.5" />
                <span>{lang === 'fa' ? 'حفظ کامل حریم خصوصی و پیگیری شماره تیکت' : 'Strict privacy & ticket tracking'}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-[#2A2B38] border-2 border-[#191A23] dark:border-white/20 rounded-[32px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#191A23] dark:shadow-[6px_6px_0px_0px_#B9FF66]">
            {submitted ? (
              <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl p-8 text-center space-y-3 animate-in fade-in duration-200">
                <CheckCircle2 className="w-12 h-12 text-[#191A23] mx-auto stroke-[2.5]" />
                <h3 className="text-xl font-black text-[#191A23]">
                  {lang === 'fa' ? 'پیام شما با موفقیت ثبت شد' : 'Message Received Successfully'}
                </h3>
                <p className="text-xs font-bold text-[#191A23]/90">
                  {lang === 'fa'
                    ? 'کد پیگیری شما: POS-889921 است. کارشناسان ما به زودی با شما تماس می‌گیرند.'
                    : 'Tracking Code: POS-889921. Our team will contact you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#191A23] dark:text-white">
                    {lang === 'fa' ? 'نام و نام خانوادگی:' : 'Full Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-white/20 rounded-xl p-3 text-sm font-bold text-[#191A23] dark:text-white focus:bg-white dark:focus:bg-[#1F202C] outline-none"
                    placeholder={lang === 'fa' ? 'مثال: علی محمدی' : 'e.g. John Doe'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#191A23] dark:text-white">
                      {lang === 'fa' ? 'شماره تماس:' : 'Phone Number:'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-white/20 rounded-xl p-3 text-sm font-bold text-[#191A23] dark:text-white focus:bg-white dark:focus:bg-[#1F202C] outline-none dir-ltr text-right"
                      placeholder="09121111111"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#191A23] dark:text-white">
                      {lang === 'fa' ? 'ایمیل (اختیاری):' : 'Email (Optional):'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-white/20 rounded-xl p-3 text-sm font-bold text-[#191A23] dark:text-white focus:bg-white dark:focus:bg-[#1F202C] outline-none"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#191A23] dark:text-white">
                    {lang === 'fa' ? 'موضوع پیام:' : 'Subject:'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-white/20 rounded-xl p-3 text-sm font-bold text-[#191A23] dark:text-white outline-none cursor-pointer"
                  >
                    <option value="general" className="dark:bg-[#1F202C]">{lang === 'fa' ? 'مشاوره عمومی و افتتاح حساب' : 'General & Account Opening'}</option>
                    <option value="loan" className="dark:bg-[#1F202C]">{lang === 'fa' ? 'استعلام وام و تسهیلات' : 'Loan & Credit Inquiry'}</option>
                    <option value="corporate" className="dark:bg-[#1F202C]">{lang === 'fa' ? 'خدمات بانکداری شرکتی' : 'Corporate Banking Solutions'}</option>
                    <option value="support" className="dark:bg-[#1F202C]">{lang === 'fa' ? 'پشتیبانی اینترنت‌بانک' : 'E-Banking Support'}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#191A23] dark:text-white">
                    {lang === 'fa' ? 'متن پیام:' : 'Message:'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-white/20 rounded-xl p-3 text-sm font-bold text-[#191A23] dark:text-white focus:bg-white dark:focus:bg-[#1F202C] outline-none resize-none"
                    placeholder={lang === 'fa' ? 'متن درخواست خود را بنویسید...' : 'Write your request here...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] dark:hover:bg-white font-black py-3.5 rounded-xl border-2 border-[#191A23] transition-colors shadow-[3px_3px_0px_0px_#191A23] dark:shadow-[3px_3px_0px_0px_#B9FF66] text-sm flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{lang === 'fa' ? 'ارسال پیام به کارشناسان' : 'Send Message Now'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
