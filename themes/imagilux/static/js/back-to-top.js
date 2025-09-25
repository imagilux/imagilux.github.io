// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.setAttribute('title', 'Back to top');

    // Add button to body
    document.body.appendChild(backToTopButton);

    // Show/hide button based on scroll position
    function toggleButtonVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const threshold = 300; // Show button after scrolling 300px

        if (scrollTop > threshold) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleButtonVisibility);
    backToTopButton.addEventListener('click', scrollToTop);

    // Keyboard support
    backToTopButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });

    // Initial check
    toggleButtonVisibility();
});
