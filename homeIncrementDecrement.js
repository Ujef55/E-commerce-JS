export function homeIncrementDecrement(e, id, stock) {
    const currentCard = document.querySelector(`#card${id}`);
    const productQuantity = currentCard.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute('data-quantity') || 1);

    if (e.target.classList.contains('cartIncrement')) {
        if (quantity < stock) {
            quantity++;
        }
    }

    if (e.target.classList.contains('cartDecrement')) {
        if (quantity > 1) {
            quantity--;
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
}