import React from 'react';
import { Language } from '../types';
import { TeamSection } from '../components/TeamSection';
import { Users, Building2, ShieldCheck, Award, Briefcase } from 'lucide-react';

interface TeamPageProps {
  lang: Language;
}

export const TeamPage: React.FC<TeamPageProps> = ({ lang }) => {
  const stats = [
    { labelFa: 'سرمایه ثبت شده', labelEn: 'Registered Capital', valFa: '۲۵۰,۰۰۰ میلیارد ریال', valEn: '$2.5 Billion' },
    { labelFa: 'تعداد شعب فعال', labelEn: 'Active Branches', valFa: '۱۴۰ شعبه تخصصی', valEn: '140 Branches' },
    { labelFa: 'پرسنل متخصص', labelEn: 'Financial Professionals', valFa: '+۳,۵۰۰ نفر', valEn: '3,500+ Staff' },
    { labelFa: 'رتبه اعتبار بین‌المللی', labelEn: 'Credit Rating Rank', valFa: 'Grade AA+', valEn: 'Grade AA+' },
  ];

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#191A23] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#191A23] text-[#B9FF66] px-4 py-1.5 rounded-xl text-xs font-black">
              <Users className="w-4 h-4" />
              <span>{lang === 'fa' ? 'راهبری شرکتی و ساختار مدیریتی' : 'Corporate Leadership & Governance'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#191A23] leading-tight">
              {lang === 'fa'
                ? 'تیم مدیریتی و اعضای هیئت مدیره پوزیتیو بانک'
                : 'Executive Leadership & Board of Directors'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#191A23]/80 leading-relaxed">
              {lang === 'fa'
                ? 'مدیران ارشد و متخصصان باسابقه صنعت بانکداری که هدایت نوآوری‌های مالی، حاکمیت شرکتی و رشد پایدار پوزیتیو بانک را بر عهده دارند.'
                : 'Seasoned banking executives guiding financial innovation, corporate governance, and sustainable growth.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Profiles Section */}
      <TeamSection lang={lang} />

      {/* Bank Governance Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[8px_8px_0px_0px_#B9FF66]">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'fa' ? 'پوزیتیو بانک در یک نگاه' : 'Positivus Bank At A Glance'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">
              {lang === 'fa'
                ? 'شاخص‌های کلیدی عملکرد و پایداری مالی پوزیتیو بانک'
                : 'Key metrics demonstrating financial stability and enterprise footprint'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#2A2B38] border-2 border-gray-700 p-6 rounded-2xl space-y-2">
                <div className="text-xl sm:text-2xl font-black text-[#B9FF66]">
                  {lang === 'fa' ? stat.valFa : stat.valEn}
                </div>
                <div className="text-xs font-bold text-gray-300">
                  {lang === 'fa' ? stat.labelFa : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
