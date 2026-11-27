import { CloudSun, Film, GraduationCap, Monitor, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Project } from '../../types/project'

const projectIcons: Readonly<Partial<Record<string, LucideIcon>>> = {
  'pc-architect': Monitor,
  cursology: GraduationCap,
  wallet: Wallet,
  'movie-library': Film,
  'w-clear': CloudSun,
}

export function ProjectPreview({ id, title, image }: Pick<Project, 'id' | 'title' | 'image'>) {
  const Icon = projectIcons[id] ?? Monitor

  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-background">
      {image ? (
        <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-contain" />
      ) : (
        <div aria-hidden="true" className="grid size-full place-content-center justify-items-center gap-3 px-4 text-center">
          <Icon size={32} className="text-accent-light" />
          <span className="text-sm font-medium text-text-secondary">{title}</span>
        </div>
      )}
    </div>
  )
}
