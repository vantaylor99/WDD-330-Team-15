import { updateCartBadge } from './modules/cartCountBadge.mjs';
import { removeItemFromCartByIndex } from './modules/cartServices.mjs';
import { getLocalStorage } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('cart');
  const htmlItems = cartItems.map((item, index) => cartItemTemplate(item, index));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item, index) {
  const newItem = `<li class='cart-card divider'>
  <a href='../product_pages/index.html?id=${item.Id}' class='cart-card__image'>
    <img
      src='${item.Images.PrimaryExtraLarge}'
      alt='${item.Name}'
    />
  </a>
  <a href='../product_pages/index.html?id=${item.Id}'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'><strong>Color: </strong>${item.Colors[0].ColorName}</p>
  <div>
    <button class="remove-item-button" data-index="${index}">❌</button>
    <p class='cart-card__quantity'>qty: 1</p> 
  </div>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  </li>`;

  return newItem;
}

document.querySelector('.product-list').addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.remove-item-button');

  if (removeBtn) {
    const index = removeBtn.dataset.index;

    removeItemFromCartByIndex(index);

    renderCartContents();
    calculateTotal();
    updateCartBadge();
  }
})


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
