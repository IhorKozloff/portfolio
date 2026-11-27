export type Project = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  featured: boolean
  highlights?: readonly string[]
  technologies: readonly string[]
  image?: { src: string; alt: string }
  liveUrl?: string
  githubUrl?: string
}
