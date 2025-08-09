export interface JobOffer {
    title: string;
    location: string;
}

export const enrollmentData = {
    pageTitle: "Nous recrutons!",
    pageSubtitle: 'Nous vous offrons l’opportunité de devenir un potentiel agent de collecte (enquêteur, superviseur, contrôleur ou contre-enquêteur) de Zechlab. Veuillez-vous enregistrer dans notre banque d’agents de collecte avec le lien ci-dessous. Notez que votre enregistrement ne signifie pas votre présélection automatique pour participer à une formation en vue d’une opération de collecte. Pour chaque mission de collecte que nous mènerons, seuls les candidats présélectionnés seront contactés et invités à suivre une formation.',
    jobOffers: [
        { title: 'Agents de collecte de données', location: 'Accra, Gh' },
        { title: 'Stagiaires', location: 'Pointe Noir, Rdc' },
        { title: 'Statisticiens', location: 'Abidjan, Ab' },
        { title: 'Agents de terrain', location: 'Bamako, Ma' }
    ] as JobOffer[],
    applyNowText: 'Postulez maintenant',
    contactEmail: 'jobs@example.com'
};
