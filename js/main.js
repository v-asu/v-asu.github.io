document.addEventListener('DOMContentLoaded', function() {
    // Abstract toggles
    document.querySelectorAll('.abstract-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const abstractContent = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            abstractContent.classList.toggle('expanded');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
