// Toggle card content visibility
document.querySelectorAll('.card h2+i').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.parentElement.parentElement.classList.toggle('active');
    });
});

// Executes code when all dom is loaded
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Open menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});