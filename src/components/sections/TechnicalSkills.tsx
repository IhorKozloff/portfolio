import { BrainCircuit, Cloud, CodeXml, Database, Monitor, Network, Palette, Server, Settings, ShieldCheck, Terminal, Workflow } from 'lucide-react'
import { skillCategories } from '../../data/skills'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const categoryIcons = {
  languages: CodeXml,
  frontend: Monitor,
  styling: Palette,
  backend: Server,
  databases: Database,
  testing: ShieldCheck,
  cloud: Cloud,
  algorithms: Workflow,
  structures: Network,
  build: Settings,
  tools: Terminal,
  ai: BrainCircuit,
}

export function TechnicalSkills() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20 pb-12 sm:pb-16">
      <Container>
        <SectionHeading id="stack-heading" description="Technologies, engineering practices and tools I work with.">
          Technical Skills
        </SectionHeading>
        <dl className="divide-y divide-border/60">
          {skillCategories.map(({ id, label, technologies }) => {
            const Icon = categoryIcons[id]

            return (
              <div
                key={id}
                className="grid gap-2 py-3.5 md:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] md:gap-6 md:py-5 lg:py-6"
              >
                <dt className="flex min-w-0 items-start gap-3 font-medium leading-relaxed text-text-primary">
                  <Icon size={21} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-light" />
                  <span className="min-w-0 wrap-anywhere">{label}</span>
                </dt>
                <dd className="min-w-0 wrap-anywhere leading-relaxed text-text-secondary">
                  {technologies.join(', ')}
                </dd>
              </div>
            )
          })}
        </dl>
      </Container>
    </section>
  )
}
