import React from 'react';
import { ThemeConfig } from '../types';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  theme: ThemeConfig;
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <section id="education" className={`py-20 ${theme.bgBody}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
           <h2 className={`text-3xl md:text-4xl ${theme.fontHeading} ${theme.textPrimary} mb-4`}>Knowledge Base</h2>
           <div className={`h-1 w-20 mx-auto ${theme.id === 'cyber' ? 'bg-green-500' : theme.id === 'brutalist' ? 'bg-black' : 'bg-blue-500/50'}`}></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${theme.id === 'cyber' ? 'bg-green-500/30' : 'bg-gray-300'} transform md:-translate-x-1/2`}></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Node */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 z-10 ${theme.cardBg} ${theme.id === 'cyber' ? 'border-green-500 shadow-neon' : theme.id === 'brutalist' ? 'border-black bg-white' : 'border-gray-200 shadow-sm'}`}>
                  <GraduationCap size={16} className={theme.textPrimary} />
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 w-full md:w-5/12">
                  <div className={`p-6 rounded-xl ${theme.cardBg} ${theme.cardBorder} hover:shadow-lg transition-shadow`}>
                    <span className={`inline-block px-2 py-1 mb-2 text-xs font-bold uppercase rounded ${theme.accent}`}>
                      {edu.status}
                    </span>
                    <h3 className={`text-lg font-bold ${theme.textPrimary}`}>{edu.institution}</h3>
                    <p className={`text-sm ${theme.textSecondary} mb-1`}>{edu.location}</p>
                    {edu.details && (
                      <p className={`text-xs mt-2 pt-2 border-t border-gray-500/10 ${theme.textSecondary}`}>
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
