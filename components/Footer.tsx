import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950/50 border-t border-gray-700/50 text-center py-8 mt-16">
      <p className="text-sm text-on-surface-muted">
        &copy; {currentYear} {name}. All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Built with React, Tailwind CSS, and <span role="img" aria-label="heart">❤️</span>.
      </p>
    </footer>
  );
};

export default Footer;
