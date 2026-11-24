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
  engineeringHeading: 'ENGINEERING PROFILE',
  experience: { value: '2+ Years', label: 'Commercial Experience' },
  competencies: [
    {
      id: 'frontend',
      label: 'Frontend',
      technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      id: 'backend',
      label: 'Backend',
      technologies: ['Node.js', 'Express.js', 'REST API'],
    },
    {
      id: 'databases',
      label: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Prisma'],
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      technologies: ['Docker', 'AWS', 'Linux', 'CI/CD'],
    },
  ],
} as const
