import { Container } from './Container'

export function SectionDivider() {
  return (
    <Container aria-hidden="true" className="my-8 md:my-12 lg:my-16">
      <div className="h-px bg-[linear-gradient(90deg,transparent,var(--color-primary),var(--color-accent),transparent)] opacity-60" />
    </Container>
  )
}
