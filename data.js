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
        // AFFICHES
        // Pour chaque affiche, tu peux remplir :
        //   pageId     : identifiant unique (sans espaces ni accents)
        //   title      : titre affiché sur la carte et la page
        //   date       : ex. "Janvier 2024" ou "2024"
        //   client     : nom du client / pour qui c'est fait
        //   subtitle   : courte accroche (optionnel)
        //   descriptionDetail : texte long décrivant le projet
        //   outils     : tableau d'outils utilisés, ex. ["Photoshop", "Illustrator"]
        //   role       : ton rôle dans le projet (optionnel)
        {
            pageId: "affiche-1",
            title: "Affiche 1",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-1",
            image: "images/Affiches/2c5b653f-abfa-4496-8629-b69e6b39aed1.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-2",
            title: "Affiche 2",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-2",
            image: "images/Affiches/5125b95a-9fe4-4a25-9acc-76528963a38e.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-3",
            title: "Affiche 3",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-3",
            image: "images/Affiches/669f8773-f3c6-46d1-99cc-5b285a28c4f3.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-4",
            title: "Affiche 4",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-4",
            image: "images/Affiches/849e8072-8430-40b3-aa32-48b1b0efff5f.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-5",
            title: "Affiche 5",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-5",
            image: "images/Affiches/b61e0ff5-18fe-41e3-85e8-bbff21bc1f33.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-6",
            title: "Affiche 6",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-6",
            image: "images/Affiches/b771a837-9c0b-4122-a588-860b9bd076d2.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-7",
            title: "Affiche 7",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-7",
            image: "images/Affiches/beb1a1e6-529e-4545-890d-a610c73d07c7.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-8",
            title: "Affiche 8",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-8",
            image: "images/Affiches/bf6e5471-3d26-4a1e-948f-50789efe75ca.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-9",
            title: "Affiche 9",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-9",
            image: "images/Affiches/cbce6280-04f2-4de5-9cb2-accb65203bd5.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-10",
            title: "Affiche 10",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-10",
            image: "images/Affiches/d2b48ebd-c7cd-4dfe-addb-dad3bf23b213.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-11",
            title: "Affiche 11",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-11",
            image: "images/Affiches/ea0b5aa9-ad9b-443a-a2e7-f8151bd6cb40.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-12",
            title: "Affiche 12",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-12",
            image: "images/Affiches/fb161da0-22cf-4780-a938-a659f9434835.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "affiche-kaneki",
            title: "Affiche Kaneki",
            category: "affiches",
            description: "Création graphique",
            gradient: null,
            link: "portfolio/projet.html?id=affiche-kaneki",
            image: "images/Affiches/AfficheKaneki.png",
            isPoster: true,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        // MINIATURES
        {
            pageId: "minia-kayla-courtney-carfish",
            title: "Miniature Kayla x Courtney x Carfish",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-kayla-courtney-carfish",
            image: "images/Miniature/minia_kayla_courtney_carfish1.png",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-trixy-fraisier",
            title: "Miniature xo_trixy — Fraisier",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-trixy-fraisier",
            image: "images/Miniature/trixy_fraisier.jpg",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-trixy-1",
            title: "Miniature xo_trixy 1",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-trixy-1",
            image: "images/Miniature/Minia_Trixy1.jpg",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-trixy-2",
            title: "Miniature xo_trixy 2",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-trixy-2",
            image: "images/Miniature/Minia_Trixy2.webp",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-trixy-3",
            title: "Miniature xo_trixy 3",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-trixy-3",
            image: "images/Miniature/Minia_Trixy3.jpg",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-trixy-4",
            title: "Miniature xo_trixy 4",
            category: "miniatures",
            description: "Miniature YouTube",
            gradient: null,
            link: "portfolio/projet.html?id=minia-trixy-4",
            image: "images/Miniature/Minia_Trixy4.webp",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-flora-1",
            title: "Flora 1",
            category: "miniatures",
            description: "Miniature",
            gradient: null,
            link: "portfolio/projet.html?id=minia-flora-1",
            image: "images/Miniature/Flora_1.png",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        {
            pageId: "minia-flora-2",
            title: "Flora 2",
            category: "miniatures",
            description: "Miniature",
            gradient: null,
            link: "portfolio/projet.html?id=minia-flora-2",
            image: "images/Miniature/Flora_2.png",
            isPoster: false,
            date: "",
            client: "",
            subtitle: "",
            descriptionDetail: "",
            outils: [],
            role: ""
        },
        // PHOTOS — photoSize: "small" | "medium" | "large" | "tall"
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/1-15.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/2-14.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/3-15BIS.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/4-19 BIS.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/5-19.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/6-43.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/7-44.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/8-45.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/9-1.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/10-2.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/11-3.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/12-4.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/13-5.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/14-6.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/15-8.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/16-9.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/17-10.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/18-11.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/19-12.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/20-13.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/21-47.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/22-48.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/23-50.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/24-52 BIS.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/25-52.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/26-53.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/27-16.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/28-4.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/29-3.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/30-11.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/31-9.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/32-8.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/33-10.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/34-14.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/35-13.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/36-12.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/37-6.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/38-5.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/39-7.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/40-46.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/41-51.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/42-39.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/43-40.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/44-17.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/45-18.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/46-20.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/47-21.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/48-24.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/49-25 BIS.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/50-25.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/51-23.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/52-27.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/53-34.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/54-26.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/55-35.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/56-36.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/57-37.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/58-49.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/59-28.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/60-29.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/61-30.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/62-31.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/63-32.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/64-33.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/65-38.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/66-54.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/67-55 BIS.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/68-55.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/69-56.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/70-57.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/71-41.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/72-42.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/73-DSC04942g.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/74-DSC04949g.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/75-DSC05009g.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/76-DSC05023g.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/77-DSC05067g.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/78-DSC05068g.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/79-DSC05164g.jpg", isPoster: false, photoSize: "medium" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/80-DSC05170g.jpg", isPoster: false, photoSize: "tall" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/81-15.jpg", isPoster: false, photoSize: "small" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/82-2.jpg", isPoster: false, photoSize: "large" },
        { title: "Photo", category: "photos", description: "Photographie", gradient: null, link: "#", image: "images/Photos/83-1.jpg", isPoster: false, photoSize: "medium" }
    ],

    // COLLABORATIONS - STREAMERS
    // ---------------------------
    // Photos de profil des streamers/créateurs avec qui tu as collaboré
    streamers: [
        {
            name: "JLTomy",
            logo: "images/Logos/jltomy.png",
            link: "projects/jltomy.html"
        },
        {
            name: "Chipsette",
            logo: "images/Logos/chipsette.jpeg",
            link: "projects/chipsette.html"
        },
        {
            name: "xo_trixy",
            logo: "images/Logos/xo_trixy.png",
            link: "projects/xo_trixy.html"
        },
        {
            name: "Helydia",
            logo: "images/Logos/helydia.jpg",
            link: "projects/helydia.html"
        }
    ],

    // COLLABORATIONS - ENTREPRISES
    // -----------------------------
    // Logos des entreprises/marques avec qui tu as travaillé
    companies: [
        {
            name: "Webedia",
            logo: "images/Logos/webedia-logo.png",
            link: "projects/webedia.html"
        }
    ],

    // COLLABORATIONS - ÉVÉNEMENTS
    // ----------------------------
    // Événements sur lesquels tu as travaillé
    events: [
        {
            name: "Champions",
            logo: "images/Logos/champions.jpg",
            link: "events/champions.html"
        },
        {
            name: "Challengers France",
            logo: "images/Logos/Challengers_France.jpg",
            link: "events/challengers_france.html"
        },
        {
            name: "Cyberdash",
            logo: "images/Logos/Cyberdash.png",
            link: "events/cyberdash.html"
        },
        {
            name: "Le Stream Génial",
            logo: "images/Logos/Le Stream Génial.jpg",
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
            followers: "1 900",
            link: "https://x.com/floramvs",
            stats: [
                { label: "impressions en 2025", value: "16.5M" },
                { label: "engagements", value: "882.6K" },
                { label: "likes", value: "224.8K" },
                { label: "réponses", value: "4.6K" },
                { label: "reposts", value: "8.4K" },
                { label: "signets", value: "16.9K" }
            ],
            engagement: "5.3%",
            note: "Visibilité + profil actif dans plusieurs communautés",
            color: "#1DA1F2",
            icon: "𝕏"
        },
        {
            platform: "TikTok",
            handle: "@floramvs",
            followers: "1 055",
            link: "https://www.tiktok.com/@floramvs",
            stats: [
                { label: "vues en 2025", value: "525K" },
                { label: "vues profil", value: "9.3K" },
                { label: "j'aime", value: "34K" },
                { label: "commentaires", value: "673" },
                { label: "partages", value: "3,4K" }
            ],
            engagement: "",
            note: "54.3K likes au total depuis création",
            color: "#EE1D52",
            icon: "♪"
        },
        {
            platform: "YouTube",
            handle: "@floramvs",
            followers: "54",
            link: "https://www.youtube.com/@floramvs",
            stats: [
                { label: "vues totales", value: "50.6K" },
                { label: "likes", value: "967" },
                { label: "commentaires", value: "17" },
                { label: "partages", value: "20" }
            ],
            engagement: "",
            note: "Contenu vidéo créatif",
            color: "#FF0000",
            icon: "▶"
        },
        {
            platform: "Instagram",
            handle: "@floramvs",
            followers: "220",
            link: "https://www.instagram.com/floramvs",
            stats: [
                { label: "vues", value: "15K" },
                { label: "likes", value: "418" },
                { label: "commentaires", value: "11" },
                { label: "partages", value: "26" }
            ],
            engagement: "",
            note: "",
            color: "#E4405F",
            icon: "📷"
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
