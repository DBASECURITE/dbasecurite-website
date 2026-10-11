// Données de l'outil d'auto-évaluation de sûreté (côté client)
// Chaque option porte un score (2 = en place, 1 = partiel, 0 = absent).
// `pillar` relie une question à une recommandation si le score est faible (<= 1).

export interface DiagOption {
  label: string;
  score: number;
}
export interface DiagQuestion {
  pillar: string;
  question: string;
  options: DiagOption[];
}
export interface DiagBranch {
  key: 'evenement' | 'site';
  label: string;
  icon: string;
  tagline: string;
  questions: DiagQuestion[];
}

export const branches: DiagBranch[] = [
  {
    key: 'evenement',
    label: 'Un événement',
    icon: 'calendar',
    tagline: 'Manifestation sportive, culturelle, défilé, rassemblement…',
    questions: [
      {
        pillar: 'concept',
        question: 'Disposez-vous d’un concept de sûreté écrit et à jour pour votre événement ?',
        options: [
          { label: 'Oui, complet', score: 2 },
          { label: 'Partiel / informel', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'analyse',
        question: 'Une analyse de risques formelle a-t-elle été réalisée ?',
        options: [
          { label: 'Oui, documentée', score: 2 },
          { label: 'Sommaire', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'evacuation',
        question: 'Disposez-vous d’un plan d’évacuation, et a-t-il été testé ?',
        options: [
          { label: 'Oui, testé', score: 2 },
          { label: 'Oui, non testé', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'coordination',
        question: 'La coordination avec la police et les secours est-elle organisée en amont ?',
        options: [
          { label: 'Oui, formalisée', score: 2 },
          { label: 'Contacts informels', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'acces',
        question: 'Le contrôle d’accès et la gestion des flux de public sont-ils définis ?',
        options: [
          { label: 'Oui, dimensionnés', score: 2 },
          { label: 'Basiques', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'test',
        question: 'Votre dispositif a-t-il déjà été éprouvé par un exercice en conditions réelles ?',
        options: [
          { label: 'Oui', score: 2 },
          { label: 'Non', score: 0 },
        ],
      },
    ],
  },
  {
    key: 'site',
    label: 'Un site / une entreprise',
    icon: 'shield',
    tagline: 'Locaux, infrastructures, siège, site sensible…',
    questions: [
      {
        pillar: 'audit',
        question: 'Un audit de sécurité de votre site a-t-il été réalisé récemment (moins de 2 ans) ?',
        options: [
          { label: 'Oui, récent', score: 2 },
          { label: 'Ancien', score: 1 },
          { label: 'Jamais', score: 0 },
        ],
      },
      {
        pillar: 'menaces',
        question: 'Les menaces spécifiques à votre activité sont-elles identifiées et documentées ?',
        options: [
          { label: 'Oui, documentées', score: 2 },
          { label: 'Partiellement', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'acces',
        question: 'Votre contrôle d’accès et votre surveillance sont-ils adaptés aux risques réels ?',
        options: [
          { label: 'Oui, adaptés', score: 2 },
          { label: 'Basiques', score: 1 },
          { label: 'Insuffisants', score: 0 },
        ],
      },
      {
        pillar: 'procedures',
        question: 'Disposez-vous de procédures écrites de réponse aux incidents ?',
        options: [
          { label: 'Oui, connues de tous', score: 2 },
          { label: 'Oui, peu diffusées', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'formation',
        question: 'Votre personnel est-il formé aux bonnes pratiques de sûreté ?',
        options: [
          { label: 'Oui, régulièrement', score: 2 },
          { label: 'Une seule fois', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
      {
        pillar: 'concept',
        question: 'Avez-vous un concept de sûreté global et cohérent ?',
        options: [
          { label: 'Oui', score: 2 },
          { label: 'En partie', score: 1 },
          { label: 'Non', score: 0 },
        ],
      },
    ],
  },
];

// Recommandations par pilier (affichées si la réponse est faible)
export const recommendations: Record<string, string> = {
  concept: 'Formalisez un concept de sûreté écrit : c’est le document de référence qui structure tout le dispositif.',
  analyse: 'Réalisez une analyse de risques pour dimensionner vos mesures à la menace réelle.',
  evacuation: 'Mettez à jour et surtout testez votre plan d’évacuation avant le jour J.',
  coordination: 'Formalisez en amont la coordination avec la police et les secours, pas au dernier moment.',
  acces: 'Revoyez le contrôle d’accès et la gestion des flux / la surveillance au regard des risques réels.',
  test: 'Éprouvez votre dispositif par un exercice en conditions réelles : c’est le meilleur moyen de révéler les failles.',
  audit: 'Faites réaliser un audit de sécurité : un regard externe révèle les angles morts.',
  menaces: 'Identifiez et documentez les menaces propres à votre activité.',
  procedures: 'Rédigez et diffusez des procédures de réponse aux incidents, connues de tous.',
  formation: 'Formez régulièrement votre personnel aux bonnes pratiques et aux réflexes d’urgence.',
};

// Niveaux de résultat selon le pourcentage de score
export const levels = [
  {
    min: 0.75,
    key: 'mature',
    title: 'Dispositif mature',
    text: 'Votre dispositif est solide. Quelques points de vigilance permettraient de le porter au meilleur niveau.',
  },
  {
    min: 0.4,
    key: 'base',
    title: 'Base solide à renforcer',
    text: 'Vous avez des fondations, mais des angles morts subsistent. Un regard expert sécuriserait l’ensemble.',
  },
  {
    min: 0,
    key: 'vigilance',
    title: 'Vigilance recommandée',
    text: 'Votre dispositif présente des vulnérabilités importantes. Un accompagnement est vivement recommandé.',
  },
];
