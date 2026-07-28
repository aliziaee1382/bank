import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpLeft, ShieldCheck, PhoneCall } from 'lucide-react';
import { Language, ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onOpenAccountModal: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  lang,
  onOpenAccountModal,
}) => {
  const [requested, setRequested] = useState(false);

  if (!service) return null;

  const handleApply = () => {
    setRequested(true);
    setTimeout(() => {
      setRequested(false);
      onClose();
      onOpenAccountModal();
    }, 1500);
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

        {/* Modal Header Badge */}
        <div className="space-y-3 mb-6">
          <span className="inline-block bg-[#B9FF66] border border-[#191A23] text-[#191A23] px-3 py-1 rounded-xl text-xs font-black">
            {lang === 'fa' ? service.badgeFa : service.badgeEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#191A23] dark:text-white">
            {lang === 'fa' ? service.titleFa : service.titleEn}
          </h3>
          <p className="text-sm text-[#191A23]/80 dark:text-gray-300 font-medium leading-relaxed">
            {lang === 'fa' ? service.descFa : service.descEn}
          </p>
        </div>

        {/* Features Checklist Box */}
        <div className="bg-[#F3F3F3] dark:bg-[#2A2B38] border-2 border-[#191A23] dark:border-white/20 rounded-[28px] p-6 space-y-4 mb-6 shadow-[4px_4px_0px_0px_#191A23] dark:shadow-[4px_4px_0px_0px_#B9FF66]">
          <h4 className="text-sm font-black text-[#191A23] dark:text-white uppercase tracking-wider">
            {lang === 'fa' ? 'مزایا و ویژگی‌های کلیدی این خدمت:' : 'Key Service Benefits:'}
          </h4>

          <div className="space-y-3">
            {(lang === 'fa' ? service.featuresFa : service.featuresEn).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-extrabold text-[#191A23] dark:text-white">
                <div className="p-1 bg-[#B9FF66] rounded-md border border-[#191A23] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#191A23]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {requested ? (
          <div className="bg-[#B9FF66] border-2 border-[#191A23] p-4 rounded-2xl text-center text-xs font-black text-[#191A23]">
            {lang === 'fa' ? 'درخواست شما ثبت شد. در حال انتقال به فرآیند ثبت‌نام...' : 'Request saved! Redirecting to registration...'}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleApply}
              className="w-full sm:flex-1 bg-[#191A23] text-[#B9FF66] hover:bg-[#B9FF66] hover:text-[#191A23] font-black py-4 rounded-2xl border-2 border-[#191A23] transition-colors shadow-[3px_3px_0px_0px_#191A23] text-sm flex items-center justify-center gap-2 group"
            >
              <span>{lang === 'fa' ? 'درخواست آنلاین این خدمت' : 'Apply Online For This Service'}</span>
              <ArrowUpLeft className="w-5 h-5 group-hover:translate-x-[-2px] stroke-[2.5]" />
            </button>

            <a
              href="tel:02188990000"
              className="w-full sm:w-auto bg-[#F3F3F3] hover:bg-[#B9FF66] text-[#191A23] font-bold px-6 py-4 rounded-2xl border-2 border-[#191A23] transition-colors shadow-[3px_3px_0px_0px_#191A23] text-sm flex items-center justify-center gap-2 shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'fa' ? 'مشاوره تلفنی' : 'Consult Advisor'}</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
