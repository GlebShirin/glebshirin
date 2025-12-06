import React, { ReactNode } from 'react';
import { ThemeConfig } from '../types';

interface LayoutProps {
  children: ReactNode;
  theme: ThemeConfig;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${theme.bgBody} ${theme.fontBody}`}>
      {children}
    </div>
  );
};
