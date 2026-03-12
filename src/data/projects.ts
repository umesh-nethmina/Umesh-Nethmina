import type { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    slug: 'payment-gateway',
    title: 'Localized Payment Gateway',
    description:
      'A payment experience tailored for Sri Lankan merchants with clean checkout flows, resilient transaction handling, and merchant analytics.',
    summary:
      'Built with Next.js, Node.js, and MongoDB to simplify regional payments and merchant onboarding.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    slug: 'bus-tracking',
    title: 'Real-Time Bus Tracking',
    description:
      'A route and timing dashboard helping commuters track buses, estimate arrivals, and reduce uncertainty during daily travel.',
    summary:
      'A mobile-first product combining map data, live updates, and a clear commuter-oriented interface.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    tags: ['React Native', 'Firebase', 'Maps API', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    slug: 'air-quality-monitor',
    title: 'Air Quality Monitoring Platform',
    description:
      'An IoT dashboard for visualizing air quality sensor data with city-level comparisons and historical trend tracking.',
    summary:
      'Turns raw environmental data into a public-facing monitoring system with practical views for decision makers.',
    image:
      'https://images.unsplash.com/photo-1500693995649-14af5aa65a04?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Python', 'IoT', 'Charting'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    slug: 'health-analytics-dashboard',
    title: 'Public Health Analytics Dashboard',
    description:
      'A responsive reporting interface translating public health datasets into clear visual summaries and usable decision support.',
    summary:
      'Focused on accessible charts, narrative framing, and fast comparisons across regions and time ranges.',
    image:
      'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Data Visualization', 'REST API', 'UX'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];