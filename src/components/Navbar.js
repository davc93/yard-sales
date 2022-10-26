

export function Navbar() {
    const navbar = document.createElement('div')
    const aside = document.createElement('aside');
    aside.id = "shoppingCartContainer";
    aside.className = 'inactive'
    aside.innerHTML = `
    <div class="title-container">
        <img src="./icons/flechita.svg" alt="arrow">
        <p class="title">My order</p>
    </div>

    <div class="my-order-content">
        <div class="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close">
        </div>

        <div class="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close">
        </div>

        <div class="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close">
        </div>

        <div class="order">
            <p>
                <span>Total</span>
            </p>
            <p>$560.00</p>
        </div>

        <button class="primary-button">
            Checkout
        </button>
    </div>
    </div>

    `

    const nav = document.createElement('nav');
    nav.innerHTML = `
    <img src="./icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
        <a href="/">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo">
        </a>

        <ul>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Clothes</a>
            </li>
            <li>
                <a href="/">Electronics</a>
            </li>
            <li>
                <a href="/">Furnitures</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>
            <li>
                <a href="/">Others</a>
            </li>

        </ul>
    </div>

    <div class="navbar-right">
        <ul>
            <li class="navbar-email">platzi@example.com</li>
            <li class="navbar-shopping-cart">
                <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
                <div>2</div>
            </li>

        </ul>
    </div>
    <div class="desktop-menu inactive">
        <ul>
            <li>
                <a href="/" class="title">My orders</a>
            </li>

            <li>
                <a href="/">My account</a>
            </li>

            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
    </div>
    <div class="mobile-menu inactive">
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Clothes</a>
            </li>
            <li>
                <a href="/">Electronics</a>
            </li>
            <li>
                <a href="/">Furnitures</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>
            <li>
                <a href="/">Other</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="/" class="email">platzi@example.com</a>
            </li>
            <li>
                <a href="/" class="sign-out">Sign out</a>
            </li>
        </ul>
    </div>
    
    `
    navbar.append(nav,aside)

    
    return navbar
}