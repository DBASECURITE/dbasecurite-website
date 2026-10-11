// Informations centrales de DBA Sécurité Sàrl
// Modifie ces valeurs pour mettre à jour les coordonnées partout sur le site.

export const site = {
  name: 'DBA Sécurité Sàrl',
  shortName: 'DBA Sécurité',
  tagline: 'Une expertise sécurité à votre service',
  description:
    "DBA Sécurité propose ses services de consulting, d'audits et d'expertise dans le domaine de la sécurité physique des infrastructures, des biens et des personnes.",
  email: 'info@dbasecurite.ch',
  phone: '+41 22 886 0 117',
  phoneLink: 'tel:+41228860117',
  address: {
    street: "Ch. de l'Égalité 3",
    city: '1251 Gy',
    country: 'Suisse',
  },
  linkedin:
    'https://www.linkedin.com/company/dba-s-curit-sarl?originalSubdomain=ch',
  url: 'https://dbasecurite.ch',

  // Mesure d'audience SANS cookies (Plausible). Renseigner le domaine une fois
  // le compte créé sur plausible.io, p.ex. 'dbasecurite.ch'. Laisser vide = rien chargé.
  plausibleDomain: '',

  // Balise de vérification Google Search Console (optionnel : seulement si tu choisis
  // la vérif par balise HTML plutôt que par DNS). Coller le contenu du meta google-site-verification.
  googleSiteVerification: '',
};

// Navigation principale
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Notre expertise', href: '/notre-expertise' },
  { label: 'Services', href: '/services' },
  { label: 'Références', href: '/references' },
  { label: 'Médias', href: '/medias' },
  { label: 'Fondateur', href: '/fondateur' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Liens secondaires (pied de page)
export const footerNav = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/confidentialite' },
];
