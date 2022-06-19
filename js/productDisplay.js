import ProductBox from "./productBox.js";
export default class ProductDisplay {
	constructor(element, plants) {
		this.element = element;
		this.plants = plants;
		this.productsInCart = []; 
	}
	loadProducts() {
		let ref = this;
		let cart = JSON.parse(localStorage.getItem("cart"));
		if(cart.length > 0) {
			this.productsInCart = cart;
		}
		for(const item of this.plants) {
			let product = new ProductBox(item.name, item.price, item.img, item.summary);
			let addButton = document.createElement("button");
			addButton.innerText = "Add to cart"
			addButton.className = "add-btn btn btn-success";
			addButton.addEventListener("click", () => {
				if(confirm("Do you wish to add the product to the shopping cart?")) {
					ref.productsInCart.push(item);
					localStorage.setItem("cart", JSON.stringify(ref.productsInCart));
				}
			});
			product.element.append(addButton);
			this.element.append(product.element);
		}
	}
}
