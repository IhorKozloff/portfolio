export type Project = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  featured: boolean
  features?: readonly string[]
  engineeringHighlights?: readonly string[]
  technologies: readonly string[]
  image?: { src: string; alt: string }
  liveUrl?: string
  githubUrl?: string
  detailsUrl?: string
}
