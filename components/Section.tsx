import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

// This component is replaced by SectionWrapper.tsx in the new portfolio structure
// for more specific styling and ID handling. Kept for reference.
const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-1">{title}</h2>
      <hr className="mb-3 border-gray-300 dark:border-gray-600" />
      {children}
    </section>
  );
};

export default Section;