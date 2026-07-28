import React from 'react';

export type Language = 'fa' | 'en';
export type Theme = 'light' | 'dark';

export type PageId =
  | 'home'
  | 'services'
  | 'loan-calculator'
  | 'exchange-rates'
  | 'process'
  | 'team'
  | 'contact'
  | 'testimonials';

export interface ServiceItem {
  id: string;
  titleFa: string;
  titleEn: string;
  badgeFa: string;
  badgeEn: string;
  descFa: string;
  descEn: string;
  cardType: 'light' | 'green' | 'dark';
  iconType: 'mobile' | 'loan' | 'investment' | 'card' | 'exchange' | 'security';
  featuresFa: string[];
  featuresEn: string[];
}

export interface ProcessStep {
  number: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
}

export interface TeamMember {
  id: string;
  nameFa: string;
  nameEn: string;
  roleFa: string;
  roleEn: string;
  experienceFa: string;
  experienceEn: string;
  bioFa: string;
  bioEn: string;
  avatarUrl: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  authorFa: string;
  authorEn: string;
  roleFa: string;
  roleEn: string;
  companyFa: string;
  companyEn: string;
  quoteFa: string;
  quoteEn: string;
}

export interface ExchangeRate {
  code: string;
  nameFa: string;
  nameEn: string;
  buyPrice: number;
  sellPrice: number;
  change: number; // percentage
  unit: string;
}

export interface LoanType {
  id: string;
  nameFa: string;
  nameEn: string;
  defaultRate: number; // percentage
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  maxMonths: number;
}

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      'dotlottie-wc': any;
    }
  }
}
