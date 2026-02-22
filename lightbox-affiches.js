// lightbox-affiches.js
class AffichesLightbox {
    constructor() {
        this.affiches = [];
        this.currentIndex = 0;
        this.isAnimating = false;
        this.lightboxElement = null;
        this.SLOTS = ['4l','3l','2l','1l','0','1r','2r','3r','4r']; // left→right
        this.init();
    }

    init() {
        if (siteData && siteData.portfolio) {
            this.affiches = siteData.portfolio.filter(item => item.image);
        }
        this.createLightbox();
        this.attachPortfolioEvents();
        this.createDiscoverButton();
    }

    createLightbox() {
        // Génère les 9 slots dynamiquement
        const slotsHTML = this.SLOTS.map(s => `
            <div class="carousel-slot slot-${s}" id="slot-${s}">
                <img class="carousel-img" id="img-${s}" src="" alt="">
            </div>
        `).join('');

        // Génère les vignettes du dock
        const dockHTML = this.affiches.map((a, i) => `
            <div class="dock-thumb" data-index="${i}">
                <img src="${a.image}" alt="${a.title}" loading="lazy">
            </div>
        `).join('');

        const lightboxHTML = `
            <div id="affiches-lightbox" class="affiches-lightbox">
                <div class="lightbox-overlay"></div>
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Fermer">×</button>
                    <div class="carousel-scene" id="carousel-scene">
                        ${slotsHTML}
                    </div>
                    <div class="lightbox-counter">
                        <span id="lightbox-current">1</span> / <span id="lightbox-total">${this.affiches.length}</span>
                    </div>
                    <div class="lightbox-controls">
                        <button class="lightbox-nav lightbox-prev" aria-label="Précédent">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <div class="lightbox-info">
                            <h2 id="lightbox-title" class="lightbox-title"></h2>
                            <p id="lightbox-description" class="lightbox-description"></p>
                        </div>
                        <button class="lightbox-nav lightbox-next" aria-label="Suivant">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                    <div class="lightbox-footer">
                        <a id="lightbox-detail-btn" href="#" class="lightbox-detail-btn">Voir la description complète</a>
                        <button id="lightbox-theme-btn" class="lightbox-theme-btn" aria-label="Changer le thème">
                            <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        </button>
                    </div>
                    <div class="lightbox-dock" id="lightbox-dock">
                        <div class="dock-track" id="dock-track">
                            ${dockHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightboxElement = document.getElementById('affiches-lightbox');
        this.attachLightboxEvents();
    }

    createDiscoverButton() {
        const portfolioSection = document.querySelector('.portfolio-section .section-header');
        if (!portfolioSection || this.affiches.length === 0) return;
        if (document.getElementById('discover-portfolio-btn')) return;

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
                        <p>Explorez ma galerie complète avec navigation interactive</p>
                    </div>
                    <button id="discover-portfolio-btn" class="banner-cta">
                        <span>Lancer la galerie</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        `;

        portfolioSection.insertAdjacentHTML('afterend', buttonHTML);
        document.getElementById('discover-portfolio-btn').addEventListener('click', () => {
            this.open(Math.floor(Math.random() * this.affiches.length));
        });
    }

    attachLightboxEvents() {
        this.lightboxElement.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        this.lightboxElement.querySelector('.lightbox-overlay').addEventListener('click', () => this.close());
        this.lightboxElement.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
        this.lightboxElement.querySelector('.lightbox-next').addEventListener('click', () => this.next());

        // Dock — clic sur une vignette
        this.lightboxElement.querySelector('#dock-track').addEventListener('click', (e) => {
            const thumb = e.target.closest('.dock-thumb');
            if (!thumb || this.isAnimating) return;
            const idx = parseInt(thumb.dataset.index, 10);
            if (idx === this.currentIndex) return;
            this.currentIndex = idx;
            const scene = document.getElementById('carousel-scene');
            scene.classList.add('no-transition');
            scene.removeAttribute('data-dir');
            this.loadSlides();
            this.updateDock();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    scene.classList.remove('no-transition');
                });
            });
        });

        // Dock — effet magnétique macOS au survol
        const track = this.lightboxElement.querySelector('#dock-track');
        track.addEventListener('mousemove', (e) => this.dockMagnet(e));
        track.addEventListener('mouseleave', () => this.dockReset());

        this.lightboxElement.querySelector('#lightbox-theme-btn').addEventListener('click', () => {
            const isLight = this.lightboxElement.classList.toggle('lightbox-light');
            const moon = this.lightboxElement.querySelector('.icon-moon');
            const sun  = this.lightboxElement.querySelector('.icon-sun');
            moon.style.display = isLight ? 'none' : '';
            sun.style.display  = isLight ? ''     : 'none';
        });

        document.addEventListener('keydown', (e) => {
            if (!this.lightboxElement.classList.contains('active')) return;
            if (e.key === 'Escape')     this.close();
            if (e.key === 'ArrowLeft')  this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    attachPortfolioEvents() {
        // Délégation d'événements sur le grid — fonctionne même après re-render
        const grid = document.getElementById('portfolio-grid');
        if (!grid) return;
        grid.addEventListener('click', (e) => {
            const item = e.target.closest('.portfolio-item.poster');
            if (!item) return;
            const link = item.getAttribute('data-link');
            if (link) {
                e.preventDefault();
                window.location.href = link;
            }
        });
    }

    indexAt(offset) {
        const n = this.affiches.length;
        return ((this.currentIndex + offset) % n + n) % n;
    }

    // offsets: 4l=-4, 3l=-3, 2l=-2, 1l=-1, 0=0, 1r=+1, 2r=+2, 3r=+3, 4r=+4
    slotOffset(slot) {
        const map = {'4l':-4,'3l':-3,'2l':-2,'1l':-1,'0':0,'1r':1,'2r':2,'3r':3,'4r':4};
        return map[slot];
    }

    loadSlides() {
        this.SLOTS.forEach(s => {
            const offset  = this.slotOffset(s);
            const affiche = this.affiches[this.indexAt(offset)];
            const img     = document.getElementById('img-' + s);
            if (img.src !== affiche.image) {
                img.src = affiche.image;
                img.alt = affiche.title;
            }
        });

        const current = this.affiches[this.currentIndex];
        document.getElementById('lightbox-title').textContent       = current.title;
        document.getElementById('lightbox-description').textContent = current.description;
        document.getElementById('lightbox-detail-btn').href         = current.link;
        document.getElementById('lightbox-current').textContent     = this.currentIndex + 1;
        document.getElementById('lightbox-total').textContent       = this.affiches.length;

        // Préchargement discret des images suivante et précédente
        this._preload(this.indexAt(+1));
        this._preload(this.indexAt(-1));
        this._preload(this.indexAt(+2));
        this._preload(this.indexAt(-2));
    }

    _preload(idx) {
        const src = this.affiches[idx]?.image;
        if (!src || this._preloaded?.has(src)) return;
        if (!this._preloaded) this._preloaded = new Set();
        this._preloaded.add(src);
        const img = new Image();
        img.src = src;
    }

    updateDock() {
        const thumbs = this.lightboxElement.querySelectorAll('.dock-thumb');
        thumbs.forEach((t, i) => {
            t.classList.toggle('active', i === this.currentIndex);
        });
        // Scroll le dock pour centrer la vignette active
        const active = this.lightboxElement.querySelector('.dock-thumb.active');
        if (active) {
            active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    dockMagnet(e) {
        if (this._magnetRafPending) return;
        this._magnetRafPending = true;
        requestAnimationFrame(() => {
            this._magnetRafPending = false;
            const thumbs = this.lightboxElement.querySelectorAll('.dock-thumb');
            const cx = e.clientX;
            const maxDist = 80;
            thumbs.forEach(thumb => {
                const rect = thumb.getBoundingClientRect();
                const dist = Math.abs(cx - (rect.left + rect.width / 2));
                const scale = dist < maxDist ? 1 + 0.55 * (1 - dist / maxDist) : 1;
                thumb.style.transform = `scale(${scale})`;
            });
        });
    }

    dockReset() {
        const thumbs = this.lightboxElement.querySelectorAll('.dock-thumb');
        thumbs.forEach(thumb => {
            thumb.style.transform = '';
        });
    }

    open(index) {
        this.currentIndex = index;
        this.loadSlides();
        this.updateDock();
        this.lightboxElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightboxElement.classList.remove('active');
        document.body.style.overflow = '';
    }

    prev() { if (!this.isAnimating) this.animate('right'); }
    next() { if (!this.isAnimating) this.animate('left'); }

    animate(direction) {
        this.isAnimating = true;
        const scene = document.getElementById('carousel-scene');

        scene.setAttribute('data-dir', direction);

        // DURATION doit correspondre exactement à --dur (580ms) en CSS
        const DURATION = 560;
        setTimeout(() => {
            // Mise à jour de l'index
            this.currentIndex = direction === 'left' ? this.indexAt(+1) : this.indexAt(-1);

            // Coupe toutes les transitions (slots + ::after)
            scene.classList.add('no-transition');
            scene.removeAttribute('data-dir');
            this.loadSlides();
            this.updateDock();

            // Double rAF : laisse le navigateur appliquer le reset visuel sans transition
            // avant de réactiver — évite tout saut ou flash
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    scene.classList.remove('no-transition');
                    this.isAnimating = false;
                });
            });
        }, DURATION);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof siteData !== 'undefined') {
        window.affichesLightbox = new AffichesLightbox();
    }
});
