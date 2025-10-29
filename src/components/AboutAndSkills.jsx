import { motion } from 'framer-motion';
import { GraduationCap, Code, Heart } from 'lucide-react';

const skills = [
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'React / Next.js', level: 85 },
  { name: 'Python / FastAPI', level: 80 },
  { name: 'Node.js / Express', level: 75 },
  { name: 'Databases (MongoDB, SQL)', level: 70 },
  { name: 'UI/UX & Accessibility', level: 70 },
];

export default function AboutAndSkills() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* About */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00AEEF] p-2 text-white">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              I’m a student passionate about full‑stack development and human‑centered design. I enjoy
              turning complex problems into simple, beautiful, and intuitive interfaces.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="text-sm text-slate-500 dark:text-slate-400">Education</div>
                <div className="mt-1 font-medium">B.S. in Computer Science</div>
                <div className="text-xs text-slate-500">2022 — Present</div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="text-sm text-slate-500 dark:text-slate-400">Interests</div>
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[#1E3A8A] dark:bg-slate-800">Web</span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[#1E3A8A] dark:bg-slate-800">AI</span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[#1E3A8A] dark:bg-slate-800">Open Source</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00AEEF] p-2 text-white">
                <Code size={20} />
              </div>
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#007BFF] via-[#00AEEF] to-[#1E3A8A]"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-br from-blue-50 to-white p-4 ring-1 ring-slate-200 dark:from-slate-900 dark:to-slate-900 dark:ring-slate-800">
              <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                <Heart size={16} className="text-[#00AEEF]" />
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-300">
                {['Communication', 'Teamwork', 'Problem Solving', 'Leadership'].map((chip) => (
                  <span key={chip} className="rounded-full bg-blue-100/60 px-2 py-1 text-[#1E3A8A] dark:bg-slate-800">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
