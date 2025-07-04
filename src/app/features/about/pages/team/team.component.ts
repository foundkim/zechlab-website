import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { TeamCardComponent } from '../team-card/team-card.component';

@Component({
  selector: 'app-team',
  imports: [SharedModule, TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  teamCards = [
    {
      title: 'Ezéchiel Abouro DJALLO, Abidjan',
      addressLines: [
        'Le Directeur',
        'Spécialiste des études quantitatives et des systèmes CAPI',
      ],
      phone: '+254 114 764 957',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.co.ke',
        },
      ],
    },
    {
      title: 'Dr Baya Kouadio BOUAKI, Abidjan',
      addressLines: [
        'Spécialiste des études qualitatives',
        'Sociologue, Université de Cocody, Côte d’Ivoire',
      ],
      phone: '+225 0707070707',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un mail',
          link: 'mailto:contact@edi.ci',
        },
      ],
    },
    {
      title: 'Christopher TULLIS, Sénégal',
      addressLines: ['Spécialiste des services digitaux et de la microfinance'],
      phone: '+221 33 820 45 00',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.sn',
        },
      ],
    },
    {
      title: 'Dede ADUAYOM-HOUETO, Bénin',
      addressLines: ['Agroéconomiste, spécialiste des évaluations'],
      phone: '+229 21 30 40 50',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.bj',
        },
      ],
    },
    {
      title: "Dr Bernard Tchimou MAMBA, Côte d'Ivoire",
      addressLines: [
        'Spécialiste des études environnementales et sociales',
        'Sociologue, Université de Korhogo',
        'Côte d’Ivoire',
      ],
      phone: '+233 30 266 1234',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.gh',
        },
      ],
    },
    {
      title: 'Thierry HOUNSA, Ghana',
      addressLines: ['Spécialiste en Analyse de pauvreté'],
      phone: '+233 30 266 1234',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.gh',
        },
      ],
    },
    {
      title: 'Dr Kars DE BRUIJNE, Pays-Bas',
      addressLines: [
        'Spécialiste des questions politiques, de sécurité et de paix',
        'Politologue, Université …',
      ],
      phone: '+233 30 266 000',
      photo: 'assets/images/Kars.png',
      actions: [
        { icon: 'location_on', label: 'Itinéraire', link: '#' },
        {
          icon: 'email',
          label: 'Envoyer un e-mail',
          link: 'mailto:contact@edi.gh',
        },
      ],
    },
  ];
}
