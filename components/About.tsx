import React from 'react';
import SectionWrapper from './SectionWrapper';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-lg text-on-surface-muted leading-relaxed max-w-3xl mx-auto text-center md:text-left">
        {summary}
      </p>
    </SectionWrapper>
  );
};

export default About;
