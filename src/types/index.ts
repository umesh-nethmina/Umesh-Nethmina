export interface SocialLink {
  name: string;
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  summary: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: 'Web Applications' | 'Mobile Applications' | 'IoT Projects' | 'Academic Projects';
  description: string;
  summary: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  keyFeatures: string[];
  challenges: string[];
  lessonsLearned: string[];
  featured?: boolean;
}

export interface BlogContentBlock {
  heading: string;
  content: string;
  codeExample?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: BlogContentBlock[];
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}