const itemsInCartCount = localStorage.getItem("itemsInCartCount");



export default function updateCartBadge() {
    document.addEventListener('DOMContentLoaded', updateCartBadge);
    const span = document.getElementById("cartBadge");

    const count = localStorage.getItem("itemsInCartCount") || 0;

    if(count > 0){
        span.style.display = 'flex'
        span.textContent = count
    }
    else{
        span.style.display = 'none';
        span.textContent = '';
    }

    if (itemsInCartCount != null) {
        const currentItemsInCartCount = localStorage.getItem('itemsInCartCount');
        span.style.display = 'flex';
        span.textContent = currentItemsInCartCount;
    }
}
