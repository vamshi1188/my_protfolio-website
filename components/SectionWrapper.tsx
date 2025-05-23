import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
