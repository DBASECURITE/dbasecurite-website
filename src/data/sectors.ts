// Contenu des pages "secteur" (audits spécialisés), rendues par SectorLanding.
// Règle : montrer ce que nous faisons et ce que le client reçoit, jamais la grille détaillée ni un constat attribuable à un client.
import type { Props as SectorProps } from '../components/SectorLanding.astro';

export interface Sector {
  meta: { title: string; description: string };
  landing: SectorProps;
}

export const bijouterieHorlogerie: Sector = {
  meta: {
    title: 'Audit de sûreté bijouterie, horlogerie et boutique de luxe - DBA Sécurité',
    description:
      "Audit de sûreté pour bijouteries, horlogeries et boutiques de luxe à Genève et en Suisse romande : braquage, smash-and-grab, vol interne. Recommandations priorisées, conseil indépendant.",
  },
  landing: {
    path: '/audit-surete-bijouterie-horlogerie',
    serviceType: 'Audit de sûreté pour bijouterie, horlogerie et boutique de luxe',
    serviceDescription:
      "DBA Sécurité audite la sûreté des bijouteries, horlogeries et boutiques de luxe : protection des personnes et des valeurs face au braquage, au smash-and-grab et au vol interne.",
    eyebrow: 'Horlogerie · Bijouterie · Luxe',
    title: 'Audit de sûreté pour bijouteries, horlogeries et boutiques de luxe',
    subtitle:
      "Vos collaborateurs et vos pièces sont exposés à des attaques rapides, préparées et violentes. Nous évaluons votre boutique comme un attaquant la regarderait, puis nous vous disons quoi renforcer en premier.",
    heroVisual: { src: '/assets/photos/bijouterie-facade.jpg', alt: '' },
    reperes: [
      { b: 'Vos collaborateurs', span: 'La protection des personnes avant tout' },
      { b: 'Vos valeurs', span: 'Vitrines, coffre, manipulation des pièces' },
      { b: 'Vos moments sensibles', span: 'Ouverture, fermeture, livraisons' },
    ],
    enjeuTitle: 'Une attaque se joue en quelques minutes. Votre dispositif doit tenir avant, pendant et après.',
    enjeuText: [
      "Les attaques contre les commerces de montres et de bijoux sont courtes, préparées et ciblées : des pièces de grande valeur, faciles à transporter et à écouler. Les auteurs repèrent les lieux, choisissent leur moment et repartent avant l'arrivée des secours.",
      "Le plus souvent, la boutique dispose déjà de caméras, d'une alarme et parfois d'un agent. La question n'est pas d'en ajouter, mais de savoir si l'ensemble forme une chaîne cohérente, et où elle peut rompre.",
    ],
    enjeuVisual: { src: '/assets/photos/bijouterie-vitrine.jpg', alt: 'Vitrine de bijouterie' },
    phasesEyebrow: "Le déroulé d'une attaque",
    phasesTitle: "Tout se joue avant, pendant quelques minutes, puis après",
    phases: [
      { title: "Le repérage", text: "Les auteurs observent la boutique, ses horaires, ses livraisons, la présence ou non d'un agent. Certains cherchent un point faible humain : un collaborateur qu'on peut menacer, un prestataire qu'on peut approcher." },
      { title: "Quelques minutes", text: "Vitrines brisées en quelques secondes, braquage sous la menace d'une arme, ou vol par ruse pendant une présentation. À ce stade, seules comptent les mesures déjà en place et les réflexes des équipes." },
      { title: "Le choc et la reprise", text: "Prendre soin des équipes, préserver les preuves, informer, rouvrir. C'est souvent ce qui a été le moins préparé, alors que c'est là que se mesure la solidité d'une organisation." },
    ],
    phasesFoot: "Notre audit couvre ces trois temps, pas seulement le moment de l'attaque.",
    blocksTitle: 'Votre boutique, couche par couche',
    blocks: [
      {
        eyebrow: 'De la rue au coffre',
        title: 'Chaque couche de protection doit renforcer la suivante',
        text: "Nous analysons votre boutique de l'extérieur vers l'intérieur : environnement immédiat, façade et accès, espace de vente, zones réservées au personnel, jusqu'au coffre. Une faiblesse sur une couche se paie sur toutes les autres.",
        points: ['Environnement et exposition de la boutique', 'Façade, accès clients et accès du personnel', 'Espace de vente et présentation des pièces', 'Zones réservées et accès au coffre'],
        visual: { src: '/assets/illustrations/boutique-couches.svg', alt: "Plan d'une boutique analysée en cinq couches, de la rue jusqu'au coffre" },
      },
      {
        eyebrow: 'Le facteur humain',
        title: 'Vos équipes sont votre première mesure de sûreté',
        text: "Le meilleur équipement ne remplace pas une équipe qui sait reconnaître un comportement suspect, refuser une entrée et réagir correctement si l'attaque survient. Nous évaluons les réflexes, la coordination avec l'agent de sécurité et ce qui est réellement écrit, au-delà de ce qui est connu oralement.",
        points: ['Accueil et filtrage des visiteurs', 'Coordination entre vente et sécurité', 'Consignes en cas de braquage', 'Formation et intégration des nouveaux collaborateurs'],
        visual: { src: '/assets/photos/bijouterie-agent.jpg', alt: 'Agent de sécurité à l’entrée d’une bijouterie' },
      },
      {
        eyebrow: 'Les moments sensibles',
        title: 'Ouverture, fermeture, livraisons : là où tout se joue',
        text: "Les attaques préparées visent souvent les instants où la boutique est la plus vulnérable. Nous examinons ces moments et les règles qui les encadrent, ainsi que les plans de reprise après un incident.",
      },
    ],
    mandat: {
      label: 'Horlogerie de luxe',
      title: "L'audit d'une boutique horlogère en Suisse romande",
      contexte: "Une boutique de montres de luxe en centre-ville, dans un secteur très fréquenté, au sein d'une enseigne déjà confrontée à des attaques violentes.",
      mission: "Analyse de la menace propre au site et à l'activité, visite complète de la boutique et échanges avec la direction, le personnel de vente et la sécurité.",
      resultat: "Un score de sûreté par axe et une dizaine de recommandations hiérarchisées. Les priorités portaient d'abord sur l'organisation et la préparation des équipes, des mesures peu coûteuses et immédiatement applicables.",
      visual: { src: '/assets/photos/bijouterie-inspection.jpg', alt: 'Consultant DBA Sécurité en cours d’audit dans une boutique horlogère' },
    },
    livrableTitle: 'Un rapport clair, pensé pour décider',
    livrableText: "Vous recevez une lecture rapide pour la direction et le détail pour vos équipes. Chaque recommandation est priorisée et proportionnée à vos contraintes.",
    livrables: [
      'Synthèse pour la direction avec un score de sûreté',
      'Analyse de la menace propre à votre boutique',
      'Points forts et vulnérabilités, évalués un par un',
      'Recommandations classées par priorité',
      'Restitution orale et accompagnement de la mise en œuvre',
    ],
    faqs: [
      { q: 'Combien de temps dure un audit de boutique ?', a: "Une visite sur site d'une demi-journée à une journée suffit en général pour une boutique, hors rédaction et présentation du rapport. Elle est précédée d'une analyse de la menace. La durée exacte dépend de la surface, du nombre d'accès et du périmètre souhaité." },
      { q: 'Allez-vous me vendre des caméras ou des agents ?', a: "Non. DBA Sécurité ne vend ni équipement ni gardiennage. Nos recommandations servent votre sûreté, et vous restez libre de choisir vos fournisseurs." },
      { q: 'Mon assureur impose déjà des normes. Un audit est-il utile ?', a: "Oui. Les exigences d'assurance portent surtout sur la résistance du matériel. L'audit regarde l'ensemble : les personnes, les procédures, les moments sensibles et la cohérence entre les mesures. Les deux démarches se complètent." },
      { q: 'La confidentialité est-elle garantie ?', a: "Oui. Le rapport décrit les vulnérabilités de votre boutique : il est remis à vous seul, et nous ne citons jamais un client sans son accord." },
    ],
    related: [
      { label: 'Audit & conseil en sûreté', slug: '/audit-et-conseil-surete' },
      { label: "Test d'intrusion physique", slug: '/test-intrusion-physique' },
      { label: 'Sensibilisation sûreté des collaborateurs', slug: 'sensibilisation-surete-collaborateurs' },
    ],
    cta: { title: 'Parlons de votre boutique', text: "Un premier échange confidentiel pour comprendre votre contexte et définir le périmètre de l'audit." },
  },
};
