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


document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.product-list');
  list.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-item-button');
    if (!removeBtn) return

    const index = removeBtn.dataset.index
    removeItemFromCartByIndex(index);
    renderCartContents();
    updateCartBadge();
  })

})

renderCartContents();
loadHeaderFooter().then(updateCartBadge);

