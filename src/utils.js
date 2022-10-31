import { Navbar } from './components/Navbar';

export function insertNavbar() {
  document.querySelector('body').insertAdjacentElement('afterBegin', Navbar());
}

export function toggleDesktopMenu() {
  const desktopMenu = document.querySelector('.desktop-menu');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

export function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  closeProductDetailAside();
}
export function toggleCart() {
  const desktopMenu = document.querySelector('.desktop-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const productDetailContainer = document.querySelector('#productDetail');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}
export function openProductDetailAside({ }) {
  const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
  const productDetailContainer = document.querySelector('#productDetail');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

export function closeProductDetailAside() {
  const productDetailContainer = document.querySelector('#productDetail');
  productDetailContainer.classList.add('inactive');
}
export function insertLogo() {
  const logo = document.createElement('img');
  logo.src = '/logos/logo_yard_sale.svg';
  logo.alt = 'menu';
  logo.classList.add('logo');
  logo.addEventListener('click', () => {
    window.location.pathname = '/';
  });
  document.querySelector('.navbar-left').insertAdjacentElement('afterbegin', logo);
}
