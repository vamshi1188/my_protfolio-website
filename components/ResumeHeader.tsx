import React from 'react';
import { ContactInfo } from '../types';
import { EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './icons';

interface ResumeHeaderProps {
  name: string;
  contact: ContactInfo;
}

// This component is not directly used in the new portfolio App.tsx structure.
// The Hero.tsx component serves a similar introductory purpose.
// Kept for reference or potential future use.
const ResumeHeader: React.FC<ResumeHeaderProps> = ({ name, contact }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">{name}</h1>
      <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 text-sm text-gray-600 dark:text-gray-300">
        <a href={`mailto:${contact.email}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <EmailIcon className="w-4 h-4 mr-1" /> <span className="font-mono">{contact.email}</span>
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={`tel:${contact.phone}`} className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <PhoneIcon className="w-4 h-4 mr-1" /> <span className="font-mono">{contact.phone}</span>
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <LinkedInIcon className="w-4 h-4 mr-1" /> {contact.linkedinDisplay}
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <GitHubIcon className="w-4 h-4 mr-1" /> {contact.githubDisplay}
        </a>
      </div>
    </div>
  );
};

export default ResumeHeader;