const navbarBtn = document.querySelector('.navbar');
const nav = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-list');

const listenLinks = () => {
    navLinks.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
};

//zapytaj czy takie rozwiązanie jest dobre czy też lepiej stworzyć oddzielną funkcję do usuwania klasy show po kliknięciu 
const handleNavigation = () => {
    nav.classList.toggle('show');
    listenLinks();
};

navbarBtn.addEventListener('click', handleNavigation);