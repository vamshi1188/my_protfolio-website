import React from 'react';
import { ContactInfo } from '../types';
import SectionWrapper from './SectionWrapper';
import { EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from './icons';

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  const contactItems = [
    {
      icon: <EmailIcon className="w-7 h-7 text-primary" />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <PhoneIcon className="w-7 h-7 text-primary" />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: <LinkedInIcon className="w-7 h-7 text-primary" />,
      label: "LinkedIn",
      value: contactInfo.linkedinDisplay,
      href: contactInfo.linkedin,
      target: "_blank"
    },
    {
      icon: <GitHubIcon className="w-7 h-7 text-primary" />,
      label: "GitHub",
      value: contactInfo.githubDisplay,
      href: contactInfo.github,
      target: "_blank"
    },
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <p className="text-center text-lg text-on-surface-muted mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exciting. Feel free to reach out!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className="bg-surface p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transition-all duration-300 flex items-center space-x-4 group"
          >
            <div className="flex-shrink-0 p-3 bg-background rounded-full group-hover:bg-primary/10 transition-colors">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">{item.label}</h4>
              <p className="text-sm text-on-surface-muted group-hover:text-primary-light transition-colors break-all">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
