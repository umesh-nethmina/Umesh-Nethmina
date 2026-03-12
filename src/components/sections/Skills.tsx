"use client";

import { motion } from 'framer-motion';
import { Layers, Database, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-blue-500" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks',
    icon: <Layers className="w-6 h-6 text-teal-500" />,
    skills: ['React', 'Next.js', 'Express.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6 text-cyan-500" />,
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                    <span className="text-slate-600 dark:text-slate-300 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
