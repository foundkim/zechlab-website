import { NavItem } from './../models/nav-item';

export const navItems: NavItem[] = [
  {
    id: 'home',
    title: 'Accueil',
    route: '/',
  },
  {
    id: 'about',
    title: 'A Propos',
    route: '/about',
    children: [
      {
        id: 'presentation',
        title: 'Qui sommes nous ?',
        route: '/presentation',
      },
      {
        id: 'service',
        title: 'Nos services',
        route: '/service',
      },
      {
        id: 'values',
        title: 'Nos valeurs',
        route: '/values',
      },
      { id: 'team', title: 'Notre équipe', route: '/team' },
    ],
  },
  {
    id: 'recruitment',
    title: 'Recrutement',
    route: '/recruitment',
  },
  {
    id: 'project',
    title: 'Projets',
    route: '/projects',
  },
  {
    id: 'training',
    title: 'Formations',
    route: '/training',
  },
  {
    id: 'publication',
    title: 'Publications',
    route: '/publications',
    children: [
      {
        id: 'announcements',
        title: 'Annonces',
        route: '/announcements',
      },
      {
        id: 'articles',
        title: 'Articles',
        route: '/articles',
      },

      {
        id: 'podcasts',
        title: 'Podcasts',
        route: '/podcasts',
      },
      {
        id: 'media',
        title: 'Médias',
        route: '/media',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contacts',
    route: '/contacts',
  },
];
