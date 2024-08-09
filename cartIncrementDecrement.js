import { getCartFromLocalStorage } from "./getCartFromLocalStorage";

export function cartIncrementDecrement(e, id, stock, price) {
    const currentCard = document.querySelector(`#card${id}`);
    const productQuantity = currentCard.querySelector('.productQuantity');
    const productPrice = currentCard.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;

    // Get data from local storage
    let localStorageData = getCartFromLocalStorage();

    let existingProduct = localStorageData.find((currProd) => {
        return currProd.id == id;
    })

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price;
        price = price;
    }


    if (e.target.classList.contains('cartIncrement')) {
        if (quantity < stock) {
            quantity++;
        } else if (quantity == stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }


    if (e.target.classList.contains('cartDecrement')) {
        if (quantity > 1) {
            quantity--;
        }
    }


    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };
    updatedCart = localStorageData.map((prod) => {
        return prod.id == id ? updatedCart : prod;
    })

    console.log(updatedCart);

    localStorage.setItem('localStorageProduct', JSON.stringify(updatedCart));


    productQuantity.textContent = quantity;
    productPrice.textContent = localStoragePrice;
}