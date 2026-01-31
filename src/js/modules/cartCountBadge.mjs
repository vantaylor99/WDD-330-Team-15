import { getLocalStorage } from "../utils.mjs";

export function updateCartBadge() {
    const span = document.getElementById("cartBadge");
    if (!span) return

    const cart = getLocalStorage('cart') ?? [];
    const count = cart.length;

    if (count > 0) {
        span.style.display = 'flex'
        span.textContent = count
    }
    else {
        span.style.display = 'none';
        span.textContent = '';
    }
}
