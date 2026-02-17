// ========================================
// GUIDE RAPIDE - MODIFIER TON CONTENU
// ========================================

// 🎯 SERVICES
// -----------
// Pour MODIFIER : Change le texte directement
// Pour AJOUTER : Copie un bloc {...} et modifie-le
// Pour SUPPRIMER : Supprime tout le bloc {...},

// 🖼️ IMAGES PORTFOLIO
// -------------------
// MÉTHODE 1 (gradients) : Laisse image: null
// MÉTHODE 2 (images réelles) : 
//   1. Crée un dossier "images/" 
//   2. Place tes images dedans
//   3. Remplace image: null par image: "images/ton-image.jpg"

// ========================================
// CONFIGURATION DU SITE
// ========================================

const siteData = {
    
    // ========================================
    // 🎯 SERVICES
    // ========================================
    services: [
        {
            icon: "✨",  // Emoji ou caractère spécial
            title: "Design UI/UX",
            description: "Des interfaces intuitives qui transforment chaque interaction en moment de plaisir et d'efficacité."
        },
        {
            icon: "🚀",
            title: "Développement Web",
            description: "Des solutions techniques performantes et élégantes qui donnent vie à vos ambitions digitales."
        },
        {
            icon: "🎨",
            title: "Branding",
            description: "Une identité visuelle unique qui capture l'essence de votre marque et résonne avec votre audience."
        },
        {
            icon: "📱",
            title: "Applications Mobile",
            description: "Applications natives et cross-platform offrant des expériences mobiles exceptionnelles."
        },
        {
            icon: "💡",
            title: "Conseil Stratégique",
            description: "Accompagnement expert pour transformer vos idées en produits digitaux réussis."
        },
        {
            icon: "🎬",
            title: "Motion Design",
            description: "Animations et vidéos qui donnent vie à votre message et captivent votre audience."
        }
        
        // 📝 POUR AJOUTER UN NOUVEAU SERVICE :
        // Décommente et modifie le bloc ci-dessous :
        /*
        ,
        {
            icon: "🎯",
            title: "Ton nouveau service",
            description: "Description de ton service ici."
        }
        */
    ],

    // ========================================
    // 🖼️ PORTFOLIO
    // ========================================
    portfolio: [
        // ⭐ EXEMPLE 1 : Projet avec GRADIENT (pas d'image)
        {
            title: "Sonova App",
            category: "web",  // Choix : "web", "design" ou "branding"
            description: "Application mobile • Audio adaptatif",
            gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
            link: "#",  // Lien vers ton projet ou "#" si pas de lien
            image: null  // null = utilise le gradient
        },
        
        // ⭐ EXEMPLE 2 : Projet avec IMAGE RÉELLE
        // Pour l'utiliser :
        // 1. Crée un dossier "images/" à côté de index.html
        // 2. Place ton image dedans (ex: luna-cosmetics.jpg)
        // 3. Remplace image: null par image: "images/luna-cosmetics.jpg"
        {
            title: "Luna Cosmetics",
            category: "branding",
            description: "Branding • Identité visuelle",
            gradient: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
            link: "#",
            image: null  // ← Change ici : image: "images/luna-cosmetics.jpg"
        },
        
        // ⭐ EXEMPLE 3 : Autre projet avec gradient
        {
            title: "Quantum Labs",
            category: "web",
            description: "Site web • Développement",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            link: "#",
            image: null
        },
        
        // ⭐ EXEMPLE 4 : Design UI
        {
            title: "Aurora Dashboard",
            category: "design",
            description: "Interface • Data visualization",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
            link: "#",
            image: null
        },
        
        // ⭐ EXEMPLE 5 : Branding & Motion
        {
            title: "Vertex Studio",
            category: "branding",
            description: "Branding • Motion design",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            link: "#",
            image: null
        },
        
        // ⭐ EXEMPLE 6 : Plateforme SaaS
        {
            title: "Pulse Platform",
            category: "web",
            description: "Plateforme SaaS • Full-stack",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            link: "#",
            image: null
        }
        
        // 📝 POUR AJOUTER UN NOUVEAU PROJET :
        // Copie un bloc ci-dessus, modifie-le et décommente :
        /*
        ,
        {
            title: "Mon nouveau projet",
            category: "web",  // "web", "design" ou "branding"
            description: "Description courte du projet",
            gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
            link: "https://mon-projet.com",
            image: "images/mon-projet.jpg"  // ou null pour gradient
        }
        */
    ],

    // ========================================
    // 📧 CONTACT
    // ========================================
    contact: {
        email: "contact@ether-studio.com",
        location: "Paris, France",
        availability: "Disponible dans le monde entier",
        
        // Configuration EmailJS (optionnel)
        // Pour recevoir les messages du formulaire de contact :
        // 1. Crée un compte sur https://www.emailjs.com/
        // 2. Configure un service email
        // 3. Crée un template
        // 4. Remplace les valeurs ci-dessous
        emailjs: {
            serviceId: "YOUR_SERVICE_ID",      // Remplace par ton Service ID
            templateId: "YOUR_TEMPLATE_ID",    // Remplace par ton Template ID
            publicKey: "YOUR_PUBLIC_KEY"       // Remplace par ta Public Key
        }
    }
};

// ========================================
// 🎨 AIDE : GÉNÉRATEURS DE COULEURS
// ========================================
// 
// Pour créer de beaux gradients :
// → https://cssgradient.io/
// → https://uigradients.com/
// → https://www.colorzilla.com/gradient-editor/
//
// Pour trouver des palettes de couleurs :
// → https://coolors.co/
// → https://colorhunt.co/
//
// ========================================

// 📚 EXEMPLES DE GRADIENTS À COPIER-COLLER
// ========================================
/*
Bleu océan :
gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"

Coucher de soleil :
gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"

Forêt mystique :
gradient: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)"

Nuit étoilée :
gradient: "linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)"

Feu et passion :
gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"

Glacier :
gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
*/

// ========================================
// NE PAS MODIFIER EN DESSOUS
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
