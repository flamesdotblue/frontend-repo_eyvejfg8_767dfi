import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsProjects from './components/SkillsProjects';
import AchievementsContact from './components/AchievementsContact';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <Hero />
      <About />
      <SkillsProjects />
      <AchievementsContact />
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        © {new Date().getFullYear()} Alex Rivera • Built with React, Tailwind, and Spline
      </footer>
    </div>
  );
}
