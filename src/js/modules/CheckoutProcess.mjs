import { alertMessage, getLocalStorage, setLocalStorage } from "../utils.mjs";
import ExternalServices from "./ExternalServices.mjs";


export default class CheckoutProcess {
    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.shipping = 0;
        this.tax = 0;
        this.itemSubtotal = 0;
        this.total = 0;
        this.services = new ExternalServices();
    }

    init() {
        this.list = getLocalStorage(this.key)
        document.querySelector("#subtotal").textContent = `${this.calculateSubtotal().toLocaleString("en-US", { style: "currency", currency: "USD" })}`
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
        return this.subtotal + this.shipping + this.tax;
    }


    packageItems(items) {
        return items.map(item => {
            return {
                id: item.Id,
                name: item.Name,
                price: item.FinalPrice,
                quantity: 1
            }
        });
    }

    async checkout(form) {
        const formElement = document.querySelector(form);
        const json = formDataToJSON(formElement);
        json.orderDate = new Date();
        json.total = this.total;
        json.tax = this.tax;
        json.shipping = this.shipping;
        json.items = this.packageItems(this.list);

        try {
            const res = await this.services.checkout(json);
            setLocalStorage("cart", [])
            window.location.href = "../checkout/success.html"
            console.log(res)
        }
        catch (error) {
            console.log(error)
            if (error.message.expiration === 'Card expired') {
                alertMessage(error.message.expiration)
            }
        }
    }



}

function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
        convertedtoJSON = {};

    formData.forEach(function (value, key) {
        convertedtoJSON[key] = value;
    });

    return convertedtoJSON;
}

/* 
{name: 'servicesError', message: {…}}
message
:
expiration
:
"Card expired"
[[Prototype]]
:
Object
name
:
"servicesError"
*/

