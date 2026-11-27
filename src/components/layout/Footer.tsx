import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-4 sm:justify-between sm:py-5 lg:py-6">
        <div className="flex items-center gap-4 lg:gap-6">
          <Logo />
          <p className="text-sm text-text-secondary">© {year} {profile.name}.</p>
        </div>
        <div className="flex w-full justify-center sm:w-auto">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm text-text-secondary hover:text-text-primary motion-safe:transition-colors"
          >
            Back to top
            <ArrowUp size={16} aria-hidden="true" className="shrink-0 text-accent-light" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
