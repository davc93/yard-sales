
import { products } from "../data";
import { insertNavbar, toggleCart, toggleDesktopMenu, toggleMobileMenu } from "../utils";
export function Home() {
    document.querySelector('#app').innerHTML = `
    
<aside id="productDetail" class="inactive">
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike">
    <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.
        </p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>
</aside>
<section class="main-container">
    
</section>
    `
    
    insertNavbar()

    const menuEmail = document.querySelector('.navbar-email');
    const menuHamIcon = document.querySelector('.menu')
    const menuCartIcon = document.querySelector('.navbar-shopping-cart')

    const productDetailCloseIcon = document.querySelector('.product-detail-close')
    menuEmail.addEventListener('click', toggleDesktopMenu)
    menuHamIcon.addEventListener('click', toggleMobileMenu)
    menuCartIcon.addEventListener('click', toggleCart)
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
    
    function createProductsList(products) {
        products.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            const productImg = document.createElement('img');
            productImg.src = product.images[0];
            productImg.alt = product.title;
            productImg.addEventListener('click', openProductDetailAside)
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            const productInfoDiv = document.createElement('div');
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;
            const productName = document.createElement('p');
            productName.textContent = product.title;
            const productInfoFigure = document.createElement('figure');
            const addToCartIcon = document.createElement('img');
            addToCartIcon.src = './icons/bt_add_to_cart.svg';
            addToCartIcon.alt = 'Add to cart icon'
            productInfoFigure.append(addToCartIcon);
            productInfoDiv.append(productPrice, productName);
            productInfo.append(productInfoDiv, productInfoFigure);
            productCard.append(productImg, productInfo)

            cardsContainer.append(productCard)

        })

    }
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
    createProductsList(products)
    document.querySelector('.main-container').append(cardsContainer)
    


}