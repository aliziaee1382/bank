import React, { useState } from 'react';
import { Language } from '../types';
import { ExchangeRatesSection } from '../components/ExchangeRatesSection';
import { Coins, ArrowRightLeft, RefreshCw, Landmark, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ExchangeRatesPageProps {
  lang: Language;
  onOpenAccountModal: () => void;
}

export const ExchangeRatesPage: React.FC<ExchangeRatesPageProps> = ({
  lang,
  onOpenAccountModal,
}) => {
  const [calcAmount, setCalcAmount] = useState<number>(1000);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'AED' | 'GBP'>('USD');
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');

  const rateMap = {
    USD: { buy: 612000, sell: 615500, labelFa: 'دلار آمریکا (USD)', labelEn: 'US Dollar (USD)' },
    EUR: { buy: 664000, sell: 668000, labelFa: 'یورو اروپا (EUR)', labelEn: 'Euro (EUR)' },
    AED: { buy: 166500, sell: 167800, labelFa: 'درهم امارات (AED)', labelEn: 'UAE Dirham (AED)' },
    GBP: { buy: 778000, sell: 783000, labelFa: 'پوند انگلیس (GBP)', labelEn: 'British Pound (GBP)' },
  };

  const currentRate = rateMap[currency][mode];
  const totalRial = calcAmount * currentRate;

  return (
    <div className="py-8 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B9FF66] border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#191A23] relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#191A23] text-[#B9FF66] px-4 py-1.5 rounded-xl text-xs font-black">
              <Coins className="w-4 h-4" />
              <span>{lang === 'fa' ? 'تابلو لحظه‌ای بازار اسکناس و حواله' : 'Live Forex & Commodities Hub'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#191A23] leading-tight">
              {lang === 'fa'
                ? 'نرخ روز ارز، طلا و معاملات ارزی آنلاین'
                : 'Live Foreign Exchange Rates & Gold Board'}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-[#191A23]/80 leading-relaxed">
              {lang === 'fa'
                ? 'استعلام قیمتی آنلاین اسکناس و حواله ارزی، محاسبه‌گر تبدیل ارز و ثبت درخواست تخصیص ارز بازرگانی.'
                : 'Official real-time foreign currency rates, live gold bullion prices, currency converter, and trade FX requests.'}
            </p>
          </div>
        </div>
      </section>

      {/* Live Exchange Rates Main Table */}
      <ExchangeRatesSection lang={lang} />

      {/* Interactive Currency Converter Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191A23] text-white border-2 border-[#191A23] rounded-[36px] p-8 sm:p-12 shadow-[10px_10px_0px_0px_#B9FF66] space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div>
              <span className="inline-block bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl text-xs font-black mb-2">
                {lang === 'fa' ? 'ابزار تبدیل ارز آنلاین' : 'Online Currency Converter'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {lang === 'fa' ? 'محاسبه‌گر ارزش معامله ارزی' : 'FX Trade Amount Calculator'}
              </h2>
            </div>

            {/* Toggle Buy/Sell Mode */}
            <div className="bg-[#2A2B38] p-1.5 rounded-2xl border border-gray-700 flex items-center gap-1">
              <button
                onClick={() => setMode('buy')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  mode === 'buy' ? 'bg-[#B9FF66] text-[#191A23]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang === 'fa' ? 'خرید از بانک' : 'Buy From Bank'}
              </button>
              <button
                onClick={() => setMode('sell')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  mode === 'sell' ? 'bg-[#B9FF66] text-[#191A23]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang === 'fa' ? 'فروش به بانک' : 'Sell To Bank'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            
            {/* Amount Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300">
                {lang === 'fa' ? 'مبلغ ارز مورد نظر:' : 'Foreign Currency Amount:'}
              </label>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Math.max(1, Number(e.target.value)))}
                className="w-full bg-[#2A2B38] border-2 border-gray-700 focus:border-[#B9FF66] text-white px-4 py-3.5 rounded-2xl font-black text-lg outline-none transition-colors"
              />
            </div>

            {/* Currency Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300">
                {lang === 'fa' ? 'انتخاب نوع ارز:' : 'Select Currency:'}
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="w-full bg-[#2A2B38] border-2 border-gray-700 focus:border-[#B9FF66] text-white px-4 py-3.5 rounded-2xl font-black text-sm outline-none transition-colors cursor-pointer"
              >
                {Object.entries(rateMap).map(([code, item]) => (
                  <option key={code} value={code} className="bg-[#191A23]">
                    {lang === 'fa' ? item.labelFa : item.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Result Box */}
            <div className="bg-[#B9FF66] text-[#191A23] border-2 border-[#191A23] p-4 rounded-2xl space-y-1 shadow-[4px_4px_0px_0px_#191A23]">
              <div className="text-[11px] font-black uppercase tracking-wider text-[#191A23]/80">
                {lang === 'fa' ? 'مبلغ معادل ریالی:' : 'Equivalent IRR Amount:'}
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight">
                {totalRial.toLocaleString('fa-IR')} <span className="text-xs font-bold">{lang === 'fa' ? 'ریال' : 'IRR'}</span>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9FF66]" />
              <span>
                {lang === 'fa'
                  ? 'نرخ‌ها منطبق بر سامانه‌های نیما و سنا با مجوز رسمی بانک مرکزی می‌باشند.'
                  : 'Official rates aligned with Central Bank foreign trade exchange systems.'}
              </span>
            </div>

            <button
              onClick={onOpenAccountModal}
              className="bg-[#B9FF66] text-[#191A23] hover:bg-white font-black px-6 py-3 rounded-xl border border-[#191A23] transition-colors"
            >
              {lang === 'fa' ? 'ثبت درخواست تخصیص ارز بازرگانی' : 'Apply for Commercial FX Allocation'}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
