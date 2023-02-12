export const techStack: Record<
  string,
  {
    title: string;
    subTitle?: string;
    subTitle_en?: string;
    technologies: string[];
  }
> = {
  basic: {
    title: 'Basic',
    subTitle:
      'Alles beginnt bei den Basics. Diese zu lernen, heißt auch alles weitere zu lernen.',
    subTitle_en:
      'Everything starts with the basics. Learning these also means learning everything else.',
    technologies: ['HTML', '(S)CSS', 'TypeScript', 'JavaScript'],
  },
  frameworks: {
    title: 'Frameworks',
    subTitle:
      'Mein Fokus lag von Beginn an bei React. Mit der Zeit wurden aber auch andere Frameworks wie Vue immer interessanter.',
    subTitle_en:
      'My focus was on React from the beginning. But over time, other frameworks like Vue became more and more interesting.',
    technologies: ['ReactJS', 'NextJS', 'VueJS'],
  },
  libraries: {
    title: 'Libraries',
    subTitle:
      'Wirklich interessant wird die Welt des Frontends und besonders die von JavaScript erst durch die Arbeit der Community.',
    subTitle_en:
      'The world of frontend and especially JavaScript only becomes really interesting through the work of the community.',
    technologies: ['Redux', 'Material UI', 'TailwindCSS', 'Framer Motion'],
  },
  cms: {
    title: 'CMS (Headless)',
    subTitle:
      'Headless CMS interessieren mich sehr, weil sie einen großen Teil des Backends übernehmen und Content einfach verfügbar machen.',
    subTitle_en:
      'Headless CMS interest me a lot because it takes care of a lot of the backend and makes content easily available.',
    technologies: ['MagnoliaCMS', 'Contentful', 'Sanity'],
  },
};
