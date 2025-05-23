import React from 'react';
import { ExperienceEntry as ExperienceEntryType } from '../types';
import SectionWrapper from './SectionWrapper';
import { BriefcaseIcon } from './icons';

interface ExperienceItemProps {
  entry: ExperienceEntryType;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ entry }) => {
  return (
    <div className="relative pl-12 pb-8 border-l-2 border-primary/30 last:pb-0 last:border-transparent">
      <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-primary rounded-full border-4 border-background"></div>
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-primary">{entry.role}</h3>
        <p className="text-md text-on-surface">{entry.company} <span className="text-sm text-on-surface-muted">| {entry.location}</span></p>
        <p className="text-xs text-on-surface-muted mt-0.5">{entry.dates}</p>
      </div>
      <ul className="list-disc list-outside text-on-surface-muted text-sm space-y-1.5 ml-5">
        {entry.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};


interface ExperienceProps {
  experienceEntries: ExperienceEntryType[];
}

const Experience: React.FC<ExperienceProps> = ({ experienceEntries }) => {
  return (
    <SectionWrapper id="experience" title="Career Journey">
      <div className="max-w-3xl mx-auto">
        {experienceEntries.map((exp, index) => (
          <ExperienceItem key={index} entry={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
