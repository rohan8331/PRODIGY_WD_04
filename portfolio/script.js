// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// CSS for animations
/* Add this to styles.css */

.fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.slide {
    opacity: 0;
    transform: translateY(20px);
}
