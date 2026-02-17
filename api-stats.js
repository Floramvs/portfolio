// ========================================
// SYSTÈME D'ACTUALISATION DES STATS VIA APIS
// ========================================
// Ce fichier gère l'actualisation automatique des statistiques
// des réseaux sociaux via leurs APIs officielles

// CONFIGURATION DES APIS
// Remplace ces valeurs par tes vraies clés API
const API_CONFIG = {
    twitter: {
        bearerToken: 'YOUR_TWITTER_BEARER_TOKEN', // API Twitter v2
        username: 'floramvs',
        enabled: false // Activer quand la clé API est configurée
    },
    tiktok: {
        accessToken: 'YOUR_TIKTOK_ACCESS_TOKEN',
        username: 'floramvs',
        enabled: false // TikTok API est complexe, voir docs
    },
    instagram: {
        accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN',
        userId: 'YOUR_INSTAGRAM_USER_ID',
        enabled: false // Nécessite Meta Business API
    },
    youtube: {
        apiKey: 'YOUR_YOUTUBE_API_KEY',
        channelId: 'YOUR_YOUTUBE_CHANNEL_ID',
        enabled: false
    }
};

// Durée de cache (en millisecondes) - 1 heure
const CACHE_DURATION = 60 * 60 * 1000;

// ========================================
// FONCTIONS D'ACTUALISATION PAR PLATEFORME
// ========================================

/**
 * Récupère les stats Twitter via l'API v2
 */
async function fetchTwitterStats() {
    if (!API_CONFIG.twitter.enabled) {
        console.log('Twitter API non configurée');
        return null;
    }

    try {
        const response = await fetch(
            `https://api.twitter.com/2/users/by/username/${API_CONFIG.twitter.username}?user.fields=public_metrics`,
            {
                headers: {
                    'Authorization': `Bearer ${API_CONFIG.twitter.bearerToken}`
                }
            }
        );

        if (!response.ok) throw new Error('Erreur Twitter API');

        const data = await response.json();
        const metrics = data.data.public_metrics;

        return {
            followers: metrics.followers_count.toLocaleString('fr-FR'),
            following: metrics.following_count,
            tweets: metrics.tweet_count
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des stats Twitter:', error);
        return null;
    }
}

/**
 * Récupère les stats YouTube via l'API Data v3
 */
async function fetchYouTubeStats() {
    if (!API_CONFIG.youtube.enabled) {
        console.log('YouTube API non configurée');
        return null;
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${API_CONFIG.youtube.channelId}&key=${API_CONFIG.youtube.apiKey}`
        );

        if (!response.ok) throw new Error('Erreur YouTube API');

        const data = await response.json();
        const stats = data.items[0].statistics;

        return {
            subscribers: parseInt(stats.subscriberCount).toLocaleString('fr-FR'),
            views: parseInt(stats.viewCount).toLocaleString('fr-FR'),
            videos: parseInt(stats.videoCount)
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des stats YouTube:', error);
        return null;
    }
}

/**
 * Récupère les stats Instagram via Meta Graph API
 * NOTE: Nécessite un compte Business/Creator et un Access Token
 */
async function fetchInstagramStats() {
    if (!API_CONFIG.instagram.enabled) {
        console.log('Instagram API non configurée');
        return null;
    }

    try {
        const response = await fetch(
            `https://graph.instagram.com/${API_CONFIG.instagram.userId}?fields=followers_count,media_count&access_token=${API_CONFIG.instagram.accessToken}`
        );

        if (!response.ok) throw new Error('Erreur Instagram API');

        const data = await response.json();

        return {
            followers: data.followers_count.toLocaleString('fr-FR'),
            posts: data.media_count
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des stats Instagram:', error);
        return null;
    }
}

/**
 * TikTok API - Plus complexe, nécessite OAuth et app enregistrée
 * Documentation: https://developers.tiktok.com/
 */
async function fetchTikTokStats() {
    if (!API_CONFIG.tiktok.enabled) {
        console.log('TikTok API non configurée');
        return null;
    }

    // TikTok nécessite un processus OAuth complexe
    // Voir: https://developers.tiktok.com/doc/login-kit-web
    console.log('TikTok API nécessite une configuration OAuth avancée');
    return null;
}

// ========================================
// GESTION DU CACHE LOCAL
// ========================================

/**
 * Sauvegarde les stats dans le localStorage avec timestamp
 */
function cacheStats(platform, stats) {
    const cacheData = {
        timestamp: Date.now(),
        stats: stats
    };
    localStorage.setItem(`stats_${platform}`, JSON.stringify(cacheData));
}

/**
 * Récupère les stats depuis le cache si elles sont encore valides
 */
function getCachedStats(platform) {
    const cached = localStorage.getItem(`stats_${platform}`);
    if (!cached) return null;

    const cacheData = JSON.parse(cached);
    const age = Date.now() - cacheData.timestamp;

    // Si le cache a moins de CACHE_DURATION, le retourner
    if (age < CACHE_DURATION) {
        return cacheData.stats;
    }

    return null;
}

// ========================================
// FONCTION PRINCIPALE D'ACTUALISATION
// ========================================

/**
 * Actualise toutes les stats disponibles
 * @returns {Object} Stats actualisées par plateforme
 */
async function refreshAllStats() {
    const results = {
        twitter: null,
        youtube: null,
        instagram: null,
        tiktok: null,
        lastUpdate: new Date().toISOString()
    };

    // Essayer de récupérer depuis le cache d'abord
    for (const platform of ['twitter', 'youtube', 'instagram', 'tiktok']) {
        const cached = getCachedStats(platform);
        if (cached) {
            results[platform] = cached;
            console.log(`Stats ${platform} récupérées depuis le cache`);
        }
    }

    // Actualiser les stats via API si activées
    if (API_CONFIG.twitter.enabled && !results.twitter) {
        results.twitter = await fetchTwitterStats();
        if (results.twitter) cacheStats('twitter', results.twitter);
    }

    if (API_CONFIG.youtube.enabled && !results.youtube) {
        results.youtube = await fetchYouTubeStats();
        if (results.youtube) cacheStats('youtube', results.youtube);
    }

    if (API_CONFIG.instagram.enabled && !results.instagram) {
        results.instagram = await fetchInstagramStats();
        if (results.instagram) cacheStats('instagram', results.instagram);
    }

    if (API_CONFIG.tiktok.enabled && !results.tiktok) {
        results.tiktok = await fetchTikTokStats();
        if (results.tiktok) cacheStats('tiktok', results.tiktok);
    }

    return results;
}

/**
 * Met à jour l'affichage des stats sur la page
 */
async function updateStatsDisplay() {
    const stats = await refreshAllStats();

    // Mettre à jour Twitter
    if (stats.twitter && stats.twitter.followers) {
        const twitterSection = document.querySelector('[data-platform="twitter"]');
        if (twitterSection) {
            const followersElement = twitterSection.querySelector('.followers-count');
            if (followersElement) {
                followersElement.textContent = stats.twitter.followers;
            }
        }
    }

    // Mettre à jour YouTube
    if (stats.youtube && stats.youtube.subscribers) {
        const youtubeSection = document.querySelector('[data-platform="youtube"]');
        if (youtubeSection) {
            const subsElement = youtubeSection.querySelector('.subscribers-count');
            if (subsElement) {
                subsElement.textContent = stats.youtube.subscribers;
            }
        }
    }

    // Ajouter un indicateur de dernière mise à jour
    const updateIndicator = document.getElementById('stats-last-update');
    if (updateIndicator) {
        const updateTime = new Date(stats.lastUpdate).toLocaleString('fr-FR');
        updateIndicator.textContent = `Dernière mise à jour : ${updateTime}`;
    }
}

// ========================================
// INITIALISATION
// ========================================

// Actualiser les stats au chargement de la page
if (typeof window !== 'undefined') {
    // Attendre que le DOM soit chargé
    document.addEventListener('DOMContentLoaded', () => {
        // Actualiser immédiatement
        updateStatsDisplay();

        // Actualiser toutes les heures
        setInterval(updateStatsDisplay, CACHE_DURATION);
    });
}

// ========================================
// GUIDE DE CONFIGURATION
// ========================================
/*

COMMENT CONFIGURER LES APIS :

1. TWITTER (X) API v2
   - Créer un compte développeur : https://developer.twitter.com/
   - Créer une app et obtenir un Bearer Token
   - Remplacer 'YOUR_TWITTER_BEARER_TOKEN' ci-dessus
   - Mettre enabled: true

2. YOUTUBE DATA API v3
   - Aller sur Google Cloud Console : https://console.cloud.google.com/
   - Créer un projet et activer YouTube Data API v3
   - Créer une clé API
   - Trouver ton Channel ID (dans l'URL de ta chaîne ou via l'API)
   - Remplacer 'YOUR_YOUTUBE_API_KEY' et 'YOUR_YOUTUBE_CHANNEL_ID'
   - Mettre enabled: true

3. INSTAGRAM GRAPH API
   - Créer un compte Meta for Developers : https://developers.facebook.com/
   - Convertir ton compte Instagram en compte Business/Creator
   - Connecter ton compte Instagram à une page Facebook
   - Créer une app et obtenir un Access Token
   - Obtenir ton User ID Instagram
   - Remplacer 'YOUR_INSTAGRAM_ACCESS_TOKEN' et 'YOUR_INSTAGRAM_USER_ID'
   - Mettre enabled: true

4. TIKTOK API
   - Plus complexe, nécessite OAuth 2.0
   - Documentation : https://developers.tiktok.com/
   - Créer une app TikTok Developer
   - Implémenter le flow OAuth pour obtenir un access token
   - Non recommandé pour usage simple (utiliser mise à jour manuelle)

LIMITES DE TAUX (RATE LIMITS) :
- Twitter : 1500 requêtes / 15 min (très généreux)
- YouTube : 10,000 unités / jour (1 requête = 1 unité pour channels)
- Instagram : 200 requêtes / heure par utilisateur
- TikTok : Variable selon le niveau d'API

RECOMMANDATION :
Pour un portfolio personnel, utiliser le système de cache (1h) est largement
suffisant et reste dans les limites gratuites de toutes les APIs.

*/

// Export pour utilisation dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        refreshAllStats,
        updateStatsDisplay,
        API_CONFIG
    };
}
