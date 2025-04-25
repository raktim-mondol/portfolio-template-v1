// Define types for the portfolio data

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  date: string;
  links: {
    demo?: string;
    paper?: string;
    github?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  citations: number;
  pdfUrl?: string;
  tags: string[];
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  description: string;
  year: number;
  semester: string;
  materials?: string;
}

export interface PresentationEvent {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  slidesUrl?: string;
  videoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  field: string;
  year: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  profileImage: string;
  socialLinks: {
    googleScholar?: string;
    researchGate?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    orcid?: string;
  };
  interests: string[];
  education: Education[];
}