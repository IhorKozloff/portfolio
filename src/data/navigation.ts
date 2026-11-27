type NavigationItem = {
  label: string
  href?: string
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const headerLinks: { github: string; resume?: string } = {
  github: 'https://github.com/IhorKozloff',
  resume: `${import.meta.env.BASE_URL}${encodeURIComponent('IhorKozlov FullStack Developer Resume.pdf')}`,
}
