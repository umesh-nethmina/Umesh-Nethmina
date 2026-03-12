import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Tech Innovators LK',
    role: 'Software Engineer Intern',
    period: '2024 - Present',
    description:
      'Working on production web applications, internal tools, and platform improvements across frontend and backend systems.',
    achievements: [
      'Migrated legacy frontend flows into reusable Next.js components.',
      'Improved perceived performance through leaner rendering and better loading states.',
      'Contributed to backend services and operational tooling for delivery teams.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: '2023 - 2024',
    description:
      'Delivered small business web platforms from concept through deployment with a focus on speed and maintainability.',
    achievements: [
      'Built custom landing pages and dashboards for local businesses.',
      'Handled API integration, CMS-style editing needs, and deployment setup.',
      'Translated client requirements into clearer product scopes and timelines.',
    ],
  },
];