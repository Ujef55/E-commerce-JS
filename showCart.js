import products from './api/products.json';
import { getCartFromLocalStorage } from './getCartFromLocalStorage';
import { removeItemFromCart } from './removeItemFromCart';

const cartContainer = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

let localStorageProducts = getCartFromLocalStorage();

let filteredProducts = products.filter((product) => {
    return localStorageProducts.some((elem) => elem.id == product.id);
});

console.log(filteredProducts);

filteredProducts.forEach((currentProduct) => {
    let { name, image, price, category, id, stock } = currentProduct;

    // get actual quantity and price from local storage
    let localStorageData = getCartFromLocalStorage();
    let existingProduct = localStorageData.find((product) => {
        return product.id == id;
    })
    let quantity = 1;

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    const cloneProduct = document.importNode(templateContainer.content, true);

    cloneProduct.querySelector('#cardValue').setAttribute('id', `card${id}`);
    cloneProduct.querySelector('.category').innerText = name;
    cloneProduct.querySelector('.productImage').setAttribute('src', image);
    cloneProduct.querySelector('.productPrice').innerText = price;
    cloneProduct.querySelector('.productQuantity').innerText = quantity;
    cloneProduct.querySelector('.category').innerText = category;

    cloneProduct.querySelector('.remove-to-cart-button').addEventListener('click', () => {
        removeItemFromCart(id);
    })


    cartContainer.appendChild(cloneProduct);
})


