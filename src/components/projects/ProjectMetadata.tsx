import type { Project } from '../../types/project'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

export function ProjectTechnologies({ technologies }: Pick<Project, 'technologies'>) {
  return (
    <ul aria-label="Technology stack" className="flex flex-wrap gap-1.5">
      {technologies.map((technology) => (
        <li key={technology} className="min-w-0 max-w-full">
          <Badge className="px-2! py-0.5! text-xs!">{technology}</Badge>
        </li>
      ))}
    </ul>
  )
}

export function ProjectLinks({ title, liveUrl, githubUrl, detailsUrl }: Pick<Project, 'title' | 'liveUrl' | 'githubUrl' | 'detailsUrl'>) {
  if (!liveUrl && !githubUrl && !detailsUrl) return null

  const links = [
    { label: 'Live Demo', href: liveUrl },
    { label: 'GitHub', href: githubUrl },
    { label: 'View Details', href: detailsUrl },
  ]

  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-4">
      {links.map(({ label, href }) => href && (
        <Button key={label} href={href} variant="secondary" aria-label={`${label} for ${title}`}>
          {label}
        </Button>
      ))}
    </div>
  )
}
