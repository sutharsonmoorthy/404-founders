//Navbar 
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

//Slider
let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = currentSlide * -100;
    slider.style.transform = `translateX(${offset}%)`;
}