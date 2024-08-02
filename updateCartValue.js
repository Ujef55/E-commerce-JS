let cartValue = document.querySelector('#cartValue');

export function updateCartValue(cartArr, quantity, price) {
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartArr.length} </i>`);
}