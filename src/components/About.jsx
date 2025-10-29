import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">About Me</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Curious builder who loves turning ideas into delightful, real-world products.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="col-span-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover ring-4 ring-[#E6F2FF]"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Alex Rivera</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Aspiring Software Engineer</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            I'm a student focused on full‑stack development, crafting accessible and performant web apps. Outside coding, I enjoy design, photography, and music production.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#1E3A8A]">Education</h4>
          <ul className="space-y-3 text-sm">
            <li className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <div className="font-medium text-slate-900 dark:text-white">B.S. in Computer Science</div>
              <div className="text-slate-600 dark:text-slate-300">Tech University • 2022 – Present</div>
            </li>
            <li className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <div className="font-medium text-slate-900 dark:text-white">Online Specializations</div>
              <div className="text-slate-600 dark:text-slate-300">Algorithms, Web Dev, Cloud</div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#1E3A8A]">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {["UI/UX", "Open Source", "AI", "Cloud", "Photography", "Music"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#00AEEF]/30 bg-[#E6F7FF] px-3 py-1 text-xs font-medium text-[#1E3A8A] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
            Always exploring new technologies and building projects that blend creativity with engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
