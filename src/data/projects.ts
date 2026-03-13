import type { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    slug: 'payment-gateway',
    title: 'Localized Payment Gateway',
    category: 'Web Applications',
    description:
      'A payment experience tailored for Sri Lankan merchants with clean checkout flows, resilient transaction handling, and merchant analytics.',
    summary:
      'Built with Next.js, Node.js, and MongoDB to simplify regional payments and merchant onboarding.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    keyFeatures: [
      'Localized checkout with multiple payment options and clear conversion flow.',
      'Merchant dashboard with transaction visibility and summary metrics.',
      'Server-side validation and resilient transaction handling for failed states.',
    ],
    challenges: [
      'Handling payment edge cases without harming customer trust.',
      'Keeping dashboard interactions fast with growing transaction history.',
    ],
    lessonsLearned: [
      'Robust failure states are just as important as happy-path flows.',
      'Payment UX clarity directly impacts conversion and support volume.',
    ],
    featured: true,
  },
  {
    slug: 'bus-tracking',
    title: 'Real-Time Bus Tracking',
    category: 'Mobile Applications',
    description:
      'A route and timing dashboard helping commuters track buses, estimate arrivals, and reduce uncertainty during daily travel.',
    summary:
      'A mobile-first product combining map data, live updates, and a clear commuter-oriented interface.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    tags: ['React Native', 'Firebase', 'Maps API', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    keyFeatures: [
      'Live vehicle location and predicted arrival times for commuters.',
      'Route search with stop-level details and travel context.',
      'Optimized mobile interface for quick use under poor connectivity.',
    ],
    challenges: [
      'Dealing with noisy location updates and inconsistent mobile signals.',
      'Balancing map detail with responsiveness on lower-end devices.',
    ],
    lessonsLearned: [
      'Data smoothing significantly improves trust in real-time experiences.',
      'Mobile-first interface choices require ruthless simplicity.',
    ],
    featured: true,
  },
  {
    slug: 'air-quality-monitor',
    title: 'Air Quality Monitoring Platform',
    category: 'IoT Projects',
    description:
      'An IoT dashboard for visualizing air quality sensor data with city-level comparisons and historical trend tracking.',
    summary:
      'Turns raw environmental data into a public-facing monitoring system with practical views for decision makers.',
    image:
      'https://images.unsplash.com/photo-1500693995649-14af5aa65a04?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Python', 'IoT', 'Charting'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    keyFeatures: [
      'Sensor ingestion pipeline for continuous environmental readings.',
      'Historical trend visualization by region and pollutant type.',
      'Public dashboard with alert thresholds and comparison views.',
    ],
    challenges: [
      'Normalizing inconsistent sensor intervals and outlier values.',
      'Presenting complex environmental data in non-technical language.',
    ],
    lessonsLearned: [
      'Data quality checks are critical before any charting layer.',
      'Domain context improves interpretation of technical metrics.',
    ],
    featured: true,
  },
  {
    slug: 'health-analytics-dashboard',
    title: 'Public Health Analytics Dashboard',
    category: 'Academic Projects',
    description:
      'A responsive reporting interface translating public health datasets into clear visual summaries and usable decision support.',
    summary:
      'Focused on accessible charts, narrative framing, and fast comparisons across regions and time ranges.',
    image:
      'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Data Visualization', 'REST API', 'UX'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    keyFeatures: [
      'Interactive visual reports with filters by region and date.',
      'Comparison views to identify trends across demographic segments.',
      'Narrative summary blocks that explain chart insights clearly.',
    ],
    challenges: [
      'Mapping large datasets to meaningful visual stories without clutter.',
      'Maintaining accessibility while presenting dense analytical content.',
    ],
    lessonsLearned: [
      'Designing for readability can increase data adoption by non-experts.',
      'Narrative framing helps users act on numbers faster.',
    ],
  },
];