import React, { useState } from 'react';
import { RefreshCw, TrendingUp, TrendingDown, ArrowRightLeft, DollarSign, Coins } from 'lucide-react';
import { Language, ExchangeRate } from '../types';
import { exchangeRatesData } from '../data/bankData';

interface ExchangeRatesSectionProps {
  lang: Language;
}

export const ExchangeRatesSection: React.FC<ExchangeRatesSectionProps> = ({ lang }) => {
  const [rates, setRates] = useState<ExchangeRate[]>(exchangeRatesData);
  const [lastUpdated, setLastUpdated] = useState<string>('لحظه‌ای (امروز)');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Currency Converter State
  const [converterAmount, setConverterAmount] = useState<number>(10000000); // 10M Toman
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('USD');

  const selectedCurrency = rates.find((r) => r.code === selectedCurrencyCode) || rates[0];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate minor fluctuation
      setRates((prev) =>
        prev.map((r) => ({
          ...r,
          buyPrice: r.buyPrice + Math.floor(Math.random() * 200 - 100),
          sellPrice: r.sellPrice + Math.floor(Math.random() * 200 - 100),
        }))
      );
      setLastUpdated(new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US'));
      setIsRefreshing(false);
    }, 600);
  };

  const formatNum = (n: number) => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US').format(n);

  const convertedValue = (converterAmount / selectedCurrency.sellPrice).toFixed(2);

  return (
    <section id="exchange-rates" className="py-20 bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#191A23] dark:text-white flex items-center gap-3">
              <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
                {lang === 'fa' ? 'نرخ روز ارز و طلا' : 'Live FX & Gold Rates'}
              </span>
              <span>{lang === 'fa' ? 'صرافی پوزیتیو' : 'Official Exchange'}</span>
            </h2>
            <p className="text-sm text-[#191A23]/70 dark:text-gray-300 font-medium mt-2">
              {lang === 'fa'
                ? 'قیمت‌های رسمی صرافی پوزیتیو بانک تحت مجوز بانک مرکزی ج.ا.ا'
                : 'Real-time official central bank currency exchange and bullion quotes.'}
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="self-start md:self-auto flex items-center gap-2 bg-[#F3F3F3] dark:bg-[#2A2B38] hover:bg-[#B9FF66] dark:hover:bg-[#B9FF66] border-2 border-[#191A23] dark:border-[#B9FF66]/30 px-4 py-2.5 rounded-xl font-extrabold text-xs text-[#191A23] dark:text-white dark:hover:text-[#191A23] transition-all shadow-[2px_2px_0px_0px_#191A23] dark:shadow-[2px_2px_0px_0px_#B9FF66] cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{lang === 'fa' ? 'به‌روزرسانی نرخ‌ها' : 'Refresh Rates'}</span>
            <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 font-normal">({lastUpdated})</span>
          </button>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rates.map((rate) => {
            const isPositive = rate.change >= 0;
            return (
              <div
                key={rate.code}
                className="bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66]/40 rounded-[30px] p-6 shadow-[4px_4px_0px_0px_#191A23] dark:shadow-[4px_4px_0px_0px_#B9FF66] hover:bg-[#B9FF66]/20 transition-all flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono font-black text-[#191A23]/60 dark:text-gray-400 uppercase">{rate.code}</span>
                    <h3 className="text-xl font-extrabold text-[#191A23] dark:text-white">
                      {lang === 'fa' ? rate.nameFa : rate.nameEn}
                    </h3>
                  </div>

                  <div
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#191A23] text-xs font-black font-mono ${
                      isPositive ? 'bg-[#B9FF66] text-[#191A23]' : 'bg-red-200 text-red-900'
                    }`}
                  >
                    {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    <span>{isPositive ? `+${rate.change}%` : `${rate.change}%`}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#191A23]/10">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-[#191A23]/70">{lang === 'fa' ? 'قیمت خرید:' : 'Buy Price:'}</span>
                    <span className="font-black text-sm font-mono text-[#191A23]">{formatNum(rate.buyPrice)} {rate.unit}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-[#191A23]/70">{lang === 'fa' ? 'قیمت فروش:' : 'Sell Price:'}</span>
                    <span className="font-black text-sm font-mono text-[#191A23]">{formatNum(rate.sellPrice)} {rate.unit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Exchange Calculator Banner */}
        <div className="bg-[#191A23] text-white rounded-[36px] p-6 sm:p-10 border-2 border-[#191A23] shadow-[6px_6px_0px_0px_#B9FF66]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-[#B9FF66] text-[#191A23] rounded-xl font-bold border border-[#191A23]">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              {lang === 'fa' ? 'مبدل سریع ارزهای بین‌المللی' : 'Instant Currency Converter'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Input Toman */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs text-gray-300 font-bold block">
                {lang === 'fa' ? 'مبلغ به تومان:' : 'Amount in Toman:'}
              </label>
              <input
                type="number"
                step="1000000"
                value={converterAmount}
                onChange={(e) => setConverterAmount(Number(e.target.value))}
                className="w-full bg-white text-[#191A23] font-black text-lg p-4 rounded-2xl border-2 border-[#191A23] focus:outline-none focus:ring-2 focus:ring-[#B9FF66]"
              />
            </div>

            {/* Select Target Currency */}
            <div className="md:col-span-3 space-y-2">
              <label className="text-xs text-gray-300 font-bold block">
                {lang === 'fa' ? 'ارز مقصد:' : 'Target Currency:'}
              </label>
              <select
                value={selectedCurrencyCode}
                onChange={(e) => setSelectedCurrencyCode(e.target.value)}
                className="w-full bg-[#F3F3F3] text-[#191A23] font-extrabold text-base p-4 rounded-2xl border-2 border-[#191A23] focus:outline-none"
              >
                {rates.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.code} - {lang === 'fa' ? r.nameFa : r.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Output Converted Result */}
            <div className="md:col-span-4 bg-[#B9FF66] text-[#191A23] p-5 rounded-2xl border-2 border-[#191A23] shadow-[3px_3px_0px_0px_#ffffff]">
              <div className="text-xs font-bold text-[#191A23]/70">
                {lang === 'fa' ? 'معادل ارزی محاسبه شده:' : 'Converted Estimate:'}
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono pt-1">
                {formatNum(Number(convertedValue))} <span className="text-base font-bold">{selectedCurrency.code}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
