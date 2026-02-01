import { updateCartBadge } from './modules/cartCountBadge.mjs';
import ExternalServices from './modules/ExternalServices.mjs';
import ProductDetails from './modules/ProductDetails.mjs';
import { getParam } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const productID = getParam('id');
  const category = getParam('category');
  const dataSource = new ExternalServices(category);

  const product = new ProductDetails(productID, dataSource);

  product.init();
});

loadHeaderFooter(updateCartBadge)
