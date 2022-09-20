const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartIconMenu = document.querySelector('.navbar-shopping-cart');
const closeproductDetailIcon = document.querySelector('.product-detail-close');
const mobileBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProductDetail = document.querySelector('.shopping-cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
mobileBurgerIcon.addEventListener('click', toggleMobileMenu);
cartIconMenu.addEventListener('click', toggleCartAside);
closeproductDetailIcon.addEventListener('click', closeproductDetailContainer);

function toggleDesktopMenu() {
    if(!asideProductDetail.classList.contains('inactive')) {
        asideProductDetail.classList.add('inactive');        
    }
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    if(!asideProductDetail.classList.contains('inactive')) {
        asideProductDetail.classList.add('inactive');        
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCartAside() {
    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');

}

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideProductDetail.classList.add('inactive');
}

function closeproductDetailContainer() {
    productDetailContainer.classList.add('inactive');   
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'HD TV',
    price: 7200,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Sneakers',
    price: 220,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
      
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
      
       productInfoFigure.appendChild(productImgCart);
       
       productInfo.appendChild(productInfoDiv);
       productInfo.appendChild(productInfoFigure);
      
       productCard.appendChild(productImg);
       productCard.appendChild(productInfo);
      
       cardsContainer.appendChild(productCard);
      }
}

renderProducts(productList);