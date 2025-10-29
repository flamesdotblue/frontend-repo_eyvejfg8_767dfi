import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Moon, Sun } from 'lucide-react';

export default function Hero({ darkMode, onToggleDark }) {
  const gradientOverlay = useMemo(
    () => (
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 60% at 50% 20%, rgba(0,123,255,0.35) 0%, rgba(0,174,239,0.25) 40%, rgba(30,58,138,0.25) 70%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 to-transparent dark:from-slate-900/90" />
      </div>
    ),
    []
  );

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      {/* Top nav */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00AEEF]" />
            <span className="text-lg">Student Portfolio</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-slate-700 hover:text-[#007BFF] dark:text-slate-300">About</a>
            <a href="#skills" className="text-sm text-slate-700 hover:text-[#007BFF] dark:text-slate-300">Skills</a>
            <a href="#projects" className="text-sm text-slate-700 hover:text-[#007BFF] dark:text-slate-300">Projects</a>
            <a href="#achievements" className="text-sm text-slate-700 hover:text-[#007BFF] dark:text-slate-300">Achievements</a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-[#007BFF] dark:text-slate-300">Contact</a>
          </div>
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm backdrop-blur hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/70"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden md:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {gradientOverlay}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#1E3A8A] shadow-sm backdrop-blur dark:bg-slate-800/60"
        >
          <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
          Aspiring Software Engineer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-[#007BFF] via-[#00AEEF] to-[#1E3A8A] bg-clip-text text-transparent">Your Name</span>
          <br />
          I build modern web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300"
        >
          Passionate about crafting clean, accessible, and delightful products using JavaScript, Python, and cloud-native tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007BFF] to-[#00AEEF] px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.02]"
          >
            <Rocket size={18} />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-6 py-3 text-slate-800 backdrop-blur hover:bg-white dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
