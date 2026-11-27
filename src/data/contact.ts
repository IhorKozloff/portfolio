import { headerLinks } from './navigation'

export const contactLinks = [
  { label: 'Email', href: 'mailto:ik.serg77@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ihor-kozlov-a70128241/', external: true },
  { label: 'GitHub', href: headerLinks.github, external: true },
  { label: 'Telegram', href: 'https://t.me/IgorKozloff', external: true },
] as const
