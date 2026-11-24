type NavigationItem = {
  label: string
  href?: string
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'About' },
  { label: 'Stack' },
  { label: 'Projects' },
  { label: 'Experience' },
  { label: 'Contact' },
]

export const headerLinks: { github: string; resume?: string } = {
  github: 'https://github.com/IhorKozloff',
}
