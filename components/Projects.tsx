import React, { useState } from 'react';
import { ThemeConfig, Project } from '../types';
import { PROJECTS, CONTACT_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Lock, Activity, Layers, Box, Globe, Zap, X, Calendar, Send, Linkedin, Mail, Twitter } from 'lucide-react';

interface ProjectsProps {
  theme: ThemeConfig;
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const getIcon = (id: string, className = 'w-8 h-8') => {
    switch (id) {
      case 'vala':
        return <Box className={className} />;
      case 'sevenoir':
        return <Layers className={className} />;
      case 'nvg':
        return <Zap className={className} />;
      case 'skilloton':
        return <Globe className={className} />;
      case '13players':
        return <Activity className={className} />;
      default:
        return <Lock className={className} />;
    }
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setShowContactModal(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowContactModal(false);
  };

  const handlePitchDeckRequest = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const handleBackToProject = () => {
    setShowContactModal(false);
  };

  return (
    <section id="projects" className={`py-20 ${theme.bgBody}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className={`text-3xl md:text-4xl ${theme.fontHeading} ${theme.textPrimary} mb-4`}>Ventures</h2>
            <div
              className={`h-1 w-20 ${theme.id === 'cyber' ? 'bg-green-500' : theme.id === 'brutalist' ? 'bg-black' : 'bg-blue-500/50'}`}
            ></div>
          </div>
          <p className={`${theme.textSecondary} mt-4 md:mt-0 max-w-md text-right`}>A portfolio of active ecosystems, prototypes, and stealth R&D.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col h-full p-8 rounded-2xl ${theme.cardBg} ${theme.cardBorder} transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden cursor-pointer`}
            >
              {project.isSecret && (
                <div
                  className={`absolute inset-0 z-20 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 ${theme.id === 'neoglass' ? 'bg-black/40' : 'bg-black/80'}`}
                >
                  <Lock className={`w-12 h-12 mb-4 ${theme.textPrimary}`} />
                  <span className={`text-xl font-bold uppercase tracking-widest ${theme.textPrimary}`}>Top Secret</span>
                  <span className={`text-xs mt-2 ${theme.textSecondary}`}>Click for Status</span>
                </div>
              )}

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-3 rounded-lg ${theme.accent} bg-opacity-20`}>{getIcon(project.id)}</div>
                {!project.isSecret && <ArrowUpRight className={`w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity ${theme.textPrimary}`} />}
              </div>

              <div className={`flex-grow relative z-10 ${project.isSecret ? 'blur-sm opacity-50' : ''}`}>
                <h3 className={`text-2xl font-bold mb-2 ${theme.fontHeading} ${theme.textPrimary}`}>{project.title}</h3>
                <h4 className={`text-sm font-medium uppercase tracking-wider mb-4 ${theme.textSecondary}`}>{project.subtitle}</h4>
                <p className={`mb-6 text-sm leading-relaxed ${theme.textSecondary}`}>{project.description}</p>
              </div>

              <div className={`pt-6 mt-auto border-t border-gray-500/10 relative z-10 ${project.isSecret ? 'blur-sm opacity-50' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className={`relative flex h-3 w-3`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.id === 'cyber' ? 'bg-green-500' : 'bg-blue-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${theme.id === 'cyber' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                  </span>
                  <span className={`text-xs font-semibold uppercase ${theme.textPrimary}`}>{project.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${showContactModal ? 'max-w-md' : 'max-w-2xl'} max-h-[90vh] overflow-y-auto rounded-2xl ${theme.cardBg} ${theme.cardBorder} shadow-2xl flex flex-col transition-all duration-300 ease-in-out`}
            >
              <button onClick={closeModal} className={`absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 ${theme.textPrimary} transition-colors z-20`}>
                <X size={24} />
              </button>

              <div className="p-8">
                {!showContactModal ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl ${theme.accent} bg-opacity-20`}>{getIcon(selectedProject.id, 'w-10 h-10')}</div>
                      <div>
                        <h3 className={`text-3xl font-bold ${theme.fontHeading} ${theme.textPrimary}`}>{selectedProject.title}</h3>
                        <p className={`text-sm font-medium uppercase tracking-wider ${theme.textSecondary}`}>{selectedProject.subtitle}</p>
                      </div>
                    </div>

                    <div className={`w-full h-px ${theme.id === 'cyber' ? 'bg-green-500/30' : 'bg-white/10'} mb-8`} />

                    <div className="mb-8">
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.textSecondary} mb-2`}>Vision</h4>
                      <p className={`text-lg italic font-light ${theme.textPrimary}`}>"{selectedProject.vision}"</p>
                    </div>

                    <div className="mb-8">
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.textSecondary} mb-2`}>Ecosystem Overview</h4>
                      <p className={`leading-relaxed ${theme.textSecondary}`}>{selectedProject.fullDescription}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.textSecondary} mb-3 flex items-center gap-2`}>
                        <Calendar size={16} /> Release Timeline
                      </h4>
                      <div className={`inline-block px-4 py-2 rounded-lg border ${theme.cardBorder} ${theme.bgBody}`}>
                        <span className={`font-mono font-bold ${theme.textPrimary}`}>{selectedProject.timeline}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-white/10">
                      <button onClick={handlePitchDeckRequest} className={`flex-1 px-6 py-3 ${theme.buttonStyles} flex items-center justify-center gap-2 text-center cursor-pointer`}>
                        Request Pitch Deck <ArrowUpRight size={18} />
                      </button>

                      <div className="flex gap-2">
                        <button onClick={handlePitchDeckRequest} className={`p-3 ${theme.buttonStyles} flex items-center justify-center rounded-lg`} title="Contact">
                          <Send size={20} />
                        </button>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className={`p-3 ${theme.buttonStyles} flex items-center justify-center rounded-lg`} title="Connect on LinkedIn">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-2">
                    <h3 className={`text-2xl font-bold ${theme.fontHeading} ${theme.textPrimary} mb-6`}>Pitch Deck Request</h3>

                    <div className="w-full space-y-3">
                      <a
                        href={`mailto:${CONTACT_INFO.email}?subject=Request%20Pitch%20Deck%20for%20${selectedProject.title}`}
                        className={`w-full p-4 flex items-center gap-4 rounded-xl border ${theme.cardBorder} hover:bg-white/5 transition-colors group`}
                      >
                        <div className={`p-2 rounded-full ${theme.accent} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                          <Mail size={18} />
                        </div>
                        <div className="flex-1">
                          <span className={`block text-[10px] uppercase tracking-wider ${theme.textSecondary}`}>Email</span>
                          <span className={`font-mono text-sm ${theme.textPrimary}`}>{CONTACT_INFO.email}</span>
                        </div>
                        <ArrowUpRight size={16} className={`${theme.textSecondary}`} />
                      </a>

                      <a
                        href={CONTACT_INFO.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full p-4 flex items-center gap-4 rounded-xl border ${theme.cardBorder} hover:bg-white/5 transition-colors group`}
                      >
                        <div className={`p-2 rounded-full ${theme.accent} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                          <Send size={18} />
                        </div>
                        <div className="flex-1">
                          <span className={`block text-[10px] uppercase tracking-wider ${theme.textSecondary}`}>Telegram</span>
                          <span className={`font-mono text-sm ${theme.textPrimary}`}>{CONTACT_INFO.telegramHandle}</span>
                        </div>
                        <ArrowUpRight size={16} className={`${theme.textSecondary}`} />
                      </a>

                      <a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full p-4 flex items-center gap-4 rounded-xl border ${theme.cardBorder} hover:bg-white/5 transition-colors group`}
                      >
                        <div className={`p-2 rounded-full ${theme.accent} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                          <Linkedin size={18} />
                        </div>
                        <div className="flex-1">
                          <span className={`block text-[10px] uppercase tracking-wider ${theme.textSecondary}`}>LinkedIn</span>
                          <span className={`font-mono text-sm ${theme.textPrimary}`}>glebshirin</span>
                        </div>
                        <ArrowUpRight size={16} className={`${theme.textSecondary}`} />
                      </a>

                      <a
                        href={CONTACT_INFO.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full p-4 flex items-center gap-4 rounded-xl border ${theme.cardBorder} hover:bg-white/5 transition-colors group`}
                      >
                        <div className={`p-2 rounded-full ${theme.accent} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                          <Twitter size={18} />
                        </div>
                        <div className="flex-1">
                          <span className={`block text-[10px] uppercase tracking-wider ${theme.textSecondary}`}>X (Twitter)</span>
                          <span className={`font-mono text-sm ${theme.textPrimary}`}>@GlebShirin777</span>
                        </div>
                        <ArrowUpRight size={16} className={`${theme.textSecondary}`} />
                      </a>
                    </div>

                    <button onClick={handleBackToProject} className={`mt-6 text-sm underline ${theme.textSecondary}`}>
                      Back to project
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
