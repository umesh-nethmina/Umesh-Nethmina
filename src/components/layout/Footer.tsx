import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:contact@umeshnethmina.com" className="text-slate-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          
          <div className="flex flex-col items-center justify-center mt-8 space-y-2">
            <p className="text-base text-slate-500 dark:text-slate-400">
              &copy; {currentYear} Umesh Nethmina. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-slate-500 dark:text-slate-400 gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
