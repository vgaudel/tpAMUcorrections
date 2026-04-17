# Déploiement Angular — notions clés à comprendre

## Objectif

Ce document explique de façon simple et pédagogique plusieurs notions importantes autour du déploiement d’une application Angular.

Les thèmes abordés sont :

- les commandes de compilation,
- les modes de compilation,
- les compilations AOT et JIT,
- la gestion du base href,
- les règles de réécriture.

L’objectif est de comprendre **ce que l’on fait**, et pas seulement de réciter des commandes.

---

## 1. Déploiement : de quoi parle-t-on ?

Déployer une application, c’est la rendre disponible pour les utilisateurs.

En Angular, cela signifie généralement :

1. compiler l’application,
2. récupérer les fichiers générés,
3. les publier sur un serveur web.

Pendant le développement, on travaille avec le code source.

En production, on ne publie pas le code source directement : on publie la version compilée.

---

## 2. Les commandes de compilation

Dans un projet Angular, la commande la plus classique est :

```bash
npm run build
```

Cette commande lance la construction du projet et génère un dossier de sortie, généralement dans dist.

On peut aussi utiliser directement Angular CLI :

```bash
ng build
```

Les deux idées sont proches :
- `npm run build` passe par le script du projet,
- `ng build` appelle directement l’outil Angular.

---

## 3. À quoi sert la compilation ?

La compilation transforme le projet Angular en fichiers exploitables par le navigateur.

Angular prépare alors :
- du HTML,
- du CSS,
- du JavaScript optimisé.

C’est ce résultat final que l’on peut mettre sur un serveur.

---

## 4. Les modes de compilation

Angular peut compiler dans différents contextes.

Les deux plus connus sont :

- le mode développement,
- le mode production.

### Mode développement

Il est pratique pour coder et tester.

Caractéristiques :
- messages d’erreur plus détaillés,
- source maps,
- moins d’optimisations,
- temps de compilation souvent plus souple pour le développeur.

### Mode production

Il est prévu pour la mise en ligne.

Caractéristiques :
- optimisation du code,
- fichiers plus compacts,
- meilleures performances,
- application plus légère pour l’utilisateur.

---

## 5. Exemple concret de différence

En développement, on veut surtout **comprendre** et **corriger**.

En production, on veut surtout **servir rapidement** l’application à l’utilisateur final.

On peut résumer ainsi :

- développement = confort du développeur,
- production = performance pour l’utilisateur.

---

## 6. Les compilations AOT et JIT

Ce sont deux façons pour Angular de préparer l’application.

### JIT — Just In Time

Le compilateur travaille au moment où l’application s’exécute.

Idée simple :
- une partie du travail se fait plus tard, au lancement.

C’est historiquement utile pendant le développement.

### AOT — Ahead Of Time

La compilation est faite **à l’avance**, avant que l’application n’arrive chez l’utilisateur.

Idée simple :
- Angular prépare tout en amont,
- le navigateur a moins de travail à faire ensuite.

---

## 7. Pourquoi AOT est intéressant

AOT apporte plusieurs avantages :

- démarrage plus rapide,
- moins de travail côté navigateur,
- meilleure détection de certaines erreurs en amont,
- meilleure préparation pour la production.

Aujourd’hui, Angular privilégie fortement ce mode pour les builds de production.

---

## 8. Résumé simple AOT vs JIT

| Mode | Idée principale | Usage habituel |
|---|---|---|
| JIT | compilation au moment de l’exécution | développement |
| AOT | compilation faite avant la mise en ligne | production |

---

## 9. La gestion du base href

Le `base href` indique à Angular **à partir de quelle racine le site est servi**.

C’est très important quand l’application n’est pas publiée à la racine du domaine.

### Exemple

Si l’application est disponible ici :

```text
https://monsite.com/
```

on est à la racine.

Mais si elle est disponible ici :

```text
https://monsite.com/tpamu-angular/
```

alors elle est dans un sous-dossier.

Angular doit le savoir pour construire correctement les chemins des ressources et du routage.

---

## 10. Comment définir le base href

Lors du build, on peut préciser :

```bash
ng build --base-href "/tpamu-angular/"
```

Cela indique à Angular que l’application sera servie depuis ce sous-dossier.

### Pourquoi c’est important ?

Si le base href est mauvais :
- les fichiers JS ou CSS peuvent ne pas être trouvés,
- les liens peuvent casser,
- l’application peut afficher une page vide ou des erreurs 404.

---

## 11. Les règles de réécriture

Les règles de réécriture concernent le serveur web.

Elles sont très importantes pour les applications Angular qui utilisent le routage côté client.

### Le problème

Quand on navigue dans Angular, on peut avoir une URL comme :

```text
/produits
```

ou

```text
/material
```

En réalité, ces routes sont gérées par Angular dans le navigateur.

Mais si l’utilisateur recharge la page directement sur cette URL, le serveur peut essayer de chercher un vrai fichier ou vrai dossier correspondant… et ne rien trouver.

Résultat : erreur 404.

---

## 12. Le rôle de la réécriture

Les règles de réécriture disent au serveur :

> si la route demandée ne correspond pas à un vrai fichier, renvoie plutôt index.html

Ainsi, Angular recharge l’application puis gère la route lui-même.

C’est essentiel pour que les liens fonctionnent même après actualisation de la page.

---

## 13. En langage simple

Sans réécriture :
- le serveur cherche un fichier qui n’existe pas,
- il renvoie une erreur.

Avec réécriture :
- le serveur redonne l’application Angular,
- Angular reprend la main sur la navigation.

---

## 14. Ce qu’il faut retenir

Pour bien déployer une application Angular, il faut penser à 5 choses :

1. lancer la bonne compilation,
2. distinguer développement et production,
3. comprendre que la production utilise une préparation optimisée,
4. définir le bon base href,
5. configurer les règles de réécriture sur le serveur.

---

## 15. Mini synthèse finale

### Les commandes de compilation
- elles fabriquent la version publiable

### Les modes de compilation
- développement pour coder
- production pour livrer

### AOT et JIT
- JIT : compilation plus tard
- AOT : compilation à l’avance

### Base href
- il indique où l’application sera hébergée

### Règles de réécriture
- elles évitent les erreurs 404 lors du rechargement d’une route Angular

---

## Conclusion pédagogique

Le déploiement Angular ne se limite pas à une commande.

C’est un ensemble de notions qui travaillent ensemble :
- la compilation,
- l’optimisation,
- l’URL de base,
- le comportement du serveur.

> Si ces éléments sont bien compris, la mise en production devient beaucoup plus simple à réussir.
