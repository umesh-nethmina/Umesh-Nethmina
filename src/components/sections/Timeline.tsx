"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    institution: 'University of Moratuwa',
    degree: 'B.Sc. in Software Engineering',
    year: '2022 - Present',
    description: 'Specializing in artificial intelligence, software architecture, and full-stack development. Active member of the computer science society.',
  },
  {
    institution: 'Royal College, Colombo',
    degree: 'GCE Advanced Level',
    year: '2019 - 2021',
    description: 'Physical Science stream. Achieved excellent results with distinctions in Mathematics, Physics, and IT.',
  },
];

const experience = [
  {
    company: 'Tech Innovators LK',
    role: 'Software Engineer Intern',
    year: '2024 - Present',
    description: 'Developing scalable backend microservices using Node.js and migrating legacy frontend code to Next.js. Improved system performance by 30%.',
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    year: '2023 - 2024',
    description: 'Designed and developed custom web applications for local businesses in Sri Lanka using React and Firebase.',
  },
];

export default function Timeline() {
  return (
    <section id="education-experience" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Timeline */}
          <div id="education">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Education</h2>
            </motion.div>

            <div className="space-y-10 relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
              
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[13px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900" />
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 block">{edu.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{edu.institution}</p>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div id="experience">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-xl text-teal-600 dark:text-teal-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Experience</h2>
            </motion.div>

            <div className="space-y-10 relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
              
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[13px] top-1.5 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-white dark:ring-slate-900" />
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2 block">{exp.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">{exp.company}</p>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
