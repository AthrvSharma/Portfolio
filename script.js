document.addEventListener('DOMContentLoaded', () => {
    /* ============================
       Utility helpers
       ============================ */
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    /* ============================
       Data definitions
       ============================ */
    const projectsData = [
        {
            id: 'p1',
            title: 'VogueVibe',
            description: 'Luxury fashion storefront with GSAP-powered sections, theme engine, and responsive layouts.',
            longDescription: 'Designed and coded a fashion-focused e-commerce experience with rich animations, curated product storytelling, and responsive styling using Tailwind CSS, GSAP, and EJS templating.',
            tags: ['Tailwind & GSAP', 'Frontend'],
            metrics: ['Solo build', 'Design-first'],
            imageUrl: '1.png',
            link: ''
        },
        {
            id: 'p2',
            title: 'FestiFlow',
            description: 'CLI + GUI event organiser that schedules shows, artists, and venues using robust data structures.',
            longDescription: 'Implemented an event management system in Java featuring linked lists for scheduling, file persistence for storage, and a clean UI layer so college clubs can manage lineup conflicts quickly.',
            tags: ['Java', 'DSA'],
            metrics: ['Coursework+', 'File storage'],
            imageUrl: '2.png',
            link: ''
        },
        {
            id: 'p3',
            title: 'WealthWise',
            description: 'Personal finance dashboard with budgeting widgets, category breakdowns, and savings insights.',
            longDescription: 'Explored data visualisation and CRUD flows by building a MERN-style dashboard that tracks budgets, savings goals, and spending categories with clean UI cards and charts.',
            tags: ['Tailwind UI', 'Vanilla JS'],
            metrics: ['Finance UI', 'Responsive'],
            imageUrl: '3.png',
            link: ''
        },
        {
            id: 'p4',
            title: 'Cineverse',
            description: 'Movie discovery web app with carousel hero, category filters, and watchlist concepts.',
            longDescription: 'Practised building immersive hero layouts and API-driven grids with a cinematic interface. Experimented with client-side routing, search filters, and keyboard-friendly controls.',
            tags: ['Media UI', 'Frontend prototype'],
            metrics: ['Movie catalogue', 'Responsive'],
            imageUrl: 'https://placehold.co/600x400/0a1931/ffffff?text=Cineverse',
            link: ''
        },
        {
            id: 'p5',
            title: 'FitFlow',
            description: 'Fitness and recovery planner exploring adaptive workout schedules and mood tracking.',
            longDescription: 'Focused on dashboards and data storytelling by prototyping FitFlow — an interface for monitoring training focus, hydration, and AI-assisted sessions with gradients and clean layouts.',
            tags: ['Tailwind', 'Dashboard UI'],
            metrics: ['Product concept', 'Dashboard UI'],
            imageUrl: 'https://placehold.co/600x400/4318d0/ffffff?text=FitFlow',
            link: ''
        },
        {
            id: 'p6',
            title: 'Student Management System',
            description: 'Microservice-based academic portal with JWT auth, attendance, and grade modules.',
            longDescription: 'Built REST microservices with Spring Boot, secured endpoints with JWT, and connected MySQL for persistence. Highlights include modular services for students, faculty, and reporting dashboards.',
            tags: ['Spring Boot', 'MySQL'],
            metrics: ['Microservices', 'JWT auth'],
            imageUrl: 'https://placehold.co/600x400/14532d/ffffff?text=Student+MS',
            link: ''
        }
    ];

    const servicesData = [
        {
            icon: 'fa-solid fa-compass-drafting',
            title: 'Interface design & prototyping',
            description: 'Create responsive layouts, components, and motion details using HTML, CSS, Tailwind, GSAP, and Figma hand-offs.',
            tags: ['UI polish', 'GSAP micro-interactions', 'Accessibility-ready']
        },
        {
            icon: 'fa-solid fa-laptop-code',
            title: 'Full stack web builds',
            description: 'Craft Node.js + Express or Spring Boot backends paired with MongoDB or MySQL to power dashboards, auth, and APIs.',
            tags: ['REST APIs', 'JWT auth', 'Database design']
        },
        {
            icon: 'fa-solid fa-cloud-arrow-up',
            title: 'Cloud + deployment practice',
            description: 'Deploy student projects on AWS EC2 with Nginx, experiment with S3 static hosting, and integrate Firebase & Google OAuth.',
            tags: ['AWS EC2', 'Nginx reverse proxy', 'Firebase realtime']
        },
        {
            icon: 'fa-solid fa-people-group',
            title: 'Hackathons & collaboration',
            description: 'Team up quickly, scope MVPs, and present user-friendly demos at university hackathons and coding events.',
            tags: ['Code Slam', 'Hack the Mountains', 'Team workflows']
        }
    ];

    const experienceData = [
        {
            period: '2023 — Present',
            company: 'Chitkara University',
            role: 'BE Computer Science Student',
            summary: 'Balancing core CS courses with project-based learning, labs, and society initiatives while graduating in 2027.',
            highlights: ['Data Structures & Algorithms labs', 'Operating Systems & DBMS coursework', 'Developer community involvement']
        },
        {
            period: '2024',
            company: 'Hackathons & Events',
            role: 'Participant & Builder',
            summary: 'Competed in Code Slam: The Grand Code Off and Hack the Mountains 5.0, focusing on rapid prototyping, presentation, and teamwork.',
            highlights: ['Scoped MVPs within 24-48 hrs', 'Collaborated with cross-discipline peers', 'Presented working demos to mentors']
        },
        {
            period: '2023 — Present',
            company: 'Independent Projects',
            role: 'Full Stack Builder',
            summary: 'Shipped multi-stack projects like FestiFlow, WealthWise, Student Management System, and FitFlow to practise UI, backend, and deployments.',
            highlights: ['JWT-secured Spring Boot microservices', 'Node.js + MongoDB dashboards', 'AWS EC2/S3 & Firebase integrations']
        }
    ];

    const testimonialsData = [
        {
            quote: 'Code Slam pushed me to define scope quickly, pair programme efficiently, and present a clear story to judges within 24 hours.',
            name: 'Code Slam: The Grand Code Off',
            role: 'Hackathon reflection'
        },
        {
            quote: 'Hack the Mountains 5.0 reminded me how important it is to balance UI polish with resilient backend flows when demoing to mentors.',
            name: 'Hack the Mountains 5.0',
            role: 'Community hackathon'
        },
        {
            quote: 'AWS Containers & AI/ML workshop gave me a roadmap for taking student projects to production with managed services and observability.',
            name: 'AWS Cloud Workshop',
            role: 'Learning takeaway'
        }
    ];

    const stackData = [
        { name: 'HTML · CSS · Tailwind', meta: 'UI foundations' },
        { name: 'JavaScript · EJS', meta: 'Frontend logic' },
        { name: 'Node.js · Express', meta: 'APIs & servers' },
        { name: 'Spring Boot · JWT', meta: 'Microservices' },
        { name: 'MongoDB · MySQL', meta: 'Databases' },
        { name: 'AWS EC2 · Nginx · S3', meta: 'Cloud deploys' }
    ];

    const skillsData = [
        { name: 'Frontend engineering & Tailwind', level: '90%' },
        { name: 'Node.js / Express APIs', level: '85%' },
        { name: 'Spring Boot microservices', level: '75%' },
        { name: 'GSAP animations & UI polish', level: '92%' },
        { name: 'MongoDB & MySQL data modelling', level: '82%' },
        { name: 'AWS deployments & tooling', level: '70%' }
    ];

    const labsData = [
        {
            title: 'Spring Boot microservice lab',
            description: 'JWT-authenticated microservices communicating over REST with Dockerised MySQL.',
            tag: 'Backend',
            meta: 'Spring Boot · JWT · MySQL',
            link: ''
        },
        {
            title: 'Firebase realtime board',
            description: 'Exploring Firebase auth + Firestore to sync notes and updates for study groups.',
            tag: 'Realtime',
            meta: 'Firebase · Google OAuth',
            link: ''
        },
        {
            title: 'GSAP micro-interactions pack',
            description: 'A growing collection of motion snippets for hero sections, galleries, and scroll-trigger reveals.',
            tag: 'Frontend',
            meta: 'GSAP · Tailwind CSS',
            link: ''
        }
    ];

    const achievementsData = [
        {
            prefix: '',
            value: 6,
            decimals: 0,
            suffix: '',
            title: 'Projects shipped during BE CSE',
            description: 'From VogueVibe and FestiFlow to Cineverse, WealthWise, FitFlow, and a Student Management System.',
            meta: 'Hands-on practice'
        },
        {
            prefix: '',
            value: 3,
            decimals: 0,
            suffix: '',
            title: 'Hackathons & tech events',
            description: 'Code Slam: The Grand Code Off, Hack the Mountains 5.0, and AWS Containers & AI/ML workshops.',
            meta: 'Community-driven'
        },
        {
            prefix: '',
            value: 2,
            decimals: 0,
            suffix: '',
            title: 'Cloud deployments completed',
            description: 'Experimented with AWS EC2 + Nginx and S3 static hosting including SSL and reverse proxy setups.',
            meta: 'Cloud practice'
        }
    ];

    const insightsData = [
        {
            title: 'Code Slam: The Grand Code Off notes',
            description: 'How our team scoped features, assigned roles, and shipped a working demo within the deadline.',
            tag: 'Hackathon',
            meta: 'Reflection · 2024',
            link: ''
        },
        {
            title: 'Hack the Mountains 5.0 learnings',
            description: 'What went well (and what didn’t) while building a student-focused product in the mountains.',
            tag: 'Community',
            meta: 'Learning Log · 2024',
            link: ''
        },
        {
            title: 'Containers & AI/ML on AWS workshop',
            description: 'Key takeaways on using AWS services for containerised apps and ML workflows as a student.',
            tag: 'AWS',
            meta: 'Workshop Notes · 2024',
            link: ''
        }
    ];

    /* ============================
       Rendering helpers
       ============================ */
    function renderProjects() {
        const container = $('#projects');
        if (!container) return;

        const html = projectsData.map(project => `
            <article class="project-card" tabindex="0" role="button" aria-labelledby="${project.id}" data-project-id="${project.id}">
                <div class="project-image" style="background-image:url('${project.imageUrl}')"></div>
                <div class="project-content">
                    <h3 id="${project.id}">${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-meta">
                        ${project.tags.slice(0, 2).map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    ${project.metrics ? `
                        <ul class="project-metrics">
                            ${project.metrics.map(metric => `<li>${metric}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </article>
        `).join('');

        container.innerHTML = html;
    }

    function renderSplideSlides() {
        const container = $('#splideList');
        if (!container) return;

        container.innerHTML = projectsData.map(project => `
            <li class="splide__slide" tabindex="0" data-project-id="${project.id}">
                <img class="splide__img" src="${project.imageUrl}" alt="${project.title}" loading="lazy" decoding="async">
            </li>
        `).join('');
    }

    function renderLabs() {
        const container = $('#labsGrid');
        if (!container) return;

        container.innerHTML = labsData.map(lab => `
            <article class="labs-card" tabindex="0" data-link="${lab.link || ''}">
                <span class="labs-pill">${lab.tag}</span>
                <h3>${lab.title}</h3>
                <p>${lab.description}</p>
                <div class="labs-meta">
                    <span>${lab.meta}</span>
                    ${lab.link ? `<a href="${lab.link}" target="_blank" rel="noopener">Open<i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '<span>In studio</span>'}
                </div>
            </article>
        `).join('');
    }

    function renderSkills() {
        const skillsContainer = $('.skills');
        if (!skillsContainer) return;

        const skillsHtml = skillsData.map(skill => `
            <div class="skill">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar">
                    <div class="skill-level" data-level="${skill.level}"></div>
                </div>
            </div>
        `).join('');

        skillsContainer.innerHTML = `<h3>Core skills</h3>${skillsHtml}`;
    }

    function renderServices() {
        const container = $('#servicesGrid');
        if (!container) return;

        container.innerHTML = servicesData.map(service => `
            <article class="service-card">
                <div class="service-icon"><i class="${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <p class="service-desc">${service.description}</p>
                <ul class="service-tags">
                    ${service.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>
            </article>
        `).join('');
    }

    function renderExperience() {
        const container = $('#experienceTimeline');
        if (!container) return;

        container.innerHTML = experienceData.map(exp => `
            <article class="timeline-item" tabindex="0">
                <div class="timeline-meta">
                    <span>${exp.period}</span>
                    <span>${exp.company}</span>
                </div>
                <h3>${exp.role}</h3>
                <p>${exp.summary}</p>
                <div class="timeline-tags">
                    ${exp.highlights.map(tag => `<span class="chip">${tag}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    function renderTestimonials() {
        const container = $('#testimonialTrack');
        if (!container) return;

        container.innerHTML = testimonialsData.map(testimonial => `
            <blockquote class="testimonial-card">
                <p class="testimonial-quote">${testimonial.quote}</p>
                <div class="testimonial-footer">
                    <span class="testimonial-name">${testimonial.name}</span>
                    <span class="testimonial-role">${testimonial.role}</span>
                </div>
            </blockquote>
        `).join('');
    }

    function renderAchievements() {
        const container = $('#achievementGrid');
        if (!container) return;

        container.innerHTML = achievementsData.map(item => `
            <article class="achievement-card" tabindex="0">
                <div class="achievement-value" data-value="${item.value}" data-prefix="${item.prefix || ''}" data-suffix="${item.suffix || ''}" data-decimals="${item.decimals || 0}">${item.prefix || ''}0${item.suffix || ''}</div>
                <h3 class="achievement-title">${item.title}</h3>
                <p>${item.description}</p>
                <div class="achievement-meta">${item.meta}</div>
            </article>
        `).join('');
    }

    function renderInsights() {
        const container = $('#insightsGrid');
        if (!container) return;

        container.innerHTML = insightsData.map(item => `
            <article class="insight-card" tabindex="0">
                <span class="insight-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="insight-meta">
                    <span>${item.meta}</span>
                    ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">Read <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '<span>Coming soon</span>'}
                </div>
            </article>
        `).join('');
    }

    function renderStack() {
        const container = $('#stackGrid');
        if (!container) return;

        container.innerHTML = stackData.map(item => `
            <div class="stack-item">
                ${item.name}
                <span>${item.meta}</span>
            </div>
        `).join('');
    }

    function makeCardsInteractive(selector) {
        $$(selector).forEach(card => {
            const anchor = card.querySelector('a[href]');
            if (!anchor) return;
            const open = () => anchor.click();
            card.addEventListener('click', (event) => {
                if (event.target.closest('a')) return;
                open();
            });
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    open();
                }
            });
        });
    }

    /* ============================
       Initial render
       ============================ */
    renderProjects();
    renderSplideSlides();
    renderLabs();
    renderSkills();
    renderServices();
    renderExperience();
    renderAchievements();
    renderTestimonials();
    renderInsights();
    renderStack();
    makeCardsInteractive('.labs-card');
    makeCardsInteractive('.insight-card');
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ============================
       Theme handling
       ============================ */
    const themeToggle = $('#themeToggle');
    const themeIcon = $('#themeIcon');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('site-theme');

    function applyTheme(mode) {
        document.body.classList.toggle('dark', mode === 'dark');
        themeToggle?.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
        if (themeIcon) {
            themeIcon.className = mode === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        localStorage.setItem('site-theme', mode);
        currentTheme = mode;
    }

    let currentTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');
    applyTheme(currentTheme);

    themeToggle?.addEventListener('click', () => {
        currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    prefersDark.addEventListener('change', (event) => {
        const stored = localStorage.getItem('site-theme');
        if (!stored) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });

    /* ============================
       Navigation interactions
       ============================ */
    const nav = $('.nav');
    const navToggle = $('.nav-toggle');
    const navOverlay = $('#navOverlay');
    const navLinksContainer = $('#navLinks');
    const navIndicator = navLinksContainer ? $('.nav-indicator', navLinksContainer) : null;
    const navItems = $$('a.nav-item');
    let activeNavItem = navItems.find(item => item.getAttribute('aria-current') === 'page') || navItems[0];

    const isDesktopNav = () => window.innerWidth > 980;

    function moveNavIndicator(target) {
        if (!navIndicator || !navLinksContainer || !target) return;
        if (!isDesktopNav()) {
            navIndicator.style.opacity = 0;
            return;
        }
        const targetRect = target.getBoundingClientRect();
        const parentRect = navLinksContainer.getBoundingClientRect();
        const offsetLeft = targetRect.left - parentRect.left;
        navIndicator.style.opacity = 1;
        navIndicator.style.width = `${targetRect.width}px`;
        navIndicator.style.transform = `translateX(${offsetLeft}px) translateY(-50%)`;
    }

    function setNavActive(link, updateAria = true) {
        if (!link) return;
        activeNavItem = link;
        if (updateAria) {
            navItems.forEach(item => item.removeAttribute('aria-current'));
            link.setAttribute('aria-current', 'page');
        }
        moveNavIndicator(link);
    }

    function setNavState(open) {
        document.body.classList.toggle('nav-open', open);
        navToggle?.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) {
            if (navIndicator) navIndicator.style.opacity = 0;
        } else {
            requestAnimationFrame(() => moveNavIndicator(activeNavItem));
        }
    }

    navToggle?.addEventListener('click', () => {
        const isOpen = !document.body.classList.contains('nav-open');
        setNavState(isOpen);
    });

    navOverlay?.addEventListener('click', () => setNavState(false));

    navItems.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (isDesktopNav()) moveNavIndicator(link);
        });
        link.addEventListener('mouseleave', () => {
            if (isDesktopNav()) moveNavIndicator(activeNavItem);
        });
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                setNavState(false);
                const target = $(targetId);
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setNavActive(link);
            }
        });
    });

    const highlightBtn = $('#viewHighlights');
    highlightBtn?.addEventListener('click', (event) => {
        event.preventDefault();
        setNavState(false);
        $('#work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const highlightsLink = navItems.find(link => link.getAttribute('href') === '#work');
        if (highlightsLink) setNavActive(highlightsLink);
    });

    navLinksContainer?.addEventListener('mouseleave', () => {
        if (isDesktopNav()) moveNavIndicator(activeNavItem);
    });

    window.addEventListener('resize', () => {
        requestAnimationFrame(() => moveNavIndicator(activeNavItem));
    });

    requestAnimationFrame(() => moveNavIndicator(activeNavItem));

    /* ============================
       Scroll progress + sticky nav
       ============================ */
    const progress = $('#progress');
    const handleScroll = () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        if (progress) progress.style.width = `${clamp(progressValue, 0, 100)}%`;
        if (nav) {
            nav.classList.toggle('is-scrolled', window.scrollY > 24);
        }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ============================
       Splide carousel
       ============================ */
    let splide;
    try {
        splide = new Splide('#hiSplide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '24px',
            focus: 'center',
            arrows: false,
            pagination: true,
            autoplay: true,
            interval: 4200,
            speed: 900,
            pauseOnHover: true,
            pauseOnFocus: false,
            breakpoints: {
                1200: { perPage: 2 },
                800: { perPage: 1 }
            }
        }).mount();
    } catch (err) {
        console.error('Splide error', err);
    }

    let sliderProgress = null;
    const sliderShell = $('.hi-slider');
    if (sliderShell) {
        let progressWrap = sliderShell.querySelector('.hi-progress');
        if (!progressWrap) {
            progressWrap = document.createElement('div');
            progressWrap.className = 'hi-progress';
            const span = document.createElement('span');
            progressWrap.appendChild(span);
            sliderShell.appendChild(progressWrap);
        }
        sliderProgress = progressWrap.querySelector('span');
    }

    const updateSliderProgress = (rate = 0) => {
        if (!sliderProgress) return;
        sliderProgress.style.width = `${Math.min(Math.max(rate, 0), 1) * 100}%`;
    };

    if (splide) {
        splide.on('mounted move', () => updateSliderProgress(0));
        splide.on('autoplay:playing', (_time, rate) => updateSliderProgress(rate));
    }

    $('#hiPrev')?.addEventListener('click', () => splide?.go('<'));
    $('#hiNext')?.addEventListener('click', () => splide?.go('>'));

    /* ============================
       Project modal
       ============================ */
    const popup = $('#hiPopup');
    const popupContent = $('.hi-popup-content', popup);
    const hiPopupImg = $('#hiPopupImg');
    const hiPopupTitle = $('#hiPopupTitle');
    const hiPopupDesc = $('#hiPopupDesc');
    const hiPopupTags = $('#hiPopupTags');
    const hiPopupCTA = $('#hiPopupCTA');
    let lastFocused = null;

    function renderPopupTags(project) {
        hiPopupTags.innerHTML = '';
        const pills = [...(project?.tags || []), ...(project?.metrics || [])];
        pills.forEach((tag) => {
            const el = document.createElement('span');
            el.className = 'hi-tag';
            el.textContent = tag;
            hiPopupTags.appendChild(el);
        });
    }

    function fillPopup(project) {
        if (!project) return;
        hiPopupImg.src = project.imageUrl || '';
        hiPopupImg.alt = project.title || 'Project preview';
        hiPopupTitle.textContent = project.title || 'Project';
        hiPopupDesc.textContent = project.longDescription || project.description || '';
        renderPopupTags(project);
        if (project.link) {
            hiPopupCTA.href = project.link;
            hiPopupCTA.removeAttribute('aria-disabled');
            hiPopupCTA.classList.remove('hidden');
        } else {
            hiPopupCTA.href = '#';
            hiPopupCTA.setAttribute('aria-disabled', 'true');
            hiPopupCTA.classList.add('hidden');
        }
    }

    function trapFocus(event) {
        if (event.key !== 'Tab') return;
        const focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', popup)
            .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    async function openPopup(project, triggerEl = null) {
        if (!project || !popup) return;
        lastFocused = triggerEl || document.activeElement;
        fillPopup(project);
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', trapFocus);

        try {
            await gsap.fromTo(
                popupContent,
                { opacity: 0, y: 24, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }
            );
        } catch (err) {
            // gsap optional
        }
        $('.hi-popup-close', popup)?.focus();
    }

    async function closePopup() {
        if (!popup) return;
        document.removeEventListener('keydown', trapFocus);
        try {
            await gsap.to(popupContent, { opacity: 0, y: 24, scale: 0.98, duration: 0.28, ease: 'power2.in' });
        } catch (err) {
            // ignore
        }
        popup.classList.remove('show');
        popup.setAttribute('aria-hidden', 'true');
        if (!document.body.classList.contains('nav-open')) {
            document.body.style.overflow = '';
        }
        if (lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }
    }

    $('.hi-popup-close', popup)?.addEventListener('click', closePopup);
    popup?.addEventListener('click', (event) => {
        if (event.target === popup) closePopup();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup?.classList.contains('show')) {
            closePopup();
        }
    });

    function openProjectById(id, triggerEl) {
        const project = projectsData.find(item => item.id === id);
        if (project) openPopup(project, triggerEl);
    }

    function attachProjectCardHandlers() {
        $$('.project-card').forEach(card => {
            const id = card.dataset.projectId;
            if (!id) return;
            card.addEventListener('click', () => openProjectById(id, card));
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProjectById(id, card);
                }
            });
        });
    }
    attachProjectCardHandlers();

    if (splide) {
        splide.on('click', (slide) => {
            const id = slide?.slide?.dataset?.projectId;
            openProjectById(id, slide?.slide);
        });
    }

    /* ============================
       Reveal animations
       ============================ */
    function animateCounter(el) {
        if (!el || el.dataset.animated === 'true') return;
        const target = Number(el.dataset.value || 0);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const decimals = Number(el.dataset.decimals || 0);
        const duration = 1400;
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        el.dataset.animated = 'true';

        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const current = target * eased;
            const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
            el.textContent = `${prefix}${display}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                const finalValue = decimals > 0 ? target.toFixed(decimals) : target.toString();
                el.textContent = `${prefix}${finalValue}${suffix}`;
            }
        };

        requestAnimationFrame(step);
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                if (entry.target.classList.contains('skills')) {
                    $$('.skill-level', entry.target).forEach(bar => {
                        bar.style.width = bar.dataset.level;
                    });
                }
                if (entry.target.classList.contains('achievement-card')) {
                    const valueEl = $('.achievement-value', entry.target);
                    animateCounter(valueEl);
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    const revealTargets = $$('section, .project-card, .service-card, .timeline-item, .testimonial-card, .labs-card, .achievement-card, .insight-card, .stack-item');
    revealTargets.forEach(el => revealObserver.observe(el));

    /* ============================
       Active section highlighting
       ============================ */
    const sections = $$('main section[id]');
    const navLinkMap = new Map();
    navItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) navLinkMap.set(href, link);
    });

    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = navLinkMap.get(`#${entry.target.id}`);
                setNavActive(activeLink);
            }
        });
    }, { threshold: 0.45, rootMargin: '-20% 0px -35% 0px' });

    sections.forEach(section => activeObserver.observe(section));

    /* ============================
       Hero + background motion
       ============================ */
    const orbs = $$('.orb');
    if (orbs.length) {
        window.addEventListener('pointermove', (event) => {
            const xRatio = (event.clientX / window.innerWidth) - 0.5;
            const yRatio = (event.clientY / window.innerHeight) - 0.5;
            orbs.forEach((orb, index) => {
                const strength = (index + 1) / orbs.length;
                const translateX = xRatio * 60 * strength;
                const translateY = yRatio * 40 * strength;
                orb.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
            });
        }, { passive: true });
    }

    window.addEventListener('load', () => {
        $('#home')?.classList.add('in-view');
        try {
            gsap.from('.hero-copy > *', {
                opacity: 0,
                y: 24,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out'
            });
            gsap.from('.hero-card', {
                opacity: 0,
                y: 40,
                rotate: -6,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.2
            });
            gsap.utils.toArray('.floating-card').forEach((card, idx) => {
                gsap.to(card, {
                    y: idx % 2 === 0 ? 14 : -14,
                    rotate: idx % 2 === 0 ? -2 : 2,
                    duration: 3.8 + idx,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut'
                });
            });
        } catch (err) {
            // GSAP not critical
        }
    });

    /* ============================
       Typewriter effect
       ============================ */
    const typewriterEl = $('#typewriter');
    if (typewriterEl) {
        const words = ['Full Stack Student', 'UI-focused Developer', 'Hackathon Builder'];
        let wordIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        const tick = () => {
            const currentWord = words[wordIdx];
            const update = currentWord.substring(0, charIdx);
            typewriterEl.textContent = ` — ${update}`;

            if (!isDeleting && charIdx === currentWord.length) {
                isDeleting = true;
                setTimeout(tick, 1600);
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                setTimeout(tick, 500);
            } else {
                charIdx += isDeleting ? -1 : 1;
                setTimeout(tick, isDeleting ? 35 : 80);
            }
        };
        tick();
    }

    /* ============================
       Contact form
       ============================ */
    const form = $('#contactForm');
    const toast = $('#toast');

    function showToast(message = 'Sent!', success = true) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.background = success
            ? 'linear-gradient(120deg, var(--primary), var(--accent-alt))'
            : 'linear-gradient(120deg, #d83b5d, #f87171)';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    }

    form?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.message) {
            showToast('Please complete all fields.', false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showToast('Message sent — thanks! 🚀');
                form.reset();
            } else {
                throw new Error('Server responded with an error.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('Sorry, something went wrong.', false);
        }
    });

    /* ============================
       Accessibility enhancements
       ============================ */
    function handleFirstTab(event) {
        if (event.key === 'Tab') {
            document.documentElement.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }
    window.addEventListener('keydown', handleFirstTab);
});
