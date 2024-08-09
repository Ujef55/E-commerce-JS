import { getCartFromLocalStorage } from "./getCartFromLocalStorage";

const productSubTotal = document.querySelector('.productSubTotal');
const productFinalTotal = document.querySelector('.productFinalTotal');
const taxPrice = 50;

export function updateTotalPrice() {
    let localStorageData = getCartFromLocalStorage();

    let totalPrice = localStorageData.reduce((acc, currElem) => {
        let productPrice = parseInt(currElem.price) || 0;
        return acc + productPrice;
    }, 0)

    productSubTotal.textContent = `₹${totalPrice}`;
    productFinalTotal.textContent = `₹${totalPrice + taxPrice}`;
}