import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Systems',
    summary: 'Designing polished interfaces with strong component boundaries and performance discipline.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Delivery',
    summary: 'Building maintainable APIs and application services with pragmatic data modeling.',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Validation'],
  },
  {
    title: 'Data and Storage',
    summary: 'Working across relational and document data stores depending on product needs.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'SQL'],
  },
  {
    title: 'Tooling and Workflow',
    summary: 'Improving delivery speed with repeatable workflows and clear engineering standards.',
    items: ['Git', 'Docker', 'Vercel', 'Figma', 'CI/CD'],
  },
];