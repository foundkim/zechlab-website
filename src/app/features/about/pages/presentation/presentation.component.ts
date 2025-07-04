import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-presentation',
  imports: [SharedModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  imageUrl = 'assets/images/i11.jpg';

  header = {
    label: 'À propos de nous',
    lineColor: '#f1b51c',
    quote: 'Da mihi factum, dabo tibi ius',
    logoUrl:
      'https://www.zechlab.com/wp-content/uploads/2024/02/zechlab-blanc-1024x334.png',
    logoAlt: 'ZECHLAB LOGO',
    vision:
      'Devenir un institut de sondage et de recherche de référence dans la sous-région ouest-africaine et sur tout le continent africain, telle est notre vision.',
    cta: {
      label: 'en savoir plus >',
      route: '/about',
    },
  };

  introParagraphs = [
    'Notre philosophie est de vous présenter les faits pour que vous puissiez dire le droit (« Da mihi factum, dabo tibi ius »). Nous sommes un laboratoire d’aide à la décision.',
    'Zechlab est un bureau d’études statistiques et économétriques basé à Abidjan. Il est spécialisé dans les enquêtes statistiques, le suivi-évaluation, l’évaluation d’impact, la géomatique, la formation et la recherche.',
    'Il est dirigé par Ezéchiel A. Djallo, entouré d’une équipe d’experts en Statistique, Économie, Agriculture, Informatique, Géomatique, Éducation, Sociologie, Politique publique, etc.',
  ];

  nav = {
    title: 'Découvrez plus à propos de Zechlab',
    links: [
      { label: 'Notre équipe', route: '/about/team' },
      { label: 'Travaillez avec nous', route: '/careers' },
    ],
    contactLabel: 'Nous contacter',
    contactRoute: '/contact-us',
  };

  stats = [
    { letter: 'agents', label: 'de terrain', value: '1000' },
    { letter: 'tablettes', label: ' & smartphones', value: '60' },
    { letter: 'projets', label: 'zechlab', value: '5' },
    { letter: 'experts', label: 'zechlab', value: '20' },
  ];
}
