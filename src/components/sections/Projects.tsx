"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Sri Lankan Payment Gateway',
    description: 'A comprehensive localized payment gateway solution supporting local banks and native currency processing, built for local e-commerce stores.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Stripe API', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Colombo Bus Tracking App',
    description: 'Real-time GPS tracking application for Colombo metropolitan buses, helping commuters plan their journeys effectively.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    tags: ['React Native', 'Firebase', 'Google Maps API', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Smart Air Quality Monitoring',
    description: 'IoT-based dashboard visualizing real-time air quality data from sensors deployed across major cities in Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1500693995649-14af5aa65a04?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Python', 'IoT', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'COVID-19 Dashboard',
    description: 'An interactive data visualization platform tracking COVID-19 statistics specific to Sri Lanka, customized for the Ministry of Health data.',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'D3.js', 'Material-UI', 'REST API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">Featured Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            A selection of my recent works across full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Source
                  </Link>
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
