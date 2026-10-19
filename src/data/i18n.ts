// Internationalisation - FR (racine) / EN (/en/)
// Pages coeur traduites. Le reste (blog, pages locales, diagnostic) reste FR.

import type { NavItem } from './site';

// Détecte la langue depuis le chemin
export const localeFromPath = (pathname: string): 'fr' | 'en' =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';

// Correspondance des URLs FR <-> EN (pour le sélecteur de langue et hreflang)
export const pageMap: { fr: string; en: string }[] = [
  { fr: '/', en: '/en/' },
  { fr: '/notre-expertise', en: '/en/our-expertise' },
  { fr: '/services', en: '/en/services' },
  { fr: '/audit-et-conseil-surete', en: '/en/security-audit-consulting' },
  { fr: '/securite-evenementielle', en: '/en/event-security' },
  { fr: '/test-intrusion-physique', en: '/en/physical-penetration-testing' },
  { fr: '/formation-securite', en: '/en/security-training' },
  { fr: '/fondateur', en: '/en/founder' },
  { fr: '/references', en: '/en/references' },
  { fr: '/medias', en: '/en/media' },
  { fr: '/contact', en: '/en/contact' },
  { fr: '/faq', en: '/en/faq' },
  { fr: '/audit-surete-bijouterie-horlogerie', en: '/en/jewellery-watch-store-security-audit' },
  { fr: '/audit-surete-logistique-grandes-surfaces', en: '/en/logistics-retail-security-audit' },
];

const norm = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);

// Renvoie l'URL équivalente dans l'autre langue (ou l'accueil de l'autre langue par défaut)
export function altUrl(pathname: string, to: 'fr' | 'en'): string {
  const p = norm(pathname);
  for (const m of pageMap) {
    if (norm(m.fr) === p || norm(m.en) === p) return to === 'en' ? m.en : m.fr;
  }
  return to === 'en' ? '/en/' : '/';
}

// Navigation EN (le blog n'est pas traduit)
export const navEn: NavItem[] = [
  { label: 'Home', href: '/en/' },
  { label: 'Our expertise', href: '/en/our-expertise' },
  {
    label: 'Services',
    href: '/en/services',
    children: [
      { label: 'All services', href: '/en/services' },
      { label: 'Security audit & consulting', href: '/en/security-audit-consulting' },
      { label: 'Event security & coordination', href: '/en/event-security' },
      { label: 'Penetration testing & exercises', href: '/en/physical-penetration-testing' },
      { label: 'Training & awareness', href: '/en/security-training' },
      { label: 'Specialised audits', href: '', heading: true },
      { label: 'Jewellery, watches & luxury', href: '/en/jewellery-watch-store-security-audit' },
      { label: 'Logistics & retail sites', href: '/en/logistics-retail-security-audit' },
    ],
  },
  { label: 'References', href: '/en/references' },
  { label: 'Media', href: '/en/media' },
  { label: 'Founder', href: '/en/founder' },
  { label: 'Contact', href: '/en/contact' },
];

// Libellés d'interface partagés
export const ui = {
  fr: {
    contactCta: 'Contactez-nous',
    switchTo: 'EN',
    switchLabel: 'English',
    footerTagline: 'Une expertise sécurité à votre service.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Contact',
    footerPartner: 'Partenaire opérationnel',
    footerRights: 'Tous droits réservés.',
    footerLegal: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
  en: {
    contactCta: 'Contact us',
    switchTo: 'FR',
    switchLabel: 'Français',
    footerTagline: 'Physical security expertise at your service.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Contact',
    footerPartner: 'Operational partner',
    footerRights: 'All rights reserved.',
    footerLegal: [
      { label: 'FAQ', href: '/en/faq' },
      { label: 'Legal notice', href: '/mentions-legales' },
      { label: 'Privacy', href: '/confidentialite' },
    ],
  },
};
