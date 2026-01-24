import { getParam, loadHeaderFooter } from './utils.mjs';
import { updateCartBadge } from './modules/cartCountBadge.mjs'
import ProductData from './modules/ProductData.mjs';
import ProductList from './modules/ProductList.mjs';
import { capitalizeString } from './utils.mjs';

const category = getParam('category')
const dataSource = new ProductData();
const listElement = document.getElementById('productList');
const categorySpan = document.getElementById('product-category-span');
const indexOfDash = category.search('-');

function capitalizeCategory() {
    if (indexOfDash > 0) {
        const categorySplit = category.split('-');
        categorySpan.textContent = capitalizeString(categorySplit[0]) + " " + capitalizeString(categorySplit[1])
    }
    else {
        categorySpan.textContent = capitalizeString(category);
    }
}

// console.log(category.search('-'))
const productList = new ProductList(category, dataSource, listElement);


productList.init();
loadHeaderFooter(updateCartBadge);
capitalizeCategory();
