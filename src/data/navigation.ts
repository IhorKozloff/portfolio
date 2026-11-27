type NavigationItem = {
  label: string
  href?: string
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience' },
  { label: 'Contact' },
]

export const headerLinks: { github: string; resume?: string } = {
  github: 'https://github.com/IhorKozloff',
}
