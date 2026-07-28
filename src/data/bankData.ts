import { ServiceItem, ProcessStep, TeamMember, Testimonial, ExchangeRate, LoanType } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-banking',
    titleFa: 'بانکداری همراه و دیجیتال',
    titleEn: 'Digital & Mobile Banking',
    badgeFa: 'خدمات همراه',
    badgeEn: 'Mobile Banking',
    descFa: 'انتقال سریع وجه، استعلام چک صیادی، کارت به کارت هوشمند و مدیریت حساب‌ها در پلتفرم پوزیتیو.',
    descEn: 'Instant transfers, Sayad check inquiry, smart card services & 24/7 account management.',
    cardType: 'light',
    iconType: 'mobile',
    featuresFa: [
      'انتقال پایا، ساتنا و پل لحظه‌ای',
      'افتتاح حساب کاملاً غیرحضوری با احراز هویت بیومتریک',
      'مدیریت دسته‌چک صیادی و ثبت خودکار',
      'رمز دوم پویا و مدیریت کارت‌های بانکی'
    ],
    featuresEn: [
      'Instant SATNA & PAYA transfers',
      '100% Online KYC and account opening',
      'Digital checkbook management & Sayad validation',
      'Dynamic OTP & card limits management'
    ]
  },
  {
    id: 'corporate-loans',
    titleFa: 'تسهیلات و اعتبارات شرکتی',
    titleEn: 'Corporate Loans & Credit Lines',
    badgeFa: 'اعتبارات تجاری',
    badgeEn: 'Credit Lines',
    descFa: 'خطوط اعتباری اختصاصی، ضمانت‌نامه‌های بانکی گمرکی و تسهیلات توسعه کسب‌وکارهای کوچک و بزرگ.',
    descEn: 'Custom corporate credit lines, bank guarantees, and capital expansion loans for enterprises.',
    cardType: 'green',
    iconType: 'loan',
    featuresFa: [
      'صدور ضمانت‌نامه مناقصه و مزایده آنلاین',
      'تسهیلات سرمایه در گردش با بازپرداخت شناور',
      'اعتبار اسنادی داخلی (LC) با کارمزد ترجیحی',
      'تسهیلات ویژه استارتاپ‌ها و شرکت‌های دانش‌بنیان'
    ],
    featuresEn: [
      'Online tender and performance bank guarantees',
      'Working capital loans with flexible schedules',
      'Domestic Letters of Credit (LC) with low fees',
      'Special funding lines for high-tech ventures'
    ]
  },
  {
    id: 'wealth-management',
    titleFa: 'مدیریت سرمایه‌گذاری و صندوق‌ها',
    titleEn: 'Wealth & Investment Management',
    badgeFa: 'سرمایه‌گذاری',
    badgeEn: 'Wealth Mgmt',
    descFa: 'سبدگردانی اختصاصی، صندوق‌های با درآمد ثابت و سهامی با بالاترین نرخ بازدهی و ضمانت نقدشوندگی.',
    descEn: 'Tailored portfolio management, fixed income funds, and high-yield wealth strategies.',
    cardType: 'dark',
    iconType: 'investment',
    featuresFa: [
      'صندوق‌های درآمد ثابت با سود روزشمار بالاتر از مصوب',
      'سبدگردانی اختصاصی برای دارایی‌های بالای ۱۰ میلیارد',
      'پوشش ریسک نوسانات ارز و طلا با ابزارهای مشتقه',
      'گزارش‌دهی شفاف و تحلیلی عملکرد سرمایه‌گذاری'
    ],
    featuresEn: [
      'Fixed income funds with high liquidity',
      'Private portfolio management for high net worth',
      'Hedging strategies against inflation and volatility',
      'Real-time performance analytics dashboard'
    ]
  },
  {
    id: 'premium-cards',
    titleFa: 'کارت‌های اعتباری و سازمانی',
    titleEn: 'Smart Platinum & Corporate Cards',
    badgeFa: 'کارت‌های اختصاصی',
    badgeEn: 'Credit Cards',
    descFa: 'کارت‌های فلزی پلاتینیوم، کارت‌های تنخواه‌گردان شرکتی با دسترسی‌های سطح‌بندی‌شده و باشگاه مشتریان.',
    descEn: 'Exclusive metallic platinum cards, corporate expense cards, and VIP concierge benefits.',
    cardType: 'light',
    iconType: 'card',
    featuresFa: [
      'کارت فلزی مشکی با سقف برداشت بالا',
      'تنخواه‌کارت شرکتی با محدودیت خرج بر اساس دپارتمان',
      'دسترسی به سیپ‌روم فرودگاه‌ها و خدمات تشریفات',
      'بازگشت پول (کشبک) تا ۳٪ روی خریدهای فروشگاهی'
    ],
    featuresEn: [
      'Black metallic card with custom high limits',
      'Corporate cards with departmental expense controls',
      'Airport lounge CIP access & concierge service',
      'Up to 3% cashback on partner store purchases'
    ]
  },
  {
    id: 'fx-international',
    titleFa: 'خدمات ارزی و بازرگانی',
    titleEn: 'Foreign Exchange & Trade Finance',
    badgeFa: 'ارزی و بین‌الملل',
    badgeEn: 'FX & Trade',
    descFa: 'حوالجات ارزی تجاری، خریدهای وارداتی و خدمات صرافی شرکتی با کوتاه‌ترین زمان تخصیص ارز.',
    descEn: 'Commercial foreign currency transfers, import clearance financing, and official FX trade.',
    cardType: 'green',
    iconType: 'exchange',
    featuresFa: [
      'تخصیص نرخ ارز نیما و توافقی بدون واسطه',
      'حواله ارزی یورو، درهم، یوآن و روبل',
      'گشایش اعتبارات اسنادی واردات مواد اولیه',
      'مشاوره تخصصی امور گمرکی و تخصیص بانک مرکزی'
    ],
    featuresEn: [
      'Direct official exchange rate allocation',
      'EUR, AED, CNY, and RUB wire transfers',
      'Raw material import financing LCs',
      'Central bank trade compliance consulting'
    ]
  },
  {
    id: 'vault-security',
    titleFa: 'امانات و امنیت دارایی',
    titleEn: 'Vault Security & Digital Escrow',
    badgeFa: 'امنیت سرمایه',
    badgeEn: 'Vault Security',
    descFa: 'صندوق‌های امانات الکترونیکی و بیومتریک، خدمات امانت‌داری اسناد تجاری و واسطه‌گری امن قراردادها.',
    descEn: 'Biometric safety deposit boxes, digital escrow services, and high-security asset storage.',
    cardType: 'dark',
    iconType: 'security',
    featuresFa: [
      'صندوق امانات فوق پیشرفته با اثر انگشت و اسکن چهره',
      'خدمات اسکرو (Escrow) برای معامله امن املاک و کالای عمده',
      'بیمه کامل دارایی‌های موجود در صندوق تا سقف دلخواه',
      'دسترسی ۲۴ ساعته در شعب مرکزی پوزیتیو بانک'
    ],
    featuresEn: [
      'Biometric safety boxes with face and fingerprint access',
      'Digital Escrow for high-value real estate & commerce',
      'Comprehensive insurance policy up to chosen limits',
      '24/7 VIP access to central vault facilities'
    ]
  }
];

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    titleFa: 'ثبت‌نام آنلاین و احراز هویت',
    titleEn: 'Online KYC & Registration',
    descFa: 'با وارد کردن کد ملی و شماره همراه، در کمتر از ۳ دقیقه با اسکن هوشمند چهره احراز هویت شوید.',
    descEn: 'Enter national ID and phone number, then complete smart biometric verification in 3 minutes.'
  },
  {
    number: '02',
    titleFa: 'انتخاب نوع حساب و بسته خدماتی',
    titleEn: 'Account Type Selection',
    descFa: 'از میان حساب‌های جاری، سپرده سرمایه‌گذاری، یا حساب شرکتی متناسب با نیاز خود انتخاب کنید.',
    descEn: 'Choose from current, high-yield deposit, or corporate business accounts tailored to your scale.'
  },
  {
    number: '03',
    titleFa: 'صدور فوری و ارسال رایگان کارت',
    titleEn: 'Instant Card Issue & Delivery',
    descFa: 'کارت بانکی شما بلافاصله صادر شده و در کمتر از ۲۴ ساعت به آدرس شما به صورت رایگان ارسال می‌شود.',
    descEn: 'Your card is printed instantly and delivered to your doorstep within 24 hours free of charge.'
  },
  {
    number: '04',
    titleFa: 'فعال‌سازی اینترنت‌بانک و دریافت تسهیلات',
    titleEn: 'Digital Banking & Loan Eligibility',
    descFa: 'دسترسی کامل به پلتفرم اینترنت‌بانک، وام‌های بدون ضامن و مدیریت یکپارچه دارایی‌ها فعال می‌شود.',
    descEn: 'Unlock full mobile banking access, collateral-free loan eligibility, and wealth dashboards.'
  },
  {
    number: '05',
    titleFa: 'پشتیبانی اختصاصی و مشاور مالی اختصاصی',
    titleEn: 'Dedicated Personal Financial Advisor',
    descFa: 'مشتریان پوزیتیو بانک از مشاور اختصاصی سرمایه‌گذاری و پشتیبانی ۲۴ ساعته تلفنی و تصویری بهره‌مند می‌شوند.',
    descEn: 'Enjoy a dedicated wealth manager and 24/7 priority support via phone or video consultation.'
  }
];

export const teamMembersData: TeamMember[] = [
  {
    id: '1',
    nameFa: 'دکتر آرش رضایی',
    nameEn: 'Dr. Arash Rezaei',
    roleFa: 'مدیرعامل و عضو هیئت مدیره',
    roleEn: 'CEO & Board Member',
    experienceFa: '۱۸+ سال تجربه در مدیریت ارشد بانکی و توسعه فناوری‌های مالی',
    experienceEn: '18+ years experience in executive banking & fintech innovation',
    bioFa: 'دکترای اقتصاد مالی از دانشگاه تهران، متخصص در طراحی مدل‌های اعتبارسنجی هوشمند و توسعه خدمات بانکداری بین‌المللی.',
    bioEn: 'Ph.D. in Financial Economics, expert in AI-driven credit scoring and international banking infrastructure.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    nameFa: 'مهندس مریم حسینی',
    nameEn: 'Maryam Hosseini',
    roleFa: 'معاونت بانکداری شرکتی',
    roleEn: 'VP of Corporate Banking',
    experienceFa: '۱۴+ سال تجربه در مدیریت اعتبارات اسنادی و تامین مالی پروژه‌ها',
    experienceEn: '14+ years in corporate credit lines & project trade finance',
    bioFa: 'کارشناسی ارشد مدیریت مالی، راهبر خطوط اعتباری متناسب با زنجیره تامین صنایع بزرگ کشور.',
    bioEn: 'Master of Finance, leading supply chain financing strategies for top national enterprises.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '3',
    nameFa: 'مهندس سهراب پارسا',
    nameEn: 'Sohrab Parsa',
    roleFa: 'مدیر ارشد فناوری (CTO)',
    roleEn: 'Chief Technology Officer',
    experienceFa: '۱۲+ سال تجربه در امنیت سایبری بانکی و زیرساخت بله/نیما',
    experienceEn: '12+ years in fintech architecture, security & microservices',
    bioFa: 'طراح زیرساخت بانکداری باز و هسته تراکنشی پوزیتیو بانک با پایداری ۹۹.۹۹٪.',
    bioEn: 'Architect of open banking API gateway and core banking transactional engine.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '4',
    nameFa: 'سارا کیانی',
    nameEn: 'Sara Kiani',
    roleFa: 'مدیر سرمایه‌گذاری و صندوق‌ها',
    roleEn: 'Head of Investment Funds',
    experienceFa: '۱۰+ سال تحلیل‌گر ارشد بازار سرمایه و سبدگردانی',
    experienceEn: '10+ years senior capital markets & portfolio manager',
    bioFa: 'مدیریت بیش از ۲۰ هزار میلیارد تومان دارایی در صندوق‌های درآمد ثابت و سهامی پوزیتیو.',
    bioEn: 'Overseeing over $500M AUM across fixed income and equity investment funds.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    authorFa: 'علی محمدی',
    authorEn: 'Ali Mohammadi',
    roleFa: 'مدیرعامل شرکت فولاد نوین',
    roleEn: 'CEO of Novin Steel Co.',
    companyFa: 'گروه صنعتی فولاد',
    companyEn: 'Industrial Group',
    quoteFa: '«تسهیلات سریع و صدور ضمانت‌نامه آنلاین پوزیتیو بانک باعث شد در مناقصه بزرگ پتروشیمی برنده شویم. سرعت پاسخگویی تیم اعتبارات عالی است.»',
    quoteEn: '"The instant online bank guarantee from Positivus Bank allowed us to win a major petrochemical tender. Exceptional response speed."'
  },
  {
    id: '2',
    authorFa: 'زهرا کاظمی',
    authorEn: 'Zahra Kazemi',
    roleFa: 'هم‌بنیان‌گذار هلدینگ دیجی‌تک',
    roleEn: 'Co-founder of DigiTech Holding',
    companyFa: 'توسعه فناوری',
    companyEn: 'Tech Group',
    quoteFa: '«اینترنت‌بانک شرکتی پوزیتیو با قابلیت تعریف سطوح دسترسی امضاداران، مدیریت مالی ۳۰ شرکت زیرمجموعه ما را بی‌نهایت ساده و شفاف کرده است.»',
    quoteEn: '"Corporate e-banking with multi-signature authorization hierarchy made managing finances for 30 subsidiaries completely effortless."'
  },
  {
    id: '3',
    authorFa: 'دکتر کامران شریفی',
    authorEn: 'Dr. Kamran Sharifi',
    roleFa: 'سرمایه‌گذار حقیقی',
    roleEn: 'Private Wealth Investor',
    companyFa: 'سرمایه‌گذاری شخصی',
    companyEn: 'Private Equity',
    quoteFa: '«بازدهی صندوق‌های درآمد ثابت پوزیتیو همیشه ۲ تا ۴ درصد بالاتر از بانک‌های سنتی بوده و نقدشوندگی لحظه‌ای آن عالی است.»',
    quoteEn: '"The yield on Positivus fixed-income funds consistently beats traditional bank rates with instant T+0 settlement."'
  }
];

export const exchangeRatesData: ExchangeRate[] = [
  { code: 'USD', nameFa: 'دلار آمریکا', nameEn: 'US Dollar', buyPrice: 61850, sellPrice: 62100, change: +0.35, unit: 'تومان' },
  { code: 'EUR', nameFa: 'یورو اروپا', nameEn: 'Euro', buyPrice: 67100, sellPrice: 67450, change: -0.12, unit: 'تومان' },
  { code: 'AED', nameFa: 'درهم امارات', nameEn: 'UAE Dirham', buyPrice: 16850, sellPrice: 16920, change: +0.20, unit: 'تومان' },
  { code: 'GBP', nameFa: 'پوند انگلیس', nameEn: 'British Pound', buyPrice: 79200, sellPrice: 79650, change: +0.48, unit: 'تومان' },
  { code: 'GOLD', nameFa: 'طلای ۱۸ عیار (هر گرم)', nameEn: '18K Gold (Gram)', buyPrice: 3840000, sellPrice: 3865000, change: +0.85, unit: 'تومان' },
  { code: 'COIN', nameFa: 'سکه امامی طرح جدید', nameEn: 'Emami Gold Coin', buyPrice: 44200000, sellPrice: 44500000, change: +1.10, unit: 'تومان' }
];

export const loanTypesData: LoanType[] = [
  {
    id: 'business',
    nameFa: 'تسهیلات توسعه کسب‌وکار و سرمایه در گردش',
    nameEn: 'Business & Working Capital Loan',
    defaultRate: 18,
    minAmount: 100000000, // 100M Toman
    maxAmount: 5000000000, // 5B Toman
    stepAmount: 50000000,
    maxMonths: 48
  },
  {
    id: 'mortgage',
    nameFa: 'تسهیلات خرید و ساخت مسکن تجاری/شخصی',
    nameEn: 'Mortgage & Property Loan',
    defaultRate: 20,
    minAmount: 300000000,
    maxAmount: 3000000000,
    stepAmount: 100000000,
    maxMonths: 60
  },
  {
    id: 'startup',
    nameFa: 'وام ویژه شرکت‌های دانش‌بنیان و نوآوری',
    nameEn: 'Tech Venture & Startup Grant Loan',
    defaultRate: 14,
    minAmount: 50000000,
    maxAmount: 1000000000,
    stepAmount: 25000000,
    maxMonths: 36
  },
  {
    id: 'personal',
    nameFa: 'تسهیلات مرابحه و خرید کالا (بدون ضامن)',
    nameEn: 'Personal Instant Purchase Loan',
    defaultRate: 22,
    minAmount: 20000000,
    maxAmount: 200000000,
    stepAmount: 10000000,
    maxMonths: 24
  }
];
