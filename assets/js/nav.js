const HAMBURGER = document.getElementById('hamburgerMenu');
const CLOSE = document.getElementById('closeMenu');
const BTTM = document.getElementById('navBottom');
const LEFT = document.getElementById('menuLeft');
const RIGHT = document.getElementById('menuRight');

HAMBURGER.addEventListener('click', () => {
    LEFT.classList.toggle('openLeft');
    RIGHT.classList.toggle('openRight');
    document.body.classList.toggle('disableScroll');
})

CLOSE.addEventListener('click', () => {
    LEFT.classList.toggle('openLeft');
    RIGHT.classList.toggle('openRight');
    document.body.classList.toggle('disableScroll');
})