import { getCartFromLocalStorage } from "./getCartFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

getCartFromLocalStorage()

export function addToCart(e, id, stock) {
    const currentCard = document.querySelector(`#card${id}`);

    // get local storage data via this below function that is stored in arrLocalStorageProductCart variable
    let arrLocalStorageProductCart = getCartFromLocalStorage();

    // get current card quantintu and price with the help of unique id
    let quantity = currentCard.querySelector('.productQuantity').innerText;
    let price = currentCard.querySelector('.productPrice').innerText;

    // update price and pushing id, price, quantity in empty array which is coming from local storage
    price = price.replace('₹', '');

    const currentProduct = arrLocalStorageProductCart.find((prod) => {
        return prod.id == id;
    })

    if (currentProduct && quantity > 1) {
        quantity = Number(currentProduct.quantity) + Number(quantity);
        price = Number(quantity * price);
        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProductCart.map((prod) => {
            return prod.id == id ? updatedCart : prod;
        })

        console.log(updatedCart);

        localStorage.setItem('localStorageProduct', JSON.stringify(updatedCart));
    }

    if (currentProduct) {
        return false;
    }

    price = Number(quantity * price);
    arrLocalStorageProductCart.push({ id, price, quantity });

    // set updated arrLocalStorageProductCart to the local storage
    localStorage.setItem('localStorageProduct', JSON.stringify(arrLocalStorageProductCart));

    console.log(arrLocalStorageProductCart);

    // update cart value with every
    updateCartValue(arrLocalStorageProductCart, quantity, price);
}