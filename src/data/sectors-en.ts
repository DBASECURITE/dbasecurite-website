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

export const logistiqueEn: Sector = {
  meta: {
    title: 'Security audit: logistics sites, retail stores and industrial sites - DBA Sécurité',
    description:
      'Security audits for warehouses, distribution centres, large retail stores and industrial sites in French-speaking Switzerland: access, flows, theft, antisocial behaviour and the safety of people. Independent advice.',
  },
  landing: {
    path: '/en/logistics-retail-security-audit',
    serviceType: 'Security audit for logistics sites, distribution centres, large retail stores and industrial sites',
    serviceDescription:
      'DBA Sécurité audits the security of logistics sites, large retail stores and industrial sites: perimeter, access control, flows of people and goods, theft and malicious acts.',
    eyebrow: 'Logistics · Retail · Industry',
    title: 'Security audits for logistics sites, retail stores and industrial sites',
    subtitle:
      'Warehouses, distribution centres, large retail stores: hundreds of people, goods on the move and long opening hours. We help you control what comes in and goes out, without slowing operations down.',
    heroVisual: { src: '/assets/photos/logistique-entrepot.jpg', alt: '' },
    reperes: [
      { b: 'The perimeter', span: 'Knowing who comes in and goes out' },
      { b: 'The flows', span: 'People, vehicles, goods' },
      { b: 'Continuity', span: 'Producing, delivering and selling without interruption' },
    ],
    enjeuTitle: 'Smooth operations must not come at the expense of security',
    enjeuText: [
      'A logistics site or a large store lives on its flows: employees, drivers, customers, contractors and machinery cross paths all the time. This freedom of movement is essential to operations, but it also benefits those who have no business being there.',
      'Our approach aims for a simple balance: strict control at the entrances, at deliveries and on the perimeter, so that people can move more freely inside, within a clear framework.',
    ],
    phasesEyebrow: 'How an incident unfolds',
    phasesTitle: 'From a discreet gap to a visible incident',
    phases: [
      { title: 'Everyday gaps', text: 'A gate left open, an emergency exit used as a shortcut, a borrowed badge, a check skipped for lack of time. Incidents often grow out of small habits.' },
      { title: 'The incident', text: 'Intrusion, theft of goods from the stockroom or the shelves, an assault on an employee, sabotage or an accident between a pedestrian and a truck: the site must detect and react, day and night.' },
      { title: 'The consequences', text: "Losses, supply disruption, shaken employees, the company's liability, its image. Being able to trace what happened determines what comes next." },
    ],
    phasesFoot: 'Our audit covers all three stages, not just the incident itself.',
    blocksTitle: 'A site divided into zones, each with its own level of control',
    blocks: [
      {
        eyebrow: 'Perimeter and access',
        title: 'Controlling who comes in and goes out',
        text: 'Fences, gates, turnstiles, gatehouse, badges, emergency exits: we check that every access point is genuinely controlled, that detection works and that an abnormal event is reported without relying on someone watching all the time.',
        points: ['Perimeter delimitation and detection', 'Control of people, vehicles and deliveries', 'Alarm reporting and handling'],
        visual: { src: '/assets/photos/logistique-acces.jpg', alt: 'Access control turnstiles in a warehouse' },
      },
      {
        eyebrow: 'Zoning and flows',
        title: 'Segmenting the site without paralysing it',
        text: 'Stockrooms, loading docks, sales floor, checkouts, technical rooms: we identify sensitive areas, the flows that cross them and the right level of control for each. The goal: smooth circulation where possible, controlled access where necessary.',
        points: ['Sensitive and technical areas', 'Pedestrian and vehicle circulation', 'Signage and site rules'],
        visual: { src: '/assets/illustrations/site-logistique-zones-en.svg', alt: 'Schematic plan of a logistics site divided into zones' },
      },
      {
        eyebrow: 'Organisation and presence',
        title: 'The right people in the right places',
        text: 'We assess the security presence, its actual tasks, the workload placed on the officers, their training on the site and the tools they have to log events. In stores, we also look at how sales teams are prepared to deal with theft and antisocial behaviour.',
      },
    ],
    mandat: {
      label: 'Production and distribution',
      title: 'Audit of a production and distribution site',
      contexte: 'A multi-building site in French-speaking Switzerland, where several hundred people and heavy truck traffic cross paths every day.',
      mission: 'An audit scoped together with the client: scope, depth of analysis and deliverables were agreed according to their budget constraints and the results they expected. Two specialists analysed zoning, flows and organisational, technical and human measures.',
      resultat: 'A summary of vulnerabilities assessed one by one and a set of recommendations grouped by theme, including three key measures for management.',
      visual: { src: '/assets/photos/logistique-audit.jpg', alt: 'DBA Sécurité consultant auditing a warehouse' },
    },
    livrableTitle: 'A roadmap management can decide on',
    livrableText: 'We set each measure against the risk it reduces, so you can weigh budget, operations and level of security.',
    livrables: [
      'Executive summary and key measures',
      'Zone-by-zone analysis of the site',
      'Vulnerabilities assessed one by one',
      'Recommendations grouped by theme and priority',
      'Support with tenders and implementation',
    ],
    faqs: [
      { q: 'Do you also audit large retail stores and shops?', a: 'Yes. We examine the sales floor, checkouts, stockroom, deliveries and emergency exits, as well as how teams are prepared to deal with theft and antisocial behaviour.' },
      { q: 'How is the audit scoped?', a: 'It is tailored to each client. Together we define the scope, the depth of analysis and the deliverables, according to your budget constraints and the results you expect.' },
      { q: 'Does an audit disrupt operations?', a: 'No. The visit takes place during normal activity, with a designated contact person. It is actually the best time to observe real flows.' },
      { q: 'Do you also cover cybersecurity?', a: 'No. We focus on physical security. We do, however, point out where it overlaps with IT, such as access to technical rooms.' },
      { q: 'Can you help us write a tender?', a: 'Yes. We can turn the recommendations into specifications for your guarding or security systems providers, then help you compare the offers.' },
    ],
    related: [
      { label: 'Security audit & consulting', slug: '/en/security-audit-consulting' },
      { label: 'Physical penetration testing & exercises', slug: '/en/physical-penetration-testing' },
    ],
    cta: { title: "Let's talk about your site", text: 'Together we define the scope of the audit and the zones to examine first.' },
  },
};
