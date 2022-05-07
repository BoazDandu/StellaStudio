const openNav = document.getElementById('openNav');
const navMenu = document.getElementById('navMenu');

openNav.addEventListener('click', function() {
    navMenu.classList.toggle('active-nav')
});

