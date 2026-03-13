import type { NavLink, SocialLink } from '@/types';

export const siteConfig = {
  name: 'Umesh Nethmina',
  shortName: 'UN',
  role: 'Full Stack Developer',
  location: 'Colombo, Sri Lanka',
  email: 'umeshnethmina118@gmail.com',
  phone: '+94 78 134 4490 ',
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
    { label: 'Number of blogs', value: '5+' },
  ],
};

export const aboutPageContent = {
  headerDescription:
    'I am a full stack developer who enjoys turning ideas into useful digital products through clean engineering, thoughtful design, and continuous learning.',
  profileImage: '/images/profile/profile.jpg',
  journeyHeadline:
    'My journey into software started with curiosity and grew through real product work.',
  journeyParagraphs: [
    'I started learning programming by building small personal projects and experimenting with frontend interfaces. That process taught me how code can solve practical problems and create meaningful user experiences.',
    'Over time, I moved from basic experiments to full stack applications, combining interface design, API development, and deployment workflows. I enjoy taking an idea from planning to production with clarity and structure.',
    'Today, I focus on building software that is reliable, easy to use, and maintainable for teams. I am especially motivated by product challenges where engineering quality and user value need to move together.',
  ],
  interests: [
    {
      title: 'Technology Exploration',
      description: 'Experimenting with modern frameworks, developer tools, and product-focused engineering patterns.',
      icon: 'cpu',
    },
    {
      title: 'Open Source Learning',
      description: 'Studying open-source projects to improve architecture decisions and coding standards.',
      icon: 'git',
    },
    {
      title: 'Software Engineering Reading',
      description: 'Reading articles and books about system design, frontend architecture, and team productivity.',
      icon: 'book',
    },
  ],
  closingLine:
    'I enjoy blending engineering discipline with creativity to build software that solves real-world problems.',
};

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/umesh-nethmina' },
  { name: 'LinkedIn', url: 'http://linkedin.com/in/umesh-nethmina-b76582306' },
  { name: 'Email', url: 'mailto:umeshnethmina118@gmail.com' },
];