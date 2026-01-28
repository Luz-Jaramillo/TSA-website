// Get the About link and submenu
const aboutLink = document.querySelector('.links li a[href="#"]');
const aboutSubmenu = document.querySelector('.about-submenu');
const entertainmentSubmenu = document.querySelector('.entertainment-submenu');
const joinSubmenu = document.querySelector('.join-submenu');
// Add click event to toggle submenu
aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    aboutSubmenu.style.display = aboutSubmenu.style.display === 'block' ? 'none' : 'block';
});

// Optional: Hide submenu when clicking elsewhere
document.addEventListener('click', function(event) {
    if (!aboutLink.contains(event.target) && !aboutSubmenu.contains(event.target)) {
        aboutSubmenu.style.display = 'none';
    }
});