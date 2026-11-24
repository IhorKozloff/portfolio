import { ArrowRight, Briefcase, Cloud, Database, Download, Monitor, Server } from 'lucide-react'
import { headerLinks, navigationItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'

const competencyIcons = {
  frontend: Monitor,
  backend: Server,
  databases: Database,
  cloud: Cloud,
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
  },
] as const

export function Hero() {
  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14">
      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden rounded-card border border-border/75 bg-surface px-gutter py-6 sm:py-9 lg:py-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--color-primary),transparent_55%),radial-gradient(ellipse_at_top_right,var(--color-accent),transparent_60%)] opacity-[0.13]"
        />
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,11fr)_minmax(0,14fr)] lg:gap-8">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-accent-light">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-primary bg-aurora" />
              {profile.badge}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 wrap-anywhere text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Hi, I'm {profile.name}.
            </h1>
            <p className="mt-2 text-xl leading-snug font-bold tracking-tight text-accent-light sm:text-3xl">
              <span className="bg-aurora bg-clip-text text-transparent forced-colors:text-[CanvasText]">
                {profile.tagline}
              </span>
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-text-secondary sm:text-lg">
              {profile.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              {actions.map((action) => {
                const Icon = 'icon' in action ? action.icon : undefined
                const content = (
                  <>
                    {action.label}
                    {Icon && <Icon size={16} aria-hidden="true" className="shrink-0" />}
                  </>
                )

                return action.href ? (
                  <Button key={action.label} href={action.href} variant={action.variant}>
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

          <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
            <Card className="col-span-2 flex items-center gap-3 bg-[linear-gradient(115deg,var(--color-elevated-surface),transparent)] sm:gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent-light sm:size-12">
                <Briefcase size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-bold tracking-tight text-text-primary">{profile.experience.value}</p>
                <p className="text-sm text-text-secondary">{profile.experience.label}</p>
              </div>
            </Card>
            {profile.competencies.map(({ id, label, detail, technologies }) => {
              const Icon = competencyIcons[id]

              return (
                <Card
                  key={id}
                  className="col-span-2 min-w-0 bg-[linear-gradient(145deg,var(--color-elevated-surface),transparent_80%)] p-3! min-[560px]:col-span-1"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent-light">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div className="flex min-h-11 min-w-0 flex-col justify-between gap-0.5 wrap-anywhere">
                      <h2 className="text-sm font-semibold text-text-primary">{label}</h2>
                      <p className="text-sm leading-snug text-text-secondary">{detail}</p>
                    </div>
                  </div>
                  <ul
                    role="list"
                    className={`mt-2.5 grid gap-1 border-t border-border pt-2.5 ${
                      id === 'databases'
                        ? 'grid-cols-[minmax(0,1.12fr)_repeat(2,minmax(0,1fr))_minmax(0,0.88fr)]'
                        : 'grid-cols-4'
                    }`}
                  >
                    {technologies.map((technology) => (
                      <li key={technology} className="grid min-w-0">
                        <Badge className="content-center px-0.5! py-0.5! text-center text-xs!">{technology}</Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>

      </section>
    </Container>
  )
}
