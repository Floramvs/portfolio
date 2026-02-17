// ========================================
// CONFIGURATION DU SITE
// ========================================
// Ce fichier contient TOUT le contenu de ton site.
// Pour ajouter/modifier du contenu, édite simplement ce fichier !

const siteData = {
    // SERVICES
    // --------
    // Pour ajouter un service : copie un objet existant et modifie les valeurs
    services: [
        {
            icon: "📱",
            title: "Community Manager",
            description: "Gestion complète de vos réseaux sociaux avec stratégie de contenu personnalisée.",
            details: [
                "Planification éditoriale",
                "Création de posts engageants",
                "Live-tweets événementiels",
                "Analyse de statistiques"
            ],
            pricing: "Sur devis",
            featured: true
        },
        {
            icon: "🎬",
            title: "Monteuse Vidéo",
            description: "Montages dynamiques optimisés pour TikTok, YouTube et Instagram.",
            details: [
                "Montages courts (TikTok/Reels)",
                "Vidéos YouTube",
                "Effets et transitions",
                "Sous-titrage dynamique"
            ],
            pricing: "À partir de 50€",
            featured: true
        },
        {
            icon: "🎨",
            title: "Graphiste",
            description: "Création d'identités visuelles et supports graphiques percutants.",
            details: [
                "Affiches événementielles",
                "Posts réseaux sociaux",
                "Logos & branding",
                "Visuels promotionnels"
            ],
            pricing: "À partir de 80€",
            featured: false
        },
        {
            icon: "📸",
            title: "Photographe",
            description: "Photographie professionnelle pour portraits, événements et contenus créatifs.",
            details: [
                "Portraits professionnels",
                "Couverture d'événements",
                "Photographie esport",
                "Retouche incluse"
            ],
            pricing: "Sur devis",
            featured: false
        },
        {
            icon: "🎥",
            title: "Cadreuse",
            description: "Prise de vue vidéo professionnelle avec maîtrise technique et artistique.",
            details: [
                "Événements en direct",
                "Interviews",
                "Streams & tournois",
                "Contenus créatifs"
            ],
            pricing: "Sur devis",
            featured: false
        }
    ],

    // PORTFOLIO
    // ---------
    // Pour ajouter un projet :
    // 1. Ajoute un objet avec les infos du projet
    // 2. category doit être : "web", "design" ou "branding"
    // 3. gradient : choisis une couleur ou utilise un gradient CSS
    // 4. image (optionnel) : chemin vers une image si tu veux l'afficher
    portfolio: [
        {
            title: "Caliste",
            category: "affiches",
            description: "Affiche événementielle",
            gradient: null,
            link: "projects/caliste.html",
            image: "images/caliste.jpeg",
            isPoster: true
        },
        {
            title: "Vatira",
            category: "affiches",
            description: "Design graphique • Poster",
            gradient: null,
            link: "projects/vatira.html",
            image: "images/vatira.jpeg",
            isPoster: true
        },
        {
            title: "Matriix",
            category: "affiches",
            description: "Affiche créative",
            gradient: null,
            link: "projects/matriix.html",
            image: "images/matriix.jpeg",
            isPoster: true
        },
        {
            title: "Rocket League",
            category: "affiches",
            description: "Gaming • Esport",
            gradient: null,
            link: "projects/rocketleague.html",
            image: "images/rocketleague.jpeg",
            isPoster: true
        },
        {
            title: "Luna Cosmetics",
            category: "branding",
            description: "Branding • Identité visuelle",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
            link: "#",
            image: null
        },
        {
            title: "Quantum Labs",
            category: "web",
            description: "Site web • Développement",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            link: "#",
            image: null
        },
        {
            title: "Aurora Dashboard",
            category: "design",
            description: "Interface • Data visualization",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
            link: "#",
            image: null
        },
        {
            title: "Vertex Studio",
            category: "branding",
            description: "Branding • Motion design",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            link: "#",
            image: null
        },
        {
            title: "Pulse Platform",
            category: "web",
            description: "Plateforme SaaS • Full-stack",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            link: "#",
            image: null
        }
    ],

    // COLLABORATIONS - STREAMERS
    // ---------------------------
    // Photos de profil des streamers/créateurs avec qui tu as collaboré
    streamers: [
        {
            name: "JLTomy",
            logo: "images/jltomy.png",
            link: "projects/jltomy.html"
        },
        {
            name: "Chipsette",
            logo: "images/chipsette.jpeg",
            link: "projects/chipsette.html"
        },
        {
            name: "xo_trixy",
            logo: "images/xo_trixy.png",
            link: "projects/xo_trixy.html"
        },
        {
            name: "Helydia",
            logo: "images/helydia.jpg",
            link: "projects/helydia.html"
        }
    ],

    // COLLABORATIONS - ENTREPRISES
    // -----------------------------
    // Logos des entreprises/marques avec qui tu as travaillé
    companies: [
        {
            name: "Webedia",
            logo: "images/webedia-logo.png",
            link: "projects/webedia.html"
        }
    ],

    // COLLABORATIONS - ÉVÉNEMENTS
    // ----------------------------
    // Événements sur lesquels tu as travaillé
    events: [
        {
            name: "Champions",
            logo: "images/champions.jpg",
            link: "events/champions.html"
        },
        {
            name: "Challengers France",
            logo: "images/Challengers_France.jpg",
            link: "events/challengers_france.html"
        },
        {
            name: "Cyberdash",
            logo: "images/Cyberdash.png",
            link: "events/cyberdash.html"
        },
        {
            name: "Le Stream Génial",
            logo: "images/Le Stream Génial.jpg",
            link: "events/le_stream_genial.html"
        }
    ],

    // RÉSEAUX SOCIAUX
    // ---------------
    // Statistiques de tes réseaux sociaux
    // Change les chiffres pour mettre à jour tes stats !
    socialStats: [
        {
            platform: "Twitter / X",
            handle: "@floramvs",
            followers: "1868",  // ← Change tes abonnés ici
            link: "https://x.com/floramvs",  // Lien vers ton profil
            stats: [
                { label: "impressions en 2025", value: "202.3M" },
                { label: "engagements", value: "7.7M" },
                { label: "likes", value: "2.1M" },
                { label: "réponses", value: "55K" }
            ],
            engagement: "3.8%",
            note: "Visibilité + profil actif dans plusieurs communautés",
            color: "#1DA1F2",
            icon: "𝕏"
        },
        {
            platform: "TikTok",
            handle: "@floramvs",
            followers: "1050",  // ← Change tes abonnés ici
            link: "https://www.tiktok.com/@floramvs",  // Lien vers ton profil
            stats: [
                { label: "vues totales", value: "512K" },
                { label: "likes", value: "33K" },
                { label: "partages", value: "3147" },
                { label: "commentaires", value: "694" }
            ],
            engagement: "7.19%",
            note: "Contenu viral régulier",
            color: "#EE1D52",  // Rose TikTok pour meilleur contraste
            icon: "♪"
        },
        {
            platform: "Instagram",
            handle: "@floramvs",
            followers: "30 000",  // ← Change tes abonnés ici
            link: "https://www.instagram.com/floramvs",  // Lien vers ton profil
            stats: [
                { label: "impressions mensuelles", value: "1.2M" },
                { label: "engagement", value: "85K" },
                { label: "portée", value: "950K" },
                { label: "saves", value: "12K" }
            ],
            engagement: "6.2%",
            note: "Croissance organique forte",
            color: "#E4405F",
            icon: "📷"
        },
        {
            platform: "YouTube",
            handle: "@floramvs",
            followers: "15 000",  // ← Change tes abonnés ici
            link: "https://www.youtube.com/@floramvs",  // Lien vers ta chaîne
            stats: [
                { label: "vues totales", value: "2.5M" },
                { label: "vues mensuelles", value: "150K" },
                { label: "likes", value: "85K" },
                { label: "commentaires", value: "3.2K" }
            ],
            engagement: "5.7%",
            note: "Contenu éducatif et créatif",
            color: "#FF0000",
            icon: "▶"
        }
    ],

    // CONTACT
    // -------
    // Modifie ces informations de contact
    contact: {
        email: "floramvs.contact@gmail.com",
        location: "Paris, France",
        availability: "Disponible dans le monde entier",
        
        // Configuration EmailJS
        // Pour activer le formulaire de contact :
        // 1. Crée un compte sur https://www.emailjs.com/ (gratuit)
        // 2. Configure un service email
        // 3. Crée un template
        // 4. Remplace les valeurs ci-dessous
        emailjs: {
            serviceId: "service_3jyst2e",      // Ton Service ID
            templateId: "template_whfon08",    // Ton Template ID
            publicKey: "5abDsJ5lop87X18Bi"     // Ta Public Key
        }
    }
};

// ========================================
// NE PAS MODIFIER EN DESSOUS
// (Sauf si tu sais ce que tu fais !)
// ========================================

// Export des données pour utilisation dans script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
