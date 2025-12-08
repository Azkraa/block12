function initNavbar() {

    // =========================
    // 1. MOBILE MENU TOGGLE
    // =========================
   // MOBILE MENU TOGGLE
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // MOBILE DROPDOWN SERVICE TOGGLE
    const mobileDropdownBtn = document.querySelector('.mobile-dropdown-toggle');
    const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');

    if (mobileDropdownBtn && mobileDropdownMenu) {
        mobileDropdownBtn.addEventListener('click', () => {
            mobileDropdownMenu.classList.toggle('open');
        });
    }

    // =========================
    // 2. ACTIVE PAGE LINK
    // =========================
    const navLinks = document.querySelectorAll('.header-nav .nav-links a');
    const logoLink = document.querySelector('.header-nav .logo');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile && linkFile !== '#' && currentPath.endsWith(linkFile)) {
            link.classList.add('active');
        }
    });

    // === Keep BLOG active on blog-detail pages ===
    if (currentPath.includes("blog-") || currentPath.includes("blog")) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').toLowerCase().includes("blog")) {
                link.classList.add('active');
            }
        });
    }

    if (currentPath === 'index.html' || currentPath === '') logoLink?.classList.add('active');

    // =========================
    // 3. STICKY NAV
    // =========================
    const headerNav = document.querySelector('.header-nav');
    if (headerNav) {
        window.addEventListener('scroll', () => {
            headerNav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // =========================
    // 4. MOBILE DROPDOWN
    // =========================
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const menu = toggle.nextElementSibling;
                menu.classList.toggle('open');
            }
        });
    });
}