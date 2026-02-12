// Get all menu toggles
const menuToggles = document.querySelectorAll('.menu-toggle');
const menuItems = document.querySelectorAll('.menu-item');

// Add click event to toggle submenus
menuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior for menu toggle only
        const menuItem = this.parentElement;
        const isActive = menuItem.classList.contains('active');
        
        // Close all other menus
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current menu
        if (!isActive) {
            menuItem.classList.add('active');
        }
    });
});

// Close menu when clicking elsewhere
document.addEventListener('click', function(event) {
    const isMenuToggle = event.target.closest('.menu-toggle');
    const isSubmenuLink = event.target.closest('.submenu a');
    
    // Close menu if clicking submenu link
    if (isSubmenuLink) {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Close menu if clicking elsewhere (not on menu toggle)
    if (!isMenuToggle && !event.target.closest('.menu-item')) {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});