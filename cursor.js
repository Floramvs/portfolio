// ========================================
// CURSEUR PERSONNALISÉ
// ========================================
// Gestion du curseur custom sur toutes les pages

(function() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    // Rendre le curseur visible dès le début
    cursor.style.opacity = '1';

    // Suivre le mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        // S'assurer que le curseur est toujours visible
        cursor.style.opacity = '1';
    });

    // Effet hover sur les éléments interactifs
    const interactiveElements = 'a, button, .portfolio-item, .service-card, .client-item, input, textarea, .lightbox-nav, .lightbox-close';

    document.addEventListener('mouseover', (e) => {
        if (e.target.matches(interactiveElements) || e.target.closest(interactiveElements)) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches(interactiveElements) || e.target.closest(interactiveElements)) {
            cursor.classList.remove('hover');
        }
    });
})();
