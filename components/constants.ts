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
  { title: string; subTitle?: string; technologies: string[] }
> = {
  basic: {
    title: 'Basic',
    subTitle:
      'Alles beginnt bei den Basics. Diese zu lernen, heißt auch alles weitere zu lernen.',
    technologies: ['HTML', '(S)CSS', 'TypeScript', 'JavaScript'],
  },
  frameworks: {
    title: 'Frameworks',
    subTitle:
      'Mein Fokus lag von Beginn an bei React. Mit der Zeit wurden aber auch andere Frameworks wie Vue immer interessanter.',
    technologies: ['ReactJS', 'NextJS', 'VueJS'],
  },
  libraries: {
    title: 'Libraries',
    subTitle:
      'Wirklich interessant wird die Welt des Frontends und besonders die von JavaScript erst durch die Arbeit der Community.',
    technologies: ['Redux', 'Material UI', 'TailwindCSS', 'Framer Motion'],
  },
  cms: {
    title: 'CMS (Headless)',
    subTitle:
      'Headless CMS interessieren mich sehr, weil sie einen großen Teil des Backends übernehmen und Content einfach verfügbar machen.',
    technologies: ['MagnoliaCMS', 'Contentful', 'Sanity'],
  },
}
