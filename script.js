const navbarBtn = document.querySelector('.navbar');
const navMobile = document.querySelector('.nav-mobile');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list');
const navDesktop = document.querySelectorAll('.nav-desktop');
const allSections = document.querySelectorAll('.section');


const sectionObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if (currentSection <= 100) {
            nav.classList.remove('bcg-1');
            nav.classList.remove('bcg-2');
        } else if (currentSection > 100 && currentSection <= 900) {
            nav.classList.remove('bcg-1');
            nav.classList.add('bcg-2');
        } else if (section.classList.contains('about')) {
            nav.classList.remove('bcg-2');
            nav.classList.add('bcg-1');
        }
        // } else if (section.classList.contains('experience')) {
        //     nav.classList.remove('bcg-1');
        //     nav.classList.add('bcg-2');
        // } else if (section.classList.contains('skills')) {
        //     nav.classList.remove('bcg-2');
        //     nav.classList.add('bcg-1');  
        // } else if (section.classList.contains('hobbies')) {
        //     nav.classList.remove('bcg-1');
        //     nav.classList.add('bcg-2');
        // }
    });
};

const listenLinks = () => {
    navLinks.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
};

//zapytaj czy takie rozwiązanie jest dobre czy też lepiej stworzyć oddzielną funkcję do usuwania klasy show po kliknięciu 
const handleNavigation = () => {
    navMobile.classList.toggle('show');
    listenLinks();
};

document.addEventListener('scroll', sectionObserver);
// navDesktop.addEventListener('click', linkObserver);
navbarBtn.addEventListener('click', handleNavigation);