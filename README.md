# Studio Éther - Site Portfolio

Un site portfolio moderne et professionnel avec gestion de contenu facile et formulaire de contact fonctionnel.

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Personnalisation](#personnalisation)
- [Configuration EmailJS](#configuration-emailjs)
- [Hébergement](#hébergement)
- [Conseils & Optimisations](#conseils--optimisations)

---

## ✨ Fonctionnalités

✅ **Gestion de contenu simplifiée** - Tout le contenu est dans `data.js`  
✅ **Design moderne** - Animations fluides, effets de parallaxe  
✅ **Responsive** - Optimisé mobile, tablette et desktop  
✅ **Portfolio filtrable** - Tri par catégorie (web, design, branding)  
✅ **Formulaire de contact** - Intégration EmailJS pour recevoir les messages  
✅ **Performance optimisée** - Chargement rapide, animations CSS  
✅ **Accessibilité** - Navigation au clavier, labels ARIA

---

## 📁 Structure du projet

```
ether-studio/
│
├── index.html          # Structure HTML du site
├── styles.css          # Tous les styles et animations
├── script.js           # Fonctionnalités JavaScript
├── data.js             # ⭐ CONTENU DU SITE (À MODIFIER)
└── README.md           # Ce fichier
```

---

## 🚀 Installation

### Méthode 1 : Ouverture locale (test rapide)

1. Télécharge tous les fichiers dans un dossier
2. Double-clique sur `index.html`
3. Le site s'ouvre dans ton navigateur

### Méthode 2 : Serveur local (recommandé pour développement)

Si tu as Python installé :

```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Ensuite va sur : `http://localhost:8000`

### Méthode 3 : Extension VS Code

Si tu utilises Visual Studio Code :
- Installe l'extension "Live Server"
- Clique droit sur `index.html` → "Open with Live Server"

---

## 🎨 Personnalisation

### 1. Modifier le contenu (PRIORITAIRE)

**Fichier : `data.js`**

#### Ajouter/modifier des services

```javascript
services: [
    {
        icon: "🎯",              // Emoji ou icône
        title: "Ton service",
        description: "Description de ton service"
    },
    // Ajoute autant de services que tu veux
]
```

#### Ajouter/modifier des projets portfolio

```javascript
portfolio: [
    {
        title: "Nom du projet",
        category: "web",         // "web", "design" ou "branding"
        description: "Description courte",
        gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
        link: "#",               // Lien vers le projet
        image: null              // Ou "images/projet.jpg"
    },
]
```

**Pour utiliser des images au lieu de gradients :**

1. Crée un dossier `images/` dans ton projet
2. Ajoute tes images de projet (format recommandé : JPG, 1200x800px)
3. Dans `data.js`, remplace :
   ```javascript
   image: "images/mon-projet.jpg"
   ```

#### Modifier les informations de contact

```javascript
contact: {
    email: "ton-email@example.com",
    location: "Ta ville, Pays",
    availability: "Disponibilité",
}
```

### 2. Personnaliser les couleurs

**Fichier : `styles.css`** (début du fichier)

```css
:root {
    --bg: #0a0a0f;              /* Couleur de fond */
    --text: #e8e8f0;            /* Couleur du texte */
    --accent: #6366f1;          /* Couleur principale */
    --accent-light: #818cf8;    /* Couleur secondaire */
    --surface: #1a1a24;         /* Couleur des cartes */
}
```

**Exemples de palettes :**

Bleu moderne (actuel) :
```css
--accent: #6366f1;
--accent-light: #818cf8;
```

Vert émeraude :
```css
--accent: #10b981;
--accent-light: #34d399;
```

Rose vibrant :
```css
--accent: #ec4899;
--accent-light: #f472b6;
```

Orange dynamique :
```css
--accent: #f59e0b;
--accent-light: #fbbf24;
```

### 3. Changer le logo/nom

Dans `index.html`, ligne ~27 :
```html
<div class="logo">Éther</div>
```

Remplace "Éther" par ton nom de studio.

---

## 📧 Configuration EmailJS

Le formulaire de contact fonctionne avec EmailJS (gratuit, 200 emails/mois).

### Étape 1 : Créer un compte EmailJS

1. Va sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crée un compte gratuit
3. Confirme ton email

### Étape 2 : Configurer le service email

1. Dans le dashboard EmailJS, va dans **"Email Services"**
2. Clique sur **"Add New Service"**
3. Choisis ton fournisseur (Gmail, Outlook, etc.)
4. Suis les instructions pour connecter ton email
5. Note le **Service ID** (ex: `service_abc123`)

### Étape 3 : Créer un template

1. Va dans **"Email Templates"**
2. Clique sur **"Create New Template"**
3. Utilise ce template :

**Subject :**
```
Nouveau message de {{from_name}}
```

**Content :**
```
Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Sauvegarde et note le **Template ID** (ex: `template_xyz789`)

### Étape 4 : Récupérer la clé publique

1. Va dans **"Account"** → **"General"**
2. Copie ta **Public Key** (ex: `user_abcd1234`)

### Étape 5 : Configurer dans ton site

Dans `data.js`, remplace :

```javascript
emailjs: {
    serviceId: "service_abc123",      // Ton Service ID
    templateId: "template_xyz789",    // Ton Template ID
    publicKey: "user_abcd1234"        // Ta Public Key
}
```

**C'est tout !** Le formulaire est maintenant fonctionnel. 🎉

---

## 🌐 Hébergement

### Option 1 : Netlify (RECOMMANDÉ - 100% gratuit)

**Avantages :** Rapide, SSL gratuit, déploiement automatique, pas de pub

**Installation :**

1. Va sur [netlify.com](https://www.netlify.com/)
2. Crée un compte (connexion GitHub possible)
3. Glisse-dépose ton dossier `ether-studio` sur Netlify
4. Ton site est en ligne en 10 secondes !

**Bonus :** Tu peux connecter un nom de domaine personnalisé gratuitement.

### Option 2 : Vercel (Excellente alternative)

Même principe que Netlify, interface légèrement différente.
[vercel.com](https://vercel.com/)

### Option 3 : GitHub Pages (Gratuit)

Si tu connais Git :

1. Crée un repo GitHub
2. Push ton code
3. Active GitHub Pages dans Settings
4. Ton site sera sur `username.github.io/ether-studio`

### Option 4 : Byet Host (Gratuit avec limitations)

**⚠️ Attention :**
- Publicités forcées (pas pro pour un portfolio)
- Serveurs parfois lents
- Limitations techniques

**Si tu veux quand même l'utiliser :**

1. Crée un compte sur [byet.host](https://byet.host/)
2. Crée un site web
3. Upload tes fichiers via FTP :
   - Serveur : voir dans ton panel Byet
   - Utilisateur : ton username
   - Mot de passe : ton mot de passe
4. Place les fichiers dans le dossier `htdocs/`

**Recommandation :** Utilise plutôt Netlify, c'est plus professionnel et vraiment gratuit sans pub.

---

## 💡 Conseils & Optimisations

### Ajouter du contenu facilement

**Services :** Ouvre `data.js`, copie un service existant, modifie les valeurs.

**Projets :** Pareil ! Copie un projet, change le titre, la description, la catégorie.

**Pas besoin de toucher au HTML ou CSS !**

### Optimiser les images

1. **Taille :** Max 1200px de large pour le portfolio
2. **Format :** Utilise JPG pour les photos, PNG pour les logos
3. **Compression :** Utilise [TinyPNG](https://tinypng.com/) pour réduire le poids
4. **Nom de fichier :** `projet-sonova.jpg` (pas d'espaces, pas d'accents)

### Ajouter un favicon

1. Crée une icône 32x32px
2. Nomme-la `favicon.ico`
3. Place-la à la racine du projet
4. Ajoute dans `<head>` de `index.html` :
   ```html
   <link rel="icon" href="favicon.ico">
   ```

### Ajouter Google Analytics (optionnel)

Pour suivre les visites :

1. Crée un compte [Google Analytics](https://analytics.google.com/)
2. Récupère ton ID de suivi (ex: `G-XXXXXXXXXX`)
3. Ajoute avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### SEO - Référencement

Pour mieux apparaître sur Google :

1. **Meta description** : Déjà présente dans `index.html` (ligne 6)
2. **Titres uniques** : Change le `<title>` pour chaque page si tu en ajoutes
3. **Sitemap** : Génère un fichier `sitemap.xml` sur [xml-sitemaps.com](https://www.xml-sitemaps.com/)
4. **Google Search Console** : Inscris ton site pour voir ton référencement

---

## 🐛 Résolution de problèmes

### Le curseur personnalisé ne s'affiche pas sur mobile
**C'est normal !** Le curseur ne fonctionne que sur desktop avec souris.

### Les animations sont saccadées
- Vérifie que tes images ne sont pas trop lourdes
- Teste sur un autre navigateur
- Sur mobile, certaines animations sont désactivées pour la performance

### Le formulaire ne fonctionne pas
1. Vérifie que tu as bien configuré EmailJS dans `data.js`
2. Ouvre la console du navigateur (F12) pour voir les erreurs
3. Teste avec un autre email

### Le site ne s'affiche pas correctement
- Vérifie que tous les fichiers sont au même niveau (même dossier)
- Ouvre la console (F12) pour voir les erreurs
- Assure-toi que ton navigateur est à jour

---

## 📞 Support

Si tu as des questions ou besoin d'aide :

1. Vérifie ce README en détail
2. Regarde les commentaires dans `data.js`
3. Consulte la console du navigateur (F12) pour les erreurs

---

## 📝 Checklist avant mise en ligne

- [ ] J'ai modifié tous les contenus dans `data.js`
- [ ] J'ai remplacé les projets fictifs par mes vrais projets
- [ ] J'ai ajouté des images de qualité (ou vérifié les gradients)
- [ ] J'ai configuré EmailJS (ou accepté le mode démo)
- [ ] J'ai testé le site sur mobile et desktop
- [ ] J'ai vérifié tous les liens
- [ ] J'ai personnalisé le logo/nom
- [ ] J'ai ajouté un favicon
- [ ] J'ai testé le formulaire de contact
- [ ] J'ai choisi ma plateforme d'hébergement

---

**Bon lancement ! 🚀**

Si tu as des questions, n'hésite pas !
