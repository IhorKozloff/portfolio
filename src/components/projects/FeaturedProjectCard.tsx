import type { Project } from '../../types/project'
import { ProjectLinks, ProjectTechnologies } from './ProjectMetadata'
import { ProjectPreview } from './ProjectPreview'

type FeaturedProjectCardProps = {
  project: Project
  previewOnRight: boolean
}

export function FeaturedProjectCard({ project, previewOnRight }: FeaturedProjectCardProps) {
  const { slug, title, category, description, features, engineeringHighlights, technologies } = project
  const headingId = `project-${slug}`
  const highlights = [
    { label: 'Key Features', items: features },
    { label: 'Engineering Highlights', items: engineeringHighlights },
  ]

  return (
    <article
      aria-labelledby={headingId}
      className="grid min-w-0 items-center gap-5 rounded-card border border-border bg-surface/75 p-4 shadow-card sm:gap-6 sm:p-6 md:grid-cols-2 lg:gap-8 lg:p-8"
    >
      <div className={previewOnRight ? 'min-w-0 md:order-last' : 'min-w-0'}>
        <ProjectPreview {...project} />
      </div>
      <div className="grid min-w-0 gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-widest text-accent-light">FEATURED PROJECT</p>
          <h3 id={headingId} className="text-2xl font-semibold tracking-tight lg:text-3xl">{title}</h3>
          <p className="mt-1 text-sm font-medium text-accent-light">{category}</p>
        </div>
        <p className="leading-relaxed text-text-secondary">{description}</p>
        {highlights.map(({ label, items }) => items?.length ? (
          <div key={label}>
            <h4 className="mb-1.5 text-sm font-semibold">{label}</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-text-secondary marker:text-accent-light">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ) : null)}
        <ProjectTechnologies technologies={technologies} />
        <ProjectLinks {...project} />
      </div>
    </article>
  )
}
