import type { BlogPost, NavLink, SocialLink } from '@/types';

export const siteConfig = {
  name: 'Umesh Nethmina',
  shortName: 'UN',
  role: 'Software Engineer and Full Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'contact@umeshnethmina.com',
  phone: '+94 77 123 4567',
  availability: 'Available for freelance and product engineering roles',
  intro:
    'I design and build thoughtful web products with strong frontend systems, maintainable backends, and a bias for clear user experience.',
  about:
    'I am a software engineering student focused on shipping modern full-stack applications. My work spans React, Next.js, Node.js, and databases, with attention to performance, accessibility, and product clarity.',
  aboutExtended:
    'I enjoy turning ambiguous requirements into structured experiences, whether that means designing interfaces, building APIs, or tightening engineering workflows.',
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

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-better-developer-portfolios',
    title: 'Designing Better Developer Portfolios',
    excerpt:
      'How I think about portfolio sites as product surfaces rather than static resumes.',
    publishedAt: 'March 2026',
    readTime: '4 min read',
    category: 'Design',
  },
  {
    slug: 'shipping-nextjs-projects-with-confidence',
    title: 'Shipping Next.js Projects With Confidence',
    excerpt:
      'A practical checklist for keeping app-router projects maintainable as they grow.',
    publishedAt: 'February 2026',
    readTime: '6 min read',
    category: 'Engineering',
  },
  {
    slug: 'why-clear-systems-win',
    title: 'Why Clear Systems Win',
    excerpt:
      'Notes on code structure, component boundaries, and reducing friction in frontend teams.',
    publishedAt: 'January 2026',
    readTime: '5 min read',
    category: 'Process',
  },
];