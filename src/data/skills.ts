import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    summary: 'Strong fundamentals across modern languages used to build robust products.',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend Development',
    summary: 'Crafting responsive, accessible interfaces with scalable component architecture.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    title: 'Backend Development',
    summary: 'Designing APIs and service layers with maintainability and reliability in mind.',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Validation'],
  },
  {
    title: 'Databases',
    summary: 'Using relational and NoSQL systems based on product needs and scale expectations.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Prisma'],
  },
  {
    title: 'Tools & Technologies',
    summary: 'Accelerating delivery through modern tooling, automation, and cloud-first workflows.',
    items: ['Git', 'Docker', 'Vercel', 'Figma', 'CI/CD'],
  },
];