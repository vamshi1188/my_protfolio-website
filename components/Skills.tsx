import React from 'react';
import { SkillCategory } from '../types';
import SectionWrapper from './SectionWrapper';
import { CodeIcon } from './icons'; // Assuming you have a generic CodeIcon or specific icons

const Skills: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
  return (
    <SectionWrapper id="skills" title="My Toolkit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCat) => (
          <div key={skillCat.category} className="bg-surface p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <CodeIcon className="w-6 h-6 mr-2 text-secondary" /> {/* Example Icon */}
              {skillCat.category}
            </h3>
            <ul className="space-y-2">
              {skillCat.items.map((item) => (
                <li key={item} className="text-on-surface-muted flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
