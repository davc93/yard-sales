import { Navbar } from "../components/Navbar"

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
    document.querySelector('body').insertAdjacentElement('afterBegin',Navbar())
    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu')
    const menuHamIcon = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobile-menu')
    const menuCartIcon = document.querySelector('.navbar-shopping-cart')
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
    const productList = [

    ]
    productList.push({
        name: 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    productList.push({
        name: 'Pantalla',
        price: 220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    productList.push({
        name: 'Computadora',
        price: 520,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
        name: 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    productList.push({
        name: 'Pantalla',
        price: 220,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    productList.push({
        name: 'Computadora',
        price: 520,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

    
    const productDetailContainer = document.querySelector('#productDetail')
    // const cardsContainer = document.querySelector('.cards-container')
    const productDetailCloseIcon = document.querySelector('.product-detail-close')
    menuEmail.addEventListener('click', toggleDesktopMenu)
    menuHamIcon.addEventListener('click', toggleMobileMenu)
    menuCartIcon.addEventListener('click', toggleCart)
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
    function openProductDetailAside({ }) {

        shoppingCartContainer.classList.add('inactive')
        productDetailContainer.classList.remove('inactive')
    }

    function closeProductDetailAside() {

        productDetailContainer.classList.add('inactive')
    }

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');


    function createProductsList(products) {
        products.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            const productImg = document.createElement('img');
            productImg.src = product.image;
            productImg.alt = product.name;
            productImg.addEventListener('click', openProductDetailAside)
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            const productInfoDiv = document.createElement('div');
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;
            const productName = document.createElement('p');
            productName.textContent = product.name;
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
    createProductsList(productList)
    document.querySelector('.main-container').append(cardsContainer)
    function toggleDesktopMenu() {
        const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
        if (!isAsideClosed) {
            shoppingCartContainer.classList.add('inactive')
        }
        desktopMenu.classList.toggle('inactive')
    }

    function toggleMobileMenu() {
        const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
        if (!isAsideClosed) {
            shoppingCartContainer.classList.add('inactive')
        }
        mobileMenu.classList.toggle('inactive')
        closeProductDetailAside()

    }
    function toggleCart() {
        const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
        const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
        }
        if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive')
        }
        if (!isProductDetailClosed) {

            productDetailContainer.classList.add('inactive')
        }

        shoppingCartContainer.classList.toggle('inactive')
    }








}