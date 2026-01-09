// Abstract Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Abstract toggles
    const abstractToggles = document.querySelectorAll('.abstract-toggle');

    abstractToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const abstractContent = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle the expanded state
            this.setAttribute('aria-expanded', !isExpanded);
            abstractContent.classList.toggle('expanded');
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
            });
        });
    }

    // Smooth scroll for navigation links (fallback for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});
