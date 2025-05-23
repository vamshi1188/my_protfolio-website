import React from 'react';
import { EducationEntry } from '../types';

interface EducationItemProps {
  entry: EducationEntry;
}

// This component is not directly used in the main portfolio App.tsx for brevity.
// It can be part of a more detailed "Resume" page or section if desired later.
// Kept for reference.
const EducationItem: React.FC<EducationItemProps> = ({ entry }) => {
  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg">
      <div className="flex justify-between items-start mb-0.5">
        <h3 className="text-lg font-semibold text-gray-100">{entry.institution}</h3>
        <span className="text-sm text-gray-400 text-right">{entry.dates}</span>
      </div>
      <p className="text-md italic text-gray-300 mb-0.5">{entry.degree}</p>
      {entry.cgpa && <p className="text-sm text-gray-300">CGPA: {entry.cgpa}</p>}
      {entry.relevantCoursework && entry.relevantCoursework.length > 0 && (
        <p className="text-sm text-gray-300 mt-1">
          <span className="italic">Relevant Coursework:</span> {entry.relevantCoursework.join(', ')}.
        </p>
      )}
    </div>
  );
};

export default EducationItem;