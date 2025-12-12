import { ThemeConfig, Project, EducationItem, Skill, Role } from './types';
import { Layers, Zap, Box, Hexagon, Ghost, Cpu } from 'lucide-react';

export const THEMES: Record<string, ThemeConfig> = {
  neoglass: {
    id: 'neoglass',
    label: 'NeoGlass',
    bgBody: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    accent: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
    cardBg: 'bg-white/5 backdrop-blur-xl',
    cardBorder: 'border border-white/10',
    buttonStyles: 'bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md transition-all',
    navBg: 'bg-slate-900/60 backdrop-blur-xl border-b border-white/5',
    fontHeading: 'font-sans tracking-tight',
    fontBody: 'font-sans',
  },
  cyber: {
    id: 'cyber',
    label: 'Cyber Tech',
    bgBody: 'bg-black text-green-400',
    textPrimary: 'text-green-400',
    textSecondary: 'text-green-400/70',
    accent: 'bg-green-900/20 text-green-400 border-green-500/50 shadow-neon',
    cardBg: 'bg-gray-900/80',
    cardBorder: 'border border-green-500/50',
    buttonStyles: 'bg-black hover:bg-green-900/30 border border-green-500 text-green-400 rounded-none uppercase tracking-widest transition-all hover:shadow-neon',
    navBg: 'bg-black/90 border-b border-green-500/30',
    fontHeading: 'font-display uppercase tracking-widest',
    fontBody: 'font-mono',
  },
  minimal: {
    id: 'minimal',
    label: 'Minimalist',
    bgBody: 'bg-stone-50 text-stone-900',
    textPrimary: 'text-stone-900',
    textSecondary: 'text-stone-500',
    accent: 'bg-stone-200 text-stone-800',
    cardBg: 'bg-white',
    cardBorder: 'border border-stone-200',
    buttonStyles: 'bg-stone-900 hover:bg-stone-700 text-white rounded-md transition-all',
    navBg: 'bg-white/80 backdrop-blur-md border-b border-stone-200',
    fontHeading: 'font-sans font-semibold tracking-tight',
    fontBody: 'font-sans',
  },
  brutalist: {
    id: 'brutalist',
    label: 'Brutalist',
    bgBody: 'bg-[#FFEB3B] text-black',
    textPrimary: 'text-black',
    textSecondary: 'text-black/80',
    accent: 'bg-white text-black border-2 border-black shadow-brutal',
    cardBg: 'bg-white',
    cardBorder: 'border-4 border-black shadow-brutal',
    buttonStyles: 'bg-white hover:bg-black hover:text-white border-2 border-black text-black font-bold uppercase shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1 transition-all',
    navBg: 'bg-[#FFEB3B] border-b-4 border-black',
    fontHeading: 'font-display font-black uppercase',
    fontBody: 'font-mono font-bold',
  },
};

export const BRAND_NAMES = [
  'SHIRIN.STUDIO',
  'GLEB SHIRIN LABS',
  'GS / DIGITAL FUTURES',
  'SHIRIN CREATIONS',
];

export const CONTACT_INFO = {
  email: 'glebshirin@gmail.com',
  telegram: 'https://t.me/X666X777X999',
  telegramHandle: 'X666X777X999',
  linkedin: 'https://www.linkedin.com/in/shiringleb/',
  twitter: 'https://x.com/GlebShirin777',
};

export const PROJECTS: Project[] = [
  {
    id: 'vala',
    title: 'VALA',
    subtitle: 'Autonomous Logistics',
    description: 'Autonomous delivery ecosystem combining ground vans, drones, and a gamified courier experience platform.',
    status: 'In Development / Active Build Phase',
    vision: 'Revolutionizing last-mile delivery through a synchronized autonomous ecosystem.',
    fullDescription: 'VALA integrates autonomous ground vehicles and drones into a unified logistics network. By gamifying the courier experience, it creates a hybrid workforce that bridges the gap between current infrastructure and fully autonomous futures.',
    timeline: 'Public Release — Q4 2025',
  },
  {
    id: 'sevenoir',
    title: 'SEVENOIR',
    subtitle: 'Blockchain Infrastructure',
    description: 'A dedicated Proof-of-Stake chain integrated with a smart physical tag ecosystem for asset verification.',
    status: 'Ecosystem Expansion',
    vision: 'A tangible blockchain layer for high-value asset verification.',
    fullDescription: 'Built on a dedicated Proof-of-Stake chain, SEVENOIR utilizes smart physical tags to create unforgeable digital twins for luxury goods, ensuring authenticity and provenance on-chain.',
    timeline: 'Chain Launch — H1 2026',
  },
  {
    id: 'nvg',
    title: 'NVG Technology',
    subtitle: 'Automated Retail',
    description: 'Next-gen smart vending retail capsules powered by IoT for automated 24/7 commerce.',
    status: 'Prototype Stage / Partner Outreach',
    vision: 'The future of automated retail in smart cities.',
    fullDescription: 'Advanced IoT-enabled vending capsules designed for 24/7 commerce. These smart units utilize AI for inventory management and user interaction, providing a seamless retail experience without human staffing.',
    timeline: 'Commercial Capsules — 2025–2026',
  },
  {
    id: 'skilloton',
    title: 'SkilloTon',
    subtitle: 'Decentralized Marketplace',
    description: 'TON-based service marketplace leveraging AI for automated request matching and flow management.',
    status: 'MVP Fixing & Feature Expansion',
    vision: 'Decentralizing service exchange with AI efficiency on TON.',
    fullDescription: 'A service marketplace built on the TON blockchain that leverages AI agents to automatically match user requests with the best service providers, eliminating manual search and negotiation friction.',
    timeline: 'MVP v2 Release — Q1 2025',
  },
  {
    id: '13players',
    title: '13 Players Club',
    subtitle: 'Web3 Brand & Gaming',
    description: 'Lore-driven multi-chain identity brand featuring puzzles, airdrops, and memecoin integration.',
    status: 'Community Building Phase',
    vision: 'A gamified Web3 narrative bridging lore and digital identity.',
    fullDescription: 'An immersive multi-chain brand that combines storytelling, puzzle-solving, and memecoin culture. It creates a community-driven mystery where participation unlocks value and status within the ecosystem.',
    timeline: 'Lore Phase 2 — 2025',
  },
  {
    id: 'oracolure',
    title: 'Oracolure',
    subtitle: 'Stealth Project',
    description: 'A next-generation product pushing the boundaries of what is currently possible.',
    status: 'Coming Soon / Stealth Mode',
    isSecret: true,
    vision: 'Redefining the boundaries of digital interaction.',
    fullDescription: 'A stealth-mode project currently under strict NDA. Oracolure explores next-generation interfaces and predictive algorithms. Further details are classified.',
    timeline: 'Stealth Mode — TBA',
  },
];

export const EDUCATION: EducationItem[] = [
  { id: 'boiko', institution: 'Boiko School, Kharkiv', location: 'Ukraine', status: 'Graduated' },
  { id: 'python', institution: 'Python Programming Course', location: 'Remote Learning', status: 'Completed', details: 'Foundational programming, algorithms, scripting.' },
  { id: 'cpp', institution: 'C++ Programming Course', location: 'Remote Learning', status: 'Completed', details: 'Object-oriented programming and system-level logic.' },
  { id: 'ai', institution: 'AI Tools & Human–AI Interaction', location: 'Self-Directed', status: 'Continuous Learning', details: 'Exploration of modern AI systems, model prompting, and applied AI workflows.' },
  { id: 'vwu', institution: 'VWU Studienkolleg', location: 'Vienna, Austria', status: 'Completed Modules', details: 'Preparation courses completed' },
  { id: 'univie', institution: 'University of Vienna', location: 'Vienna, Austria', status: 'In Progress', details: 'International Business Administration' },
];

export const ROLES: Role[] = [
  { title: 'CEO', full: 'Chief Executive Officer' },
  { title: 'CTO', full: 'Chief Technology Officer' },
  { title: 'CIO', full: 'Chief Innovation Officer' },
  { title: 'CPO', full: 'Chief Product Officer' },
];

export const CAPABILITIES: Skill[] = [
  {
    category: 'Venture Architecture',
    items: [
      'Ecosystem Building',
      'Cross-Platform Product Architecture',
      'Investor Narrative & Pitch Development',
      'Business Engineering',
      'Tokenomics & Digital Economies',
    ],
  },
  {
    category: 'Technology Leadership',
    items: [
      'AI-Driven Automation',
      'Blockchain Infrastructure (PoS, smart ecosystems)',
      'Autonomous Vehicles & Drone Systems',
      'IoT & Smart Retail Integration',
      'Technical Roadmapping',
    ],
  },
  {
    category: 'Product & Experience Design',
    items: [
      'Experience Systems (UX/CX)',
      'Interface Architecture',
      'Visual Strategy',
      'User-centric Flow Engineering',
    ],
  },
  {
    category: 'Innovation & R&D',
    items: [
      'Emerging Technology Research',
      'Human–AI Interaction',
      'Prototype Development',
      'Scalability Modeling',
    ],
  },
];
