import ProductData from "./ProductData.mjs";


const brand = document.getElementById('productBrand');
const name = document.getElementById('productName');
const image = document.getElementById('productImage');
const price = document.getElementById('productCardPrice');
const color = document.getElementById('productColor');
const description = document.getElementById('productDescription');
const button = document.getElementById('addToCart');


export async function displayProduct(category, id) {
    const data = new ProductData(category);
    const product = await data.findProductById(id)

    brand.textContent = `${product.Brand.Name}`;
    name.textContent = `${product.NameWithoutBrand}`;
    
    image.setAttribute('src', product.Image);
    image.setAttribute('alt', `Image of the ${product.name}`);

    price.textContent = `${product.ListPrice}`;
    color.textContent = `${product.Colors[0].ColorName}`;
    description.innerHTML = `${product.DescriptionHtmlSimple}`;
    button.dataset.id = product.Id;
    button.dataset.category = category;

}

