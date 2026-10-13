// Contenu des pages "landing" par service (hubs commerciaux).
// Chaque entrée alimente le composant ServiceLanding via la page du même slug.
import type { Props as LandingProps } from '../components/ServiceLanding.astro';

export interface Landing {
  meta: { title: string; description: string };
  landing: LandingProps;
}

export const testIntrusion: Landing = {
  meta: {
    title: "Test d'intrusion physique en Suisse - DBA Sécurité",
    description:
      "Test d'intrusion physique (red team) et exercices grandeur nature : DBA Sécurité éprouve la robustesse réelle de votre site et de vos équipes. Cadre, déroulé et livrables.",
  },
  landing: {
    path: '/test-intrusion-physique',
    serviceType: "Test d'intrusion physique (red team), exercice de sécurité grandeur nature",
    serviceDescription:
      "DBA Sécurité réalise des tests d'intrusion physique (red team) et des exercices grandeur nature pour éprouver la robustesse réelle d'un site, d'un dispositif et de ses équipes.",
    eyebrow: 'Tests & exercices',
    title: "Test d'intrusion physique & exercices grandeur nature",
    subtitle:
      "Concevoir un dispositif ne suffit pas : il faut l'éprouver. Nous testons la résistance réelle de votre site et la coordination de vos équipes - pour révéler les failles avant qu'elles ne soient exploitées.",
    enjeuTitle: "Un dispositif ne vaut que ce qu'il donne le jour où il est attaqué",
    enjeuText:
      "Caméras, badges, procédures, agents : sur le papier, tout semble en place. La vraie question est ailleurs - que se passe-t-il quand quelqu'un tente réellement d'entrer ? Un test d'intrusion physique répond à cette question avec des faits, pas des suppositions. Il révèle l'écart entre le dispositif prévu et sa robustesse réelle.",
    image: '/assets/photos/test-intrusion.jpg',
    stepsTitle: 'Comment nous éprouvons votre sécurité',
    steps: [
      { icon: 'target', title: 'Cadrage & objectifs', text: "Nous définissons avec vous le périmètre, les scénarios de menace réalistes et les règles d'engagement : ce qui est testé, ce qui ne l'est pas, et les garde-fous de sécurité." },
      { icon: 'eye', title: 'Scénarisation', text: "Nous construisons des scénarios crédibles à partir de votre contexte réel : talonnage, badge prêté, livraison détournée, zone de service oubliée - ce qu'un acteur malveillant tenterait vraiment." },
      { icon: 'shield', title: 'Exécution en conditions réelles', text: "Nos intervenants éprouvent le dispositif sur le terrain, discrètement et en sécurité, pour mesurer ce que vos mesures techniques, humaines et organisationnelles permettent réellement d'arrêter." },
      { icon: 'spark', title: "Restitution & plan d'action", text: "Vous recevez un rapport clair : les failles exploitées, hiérarchisées par gravité, et des recommandations concrètes - organisationnelles autant que techniques - pour corriger ce qui compte." },
    ],
    livrablesTitle: 'Un rapport qui sert à décider',
    livrablesText:
      "Un test d'intrusion ne s'arrête pas au constat. Nous relions chaque faille à ce qu'elle permettrait concrètement, puis nous priorisons - pour que vous sachiez quoi corriger en premier, et comment.",
    livrables: [
      'Rapport de test détaillé et confidentiel',
      'Failles hiérarchisées par gravité et par effort de correction',
      'Recommandations concrètes et actionnables',
      'Restitution orale à la direction',
      'Points de contrôle pour vérifier la correction',
    ],
    proof: {
      eyebrow: 'En conditions réelles',
      title: 'Un exercice grandeur nature de près de 400 intervenants',
      text: "Avant le Championnat d'Europe féminin 2025, DBA Sécurité a piloté au Stade de Genève un exercice de simulation mobilisant police, secours et sécurité privée, pour éprouver la coordination des acteurs et les protocoles d'intervention avant la compétition. Éprouver un dispositif avant l'événement, c'est précisément notre métier.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/medias', label: 'Couverture presse', variant: 'ghost' },
      ],
      stats: [
        { num: '~400', label: 'intervenants coordonnés' },
        { num: 'Police · secours · privé', label: 'acteurs mobilisés' },
      ],
    },
    faqs: [
      { q: "Est-ce la même chose qu'un test d'intrusion informatique (pentest) ?", a: "Non. Un pentest informatique cible des systèmes et des réseaux. Un test d'intrusion physique éprouve l'accès réel à vos locaux et à vos zones sensibles : contrôle d'accès, badges, talonnage, réaction des agents, procédures. Les deux sont complémentaires, mais ce sont deux métiers distincts." },
      { q: 'Est-ce légal et sans risque ?', a: "Oui, dès lors que le test est encadré. Il repose sur un mandat écrit, un périmètre défini, des règles d'engagement et des garde-fous de sécurité convenus à l'avance. Rien n'est laissé au hasard : l'objectif est de révéler les failles, pas de créer un incident." },
      { q: 'Faut-il prévenir les équipes ?', a: "Cela dépend de l'objectif. Un test à l'insu des équipes mesure leur réaction réelle ; un test annoncé valide des procédures précises. Nous en décidons ensemble lors du cadrage, en veillant toujours au respect des personnes." },
      { q: 'Et un exercice grandeur nature, est-ce différent ?', a: "Oui. Le test d'intrusion éprouve la résistance d'un site ; l'exercice grandeur nature met à l'épreuve la coordination de tous les acteurs (sécurité privée, police, secours) face à un scénario majeur. Nous réalisons les deux, selon vos enjeux." },
    ],
    related: [
      { label: "Test d'intrusion physique : comment on éprouve un site", slug: 'test-intrusion-physique' },
      { label: 'Exercice grandeur nature : les leçons des 400 intervenants au Stade de Genève', slug: 'exercice-grandeur-nature-stade-de-geneve' },
    ],
    cta: { title: 'Prêt à éprouver votre dispositif ?', text: 'Parlons de votre site, de vos enjeux et du scénario le plus utile à tester.' },
  },
};

export const auditConseil: Landing = {
  meta: {
    title: 'Audit de sûreté & concept de sécurité en Suisse - DBA Sécurité',
    description:
      "Audit de sûreté, analyse de risques et concept de sécurité : un conseil indépendant des fabricants. DBA Sécurité, du diagnostic aux recommandations hiérarchisées.",
  },
  landing: {
    path: '/audit-et-conseil-surete',
    serviceType: "Audit de sûreté, concept de sûreté, analyse de risques, conseil en sécurité",
    serviceDescription:
      "DBA Sécurité réalise audits de sûreté, analyses de risques et concepts de sûreté : un conseil indépendant des fabricants, du diagnostic aux recommandations hiérarchisées.",
    eyebrow: 'Audit & conseil',
    title: 'Audit & conseil en sûreté',
    subtitle:
      "Du diagnostic au concept de sûreté : nous évaluons vos risques réels et concevons des mesures proportionnées - un conseil indépendant, qui sert votre sécurité et non la vente d'équipements.",
    enjeuTitle: 'Sécuriser au hasard coûte cher et protège mal',
    enjeuText:
      "Trop de dispositifs s'empilent par habitude ou au gré des offres commerciales : une caméra ici, un agent là, sans vision d'ensemble. Résultat : des budgets dépensés sans réduire les risques qui comptent vraiment. Un audit de sûreté remet de la logique - il part des menaces plausibles pour votre site, pas d'un catalogue de produits.",
    image: '/assets/photos/services-audit.jpg',
    stepsTitle: 'Du risque réel à des mesures proportionnées',
    steps: [
      { icon: 'shield', title: 'Analyse de risques', text: "Nous identifions les menaces plausibles, les vulnérabilités de votre site ou de votre organisation, et nous évaluons chaque scénario selon sa probabilité et son impact." },
      { icon: 'eye', title: 'Audit du dispositif', text: "Nous confrontons l'existant - organisation, procédures, équipements - aux scénarios retenus, pour révéler où la protection tient et où elle cède." },
      { icon: 'target', title: 'Concept de sûreté', text: "Nous formalisons les mesures organisationnelles, humaines et techniques dans un document de référence, cohérent et opposable aux autorités le cas échéant." },
      { icon: 'spark', title: 'Recommandations hiérarchisées', text: "Vous recevez des priorités claires : quoi corriger d'abord, pour quel effort, avec quel effet - sans dépense superflue." },
    ],
    livrablesTitle: 'Une vision claire et des priorités',
    livrablesText:
      "Un audit ne se résume pas à une liste de failles. Nous relions chaque constat aux menaces réelles, puis nous priorisons - pour que chaque franc investi réduise vraiment le risque.",
    livrables: [
      "Rapport d'audit clair et confidentiel",
      'Analyse de risques documentée',
      'Concept de sûreté (si mandaté)',
      'Recommandations hiérarchisées par impact et par coût',
      "Accompagnement dans la mise en œuvre et les appels d'offres",
    ],
    proof: {
      eyebrow: 'Notre indépendance',
      title: 'Un conseil qui ne vend ni agents ni matériel',
      text: "Nous ne commercialisons pas d'équipements de sécurité ni de prestations de gardiennage imposées. Nos recommandations ne servent qu'un objectif : votre protection réelle. Cette indépendance vis-à-vis des fabricants et des exécutants est au cœur de notre métier d'audit et de conseil.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/fondateur', label: 'Le fondateur', variant: 'ghost' },
      ],
      stats: [
        { num: '15+ ans', label: "d'expérience en sûreté" },
        { num: 'CPP', label: 'ASIS International' },
      ],
    },
    faqs: [
      { q: 'Quelle différence entre un audit de sécurité et un concept de sûreté ?', a: "L'audit évalue l'existant et identifie les vulnérabilités. Le concept de sûreté est le document qui, à partir de l'analyse de risques, définit l'ensemble des mesures et des procédures de réponse. L'un diagnostique, l'autre organise la protection." },
      { q: 'Êtes-vous vraiment indépendants des fournisseurs ?', a: "Oui. Nous ne vendons pas d'équipements et n'imposons pas de prestataire d'exécution. Nos recommandations visent votre sécurité, pas une vente. Vous restez libre de les mettre en œuvre avec les partenaires de votre choix." },
      { q: "Intervenez-vous sur un appel d'offres ?", a: "Oui. Nous aidons à rédiger un cahier des charges qui produit des offres comparables, et à analyser les propositions reçues pour choisir un prestataire fiable." },
      { q: 'Pour quels types de sites intervenez-vous ?', a: "Sièges, sites industriels ou logistiques, lieux recevant du public, institutions : nous adaptons l'analyse à votre activité, votre exposition et vos contraintes." },
    ],
    related: [
      { label: "Le concept de sûreté : à quoi il sert et ce qu'il doit contenir", slug: 'concept-de-surete' },
      { label: 'Analyse de risques : menace, vulnérabilité, impact, la méthode', slug: 'analyse-de-risques-surete' },
      { label: "Audit de sûreté d'un site : déroulé et livrables", slug: 'audit-de-surete-site' },
    ],
    cta: { title: 'Un site, un risque, une question ?', text: 'Parlons de votre contexte et des priorités à sécuriser.' },
  },
};

export const evenementiel: Landing = {
  meta: {
    title: "Sécurité d'événement & concept de manifestation - DBA Sécurité",
    description:
      "Sécurité et coordination d'événements : concept de sécurité, dossier d'autorisation, pilotage le jour J. DBA Sécurité, en Suisse et à l'international.",
  },
  landing: {
    path: '/securite-evenementielle',
    serviceType: "Sécurité et coordination d'événements, concept de sécurité de manifestation",
    serviceDescription:
      "DBA Sécurité conçoit et coordonne la sûreté des événements : concept de sécurité, dossier d'autorisation, coordination des intervenants le jour J, en Suisse et à l'international.",
    eyebrow: 'Événementiel',
    title: "Sécurité & coordination d'événements",
    subtitle:
      "Du concept de sécurité au pilotage le jour J : nous accompagnons les organisateurs à chaque étape, et nous éprouvons le dispositif avant l'événement. En Suisse et à l'international.",
    enjeuTitle: 'Le jour J, tout se joue sur la préparation',
    enjeuText:
      "Un événement maîtrisé côté sécurité, c'est d'abord un concept solide accepté par les autorités, puis une coordination sans faille entre organisateur, agents, secours et police. Les failles se logent dans les détails et dans les phases souvent oubliées - montage, ouverture des portes, sortie. Les anticiper, c'est notre métier.",
    image: '/assets/photos/services-coordination.jpg',
    stepsTitle: "De l'autorisation à la coordination le jour J",
    steps: [
      { icon: 'shield', title: 'Concept de sécurité', text: "Nous élaborons le concept de sûreté et de sécurité attendu par les autorités : analyse des risques, jauge et flux, accès, secours, évacuation, sûreté." },
      { icon: 'calendar', title: 'Dossier & autorités', text: "Nous préparons un dossier lisible et anticipons les questions de la police et des secours, pour éviter un dossier retourné." },
      { icon: 'target', title: 'Coordination des intervenants', text: "Nous articulons agents, stewards, secours et police autour d'une chaîne de commandement claire et de briefings précis." },
      { icon: 'spark', title: 'Pilotage le jour J & RETEX', text: "Nous pilotons le dispositif sur le terrain, ajustons en temps réel, et tirons un retour d'expérience pour la prochaine édition." },
    ],
    livrablesTitle: 'Un dispositif qui tient sur le terrain',
    livrablesText:
      "Ce qui est promis aux autorités doit être exactement ce qui est déployé. Quand la même équipe conçoit et met en place, il n'y a pas d'écart entre le papier et la réalité.",
    livrables: [
      "Concept de sécurité et de sûreté de l'événement",
      "Appui au dossier d'autorisation",
      'Plan de coordination et chaîne de commandement',
      'Briefings des équipes et des partenaires',
      'Pilotage opérationnel le jour J et retour d’expérience',
    ],
    proof: {
      eyebrow: 'Nos références',
      title: 'Des défilés de luxe aux stades européens',
      text: "Nous sommes intervenus pour le défilé Moncler, l'UEFA Youth League et le Championnat d'Europe féminin 2025, où DBA Sécurité a assuré la responsabilité sécurité du Stade de Genève et piloté un exercice grandeur nature de près de 400 intervenants.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/medias', label: 'Couverture presse', variant: 'ghost' },
      ],
      stats: [
        { num: '5 matchs', label: 'Euro féminin 2025 à Genève' },
        { num: '~400', label: 'intervenants coordonnés' },
      ],
    },
    faqs: [
      { q: 'Pour quels types d’événements intervenez-vous ?', a: "Événements sportifs, défilés et événements de mode, manifestations culturelles ou institutionnelles, en Suisse comme à l'international." },
      { q: "Pouvez-vous nous aider à obtenir l'autorisation ?", a: "Oui. Nous élaborons le concept de sécurité attendu et préparons le dossier pour les autorités compétentes. Les exigences varient selon le canton et la commune - nous adaptons le dossier en conséquence." },
      { q: 'Fournissez-vous aussi les agents de sécurité ?', a: "Notre métier est la conception et la coordination. Nous coordonnons les prestataires de terrain et pouvons vous aider à les sélectionner via un cahier des charges adapté, sans vous imposer un fournisseur." },
      { q: "Qu'est-ce qu'un exercice grandeur nature et en avons-nous besoin ?", a: "C'est une simulation en conditions réalistes qui éprouve le dispositif et la coordination avant l'événement. Pour les grands rassemblements, c'est le meilleur moyen de révéler les failles pendant qu'il est encore temps de corriger." },
    ],
    relatedTitle: 'Pour aller plus loin',
    related: [
      { label: "Manifestation à Genève : concept de sécurité et autorisation", slug: '/concept-securite-manifestation-geneve' },
      { label: "Manifestation dans le canton de Vaud : POCAMA et concept de sécurité", slug: '/concept-securite-manifestation-vaud' },
      { label: 'Coordination sécurité le jour J : PC, chaîne de commandement, briefings', slug: 'coordination-securite-evenement' },
      { label: "Exercice grandeur nature : les leçons de l'exercice au Stade de Genève", slug: 'exercice-grandeur-nature-stade-de-geneve' },
    ],
    cta: { title: 'Un événement à sécuriser ?', text: 'Parlons de votre manifestation, de sa jauge et de vos échéances.' },
  },
};

export const formation: Landing = {
  meta: {
    title: 'Formation & sensibilisation à la sûreté - DBA Sécurité',
    description:
      "Formation et coaching sur mesure : sensibilisation des collaborateurs, formation des équipes de sécurité, préparation de la direction à la gestion de crise. DBA Sécurité.",
  },
  landing: {
    path: '/formation-securite',
    serviceType: 'Formation et sensibilisation à la sûreté, coaching des équipes, gestion de crise',
    serviceDescription:
      "DBA Sécurité conçoit des formations et du coaching sur mesure : sensibilisation des collaborateurs, formation des équipes de sécurité, préparation de la direction à la gestion de crise.",
    eyebrow: 'Coaching & formation',
    title: 'Formation & sensibilisation à la sûreté',
    subtitle:
      "Vos équipes sont votre premier maillon de sûreté. Nous concevons des formations et du coaching sur mesure - de la sensibilisation des collaborateurs à la préparation de votre direction face à la crise.",
    enjeuTitle: "La meilleure procédure ne vaut rien si personne ne l'applique",
    enjeuText:
      "Un badge prêté, une porte tenue par courtoisie, un visiteur non accompagné : la plupart des failles de sûreté ne sont pas techniques, elles sont humaines. Et le jour d'un incident, c'est la préparation des équipes et de la direction qui fait la différence. La sensibilisation et l'entraînement transforment des consignes en réflexes.",
    image: '/assets/photos/services-formation.jpg',
    stepsTitle: "De la sensibilisation à l'entraînement",
    steps: [
      { icon: 'eye', title: 'Diagnostic des besoins', text: "Nous identifions vos risques et le niveau réel de vos équipes, pour cibler ce qui compte plutôt que de dérouler un programme générique." },
      { icon: 'graduation', title: 'Programme sur mesure', text: "Nous concevons des modules adaptés : sensibilisation des collaborateurs, formation des équipes de sécurité, protocoles de réponse aux incidents." },
      { icon: 'target', title: 'Coaching de la direction', text: "Nous préparons vos décideurs à la gestion de crise : qui décide, qui communique, selon quelles procédures réflexes." },
      { icon: 'spark', title: 'Exercices & ancrage', text: "Exercices sur table ou grandeur nature pour transformer les acquis en réflexes, et mesurer ce qui doit encore progresser." },
    ],
    livrablesTitle: 'Des réflexes, pas seulement des slides',
    livrablesText:
      "Une formation utile se mesure à ce qu'il en reste sur le terrain. Nous privilégions les cas concrets, les mises en situation et un langage clair, adaptés à votre activité réelle.",
    livrables: [
      'Programme de formation sur mesure',
      'Sensibilisation des collaborateurs',
      'Formation des équipes de sécurité',
      'Coaching de la direction à la gestion de crise',
      'Exercices sur table ou grandeur nature',
    ],
    proof: {
      eyebrow: 'Sur le terrain',
      title: 'Former les cadres qui portent la sécurité au quotidien',
      text: "Nous formons et coachons aussi bien des équipes de sécurité que des cadres opérationnels - par exemple les cadres QSE de SCRASA, entreprise genevoise du génie civil et du bâtiment - pour ancrer les bons réflexes dans le quotidien de l'organisation.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/fondateur', label: 'Le fondateur', variant: 'ghost' },
      ],
      stats: [
        { num: 'Sur mesure', label: 'chaque programme' },
        { num: 'Réflexes', label: "ancrés par l'exercice" },
      ],
    },
    faqs: [
      { q: 'Vos formations sont-elles standardisées ?', a: "Non. Nous partons de vos risques réels et du niveau de vos équipes. Le contenu, les exemples et les mises en situation sont adaptés à votre activité." },
      { q: 'Qui peut être formé ?', a: "Aussi bien vos collaborateurs (sensibilisation) que vos équipes de sécurité (formation métier) et votre direction (coaching de gestion de crise)." },
      { q: "Qu'est-ce qu'un exercice sur table ?", a: "Une simulation autour d'un scénario plausible, qui révèle en peu de temps les rôles manquants, les informations qui ne circulent pas et les décisions retardées. C'est un point de départ concret pour renforcer le plan." },
      { q: 'Intervenez-vous sur site ?', a: "Oui, nous intervenons sur votre site, en français, en adaptant le format à vos contraintes d'organisation." },
    ],
    related: [
      { label: 'Sensibiliser ses collaborateurs à la sûreté : un programme en 4 étapes', slug: 'sensibilisation-surete-collaborateurs' },
      { label: 'Gestion de crise : préparer sa direction avant l’incident', slug: 'gestion-de-crise-direction' },
    ],
    cta: { title: 'Envie de renforcer vos équipes ?', text: 'Parlons de vos enjeux et du format de formation le plus utile.' },
  },
};

export const manifestationGeneve: Landing = {
  meta: {
    title: "Concept de sécurité d'une manifestation à Genève - DBA Sécurité",
    description:
      "Organiser une manifestation à Genève : concept de sécurité, concept médico-sanitaire, autorisation commune ou PCTN. DBA Sécurité prépare votre dossier.",
  },
  landing: {
    path: '/concept-securite-manifestation-geneve',
    serviceType: "Concept de sécurité et dossier d'autorisation de manifestation, canton de Genève",
    serviceDescription:
      "DBA Sécurité élabore le concept de sécurité et prépare le dossier d'autorisation d'une manifestation dans le canton de Genève (commune, PCTN, service du médecin cantonal).",
    eyebrow: 'Genève',
    title: "Concept de sécurité d'une manifestation à Genève",
    subtitle:
      "Organiser une manifestation à Genève suppose un dossier que plusieurs services examinent. Nous élaborons votre concept de sécurité et préparons l'autorisation - pour un dossier accepté, pas retourné.",
    enjeuTitle: "À Genève, l'autorisation se gagne sur le dossier",
    enjeuText:
      "Réserver le lieu ne suffit pas : l'autorisation dépend d'un dossier qui démontre que les risques sont maîtrisés, que les secours peuvent intervenir et que le public peut être évacué. À Genève, plusieurs services (commune ou police du commerce, médecin cantonal, police, secours) l'examinent, et un dossier incomplet est bloqué. Anticiper ce que chacun attend, c'est notre métier.",
    image: '/assets/photos/manifestation-geneve.jpg',
    stepsEyebrow: 'Le cadre à Genève',
    stepsTitle: 'Les concepts attendus par les autorités genevoises',
    steps: [
      { icon: 'calendar', title: 'Autorisation', text: "La demande se dépose auprès de la commune, ou du service de police du commerce (PCTN) pour un événement d'importance cantonale, via e-démarches ou formulaire." },
      { icon: 'shield', title: 'Concept médico-sanitaire', text: "Requis dès 1'500 personnes attendues (spectateurs et participants), ou à la demande de l'autorité. Un dossier incomplet ou non transmis entraîne un préavis négatif." },
      { icon: 'eye', title: 'Prévention des risques', text: "Un concept de prévention et de réduction des risques est exigé lorsque plusieurs conditions sont réunies (affluence, public jeune, animation musicale, vente d'alcool), à transmettre au plus tard 60 jours avant." },
      { icon: 'target', title: 'Concept et budget de sécurité', text: "Pour les manifestations visées par la loi cantonale (risques de violences, but lucratif), un concept et un budget de sécurité préalables sont établis." },
    ],
    livrablesTitle: 'Un dossier genevois prêt à déposer',
    livrablesText:
      "Nous construisons un dossier complet et lisible, qui anticipe les questions des services genevois - pour éviter le préavis négatif et le dossier retourné.",
    livrables: [
      "Concept de sécurité et de sûreté de l'événement",
      'Appui au concept médico-sanitaire',
      'Appui au concept de prévention des risques',
      'Préparation du dossier pour la commune ou le PCTN',
      'Coordination avec police et secours, pilotage le jour J',
    ],
    proof: {
      eyebrow: 'À Genève',
      title: 'Responsable sécurité du Stade de Genève (Euro féminin 2025)',
      text: "DBA Sécurité a assuré la responsabilité sécurité du Stade de Genève, hôte de 5 matchs du Championnat d'Europe féminin 2025, et piloté un exercice grandeur nature de près de 400 intervenants. Une connaissance de terrain des enjeux et des interlocuteurs genevois.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/medias', label: 'Couverture presse', variant: 'ghost' },
      ],
      stats: [
        { num: '5 matchs', label: 'Euro féminin 2025 à Genève' },
        { num: '~400', label: 'intervenants coordonnés' },
      ],
    },
    faqs: [
      { q: "Qui délivre l'autorisation à Genève ?", a: "La commune du lieu, ou le service de police du commerce (PCTN) pour un événement d'importance cantonale. Selon les volets, le médecin cantonal, la police, les secours ou la police du feu peuvent préaviser." },
      { q: 'À partir de quand faut-il un concept médico-sanitaire ?', a: "Dès 1'500 personnes attendues (spectateurs et participants), ou lorsque l'autorité le demande. Il est soumis au service du médecin cantonal." },
      { q: 'Quand déposer le dossier ?', a: "Le plus tôt possible. Certains concepts ont leur propre délai (par exemple 60 jours avant pour la prévention des risques), et un dossier incomplet n'est pas autorisé." },
      { q: 'Ces exigences sont-elles les mêmes pour tous les événements ?', a: "Non. Elles dépendent de la taille, du type d'événement et de la commune, et les règles évoluent. Nous vérifions les exigences applicables à votre cas auprès des autorités compétentes." },
    ],
    relatedTitle: 'Pour aller plus loin',
    related: [
      { label: "Concept de sécurité d'une manifestation : la vue d'ensemble (GE/VD)", slug: 'concept-securite-manifestation' },
      { label: 'Notre offre de sécurité et coordination événementielle', slug: '/securite-evenementielle' },
      { label: 'Et dans le canton de Vaud ?', slug: '/concept-securite-manifestation-vaud' },
    ],
    cta: { title: 'Une manifestation à Genève ?', text: "Parlons de votre événement, de sa jauge et de vos échéances d'autorisation." },
  },
};

export const manifestationVaud: Landing = {
  meta: {
    title: "Concept de sécurité d'une manifestation dans le canton de Vaud - DBA Sécurité",
    description:
      "Organiser une manifestation dans le canton de Vaud : questionnaire POCAMA, concept de sécurité, dispositif médico-sanitaire (BUSAMA). DBA Sécurité prépare votre dossier.",
  },
  landing: {
    path: '/concept-securite-manifestation-vaud',
    serviceType: "Concept de sécurité et dossier d'autorisation de manifestation, canton de Vaud",
    serviceDescription:
      "DBA Sécurité élabore le concept de sécurité et prépare le dossier d'autorisation d'une manifestation dans le canton de Vaud (POCAMA, commune, BUSAMA).",
    eyebrow: 'Canton de Vaud',
    title: "Concept de sécurité d'une manifestation dans le canton de Vaud",
    subtitle:
      "Dans le canton de Vaud, l'autorisation passe par le questionnaire POCAMA et la commune. Nous élaborons votre concept de sécurité et préparons le dossier - complet, dans les délais, accepté.",
    enjeuTitle: 'Dans le canton de Vaud, tout passe par POCAMA et la commune',
    enjeuText:
      "L'État de Vaud présente le questionnaire POCAMA comme indispensable pour les manifestations qui nécessitent des autorisations, des préavis cantonaux ou des permis temporaires de vente d'alcool. C'est ensuite la commune qui délivre l'autorisation, en tenant compte des préavis cantonaux. Un dossier incomplet n'est pas autorisé, et le délai de dépôt n'est pas un délai de préparation.",
    image: '/assets/photos/manifestation-vaud.jpg',
    stepsEyebrow: 'Le cadre vaudois',
    stepsTitle: "Le parcours d'autorisation dans le canton de Vaud",
    steps: [
      { icon: 'calendar', title: 'Questionnaire POCAMA', text: "Point de passage pour les manifestations nécessitant des autorisations, des préavis cantonaux ou des permis temporaires de vente d'alcool." },
      { icon: 'shield', title: 'Autorisation communale', text: "La commune du lieu délivre l'autorisation, en tenant compte des décisions et préavis cantonaux. La demande se dépose au minimum trois mois avant la manifestation." },
      { icon: 'eye', title: 'Dispositif médico-sanitaire', text: "Lorsque les critères sont remplis, un formulaire d'annonce est joint au dossier POCAMA, et le Bureau sanitaire des manifestations (BUSAMA) valide le dispositif." },
      { icon: 'target', title: 'Pièces du dossier', text: "Plans, programme, assurance responsabilité civile et pièces complémentaires peuvent être exigés. Aucune autorisation n'est délivrée si le dossier est incomplet." },
    ],
    livrablesTitle: 'Un dossier vaudois complet et dans les délais',
    livrablesText:
      "Nous préparons un dossier POCAMA complet et un concept de sécurité lisible, qui anticipe les préavis cantonaux - pour tenir le délai des trois mois sans mauvaise surprise.",
    livrables: [
      "Concept de sécurité et de sûreté de l'événement",
      'Appui au questionnaire POCAMA',
      'Appui au dispositif médico-sanitaire (BUSAMA)',
      'Préparation des pièces pour la commune',
      'Coordination avec police et secours, pilotage le jour J',
    ],
    proof: {
      eyebrow: 'Notre expérience',
      title: 'Des dispositifs éprouvés en conditions réelles',
      text: "Du défilé Moncler à l'UEFA Youth League et au Championnat d'Europe féminin 2025, DBA Sécurité conçoit, coordonne et éprouve les dispositifs des grands événements - en Suisse romande et au-delà.",
      actions: [
        { href: '/references', label: 'Voir nos références' },
        { href: '/medias', label: 'Couverture presse', variant: 'ghost' },
      ],
      stats: [
        { num: '~400', label: 'intervenants coordonnés (Euro 2025)' },
        { num: 'Suisse romande', label: "et à l'international" },
      ],
    },
    faqs: [
      { q: "Qu'est-ce que POCAMA ?", a: "C'est le questionnaire en ligne de l'État de Vaud, présenté comme indispensable pour les manifestations nécessitant des autorisations, des préavis cantonaux ou des permis temporaires de vente d'alcool." },
      { q: "Qui délivre l'autorisation ?", a: "La commune du lieu de la manifestation, en tenant compte des décisions et préavis cantonaux." },
      { q: 'Quel est le délai ?', a: "La demande doit être déposée au minimum trois mois avant la manifestation, et le délai de traitement n'est pas garanti. Un dossier incomplet n'est pas autorisé." },
      { q: 'Ces exigences sont-elles les mêmes pour tous les événements ?', a: "Non. Elles dépendent de la taille, du type d'événement et de la commune, et les règles évoluent. Nous vérifions les exigences applicables à votre cas." },
    ],
    relatedTitle: 'Pour aller plus loin',
    related: [
      { label: "Concept de sécurité d'une manifestation : la vue d'ensemble (GE/VD)", slug: 'concept-securite-manifestation' },
      { label: 'Notre offre de sécurité et coordination événementielle', slug: '/securite-evenementielle' },
      { label: 'Et à Genève ?', slug: '/concept-securite-manifestation-geneve' },
    ],
    cta: { title: 'Une manifestation dans le canton de Vaud ?', text: "Parlons de votre événement et du calendrier d'autorisation." },
  },
};
