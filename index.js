const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbar-links');

// Toggle Search Bar
searchBtn.addEventListener('click', () => {
    searchDropdown.classList.toggle('active');
});

// Toggle Mobile Menu
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show-menu');
});

