import { getLocalStorage, setLocalStorage } from "../utils.mjs";
import ProductData from "./ProductData.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.productId = {};
    }

    async init() {
        this.product = await this.dataSource.

    }
}




async function addProductToCart(product) {
    let itemsInCart = await countItemsInCart();
    setLocalStorage(`customer-cart-item${itemsInCart}`, product);
    setLocalStorage('itemsInCart', itemsInCart + 1);
}


export default class ProductData {
    constructor(category) {
        this.category = category;
        this.path = `../json/${this.category}.json`;
    }
    getData() {
        return fetch(this.path)
            .then(convertToJson)
            .then((data) => data);
    }
    async findProductById(id) {
        const products = await this.getData();
        return products.find((item) => item.Id === id);
    }
}
