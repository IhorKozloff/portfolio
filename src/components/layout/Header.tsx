import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { headerLinks, navigationItems } from '../../data/navigation'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const linkClasses = 'flex min-h-11 items-center gap-1 rounded-sm px-2 text-sm'
const activeLinkClasses = 'text-text-secondary hover:bg-surface hover:text-text-primary motion-safe:transition-colors'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigationId = useId()
  const menuButton = useRef<HTMLButtonElement>(null)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className="sticky top-0 z-10 border-b border-border bg-background"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen && menuButton.current?.getClientRects().length) {
          event.preventDefault()
          closeMenu()
          menuButton.current.focus()
        }
      }}
    >
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-4 lg:flex-nowrap">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-2xl font-bold tracking-tight hover:bg-surface motion-safe:transition-colors"
          aria-label="IK, back to top"
        >
          IK
          <span aria-hidden="true" className="size-2.5 rounded-full bg-primary bg-aurora" />
        </a>

        <button
          ref={menuButton}
          type="button"
          aria-controls={navigationId}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          className="grid size-11 place-items-center rounded-lg border border-border text-accent-light hover:bg-surface motion-safe:transition-colors lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <nav
          id={navigationId}
          aria-label="Main navigation"
          className={`${isOpen ? 'flex' : 'hidden'} w-full max-h-[calc(100dvh-4rem)] flex-col gap-3 overflow-y-auto border-t border-border px-1 py-3 lg:flex lg:max-h-none lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:overflow-visible lg:border-0 lg:p-0`}
        >
          <ul className="flex flex-col lg:mx-auto lg:flex-row lg:gap-2">
            {navigationItems.map(({ label, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} className={`${linkClasses} ${activeLinkClasses}`} onClick={closeMenu}>
                    {label}
                  </a>
                ) : (
                  <span aria-disabled="true" className={`${linkClasses} text-text-secondary`}>
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-2 border-t border-border pt-2 lg:flex-row lg:items-center lg:border-0 lg:pt-0">
            <a href={headerLinks.github} className={`${linkClasses} ${activeLinkClasses}`} onClick={closeMenu}>
              GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            {headerLinks.resume ? (
              <Button href={headerLinks.resume} variant="primary" onClick={closeMenu}>
                Resume
              </Button>
            ) : (
              <Button variant="primary" disabled>
                Resume
              </Button>
            )}
          </div>
        </nav>
      </Container>
    </header>
  )
}
