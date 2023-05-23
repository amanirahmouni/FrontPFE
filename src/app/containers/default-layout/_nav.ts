import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Tableaux de bord',
    url: '/Tableaux de bord',
    iconComponent: { name: 'cil-home' },
  },
  {
    title: true,
    name: 'Découvrir'
  },
  

 
  {
    name: 'Calendrier des Congés',
    url: '/charts',
    iconComponent: { name: 'cil-calendar' }
  },
  
  
 

  {
    name: 'Demande',
    url: '/base',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Pret et avance',
        url: '/base/accordion'
      },
      {
        name: 'Autorisation',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Congé',
        url: '/base/cards'
      },
      {
        name: 'Situation',
        url: '/base/carousel'
      },
      {
        name: 'mutation',
        url: '/base/collapse'
      },
      {
        name: 'Document ',
        url: '/base/list-group'
      },
     
     
  
    ]
  },

  {
    name: 'Service',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'département',
        url: '/forms/form-control'
      },
      
    ]
  },
 
  
  {
    name: 'Employé',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Informations personelles',
        url: '/notifications/alerts'
      },
      {
        name: 'Information professionnelle',
        url: '/notifications/badges'
      },
    
      
      
    ]
  },
 
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'evénement',
    url: '/page404',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'ajouter un évenement',
        url: '/'
      },
      
    ]
  },
];
