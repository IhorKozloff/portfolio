export const profile = {
  badge: 'FULL STACK DEVELOPER',
  name: 'Ihor Kozlov',
  tagline: 'From idea to production.',
  description: 'I build modern web applications — from intuitive interfaces to reliable backend systems.',
  location: 'Ukraine',
  about: {
    heading: 'About Me',
    paragraphs: [
      "I'm a Full Stack Developer with over two years of commercial development experience.",
      'My background in frontend engineering helps me build intuitive, maintainable interfaces, while my backend skills allow me to develop complete web applications.',
      "I'm continuously expanding my expertise in software architecture, cloud infrastructure, automated testing and AI-assisted development.",
    ],
    principles: [
      { id: 'architecture', title: 'Clean Architecture', description: 'Maintainable and scalable solutions.' },
      { id: 'quality', title: 'Quality & Reliability', description: 'Testing, debugging and code quality.' },
      { id: 'development', title: 'End-to-End Development', description: 'From implementation to deployment.' },
      { id: 'learning', title: 'Continuous Learning', description: 'Algorithms, engineering and AI tools.' },
    ],
  },
  actions: {
    projects: 'Explore Projects',
    contact: 'Contact Me',
    resume: 'Resume',
  },
  experience: { value: '2+ Years', label: 'Commercial Experience' },
  competencies: [
    {
      id: 'frontend',
      label: 'Frontend',
      detail: 'User Interfaces',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      id: 'backend',
      label: 'Backend',
      detail: 'Server-side Development',
      technologies: ['Node.js', 'Express.js', 'REST API'],
    },
    {
      id: 'databases',
      label: 'Databases',
      detail: 'Data Management',
      technologies: ['PostgreSQL', 'MongoDB', 'Prisma'],
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      detail: 'Deployment & Infrastructure',
      technologies: ['Docker', 'AWS', 'Linux', 'CI/CD'],
    },
  ],
} as const
