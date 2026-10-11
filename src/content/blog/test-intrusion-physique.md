---
title: "Test d'intrusion physique : comment on éprouve un site (et pourquoi ce n'est pas un pentest informatique)"
description: "Badges, talonnage, réaction des agents : le test d'intrusion physique révèle si votre site résiste vraiment. Cadre, types de tests, déroulé et rapport."
date: 2026-04-28
author: "DBA Sécurité"
category: "Tests & exercices"
draft: false
---

Votre siège dispose d'un contrôle d'accès par badge, d'une réception, de caméras et d'un agent de sécurité en soirée. Sur le papier, tout est en place. Mais une personne inconnue, bien habillée, un carton dans les bras, pourrait-elle entrer derrière un collaborateur pressé, monter à l'étage de la direction et repartir avec un ordinateur portable ? Personne ne le sait vraiment tant que personne n'a essayé. C'est exactement la question à laquelle répond un test d'intrusion physique.

## Qu'est-ce qu'un test d'intrusion physique ?

Un test d'intrusion physique consiste à mandater un professionnel pour tenter, dans un cadre strictement défini, de pénétrer un site, d'atteindre une zone protégée ou d'obtenir un bien ou une information, en utilisant les méthodes qu'emploierait un individu malveillant. L'objectif n'est pas de « gagner », mais de mesurer la résistance réelle d'un dispositif de sûreté face à une tentative crédible.

On parle aussi de « red team physique » : une équipe joue le rôle de l'adversaire, pendant que l'organisation testée réagit comme elle le ferait au quotidien, sans préparation particulière.

## Pourquoi ce n'est pas un pentest informatique

Le terme « pentest » est surtout associé à la cybersécurité, où des spécialistes cherchent des failles dans des réseaux, des applications ou des serveurs. Le test d'intrusion physique partage la même logique, mais pas le même terrain :

- **La cible** : on n'attaque pas un système d'information, mais un bâtiment, ses accès, ses occupants et ses procédures.
- **Les failles** : elles sont rarement techniques au sens strict. Une porte qui reste entrouverte, un badge prêté, une réception débordée ou une consigne mal comprise pèsent souvent plus lourd qu'une serrure de mauvaise qualité.
- **Le facteur humain** : il est au centre du test. On évalue la vigilance des collaborateurs, la réaction des agents et la capacité de l'organisation à donner l'alerte.
- **Les conséquences** : une intrusion physique réussie peut aussi ouvrir la porte au vol de données, par exemple via un poste laissé déverrouillé ou un document imprimé. Les deux approches sont donc complémentaires, et non concurrentes.

Une entreprise qui investit dans la cybersécurité sans jamais tester ses accès physiques laisse souvent sa porte d'entrée la moins surveillée ouverte.

## Ce qu'un test permet de vérifier

Un test d'intrusion physique répond à des questions concrètes :

- les mesures prévues dans le [concept de sûreté](/blog/concept-de-surete) sont-elles réellement appliquées sur le terrain ?
- les barrières successives retardent-elles suffisamment un intrus pour qu'une réaction soit possible ?
- les collaborateurs osent-ils interpeller une personne inconnue ?
- les agents de sécurité détectent-ils l'anomalie, et savent-ils quoi faire ensuite ?
- l'alerte remonte-t-elle jusqu'aux bonnes personnes ?

Un dispositif n'a de valeur que s'il a été conçu par un professionnel et éprouvé en conditions réelles. Le test est l'étape qui transforme une intention de protection en certitude, ou qui révèle qu'elle n'en était pas une.

## Le cadre : ce qui distingue un test d'une intrusion

Un test d'intrusion physique sans cadre écrit n'est pas un test : c'est une intrusion. Le cadre protège l'organisation, les collaborateurs et l'équipe de test. Il comprend au minimum :

- **Un mandat écrit** : signé par une personne habilitée à engager l'organisation, il définit les objectifs, la durée, les livrables et les conditions du test.
- **Une lettre d'autorisation** : portée par chaque membre de l'équipe pendant le test, elle permet de faire cesser immédiatement tout malentendu en cas d'interpellation par un agent ou par la police.
- **Un périmètre précis** : quels bâtiments, quels étages, quelles zones, quelles plages horaires. Ce qui est hors périmètre est explicitement exclu, notamment les locaux partagés avec d'autres occupants.
- **Des règles d'engagement** : ce qui est permis et ce qui ne l'est pas. Pas d'effraction, pas de dégât, pas de contact physique, pas de mise en danger, arrêt immédiat en cas de situation imprévue.
- **Un interlocuteur de confiance** : une personne de la direction, informée du test et joignable à tout moment, capable de confirmer l'autorisation et de désamorcer une situation.
- **Une éthique claire** : le test vise des défaillances d'organisation, jamais à piéger ou à sanctionner un collaborateur nommément. Les données personnelles éventuellement observées ne sont ni conservées ni exploitées.
- **La discrétion** : le nombre de personnes informées est réduit au strict nécessaire, sans quoi le test ne mesure plus rien.

## Les principaux types de tests

Selon les objectifs, le test combine plusieurs scénarios.

### Les accès et l'enveloppe du site

On vérifie les portes, les accès de service, les quais de livraison, les parkings, les issues de secours et les points de passage oubliés. L'idée est de repérer les chemins qu'un intrus emprunterait plutôt que l'entrée principale.

### Le talonnage (tailgating)

C'est l'une des techniques les plus simples et les plus efficaces : suivre une personne autorisée au moment où elle franchit un accès contrôlé. Le test mesure si les collaborateurs laissent passer quelqu'un par politesse, et si les sas ou tourniquets remplissent réellement leur rôle.

### Le contrôle des badges et des accréditations

Un badge porté de manière visible est-il vérifié ? Un badge de visiteur permet-il d'aller au-delà de la zone d'accueil ? Un faux badge grossier passe-t-il inaperçu ? Ce volet est particulièrement utile pour les événements, où les accréditations sont nombreuses et les contrôles rapides.

### L'ingénierie sociale

L'intrus se présente comme un technicien, un livreur, un candidat ou un consultant, et s'appuie sur la bonne volonté des personnes rencontrées pour obtenir un accès ou une information. Ce volet évalue directement la culture de sûreté de l'organisation, et nourrit utilement un programme de [sensibilisation des collaborateurs](/blog/sensibilisation-surete-collaborateurs).

### La réaction des agents et des équipes

On ne teste pas seulement la détection, mais ce qui se passe après. L'agent interpelle-t-il la personne ? Prévient-il sa hiérarchie ? Applique-t-il la procédure prévue ? Le temps entre la détection et la réaction est souvent plus révélateur que la détection elle-même.

### Le test de procédures

Certains tests portent sur une procédure précise : gestion d'un colis suspect, alerte, fermeture d'un site, accueil d'une personnalité. On vérifie que la procédure écrite est connue, comprise et applicable.

<!-- ANECDOTE : un exemple de test d'intrusion réel (anonymisé) où une faille simple et inattendue, par exemple une porte de service ou une réaction humaine, a permis d'atteindre une zone sensible malgré un dispositif technique sérieux -->

## Comment se déroule un test

Un test sérieux suit des étapes claires :

1. **Cadrage** : échange avec la direction pour définir les objectifs, les zones sensibles, les scénarios et les limites.
2. **Repérage** : observation du site depuis l'extérieur et recueil d'informations accessibles, comme le ferait un intrus.
3. **Préparation des scénarios** : choix des approches, des rôles et des moments les plus pertinents, par exemple un changement d'équipe ou une heure d'affluence.
4. **Exécution** : réalisation des tentatives dans le respect strict des règles d'engagement, avec documentation de chaque étape.
5. **Fin de test et débriefing à chaud** : information de l'interlocuteur de confiance, et si nécessaire des personnes concernées, pour clore le test sans laisser de malaise.
6. **Restitution** : remise d'un rapport et présentation des résultats à la direction.

## La restitution : un rapport hiérarchisé, pas une liste de reproches

Le rapport est le véritable livrable du test. Il doit être lisible par une direction, pas seulement par un spécialiste. Un bon rapport :

- décrit chaque tentative, son déroulement et son résultat ;
- distingue les faiblesses techniques, organisationnelles et humaines ;
- hiérarchise les constats selon leur gravité et leur facilité d'exploitation ;
- propose des mesures correctives réalistes, en commençant par celles qui apportent le plus pour un effort raisonnable ;
- souligne aussi ce qui a bien fonctionné, pour le consolider.

Les constats doivent viser des processus, jamais des personnes. Un collaborateur qui a laissé entrer un inconnu révèle un manque de formation ou une consigne inadaptée, pas une faute individuelle.

## Et après le test ?

Le test n'a de sens que s'il débouche sur des actions. Les suites habituelles :

- corriger rapidement les failles les plus simples, souvent organisationnelles ;
- mettre à jour le concept de sûreté et les procédures ;
- former et sensibiliser les équipes concernées ;
- revoir l'articulation des différentes couches de protection, selon la logique de la [défense en profondeur](/blog/defense-en-profondeur-securite-physique) ;
- planifier un nouveau test pour vérifier que les corrections ont porté leurs fruits.

Pour un événement ou un site recevant du public, dont les concepts de sécurité et de sûreté sont examinés par les autorités, un test ou un exercice préalable est aussi un argument solide : il montre que le dispositif a été éprouvé et pas seulement décrit. À plus grande échelle, c'est la logique de l'[exercice grandeur nature au Stade de Genève](/blog/exercice-grandeur-nature-stade-de-geneve) que nous avons piloté en mai 2025 avant l'Euro féminin, avec environ 400 intervenants de la police, des secours et de la sécurité privée.

## Les erreurs à éviter

- **Prévenir trop de monde.** Si les équipes savent qu'un test aura lieu, elles changent de comportement et le résultat ne reflète plus la réalité.
- **Négliger le cadre écrit.** Sans mandat ni lettre d'autorisation, un test peut dégénérer en incident réel, avec intervention de la police.
- **Tester sans objectif.** Un test « pour voir » produit des anecdotes, pas des décisions.
- **Chercher des coupables.** Sanctionner un collaborateur après un test détruit la confiance et décourage les signalements futurs.
- **Ranger le rapport dans un tiroir.** Un test sans plan d'action coûte de l'argent et n'améliore rien.
- **Ne tester qu'une fois.** Les équipes, les locaux et les menaces évoluent. Un dispositif se vérifie régulièrement.

## Questions fréquentes

### Le test d'intrusion physique est-il légal en Suisse ?

Oui, à condition qu'il soit réalisé avec l'accord écrit d'une personne habilitée à autoriser l'accès aux lieux, dans un périmètre défini et selon des règles d'engagement claires. C'est précisément le rôle du mandat et de la lettre d'autorisation. Lorsque le site est partagé avec d'autres occupants ou appartient à un tiers, leur accord doit aussi être obtenu.

### Les collaborateurs doivent-ils être prévenus ?

Pas individuellement, sinon le test perd sa valeur. En revanche, la direction et l'interlocuteur de confiance sont informés, et il est recommandé que les collaborateurs sachent de manière générale que l'organisation peut mener des contrôles de sûreté. Après le test, une communication bienveillante permet de transformer l'exercice en apprentissage collectif.

### Faut-il tester avant ou après la mise en place d'un dispositif ?

Les deux sont utiles. Avant, le test met en évidence les vulnérabilités et aide à dimensionner les mesures. Après, il vérifie que le dispositif conçu fonctionne réellement. Dans l'idéal, le test s'inscrit dans un cycle continu : analyse, mise en place, test, correction.

---

*Vous voulez savoir si votre site ou votre événement résisterait à une tentative d'intrusion ? Nous concevons et réalisons des tests d'intrusion physiques et des exercices adaptés à vos enjeux, dans un cadre rigoureux et discret. Découvrez nos [exercices et tests d'intrusion](/services#tests-intrusion) ou [contactez-nous](/contact) pour un premier échange.*
