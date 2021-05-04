const navbarBtn = document.querySelector('.navbar');
const navMobile = document.querySelector('.nav-mobile');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list');
// const navDesktop = document.querySelectorAll('.nav-desktop');
const allSections = document.querySelectorAll('.section');

let about = document.querySelector('#about');
let experience = document.querySelector('#experience');
let skills = document.querySelector('#skills');
let hobbies = document.querySelector('#hobbies');

// scrollspy
const scrollspy = () => {
    const win = window.pageYOffset;
    if (about.offsetTop <= win && experience.offsetTop > win) {
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

document.addEventListener('scroll', scrollspy);
document.addEventListener('scroll', handleObserver);
navbarBtn.addEventListener('click', handleNavigation);