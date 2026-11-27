import type { Project } from '../types/project'

export const projects: readonly Project[] = [
  {
    id: 'pc-architect',
    slug: 'pc-architect',
    title: 'PC Architect',
    category: 'Full Stack PC Building Platform',
    description: 'A full-stack application for creating and managing custom PC builds.',
    featured: true,
    highlights: [
      'Hardware selection and personal build management',
      'Authentication and protected user accounts',
      'Next.js App Router and PostgreSQL integration',
      'Unit, integration and E2E testing',
      'Docker containerization and GitHub Actions CI/CD',
    ],
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prisma',
      'PostgreSQL', 'Jest', 'React Testing Library', 'Playwright', 'Docker', 'GitHub Actions',
    ],
  },
  {
    id: 'cursology',
    slug: 'cursology',
    title: 'Cursology',
    category: 'Full Stack Educational Platform',
    description: 'A full-stack educational application with a React frontend, REST API and MongoDB database.',
    featured: true,
    highlights: [
      'Type-safe frontend and backend architecture',
      'Centralized state management with Redux Toolkit',
      'API integration and caching with RTK Query',
      'Reusable UI components with Storybook',
      'REST API and MongoDB integration',
    ],
    technologies: [
      'React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS',
      'Storybook', 'Node.js', 'Express.js', 'MongoDB',
    ],
  },
  {
    id: 'wallet',
    slug: 'wallet',
    title: 'Wallet',
    category: 'Personal Finance Application',
    description: 'A full-stack application for managing personal finances.',
    featured: false,
    technologies: [
      'React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Styled Components',
      'Node.js', 'Express.js', 'MongoDB', 'Jest',
    ],
  },
  {
    id: 'movie-library',
    slug: 'movie-library',
    title: 'Movie Library',
    category: 'Movie Discovery Application',
    description: 'A web application for discovering movies and exploring movie information.',
    featured: false,
    technologies: ['React', 'React Router', 'Redux', 'Redux Persist', 'Axios', 'Formik', 'Tailwind CSS'],
  },
  {
    id: 'w-clear',
    slug: 'w-clear',
    title: 'W-Clear',
    category: 'Weather Application',
    description: 'A multilingual weather application with a season-based user interface.',
    featured: false,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'SASS'],
  },
]
