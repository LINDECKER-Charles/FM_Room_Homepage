/* Burger Menu */

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

/* Slider */

const mainSect = document.getElementById('main-section');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

function slide(index) {
  mainSect.style.transform = `translateX(-${index * 100}vw)`
}

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    if(currentIndex > 0){
        currentIndex--;
        slide(currentIndex);
    }
});

arrowRight.addEventListener('click', () => {
    if(currentIndex < 2){
        currentIndex++;
        slide(currentIndex);
    }
});

