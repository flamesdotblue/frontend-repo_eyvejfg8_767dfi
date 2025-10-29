import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const skills = [
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 80 },
  { name: 'Python', value: 75 },
  { name: 'C++', value: 65 },
  { name: 'Communication', value: 85 },
  { name: 'Teamwork', value: 90 },
];

const projects = [
  {
    title: 'Smart Tasker',
    desc: 'A productivity app with AI-assisted planning and real-time collaboration.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Campus Events',
    desc: 'Discover, create, and RSVP to student events with live chat.',
    tags: ['Vite', 'Socket.io', 'Tailwind'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Portfolio v2',
    desc: 'My second iteration portfolio with 3D and micro‑interactions.',
    tags: ['Spline', 'Framer Motion'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Algo Visualizer',
    desc: 'Interactive algorithms visualizer for learning fundamentals.',
    tags: ['D3.js', 'TypeScript'],
    demo: '#',
    code: '#',
  },
];

function Circle({ value, label, color = '#007BFF' }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="h-28 w-28" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} stroke="#E6F2FF" strokeWidth="10" fill="transparent" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="-mt-7 text-center text-lg font-bold text-slate-900 dark:text-white">{value}%</div>
      <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</div>
    </div>
  );
}

export default function SkillsProjects() {
  return (
    <section id="skills" className="bg-gradient-to-b from-white to-[#F5FAFF] py-20 dark:from-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Skills */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">Skills</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A blend of technical and soft skills honed through projects and teamwork.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Circle value={s.value} label={s.name} />
            </div>
          ))}
        </motion.div>

        {/* Projects */}
        <div id="projects" className="mt-20 scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">Projects</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Selected work showcasing problem solving and delightful UX.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-[#E6F7FF] to-white dark:from-slate-800 dark:to-slate-900" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-[#E6F7FF] px-2 py-1 text-xs font-medium text-[#1E3A8A] dark:bg-slate-800 dark:text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm font-medium text-[#007BFF] hover:underline">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:underline dark:text-slate-300">
                    <Github size={16} /> Code
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
