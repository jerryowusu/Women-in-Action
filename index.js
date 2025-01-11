document.addEventListener("DOMContentLoaded", function () {
    const lazySections = document.querySelectorAll('[data-lazy="true"]');

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                section.classList.add('opacity-100', 'transition-opacity');  // Add visibility classes
                section.removeAttribute('data-lazy');  // Remove lazy load marker
                observer.unobserve(section);  // Stop observing this section
            }
        });
    }, { threshold: 0.5 });

    lazySections.forEach(section => {
        section.classList.add('opacity-0');  // Initially hide sections
        intersectionObserver.observe(section);
    });
});
