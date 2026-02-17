# Guide d'actualisation des statistiques

Ce guide explique comment actualiser les statistiques de vos réseaux sociaux sur votre portfolio.

## 🎯 Deux méthodes disponibles

### Méthode 1 : Actualisation manuelle (Recommandée pour débuter)

La méthode la plus simple : modifiez directement le fichier `data.js`

1. Ouvrez le fichier `data.js`
2. Trouvez la section `socialStats`
3. Modifiez les chiffres pour chaque plateforme :

```javascript
socialStats: [
    {
        platform: "Twitter / X",
        followers: "1868",  // ← Modifier ici
        stats: [
            { label: "impressions en 2025", value: "202.3M" },  // ← Et ici
            // ...
        ]
    }
]
```

4. Sauvegardez le fichier
5. Rafraîchissez votre navigateur pour voir les changements

**Avantages :**
- Simple et rapide
- Aucune configuration technique requise
- Contrôle total sur les chiffres affichés

**Inconvénients :**
- Nécessite une mise à jour manuelle régulière
- Pas d'actualisation automatique

---

### Méthode 2 : Actualisation automatique via APIs

Pour avoir vos stats actualisées automatiquement toutes les heures.

#### Étape 1 : Intégrer le script API

Ajoutez cette ligne dans votre `index.html` juste avant la balise `</body>` :

```html
<script src="api-stats.js"></script>
```

#### Étape 2 : Configurer les APIs

Ouvrez le fichier `api-stats.js` et configurez vos clés API :

##### 🐦 Twitter (X) API

1. Créer un compte développeur
   - Allez sur https://developer.twitter.com/
   - Créez une app (gratuit)
   - Obtenez votre **Bearer Token**

2. Dans `api-stats.js`, remplacez :
```javascript
twitter: {
    bearerToken: 'VOTRE_BEARER_TOKEN_ICI',
    username: 'floramvs',
    enabled: true  // ← Passer à true
}
```

**Limite gratuite :** 1500 requêtes / 15 min (largement suffisant)

##### 📺 YouTube Data API

1. Configurer l'API
   - Allez sur https://console.cloud.google.com/
   - Créez un projet (gratuit)
   - Activez "YouTube Data API v3"
   - Créez une **clé API**

2. Trouvez votre Channel ID
   - Allez sur votre chaîne YouTube
   - L'ID est dans l'URL : `youtube.com/channel/VOTRE_CHANNEL_ID`

3. Dans `api-stats.js`, remplacez :
```javascript
youtube: {
    apiKey: 'VOTRE_CLE_API_ICI',
    channelId: 'VOTRE_CHANNEL_ID_ICI',
    enabled: true  // ← Passer à true
}
```

**Limite gratuite :** 10,000 unités / jour (~ 10,000 requêtes)

##### 📸 Instagram Graph API

**⚠️ Plus complexe - Nécessite un compte Business/Creator**

1. Prérequis
   - Convertir votre compte Instagram en compte Business ou Creator
   - Connecter votre compte à une page Facebook
   - Créer un compte Meta for Developers : https://developers.facebook.com/

2. Obtenir un Access Token
   - Créez une app sur Meta for Developers
   - Ajoutez "Instagram Graph API"
   - Générez un Access Token
   - Obtenez votre User ID Instagram

3. Dans `api-stats.js`, remplacez :
```javascript
instagram: {
    accessToken: 'VOTRE_ACCESS_TOKEN_ICI',
    userId: 'VOTRE_USER_ID_ICI',
    enabled: true  // ← Passer à true
}
```

**Limite gratuite :** 200 requêtes / heure

##### 🎵 TikTok API

**⚠️ Très complexe - Non recommandé**

L'API TikTok nécessite un processus OAuth complexe et une app enregistrée. Pour un portfolio personnel, il est recommandé d'utiliser la **mise à jour manuelle** pour TikTok.

Si vraiment nécessaire : https://developers.tiktok.com/

---

## 🔄 Comment ça fonctionne

Une fois configuré :

1. **Cache intelligent :** Les stats sont mises en cache pendant 1 heure pour éviter de surcharger les APIs
2. **Actualisation automatique :** Les stats se rafraîchissent toutes les heures automatiquement
3. **Pas d'interruption :** Si une API échoue, les anciennes stats restent affichées
4. **Performance :** Le cache évite les appels API inutiles

---

## 🛠️ Dépannage

### "Les stats ne se mettent pas à jour"

1. Vérifiez que le script est bien inclus dans `index.html`
2. Ouvrez la console du navigateur (F12) pour voir les erreurs
3. Vérifiez que vos clés API sont correctes et actives
4. Vérifiez que `enabled: true` est bien configuré

### "Erreur API"

- **Twitter :** Vérifiez votre Bearer Token
- **YouTube :** Vérifiez que l'API est activée sur Google Cloud
- **Instagram :** Vérifiez que votre compte est bien en mode Business/Creator

### "Les stats sont anciennes"

Le cache dure 1 heure. Pour forcer un rafraîchissement :
1. Ouvrez la console du navigateur (F12)
2. Tapez : `localStorage.clear()` puis Enter
3. Rafraîchissez la page

---

## 💰 Coûts

**Toutes les APIs utilisées ici sont GRATUITES** dans les limites d'utilisation suivantes :

- Twitter : Gratuit jusqu'à 1500 requêtes/15min
- YouTube : Gratuit jusqu'à 10,000 requêtes/jour
- Instagram : Gratuit jusqu'à 200 requêtes/heure
- TikTok : Gratuit mais complexe à configurer

Avec le système de cache (1h), vous restez **largement** dans les limites gratuites.

---

## 📊 Recommandation

**Pour débuter :** Utilisez la **Méthode 1 (Manuelle)**
- Simple, rapide, aucune configuration
- Mettez à jour vos stats une fois par mois

**Pour automatiser :** Configurez **Twitter et YouTube** en priorité
- Ce sont les APIs les plus simples à configurer
- Instagram nécessite un compte Business
- Laissez TikTok en manuel

---

## 🎨 Personnalisation

Vous pouvez modifier la fréquence d'actualisation dans `api-stats.js` :

```javascript
// Durée de cache en millisecondes
const CACHE_DURATION = 60 * 60 * 1000;  // 1 heure

// Pour changer à 2 heures :
const CACHE_DURATION = 2 * 60 * 60 * 1000;

// Pour changer à 30 minutes :
const CACHE_DURATION = 30 * 60 * 1000;
```

---

## ❓ Questions fréquentes

**Q: Puis-je mélanger manuel et automatique ?**
A: Oui ! Configurez les APIs que vous voulez automatiser, et laissez les autres en manuel.

**Q: Combien de temps prend la configuration ?**
A: Twitter et YouTube : 10-15 minutes chacun. Instagram : 30-45 minutes.

**Q: Est-ce sécurisé ?**
A: Les clés API doivent rester privées. Ne publiez JAMAIS le fichier `api-stats.js` avec vos vraies clés sur un dépôt public (GitHub, etc.).

**Q: Que faire si je dépasse les limites ?**
A: Augmentez la durée du cache (2h ou 4h). Avec 1 requête par heure, vous ne dépasserez jamais les limites gratuites.

---

Pour toute question : contact@ether-studio.com
