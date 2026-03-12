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
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}