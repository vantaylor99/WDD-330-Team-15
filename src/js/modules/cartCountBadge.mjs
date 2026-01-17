const span = document.getElementById("cartBadge");
const itemsInCartCount = localStorage.getItem("itemsInCartCount");

document.addEventListener('DOMContentLoaded', updateCartBadge());

export function updateCartBadge() {
    if (itemsInCartCount != null) {
        const currentItemsInCartCount = localStorage.getItem('itemsInCartCount');
        span.style.display = 'flex';
        span.textContent = currentItemsInCartCount;
    }
}
