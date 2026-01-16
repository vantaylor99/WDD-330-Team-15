import { getLocalStorage, setLocalStorage } from "../utils.mjs";
import { displayProduct } from "./DisplayProducts.mjs";
import ProductData from "./ProductData.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);

        this.renderProductDetails();

        document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));
    }

    renderProductDetails() {
        displayProduct(this.product);
    }
}




async function addProductToCart(product) {
    let itemsInCart = await countItemsInCart();
    setLocalStorage(`customer-cart-item${itemsInCart}`, product);
    setLocalStorage('itemsInCart', itemsInCart + 1);
}