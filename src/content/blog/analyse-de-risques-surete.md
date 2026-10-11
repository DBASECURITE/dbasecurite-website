---
title: "Analyse de risques en sûreté : menace, vulnérabilité, impact, la méthode pas à pas"
description: "Comment mener une analyse de risques en sûreté : définitions, méthode en étapes, matrice probabilité x impact, traitement du risque et erreurs à éviter."
date: 2026-06-23
author: "DBA Sécurité"
category: "Concepts"
draft: false
---

« Faut-il plus de caméras ? Un agent de plus à l'accueil ? Des badges pour tout le monde ? » Ces questions arrivent souvent sur la table d'une direction ou d'un facility manager après un incident, une remarque d'assureur ou un projet de déménagement. Elles ont toutes le même défaut : elles partent des moyens. Or on ne peut pas savoir si une mesure est utile tant qu'on ne sait pas contre quoi elle protège, ni ce qu'elle protège. C'est le rôle de l'analyse de risques : remettre les questions dans le bon ordre, pour que chaque franc investi dans la sûreté réponde à un risque identifié.

## Les notions de base

Une analyse de risques repose sur un vocabulaire précis. Le maîtriser évite bien des malentendus entre direction, exploitants et prestataires.

- **Actif à protéger** : ce qui a de la valeur pour l'organisation. Des personnes d'abord, puis des biens, des informations, des locaux, une activité, une réputation.
- **Menace** : une source potentielle de dommage intentionnel. En sûreté, la menace a un visage : un voleur opportuniste, un ancien collaborateur mécontent, un militant, un groupe organisé. Elle se caractérise par une intention et des capacités.
- **Vulnérabilité** : une faiblesse qui permet à la menace d'atteindre l'actif. Une porte arrière mal fermée, une procédure d'accueil contournable, un collaborateur qui ignore quoi faire face à un comportement suspect.
- **Impact** : la gravité des conséquences si le scénario se réalise. Blessures, interruption d'activité, perte de données, atteinte à l'image, responsabilité engagée.
- **Probabilité** : la vraisemblance que le scénario survienne, compte tenu de la menace et des vulnérabilités.
- **Risque** : la combinaison de la probabilité et de l'impact d'un scénario donné. Le risque n'est pas une menace isolée, c'est un scénario précis : telle menace exploite telle vulnérabilité pour atteindre tel actif, avec telles conséquences.

Rappelons que l'on parle ici de sûreté, c'est-à-dire d'actes malveillants. Les risques accidentels relèvent de la sécurité et suivent une logique voisine, mais distincte : voir [Sûreté ou sécurité : deux notions à ne pas confondre](/blog/surete-ou-securite).

## La méthode pas à pas

Des cadres méthodologiques reconnus existent. La norme ISO 31000, par exemple, fixe les principes généraux du management du risque. Sur le terrain, une analyse de sûreté suit généralement les étapes ci-dessous.

### 1. Identifier ce que l'on protège

On commence par inventorier les actifs et par les hiérarchiser. Tout n'a pas la même valeur : une salle de serveurs, la sécurité d'un dirigeant exposé et le stock de fournitures de bureau n'appellent pas le même niveau de protection. Cette étape se fait avec la direction, car c'est elle qui sait ce qui est vital pour l'organisation.

### 2. Identifier les menaces et les acteurs

Qui pourrait vouloir nuire, pourquoi et avec quels moyens ? On s'appuie sur l'historique d'incidents du site, le contexte local, l'activité de l'organisation, son exposition médiatique, les retours des partenaires et des autorités. L'objectif n'est pas d'imaginer le pire en toute circonstance, mais de retenir des menaces plausibles.

### 3. Construire des scénarios

Chaque menace pertinente est traduite en scénarios concrets : par où l'auteur arrive, à quel moment, ce qu'il vise, ce qu'il doit franchir. Un scénario bien écrit se lit comme un récit court et précis. C'est lui qui permet ensuite de tester les mesures.

### 4. Évaluer les vulnérabilités

Pour chaque scénario, on vérifie ce qui, aujourd'hui, empêcherait, détecterait ou retarderait l'auteur. Cette évaluation ne se fait pas seulement sur plan. Elle exige une visite du site, des entretiens avec le personnel, et idéalement une mise à l'épreuve : un [test d'intrusion physique](/blog/test-intrusion-physique) révèle souvent des failles invisibles sur le papier.

<!-- ANECDOTE : une vulnérabilité découverte sur le terrain (visite ou test) qui n'apparaissait dans aucun document, et ce qu'elle a changé dans l'analyse -->

### 5. Coter probabilité et impact

Chaque scénario reçoit une cote de probabilité et une cote d'impact, sur une échelle simple et définie à l'avance (par exemple de faible à très élevé). L'important est que les critères de chaque niveau soient écrits, pour que deux personnes cotent de la même manière.

### 6. Positionner les risques dans une matrice

La matrice croise probabilité et impact. Elle fait apparaître immédiatement les risques prioritaires (probables et graves), ceux à surveiller, et ceux qui peuvent être acceptés. C'est un outil de décision pour la direction, pas une fin en soi.

### 7. Choisir le traitement

Pour chaque risque, quatre options :

- **Réduire** : mettre en place des mesures organisationnelles, humaines ou techniques qui diminuent la probabilité ou l'impact.
- **Transférer** : reporter tout ou partie des conséquences sur un tiers, par exemple par un contrat ou une assurance.
- **Accepter** : décider en connaissance de cause de vivre avec le risque, parce qu'il est faible ou que le traitement coûterait plus que le dommage.
- **Éviter** : renoncer à l'activité ou modifier le projet pour supprimer l'exposition.

### 8. Mesurer le risque résiduel

Une fois les mesures choisies, on recote les scénarios. Le risque résiduel est ce qui reste. Il doit être connu et accepté formellement par la direction, car c'est elle qui en porte la responsabilité.

### 9. Établir un plan d'action hiérarchisé

Les mesures retenues sont classées par priorité, avec un responsable, un budget et une échéance. Les mesures rapides et peu coûteuses (une procédure, une sensibilisation) côtoient les investissements plus lourds, et le plan doit montrer cette progression.

### 10. Réviser régulièrement

Une analyse de risques vieillit. Un changement d'activité, un déménagement, un incident, une nouvelle exposition ou un événement particulier imposent de la reprendre. Mieux vaut fixer d'emblée une date de révision.

## Un exemple illustratif

L'exemple suivant est fictif et simplifié, il sert uniquement à illustrer la méthode.

Une entreprise occupe trois étages d'un immeuble de bureaux en ville. Son principal actif : ses collaborateurs, puis des données clients sensibles et du matériel informatique. L'accueil est partagé avec d'autres locataires.

L'analyse retient plusieurs scénarios, dont celui-ci : une personne extérieure suit un collaborateur à l'entrée du parking, monte aux étages sans passer par l'accueil et emporte des ordinateurs portables laissés sur les bureaux. La vulnérabilité principale n'est pas technique : le badge existe, mais la porte du parking reste ouverte de longues secondes et personne n'ose interpeller un inconnu.

Probabilité jugée élevée, impact jugé moyen pour le matériel mais élevé si les données clients sont concernées. Le risque est classé prioritaire. Traitement retenu : réduire, par un réglage de la porte, une règle de rangement du matériel en fin de journée et une [sensibilisation des collaborateurs](/blog/sensibilisation-surete-collaborateurs) à l'interpellation courtoise. Une partie du dommage matériel est transférée à l'assurance. Le risque résiduel est accepté par la direction, avec une révision prévue après une première période de fonctionnement.

On le voit, la mesure la plus utile n'était pas celle qu'on aurait achetée spontanément.

## Les erreurs fréquentes

- **Commencer par les solutions** : choisir des équipements avant d'avoir identifié les risques.
- **Confondre menace et risque** : « le terrorisme » n'est pas un risque analysable, un scénario précis l'est.
- **Coter sans critères** : des notes attribuées au ressenti rendent la matrice arbitraire.
- **Travailler seul** : sans la direction, les exploitants et le terrain, l'analyse passe à côté de l'essentiel.
- **Ignorer le facteur humain** : les procédures contournées et les réflexes absents sont souvent les premières vulnérabilités.
- **Ne jamais éprouver les conclusions** : une analyse qui n'est confrontée ni à un test ni à un exercice reste une hypothèse.
- **Oublier de réviser** : le site change, la menace aussi.

## De l'analyse au concept de sûreté

L'analyse de risques est le cœur du [concept de sûreté](/blog/concept-de-surete). Le concept reprend ses conclusions et les transforme en dispositif : objectifs de protection, mesures organisées en couches, responsabilités, procédures et calendrier. Pour un site recevant du public ou une manifestation, ce concept est examiné par les autorités, qui vérifient précisément que les mesures découlent d'une analyse sérieuse.

C'est pour cela qu'il est utile de confier l'analyse à un professionnel : il apporte un regard extérieur sur des vulnérabilités que l'habitude rend invisibles, il connaît les scénarios réalistes, il sait dimensionner sans surenchère, et il peut éprouver ses conclusions sur le terrain avant de les mettre en place.

<!-- ANECDOTE : un cas où l'analyse de risques a conduit un client à renoncer à une mesure coûteuse au profit d'une mesure simple et plus efficace -->

## Questions fréquentes

### Quelle est la différence entre une analyse de risques et un audit de sûreté ?

L'analyse de risques identifie et hiérarchise les scénarios qui menacent l'organisation. L'[audit de sûreté](/blog/audit-de-surete-site) évalue l'état réel des mesures en place sur un site. Les deux se nourrissent : l'audit révèle des vulnérabilités, l'analyse dit lesquelles comptent le plus.

### À quelle fréquence faut-il refaire l'analyse ?

Il n'existe pas de règle unique. Elle doit être revue à chaque changement significatif (activité, locaux, exposition, incident) et selon une périodicité fixée dès le départ par la direction.

### Faut-il une méthode certifiée ?

Ce qui compte, c'est une méthode cohérente, documentée et appliquée avec rigueur. Des cadres reconnus comme ISO 31000 donnent des principes généraux utiles, mais la qualité d'une analyse tient surtout à la pertinence des scénarios et à la connaissance du terrain.

---

*Vous souhaitez évaluer les risques de votre site, de votre organisation ou de votre événement ? Nous menons l'analyse avec vous et la traduisons en un concept de sûreté applicable. Découvrez notre offre d'[audit et de conseil en sûreté](/services#consulting) ou [contactez-nous](/contact) pour un premier échange.*
