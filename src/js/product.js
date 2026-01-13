import { getLocalStorage } from './utils.mjs';
import ProductData from './modules/ProductData.mjs';
import { displayProduct } from './modules/DisplayProducts.mjs';
import { getParam } from './utils.mjs';



document.addEventListener('DOMContentLoaded', () => {
  const category = getParam('category');
  const productID = getParam('id');
  displayProduct(category, productID);
})

const dataSource = new ProductData('tents');

async function countItemsInCart() {
  if (getLocalStorage('itemsInCart') === null) {
    setLocalStorage('itemsInCart', 0);
  } else {
    return Number(getLocalStorage('itemsInCart'));
  }

  return Number(getLocalStorage('itemsInCart'));
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



