import type { NavLink, SocialLink } from '@/types';

export const siteConfig = {
  name: 'Umesh Nethmina',
  shortName: 'UN',
  role: 'Full Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'contact@umeshnethmina.com',
  phone: '+94 77 123 4567',
  resumeUrl: 'https://example.com/resume.pdf',
  availability: 'Available for freelance and product engineering roles',
  intro:
    'I build modern web experiences that blend clean frontend architecture, reliable backend systems, and practical product strategy.',
  about:
    'I am a software engineering student focused on designing and shipping modern full stack applications. My work spans React, Next.js, Node.js, and database systems, with consistent attention to performance and usability.',
  aboutExtended:
    'I enjoy turning ambiguous requirements into clear product experiences, whether that means shaping interfaces, building APIs, or improving engineering workflows.',
  heroStats: [
    { label: 'Years Building', value: '3+' },
    { label: 'Projects Delivered', value: '12+' },
    { label: 'Primary Stack', value: 'Next.js' },
  ],
};

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/umeshnethmina' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/umeshnethmina' },
  { name: 'Email', url: 'mailto:contact@umeshnethmina.com' },
];