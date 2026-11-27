import { experience } from '../../data/experience'
import { CareerTimeline } from '../experience/CareerTimeline'
import { ExperienceLedger } from '../experience/ExperienceLedger'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function WorkExperience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 pb-12 sm:pb-16">
      <Container>
        <SectionHeading id="experience-heading" description="My professional experience in software development.">
          Work Experience
        </SectionHeading>
        <div className="grid gap-7 sm:gap-8 lg:gap-10">
          <CareerTimeline entries={experience} />
          <ExperienceLedger entries={experience} />
        </div>
      </Container>
    </section>
  )
}
