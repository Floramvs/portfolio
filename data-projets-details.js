// ========================================
// DÉTAILS DES PROJETS
// ========================================
// Ce fichier contient les informations COMPLÈTES de chaque projet
// pour les pages de détail individuelles

const projectsDetails = {
    // ID du projet = nom du fichier HTML généré (ex: "sonova" → sonova.html)
    
    "sonova": {
        // INFORMATIONS DE BASE
        title: "Sonova",
        subtitle: "Application Audio Adaptative",
        category: "Application Mobile",
        year: "2024",
        client: "Projet Académique",
        
        // HERO
        heroImage: "images/sonova-hero.jpg",  // Image principale (1920×1080)
        heroGradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
        
        // DESCRIPTION
        description: "Sonova est une application mobile innovante qui adapte automatiquement le son de votre smartphone en fonction de votre environnement et de vos données biométriques. Utilisant une architecture modulaire, l'app ajuste en temps réel le volume, les basses et l'égalisation pour une expérience audio optimale.",
        
        // CHALLENGE / PROBLÈME
        challenge: "Les utilisateurs ajustent constamment leur volume manuellement selon leur environnement (transport, bureau, sport). Cette expérience fragmentée nuit à la concentration et à l'immersion audio.",
        
        // SOLUTION
        solution: "Une application qui détecte automatiquement le contexte (vitesse, bruit ambiant, fréquence cardiaque) et adapte les paramètres audio via des modules indépendants. L'utilisateur garde le contrôle via des profils personnalisables.",
        
        // TECHNOLOGIES
        technologies: [
            "React Native",
            "TypeScript",
            "Audio API",
            "Sensors API",
            "Figma",
            "Firebase"
        ],
        
        // RÔLE / RESPONSABILITÉS
        role: [
            "UX Research & Design",
            "Prototypage interactif",
            "Architecture technique",
            "Business plan & stratégie"
        ],
        
        // GALERIE D'IMAGES
        gallery: [
            {
                image: "images/sonova-1.jpg",
                caption: "Interface principale avec modules adaptatifs"
            },
            {
                image: "images/sonova-2.jpg",
                caption: "Paramètres de personnalisation"
            },
            {
                image: "images/sonova-3.jpg",
                caption: "Dashboard des données biométriques"
            }
        ],
        
        // RÉSULTATS / IMPACT
        results: [
            "Architecture modulaire validée par des experts tech",
            "Business plan complet avec projections financières",
            "Prototype interactif testé avec 20+ utilisateurs",
            "Score UX de 8.5/10 en tests utilisateurs"
        ],
        
        // LIENS
        links: {
            github: "https://github.com/diesel/sonova",
            demo: null,  // null si pas de démo
            behance: null,
            other: null
        },
        
        // PROJET SUIVANT (optionnel)
        nextProject: "luna-cosmetics"
    },
    
    "luna-cosmetics": {
        title: "Luna Cosmetics",
        subtitle: "Identité Visuelle & Branding",
        category: "Branding",
        year: "2024",
        client: "Luna Beauty Inc.",
        
        heroImage: null,  // null = utilise le gradient
        heroGradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
        
        description: "Création d'une identité visuelle complète pour Luna Cosmetics, une marque de cosmétiques naturels ciblant la génération Z. Le branding allie modernité, authenticité et conscience écologique.",
        
        challenge: "Se démarquer dans un marché saturé tout en restant accessible et authentique auprès d'une audience jeune et exigeante sur les valeurs environnementales.",
        
        solution: "Une identité visuelle audacieuse mélangeant des teintes pastels vibrantes, une typographie moderne et des illustrations organiques. Le logo évoque la lune et les cycles naturels.",
        
        technologies: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Figma",
            "InDesign"
        ],
        
        role: [
            "Direction artistique",
            "Design du logo",
            "Charte graphique complète",
            "Packaging produits"
        ],
        
        gallery: [
            {
                image: "images/luna-1.jpg",
                caption: "Logo et variations"
            },
            {
                image: "images/luna-2.jpg",
                caption: "Charte graphique et palette"
            },
            {
                image: "images/luna-3.jpg",
                caption: "Mockups packaging"
            }
        ],
        
        results: [
            "Identité adoptée et déployée sur tous les supports",
            "+45% d'engagement social media post-rebrand",
            "Reconnaissabilité de marque augmentée de 67%",
            "Prix du meilleur packaging 2024"
        ],
        
        links: {
            github: null,
            demo: null,
            behance: "https://www.behance.net/...",
            other: null
        },
        
        nextProject: "quantum-labs"
    },
    
    // TEMPLATE VIDE À COPIER
    "template-projet": {
        title: "Nom du projet",
        subtitle: "Sous-titre / Slogan",
        category: "Web / Design / Branding",
        year: "2024",
        client: "Nom du client",
        
        heroImage: "images/projet-hero.jpg",  // ou null
        heroGradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
        
        description: "Description du projet en 2-3 phrases. Contexte, objectif, résultat.",
        
        challenge: "Quel était le problème / défi à résoudre ?",
        
        solution: "Comment as-tu résolu ce problème ? Quelle approche as-tu adoptée ?",
        
        technologies: [
            "Tech 1",
            "Tech 2",
            "Tech 3"
        ],
        
        role: [
            "Rôle 1",
            "Rôle 2",
            "Rôle 3"
        ],
        
        gallery: [
            {
                image: "images/projet-1.jpg",
                caption: "Description de l'image 1"
            },
            {
                image: "images/projet-2.jpg",
                caption: "Description de l'image 2"
            }
        ],
        
        results: [
            "Résultat mesurable 1",
            "Résultat mesurable 2",
            "Impact 3"
        ],
        
        links: {
            github: null,
            demo: null,
            behance: null,
            other: null
        },
        
        nextProject: "autre-projet-id"
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsDetails;
}
