// === 🔥 Scroll Fade Animation (Repeat on Scroll) ===
document.addEventListener("DOMContentLoaded", () => {

    // 🔎 Elements to animate
    const fadeTargets = document.querySelectorAll(
        ".fade-in, article p, article ul, article h2, article h3, blockquote, .banner-img, table, .cta-box"
    );

    // Add initial hidden state
    fadeTargets.forEach(el => el.classList.add("fade-in"));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");      // fade in
            } else {
                entry.target.classList.remove("show");   // fade out again
            }
        });
    }, { threshold: 0.15 });

    fadeTargets.forEach(el => fadeObserver.observe(el));

});
