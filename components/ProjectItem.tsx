import React from 'react';
import { ProjectEntry } from '../types';
import { ExternalLinkIcon } from './icons'; // Updated to ExternalLinkIcon

interface ProjectItemProps {
  project: ProjectEntry;
}

// This component was for manually defined projects.
// The new portfolio primarily uses ProjectCard.tsx to display GitHub projects.
// Kept for reference or if manual project entries are needed alongside API data.
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center mb-1">
         <h3 className="text-lg font-semibold text-gray-100">{project.name}</h3>
        {project.link && project.linkText && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 hover:underline flex items-center transition-colors"
          >
            {project.linkText}
            <ExternalLinkIcon className="w-3 h-3 ml-1" />
          </a>
        )}
      </div>
      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 pl-4 mb-1">
        {project.descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-300">
        <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
      </p>
    </div>
  );
};

export default ProjectItem;