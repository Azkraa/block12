document.addEventListener("DOMContentLoaded", () => {

    // === Fade Animation for ALL Visible Content + Repeat Animation ===
    const fadeTargets = document.querySelectorAll(
        "section, .container, footer, img, h1, h2, p, .vision-card"
    );

    // Initial hidden state
    fadeTargets.forEach(el => el.classList.add("fade-in"));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // animate on enter
            } else {
                entry.target.classList.remove("show"); // remove on exit (animate again next time)
            }
        });
    }, {
        threshold: 0.15
    });

    fadeTargets.forEach(el => fadeObserver.observe(el));
});
