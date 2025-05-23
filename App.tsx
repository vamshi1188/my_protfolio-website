import React from 'react';
import { resumeData } from './resumeData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavItem } from './types';

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navItems={navItems} title={resumeData.name.split(' ')[0]} />
      <main className="flex-grow">
        <Hero
          name={resumeData.name}
          tagline={resumeData.tagline}
          githubUrl={resumeData.contact.github}
          linkedinUrl={resumeData.contact.linkedin}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About summary={resumeData.summary} />
          <Skills skills={resumeData.skills} />
          <Projects githubUsername={resumeData.contact.githubDisplay} />
          <Experience experienceEntries={resumeData.experience} />
          <Contact contactInfo={resumeData.contact} />
        </div>
      </main>
      <Footer name={resumeData.name} />
    </div>
  );
};

export default App;
