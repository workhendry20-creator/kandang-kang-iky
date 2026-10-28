/**
 * components.js - Modular Navbar & Footer Loader
 * Kandang Kang Iky
 */

(function () {
    'use strict';

    /**
     * Determines current page name from pathname
     * e.g., /domba.html -> 'domba.html', / -> 'index.html'
     */
    function getCurrentPage() {
        let path = window.location.pathname;
        let page = path.substring(path.lastIndexOf('/') + 1);
        if (!page || page === '') {
            return 'index.html';
        }
        return page;
    }

    /**
     * Sets active highlight on desktop & mobile navbar links
     */
    function setActiveNavLink() {
        const page = getCurrentPage();

        // 1. Desktop Links
        const desktopLinks = document.querySelectorAll('#desktop-nav-links a.nav-link');
        desktopLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isMatch = (href === page) || (page === 'index.html' && (href === '' || href === '/' || href === 'index.html'));
            if (isMatch) {
                link.classList.remove('text-white/90', 'hover:bg-white/15');
                link.classList.add('bg-white/20', 'text-white', 'font-semibold');
            } else {
                link.classList.remove('bg-white/20', 'font-semibold');
                link.classList.add('text-white/90', 'hover:bg-white/15');
            }
        });

        // 2. Mobile Links
        const mobileLinks = document.querySelectorAll('#mobile-menu-dropdown a.mobile-nav-link');
        mobileLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isMatch = (href === page) || (page === 'index.html' && (href === '' || href === '/' || href === 'index.html'));
            if (isMatch) {
                link.classList.remove('text-white/90', 'hover:bg-white/15');
                link.classList.add('bg-white/20', 'text-white', 'font-semibold');
            } else {
                link.classList.remove('bg-white/20', 'font-semibold');
                link.classList.add('text-white/90', 'hover:bg-white/15');
            }
        });

        // 3. Highlight Track CTA Button if on tracking.html
        const trackBtn = document.getElementById('nav-track-btn');
        const mobileTrackBtn = document.getElementById('mobile-nav-track-btn');
        if (page === 'tracking.html') {
            if (trackBtn) {
                trackBtn.classList.remove('bg-white/20', 'text-white');
                trackBtn.classList.add('bg-white', 'text-[#1E3E2B]', 'font-bold');
            }
            if (mobileTrackBtn) {
                mobileTrackBtn.classList.remove('bg-white/20', 'text-white');
                mobileTrackBtn.classList.add('bg-white', 'text-[#1E3E2B]', 'font-bold');
            }
        }
    }

    /**
     * Initializes Alpine.js and attaches Vanilla JS fallback handlers
     */
    function setupNavbarInteractions(container) {
        // Alpine.js integration
        if (window.Alpine) {
            try {
                window.Alpine.initTree(container);
            } catch (e) {
                console.warn('[Components] Alpine.initTree error:', e);
            }
        } else {
            // Listen for Alpine ready if loaded asynchronously
            document.addEventListener('alpine:init', () => {
                try {
                    window.Alpine.initTree(container);
                } catch (e) {
                    console.warn('[Components] Alpine.initTree on alpine:init error:', e);
                }
            }, { once: true });
        }

        // Vanilla JS Fallback for Mobile Menu Toggle
        const toggleBtn = container.querySelector('#mobile-menu-toggle-btn');
        const dropdown = container.querySelector('#mobile-menu-dropdown');
        const iconBars = container.querySelector('#hamburger-icon-bars');
        const iconClose = container.querySelector('#hamburger-icon-close');

        if (toggleBtn && dropdown) {
            toggleBtn.addEventListener('click', function (e) {
                // If Alpine is managing state on this node, don't conflict
                if (window.Alpine && toggleBtn._x_dataStack) return;

                const isHidden = dropdown.classList.contains('hidden');
                if (isHidden) {
                    dropdown.classList.remove('hidden');
                    if (iconBars) iconBars.style.display = 'none';
                    if (iconClose) iconClose.style.display = 'block';
                } else {
                    dropdown.classList.add('hidden');
                    if (iconBars) iconBars.style.display = 'block';
                    if (iconClose) iconClose.style.display = 'none';
                }
            });

            // Close on click outside
            document.addEventListener('click', function (e) {
                if (window.Alpine && toggleBtn._x_dataStack) return;
                if (!container.contains(e.target)) {
                    dropdown.classList.add('hidden');
                    if (iconBars) iconBars.style.display = 'block';
                    if (iconClose) iconClose.style.display = 'none';
                }
            });
        }
    }

    /**
     * Fetches component HTML and injects into target element
     */
    async function loadComponent(elementId, componentPath) {
        const placeholder = document.getElementById(elementId);
        if (!placeholder) return null;

        try {
            const res = await fetch(componentPath);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status} for ${componentPath}`);
            }
            const html = await res.text();
            placeholder.innerHTML = html;
            return placeholder;
        } catch (error) {
            console.error(`[Components] Failed to load component: ${componentPath}`, error);
            return null;
        }
    }

    /**
     * Main initialization function
     */
    async function initComponents() {
        // Load Navbar
        const navContainer = await loadComponent('navbar-placeholder', 'components/navbar.html');
        if (navContainer) {
            setActiveNavLink();
            setupNavbarInteractions(navContainer);
        }

        // Load Footer
        await loadComponent('footer-placeholder', 'components/footer.html');
    }

    // Export function to global scope for external re-triggering if needed
    window.setActiveNavLink = setActiveNavLink;
    window.initComponents = initComponents;

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
})();
