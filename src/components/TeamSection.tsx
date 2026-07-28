import React from 'react';
import { Linkedin, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { teamMembersData } from '../data/bankData';

interface TeamSectionProps {
  lang: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  return (
    <section id="team" className="py-20 bg-white dark:bg-[#111218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#191A23] dark:text-white flex items-center gap-3">
            <span className="bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-xl border border-[#191A23] shadow-[2px_2px_0px_0px_#191A23]">
              {lang === 'fa' ? 'تیم مدیریتی' : 'Team'}
            </span>
            <span>{lang === 'fa' ? 'راهبران و هیئت مدیره' : 'Executive Leadership'}</span>
          </h2>
          <p className="text-base text-[#191A23]/80 dark:text-gray-300 font-medium max-w-xl">
            {lang === 'fa'
              ? 'تیمی متشکل از برجسته‌ترین متخصصان بانکداری بین‌المللی، اقتصاد مالی و امنیت فناوری ارتباطات.'
              : 'Meet the skilled professionals shaping the future of digital and enterprise banking.'}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembersData.map((member) => (
            <div
              key={member.id}
              className="bg-[#F3F3F3] dark:bg-[#1F202C] border-2 border-[#191A23] dark:border-[#B9FF66]/40 rounded-[36px] p-6 shadow-[5px_5px_0px_0px_#191A23] dark:shadow-[5px_5px_0px_0px_#B9FF66] hover:shadow-[8px_8px_0px_0px_#191A23] transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Avatar & LinkedIn Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={member.avatarUrl}
                      alt={member.nameFa}
                      className="w-20 h-20 rounded-2xl border-2 border-[#191A23] object-cover bg-[#B9FF66]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#B9FF66] border border-[#191A23] p-1 rounded-lg">
                      <UserCheck className="w-3.5 h-3.5 text-[#191A23]" />
                    </div>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#191A23] text-[#B9FF66] flex items-center justify-center border border-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-black text-[#191A23] dark:text-white mt-2">
                  {lang === 'fa' ? member.nameFa : member.nameEn}
                </h3>
                <div className="inline-block bg-[#191A23] dark:bg-[#B9FF66] text-[#B9FF66] dark:text-[#191A23] px-2.5 py-0.5 rounded-lg text-xs font-bold mt-1">
                  {lang === 'fa' ? member.roleFa : member.roleEn}
                </div>

                {/* Divider line */}
                <div className="border-t border-[#191A23]/20 dark:border-white/10 my-4"></div>

                {/* Experience & Bio */}
                <p className="text-xs font-bold text-[#191A23] dark:text-gray-200 mb-2">
                  {lang === 'fa' ? member.experienceFa : member.experienceEn}
                </p>
                <p className="text-xs text-[#191A23]/80 dark:text-gray-300 font-medium leading-relaxed">
                  {lang === 'fa' ? member.bioFa : member.bioEn}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
