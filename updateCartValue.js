export function updateCartValue(cartArr) {
    let cartValue = document.querySelector('#cartValue');
    cartValue = cartValue.querySelector('.fa-cart-shopping');
    cartValue.innerText = ` ${cartArr.length}`
    console.log(cartValue);
}