document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typed Text Animation for Hero Headline ---
    const typedTextElement = document.getElementById('typed-text');
    // Words to cycle through in the headline
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
            // Typing logic: adds one character
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at the end
            }
        } else {
            // Deleting logic: removes one character
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                typingSpeed = 100; // Speed up typing
            }
        }

        let delay = isDeleting ? 75 : typingSpeed;
        
        setTimeout(typeEffect, delay);
    }
    
    // Start the typing animation on load
    typeEffect();


    // --- 2. Scroll Fade-In Animation (Intersection Observer) ---

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the item is visible
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animated' class to trigger the CSS transition
                entry.target.classList.add('animated');
                // Stop observing once it's animated to save resources
                observer.unobserve(entry.target); 
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Select all service cards and project cards for animation
    const cards = document.querySelectorAll('.service-card, .project-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});