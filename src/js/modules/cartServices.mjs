import { getLocalStorage, setLocalStorage } from "../utils.mjs";


export function removeItemFromCartByIndex(index) {
    const cart = getLocalStorage('cart') ?? [];
    cart.splice(index, 1)
    setLocalStorage("cart", cart)
}