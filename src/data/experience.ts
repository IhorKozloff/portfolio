import type { Experience } from '../types/experience'

export const experience: readonly Experience[] = [
  {
    id: 'everridge',
    company: 'Everridge',
    position: 'Frontend Engineer',
    startYear: 2024,
    endYear: 2026,
    color: {
      timeline: 'linear-gradient(90deg, #477BE8, #8959E9)',
      accent: 'var(--color-accent-light)',
    },
    responsibilities: [
      'Developed and maintained web applications using React and TypeScript.',
      'Implemented new UI features and improved the legacy codebase.',
      'Integrated REST APIs and managed application state with Redux Toolkit.',
      'Collaborated with backend developers.',
      'Contributed to bug fixing and performance optimization.',
    ],
  },
  {
    id: 'madappgang',
    company: 'MadAppGang',
    position: 'Full Stack Web Developer Intern',
    startYear: 2022,
    endYear: 2023,
    color: {
      timeline: '#477BE8',
      accent: '#60A5FA',
    },
    responsibilities: [
      'Developed and maintained responsive React and TypeScript applications.',
      'Built scalable frontend architecture and reusable UI components.',
      'Developed and maintained RESTful APIs and backend services using Node.js, Express.js and MongoDB.',
      'Contributed to backend optimization, debugging and automated testing.',
      'Participated in implementing scalable server-side logic and data management solutions.',
    ],
  },
]
