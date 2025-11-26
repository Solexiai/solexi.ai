/**
 * SOLEXI.AI - Main JavaScript
 * Interactions et animations pour le site
 */

// ===================================
// 1. NAVIGATION MOBILE
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
});

// ===================================
// 2. NAVIGATION STICKY
// ===================================

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===================================
// 3. SMOOTH SCROLL POUR LES ANCRES
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorer les liens avec seulement "#"
        if (href === '#' || href === '#demo' || href === '#contact' || href === '#consultation') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.main-nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// 4. ANIMATIONS AU SCROLL
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
const animateElements = document.querySelectorAll(
    '.vault-card, .path-card, .recipe-card, .heir-card, .avatar-card, ' +
    '.app-card, .solution-block, .use-case-card, .legacy-card, ' +
    '.institution-card, .testimonial-card, .pricing-card, .premium-tier'
);

animateElements.forEach(el => {
    observer.observe(el);
});

// ===================================
// 5. COMPTEURS ANIMÉS
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observer pour les statistiques
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('counted')) {
                const target = parseInt(statNumber.textContent);
                if (!isNaN(target)) {
                    statNumber.classList.add('counted');
                    animateCounter(statNumber, target);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// 6. GESTION DES FORMULAIRES (Placeholder)
// ===================================

const demoButtons = document.querySelectorAll('[href="#demo"], .nav-btn, .btn-primary, .cta-btn-vedette, .btn-prestige');
demoButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#demo' || this.textContent.includes('démo') || this.textContent.includes('Créer') || this.textContent.includes('consultation')) {
            e.preventDefault();
            showDemoModal();
        }
    });
});

function showDemoModal() {
    // Créer une modale simple
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <button class="demo-modal-close">&times;</button>
            <h2>Demander une démo</h2>
            <p>Remplissez ce formulaire et notre équipe vous contactera sous 24 heures.</p>
            <form class="demo-form">
                <div class="form-group">
                    <label for="name">Nom complet *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="solution">Solution qui vous intéresse *</label>
                    <select id="solution" name="solution" required>
                        <option value="">Sélectionnez...</option>
                        <option value="personne">Pour Vous & Votre Famille</option>
                        <option value="musee">Musées & Histoire</option>
                        <option value="vedette">Vedettes & Institutions</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" class="form-submit-btn">Envoyer la demande</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Ajouter les styles de la modale
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .demo-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                padding: 2rem;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .demo-modal-content {
                background: white;
                padding: 3rem;
                border-radius: 20px;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            
            @keyframes slideUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .demo-modal-close {
                position: absolute;
                top: 1.5rem;
                right: 1.5rem;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #666;
                transition: color 0.3s;
            }
            
            .demo-modal-close:hover {
                color: #000;
            }
            
            .demo-modal h2 {
                font-family: 'Cormorant Garamond', serif;
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: #1A1A1A;
            }
            
            .demo-modal p {
                color: #666;
                margin-bottom: 2rem;
            }
            
            .form-group {
                margin-bottom: 1.5rem;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: #1A1A1A;
            }
            
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: 0.75rem 1rem;
                border: 2px solid #E0E0E0;
                border-radius: 10px;
                font-family: inherit;
                font-size: 1rem;
                transition: border-color 0.3s;
            }
            
            .form-group input:focus,
            .form-group select:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #1A1A1A;
            }
            
            .form-submit-btn {
                width: 100%;
                padding: 1rem 2rem;
                background: #1A1A1A;
                color: white;
                border: none;
                border-radius: 50px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: transform 0.3s, box-shadow 0.3s;
            }
            
            .form-submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            
            @media (max-width: 768px) {
                .demo-modal-content {
                    padding: 2rem;
                }
                
                .demo-modal h2 {
                    font-size: 2rem;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    // Fermer la modale
    const closeBtn = modal.querySelector('.demo-modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Gérer la soumission du formulaire
    const form = modal.querySelector('.demo-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simuler l'envoi
        const submitBtn = form.querySelector('.form-submit-btn');
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            modal.innerHTML = `
                <div class="demo-modal-content" style="text-align: center; padding: 4rem 3rem;">
                    <div style="width: 100px; height: 100px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; font-size: 3rem; color: white;">
                        ✓
                    </div>
                    <h2 style="margin-bottom: 1rem;">Demande envoyée !</h2>
                    <p>Merci pour votre intérêt. Notre équipe vous contactera sous 24 heures.</p>
                    <button onclick="this.closest('.demo-modal').remove()" style="margin-top: 2rem; padding: 1rem 2rem; background: #1A1A1A; color: white; border: none; border-radius: 50px; font-weight: 600; cursor: pointer;">
                        Fermer
                    </button>
                </div>
            `;
            
            setTimeout(() => {
                modal.remove();
            }, 3000);
        }, 1500);
    });
}

// ===================================
// 7. ANIMATIONS CSS AJOUTÉES
// ===================================

// Ajouter les styles d'animation
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .vault-card,
    .path-card,
    .recipe-card,
    .heir-card,
    .avatar-card,
    .app-card,
    .solution-block,
    .use-case-card,
    .legacy-card,
    .institution-card,
    .testimonial-card,
    .pricing-card,
    .premium-tier {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Navigation scrolled effect */
    .main-nav.scrolled {
        box-shadow: 0 5px 30px rgba(0,0,0,0.1);
    }
    
    /* Mobile menu active */
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: left 0.3s ease;
            z-index: 999;
        }
        
        .nav-links.active {
            left: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    }
`;
document.head.appendChild(animationStyles);

// ===================================
// 8. CONSOLE LOG
// ===================================

console.log('%cSolexi.ai', 'font-size: 40px; font-weight: bold; color: #1A1A1A;');
console.log('%cPréserver l\'essentiel pour l\'éternité.', 'font-size: 14px; color: #666;');
console.log('');
console.log('Développé avec ❤️ pour créer des héritages numériques.');
