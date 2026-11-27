import { ArrowRight, Download } from 'lucide-react'
import { headerLinks, navigationItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const competencyAccents = {
  frontend: 'text-[#60A5FA]',
  backend: 'text-[#818CF8]',
  databases: 'text-accent-light',
  cloud: 'text-[#C4B5FD]',
}

const actions = [
  {
    label: profile.actions.projects,
    href: navigationItems.find(({ label }) => label === 'Projects')?.href,
    variant: 'primary',
    icon: ArrowRight,
  },
  {
    label: profile.actions.contact,
    href: navigationItems.find(({ label }) => label === 'Contact')?.href,
    variant: 'secondary',
  },
  {
    label: profile.actions.resume,
    href: headerLinks.resume,
    variant: 'secondary',
    icon: Download,
    download: true,
  },
] as const

export function Hero() {
  return (
    <Container className="pt-6 sm:pt-10">
      <section
        aria-labelledby="hero-heading"
        className="pt-7 sm:pt-10 lg:pt-16"
      >
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-8">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-accent-light">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary bg-aurora" />
              {profile.badge}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 wrap-anywhere text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:mt-5 lg:text-5xl xl:text-[3.25rem]"
            >
              Hi, I'm {profile.name}.
            </h1>
            <p className="mt-3 text-xl leading-snug font-bold tracking-tight text-accent-light sm:text-3xl lg:mt-4 lg:text-[2.125rem] xl:text-4xl">
              <span className="bg-aurora bg-clip-text text-transparent forced-colors:text-[CanvasText]">
                {profile.tagline}
              </span>
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-text-secondary sm:text-lg lg:mt-6">
              {profile.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3 lg:mt-8">
              {actions.map((action) => {
                const Icon = 'icon' in action ? action.icon : undefined
                const content = (
                  <>
                    {action.label}
                    {Icon && <Icon size={16} aria-hidden="true" className="shrink-0" />}
                  </>
                )

                return action.href ? (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant}
                    download={'download' in action ? action.download : undefined}
                  >
                    {content}
                  </Button>
                ) : (
                  <Button key={action.label} variant={action.variant} disabled>
                    {content}
                  </Button>
                )
              })}
            </div>
          </div>

          <section
            aria-labelledby="engineering-profile-heading"
            className="relative isolate min-w-0 overflow-hidden rounded-card border border-border bg-[#0B1020] p-4 sm:p-5 lg:p-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[22px_22px] opacity-20"
            />
            <h2 id="engineering-profile-heading" className="font-mono text-xs font-semibold tracking-widest text-indigo-300">
              {profile.engineeringHeading}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-text-primary uppercase sm:text-5xl">
              {profile.experience.value}
            </p>
            <p className="mt-1 text-sm text-text-secondary">{profile.experience.label}</p>
            <div aria-hidden="true" className="mt-3 h-px bg-aurora" />
            <ul role="list" className="mt-3 grid gap-2 sm:gap-2.5 lg:gap-3">
              {profile.competencies.map(({ id, label, technologies }) => (
                <li key={id} className={`relative flex min-w-0 flex-col justify-center overflow-hidden rounded-md border border-border bg-[#131A30] py-2 pr-5 pl-3.5 sm:py-3 lg:min-h-[72px] ${competencyAccents[id]}`}>
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-current" />
                  <span aria-hidden="true" className="absolute top-1.5 right-1.5 size-2 border-t border-r border-current opacity-50" />
                  <h3 className="text-xs font-semibold tracking-wider uppercase">{label}</h3>
                  <p className="mt-0.5 wrap-anywhere text-sm leading-snug text-text-primary sm:text-[0.9375rem] lg:text-base">
                    {technologies.join(' / ')}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </Container>
  )
}
