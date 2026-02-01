import { loadHeaderFooter } from './utils.mjs';
import { updateCartBadge } from './modules/cartCountBadge.mjs';
import CheckoutProcess from './modules/CheckoutProcess.mjs';


loadHeaderFooter(updateCartBadge);
const checkout = new CheckoutProcess("cart", "#order-summary");
checkout.init();

const zipElement = document.querySelector('#checkout-form input[name=zip]');

zipElement.addEventListener('blur', function () {
    checkout.zipInit();
})

const checkoutForm = document.querySelector('#checkout-form');
checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    checkout.checkout('#checkout-form');
});