// Revue de presse - DBA Sécurité / Daniel Barouch dans les médias
// Faits vérifiés à partir des articles publics. Liens externes uniquement (pas de reproduction de contenu).

export interface MediaItem {
  outlet: string;      // média
  type: 'Presse' | 'TV' | 'Radio';
  date: string;        // affichage
  title: string;       // titre de notre encart (reformulé, pas le titre exact de l'article)
  excerpt: string;     // description factuelle courte
  url: string;
  image?: string;      // illustration = NOS propres photos (jamais les captures des médias)
}

export const medias: MediaItem[] = [
  {
    outlet: 'RTS',
    type: 'TV',
    date: 'Janvier 2026',
    title: "Interview : méthodes d'intervention des secours lors d'un incendie en lieu clos",
    excerpt:
      "Daniel Barouch et Wassim Raf interviewés par la RTS sur les méthodes d'intervention des secours en cas d'incendie dans un lieu clos.",
    url: 'https://www.rts.ch/play/tv/emission-speciale/video/les-methodes-dintervention-des-secours-lors-dun-incendie-dans-un-lieu-clos-interview-de-daniel-barouch-et-wassim-raf?urn=urn:rts:video:96eef6c4-d1a3-36c3-b2aa-cce32d7c92b9',
    image: '/assets/medias/presse-rts.jpg',
  },
  {
    outlet: 'Tribune de Genève',
    type: 'Presse',
    date: 'Mai 2025',
    title: 'Pourquoi le Stade de Genève a simulé une tuerie de masse',
    excerpt:
      "Retour sur l'exercice de sécurité grandeur nature organisé au Stade de Genève en préparation de l'Euro féminin 2025.",
    url: 'https://www.tdg.ch/pourquoi-le-stade-de-geneve-a-simule-une-tuerie-de-masse-873833408354',
    image: '/assets/medias/presse-tdg.jpg',
  },
  {
    outlet: '20 minutes',
    type: 'Presse',
    date: '22 mai 2025',
    title: "Un exercice de sécurité géant au Stade de Genève",
    excerpt:
      "Simulation d'attaque impliquant environ 400 intervenants (police, secours, sécurité privée) avant l'Euro féminin de football.",
    url: 'https://www.20min.ch/fr/story/geneve-coups-de-feu-au-stade-pour-un-exercice-de-securite-geant-103350118',
    image: '/assets/medias/presse-20min.jpg',
  },
  {
    outlet: 'Léman Bleu',
    type: 'TV',
    date: '22 mai 2025',
    title: "Simulation d'une attaque au Stade de Genève",
    excerpt:
      "Reportage sur l'exercice mené au Stade de Genève, sous la responsabilité sécurité de Daniel Barouch, avant le Championnat d'Europe féminin.",
    url: 'https://www.lemanbleu.ch/fr/Actualite/Sport/Simulation-d-une-tuerie-de-masse-au-Stade-de-Geneve.html',
    image: '/assets/medias/presse-lemanbleu.jpg',
  },
];
