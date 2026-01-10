import { getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

async function countItemsInCart() {
  if (getLocalStorage('itemsInCart') === null) {
    setLocalStorage('itemsInCart', 0);
  } else {
    return Number(getLocalStorage('itemsInCart'));
  }

  return Number(getLocalStorage('itemsInCart'));
}

async function addProductToCart(product) {
  let itemsInCart = await countItemsInCart();
  setLocalStorage(`customer-cart-item${itemsInCart}`, product);
  setLocalStorage('itemsInCart', itemsInCart + 1);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
