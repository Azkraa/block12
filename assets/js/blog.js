document.addEventListener("DOMContentLoaded", () => {

    // === 🔥 Fade Animation for ALL Visible Blog Elements + Repeat Animation ===
    const fadeTargets = document.querySelectorAll(
        ".blog-list, .blog-grid, .blog-card, .blog-card img, h2.section-title"
    );

    // Add hidden state at start
    fadeTargets.forEach(el => el.classList.add("fade-in"));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");      // animate on enter
            } else {
                entry.target.classList.remove("show");   // remove on exit (repeat next time)
            }
        });
    }, {
        threshold: 0.15
    });

    fadeTargets.forEach(el => fadeObserver.observe(el));
});