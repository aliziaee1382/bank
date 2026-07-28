import React from 'react';
import { ArrowUpLeft, Smartphone, Landmark, LineChart, CreditCard, RefreshCw, ShieldCheck } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { servicesData } from '../data/bankData';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  
  const renderIcon = (type: ServiceItem['iconType'], cardType: ServiceItem['cardType']) => {
    const iconClass = cardType === 'dark' ? 'text-[#B9FF66]' : 'text-[#191A23]';
    switch (type) {
      case 'mobile':
        return <Smartphone className={`w-12 h-12 ${iconClass}`} />;
      case 'loan':
        return <Landmark className={`w-12 h-12 ${iconClass}`} />;
      case 'investment':
        return <LineChart className={`w-12 h-12 ${iconClass}`} />;
      case 'card':
        return <CreditCard className={`w-12 h-12 ${iconClass}`} />;
      case 'exchange':
        return <RefreshCw className={`w-12 h-12 ${iconClass}`} />;
      case 'security':
        return <ShieldCheck className={`w-12 h-12 ${iconClass}`} />;
      default:
        return <Landmark className={`w-12 h-12 ${iconClass}`} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Positivus Section Header with Green Title Badge */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191A23] dark:text-white flex items-center gap-3">
              <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
                {lang === 'fa' ? 'خدمات جامع' : 'Services'}
              </span>
              <span>{lang === 'fa' ? 'پوزیتیو بانک' : 'At Positivus'}</span>
            </h2>
          </div>
          <p className="text-base text-[#191A23]/80 dark:text-gray-300 font-medium max-w-xl md:border-r-2 md:border-l-0 border-[#191A23]/20 dark:border-white/20 md:pr-6 rtl:md:border-r-2 rtl:md:border-l-0 ltr:md:border-l-2 ltr:md:border-r-0 ltr:md:pl-6">
            {lang === 'fa'
              ? 'ارائه راهکارهای مالی پیشرفته و متمایز برای اشخاص، کسب‌وکارهای نوپا و سازمان‌های بزرگ صنعتی.'
              : 'At our modern banking institution, we offer a wide range of services to help individuals and corporate enterprises thrive.'}
          </p>
        </div>

        {/* Positivus Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const isLight = service.cardType === 'light';
            const isGreen = service.cardType === 'green';
            const isDark = service.cardType === 'dark';

            return (
              <div
                key={service.id}
                className={`p-8 sm:p-10 rounded-[40px] border-2 border-[#191A23] transition-all duration-300 flex flex-col justify-between relative group ${
                  isLight
                    ? 'bg-[#F3F3F3] text-[#191A23] shadow-[6px_6px_0px_0px_#191A23] hover:shadow-[10px_10px_0px_0px_#191A23]'
                    : isGreen
                    ? 'bg-[#B9FF66] text-[#191A23] shadow-[6px_6px_0px_0px_#191A23] hover:shadow-[10px_10px_0px_0px_#191A23]'
                    : 'bg-[#191A23] text-white shadow-[6px_6px_0px_0px_#B9FF66] hover:shadow-[10px_10px_0px_0px_#B9FF66]'
                }`}
              >
                <div>
                  {/* Top Badge Title Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <span
                        className={`inline-block px-3 py-1 rounded-xl text-xs font-black border border-[#191A23] ${
                          isDark
                            ? 'bg-[#B9FF66] text-[#191A23]'
                            : isGreen
                            ? 'bg-white text-[#191A23]'
                            : 'bg-[#B9FF66] text-[#191A23]'
                        }`}
                      >
                        {lang === 'fa' ? service.badgeFa : service.badgeEn}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight pt-2">
                        {lang === 'fa' ? service.titleFa : service.titleEn}
                      </h3>
                    </div>

                    {/* Vector Graphic Icon */}
                    <div className="p-3 rounded-2xl bg-white/20 border border-[#191A23]/20 backdrop-blur-sm">
                      {renderIcon(service.iconType, service.cardType)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm sm:text-base font-medium mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#191A23]/80'}`}>
                    {lang === 'fa' ? service.descFa : service.descEn}
                  </p>
                </div>

                {/* Footer Action Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-[#191A23]/15">
                  <button
                    onClick={() => onSelectService(service)}
                    className={`flex items-center gap-3 font-extrabold text-sm sm:text-base group-hover:underline ${
                      isDark ? 'text-white' : 'text-[#191A23]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border border-[#191A23] flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isDark ? 'bg-[#B9FF66] text-[#191A23]' : 'bg-[#191A23] text-[#B9FF66]'
                      }`}
                    >
                      <ArrowUpLeft className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <span>{lang === 'fa' ? 'اطلاعات بیشتر و درخواست' : 'Learn more'}</span>
                  </button>

                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-[#B9FF66]' : 'text-[#191A23]/60'}`}>
                    0{servicesData.indexOf(service) + 1}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
