import { updateCartValue } from "./updateCartValue";

export function getCartFromLocalStorage() {
    let cartProducts = localStorage.getItem('localStorageProduct');

    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    updateCartValue(cartProducts);

    return cartProducts;
}