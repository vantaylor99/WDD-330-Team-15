import { renderListWithTemplate } from "../utils.mjs";
import { getLocalStorage } from "../utils.mjs";

function cartItemTemplate(product, category) {
    const newItem = `<li class="product-card">
                <a href="product_pages/index.html?category=${category}&id=${product.Id}">
                <img src="${product.Image}" alt="Image of the product '${product.Name}'">
                <h2 class="card__brand">${product.Brand.Name}</h2>
                <h3 class="card__name">${product.NameWithoutBrand}</h3>
                <p class="product-card__price">$${product.ListPrice}</p>
                </a>
            </li>`
            return newItem
}


export default class ShoppingCart{
    constructor(key, outputElement){
        this.key = key;
        this.outputElement = outputElement;
    }

    async init() {
        const products = getLocalStorage(this.key);
        this.renderList(products)
    }

    renderList(products){
        const element = document.querySelector(this.outputElement)
        renderListWithTemplate(cartItemTemplate, element, products)
    }

}