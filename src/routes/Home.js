import { products } from "../data";
import {
  insertNavbar,
  toggleCart,
  toggleDesktopMenu,
  toggleMobileMenu,
  closeProductDetailAside,
  openProductDetailAside,
  insertLogo,
} from "../utils";
import { Cart } from "../components/Cart";
const productDetail = (image,title,price,description) => {
    const aside = document.createElement("aside");
    aside.id = "productDetail";
    aside.className = "inactive";
    aside.innerHTML = `
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src=${image}
        alt=${title}>
    <div class="product-info">
        <p>${price}</p>
        <p>${title}</p>
        <p>${description}
        </p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>
`
return aside


}
export function Home() {
   

  
  const app = document.querySelector("#app");
  app.innerHTML = `
        <section class="main-container">
        </section>
    `;


  const { renderCart } = Cart();
  insertNavbar();
  insertLogo()
  const cartIcon = document.querySelector(".navbar-shopping-cart");
  cartIcon.addEventListener("click", () => {
    renderCart();
  });
  const { addToCart, cart } = Cart();
  const menuEmail = document.querySelector(".navbar-email");
  const menuHamIcon = document.querySelector(".menu");
  const menuCartIcon = document.querySelector(".navbar-shopping-cart");

  
  menuEmail.addEventListener("click", toggleDesktopMenu);
  menuHamIcon.addEventListener("click", toggleMobileMenu);
  menuCartIcon.addEventListener("click", toggleCart);
  

  function createProductsList(products) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const productImg = document.createElement("img");
      productImg.src = product.images[0];
      productImg.alt = product.title;
      productImg.addEventListener("click", openProductDetailAside);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      const productInfoDiv = document.createElement("div");
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price}`;
      const productName = document.createElement("p");
      productName.textContent = product.title;
      const productInfoFigure = document.createElement("figure");
      const addToCartIcon = document.createElement("img");
      addToCartIcon.src = "./icons/bt_add_to_cart.svg";
      addToCartIcon.alt = "Add to cart icon";
      addToCartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        addToCart(product);
      });
      productInfoFigure.append(addToCartIcon);
      productInfoDiv.append(productPrice, productName);
      productInfo.append(productInfoDiv, productInfoFigure);
      productCard.append(productImg, productInfo);

      cardsContainer.append(productCard);
      app.insertAdjacentElement('beforebegin',productDetail(product.images[0],product.title,product.price,product.description))
      document.querySelector(
        ".product-detail-close"
      ).addEventListener("click", closeProductDetailAside);
    });
  }
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");
  createProductsList(products);
  document.querySelector(".main-container").append(cardsContainer);
}
