import { renderListWithTemplate } from "../utils.mjs";

function c(product, category) {
    return `<li class="product-card">
                <a href="../product_pages/index.html?id=${product.Id}">
                <img src="${product.Images.PrimaryExtraLarge}" alt="Image of the product '${product.Name}'">
                <h2 class="card__brand">${product.Brand.Name}</h2>
                <h3 class="card__name">${product.NameWithoutBrand}</h3>
                <p class="product-card__price">$${product.ListPrice}</p>
                </a>
            </li>`
}



export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData(this.category);
        this.renderList(list)
    }

    renderList(list) {
        renderListWithTemplate(
            (item) => productCardTemplate(item, this.category),
            this.listElement,
            list
        );
    }

}


