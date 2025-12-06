export type ThemeMode = 'neoglass' | 'cyber' | 'minimal' | 'brutalist';

export interface ThemeConfig {
  id: ThemeMode;
  label: string;
  bgBody: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
  buttonStyles: string;
  navBg: string;
  fontHeading: string;
  fontBody: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  vision: string;
  fullDescription: string;
  timeline: string;
  isSecret?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  status: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Role {
  title: string;
  full: string;
}
