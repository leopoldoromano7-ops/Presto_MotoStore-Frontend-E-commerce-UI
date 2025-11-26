// FUNZIONALITA  PER navbar

let navbar = document.querySelector('.navbar-custom');

function updateNavbar() {
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-solid');
    } else {
        navbar.classList.add('navbar-solid');
        navbar.classList.remove('navbar-transparent');
    }
}

updateNavbar();
window.addEventListener('scroll', updateNavbar);