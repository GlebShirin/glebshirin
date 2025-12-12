import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { THEMES } from './constants';
import { ThemeMode } from './types';

function App() {
  const [currentThemeId, setCurrentThemeId] = useState<ThemeMode>('neoglass');
  const currentTheme = THEMES[currentThemeId];

  return (
    <Layout theme={currentTheme}>
      <Header currentTheme={currentTheme} setTheme={setCurrentThemeId} />
      <main>
        <Hero theme={currentTheme} />
        <About theme={currentTheme} />
        <Projects theme={currentTheme} />
        <Education theme={currentTheme} />
      </main>
      <Footer theme={currentTheme} />
    </Layout>
  );
}

export default App;
