import { getCartFromLocalStorage } from "./getCartFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

export function removeItemFromCart(id) {
    let cartProduct = getCartFromLocalStorage();

    let filteredProductArr = cartProduct.filter((product) => {
        return product.id !== id;
    })
    localStorage.setItem('localStorageProduct', JSON.stringify(filteredProductArr));

    let cardDiv = document.querySelector(`#card${id}`);
    if (cardDiv) {
        cardDiv.remove();
    }

    updateCartValue(filteredProductArr);
}