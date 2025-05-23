import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Saivamshi Kottam",
  tagline: "Go (Golang) & Backend Systems Developer | Cloud & DevOps Enthusiast",
  contact: {
    email: "vamshigodev@gmail.com",
    phone: "+91-7674989311",
    linkedin: "https://www.linkedin.com/in/vamshi1188/",
    linkedinDisplay: "LinkedIn",
    github: "https://github.com/vamshi1188",
    githubDisplay: "vamshi1188",
  },
  summary: "Aspiring Software Developer specializing in Go (Golang) and backend systems, currently pursuing a B.Tech in Computer Science. Proficient in Docker, Kubernetes, CI/CD, and AWS, with hands-on experience developing scalable applications, optimizing system performance, and contributing to AI-based testing tools. Eager to leverage a strong foundation in computer science principles and practical project experience to contribute to innovative software solutions.",
  skills: [
    {
      category: "Languages",
      items: ["Go (Golang)", "SQL", "Python (Basic)", "JavaScript (Basic)"],
    },
    {
      category: "Backend & DevOps",
      items: ["RESTful APIs", "Microservices", "Docker", "Kubernetes", "CI/CD Pipelines", "Linux", "AWS (EC2, S3, Lambda - Basic)"],
    },
    {
      category: "Databases",
      items: ["Relational Databases (PostgreSQL, MySQL - via coursework and projects)"],
    },
    {
      category: "Tools & Methodologies",
      items: ["Git", "GitHub Actions", "Automated Testing", "Agile (Conceptual)"],
    },
  ],
  experience: [
    {
      role: "Software Developer Intern",
      company: "Keploy",
      location: "Remote",
      dates: "March 2023 – Present", // Assuming this is ongoing, verify.
      responsibilities: [
        "Contributed to the Keploy open-source AI-based e2e testing tool (Golang), identifying and resolving critical bugs, enhancing codebase stability and reliability.",
        "Developed and implemented optimized testing strategies, achieving high test coverage rapidly, significantly reducing regression testing time.",
        "Collaborated with a distributed team to integrate new features and improve existing functionalities of the testing platform using Go.",
        "Participated in code reviews and agile development processes."
      ],
    },
  ],
  // Projects will primarily be fetched from GitHub. This can be a fallback or for non-GitHub projects.
  projects: [
     {
      name: "Go Pong Game (Local/Enhanced)", // Example if you want to keep a manual entry
      descriptionPoints: [
        "Developed an advanced Pong game demonstrating proficiency in Go and game development principles.",
        "Engineered dynamic gameplay mechanics, including unique ball movement patterns and adaptive difficulty scaling using Go.",
        "Integrated persistent high-score tracking to enhance user engagement and replayability.",
        "Refactored codebase into modular components for improved maintainability, scalability, and testability.",
        "Leveraged Go's concurrency features (goroutines, channels) to optimize game performance, ensuring smooth and responsive gameplay.",
      ],
      technologies: ["Go (Golang)"],
      link: "https://github.com/vamshi1188/go-pong", // Add actual link if available
      linkText: "View on GitHub"
    },
  ],
  education: [
    {
      institution: "Bharath University, Chennai",
      degree: "B.Tech in Computer Science and Engineering",
      dates: "August 2022 – May 2026 (Expected)",
      cgpa: "7.96/10",
      relevantCoursework: [
        "Object-Oriented Programming",
        "Databases",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Blockchain Technology",
      ],
    },
  ],
  certifications: [
    { name: "Docker Training Course", date: "October 2023" },
    { name: "Introduction to Databases", date: "April 2023" },
  ],
};
