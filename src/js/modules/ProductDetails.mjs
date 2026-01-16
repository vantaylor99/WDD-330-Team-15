import { getLocalStorage, setLocalStorage } from "../utils.mjs";
import ProductData from "./ProductData.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
    }
}




async function addProductToCart(product) {
    let itemsInCart = await countItemsInCart();
    setLocalStorage(`customer-cart-item${itemsInCart}`, product);
    setLocalStorage('itemsInCart', itemsInCart + 1);
}