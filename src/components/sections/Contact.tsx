import { BriefcaseBusiness, CodeXml, Download, Mail, Send } from 'lucide-react'
import { contactLinks } from '../../data/contact'
import { headerLinks } from '../../data/navigation'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionDivider } from '../ui/SectionDivider'

const contactIcons = {
  Email: Mail,
  LinkedIn: BriefcaseBusiness,
  GitHub: CodeXml,
  Telegram: Send,
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate mt-8 scroll-mt-20 md:mt-12 lg:mt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(ellipse_at_top,#477BE826,transparent_66%),radial-gradient(ellipse_at_top,#8959E929,transparent_74%)] opacity-80 sm:h-64 lg:h-80 lg:opacity-100"
      />
      <SectionDivider className="" />
      <Container className="py-12 text-center sm:py-16 lg:py-22">
        <p className="text-xs font-medium tracking-[0.2em] text-accent-light sm:text-sm">CONTACT</p>
        <h2 id="contact-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Let's build something great.
        </h2>
        <p className="mx-auto mt-4 max-w-[35rem] leading-relaxed text-text-secondary sm:text-lg lg:mt-5">
          I'm open to new opportunities and exciting projects. Let's get in touch.
        </p>
        <ul role="list" className="mx-auto mt-7 grid w-fit max-w-full grid-cols-2 gap-x-5 gap-y-2 sm:mt-8 sm:grid-cols-4 sm:gap-x-6 lg:mt-10 lg:gap-x-9">
          {contactLinks.map(({ label, href, external }) => {
            const Icon = contactIcons[label]

            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-base font-medium hover:text-accent-light motion-safe:transition-colors"
                >
                  <Icon size={20} aria-hidden="true" className="shrink-0 text-accent-light group-hover:text-text-primary motion-safe:transition-colors" />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
        {headerLinks.resume && (
          <Button href={headerLinks.resume} variant="primary" download className="mt-8">
            <Download size={16} aria-hidden="true" className="shrink-0" />
            Download Resume
          </Button>
        )}
      </Container>
    </section>
  )
}
