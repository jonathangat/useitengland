document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksList = document.getElementById('nav-links-list');
    
    if (mobileMenuBtn && navLinksList) {
        const lines = mobileMenuBtn.querySelectorAll('span');

        function toggleMenu() {
            navLinksList.classList.toggle('active');
            const isActive = navLinksList.classList.contains('active');

            // Keep assistive tech informed of the menu's open/closed state
            mobileMenuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            mobileMenuBtn.setAttribute('aria-label', isActive ? 'Close navigation menu' : 'Open navigation menu');

            lines[0].style.transform = isActive ? 'rotate(45deg) translate(7px, 7px)' : 'none';
            lines[1].style.opacity = isActive ? '0' : '1';
            lines[2].style.transform = isActive ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksList.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
});