import ProductData from './modules/ProductData.mjs';
import ProductDetails from './modules/ProductDetails.mjs';
import { getParam } from './utils.mjs';



document.addEventListener('DOMContentLoaded', () => {
  const productID = getParam('id');
  productDetails = new productDetails(category, productID);
})

const dataSource = new ProductData('tents');

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);



