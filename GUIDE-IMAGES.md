# 📸 GUIDE : Ajouter des images à ton portfolio

## 📁 Structure des dossiers

### AVANT (sans images)
```
ether-studio/
├── index.html
├── data.js
├── styles.css
├── script.js
└── README.md
```

### APRÈS (avec images)
```
ether-studio/
├── index.html
├── data.js
├── styles.css
├── script.js
├── README.md
└── images/              ← NOUVEAU !
    ├── sonova.jpg       ← Tes images ici
    ├── luna.png
    ├── quantum.jpg
    └── aurora.jpg
```

---

## 🎯 ÉTAPE PAR ÉTAPE

### Étape 1 : Créer le dossier images

1. Ouvre ton dossier `ether-studio`
2. **Clique droit** → **Nouveau dossier**
3. Nomme-le exactement : `images` (tout en minuscule, sans accent)

### Étape 2 : Préparer tes images

**Taille recommandée :** 1200px × 800px (ratio 3:2)

**Format :**
- Photos/screenshots → `.jpg`
- Logos/illustrations → `.png`

**Nommer tes fichiers :**
✅ BON : `sonova.jpg`, `projet-luna.png`, `dashboard-01.jpg`
❌ MAUVAIS : `Mon Projet Sonova.jpg`, `Image 2024.png`, `photo (1).jpg`

**Règles de nommage :**
- Tout en minuscule
- Pas d'espaces (utilise des tirets `-`)
- Pas d'accents (é → e)
- Pas de caractères spéciaux

**Compresser (important !)** :
1. Va sur [https://tinypng.com/](https://tinypng.com/)
2. Glisse-dépose ton image
3. Télécharge la version compressée
4. Place-la dans le dossier `images/`

### Étape 3 : Modifier data.js

Ouvre `data.js` et trouve le projet que tu veux modifier :

```javascript
{
    title: "Sonova App",
    category: "web",
    description: "Application mobile • Audio adaptatif",
    gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
    link: "#",
    image: null  // ← CHANGE CETTE LIGNE
}
```

Remplace `image: null` par :

```javascript
image: "images/sonova.jpg"  // ← Chemin vers ton image
```

**Résultat final :**

```javascript
{
    title: "Sonova App",
    category: "web",
    description: "Application mobile • Audio adaptatif",
    gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
    link: "#",
    image: "images/sonova.jpg"  // ✅ Image affichée !
}
```

### Étape 4 : Tester

1. Sauvegarde `data.js`
2. Ouvre `index.html` dans ton navigateur
3. Appuie sur **F5** (ou Ctrl+R sur Windows, Cmd+R sur Mac)
4. Scroll jusqu'au portfolio

**Ton image s'affiche ! 🎉**

---

## ❓ Questions fréquentes

### L'image ne s'affiche pas
**Vérifie :**
- Le dossier s'appelle bien `images` (minuscule, au pluriel)
- Le chemin est correct : `image: "images/ton-fichier.jpg"`
- Le nom du fichier correspond exactement (respect majuscules/minuscules)
- L'image est bien dans le dossier `images/`

### Je veux utiliser un gradient ET une image
**Impossible** - Le site affiche l'image en priorité si elle est définie.
Si tu veux un gradient, mets : `image: null`

### Mon image est déformée
Utilise une image avec un **ratio 3:2** (ex: 1200×800, 900×600, etc.)

### L'image est trop lourde (lente à charger)
- Compresse-la sur [TinyPNG](https://tinypng.com/)
- Vise moins de 500 KB par image
- Convertis en JPG au lieu de PNG si c'est une photo

---

## 🎨 EXEMPLES COMPLETS

### Exemple 1 : Projet Sonova avec image

```javascript
{
    title: "Sonova",
    category: "web",
    description: "Application audio adaptative • React Native",
    gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
    link: "https://github.com/diesel/sonova",
    image: "images/sonova-mockup.jpg"  // ← Image !
}
```

### Exemple 2 : Projet sans image (gradient)

```javascript
{
    title: "Luna Cosmetics",
    category: "branding",
    description: "Identité visuelle • Packaging",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
    link: "#",
    image: null  // ← Pas d'image, utilise le gradient
}
```

### Exemple 3 : Mélanger images et gradients

```javascript
portfolio: [
    {
        title: "Sonova",
        image: "images/sonova.jpg"  // ← Avec image
    },
    {
        title: "Luna",
        image: null  // ← Avec gradient
    },
    {
        title: "Quantum",
        image: "images/quantum.png"  // ← Avec image
    }
]
```

---

## 🚀 TU ES PRÊT !

Maintenant tu sais comment :
✅ Créer le dossier images
✅ Préparer et nommer tes images
✅ Modifier data.js pour afficher tes images
✅ Mélanger images et gradients

**Besoin d'aide ?** Relis ce guide ou consulte le README.md principal !
