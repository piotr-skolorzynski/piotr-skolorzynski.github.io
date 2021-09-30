const navbarBtn = document.querySelector('.navbar');
const navMobile = document.querySelector('.nav-mobile');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list');
const allSections = document.querySelectorAll('.section');

const about = document.querySelector('#about');
const experience = document.querySelector('#experience');
const skills = document.querySelector('#skills');
const hobbies = document.querySelector('#hobbies');

const yearInfo = document.querySelector('.year span');

// scrollspy
const handleScrollspy = () => {
    const win = window.scrollY + nav.offsetHeight;
    if ((about.offsetTop) <= win && experience.offsetTop > win) {
        document.querySelector('#link-about').classList.add('active');
        document.querySelector('#link-experience').classList.remove('active');
        document.querySelector('#link-skills').classList.remove('active');
        document.querySelector('#link-hobbies').classList.remove('active');
    } else if (experience.offsetTop <= win && skills.offsetTop > win) {
        document.querySelector('#link-about').classList.remove('active');
        document.querySelector('#link-experience').classList.add('active');
        document.querySelector('#link-skills').classList.remove('active');
        document.querySelector('#link-hobbies').classList.remove('active');
    } else if (skills.offsetTop <= win && hobbies.offsetTop > win) {
        document.querySelector('#link-about').classList.remove('active');
        document.querySelector('#link-experience').classList.remove('active');
        document.querySelector('#link-skills').classList.add('active');
        document.querySelector('#link-hobbies').classList.remove('active');
    } else if (hobbies.offsetTop <= win) {
        document.querySelector('#link-about').classList.remove('active');
        document.querySelector('#link-experience').classList.remove('active');
        document.querySelector('#link-skills').classList.remove('active');
        document.querySelector('#link-hobbies').classList.add('active');
    } else {
        document.querySelector('#link-about').classList.remove('active');
        document.querySelector('#link-experience').classList.remove('active');
        document.querySelector('#link-skills').classList.remove('active');
        document.querySelector('#link-hobbies').classList.remove('active');
    }
};

// change nav background 
const handleNavBackground = () => {
    const currentPosition = window.scrollY + nav.offsetHeight;
    allSections.forEach(section => {
        if (currentPosition <= 3*nav.offsetHeight) {
            nav.classList.remove('bcg-1');
            nav.classList.remove('bcg-2');
        } else if ((currentPosition > 3*nav.offsetHeight && currentPosition < about.offsetTop)) {
            nav.classList.remove('bcg-1');
            nav.classList.add('bcg-2');
        } else if (section.classList.contains('section-bcg2') && section.offsetTop <= currentPosition) {
            nav.classList.remove('bcg-1');
            nav.classList.add('bcg-2');
        }  else if (section.classList.contains('section-bcg1') && section.offsetTop <= currentPosition) {
            nav.classList.remove('bcg-2');
            nav.classList.add('bcg-1');
        }        
    });
};

//if proper media handle navigation
const handleNavigation = () => {
    const mobileViewport = window.matchMedia('min-width: 768px');
    if (mobileViewport) {
        handleScrollspy();
        handleNavBackground();
    }
};

// close mobile navigation when link is chosen
const handleLinks = () => {
    navLinks.forEach(item => {
        item.addEventListener('click', handleMobNavigation);
    });
};

// show or hide mobile navigation if navbar button is clicked
const handleMobNavigation = () => {
    navMobile.classList.toggle('show');
    handleLinks();
};

document.addEventListener('scroll', handleNavigation);
navbarBtn.addEventListener('click', handleMobNavigation);
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    yearInfo.innerHTML = year;
})