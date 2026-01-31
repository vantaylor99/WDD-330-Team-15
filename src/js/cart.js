import { updateCartBadge } from './modules/cartCountBadge.mjs';
import { getLocalStorage } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Images.PrimaryExtraLarge}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateTotal() {
  const cartItems = getLocalStorage('cart');
  let total = 0
  const totalSpan = document.getElementById('total');
  cartItems.forEach(item => {
    total = total += item.FinalPrice
  });
  totalSpan.innerHTML = `${total.toLocaleString("en-US", { style: "currency", currency: "USD" })}`;
}

renderCartContents();
calculateTotal();
loadHeaderFooter(updateCartBadge);
