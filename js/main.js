document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navigation mobile
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Ferme le menu mobile si ouvert
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Animation des stats dans la section About
    const statsAnimation = () => {
        const stats = document.querySelectorAll('[data-count]');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / duration * 10;
            let current = 0;

            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current);
                    setTimeout(updateCount, 10);
                } else {
                    stat.textContent = target;
                }
            };

            ScrollTrigger.create({
                trigger: stat,
                onEnter: () => updateCount(),
                once: true
            });
        });
    };

    // Portfolio filtrage
    const initPortfolio = () => {
        const portfolioItems = [
            //Logos


            { id: 1, category: 'logo', image: 'images/logos/TurboVisionLogo.jpg', title: 'Logo de la startup Turbo Vision' },
            { id: 2, category: 'logo', image: 'images/logos/03.jpg', title: 'Logo Design 2' },
            { id: 3, category: 'logo', image: 'images/logos/13.jpg', title: 'Logo Design 3' },
            { id: 4, category: 'logo', image: 'images/logos/20.jpg', title: 'Logo Design 4' },
            { id: 5, category: 'logo', image: 'images/logos/21.jpg', title: 'Logo Design 5' },
            { id: 6, category: 'logo', image: 'images/logos/22.jpg', title: 'Logo Design 6' },

            //Affiches


            { id: 7, category: 'affiche', image: 'images/affiches/01.jpg', title: 'Affiche 1' },
            { id: 8, category: 'affiche', image: 'images/affiches/02.jpg', title: 'Affiche 2' },
            { id: 9, category: 'affiche', image: 'images/affiches/04.jpg', title: 'Affiche 3' },
            { id: 11, category: 'affiche', image: 'images/affiches/05.jpg', title: 'Affiche 4' },
            { id: 12, category: 'affiche', image: 'images/affiches/06.jpg', title: 'Affiche 5' },
            { id: 13, category: 'affiche', image: 'images/affiches/07.jpg', title: 'Affiche 6' },
            { id: 14, category: 'affiche', image: 'images/affiches/08.jpg', title: 'Affiche 7' },
            { id: 15, category: 'affiche', image: 'images/affiches/09.jpg', title: 'Affiche 8' },
            { id: 16, category: 'affiche', image: 'images/affiches/10.jpg', title: 'Affiche 9' },
            { id: 17, category: 'affiche', image: 'images/affiches/12.jpg', title: 'Affiche 10' },
            { id: 18, category: 'affiche', image: 'images/affiches/14.jpg', title: 'Affiche 11' },
            { id: 19, category: 'affiche', image: 'images/affiches/15.jpg', title: 'Affiche 12' },
            { id: 20, category: 'affiche', image: 'images/affiches/16.jpg', title: 'Affiche 13' },
            { id: 21, category: 'affiche', image: 'images/affiches/17.jpg', title: 'Affiche 14' },
            { id: 22, category: 'affiche', image: 'images/affiches/18.jpg', title: 'Affiche 15' },
            { id: 23, category: 'affiche', image: 'images/affiches/19.PNG', title: 'Affiche 16' },

            //#web


            { id: 24, category: 'web', image: 'images/website/Ecom01.jpg', title: 'Site e-commerce' },
            { id: 25, category: 'web', image: 'images/website/Gestiondeproj.jpg', title: 'Application Web de Gestion de projet' },
            { id: 26, category: 'web', image: 'images/website/gestionscolaire.jpg', title: 'Application web de Gestion Scolaire' },
            { id: 27, category: 'web', image: 'images/website/SiteEcom.jpg', title: 'Site e-commerce' },

            // Ajoutez plus d'items ici
        ];

        /*const portfolioItems = [
            // Ajoutez plus d'items ici
             // Logos
        { 
            id: 1, 
            category: 'logo', 
            image: 'images/logos/TurboVisionLogo.jpg', 
            title: 'Logo de la startup Turbo Vision',
            description: 'Logo professionnel créé pour Turbo Vision, alliant modernité et innovation dans le domaine du digital.',
            tags: ['Adobe Illustrator', 'Branding', 'Design Vectoriel']
        },
        { 
            id: 2, 
            category: 'logo', 
            image: 'images/logos/03.jpg', 
            title: 'Logo Design 2',
            description: 'Logo minimaliste et élégant conçu pour une marque premium.',
            tags: ['Adobe Illustrator', 'Design Graphique']
        },
        { 
            id: 3, 
            category: 'logo', 
            image: 'images/logos/13.jpg', 
            title: 'Logo Design 3',
            description: 'Identité visuelle moderne pour une entreprise innovante.',
            tags: ['Adobe Illustrator', 'Branding']
        },
        { 
            id: 4, 
            category: 'logo', 
            image: 'images/logos/20.jpg', 
            title: 'Logo Design 4',
            description: 'Logo créatif combinant simplicité et impact visuel.',
            tags: ['Adobe Illustrator', 'Design Vectoriel']
        },
        { 
            id: 5, 
            category: 'logo', 
            image: 'images/logos/21.jpg', 
            title: 'Logo Design 5',
            description: 'Design de marque contemporain pour une entreprise dynamique.',
            tags: ['Adobe Illustrator', 'Branding']
        },
        { 
            id: 6, 
            category: 'logo', 
            image: 'images/logos/22.jpg', 
            title: 'Logo Design 6',
            description: 'Logo professionnel alliant tradition et modernité.',
            tags: ['Adobe Illustrator', 'Design Graphique']
        },

        // Affiches
        { 
            id: 7, 
            category: 'affiche', 
            image: 'images/affiches/01.jpg', 
            title: 'Affiche Publicitaire',
            description: 'Affiche promotionnelle impactante pour une campagne marketing.',
            tags: ['Photoshop', 'Design Publicitaire', 'Communication']
        },
        { 
            id: 8, 
            category: 'affiche', 
            image: 'images/affiches/02.jpg', 
            title: 'Affiche Événementielle',
            description: 'Design d\'affiche créatif pour un événement culturel.',
            tags: ['Photoshop', 'InDesign', 'Communication Visuelle']
        },
        { 
            id: 9, 
            category: 'affiche', 
            image: 'images/affiches/04.jpg', 
            title: 'Affiche Promotionnelle',
            description: 'Conception graphique pour une campagne promotionnelle.',
            tags: ['Photoshop', 'Design Publicitaire']
        },
        // ... Répéter pour les affiches 11-23 avec des variations de descriptions et tags similaires

        // Web
        { 
            id: 24, 
            category: 'web', 
            image: 'images/website/Ecom01.jpg', 
            title: 'Site E-commerce',
            description: 'Plateforme e-commerce complète avec gestion des produits, panier et paiement sécurisé.',
            tags: ['React', 'Node.js', 'MongoDB', 'Responsive Design']
        },
        { 
            id: 25, 
            category: 'web', 
            image: 'images/website/Gestiondeproj.jpg', 
            title: 'Application Web de Gestion de projet',
            description: 'Solution complète pour la gestion de projets, le suivi des tâches et la collaboration d\'équipe.',
            tags: ['Vue.js', 'Laravel', 'MySQL', 'Agile']
        },
        { 
            id: 26, 
            category: 'web', 
            image: 'images/website/gestionscolaire.jpg', 
            title: 'Application web de Gestion Scolaire',
            description: 'Système de gestion scolaire complet incluant suivi des élèves, notes et emplois du temps.',
            tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery']
        },
        { 
            id: 27, 
            category: 'web', 
            image: 'images/website/SiteEcom.jpg', 
            title: 'Site E-commerce Premium',
            description: 'Boutique en ligne haut de gamme avec expérience utilisateur optimisée et design responsive.',
            tags: ['React', 'Express', 'MongoDB', 'Tailwind CSS']
        }
        ];*/

        const renderPortfolioItems = (items) => {
            const grid = document.getElementById('portfolio-grid');
            grid.innerHTML = items.map(item => `
                <div class="portfolio-item group" data-category="${item.category}">
                    <div class="relative overflow-hidden rounded-xl">
                        <img src="${item.image}" 
                             alt="${item.title}" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-center p-6">
                                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                                <!--<button class="view-project px-6 py-2 bg-coral rounded-full text-sm hover:bg-coral/80 transition-colors"
                                        data-project-id="${item.id}">
                                    Voir plus
                                </button>-->
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Ajouter les event listeners pour les boutons
            document.querySelectorAll('.view-project').forEach(button => {
                button.addEventListener('click', () => {
                    const projectId = parseInt(button.dataset.projectId);
                    const project = portfolioItems.find(item => item.id === projectId);
                    if (project) {
                        openProjectModal(projectId);
                    }
                });
            });
        };

        // Gestion des filtres
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('bg-coral', 'text-beige'));
                // Ajouter la classe active au bouton cliqué
                button.classList.add('bg-coral', 'text-beige');

                const category = button.dataset.filter;
                const filteredItems = category === 'all' 
                    ? portfolioItems 
                    : portfolioItems.filter(item => item.category === category);
                
                renderPortfolioItems(filteredItems);
            });
        });

        // Afficher tous les projets au chargement
        renderPortfolioItems(portfolioItems);
    };

    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;

            // Désactive le bouton pendant l'envoi
            submitBtn.disabled = true;
            btnText.textContent = 'Envoi en cours...';

            // Récupération des données du formulaire
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            try {
                const response = await fetch('https://formspree.io/f/mpwwoypk', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    btnText.textContent = 'Message envoyé !';
                    form.reset();
                    setTimeout(() => {
                        btnText.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                } else {
                    throw new Error('Erreur lors de l\'envoi');
                }
            } catch (error) {
                console.error('Erreur:', error);
                btnText.textContent = 'Erreur, réessayez';
                setTimeout(() => {
                    btnText.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // Animations GSAP
    const initAnimations = () => {
        // Fade in des sections
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Animation du hero
        gsap.from('.hero h1', {
            opacity: 0,
            y: 100,
            duration: 1,
            delay: 0.5
        });

        gsap.from('.hero p', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.8
        });
    };

    // Initialize everything
    statsAnimation();
    initPortfolio();
    initAnimations();

    // Gestion de la modal
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    let currentImageIndex = 0;
    let currentProject = null;

    const openProjectModal = (projectId) => {
        const project = portfolioItems.find(item => item.id === projectId);
        if (!project) return;

        // Mise à jour du contenu de la modal
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        // Mise à jour des tags
        modalTags.innerHTML = project.tags.map(tag => `
            <span class="px-3 py-1 bg-coral/20 rounded-full text-xs font-medium">
                ${tag}
            </span>
        `).join('');

        // Afficher la modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Animation d'ouverture
        animateModal(true);
    };

    // Navigation dans la galerie
    modalImage.addEventListener('click', () => {
        if (!currentProject) return;
        currentImageIndex = (currentImageIndex + 1) % currentProject.gallery.length;
        modalImage.src = currentProject.gallery[currentImageIndex];
    });

    // Fermeture de la modal
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Réactive le scroll
    });

    // Fermeture avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Fermeture en cliquant sur l'overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Animation d'entrée/sortie avec GSAP
    const animateModal = (show) => {
        const modalContent = modal.querySelector('.relative');
        if (show) {
            gsap.fromTo(modalContent, 
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3 }
            );
        }
    };
});