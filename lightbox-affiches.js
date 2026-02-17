// ========================================
// LIGHTBOX POUR LES AFFICHES
// ========================================
// Système de visualisation des affiches avec navigation

class AffichesLightbox {
    constructor() {
        this.affiches = [];
        this.currentIndex = 0;
        this.lightboxElement = null;
        this.init();
    }

    init() {
        // Récupérer toutes les affiches du portfolio
        if (siteData && siteData.portfolio) {
            this.affiches = siteData.portfolio.filter(item => item.isPoster === true);
        }

        // Créer l'élément lightbox
        this.createLightbox();

        // Attacher les événements aux affiches du portfolio
        this.attachPortfolioEvents();

        // Créer le bouton "Découvrir le portfolio" sur la page d'accueil
        this.createDiscoverButton();
    }

    createLightbox() {
        // Créer la structure HTML de la lightbox
        const lightboxHTML = `
            <div id="affiches-lightbox" class="affiches-lightbox">
                <div class="lightbox-overlay"></div>
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Fermer">×</button>

                    <div class="lightbox-image-wrapper">
                        <div class="lightbox-image-container">
                            <img id="lightbox-image" src="" alt="" class="lightbox-image">
                        </div>
                        <div class="lightbox-counter">
                            <span id="lightbox-current">1</span> / <span id="lightbox-total">${this.affiches.length}</span>
                        </div>
                    </div>

                    <div class="lightbox-controls">
                        <button class="lightbox-nav lightbox-prev" aria-label="Précédent">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <div class="lightbox-info">
                            <h2 id="lightbox-title" class="lightbox-title"></h2>
                            <p id="lightbox-description" class="lightbox-description"></p>
                        </div>

                        <button class="lightbox-nav lightbox-next" aria-label="Suivant">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    <div class="lightbox-footer">
                        <a id="lightbox-detail-btn" href="#" class="lightbox-detail-btn">
                            Voir la description complète
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Ajouter au body
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightboxElement = document.getElementById('affiches-lightbox');

        // Attacher les événements
        this.attachLightboxEvents();
    }

    createDiscoverButton() {
        // Trouver la section portfolio
        const portfolioSection = document.querySelector('.portfolio-section .section-header');
        if (!portfolioSection || this.affiches.length === 0) return;

        // Vérifier si le bouton existe déjà
        if (document.getElementById('discover-portfolio-btn')) return;

        // Créer le bouton avec un design original
        const buttonHTML = `
            <div class="discover-affiches-banner">
                <div class="banner-content">
                    <div class="banner-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </div>
                    <div class="banner-text">
                        <h3>Découvrez mes créations</h3>
                        <p>Explorez ma galerie d'affiches avec navigation interactive</p>
                    </div>
                    <button id="discover-portfolio-btn" class="banner-cta">
                        <span>Lancer la galerie</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        // Insérer après le header de la section portfolio
        portfolioSection.insertAdjacentHTML('afterend', buttonHTML);

        // Attacher l'événement
        document.getElementById('discover-portfolio-btn').addEventListener('click', () => {
            this.open(0);
        });
    }

    attachLightboxEvents() {
        // Fermer
        const closeBtn = this.lightboxElement.querySelector('.lightbox-close');
        const overlay = this.lightboxElement.querySelector('.lightbox-overlay');

        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', () => this.close());

        // Navigation
        const prevBtn = this.lightboxElement.querySelector('.lightbox-prev');
        const nextBtn = this.lightboxElement.querySelector('.lightbox-next');

        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());

        // Clavier
        document.addEventListener('keydown', (e) => {
            if (!this.lightboxElement.classList.contains('active')) return;

            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    attachPortfolioEvents() {
        // Attendre que le portfolio soit généré
        setTimeout(() => {
            const portfolioItems = document.querySelectorAll('.portfolio-item.poster');
            portfolioItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');

                // Trouver l'index de cette affiche dans notre tableau
                const affiche = this.affiches.find(a => a.category === category);
                if (!affiche) return;

                const afficheIndex = this.affiches.indexOf(affiche);

                // Remplacer le comportement du clic
                item.addEventListener('click', (e) => {
                    const link = item.querySelector('.view-project');
                    if (link) {
                        e.preventDefault();
                        this.open(afficheIndex);
                    }
                });
            });
        }, 1000);
    }

    open(index) {
        this.currentIndex = index;
        this.updateContent();
        this.lightboxElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightboxElement.classList.remove('active');
        document.body.style.overflow = '';
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.affiches.length) % this.affiches.length;
        this.updateContent('left');
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.affiches.length;
        this.updateContent('right');
    }

    updateContent(direction) {
        const affiche = this.affiches[this.currentIndex];
        const img = document.getElementById('lightbox-image');
        const container = img.parentElement;

        if (direction) {
            // Slide out
            const outClass = direction === 'right' ? 'slide-out-left' : 'slide-out-right';
            const inClass  = direction === 'right' ? 'slide-in-right' : 'slide-in-left';

            container.classList.add(outClass);

            setTimeout(() => {
                container.classList.remove(outClass);

                img.src = affiche.image;
                img.alt = affiche.title;

                document.getElementById('lightbox-title').textContent = affiche.title;
                document.getElementById('lightbox-description').textContent = affiche.description;
                document.getElementById('lightbox-detail-btn').href = affiche.link;
                document.getElementById('lightbox-current').textContent = this.currentIndex + 1;
                document.getElementById('lightbox-total').textContent = this.affiches.length;

                container.classList.add(inClass);
                setTimeout(() => container.classList.remove(inClass), 350);
            }, 200);
        } else {
            img.src = affiche.image;
            img.alt = affiche.title;
            document.getElementById('lightbox-title').textContent = affiche.title;
            document.getElementById('lightbox-description').textContent = affiche.description;
            document.getElementById('lightbox-detail-btn').href = affiche.link;
            document.getElementById('lightbox-current').textContent = this.currentIndex + 1;
            document.getElementById('lightbox-total').textContent = this.affiches.length;
        }
    }
}

// Initialiser la lightbox quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    if (typeof siteData !== 'undefined') {
        window.affichesLightbox = new AffichesLightbox();
    }
});
