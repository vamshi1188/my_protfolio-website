import React from 'react';
import { ExperienceEntry } from '../types';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

// This component's logic has been integrated into Experience.tsx.
// This file can be removed or kept for reference.
const ExperienceItem: React.FC<ExperienceItemProps> = ({ entry }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{entry.role}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-right">{entry.dates}</span>
      </div>
      <div className="flex justify-between items-start mb-1">
        <p className="text-md italic text-gray-700 dark:text-gray-300">{entry.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-right">{entry.location}</p>
      </div>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1 pl-4">
        {entry.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;