import React from 'react';
import { ThemeConfig } from '../types';
import { ROLES, CAPABILITIES } from '../constants';
import { MapPin, User, Briefcase, Code, Compass, Zap, Layout, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  theme: ThemeConfig;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase size={18} />;
      case 1:
        return <Zap size={18} />;
      case 2:
        return <Layout size={18} />;
      case 3:
        return <Sparkles size={18} />;
      default:
        return <Code size={18} />;
    }
  };

  return (
    <section id="about" className={`py-20 ${theme.bgBody}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className={`text-3xl md:text-4xl ${theme.fontHeading} ${theme.textPrimary} mb-4`}>The Architect</h2>
          <div
            className={`h-1 w-20 ${theme.id === 'cyber' ? 'bg-green-500' : theme.id === 'brutalist' ? 'bg-black' : 'bg-blue-500/50'}`}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <motion.div whileHover={{ y: -5 }} className={`p-8 ${theme.cardBg} ${theme.cardBorder} rounded-xl relative overflow-hidden`}>
              <div className="relative z-10">
                <h3 className={`text-xl ${theme.fontHeading} ${theme.textPrimary} mb-6 flex items-center gap-2`}>
                  <User size={20} /> Profile
                </h3>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-500/10 pb-4">
                    <span className={theme.textSecondary}>Name</span>
                    <span className={`font-semibold ${theme.textPrimary}`}>Gleb Shirin</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-500/10 pb-4">
                    <span className={theme.textSecondary}>Age</span>
                    <span className={`font-semibold ${theme.textPrimary}`}>19</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-500/10 pb-4">
                    <span className={theme.textSecondary}>Location</span>
                    <span className={`font-semibold ${theme.textPrimary} flex items-center gap-1`}>
                      <MapPin size={16} /> Vienna, Austria
                    </span>
                  </div>
                  <div className="flex justify-between items-start border-b border-gray-500/10 pb-4">
                    <span className={theme.textSecondary}>Founding</span>
                    <span className={`font-semibold ${theme.textPrimary} text-right max-w-[60%]`}>
                      VALA, SEVENOIR, NVG, SkilloTon, 13 Players Club
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={`p-8 ${theme.cardBg} ${theme.cardBorder} rounded-xl relative overflow-hidden`}>
              <div className="relative z-10">
                <h3 className={`text-xl ${theme.fontHeading} ${theme.textPrimary} mb-4`}>About Me</h3>
                <div className={`space-y-4 text-sm leading-relaxed ${theme.textSecondary}`}>
                  <p>
                    I'm a Vienna-based technology founder focused on building interconnected ecosystems across logistics, AI-driven automation,
                    blockchain infrastructure, and smart retail systems.
                  </p>
                  <p>
                    My work centers around designing multi-layer product architectures, leading innovation, and developing scalable systems that
                    merge physical automation with digital economies.
                  </p>
                  <p>
                    Across my ventures — VALA, SEVENOIR, NVG Technology, SkilloTon, and Oracolure — I combine product vision, technical
                    strategy, and ecosystem thinking to create next-generation infrastructure for real-world and digital markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.textSecondary} mb-3 flex items-center gap-2`}>
                <Compass size={16} /> My Roles
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ROLES.map((role, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 ${theme.cardBg} ${theme.cardBorder} rounded-xl text-center flex flex-col items-center justify-center hover:bg-opacity-80 transition-all`}
                  >
                    <h4 className={`text-2xl ${theme.fontHeading} ${theme.textPrimary} mb-1`}>{role.title}</h4>
                    <span className={`text-[10px] font-medium uppercase tracking-wider ${theme.textSecondary} leading-tight`}>{role.full}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.textSecondary} mb-3 mt-8`}>My Capabilities</h4>
              <div className="space-y-4">
                {CAPABILITIES.map((cap, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 ${theme.cardBg} ${theme.cardBorder} rounded-xl`}
                  >
                    <h4 className={`text-lg font-bold ${theme.textPrimary} mb-4 flex items-center gap-2`}>
                      {getIcon(idx)}
                      {cap.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {cap.items.map((skill, sIdx) => (
                        <span key={sIdx} className={`px-3 py-1 text-sm ${theme.id === 'brutalist' ? 'border-2 border-black font-bold' : `${theme.accent} rounded-md`}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={`p-6 ${theme.cardBg} ${theme.cardBorder} rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8`}>
              <div>
                <span className={`block text-sm ${theme.textSecondary}`}>Currently studying at</span>
                <span className={`block text-lg font-bold ${theme.textPrimary}`}>University of Vienna</span>
              </div>
              <div className={`text-xs px-2 py-1 ${theme.accent} rounded text-center sm:text-right`}>
                International Business<br className="hidden sm:inline" /> Administration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
