import ProductData from "./modules/ProductData.mjs";
import ProductList from "./modules/ProductList.mjs";

const listElement = document.getElementById('productList');
const dataSource = new ProductData("tents");
const productList = new ProductList("tents", dataSource, listElement);

await productList.init();

