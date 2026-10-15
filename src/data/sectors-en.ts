// English versions of the sector pages (SectorLanding).
import type { Sector } from './sectors';

export const bijouterieHorlogerieEn: Sector = {
  meta: {
    title: 'Security audit for jewellery, watch and luxury stores - DBA Sécurité',
    description:
      'Security audits for jewellers, watch retailers and luxury boutiques in Geneva and French-speaking Switzerland: robbery, smash-and-grab, insider theft. Prioritised recommendations, independent advice.',
  },
  landing: {
    path: '/en/jewellery-watch-store-security-audit',
    serviceType: 'Security audit for jewellery, watch and luxury stores',
    serviceDescription:
      'DBA Sécurité audits the security of jewellers, watch retailers and luxury boutiques: protecting people and valuables against robbery, smash-and-grab and insider theft.',
    eyebrow: 'Watches · Jewellery · Luxury',
    title: 'Security audits for jewellery, watch and luxury stores',
    subtitle:
      'Your staff and your pieces are exposed to fast, well-prepared and violent attacks. We look at your store the way an attacker would, then tell you what to strengthen first.',
    heroVisual: { src: '/assets/photos/bijouterie-facade.jpg', alt: '' },
    reperes: [
      { b: 'Your staff', span: 'Protecting people comes first' },
      { b: 'Your valuables', span: 'Display cases, safe, handling of pieces' },
      { b: 'Your sensitive moments', span: 'Opening, closing, deliveries' },
    ],
    enjeuTitle: 'An attack plays out in minutes. Your set-up must hold before, during and after.',
    enjeuText: [
      'Attacks on watch and jewellery stores are short, prepared and targeted: high-value pieces that are easy to carry and to sell on. The perpetrators scout the premises, choose their moment and are gone before help arrives.',
      'Most stores already have cameras, an alarm and sometimes a guard. The question is not adding more, but knowing whether everything forms a coherent chain, and where it could break.',
    ],
    enjeuVisual: { src: '/assets/photos/bijouterie-vitrine.jpg', alt: 'Jewellery display' },
    phasesEyebrow: 'How an attack unfolds',
    phasesTitle: 'It all happens before, during a few minutes, then after',
    phases: [
      { title: 'Reconnaissance', text: 'The perpetrators observe the store, its opening hours, its deliveries, whether a guard is present. Some look for a human weak point: an employee who can be threatened, a contractor who can be approached.' },
      { title: 'A few minutes', text: 'Display cases smashed in seconds, an armed robbery, or a theft by deception during a viewing. At this point, only the measures already in place and the reflexes of the team count.' },
      { title: 'Shock and recovery', text: 'Caring for the team, preserving evidence, informing, reopening. This is often what has been least prepared, yet it is where the strength of an organisation shows.' },
    ],
    phasesFoot: 'Our audit covers all three stages, not just the moment of the attack.',
    blocksTitle: 'Your store, layer by layer',
    blocks: [
      {
        eyebrow: 'From the street to the safe',
        title: 'Each layer of protection must reinforce the next',
        text: 'We analyse your store from the outside in: immediate surroundings, facade and entrances, sales floor, staff-only areas, all the way to the safe. A weakness in one layer weakens all the others.',
        points: ['Surroundings and exposure of the store', 'Facade, customer and staff entrances', 'Sales floor and presentation of pieces', 'Staff-only areas and access to the safe'],
        visual: { src: '/assets/illustrations/boutique-couches-en.svg', alt: 'Plan of a store analysed in five layers, from the street to the safe' },
      },
      {
        eyebrow: 'The human factor',
        title: 'Your team is your first security measure',
        text: 'The best equipment cannot replace a team that knows how to spot suspicious behaviour, refuse entry and react correctly if an attack occurs. We assess reflexes, coordination with the security guard, and what is actually written down beyond what is known by word of mouth.',
        points: ['Welcoming and screening visitors', 'Coordination between sales and security', 'Instructions in the event of a robbery', 'Training and onboarding of new staff'],
        visual: { src: '/assets/photos/bijouterie-agent.jpg', alt: 'Security guard at the entrance of a jewellery store' },
      },
      {
        eyebrow: 'Sensitive moments',
        title: 'Opening, closing, deliveries: where it all happens',
        text: 'Prepared attacks often target the moments when the store is most vulnerable. We examine these moments and the rules that govern them, as well as recovery plans after an incident.',
      },
    ],
    mandat: {
      label: 'Luxury watches',
      title: 'Audit of a watch boutique in French-speaking Switzerland',
      contexte: 'A luxury watch boutique in a busy city-centre location, part of a brand that had already faced violent attacks.',
      mission: 'Analysis of the threat specific to the site and the business, full visit of the boutique and discussions with management, sales staff and security.',
      resultat: 'A security score per dimension and around ten prioritised recommendations. The priorities focused first on organisation and team preparedness: low-cost measures that could be applied immediately.',
      visual: { src: '/assets/photos/bijouterie-inspection.jpg', alt: 'DBA Sécurité consultant auditing a watch boutique' },
    },
    livrableTitle: 'A clear report, designed for decision-making',
    livrableText: 'You receive a quick read for management and the detail for your teams. Each recommendation is prioritised and proportionate to your constraints.',
    livrables: [
      'Executive summary with a security score',
      'Analysis of the threat specific to your store',
      'Strengths and vulnerabilities, assessed one by one',
      'Recommendations ranked by priority',
      'Oral debrief and support with implementation',
    ],
    faqs: [
      { q: 'How long does a store audit take?', a: 'A site visit of half a day to a full day is usually enough for a store, not including the writing and presentation of the report. It is preceded by a threat analysis. The exact duration depends on the floor area, the number of entrances and the scope you want.' },
      { q: 'Will you sell me cameras or guards?', a: 'No. DBA Sécurité sells neither equipment nor guarding services. Our recommendations serve your security, and you remain free to choose your suppliers.' },
      { q: 'My insurer already imposes standards. Is an audit still useful?', a: 'Yes. Insurance requirements mainly concern the resistance of the equipment. The audit looks at the whole picture: people, procedures, sensitive moments and how the measures fit together. The two approaches complement each other.' },
      { q: 'Is confidentiality guaranteed?', a: 'Yes. The report describes the vulnerabilities of your store: it is delivered to you alone, and we never name a client without their consent.' },
    ],
    related: [
      { label: 'Security audit & consulting', slug: '/en/security-audit-consulting' },
      { label: 'Physical penetration testing & exercises', slug: '/en/physical-penetration-testing' },
      { label: 'Security training & awareness', slug: '/en/security-training' },
    ],
    cta: { title: "Let's talk about your store", text: 'A first confidential conversation to understand your context and define the scope of the audit.' },
  },
};
