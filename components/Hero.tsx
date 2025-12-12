import React from 'react';
import { ThemeConfig } from '../types';
import { CONTACT_INFO } from '../constants';
import { ArrowDown, Linkedin, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  theme: ThemeConfig;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {theme.id === 'neoglass' && (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
          </>
        )}
        {theme.id === 'cyber' && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,18,0)_2px,transparent_2px)] bg-[size:40px_40px] [background-color:rgba(0,255,65,0.03)]" />
        )}
        {theme.id === 'brutalist' && (
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-4xl md:text-6xl lg:text-7xl ${theme.fontHeading} ${theme.textPrimary} mb-6 leading-tight`}
        >
          Hi, I’m Gleb Shirin.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`text-lg md:text-xl md:max-w-3xl mx-auto ${theme.textSecondary} mb-10 leading-relaxed`}
        >
          Architecting ventures across multiple domains of emerging technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-6 mb-12"
        >
          <a
            href={CONTACT_INFO.telegram}
            target="_blank"
            rel="noreferrer"
            className={`w-14 h-14 rounded-full flex items-center justify-center border ${theme.cardBorder} bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group`}
            aria-label="Telegram"
          >
            <Send size={24} className={theme.textPrimary} />
          </a>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`w-14 h-14 rounded-full flex items-center justify-center border ${theme.cardBorder} bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group`}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className={theme.textPrimary} />
          </a>

          <a
            href={CONTACT_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className={`w-14 h-14 rounded-full flex items-center justify-center border ${theme.cardBorder} bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group`}
            aria-label="X (Twitter)"
          >
            <Twitter size={24} className={theme.textPrimary} />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <a href="#projects" className={`px-8 py-4 ${theme.buttonStyles} flex items-center justify-center gap-2`}>
            View Ecosystems <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
