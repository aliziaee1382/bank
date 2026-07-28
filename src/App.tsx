import React, { useState, useEffect } from 'react';
import { Language, Theme, PageId, ServiceItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InternetBankingModal } from './components/InternetBankingModal';
import { AccountOpenModal } from './components/AccountOpenModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';

// Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LoanCalculatorPage } from './pages/LoanCalculatorPage';
import { ExchangeRatesPage } from './pages/ExchangeRatesPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('positivus_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bankingModalOpen, setBankingModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    // Dynamically update browser header theme-color
    const themeColor = theme === 'dark' ? '#B9FF66' : '#FFFFFF';
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', themeColor);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('positivus_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyForLoan = (loanDetails: { loanName: string; amount: number; months: number; monthlyPayment: number }) => {
    setAccountModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage
            lang={lang}
            onSelectService={(service) => setSelectedService(service)}
            onOpenAccountModal={() => setAccountModalOpen(true)}
          />
        );

      case 'loan-calculator':
        return (
          <LoanCalculatorPage
            lang={lang}
            onApplyForLoan={handleApplyForLoan}
            onOpenAccountModal={() => setAccountModalOpen(true)}
          />
        );

      case 'exchange-rates':
        return (
          <ExchangeRatesPage
            lang={lang}
            onOpenAccountModal={() => setAccountModalOpen(true)}
          />
        );

      case 'process':
        return (
          <ProcessPage
            lang={lang}
            onOpenAccountModal={() => setAccountModalOpen(true)}
          />
        );

      case 'team':
        return (
          <TeamPage lang={lang} />
        );

      case 'contact':
        return (
          <ContactPage lang={lang} />
        );

      case 'testimonials':
        return (
          <TestimonialsPage lang={lang} />
        );

      case 'home':
      default:
        return (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenAccountModal={() => setAccountModalOpen(true)}
            onOpenBankingModal={() => setBankingModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#111218] text-[#191A23] dark:text-[#F3F3F3] font-['Vazirmatn',sans-serif] selection:bg-[#B9FF66] selection:text-[#191A23] flex flex-col justify-between transition-colors duration-200">
      
      <div>
        {/* Header Bar */}
        <Header
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBankingModal={() => setBankingModalOpen(true)}
          onOpenAccountModal={() => setAccountModalOpen(true)}
        />

        {/* Dynamic Main Page Content */}
        <main className="animate-in fade-in duration-200">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenBankingModal={() => setBankingModalOpen(true)}
        onOpenAccountModal={() => setAccountModalOpen(true)}
      />

      {/* Interactive Modals */}
      <InternetBankingModal
        isOpen={bankingModalOpen}
        onClose={() => setBankingModalOpen(false)}
        lang={lang}
      />

      <AccountOpenModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        lang={lang}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        lang={lang}
        onOpenAccountModal={() => setAccountModalOpen(true)}
      />

    </div>
  );
}

