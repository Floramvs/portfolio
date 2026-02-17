# 📄 GUIDE : Pages de Détail des Projets

## 🎯 Vue d'ensemble

Ton site a maintenant un **système de pages de détail** pour chaque projet. Quand quelqu'un clique sur "Voir le projet", il accède à une page complète avec :

- Description détaillée
- Challenge et solution
- Technologies utilisées
- Galerie d'images
- Résultats mesurables
- Liens vers le projet
- Navigation vers le projet suivant

---

## 📁 Structure des fichiers

```
ether-studio/
├── index.html                      # Page d'accueil
├── data.js                         # Données du portfolio (vue grille)
├── data-projets-details.js         # ⭐ Données DÉTAILLÉES des projets
├── projet-template.html            # Template des pages projet
├── projet-styles.css               # Styles des pages projet
├── generer-pages-projets.py        # Script générateur (optionnel)
│
└── projects/                       # Dossier avec toutes les pages
    ├── sonova.html                 # Page de détail Sonova
    ├── luna-cosmetics.html         # Page de détail Luna
    └── [autres-projets].html
```

---

## ⚡ MÉTHODE RAPIDE : Ajouter un projet

### Étape 1 : Ajoute les infos détaillées dans `data-projets-details.js`

Ouvre le fichier et ajoute ton projet :

```javascript
"nom-du-projet": {  // ← ID unique (sera le nom du fichier)
    // INFORMATIONS DE BASE
    title: "Nom du Projet",
    subtitle: "Slogan ou description courte",
    category: "Application Mobile",  // ou "Web" ou "Branding"
    year: "2024",
    client: "Nom du client",
    
    // HERO
    heroImage: null,  // "images/projet-hero.jpg" si tu as une image
    heroGradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
    
    // DESCRIPTION
    description: "Description du projet en 2-3 phrases maximum.",
    
    // CHALLENGE
    challenge: "Quel était le problème à résoudre ?",
    
    // SOLUTION
    solution: "Comment as-tu résolu ce problème ?",
    
    // TECHNOLOGIES
    technologies: [
        "Tech 1",
        "Tech 2",
        "Tech 3"
    ],
    
    // TON RÔLE
    role: [
        "Rôle 1",
        "Rôle 2"
    ],
    
    // GALERIE
    gallery: [
        {
            image: "images/projet-1.jpg",
            caption: "Description de l'image"
        }
    ],
    
    // RÉSULTATS
    results: [
        "Résultat mesurable 1",
        "Impact 2"
    ],
    
    // LIENS
    links: {
        github: "https://github.com/...",  // ou null
        demo: "https://demo.com",          // ou null
        behance: null,
        other: null
    },
    
    // PROJET SUIVANT (optionnel)
    nextProject: "autre-projet-id"
}
```

### Étape 2 : Crée la page HTML

**2 options :**

#### Option A : Copie-colle (Simple)

1. Ouvre `projects/sonova.html`
2. Copie tout le contenu
3. Crée un nouveau fichier : `projects/ton-projet.html`
4. Remplace toutes les infos par les tiennes

#### Option B : Générateur automatique (Avancé)

Si tu as Python installé :

```bash
python generer-pages-projets.py
```

Le script lit `data-projets-details.js` et génère **automatiquement** toutes les pages ! 🚀

### Étape 3 : Lie la page dans `data.js`

Dans ton fichier `data.js` principal, change le lien :

```javascript
{
    title: "Ton Projet",
    category: "web",
    description: "Description courte",
    gradient: "...",
    link: "projects/ton-projet.html",  // ← Lien vers ta page
    image: null
}
```

**C'est tout !** 🎉

---

## 🖼️ Ajouter des images au projet

### Images pour la galerie

1. Place tes images dans `images/` :
   ```
   images/
   ├── projet-1.jpg
   ├── projet-2.jpg
   └── projet-3.jpg
   ```

2. Dans `data-projets-details.js`, ajoute-les à la galerie :

```javascript
gallery: [
    {
        image: "images/projet-1.jpg",
        caption: "Interface principale"
    },
    {
        image: "images/projet-2.jpg",
        caption: "Dashboard admin"
    }
]
```

3. Dans la page HTML, remplace les placeholders :

**AVANT :**
```html
<div class="gallery-placeholder">
    <span>📸 Placeholder</span>
</div>
```

**APRÈS :**
```html
<img src="../images/projet-1.jpg" alt="Interface principale">
```

### Image hero (bannière principale)

Dans `data-projets-details.js` :

```javascript
heroImage: "images/projet-hero.jpg",  // ← Ton image hero
```

La page utilisera automatiquement cette image au lieu du gradient.

---

## 🎨 Personnaliser le design

### Changer les couleurs du gradient

Dans `data-projets-details.js` :

```javascript
heroGradient: "linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)",
```

**Générateur de gradients :** [cssgradient.io](https://cssgradient.io/)

### Modifier le style

Ouvre `projet-styles.css` pour :
- Changer les espacements
- Modifier les animations
- Ajuster les tailles de texte
- Personnaliser les couleurs

---

## 📝 EXEMPLE COMPLET : Ajouter le projet "BullRE+ Energy"

### 1. Dans `data-projets-details.js` :

```javascript
"bullre-energy": {
    title: "BullRE+ Energy",
    subtitle: "Campagne Marketing Instagram",
    category: "Branding",
    year: "2024",
    client: "BullRE+",
    
    heroImage: null,
    heroGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    
    description: "Création d'une campagne marketing complète pour Instagram incluant design de Stories, calendrier éditorial et stratégie de contenu.",
    
    challenge: "Lancer une nouvelle marque de boisson énergétique sur un marché saturé et capter l'attention de la Gen Z sur Instagram.",
    
    solution: "Une campagne visuelle audacieuse avec des couleurs vives, des animations dynamiques et un ton décalé qui résonne avec la cible.",
    
    technologies: [
        "Adobe Photoshop",
        "Figma",
        "Canva",
        "Instagram API"
    ],
    
    role: [
        "Direction artistique",
        "Design de Stories",
        "Stratégie de contenu",
        "Calendrier éditorial"
    ],
    
    gallery: [
        {
            image: "images/bullre-1.jpg",
            caption: "Stories Instagram - Collection été"
        },
        {
            image: "images/bullre-2.jpg",
            caption: "Posts feed principal"
        }
    ],
    
    results: [
        "+250% d'engagement sur les Stories",
        "1M+ d'impressions en 3 mois",
        "+5000 nouveaux followers",
        "Taux de conversion de 12%"
    ],
    
    links: {
        github: null,
        demo: null,
        behance: "https://www.behance.net/...",
        other: "https://instagram.com/bullreplus"
    },
    
    nextProject: "sonova"
}
```

### 2. Crée `projects/bullre-energy.html`

Copie `projects/sonova.html` et remplace toutes les infos.

**OU** lance le générateur :

```bash
python generer-pages-projets.py
```

### 3. Dans `data.js` :

```javascript
{
    title: "BullRE+ Energy",
    category: "branding",
    description: "Campagne marketing Instagram",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    link: "projects/bullre-energy.html",  // ← Lien !
    image: "images/bullre-preview.jpg"
}
```

**Terminé !** Le projet apparaît dans le portfolio avec sa page de détail. ✨

---

## 🚀 Utiliser le générateur Python (optionnel)

### Avantages

- Génère **toutes** les pages automatiquement
- Pas besoin de copier-coller
- Mise à jour facile de tous les projets

### Installation

Si tu n'as pas Python :
1. Télécharge sur [python.org](https://www.python.org/downloads/)
2. Installe-le (coche "Add to PATH")

### Utilisation

```bash
# Va dans ton dossier
cd ether-studio

# Lance le générateur
python generer-pages-projets.py
```

**Résultat :**

```
🚀 GÉNÉRATEUR DE PAGES PROJET

📖 Lecture des données...
📄 Lecture du template...
📁 Dossier projects/ créé

✨ Génération de 2 pages...

   → Génération de sonova.html...
      ✓ projects/sonova.html
   → Génération de luna-cosmetics.html...
      ✓ projects/luna-cosmetics.html

🎉 Terminé! 2 pages générées dans projects/
```

---

## ❓ Questions fréquentes

### Comment supprimer un projet ?

1. Supprime son entrée dans `data-projets-details.js`
2. Supprime le fichier HTML dans `projects/`
3. Supprime son entrée dans `data.js`

### Dois-je utiliser le générateur Python ?

**Non !** C'est optionnel. Tu peux créer les pages manuellement en copiant-collant.

### Puis-je avoir plus de 3 images dans la galerie ?

Oui ! Ajoute autant d'objets que tu veux dans le tableau `gallery`.

### Comment désactiver "Projet suivant" ?

Dans `data-projets-details.js`, mets :
```javascript
nextProject: null
```

### Les pages de détail fonctionnent-elles hors ligne ?

Oui ! Tout est en HTML/CSS/JS statique.

---

## 🎯 Checklist : Ajouter un nouveau projet

- [ ] Ajouter les détails dans `data-projets-details.js`
- [ ] Créer la page HTML (copie ou générateur)
- [ ] Ajouter/remplacer les images si besoin
- [ ] Mettre à jour le lien dans `data.js`
- [ ] Tester la page dans le navigateur
- [ ] Vérifier que "Voir le projet" fonctionne
- [ ] Vérifier le lien "Projet suivant"

---

## 💡 Conseils

**Rédiger une bonne description :**
- 2-3 phrases maximum
- Contexte + Objectif + Résultat
- Clair et percutant

**Challenge vs Solution :**
- Challenge = Le problème initial
- Solution = Comment tu l'as résolu

**Résultats :**
- Utilise des chiffres quand possible
- Sois spécifique et mesurable
- Maximum 4-6 résultats

**Images :**
- Privilégie la qualité à la quantité
- 3-4 images bien choisies > 10 images moyennes
- Capture d'écran, mockups, photos produit

---

**Besoin d'aide ? Consulte :**
- `README.md` : Guide général du site
- `GUIDE-EXPRESS.md` : Guide rapide
- `GUIDE-IMAGES.md` : Guide des images

🚀 **Bon lancement de tes pages projet !**
