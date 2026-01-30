const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const closeSearch = document.getElementById('closeSearch'); 
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbar-links');

// Search bar open
searchBtn.addEventListener('click', () => {
    searchDropdown.classList.add('active');
});

// Search bar close (X button)
closeSearch.addEventListener('click', () => {
    searchDropdown.classList.remove('active');
});

// Mobile Menu toggle
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show-menu');
});

//search bar close (clicked anywhere in screen)
window.addEventListener('click', (e) => {
    if (searchDropdown.classList.contains('active') && 
        !searchDropdown.contains(e.target) && 
        !searchBtn.contains(e.target)) {
        
        searchDropdown.classList.remove('active');
    }
});