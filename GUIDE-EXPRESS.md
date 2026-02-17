# ⚡ GUIDE EXPRESS - 3 ÉTAPES

Tu veux modifier ton site ? C'est ULTRA simple !

---

## 🎯 MODIFIER TES SERVICES

### 📝 Étape unique : Ouvre `data.js`

Trouve la section `services:` et change le texte :

```javascript
services: [
    {
        icon: "✨",                    // Change l'emoji ici
        title: "Design UI/UX",         // Change le titre ici
        description: "Ta description"  // Change la description ici
    }
]
```

**Pour ajouter un service :** Copie tout un bloc `{...}` et modifie-le
**Pour supprimer un service :** Supprime tout le bloc `{...},`

**C'est tout !** Sauvegarde et rafraîchis ton navigateur (F5).

---

## 🖼️ AJOUTER TES IMAGES PORTFOLIO

### Étape 1 : Crée un dossier `images`
Dans ton dossier `ether-studio`, crée un nouveau dossier nommé : **images**

```
ether-studio/
├── index.html
├── data.js
└── images/  ← NOUVEAU dossier ici !
```

### Étape 2 : Ajoute tes images
Place tes images dans le dossier `images/`

**Exemple :** `images/sonova.jpg`

**Conseils :**
- Nomme-les simplement : `sonova.jpg`, `projet1.jpg`
- Pas d'espaces, pas d'accents
- Taille idéale : 1200×800 pixels
- Compresse-les sur [tinypng.com](https://tinypng.com)

### Étape 3 : Modifie `data.js`
Ouvre `data.js`, trouve ton projet et change cette ligne :

**AVANT :**
```javascript
image: null
```

**APRÈS :**
```javascript
image: "images/sonova.jpg"
```

**Exemple complet :**
```javascript
{
    title: "Sonova App",
    category: "web",
    description: "Application mobile",
    gradient: "linear-gradient(135deg, #6366f1, #818cf8)",
    link: "#",
    image: "images/sonova.jpg"  // ← TON IMAGE !
}
```

**C'est tout !** Sauvegarde et rafraîchis (F5).

---

## 📚 BESOIN DE PLUS DE DÉTAILS ?

✅ **Exemples commentés :** Ouvre `data-EXEMPLES-COMMENTES.js`
✅ **Guide complet images :** Ouvre `GUIDE-IMAGES.md`
✅ **Documentation complète :** Ouvre `README.md`

---

## ✨ RÉSUMÉ

**Services :** Modifie directement dans `data.js` section `services:`
**Images :** 
1. Crée dossier `images/`
2. Place tes images dedans
3. Change `image: null` → `image: "images/ton-image.jpg"`

**Facile, non ?** 🚀
