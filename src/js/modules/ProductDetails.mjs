import { getLocalStorage, getParam, setLocalStorage } from "../utils.mjs";
import { updateCartBadge } from "./cartCountBadge.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId)

        this.renderProductDetails();

        document.getElementById("addToCart").addEventListener("click", () => {
            this.addProductToCart();
            updateCartBadge();           
        });

    }

    renderProductDetails() {
        displayProduct(this.product);
    }

    addProductToCart() {
        const cartContents = getLocalStorage("cart") || [];
        cartContents.push(this.product);
        setLocalStorage("cart", cartContents);
        setLocalStorage("itemsInCartCount", cartContents.length);
    }
}


const brand = document.getElementById('productBrand');
const name = document.getElementById('productName');
const image = document.getElementById('productImage');
const price = document.getElementById('productCardPrice');
const color = document.getElementById('productColor');
const description = document.getElementById('productDescription');
const button = document.getElementById('addToCart');


export function displayProduct(product) {
    brand.textContent = `${product.Brand.Name}`;
    name.textContent = `${product.NameWithoutBrand}`;

    image.setAttribute('src', product.Image);
    image.setAttribute('alt', `Image of the ${product.Name}`);

    price.textContent = `${product.ListPrice}`;
    color.textContent = `${product.Colors[0].ColorName}`;
    description.innerHTML = `${product.DescriptionHtmlSimple}`;
    button.dataset.id = product.Id;

    button.dataset.category = getParam('category');
}
