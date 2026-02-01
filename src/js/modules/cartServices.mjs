import { alertMessage, getLocalStorage, setLocalStorage } from "../utils.mjs";


export function removeItemFromCartByIndex(index) {
    const cart = getLocalStorage('cart') ?? [];
    alertMessage(`${cart[index].NameWithoutBrand} has been removed from the cart`)
    cart.splice(index, 1)
    setLocalStorage("cart", cart)
}