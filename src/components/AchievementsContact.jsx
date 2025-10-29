import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    title: 'Dean’s List',
    desc: 'Recognized for academic excellence with a 3.9 GPA.',
  },
  {
    year: '2024',
    title: 'Hackathon Finalist',
    desc: 'Built a sustainability app in 24 hours; placed in top 5.',
  },
  {
    year: '2023',
    title: 'Web Dev Certification',
    desc: 'Completed full‑stack web development specialization.',
  },
];

export default function AchievementsContact() {
  const [index, setIndex] = useState(0);
  const safeIndex = useMemo(() => ((index % achievements.length) + achievements.length) % achievements.length, [index]);

  const next = () => setIndex((i) => (i + 1) % achievements.length);
  const prev = () => setIndex((i) => (i - 1 + achievements.length) % achievements.length);

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Valid email required';
    if (!data.message.trim() || data.message.length < 10) errors.message = 'Message must be at least 10 characters';
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      message: String(form.get('message') || ''),
    };
    const errors = validate(data);
    if (Object.keys(errors).length) {
      alert(Object.values(errors).join('\n'));
      return;
    }
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="achievements" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Achievements */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">Achievements & Certifications</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A snapshot of milestones and credentials.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#E6F7FF] to-white p-1 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <div className="flex items-stretch">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  className="w-full flex-shrink-0 p-6"
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: safeIndex === i ? 1 : 0.4, scale: safeIndex === i ? 1 : 0.98 }}
                  transition={{ duration: 0.4 }}
                  style={{ transform: `translateX(-${safeIndex * 100}%)` }}
                >
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-sm font-semibold text-[#1E3A8A]">{a.year}</div>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 p-2">
              <button onClick={prev} className="h-2 w-2 rounded-full bg-[#1E3A8A]/70" aria-label="Previous" />
              <button onClick={next} className="h-2 w-2 rounded-full bg-[#00AEEF]/70" aria-label="Next" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let’s Connect</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project, internship, or just want to say hi? Send a message!</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input name="name" type="text" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-[#00AEEF] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input name="email" type="email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-[#00AEEF] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea name="message" rows={5} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-[#00AEEF] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#007BFF] px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] hover:bg-[#1E3A8A]">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#E6F7FF] to-white p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Elsewhere</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Follow my work and say hello on social media.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <Github /> <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <Linkedin /> <span>LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <Mail /> <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
