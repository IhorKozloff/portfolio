export const profile = {
  badge: 'FULL STACK DEVELOPER',
  name: 'Ihor Kozlov',
  tagline: 'From idea to production.',
  description: 'I build modern web applications — from intuitive interfaces to reliable backend systems.',
  location: 'Ukraine',
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
