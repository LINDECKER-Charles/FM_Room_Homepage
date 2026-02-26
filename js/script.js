const burgerOpenBtn = document.getElementById('open');
const burgerCloseBtn = document.getElementById('close');
const burger = document.getElementById('burger');

const mainNav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
    console.log('burger pressed');
    burgerCloseBtn.classList.toggle('opacity-0');
    burgerCloseBtn.classList.toggle('rotate-90');
    burgerOpenBtn.classList.toggle('opacity-0');
    burgerOpenBtn.classList.toggle('rotate-90');

    mainNav.classList.toggle('translate-x-full');
});