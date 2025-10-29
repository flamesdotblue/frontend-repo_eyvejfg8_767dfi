import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern, responsive portfolio built with React and Tailwind.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Task Manager API',
    desc: 'RESTful API for tasks with authentication and CRUD operations.',
    tags: ['FastAPI', 'MongoDB', 'JWT'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Real-time Chat',
    desc: 'Socket-based chat app with rooms and typing indicators.',
    tags: ['Node', 'Socket.IO', 'Redis'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'High-quality product pages and cart flow with animations.',
    tags: ['Next.js', 'Stripe', 'Design'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Data Viz Dashboard',
    desc: 'Interactive charts and KPIs with filters and drill-downs.',
    tags: ['D3', 'React', 'Analytics'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Mobile Game Prototype',
    desc: 'Casual arcade prototype built in Unity with C#.',
    tags: ['Unity', 'C#', 'Game Dev'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-gradient-to-b from-white to-blue-50 py-20 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Projects</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">A selection of things I’ve built and tinkered with.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="h-36 bg-gradient-to-br from-[#007BFF] via-[#00AEEF] to-[#1E3A8A] opacity-90 transition group-hover:opacity-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-blue-100/70 px-2 py-1 text-[#1E3A8A] dark:bg-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
