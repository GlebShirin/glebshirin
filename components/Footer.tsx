import React from 'react';
import { ThemeConfig } from '../types';
import { CONTACT_INFO } from '../constants';
import { Twitter, Linkedin, Send, Mail } from 'lucide-react';

interface FooterProps {
  theme: ThemeConfig;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`py-12 border-t ${theme.cardBorder} ${theme.bgBody}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className={`text-2xl ${theme.fontHeading} ${theme.textPrimary} mb-2`}>GLEB SHIRIN</h2>
            <p className={`text-sm ${theme.textSecondary}`}>
              &copy; {new Date().getFullYear()} All Rights Reserved. <br />
              Building the future in Vienna, Austria.
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <a href={CONTACT_INFO.telegram} target="_blank" rel="noreferrer" className={`transform hover:scale-110 transition-transform ${theme.textSecondary} hover:${theme.textPrimary}`} aria-label="Telegram">
              <Send size={24} />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className={`transform hover:scale-110 transition-transform ${theme.textSecondary} hover:${theme.textPrimary}`} aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={CONTACT_INFO.twitter} target="_blank" rel="noreferrer" className={`transform hover:scale-110 transition-transform ${theme.textSecondary} hover:${theme.textPrimary}`} aria-label="X (Twitter)">
              <Twitter size={24} />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className={`transform hover:scale-110 transition-transform ${theme.textSecondary} hover:${theme.textPrimary}`} aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
