type SkillCategory = {
  id: string
  label: string
  technologies: readonly string[]
}

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    technologies: [
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'RTK Query',
      'React Router',
      'TanStack Query',
      'React Hook Form',
      'Axios',
      'Formik',
      'Zod',
    ],
  },
  {
    id: 'styling',
    label: 'UI & Styling',
    technologies: [
      'Tailwind CSS',
      'SASS / SCSS',
      'Styled Components',
      'Storybook',
      'shadcn/ui',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    technologies: [
      'Node.js',
      'Express.js',
      'REST API',
      'Authentication',
      'Authorization',
      'JWT',
      'bcrypt',
      'Middleware',
      'WebSockets',
    ],
  },
  {
    id: 'databases',
    label: 'Databases & ORM',
    technologies: [
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'Mongoose',
      'SQL',
      'Database Migrations',
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    technologies: [
      'Jest',
      'React Testing Library',
      'Playwright',
      'Unit Testing',
      'Integration Testing',
      'E2E Testing',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    technologies: [
      'AWS EC2',
      'Docker',
      'Docker Compose',
      'Linux',
      'SSH',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    id: 'algorithms',
    label: 'Algorithms',
    technologies: [
      'Searching',
      'Sorting',
      'Recursion',
      'Binary Search',
      'Two Pointers',
      'Sliding Window',
      'Backtracking',
      'Big O',
    ],
  },
  {
    id: 'structures',
    label: 'Data Structures',
    technologies: [
      'Arrays',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Hash Tables',
      'Binary Search Trees',
      'Heaps',
    ],
  },
  {
    id: 'build',
    label: 'Build & Code Quality',
    technologies: [
      'Vite',
      'Webpack',
      'Babel',
      'ESLint',
      'Prettier',
    ],
  },
  {
    id: 'tools',
    label: 'Development Tools',
    technologies: [
      'Git',
      'GitHub',
      'VS Code',
      'npm',
    ],
  },
  {
    id: 'ai',
    label: 'AI-Assisted Development',
    technologies: [
      'OpenAI Codex',
      'AI Coding Agents',
      'Prompt Engineering',
      'Agent Instructions (AGENTS.md)',
    ],
  },
] as const satisfies readonly SkillCategory[]
