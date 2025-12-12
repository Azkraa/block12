document.addEventListener('DOMContentLoaded', () => {

    // Add fade-in class immediately
    const fadeItems = document.querySelectorAll(".service-card, .project-card, section, .hero-section, footer");

    fadeItems.forEach(item => {
        item.classList.add("fade-in");
    });

    // Fade observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // fade in
            } else {
                entry.target.classList.remove("show"); // fade out
            }
        });
    }, { threshold: 0.2 });

    fadeItems.forEach(item => fadeObserver.observe(item));
});
