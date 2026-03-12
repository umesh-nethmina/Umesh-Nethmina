"use client";

import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Abstract Background Vectors */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 blur-3xl opacity-50" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-3">
              Software Engineer / Full Stack Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Umesh</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mx-auto lg:mx-0 mb-8">
              I build modern, scalable, and responsive web applications. Passionate about solving complex problems with elegant code, based in beautiful Sri Lanka.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="#projects" className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all w-full sm:w-auto justify-center">
                View Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cv.pdf" className="group flex items-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 px-6 py-3 rounded-full font-medium transition-all shadow-sm w-full sm:w-auto justify-center">
                Download CV
                <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-slate-400">
              <Link href="https://github.com/umeshnethmina" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/umeshnethmina" target="_blank" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@umeshnethmina.com" className="hover:text-teal-500 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-md lg:max-w-xl relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square bg-slate-200 dark:bg-slate-800 shadow-2xl border-4 border-white dark:border-slate-900 ring-1 ring-slate-100 dark:ring-slate-800 group">
              {/* Replace with next/image in production */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Umesh Nethmina"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Floating Element 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
