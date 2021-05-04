const navbarBtn = document.querySelector('.navbar');
const navMobile = document.querySelector('.nav-mobile');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list');
const navDesktop = document.querySelectorAll('.nav-desktop');
const allSections = document.querySelectorAll('.section');

// change nav background 
const handleObserver = () => {
    const currentPosition = window.scrollY;
    allSections.forEach(section => {
        if (currentPosition <= 100) {
            nav.classList.remove('bcg-1');
            nav.classList.remove('bcg-2');
        } else if ((currentPosition > 100 && currentPosition <= 900)) {
            nav.classList.remove('bcg-1');
            nav.classList.add('bcg-2');
        } else if (section.classList.contains('section-bcg2') && section.offsetTop <= currentPosition + 60) {
            nav.classList.remove('bcg-1');
            nav.classList.add('bcg-2');
        }  else if (section.classList.contains('section-bcg1') && section.offsetTop <= currentPosition + 60) {
            nav.classList.remove('bcg-2');
            nav.classList.add('bcg-1');
        }        
    });
};

// close mobile navigation when link is chosen
const handleLinks = () => {
    navLinks.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
};

// show or hide mobile navigation if navbar button is clicked
const handleNavigation = () => {
    navMobile.classList.toggle('show');
    handleLinks();
};

document.addEventListener('scroll', handleObserver);
navbarBtn.addEventListener('click', handleNavigation);