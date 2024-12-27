// Initialisation des animations AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Gestion du thème sombre/clair
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Filtrage du portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Mise à jour des boutons actifs
        filterButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        // Filtrage des projets
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Données des projets
const projectsData = {
    project1: {
        title: "Site E-commerce",
        description: "Une plateforme e-commerce complète avec système de paiement intégré et gestion des stocks en temps réel.",
        image: "./images/Ecom01.jpg",
        client: "BoutiquePro",
        technologies: "django, Javascript, html/css",
        date: "2024"
    },
    project2: {
        title: "Application Mobile",
        description: "Application mobile de gestion de tâches avec synchronisation cloud et notifications.",
        image: "./images/gestionscolaire.jpg",
        client: "TaskMaster",
        technologies: "Flutter, Firebase",
        date: "2024"
    },
    project3: {
        title: "Logiciel de Gestion",
        description: "Solution de gestion d'entreprise personnalisée avec modules de facturation et CRM.",
        image: "./images/Gestiondeproj.jpg",
        client: "GestionPro",
        technologies: "java, Postgree SQL",
        date: "2024"
    },
    project4: {
        title: "Série Publicitaire",
        description: "Production d'une série de spots publicitaires pour une campagne digitale.",
        videoUrl: "./videos/montage01.mp4",
        thumbnail: "./images/logo.jpg",
        client: "MediaCorp",
        technologies: "Adobe Premiere, After Effects",
        date: "2024",
        type: "video"
    },
    project5: {
        title: "application de Elearning",
        description: "apprendre en ligne deviens plus facile avec Elearn.",
        image: "./images/Elearning.jpg",
        client: "MediaCorp",
        technologies: "Adobe Premiere, After Effects",
        date: "2024",
        type: "video"
    },
    logo1: {
        title: "Logo Entreprise",
        description: "Création d'une identité visuelle moderne et professionnelle pour une entreprise de technologie.",
        image: "images/11.jpg",
        client: "TechCorp",
        technologies: "Adobe Illustrator, Photoshop",
        date: "2024"
    },
    logo2: {
        title: "Logo Restaurant",
        description: "Design d'un logo élégant et mémorable pour un restaurant gastronomique.",
        image: "images/03.jpg",
        client: "Le Gourmet",
        technologies: "Adobe Illustrator, Photoshop",
        date: "2024"
    },
    logo3: {
        title: "Logo Restaurant",
        description: "Design d'un logo élégant et mémorable pour un restaurant gastronomique.",
        image: "images/13.jpg",
        client: "Le Gourmet",
        technologies: "Adobe Illustrator, Photoshop",
        date: "2024"
    },
    logo4: {
        title: "Logo Restaurant",
        description: "Design d'un logo élégant et mémorable pour un restaurant gastronomique.",
        image: "images/15.jpg",
        client: "Le Gourmet",
        technologies: "Adobe Illustrator, Photoshop",
        date: "2024"
    },
    logo5: {
        title: "Logo Restaurant",
        description: "Design d'un logo élégant et mémorable pour un restaurant gastronomique.",
        image: "images/20.jpg",
        client: "Le Gourmet",
        technologies: "Adobe Illustrator, Photoshop",
        date: "2024"
    },
    design1: {
        title: "Affiche Événement",
        description: "Conception d'une affiche attractive pour un événement culturel majeur.",
        image: "images/01.jpg",
        client: "Festival des Arts",
        technologies: "Adobe Photoshop, InDesign",
        date: "2024"
    },
    design2: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/02.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design3: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/06.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design4: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/09.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design5: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/10.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design6: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/12.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design7: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/16.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design8: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/19.PNG",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    },
    design9: {
        title: "Brochure Commerciale",
        description: "Création d'une brochure professionnelle présentant les services de l'entreprise.",
        image: "images/17.jpg",
        client: "BusinessPro",
        technologies: "Adobe InDesign, Illustrator",
        date: "2024"
    }


    
};

// Filtrage du portfolio
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Mise à jour des boutons actifs
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filtrage
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Gestion du modal
const modal = document.querySelector('.portfolio-modal');
const modalContent = modal.querySelector('.modal-content');

function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Mise à jour du contenu textuel
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-tech').textContent = project.technologies;
    document.getElementById('modal-date').textContent = project.date;

    // Gestion spécifique de la vidéo
    const mediaContainer = document.getElementById('modal-media-container');
    mediaContainer.innerHTML = '';

    if (project.videoUrl) {
        const video = document.createElement('video');
        video.controls = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';

        const source = document.createElement('source');
        source.src = project.videoUrl;
        source.type = 'video/mp4';
        
        video.appendChild(source);
        mediaContainer.appendChild(video);

        // Gestion des erreurs de chargement
        video.onerror = () => {
            console.error('Erreur de chargement de la vidéo:', project.videoUrl);
            mediaContainer.innerHTML = `
                <div class="media-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Impossible de charger la vidéo</p>
                </div>
            `;
        };
    } else if (project.image) {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        mediaContainer.appendChild(img);
    }

    // Affichage du modal
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

// Event listeners
document.querySelectorAll('.view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.closest('.portfolio-item').getAttribute('data-project');
        openModal(projectId);
    });
});

// Fermeture du modal
function closeModal() {
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

document.querySelector('.close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Navigation entre les projets
let currentProjectIndex = 0;
const projectIds = Object.keys(projectsData);

function navigateProject(direction) {
    currentProjectIndex = (currentProjectIndex + direction + projectIds.length) % projectIds.length;
    const nextProjectId = projectIds[currentProjectIndex];
    
    modalContent.classList.add('pop-out');
    
    setTimeout(() => {
        openModal(nextProjectId);
        modalContent.classList.remove('pop-out');
    }, 300);
}

document.querySelector('.nav-btn.prev').addEventListener('click', () => navigateProject(-1));
document.querySelector('.nav-btn.next').addEventListener('click', () => navigateProject(1));

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;

    // Simuler un délai d'envoi
    setTimeout(() => {
        alert('Message envoyé avec succès !');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        this.reset();
    }, 1500);
});

// Animation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll pour les éléments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Gestion de la lecture vidéo dans la grille
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const playIcon = container.querySelector('.video-play-icon');

    // Lecture au survol
    container.addEventListener('mouseenter', () => {
        video.play();
        playIcon.style.opacity = '0';
    });

    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        playIcon.style.opacity = '1';
    });
});

// Ajout d'une fonction de vérification au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si tous les projets sont présents
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const projectId = item.getAttribute('data-project');
        if (!projectsData[projectId]) {
            console.error(`Projet manquant dans les données : ${projectId}`);
        }
    });

    // Initialiser les vidéos
    document.querySelectorAll('.video-container video').forEach(video => {
        // Vérifier si la vidéo peut être chargée
        video.addEventListener('error', (e) => {
            console.error('Erreur de chargement de la vidéo:', e);
            // Afficher l'image de remplacement
            video.closest('.video-container').innerHTML = `
                <img src="${projectsData.project4.thumbnail}" alt="Video thumbnail" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="video-play-icon">
                    <i class="fas fa-play"></i>
                </div>
            `;
        });
    });
});