import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Mail, Github, Linkedin } from 'lucide-react';

const achievements = [
  { title: 'Winner, University Hackathon', org: 'Tech Club', date: 'Apr 2024' },
  { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', date: 'Jan 2024' },
  { title: 'Top 10, Coding Challenge', org: 'CodeFest', date: 'Oct 2023' },
  { title: 'Open Source Contributor', org: 'Various', date: '2023 — Present' },
];

export default function AchievementsAndContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Fake submit
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="achievements" className="scroll-mt-24 bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Achievements Timeline */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-br from-[#007BFF] to-[#00AEEF] p-2 text-white">
              <Award size={20} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Achievements & Certifications</h2>
          </div>
          <ol className="relative ml-3 border-l border-slate-200 dark:border-slate-800">
            {achievements.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="mb-8 ml-4"
              >
                <span className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00AEEF] ring-4 ring-white dark:ring-slate-950" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1"><Calendar size={14} /> {a.date}</span>
                  <span>•</span>
                  <span>{a.org}</span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Contact */}
        <div id="contact" className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-2xl font-bold">Contact Me</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-4 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-4 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-4 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="How can I help?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00AEEF] px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30"
              >
                {sent ? 'Message Sent ✔️' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
          >
            <h3 className="text-2xl font-bold">Connect</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              I’m active on these platforms:
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-3 rounded-lg bg-white p-3 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:ring-slate-800">
                <Mail /> you@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-white p-3 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:ring-slate-800">
                <Github /> github.com/yourhandle
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-white p-3 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:ring-slate-800">
                <Linkedin /> linkedin.com/in/yourhandle
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
