export type Theme = 'cream' | 'warm-beige' | 'cool-gray' | 'taupe';

export interface Project {
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
  date: string;
}

export interface Skill {
  _id?: string;
  category: string;
  skill: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface ContactSubmission {
  _id?: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
}

export interface ResumeData {
  _id?: string;
  url: string;
  updatedAt: number;
}

export interface ThemeConfig {
  primary: string;
  accent: string;
  text: string;
  bg: string;
}
