# Documentation API REST — Express Backend

**Base URL** : `http://localhost:3000`

---

### Product

| Champ         | Type     | Description                     |
|---------------|----------|---------------------------------|
| `id`          | `string` | Identifiant unique (auto-généré)|
| `name`        | `string` | Nom du produit (unique)         |
| `description` | `string` | Description du produit          |
| `price`       | `number` | Prix en euros                   |
| `category`    | `string` | Catégorie du produit            |
| `stock`       | `number` | Quantité en stock               |

---

## Routes `/products`

### Lister tous les produits

```
GET /products
```

**Réponse** `200` : tableau de `Product[]`

---

### Récupérer un produit par ID

```
GET /products/:id
```

| Paramètre | Type     | Description            |
|-----------|----------|------------------------|
| `id`      | `string` | Identifiant du produit |

**Réponse** `200` : objet `Product`
**Réponse** `404` : `{ "message": "Produit non trouvé" }`

---

### Récupérer un produit par nom

```
GET /products/name/:name
```

| Paramètre | Type     | Description       |
|-----------|----------|-------------------|
| `name`    | `string` | Nom du produit    |

**Réponse** `200` : objet `Product`
**Réponse** `404` : `{ "message": "Produit non trouvé" }`

---

### Filtrer les produits par catégorie

```
GET /products/category/:category
```

| Paramètre  | Type     | Description                |
|------------|----------|----------------------------|
| `category` | `string` | Catégorie du produit       |

**Catégories disponibles** : `informatique`, `smartphone`, `audio`, `accessoire`, `tablette`, `stockage`, `tv`, `gaming`, `photo`, `composant`, `wearable`, `maison`, `réseau`, `mobilier`

**Réponse** `200` : tableau de `Product[]`

---

### Vérifier si un produit existe

```
GET /products/exists/:name
```

**Réponse** `200` : `true` ou `false`

---

### Compter le nombre total de produits

```
GET /products/count/total
```

**Réponse** `200` : `number`

---

### Créer un produit

```
POST /products
Content-Type: application/json
```

**Corps de la requête** :

```json
{
  "name": "Nouveau Produit",
  "description": "Description du produit",
  "price": 49.99,
  "category": "accessoire",
  "stock": 10
}
```

**Réponse** `200` : objet `Product` créé (avec `id` généré)
**Réponse** `400` : `{ "message": "Produit avec ce nom existe déjà" }`

---

### Modifier un produit

```
PUT /products/:id
Content-Type: application/json
```

**Corps de la requête** : même structure que la création.

**Réponse** `200` : objet `Product` mis à jour
**Réponse** `404` : `{ "message": "Produit non trouvé" }`

---

### Supprimer un produit par ID

```
DELETE /products/:id
```

**Réponse** `200` : `{ "message": "Produit avec id {id} supprimé" }`
**Réponse** `404` : `{ "message": "Produit non trouvé" }`

---

### Supprimer un produit par nom

```
DELETE /products/name/:name
```

**Réponse** `200` : `{ "message": "Produit \"{name}\" supprimé" }`
**Réponse** `404` : `{ "message": "Produit non trouvé" }`

---

## Gestion des erreurs

Toute erreur serveur non gérée retourne :

```
HTTP 500
```

```json
{
  "error": {
    "message": "Description de l'erreur"
  }
}
```
