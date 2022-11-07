export function Navbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar--container')
  const aside = document.createElement('aside');
  aside.id = 'shoppingCartContainer';
  aside.className = 'inactive';
  aside.innerHTML = `
    <div class="title-container">
        <img src="/icons/flechita.svg" alt="arrow">
        <p class="title">My order</p>
    </div>

    `;

  const nav = document.createElement('nav');
  nav.innerHTML = `
    <img src="/icons/icon_menu.svg" alt="menu" class="menu">

    <div class="navbar-left">
    
        

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
            <li>
            <a href="/login">Login</a>
            </li>
            <li>
                <a href="/signup">Sign Up</a>
            </li>

        </ul>
    </div>

    <div class="navbar-right">
        <ul>
            <li class="navbar-email">platzi@example.com</li>
            <li class="navbar-shopping-cart">
                <img src="./icons/icon_shopping_cart.svg" alt="shopping cart">
                <div></div>
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
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/signup">Sign Up</a>
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
    
    `;

  navbar.append(nav, aside);

  return navbar;
}
