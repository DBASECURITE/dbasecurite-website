// Les services de DBA Sécurité
// `slug` sert d'ancre (#slug) - NE PAS changer sans mettre à jour les liens.
// `icon` correspond à une clé gérée dans le composant Icon.astro

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  points?: string[];
  icon: string;
  image?: string;
  cta?: string;
  landing?: string; // URL de la page dédiée (landing SEO) si elle existe
}

export const services: Service[] = [
  {
    slug: 'consulting',
    title: 'Audit & conseil en sûreté',
    subtitle: 'Concepts de sûreté & analyse de risques',
    description:
      "Notre cœur de métier. Nous évaluons vos besoins et concevons des stratégies et des plans d'action adaptés à vos spécificités et à vos contraintes. De l'analyse de risques à l'élaboration du concept de sûreté, nous vous apportons une vision claire et des recommandations concrètes et hiérarchisées.",
    points: [
      'Analyse de risques',
      'Concepts de sûreté',
      'Audits de sécurité',
      'Appels d’offres',
      'Conseil & accompagnement',
    ],
    icon: 'shield',
    image: '/assets/photos/services-audit.jpg',
    cta: 'Faire relire mon concept de sécurité',
    landing: '/audit-et-conseil-surete',
  },
  {
    slug: 'evenementiel',
    title: 'Sécurité & coordination événementielle',
    subtitle: 'Suisse & international',
    description:
      "Nous accompagnons les organisateurs à chaque étape de leur événement - du concept de sûreté jusqu'à la coordination opérationnelle des intervenants et partenaires le jour J. Événements sportifs, de mode, culturels ou institutionnels : nous adaptons le dispositif à l'ampleur et aux enjeux de chaque manifestation. Nous sommes notamment intervenus pour le défilé Moncler à St. Moritz, l'UEFA Youth League et le Championnat d'Europe féminin 2025.",
    points: [
      'Concept de sûreté événementiel',
      'Coordination des intervenants',
      'Gestion des accès et des flux',
      'Dispositif adapté à l’événement',
    ],
    icon: 'calendar',
    image: '/assets/photos/services-coordination.jpg',
    cta: 'Préparer mon dossier de manifestation',
    landing: '/securite-evenementielle',
  },
  {
    slug: 'formations',
    title: 'Coaching & formation',
    subtitle: 'Adapté et personnalisé à vos besoins',
    description:
      "Nous concevons des programmes de formation et de coaching adaptés à vos équipes : sensibilisation aux bonnes pratiques de sécurité, formation des équipes de sécurité et mise en place de protocoles de réponse aux incidents.",
    points: [
      'Sensibilisation du personnel',
      'Formation des équipes de sécurité',
      'Protocoles de réponse aux incidents',
      'Coaching des cadres',
    ],
    icon: 'graduation',
    image: '/assets/photos/services-formation.jpg',
    cta: 'Organiser une formation',
    landing: '/formation-securite',
  },
  {
    slug: 'services-specialises',
    title: 'Services spécialisés',
    subtitle: 'Réponses sur mesure',
    description:
      "Pour des menaces et des risques spécifiques, nous concevons des prestations de sécurité personnalisées, menées avec rigueur, minutie et discrétion.",
    points: ['Surveillance', 'Protection', 'Observations'],
    icon: 'eye',
    image: '/assets/photos/services-specialises-wef.jpg',
    cta: 'Discuter d’un besoin spécifique',
  },
  {
    slug: 'tests-intrusion',
    title: 'Exercices & tests d’intrusion',
    subtitle: 'Red team & grandeur nature',
    description:
      "Concevoir un dispositif ne suffit pas : il faut l'éprouver. Nous réalisons des tests d'intrusion et des exercices en conditions réalistes pour évaluer la robustesse de vos mesures de sécurité et la coordination des intervenants - et révéler les failles avant qu'elles ne soient exploitées. En 2025, nous avons ainsi piloté un exercice grandeur nature au Stade de Genève avant l'Euro féminin, mobilisant près de 400 intervenants.",
    points: [
      'Tests d’intrusion (red team)',
      'Scénarios réalistes et personnalisés',
      'Exercices grandeur nature',
      'Rapport & axes d’amélioration',
    ],
    icon: 'target',
    image: '/assets/photos/stade-geneve-briefing.jpg',
    cta: 'Organiser un test d’intrusion',
    landing: '/test-intrusion-physique',
  },
];
