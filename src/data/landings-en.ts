// English service landing pages (core i18n scope).
import type { Landing } from './landings';

export const auditConseilEn: Landing = {
  meta: {
    title: 'Security audit & security concept in Switzerland - DBA Sécurité',
    description:
      'Security audit, risk analysis and security concept: independent advice, free from manufacturers. DBA Sécurité, from diagnosis to prioritised recommendations.',
  },
  landing: {
    path: '/en/security-audit-consulting',
    serviceType: 'Security audit, security concept, risk analysis, security consulting',
    serviceDescription:
      'DBA Sécurité carries out security audits, risk analyses and security concepts: independent advice, free from manufacturers, from diagnosis to prioritised recommendations.',
    eyebrow: 'Audit & consulting',
    title: 'Security audit & consulting',
    subtitle:
      'From diagnosis to the security concept: we assess your real risks and design proportionate measures - independent advice that serves your security, not the sale of equipment.',
    enjeuTitle: 'Securing at random is costly and protects poorly',
    enjeuText:
      "Too many systems pile up out of habit or in response to sales offers: a camera here, a guard there, with no overall view. The result: budgets spent without reducing the risks that truly matter. A security audit restores logic - it starts from the plausible threats to your site, not from a product catalogue.",
    image: '/assets/photos/services-audit.jpg',
    reperes: [
      { b: 'Security concept', span: 'The document that organises your protection' },
      { b: 'Risk analysis & management', span: 'Threat, vulnerability, impact' },
      { b: 'Evacuation', span: 'Plans and keeping people safe' },
    ],
    stepsTitle: 'From real risk to proportionate measures',
    steps: [
      { icon: 'shield', title: 'Risk analysis', text: 'We identify the plausible threats, the vulnerabilities of your site or organisation, and we assess each scenario by probability and impact.' },
      { icon: 'eye', title: 'Assessment of the system', text: 'We confront the existing set-up - organisation, procedures, equipment - with the retained scenarios, to reveal where protection holds and where it gives way.' },
      { icon: 'target', title: 'Security concept', text: 'We formalise the organisational, human and technical measures in a reference document, coherent and submissible to the authorities where required.' },
      { icon: 'spark', title: 'Prioritised recommendations', text: 'You receive clear priorities: what to fix first, for what effort, with what effect - without superfluous spending.' },
    ],
    livrablesTitle: 'A clear vision and priorities',
    livrablesText:
      'An audit is not just a list of weaknesses. We link every finding to the real threats, then we prioritise - so that every franc invested genuinely reduces risk.',
    livrables: [
      'Clear, confidential audit report',
      'Documented risk analysis',
      'Security concept (if commissioned)',
      'Recommendations prioritised by impact and cost',
      'Support with implementation and tenders',
    ],
    proof: {
      eyebrow: 'Our independence',
      title: 'Advice that sells neither guards nor equipment',
      text: 'We do not sell security equipment or impose guarding services. Our recommendations serve one objective only: your real protection. This independence from manufacturers and providers is at the heart of our audit and consulting business.',
      actions: [
        { href: '/en/references', label: 'See our references' },
        { href: '/en/founder', label: 'The founder', variant: 'ghost' },
      ],
      stats: [
        { num: '20+ yrs', label: 'of security experience' },
        { num: 'Methodology', label: 'tested under real conditions' },
      ],
    },
    faqs: [
      { q: 'What is the difference between a security audit and a security concept?', a: 'The audit assesses the existing set-up and identifies vulnerabilities. The security concept is the document that, based on the risk analysis, defines the full set of measures and response procedures. One diagnoses, the other organises protection.' },
      { q: 'Are you really independent from suppliers?', a: 'Yes. We do not sell equipment and do not impose any provider. Our recommendations serve your security, not a sale. You remain free to implement them with the partners of your choice.' },
      { q: 'Do you help with a call for tenders?', a: 'Yes. We help draft specifications that produce comparable offers, and analyse the proposals received to choose a reliable provider.' },
      { q: 'What types of site do you work with?', a: 'Headquarters, industrial or logistics sites, venues open to the public, institutions: we adapt the analysis to your activity, your exposure and your constraints.' },
    ],
    related: [],
    cta: { title: 'A site, a risk, a question?', text: "Let's talk about your context and the priorities to secure." },
  },
};

export const evenementielEn: Landing = {
  meta: {
    title: 'Event security & security concept for events - DBA Sécurité',
    description:
      'Event security and coordination: security concept, authorisation file, day-of management. DBA Sécurité, in Switzerland and internationally.',
  },
  landing: {
    path: '/en/event-security',
    serviceType: 'Event security and coordination, event security concept',
    serviceDescription:
      'DBA Sécurité designs and coordinates event security: security concept, authorisation file, coordination of responders on the day. In Switzerland and internationally.',
    eyebrow: 'Events',
    title: 'Event security & coordination',
    subtitle:
      'From the security concept to day-of management: we support organisers at every stage, and we test the set-up before the event. In Switzerland and internationally.',
    enjeuTitle: 'On the day, it all comes down to preparation',
    enjeuText:
      'A well-controlled event, security-wise, starts with a solid concept accepted by the authorities, then flawless coordination between organiser, guards, emergency services and police. Weaknesses hide in the details and in the often-overlooked phases - set-up, doors opening, exit. Anticipating them is our business.',
    image: '/assets/photos/services-coordination.jpg',
    stepsTitle: 'From authorisation to day-of coordination',
    steps: [
      { icon: 'shield', title: 'Security concept', text: 'We develop the security concept expected by the authorities: risk analysis, capacity and flows, access, emergency services, evacuation, protection.' },
      { icon: 'calendar', title: 'File & authorities', text: 'We prepare a clear file and anticipate the questions of the police and emergency services, to avoid a returned application.' },
      { icon: 'target', title: 'Coordination of responders', text: 'We align guards, stewards, emergency services and police around a clear chain of command and precise briefings.' },
      { icon: 'spark', title: 'Day-of management & debrief', text: 'We run the set-up on the ground, adjust in real time, and draw lessons learned for the next edition.' },
    ],
    livrablesTitle: 'A set-up that holds on the ground',
    livrablesText:
      'What is promised to the authorities must be exactly what is deployed. When the same team designs and implements, there is no gap between paper and reality.',
    livrables: [
      'Event security concept',
      'Support with the authorisation file',
      'Coordination plan and chain of command',
      'Briefings for teams and partners',
      'Operational management on the day and debrief',
    ],
    proof: {
      eyebrow: 'Our references',
      title: 'From luxury fashion shows to European stadiums',
      text: 'We have worked on various fashion shows, cultural and festive events, and European football competitions, notably by taking responsibility for security and running full-scale exercises involving close to 400 responders.',
      actions: [
        { href: '/en/references', label: 'See our references' },
        { href: '/en/media', label: 'Press coverage', variant: 'ghost' },
      ],
      stats: [
        { num: '~400', label: 'responders coordinated' },
        { num: 'Switzerland & int’l', label: 'and beyond' },
      ],
    },
    faqs: [
      { q: 'What types of event do you work on?', a: 'Sporting events, fashion shows, cultural or institutional events, in Switzerland and internationally.' },
      { q: 'Can you help us obtain the authorisation?', a: 'Yes. We develop the expected security concept and prepare the file for the competent authorities. Requirements vary by canton and municipality - we adapt the file accordingly.' },
      { q: 'Do you also provide the security guards?', a: 'Our business is design and coordination. We coordinate on-the-ground providers and can help you select them through adapted specifications, without imposing a supplier. From our experience, we can recommend qualified providers according to the type of service required.' },
      { q: 'What is a full-scale exercise and do we need one?', a: 'It is a realistic simulation that tests the set-up and the coordination before the event. For large gatherings, it is the best way to reveal weaknesses while there is still time to fix them.' },
    ],
    related: [],
    cta: { title: 'An event to secure?', text: "Let's talk about your event, its capacity and your deadlines." },
  },
};

export const testIntrusionEn: Landing = {
  meta: {
    title: 'Physical penetration testing in Switzerland - DBA Sécurité',
    description:
      'Physical penetration testing (red team) and full-scale exercises: DBA Sécurité tests the real robustness of your site and teams. Framework, process and deliverables.',
  },
  landing: {
    path: '/en/physical-penetration-testing',
    serviceType: 'Physical penetration test (red team), full-scale security exercise',
    serviceDescription:
      'DBA Sécurité carries out physical penetration tests (red team) and full-scale exercises to test the real robustness of a site, a set-up and its teams.',
    eyebrow: 'Testing & exercises',
    title: 'Physical penetration testing & full-scale exercises',
    subtitle:
      'Designing a system is not enough: it must be tested. We test the real resistance of your site and the coordination of your teams - to reveal weaknesses before they are exploited.',
    enjeuTitle: 'A system is only worth what it delivers on the day it is attacked',
    enjeuText:
      "Cameras, badges, procedures, guards: on paper, everything seems in place. The real question lies elsewhere - what happens when someone actually tries to get in? A physical penetration test answers this with facts, not assumptions. It reveals the gap between the intended system and its real robustness.",
    image: '/assets/photos/stade-geneve-briefing.jpg',
    reperes: [
      { b: 'Deterrence', span: 'Discourage the attempt' },
      { b: 'Detection', span: 'Spot the attempt as early as possible' },
      { b: 'Delay', span: 'Slow down the progression' },
      { b: 'Response', span: 'React and neutralise the threat' },
    ],
    stepsTitle: 'How we test your security',
    steps: [
      { icon: 'target', title: 'Scoping & objectives', text: 'We define the scope, realistic threat scenarios and rules of engagement: what is tested, what is not, and the safety guardrails.' },
      { icon: 'eye', title: 'Scenario design', text: 'We build credible scenarios from your real context: tailgating, borrowed badge, diverted delivery, forgotten service entrance - what a malicious actor would really attempt.' },
      { icon: 'shield', title: 'Execution under real conditions', text: 'Our team tests the set-up on the ground, discreetly and safely, to measure what your technical, human and organisational measures can actually stop.' },
      { icon: 'spark', title: 'Debrief & action plan', text: 'You receive a clear report: the weaknesses exploited, ranked by severity, and concrete recommendations - organisational as much as technical - to fix what matters.' },
    ],
    livrablesTitle: 'A report that drives decisions',
    livrablesText:
      'A penetration test does not stop at the finding. We link each weakness to what it would actually allow, then we prioritise - so you know what to fix first, and how.',
    livrables: [
      'Detailed, confidential test report',
      'Weaknesses ranked by severity and remediation effort',
      'Concrete, actionable recommendations',
      'Oral debrief to management',
      'Checkpoints to verify remediation',
    ],
    proof: {
      eyebrow: 'Under real conditions',
      title: 'A full-scale exercise of close to 400 responders',
      text: "Before the 2025 UEFA Women's Euro, DBA Sécurité ran a simulation exercise at the Stade de Genève mobilising police, emergency services and private security, to test the coordination of actors and the response protocols before the competition. Testing a system before the event is exactly our business.",
      actions: [
        { href: '/en/references', label: 'See our references' },
        { href: '/en/media', label: 'Press coverage', variant: 'ghost' },
      ],
      stats: [
        { num: '~400', label: 'responders coordinated' },
        { num: 'Institutional & private', label: 'police and fire · medical and private security' },
      ],
    },
    faqs: [
      { q: 'Is it the same as an IT penetration test (pentest)?', a: 'No. An IT pentest targets systems and networks. A physical penetration test challenges the real access to your premises and sensitive areas: access control, badges, tailgating, guard reaction, procedures. The two are complementary, but they are distinct disciplines.' },
      { q: 'Is it legal and risk-free?', a: 'Yes, as long as the test is framed. It relies on a written mandate, a defined scope, rules of engagement and safety guardrails agreed in advance. Nothing is left to chance: the goal is to reveal weaknesses, not to create an incident.' },
      { q: 'Should the teams be warned?', a: "It depends on the objective. A test without the teams' knowledge measures their real reaction; an announced test validates specific procedures. We decide together during scoping, always with respect for people." },
      { q: 'And a full-scale exercise, is it different?', a: 'Yes. The penetration test challenges the resistance of a site; the full-scale exercise tests the coordination of all actors (private security, police, emergency services) against a major scenario. We carry out both, depending on your challenges.' },
    ],
    related: [],
    cta: { title: 'Ready to test your set-up?', text: "Let's talk about your site, your challenges and the most useful scenario to test." },
  },
};

export const formationEn: Landing = {
  meta: {
    title: 'Security training & awareness - DBA Sécurité',
    description:
      'Tailor-made training and coaching: staff awareness, security team training, preparing management for crisis handling. DBA Sécurité.',
  },
  landing: {
    path: '/en/security-training',
    serviceType: 'Security training and awareness, team coaching, crisis management',
    serviceDescription:
      'DBA Sécurité designs tailor-made training and coaching: staff awareness, security team training, preparing management for crisis handling.',
    eyebrow: 'Coaching & training',
    title: 'Security training & awareness',
    subtitle:
      'Your teams are your first line of defence. We design tailor-made training and coaching - from staff awareness to preparing your management for a crisis.',
    enjeuTitle: 'The best procedure is worthless if no one applies it',
    enjeuText:
      'A borrowed badge, a door held out of courtesy, an unaccompanied visitor: most security weaknesses are not technical, they are human. And on the day of an incident, it is the preparation of the teams and management that makes the difference. Awareness and training turn instructions into reflexes.',
    image: '/assets/photos/formation-page.jpg',
    stepsTitle: 'From awareness to hands-on practice',
    steps: [
      { icon: 'eye', title: 'Needs assessment', text: 'We identify your risks and the real level of your teams, to target what matters rather than rolling out a generic programme.' },
      { icon: 'graduation', title: 'Tailor-made programme', text: 'We design adapted modules: staff awareness, security team training, incident response protocols.' },
      { icon: 'target', title: 'Coaching for management', text: 'We prepare your decision-makers for crisis handling: who decides, who communicates, and according to which reflex procedures.' },
      { icon: 'spark', title: 'Exercises & embedding', text: 'Table-top or full-scale exercises to turn learning into reflexes, and to measure what still needs to improve.' },
    ],
    livrablesTitle: 'Reflexes, not just slides',
    livrablesText:
      'Useful training is measured by what remains on the ground. We favour concrete cases, role-play and clear language, adapted to your real activity.',
    livrables: [
      'Tailor-made training programme',
      'Staff awareness',
      'Security team training',
      'Coaching management for crisis handling',
      'Table-top or full-scale exercises',
    ],
    proof: {
      eyebrow: 'On the ground',
      title: 'Training the managers who carry security day to day',
      text: 'We train and coach both security teams and operational managers - across institutions, international organisations, private security and construction - to embed the right reflexes into the daily life of the organisation.',
      actions: [
        { href: '/en/references', label: 'See our references' },
        { href: '/en/founder', label: 'The founder', variant: 'ghost' },
      ],
      stats: [
        { num: 'Tailor-made', label: 'every programme' },
        { num: 'Reflexes', label: 'embedded through practice' },
      ],
    },
    faqs: [
      { q: 'Is your training standardised?', a: 'No. We start from your real risks and the level of your teams. The content, examples and role-play are adapted to your activity.' },
      { q: 'Who can be trained?', a: 'Both your staff (awareness), your security teams (professional training) and your management (crisis-handling coaching).' },
      { q: 'What is a table-top exercise (or simulation exercise)?', a: 'A simulation around a plausible scenario, which quickly reveals the missing roles, the information that does not flow and the delayed decisions. It is a concrete starting point to strengthen the plan.' },
      { q: 'Do you deliver on site?', a: 'Yes, we deliver on your site, adapting the format to your organisational constraints.' },
    ],
    related: [],
    cta: { title: 'Want to strengthen your teams?', text: "Let's talk about your challenges and the most useful training format." },
  },
};
