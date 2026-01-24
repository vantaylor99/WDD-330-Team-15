import { loadHeaderFooter } from "./utils.mjs";

import ShoppingCart from "./modules/ShoppingCart.mjs";

const myCart = new ShoppingCart('cart', '.product-list')
const button = document.getElementById('checkout-button')


button.addEventListener('click', () => {
    alert("Add checkout functionality later")
})

myCart.init();
loadHeaderFooter();