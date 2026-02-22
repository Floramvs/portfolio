// ========================================
// INITIALISATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeSite();
});

function initializeSite() {
    generateServices();
    generateStreamers();
    generateCompanies();
    generateEvents();
    generateSocialStats();
    generatePortfolio();
    generateContactInfo();

    initCustomCursor();
    initSmoothScroll();
    initScrollAnimations();
    initPortfolioFilters();
    initMobileMenu();
    initContactForm();
    initNavbarScroll();

    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// ========================================
// GÉNÉRATION DU CONTENU DYNAMIQUE
// ========================================

function generateServices() {
    const container = document.getElementById('services-container');
    if (!container || !siteData.services) return;

    // Services populaires en premier, puis les autres
    const featured = siteData.services.filter(s => s.featured);
    const others = siteData.services.filter(s => !s.featured);
    const sorted = [...featured, ...others];

    container.innerHTML = sorted.map((service, index) => {
        const detailsHTML = service.details
            ? `<ul class="service-details">
                ${service.details.map(detail => `<li>${detail}</li>`).join('')}
               </ul>`
            : '';

        const featuredBadge = service.featured
            ? '<span class="service-badge">Populaire</span>'
            : '';

        const isOnQuote = service.pricing === "Sur devis";
        const ctaText = isOnQuote ? "Demander un devis" : "En savoir plus";
        const ctaAction = isOnQuote
            ? 'onclick="document.getElementById(\'contact\').scrollIntoView({behavior: \'smooth\'})"'
            : `onclick="window.location.href='service-details.html?service=${encodeURIComponent(service.title)}'"`;

        return `
            <div class="service-card ${service.featured ? 'featured' : ''}" style="animation-delay: ${index * 0.1}s">
                ${featuredBadge}
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                ${detailsHTML}
                <div class="service-pricing">${service.pricing || 'Sur devis'}</div>
                <button class="service-cta-btn" ${ctaAction}>${ctaText}</button>
            </div>
        `;
    }).join('');
}

function generateStreamers() {
    const container = document.getElementById('streamers-container');
    if (!container || !siteData.streamers) return;

    // On multiplie suffisamment pour remplir l'écran plusieurs fois
    let streamers = [...siteData.streamers];
    while (streamers.length < 20) {
        streamers = [...streamers, ...siteData.streamers];
    }

    const oneSetHTML = streamers.map((streamer) => `
        <div class="client-item">
            <a href="${streamer.link}" class="client-link" title="${streamer.name}">
                <img src="${streamer.logo}" alt="${streamer.name}" class="client-logo streamer">
            </a>
        </div>
    `).join('');

    // 2 sets identiques dans le DOM — quand on a scrollé d'une moitié, on remet à 0
    container.innerHTML = oneSetHTML + oneSetHTML;

    let offset = 0;
    let halfWidth = 0;
    let paused = false;
    let loopStarted = false;
    const speed = 0.5;

    function startLoop() {
        if (loopStarted) return; // évite les démarrages multiples
        loopStarted = true;

        // Mesure après un frame pour que le DOM soit rendu
        requestAnimationFrame(() => {
            halfWidth = container.scrollWidth / 2;

            function tick() {
                if (!paused) {
                    offset += speed;
                    if (offset >= halfWidth) {
                        offset -= halfWidth; // reset instantané et invisible
                    }
                    container.style.transform = `translateX(-${offset}px)`;
                }
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }

    // Attendre que toutes les images soient chargées avant de mesurer
    const allImgs = container.querySelectorAll('img');
    let loaded = 0;
    const total = allImgs.length;

    function onImgDone() {
        loaded++;
        if (loaded >= total) startLoop();
    }

    if (total === 0) {
        startLoop();
    } else {
        allImgs.forEach(img => {
            if (img.complete) {
                onImgDone();
            } else {
                img.addEventListener('load',  onImgDone);
                img.addEventListener('error', onImgDone);
            }
        });
    }

    // Pause uniquement au survol des items (logos), pas du fond du carousel
    container.addEventListener('mouseover', (e) => {
        if (e.target.closest('.client-item')) paused = true;
    });
    container.addEventListener('mouseout', (e) => {
        if (e.target.closest('.client-item')) paused = false;
    });
}

function generateCompanies() {
    const container = document.getElementById('companies-container');
    if (!container || !siteData.companies) return;

    container.innerHTML = siteData.companies.map(company => `
        <div class="company-item">
            <a href="${company.link}" class="client-link" title="${company.name}">
                <img src="${company.logo}" alt="${company.name}" class="client-logo">
            </a>
        </div>
    `).join('');
}

function generateEvents() {
    const container = document.getElementById('events-container');
    if (!container || !siteData.events) return;

    // Les events sont cliquables et amènent à leur page descriptive
    container.innerHTML = siteData.events.map(event => `
        <div class="event-item">
            <a href="${event.link}" class="event-link" title="${event.name}">
                <img src="${event.logo}" alt="${event.name}" class="event-logo">
                <span class="event-name">${event.name}</span>
            </a>
        </div>
    `).join('');
}

function generateSocialStats() {
    const container = document.getElementById('social-stats-container');
    if (!container || !siteData.socialStats) return;

    container.innerHTML = siteData.socialStats.map((social, index) => {
        const hero = social.stats[0];
        const rest = social.stats.slice(1);

        const restHTML = rest.map(stat => `
            <div class="sn-sub-stat">
                <span class="sn-sub-value">${stat.value}</span>
                <span class="sn-sub-label">${stat.label}</span>
            </div>
        `).join('');

        return `
            <a href="${social.link}" target="_blank" rel="noopener noreferrer" class="sn-card-link">
                <div class="sn-card" style="--sc: ${social.color}; animation-delay: ${index * 0.08}s">
                    <div class="sn-top">
                        <div class="sn-identity">
                            <span class="sn-icon">${social.icon}</span>
                            <div>
                                <div class="sn-platform">${social.platform}</div>
                                <div class="sn-handle">${social.handle}</div>
                            </div>
                        </div>
                        ${social.followers ? `<div class="sn-followers">
                            <span class="sn-fcount">${social.followers}</span>
                            <span class="sn-flabel">abonnés</span>
                        </div>` : ''}
                    </div>
                    <div class="sn-hero">
                        <span class="sn-hero-value">${hero.value}</span>
                        <span class="sn-hero-label">${hero.label}</span>
                    </div>
                    <div class="sn-sub-row">
                        ${restHTML}
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

const PHOTOS_PAR_PAGE = 16;

function renderPortfolioItems(filter, showAll = false) {
    const container = document.getElementById('portfolio-grid');
    if (!container || !siteData.portfolio) return;

    // Filtre les items selon la catégorie
    // "Tout" = affiches + miniatures uniquement (pas les photos ni les vidéos)
    const filtered = siteData.portfolio.filter(project => {
        if (filter === 'all') return project.category !== 'photos' && project.category !== 'videos';
        return project.category === filter;
    });

    // Pour les photos : limiter à 15 sauf si "voir plus" a été cliqué
    const isPhotos = filter === 'photos';
    const displayItems = (isPhotos && !showAll)
        ? filtered.slice(0, PHOTOS_PAR_PAGE)
        : filtered;
    const hasMore = isPhotos && !showAll && filtered.length > PHOTOS_PAR_PAGE;

    // Affichage spécial pour la section vidéos (vide pour l'instant)
    if (filter === 'videos') {
        const videos = siteData.portfolio ? siteData.portfolio.filter(p => p.category === 'videos') : [];
        if (videos.length === 0) {
            container.innerHTML = `
                <div class="videos-coming-soon">
                    <div class="videos-icon">🎬</div>
                    <h3>Vidéos à venir</h3>
                    <p>Les vidéos sur lesquelles j'ai travaillé seront bientôt disponibles ici.</p>
                </div>
            `;
            return;
        }
    }

    container.innerHTML = displayItems.map((project, index) => {
        const imageStyle = project.image
            ? `background-image: url('${project.image}');`
            : `background: ${project.gradient};`;

        const posterClass = project.isPoster ? ' poster' : '';
        const sizeClass = project.photoSize ? ` photo-${project.photoSize}` : '';
        const dataLink = project.isPoster && project.link && project.link !== '#' ? ` data-link="${project.link}"` : '';

        const viewBtn = project.link && project.link !== '#' && !project.isPoster
            ? `<a href="${project.link}" class="view-project">Voir le projet →</a>`
            : '';

        // Photos : <img> pour garder le ratio naturel (vertical/horizontal)
        const isPhoto = project.category === 'photos';
        const imageContent = isPhoto && project.image
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
            : '';

        // Photos : pas d'animation-delay (tout apparaît d'un coup au "Voir plus")
        const animDelay = isPhoto ? '' : ` style="animation-delay: ${index * 0.05}s"`;

        return `
            <div class="portfolio-item${posterClass}${sizeClass}" data-category="${project.category}"${dataLink}${animDelay}>
                <div class="portfolio-image"${!isPhoto ? ` style="${imageStyle}"` : ''}>
                    ${imageContent}
                    <div class="portfolio-overlay">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        ${viewBtn}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Bouton "Voir plus" pour les photos
    const existingBtn = document.getElementById('voir-plus-photos');
    if (existingBtn) existingBtn.remove();

    if (hasMore) {
        const btn = document.createElement('button');
        btn.id = 'voir-plus-photos';
        btn.className = 'voir-plus-btn';
        btn.textContent = `Voir plus (${filtered.length - PHOTOS_PAR_PAGE} photos restantes)`;
        btn.addEventListener('click', () => {
            renderPortfolioItems('photos', true);
        });
        container.parentElement.appendChild(btn);
    }

    // Photos : masonry JS après rendu
    if (isPhotos) {
        // Rendre visible immédiatement (pas d'animation séquentielle)
        container.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('visible');
        });
        initMasonryPhotos(container);
    } else {
        // Déclenche les animations de scroll sur les nouveaux items
        setTimeout(() => {
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.classList.add('visible');
            });
        }, 50);
    }
}

// ========================================
// MASONRY PHOTOS
// ========================================

let masonryResizeObserver = null;

function initMasonryPhotos(container) {
    // Nombre de colonnes selon la largeur
    function getColCount() {
        const w = container.offsetWidth;
        if (w < 600) return 2;
        if (w < 900) return 3;
        return 4;
    }

    const GAP = 16; // px entre les items

    function layout() {
        const items = Array.from(container.querySelectorAll('.portfolio-item'));
        if (!items.length) return;

        const colCount = getColCount();
        const totalGap = GAP * (colCount - 1);
        const colWidth = (container.offsetWidth - totalGap) / colCount;

        // Hauteurs courantes de chaque colonne
        const colHeights = new Array(colCount).fill(0);

        items.forEach(item => {
            // Colonne la moins haute
            const minH = Math.min(...colHeights);
            const col  = colHeights.indexOf(minH);

            const x = col * (colWidth + GAP);
            const y = minH;

            item.style.width = colWidth + 'px';
            item.style.left  = x + 'px';
            item.style.top   = y + 'px';

            // Hauteur réelle de l'item après positionnement
            colHeights[col] += item.offsetHeight + GAP;
        });

        // Hauteur totale du container
        container.style.height = Math.max(...colHeights) - GAP + 'px';
    }

    // Layout immédiat — pas d'attente, les photos apparaissent tout de suite
    layout();

    // Recalcul à chaque image chargée (corrige les hauteurs au fur et à mesure)
    const imgs = Array.from(container.querySelectorAll('img'));
    imgs.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load',  layout, { once: true });
            img.addEventListener('error', layout, { once: true });
        }
    });

    // Re-layout au resize
    if (masonryResizeObserver) masonryResizeObserver.disconnect();
    masonryResizeObserver = new ResizeObserver(() => layout());
    masonryResizeObserver.observe(container);
}

function generatePortfolio() {
    renderPortfolioItems('all');
}

function generateContactInfo() {
    const container = document.getElementById('contact-info');
    if (!container || !siteData.contact) return;

    const contact = siteData.contact;
    container.innerHTML = `
        <div class="info-item">
            <span class="info-icon">📧</span>
            <span>${contact.email}</span>
        </div>
        <div class="info-item">
            <span class="info-icon">📍</span>
            <span>${contact.location}</span>
        </div>
        <div class="info-item">
            <span class="info-icon">🌐</span>
            <span>${contact.availability}</span>
        </div>
    `;
}

// ========================================
// CURSEUR PERSONNALISÉ
// ========================================

function initCustomCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = document.getElementById('cursor');
    const interactiveElements = document.querySelectorAll('a, button, .card, .portfolio-item, .sn-card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinks = document.querySelector('.nav-links');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-item, .sn-card').forEach(item => {
        observer.observe(item);
    });
}

// ========================================
// PARALLAXE DES FORMES
// ========================================

if (window.matchMedia('(min-width: 769px)').matches) {
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            const xMove = (x - 0.5) * speed;
            const yMove = (y - 0.5) * speed;
            shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
}

// ========================================
// FILTRES PORTFOLIO
// ========================================

function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('portfolio-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Mode masonry uniquement pour les photos
            grid.classList.remove('filter-photos', 'filter-videos');
            if (filter === 'photos') grid.classList.add('filter-photos');
            if (filter === 'videos') grid.classList.add('filter-videos');

            // Vide et reremplit le grid avec les bons items
            renderPortfolioItems(filter);
        });
    });
}

// ========================================
// MENU MOBILE
// ========================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// ========================================
// NAVBAR AU SCROLL
// ========================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('.submit-button');
        const buttonText = submitButton.querySelector('.button-text');
        const originalText = buttonText.textContent;

        submitButton.disabled = true;
        buttonText.textContent = 'Envoi en cours...';

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        if (isEmailJSConfigured()) {
            await sendEmailWithEmailJS(formData, statusDiv, submitButton, buttonText, originalText);
        } else {
            showDemoSuccessMessage(statusDiv, submitButton, buttonText, originalText, form);
        }
    });
}

function isEmailJSConfigured() {
    const config = siteData.contact.emailjs;
    return config.serviceId !== 'YOUR_SERVICE_ID' &&
           config.templateId !== 'YOUR_TEMPLATE_ID' &&
           config.publicKey !== 'YOUR_PUBLIC_KEY';
}

async function sendEmailWithEmailJS(formData, statusDiv, submitButton, buttonText, originalText) {
    try {
        if (typeof emailjs === 'undefined') await loadEmailJS();
        const config = siteData.contact.emailjs;
        emailjs.init(config.publicKey);
        await emailjs.send(config.serviceId, config.templateId, {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Studio Éther'
        });
        showSuccessMessage(statusDiv, submitButton, buttonText, originalText, document.getElementById('contactForm'));
    } catch (error) {
        console.error('Erreur EmailJS:', error);
        showErrorMessage(statusDiv, submitButton, buttonText, originalText);
    }
}

function loadEmailJS() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function showSuccessMessage(statusDiv, submitButton, buttonText, originalText, form) {
    statusDiv.textContent = '✓ Message envoyé avec succès !';
    statusDiv.className = 'form-status success';
    buttonText.textContent = 'Message envoyé !';
    submitButton.style.background = '#10b981';
    setTimeout(() => {
        buttonText.textContent = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
        statusDiv.style.display = 'none';
        form.reset();
    }, 5000);
}

function showDemoSuccessMessage(statusDiv, submitButton, buttonText, originalText, form) {
    statusDiv.innerHTML = `
        <strong>Mode démo</strong><br>
        Le formulaire n'est pas encore configuré avec EmailJS.<br>
        Consultez le fichier README.md pour l'activer.
    `;
    statusDiv.className = 'form-status success';
    buttonText.textContent = 'Message reçu (démo)';
    submitButton.style.background = '#10b981';
    setTimeout(() => {
        buttonText.textContent = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
        statusDiv.style.display = 'none';
        form.reset();
    }, 5000);
}

function showErrorMessage(statusDiv, submitButton, buttonText, originalText) {
    statusDiv.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
    statusDiv.className = 'form-status error';
    buttonText.textContent = originalText;
    submitButton.disabled = false;
    setTimeout(() => { statusDiv.style.display = 'none'; }, 5000);
}

// ========================================
// GESTION DU BOUTON CTA
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.style.transform = 'scale(0.95)';
            setTimeout(() => { ctaButton.style.transform = 'scale(1)'; }, 150);
        });
    }
});
