// change background header 
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scroll-bg', window.scrollY > 0);
});

// show menu 
const showMenu = document.querySelector('.nav__menu');
const menuButton = document.querySelector('.button__toggle');

menuButton.addEventListener('click', ()=> {
    // console.log('test')
    showMenu.classList.toggle('show');
    menuButton.classList.toggle('close');
})

// close menu 
const navLink = document.querySelectorAll('.list__link');

function linkAction() {
    const navMenu = document.querySelector('.nav__menu');

    navMenu.classList.remove('show');
    menuButton.classList.remove('close');
}
navLink.forEach(n => n.addEventListener('click', linkAction));