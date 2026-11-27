import type { Project } from '../../types/project'
import { ProjectLinks, ProjectTechnologies } from './ProjectMetadata'
import { ProjectPreview } from './ProjectPreview'

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, category, description, technologies } = project
  const headingId = `project-${slug}`

  return (
    <article
      aria-labelledby={headingId}
      className="flex min-w-0 flex-col rounded-card border border-border bg-surface/75 p-4 shadow-card sm:p-5"
    >
      <ProjectPreview {...project} />
      <div className="my-4 space-y-1">
        <h4 id={headingId} className="text-xl font-semibold tracking-tight">{title}</h4>
        <p className="text-sm font-medium text-accent-light">{category}</p>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">{description}</p>
      <ProjectTechnologies technologies={technologies} />
      <ProjectLinks {...project} />
    </article>
  )
}
