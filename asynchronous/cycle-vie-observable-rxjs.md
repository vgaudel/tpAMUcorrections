# Cycle de vie d’un Observable RxJS

Un Observable a un cycle de vie très simple en **3 grandes phases**.

---

## 1. Création

On crée l’Observable.

Exemple conceptuel :

```js
const obs$ = new Observable((observer) => {
  ...
});
```

À ce moment-là, **rien ne se passe encore**.

> Un Observable est souvent **paresseux** : il attend qu’on s’abonne.

---

## 2. Souscription

Quand on fait :

```js
obs$.subscribe(...)
```

alors l’Observable démarre réellement.

C’est à ce moment qu’il :

- lance son traitement,
- écoute une source,
- fait un fetch,
- démarre un timer,
- ou émet des valeurs.

---

## 3. Émissions

Pendant son exécution, il peut envoyer trois types de notifications :

### a) next
Envoie une valeur

```js
observer.next(data);
```

Cela déclenche :

```js
next: (data) => { ... }
```

Il peut y avoir **0, 1 ou plusieurs** appels à next.

---

### b) error
Signale une erreur

```js
observer.error(err);
```

Cela déclenche :

```js
error: (err) => { ... }
```

Quand il y a une erreur, le flux s’arrête immédiatement.

---

### c) complete
Indique que tout est terminé normalement

```js
observer.complete();
```

Cela déclenche :

```js
complete: () => { ... }
```

Après complete, il n’y a plus aucune émission.

---

## Règle importante

Un Observable peut faire :

- plusieurs next
- puis complete

**ou**

- plusieurs next
- puis error

Mais **jamais les deux**.

En résumé, la fin est :

$$
\text{complete} \quad \text{ou} \quad \text{error}
$$

---

## Dans ton exemple

Dans le fichier d’exemple Observable, le cycle est :

1. création de l’Observable dans la fonction
2. appel à subscribe
3. fetch HTTP lancé
4. si succès :
   - next avec les données
   - complete
5. si problème :
   - error

---

## Schéma mental simple

```text
création -> subscribe -> next -> next -> ... -> complete
                               \
                                -> error
```

---

## Différence avec une Promise

Une Promise :

- produit une seule valeur ou une seule erreur

Un Observable :

- peut produire **plusieurs valeurs dans le temps**
