import { getLocalStorage } from "../utils.mjs";


export default class CheckoutProcess {
    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.shipping = 0;
        this.tax = 0;
        this.itemSubtotal = 0;
        this.total = 0;
    }

    init() {
        this.list = getLocalStorage(this.key)
        document.querySelector("#subtotal").textContent = `${this.calculateSubtotal().toLocaleString("en-US", { style: "currency", currency: "USD" })}`
        this.zipInit()
    }

    zipInit() {
        const items = this.list.length
        this.subtotal = this.calculateSubtotal()
        this.tax = this.calculateTax();
        this.shipping = this.calculateShipping(items);

        document.querySelector("#tax").textContent = `${this.calculateTax().toLocaleString("en-US", { style: "currency", currency: "USD" })}`
        document.querySelector("#shipping").textContent = `${this.calculateShipping(items).toLocaleString("en-US", { style: "currency", currency: "USD" })}`
        document.querySelector("#total").textContent = `${this.calculateTotal().toLocaleString("en-US", { style: "currency", currency: "USD" })}`
    }

    calculateSubtotal() {
        this.itemSubtotal = 0;

        this.list.forEach(item => {
            this.itemSubtotal += item.FinalPrice
        });
        return this.itemSubtotal;
    }

    calculateTax() {
        this.tax = 0;
        this.tax = this.itemSubtotal * 0.06
        return this.tax
    }

    calculateShipping(items) {
        if (items > 0) {
            this.shipping = ((items - 1) * 2) + 10
        }
        return this.shipping;
    }

    calculateTotal() {
        return this.subtotal + this.shipping;
    }




}



