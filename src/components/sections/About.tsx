import { BrainCircuit, Layers, MapPin, Rocket, ShieldCheck } from 'lucide-react'
import { profile } from '../../data/profile'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const principleIcons = {
  architecture: Layers,
  quality: ShieldCheck,
  development: Rocket,
  learning: BrainCircuit,
}

export function About() {
  const { about, location } = profile

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 pb-12 sm:pb-16">
      <Container className="grid gap-7 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
        <div className="min-w-0">
          <SectionHeading id="about-heading">{about.heading}</SectionHeading>
          <div className="max-w-prose space-y-4 leading-relaxed text-text-secondary">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-text-primary">
            <MapPin size={18} aria-hidden="true" className="shrink-0 text-accent-light" />
            Based in {location}
          </p>
        </div>

        <ul aria-label="Engineering principles" role="list" className="grid min-w-0 gap-2.5">
          {about.principles.map(({ id, title, description }) => {
            const Icon = principleIcons[id]

            return (
              <li key={id}>
                <Card className="flex items-center gap-3 p-3!">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 wrap-anywhere">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-0.5 text-sm leading-snug text-text-secondary">{description}</p>
                  </div>
                </Card>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
