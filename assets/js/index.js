document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typed Text Animation for Hero Headline ---
    const typedTextElement = document.getElementById('typed-text');
    const words = [
        "Bloom in Full Color.", 
        "Shine with Bold Strategy.", 
        "Generate Real Impact."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; 

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (!isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 2000;
            }
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 100;
            }
        }

        let delay = isDeleting ? 75 : typingSpeed;
        setTimeout(typeEffect, delay);
    }
    
    typeEffect();


    // --- 2. Scroll Fade-In Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); 
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const cards = document.querySelectorAll('.service-card, .project-card');
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // === FADE IN + FADE OUT ON SCROLL ===
    const fadeItems = document.querySelectorAll("section, .hero-section, footer, .service-card, .project-card");

    fadeItems.forEach(item => item.classList.add("fade-in"));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // fade-in when visible
            } else {
                entry.target.classList.remove("show"); // fade-out when not visible
            }
        });
    }, { threshold: 0.15 });

    fadeItems.forEach(item => fadeObserver.observe(item));
});
