import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons';

interface HeroProps {
  name: string;
  tagline: string;
  githubUrl: string;
  linkedinUrl: string;
}

const Hero: React.FC<HeroProps> = ({ name, tagline, githubUrl, linkedinUrl }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-background to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-secondary mb-6">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-on-surface-muted mb-8">
          {tagline}
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-on-surface-muted hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <GitHubIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-on-surface-muted hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <LinkedInIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </a>
        </div>
        <div>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-on-surface-muted hover:text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
