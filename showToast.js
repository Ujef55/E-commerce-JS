export function showToast(action, id) {
    const toast = document.createElement('div');
    toast.classList.add('toast');

    if (action === 'add') {
        toast.textContent = `Product with ID: ${id} has been added`
    } else {
        toast.textContent = `Product with ID: ${id} has been removed`
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}