
import React from 'react';
import { GitHubRepo } from '../types';
import { StarIcon, ForkIcon, CodeIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  repo: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const languageColor = (language: string | null): string => {
    if (!language) return 'bg-gray-500';
    const lowerLang = language.toLowerCase();
    if (lowerLang === 'go' || lowerLang === 'golang') return 'bg-sky-500';
    if (lowerLang === 'python') return 'bg-blue-500';
    if (lowerLang === 'javascript') return 'bg-yellow-500';
    if (lowerLang === 'typescript') return 'bg-indigo-500';
    if (lowerLang === 'html') return 'bg-orange-500';
    if (lowerLang === 'css') return 'bg-pink-500';
    return 'bg-gray-500';
  };

  return (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-primary truncate" title={repo.name}>
            {repo.name}
          </h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${repo.name} on GitHub`}
            className="text-on-surface-muted hover:text-primary transition-colors ml-2 flex-shrink-0"
          >
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-on-surface-muted mb-4 h-20 overflow-y-auto custom-scrollbar">
          {repo.description || 'No description available.'}
        </p>
        
        {repo.topics && repo.topics.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-on-surface-muted mb-1">Topics:</p>
            <div className="flex flex-wrap gap-1">
              {repo.topics.slice(0, 5).map(topic => (
                <span key={topic} className="px-2 py-0.5 bg-gray-700 text-xs text-gray-300 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-4 bg-gray-800/50 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm text-on-surface-muted">
          <div className="flex items-center" title="Language">
            {repo.language ? (
              <>
                <span className={`w-3 h-3 rounded-full mr-1.5 ${languageColor(repo.language)}`}></span>
                {repo.language}
              </>
            ) : (
              <CodeIcon className="w-4 h-4 mr-1.5 text-gray-500" /> 
            )}
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center" title="Stars">
              <StarIcon className="w-4 h-4 mr-1 text-yellow-400" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center" title="Forks">
              <ForkIcon className="w-4 h-4 mr-1 text-teal-400" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>
      </div>
      {/*Removed invalid 'jsx' prop from style tag to resolve TypeScript error. */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4b5563; /* gray-600 */
            border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6b7280; /* gray-500 */
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
