// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial check for elements in viewport
    handleScrollAnimations();
    
    // Check for elements in viewport on scroll
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
    });
    
    // Check for elements in viewport on resize
    window.addEventListener('resize', () => {
        handleScrollAnimations();
    });
}); 