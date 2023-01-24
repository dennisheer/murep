import type { LayoutLoad } from './$types';

export const load = (() => {
  return {
    dashboard: {
      href: '/',
      text: 'Dashboard',
    },
    repertoire: {
      text: 'Repertoire',
      sections: [
        {
          href: '/repertoire/management',
          text: 'Repertoire verwalten',
        },
        {
          href: '/repertoire/set-lists',
          text: 'Set-Listen verwalten',
        },
      ],
    },
    ensembles: {
      text: 'Ensembles',
      sections: [
        {
          href: '/ensembles/management',
          text: 'Ensembles verwalten',
        },
        {
          href: '/ensembles/events',
          text: 'Events verwalten',
        },
      ],
    },
  };
}) satisfies LayoutLoad;
