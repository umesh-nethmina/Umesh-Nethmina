import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-reusable-nextjs-components',
    title: 'Building Reusable Next.js Components That Scale',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'A practical guide to designing component APIs that stay maintainable as your portfolio or product grows.',
    publishedAt: 'March 2026',
    readTime: '6 min read',
    category: 'Programming Tutorials',
    tags: ['Next.js', 'TypeScript', 'Architecture'],
    sections: [
      {
        heading: 'Start with responsibilities, not visuals',
        content:
          'Before styling, define what a component owns: state, behavior, and presentation. This prevents oversized components and makes your UI easier to test and evolve.',
      },
      {
        heading: 'Use typed interfaces to protect your future self',
        content:
          'Type-safe props make contracts explicit. They reduce regressions when your components are reused in multiple pages or projects.',
        codeExample:
          "interface ProjectCardProps {\n  title: string;\n  description: string;\n  tags: string[];\n  liveUrl: string;\n  githubUrl: string;\n}",
      },
      {
        heading: 'Design for extension',
        content:
          'Add meaningful variants and composition points early. A small investment in flexibility pays off when your design language expands.',
      },
    ],
  },
  {
    slug: 'lessons-from-shipping-client-projects',
    title: 'Lessons Learned from Shipping Client Projects',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'What freelance and internship projects taught me about communication, planning, and technical trade-offs.',
    publishedAt: 'February 2026',
    readTime: '5 min read',
    category: 'Project Lessons',
    tags: ['Freelance', 'Delivery', 'Communication'],
    sections: [
      {
        heading: 'Clarity beats speed in requirements',
        content:
          'Early alignment with stakeholders avoids expensive rework later. I now write concise scope notes before implementation starts.',
      },
      {
        heading: 'Small milestones create momentum',
        content:
          'Breaking large deliverables into weekly outcomes made progress visible and improved trust with clients and teammates.',
      },
      {
        heading: 'Performance and DX both matter',
        content:
          'Optimizing user experience while keeping clean code structure helped projects stay fast today and maintainable tomorrow.',
      },
    ],
  },
  {
    slug: 'backend-concepts-every-frontend-dev-should-know',
    title: 'Backend Concepts Every Frontend Developer Should Know',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'Core software engineering concepts that improve API design decisions and frontend-backend collaboration.',
    publishedAt: 'January 2026',
    readTime: '7 min read',
    category: 'Software Engineering Concepts',
    tags: ['APIs', 'System Design', 'Backend'],
    sections: [
      {
        heading: 'Data modeling affects UI quality',
        content:
          'Well-structured models reduce frontend complexity. Nested responses, naming consistency, and pagination strategy all influence interface quality.',
      },
      {
        heading: 'Error handling is part of product design',
        content:
          'Backend errors should be actionable. Clear status codes and human-readable messages make user-facing error states far better.',
      },
      {
        heading: 'Observability is not optional',
        content:
          'Logs, metrics, and traces turn unknown issues into solvable problems. Even simple dashboards improve operational confidence.',
      },
    ],
  },
  {
    slug: 'productivity-systems-for-developers',
    title: 'Productivity Systems for Developers',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    excerpt:
      'A lightweight workflow for staying focused, reducing context switching, and shipping consistently.',
    publishedAt: 'December 2025',
    readTime: '4 min read',
    category: 'Developer Productivity',
    tags: ['Productivity', 'Workflow', 'Focus'],
    sections: [
      {
        heading: 'Plan the day by outcomes',
        content:
          'I define two meaningful outcomes each day instead of a long task list. This keeps me focused on impact over activity.',
      },
      {
        heading: 'Protect deep work time',
        content:
          'Blocking uninterrupted time for implementation leads to better code quality and fewer mistakes than multitasking.',
      },
      {
        heading: 'Review and refine every week',
        content:
          'A weekly retrospective helps me identify bottlenecks, improve estimates, and adjust my development habits.',
      },
    ],
  },
];
