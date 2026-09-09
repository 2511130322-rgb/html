const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos, panel de administración y gestión de inventario en tiempo real.",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        category: "fullstack",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con drag & drop, equipos colaborativos, notificaciones en tiempo real y análisis de productividad.",
        tags: ["Vue.js", "Firebase", "Tailwind", "WebSockets"],
        category: "fullstack",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Dashboard meteorológico interactivo con pronósticos detallados, mapas de calor, alertas personalizadas y historial de datos.",
        tags: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
        category: "frontend",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    },
    {
        id: 4,
        title: "REST API Boilerplate",
        description: "Boilerplate escalable para APIs REST con autenticación JWT, validación, rate limiting, logging, tests y documentación OpenAPI.",
        tags: ["Node.js", "Express", "TypeScript", "Prisma", "Jest"],
        category: "backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    },
    {
        id: 5,
        title: "Portfolio Template",
        description: "Plantilla de portafolio moderna, responsive y accesible con modo oscuro, animaciones suaves y optimizada para SEO y rendimiento.",
        tags: ["HTML5", "CSS3", "JavaScript", "Vite"],
        category: "frontend",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    },
    {
        id: 6,
        title: "Real-time Chat App",
        description: "Aplicación de chat en tiempo real con salas, mensajes directos, compartir archivos, reacciones y encriptación end-to-end.",
        tags: ["React", "Socket.io", "Node.js", "MongoDB", "TypeScript"],
        category: "fullstack",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7682?w=600&h=400&fit=crop",
        links: { demo: "#", code: "#" }
    }
];

const skillsData = {
    frontend: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Vite", level: 92, icon: "⚡" }
    ],
    backend: [
        { name: "Node.js", level: 92, icon: "🟢" },
        { name: "Express", level: 90, icon: "🚂" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Prisma ORM", level: 88, icon: "🔷" },
        { name: "Redis", level: 75, icon: "🔴" }
    ],
    tools: [
        { name: "Git & GitHub", level: 95, icon: "📦" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Testing (Jest/Vitest)", level: 88, icon: "🧪" },
        { name: "Figma", level: 75, icon: "🎨" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroAnimations();
    initProjects();
    initSkills();
    initContactForm();
    initScrollEffects();
    initScrollTop();
    initCounters();
});

function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

function initHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero__content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`;
    });

    requestAnimationFrame(() => {
        heroElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
}

function initProjects() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter__btn');
    let activeFilter = 'all';

    function renderProjects(filter = 'all') {
        grid.innerHTML = '';
        const filtered = filter === 'all'
            ? projectsData
            : projectsData.filter(p => p.category === filter);

        filtered.forEach((project, index) => {
            const card = createProjectCard(project);
            card.style.animationDelay = `${index * 100}ms`;
            grid.appendChild(card);
        });

        observeElements();
    }

    function createProjectCard(project) {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.dataset.category = project.category;
        card.innerHTML = `
            <div class="project-card__image" style="background-image: url('${project.image}')">
                <div class="project-card__tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__links">
                    <a href="${project.links.demo}" class="project-card__link" target="_blank" rel="noopener">
                        Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="${project.links.code}" class="project-card__link" target="_blank" rel="noopener">
                        Código
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </a>
                </div>
            </div>
        `;
        return card;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderProjects(activeFilter);
        });
    });

    renderProjects();
}

function initSkills() {
    const frontendContainer = document.getElementById('frontend-skills');
    const backendContainer = document.getElementById('backend-skills');
    const toolsContainer = document.getElementById('tools-skills');

    function renderSkills(container, skills) {
        container.innerHTML = skills.map((skill, index) => `
            <div class="skill-item" style="animation-delay: ${index * 100}ms">
                <div class="skill-item__icon" aria-hidden="true">${skill.icon}</div>
                <div class="skill-item__info">
                    <span class="skill-item__name">${skill.name}</span>
                    <span class="skill-item__level">${skill.level}%</span>
                    <div class="skill-item__bar">
                        <div class="skill-item__progress" data-width="${skill.level}%"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderSkills(frontendContainer, skillsData.frontend);
    renderSkills(backendContainer, skillsData.backend);
    renderSkills(toolsContainer, skillsData.tools);

    const skillsSection = document.getElementById('habilidades');
    let skillsAnimated = false;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkillBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);

    function animateSkillBars() {
        const progressBars = document.querySelectorAll('.skill-item__progress');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.dataset.width;
            }, index * 100);
        });
    }
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const messageEl = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.form__submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando...</span><svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        await new Promise(resolve => setTimeout(resolve, 1500));

        const success = Math.random() > 0.3;

        if (success) {
            messageEl.textContent = '¡Mensaje enviado correctamente! Te responderé pronto.';
            messageEl.className = 'form__message success';
            form.reset();
        } else {
            messageEl.textContent = 'Error al enviar. Por favor, inténtalo de nuevo o escríbeme directamente.';
            messageEl.className = 'form__message error';
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        setTimeout(() => {
            messageEl.textContent = '';
            messageEl.className = 'form__message';
        }, 5000);
    });

    const inputs = form.querySelectorAll('.form__input, .form__textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            isValid = false;
            errorMessage = 'Email inválido';
        }

        if (!isValid) {
            showError(field, errorMessage);
        } else {
            clearError(field);
        }

        return isValid;
    }

    function showError(field, message) {
        field.style.borderColor = 'var(--color-error)';
        let errorEl = field.parentNode.querySelector('.field-error');
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            errorEl.style.cssText = 'color: var(--color-error); font-size: var(--font-size-xs); margin-top: var(--spacing-xs); display: block;';
            field.parentNode.appendChild(errorEl);
        }
        errorEl.textContent = message;
    }

    function clearError(field) {
        field.style.borderColor = '';
        const errorEl = field.parentNode.querySelector('.field-error');
        if (errorEl) errorEl.remove();
    }
}

function initScrollEffects() {
    const revealElements = document.querySelectorAll(
        '.section__title, .about__content > *, .project-card, .skills__category, .contact__info, .contact__form'
    );

    revealElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        if (index < 6) el.classList.add(`reveal-delay-${index + 1}`);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

function initScrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.stat__number[data-count]');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounters();
                countersAnimated = true;
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('sobre-mi');
    counterObserver.observe(aboutSection);

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target + (target === 50 ? '+' : target === 20 ? '+' : '');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + (target === 50 ? '+' : target === 20 ? '' : '+');
                }
            }, 16);
        });
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('open')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    .spinner {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('%c🚀 Portfolio cargado correctamente', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cDesarrollado con HTML5, CSS3 y JavaScript vanilla', 'color: #64748b; font-size: 12px;');