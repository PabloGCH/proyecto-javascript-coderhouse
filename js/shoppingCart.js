import ProductBox from "./productBox.js";

//Debe recibir un elemento html vacio
export default class ShoppingCart {
	constructor(element) {
		this.element = element;
		this.list = JSON.parse(localStorage.getItem("cart"));
		this.deleteMode = false;
	}
	loadProducts() {
		for(const item of this.list) {
			let product = new ProductBox(item.name, item.price, item.img, item.summary);
			this.element.append(product.element);
		}
	}
}
