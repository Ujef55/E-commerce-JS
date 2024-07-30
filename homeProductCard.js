import { homeIncrementDecrement } from "./homeIncrementDecrement";
import { addToCart } from "./addtoCart";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export function homeProductCard(products) {
    console.log(products);

    if (!products) {
        return false;
    }

    products.forEach((currentProduct) => {
        const { id, name, category, brand, price, stock, description, image } = currentProduct;

        const cloneProduct = document.importNode(productTemplate.content, true);
        cloneProduct.querySelector('.productName').textContent = name;
        cloneProduct.querySelector('.category').textContent = category;
        cloneProduct.querySelector('.productDescription').textContent = description;
        cloneProduct.querySelector('.productPrice').textContent = `₹${price}`;
        cloneProduct.querySelector('.productStock').textContent = stock;
        cloneProduct.querySelector('.productImage').setAttribute('src', image);
        cloneProduct.querySelector('.productActualPrice').textContent = `₹${Math.round(price * 3)}`;

        cloneProduct.querySelector('#cardValue').setAttribute('id', `card${id}`);

        cloneProduct.querySelector('.stockElement').addEventListener('click', (e) => {
            homeIncrementDecrement(e, id, stock);
        })

        cloneProduct.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            addToCart(e, id, stock);
        });

        productContainer.appendChild(cloneProduct);
    });
};