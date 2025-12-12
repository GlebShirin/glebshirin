import React, { useState, useEffect } from 'react';
import { ThemeConfig, ThemeMode } from '../types';
import { THEMES, BRAND_NAMES } from '../constants';
import { X, Palette } from 'lucide-react';

interface HeaderProps {
  currentTheme: ThemeConfig;
  setTheme: (id: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, setTheme }) => {
  const [brandName, setBrandName] = useState(BRAND_NAMES[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * BRAND_NAMES.length);
      setBrandName(BRAND_NAMES[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (id: ThemeMode) => {
    setTheme(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${currentTheme.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-xl md:text-2xl ${currentTheme.fontHeading} ${currentTheme.textPrimary} tracking-widest`}>
              {brandName}
            </span>
          </div>

          <div className="hidden md:flex space-x-2 items-center">
            <span className={`text-xs uppercase mr-2 opacity-60 ${currentTheme.textSecondary}`}>Select Interface:</span>
            {Object.values(THEMES).map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id as ThemeMode)}
                className={`px-3 py-1 text-xs font-medium transition-all ${
                  currentTheme.id === theme.id
                    ? `${currentTheme.textPrimary} border-b-2 border-current`
                    : `${currentTheme.textSecondary} opacity-50 hover:opacity-100`
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-md ${currentTheme.textPrimary}`}>
              {isMenuOpen ? <X size={24} /> : <Palette size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden absolute w-full ${currentTheme.navBg} border-b ${currentTheme.cardBorder}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <p className={`px-3 py-2 text-xs uppercase ${currentTheme.textSecondary}`}>Select Theme</p>
            {Object.values(THEMES).map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id as ThemeMode)}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  currentTheme.id === theme.id ? currentTheme.textPrimary : currentTheme.textSecondary
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
