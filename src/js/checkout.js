import { loadHeaderFooter } from './utils.mjs';
import { updateCartBadge } from './modules/cartCountBadge.mjs';
import CheckoutProcess from './modules/CheckoutProcess.mjs';


loadHeaderFooter(updateCartBadge);
const checkout = new CheckoutProcess("cart", "#order-summary");
checkout.init();
