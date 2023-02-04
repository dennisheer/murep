import type { LayoutLoad } from './$types';
import type { Routes } from './layout.model';

export const load: () => Routes = (() => {
  return {
    routes: [
      {
        href: '/',
        text: 'Dashboard',
      },
      {
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
      {
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
      {
        href: '/settings',
        text: 'Einstellungen',
      },
    ],
  };
}) satisfies LayoutLoad;
