import React from 'react';

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string; // URL
  linkedinDisplay: string;
  github: string; // URL
  githubDisplay: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface ProjectEntry { // This is for local/manual project entries
  name:string;
  link?: string; // URL
  linkText?: string;
  descriptionPoints: string[];
  technologies: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  dates: string;
  cgpa?: string;
  relevantCoursework?: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[]; // Keep for potential manual additions or fallback
  education: EducationEntry[];
  certifications: Certification[];
}

export interface IconProps {
  className?: string;
  pathClassName?: string;
}

// Types for GitHub API response
export interface GitHubOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  owner: GitHubOwner;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
}

export interface NavItem {
  name: string;
  href: string;
}
