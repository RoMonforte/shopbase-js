const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartIconMenu = document.querySelector('.navbar-shopping-cart');
const mobileBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProductDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
mobileBurgerIcon.addEventListener('click', toggleMobileMenu);
cartIconMenu.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    if(!asideProductDetail.classList.contains('inactive')) {
        asideProductDetail.classList.add('inactive');        
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if(!asideProductDetail.classList.contains('inactive')) {
        asideProductDetail.classList.add('inactive');        
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive'); 
}

