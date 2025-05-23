import React, { useState, useEffect } from 'react';
import { GitHubRepo } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import { GitHubIcon } from './icons';

interface ProjectsProps {
  githubUsername: string;
}

const Projects: React.FC<ProjectsProps> = ({ githubUsername }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        // Sort by pushed_at to get recently updated ones, limit to 6-9 for a portfolio
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=6&direction=desc`);
        if (!response.ok) {
          throw new Error(`GitHub API request failed: ${response.status}`);
        }
        const data = await response.json();
        // Filter out forks if desired, or handle them specifically
        setRepos(data.filter((repo: any) => !repo.fork).slice(0,6)); // Show max 6 non-forked repos
      } catch (err) {
        if (err instanceof Error) {
            setError(`Failed to fetch projects: ${err.message}. Please check the username or API rate limits.`);
        } else {
            setError("An unknown error occurred while fetching projects.");
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername]);

  return (
    <SectionWrapper id="projects" title="Recent Projects">
      {loading && <p className="text-center text-lg text-on-surface-muted">Loading projects...</p>}
      {error && <p className="text-center text-lg text-red-400 bg-red-900/30 p-4 rounded-md">{error}</p>}
      {!loading && !error && repos.length === 0 && (
        <p className="text-center text-lg text-on-surface-muted">No public projects found for this user or they are all forks.</p>
      )}
      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      {!loading && (
         <div className="text-center mt-12">
            <a
                href={`https://github.com/${githubUsername}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors"
            >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View All on GitHub
            </a>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
