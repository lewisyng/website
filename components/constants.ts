export const navigationItems = {
  home: {
    label: 'HOME',
    href: '/',
  },
  about: {
    label: 'ÜBER MICH',
    href: '/about',
  },
  contact: {
    label: 'KONTAKT',
    href: '/contact',
  },
}

export const techStack: Record<
  string,
  { title: string; technologies: string[] }
> = {
  basic: {
    title: 'Basic',
    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'],
  },
  frameworks: {
    title: 'Frameworks',
    technologies: ['React', 'Next.js', 'Vue.js'],
  },
  libraries: {
    title: 'Libraries',
    technologies: ['Redux'],
  },
}
