# Guide Complet : Configuration de l'API Instagram

Ce guide vous explique **étape par étape** comment configurer l'API Instagram pour afficher vos statistiques en temps réel.

⚠️ **IMPORTANT** : L'API Instagram nécessite un compte **Business** ou **Creator**. Vous ne pouvez pas utiliser un compte personnel classique.

---

## 📋 Prérequis

Avant de commencer, vous devez avoir :

1. ✅ Un compte Instagram **Business** ou **Creator** (pas un compte personnel)
2. ✅ Une page Facebook (même vide, elle doit exister)
3. ✅ Votre compte Instagram connecté à cette page Facebook
4. ✅ Un compte Meta for Developers (gratuit)

---

## Étape 1 : Convertir votre compte Instagram en compte Business/Creator

### 1.1 Sur l'application Instagram mobile

1. Ouvrez Instagram
2. Allez sur votre profil
3. Appuyez sur **☰** (menu hamburger) en haut à droite
4. Allez dans **Paramètres et confidentialité**
5. Choisissez **Type de compte et outils**
6. Sélectionnez **Passer à un compte professionnel**
7. Choisissez **Créateur** ou **Entreprise** (recommandé : **Créateur** pour créateurs de contenu)
8. Suivez les étapes (catégorie, coordonnées, etc.)

✅ Votre compte est maintenant un compte professionnel !

---

## Étape 2 : Créer une page Facebook

### 2.1 Sur Facebook Desktop

1. Allez sur https://www.facebook.com/
2. Cliquez sur **Pages** dans le menu de gauche (ou allez directement sur https://www.facebook.com/pages/creation/)
3. Cliquez sur **Créer une page**
4. Choisissez le type de page (ex: **Personnalité publique**, **Créateur de contenu**)
5. Remplissez les informations :
   - Nom de la page : **Flora MVS** (ou votre nom)
   - Catégorie : **Créateur de contenu digital** ou **Community Manager**
6. Cliquez sur **Créer une page**

✅ Votre page Facebook est créée !

---

## Étape 3 : Connecter Instagram à votre page Facebook

### 3.1 Méthode 1 : Via Instagram mobile

1. Ouvrez Instagram
2. Allez sur votre profil
3. Appuyez sur **Modifier le profil**
4. Trouvez la section **Page**
5. Appuyez sur **Créer une page** ou **Connecter une page**
6. Sélectionnez votre page Facebook créée à l'étape 2
7. Confirmez

### 3.2 Méthode 2 : Via Facebook Desktop

1. Allez sur votre page Facebook
2. Cliquez sur **Paramètres** (dans le menu de gauche)
3. Dans le menu, cherchez **Instagram**
4. Cliquez sur **Connecter un compte**
5. Connectez-vous à Instagram
6. Autorisez la connexion

✅ Votre compte Instagram est maintenant lié à votre page Facebook !

---

## Étape 4 : Créer un compte Meta for Developers

1. Allez sur https://developers.facebook.com/
2. Cliquez sur **Get Started** (en haut à droite)
3. Connectez-vous avec votre compte Facebook
4. Acceptez les conditions d'utilisation
5. Remplissez les informations demandées :
   - Nom complet
   - Email
   - Rôle : **Developer** ou **Other**

✅ Votre compte développeur Meta est créé !

---

## Étape 5 : Créer une application Meta

### 5.1 Créer l'app

1. Sur https://developers.facebook.com/
2. Cliquez sur **My Apps** (en haut à droite)
3. Cliquez sur **Create App**
4. Choisissez un type d'utilisation :
   - Sélectionnez **Other** (Autre)
   - Cliquez sur **Next**
5. Choisissez le type d'application :
   - Sélectionnez **Business**
   - Cliquez sur **Next**
6. Remplissez les détails :
   - **App name** : `Portfolio Stats` (ou un nom de votre choix)
   - **App contact email** : Votre email
   - **Business Portfolio** : Sélectionnez votre compte (ou créez-en un)
7. Cliquez sur **Create App**
8. Vérifiez votre identité si demandé

✅ Votre application est créée !

### 5.2 Ajouter Instagram Graph API

1. Dans le tableau de bord de votre app
2. Trouvez **Instagram Graph API** dans la liste des produits
3. Cliquez sur **Set Up** ou **Configure**
4. L'API est maintenant ajoutée à votre app

---

## Étape 6 : Obtenir un Access Token

### 6.1 Via Graph API Explorer (Méthode recommandée)

1. Allez sur https://developers.facebook.com/tools/explorer/
2. En haut à droite :
   - **Meta App** : Sélectionnez votre app (`Portfolio Stats`)
   - **User or Page** : Sélectionnez votre page Facebook connectée à Instagram
3. Cliquez sur **Generate Access Token**
4. Autorisez les permissions demandées :
   - ✅ `instagram_basic`
   - ✅ `pages_show_list`
   - ✅ `pages_read_engagement`
5. Cliquez sur **Continue as [Votre nom]**
6. Un **Access Token** apparaît dans le champ "Access Token"

⚠️ **IMPORTANT** : Cet Access Token est **temporaire** (expire dans ~1 heure).

### 6.2 Obtenir un Long-Lived Access Token (Valable 60 jours)

Pour prolonger la durée de votre token :

1. Allez dans votre app sur https://developers.facebook.com/apps/
2. Cliquez sur votre app (`Portfolio Stats`)
3. Dans le menu de gauche, allez dans **Tools** > **Access Token Tool**
4. Trouvez votre **User Token**
5. Cliquez sur **Extend**
6. Copiez le nouveau **Long-Lived Token** (valable 60 jours)

✅ Vous avez maintenant un Access Token longue durée !

---

## Étape 7 : Obtenir votre Instagram User ID

### 7.1 Via Graph API Explorer

1. Allez sur https://developers.facebook.com/tools/explorer/
2. Assurez-vous que :
   - Votre app est sélectionnée
   - Votre Access Token est actif
3. Dans le champ de requête, entrez :
   ```
   me/accounts
   ```
4. Cliquez sur **Submit**
5. Dans la réponse, trouvez votre page Facebook et notez l'**ID**
6. Maintenant, dans le champ de requête, entrez :
   ```
   [ID_DE_VOTRE_PAGE]?fields=instagram_business_account
   ```
   (Remplacez `[ID_DE_VOTRE_PAGE]` par l'ID obtenu)
7. Cliquez sur **Submit**
8. La réponse contient votre **Instagram Business Account ID** :
   ```json
   {
     "instagram_business_account": {
       "id": "17841405309211111"  ← C'EST VOTRE INSTAGRAM USER ID
     }
   }
   ```

✅ Vous avez votre Instagram User ID !

---

## Étape 8 : Tester votre configuration

### 8.1 Test dans Graph API Explorer

1. Dans https://developers.facebook.com/tools/explorer/
2. Dans le champ de requête, entrez :
   ```
   [VOTRE_INSTAGRAM_USER_ID]?fields=followers_count,media_count,username
   ```
3. Cliquez sur **Submit**
4. Vous devriez voir :
   ```json
   {
     "followers_count": 30000,
     "media_count": 450,
     "username": "floramvs",
     "id": "17841405309211111"
   }
   ```

✅ Si vous voyez vos stats, l'API fonctionne !

---

## Étape 9 : Configurer api-stats.js

Maintenant que vous avez :
- ✅ Votre **Access Token** longue durée
- ✅ Votre **Instagram User ID**

Ouvrez le fichier `api-stats.js` et remplacez :

```javascript
instagram: {
    accessToken: 'VOTRE_ACCESS_TOKEN_ICI',  // ← Collez votre Long-Lived Access Token
    userId: 'VOTRE_INSTAGRAM_USER_ID_ICI',  // ← Collez votre Instagram User ID
    enabled: true  // ← Passez à true pour activer
}
```

---

## Étape 10 : Renouveler votre Access Token

⚠️ Les Access Tokens Instagram expirent après **60 jours**.

### Comment renouveler automatiquement ?

Vous pouvez programmer un renouvellement automatique :

1. Avant expiration, faites un appel API :
   ```
   GET https://graph.facebook.com/v18.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id=[VOTRE_APP_ID]&
     client_secret=[VOTRE_APP_SECRET]&
     fb_exchange_token=[VOTRE_OLD_TOKEN]
   ```

2. Vous recevrez un nouveau token valable 60 jours

**OU** vous pouvez simplement répéter l'étape 6.2 tous les 2 mois.

---

## 🎯 Récapitulatif

Voici ce que vous devez avoir à la fin :

1. ✅ Compte Instagram Business/Creator
2. ✅ Page Facebook connectée à Instagram
3. ✅ Application Meta for Developers
4. ✅ Instagram Graph API ajoutée à l'app
5. ✅ Access Token longue durée (60 jours)
6. ✅ Instagram User ID

---

## ❓ Dépannage

### "L'Instagram Business Account n'apparaît pas"

➜ Vérifiez que :
- Votre compte Instagram est bien en mode Business/Creator
- Votre compte Instagram est bien connecté à votre page Facebook
- Attendez 24h après la connexion (parfois nécessaire)

### "Access Token Invalid"

➜ L'Access Token a peut-être expiré. Regénérez-en un nouveau (Étape 6).

### "Error validating access token"

➜ Vérifiez que vous avez autorisé les bonnes permissions :
- `instagram_basic`
- `pages_show_list`
- `pages_read_engagement`

### "Unsupported get request"

➜ Vérifiez que vous utilisez bien l'**Instagram User ID** (pas votre username ni votre Page ID).

---

## 📞 Ressources

- Documentation officielle : https://developers.facebook.com/docs/instagram-api
- Graph API Explorer : https://developers.facebook.com/tools/explorer/
- Support Meta Developers : https://developers.facebook.com/support/

---

Bon courage ! C'est long mais ça vaut le coup pour avoir vos stats en temps réel 🚀
