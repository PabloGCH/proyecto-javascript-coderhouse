import ProductBox from "./productBox.js";

//Debe recibir un elemento html vacio
export default class ShoppingCart {
	constructor(element) {
		this.element = element;
		this.list = JSON.parse(localStorage.getItem("cart"));
		this.deleteMode = false;
		this.deleteButton = this.element.appendChild(document.createElement("button"));
		console.log(this.deleteButton);
		this.deleteButton.innerText = "Delete products";
		this.deleteButton.className = "ms-2 mt-2 btn btn-danger"
		this.productContainer = this.element.appendChild(document.createElement("div"));
		this.productContainer.className = "mt-3 d-flex flex-row flex-wrap";
		let ref = this;
		this.deleteButton.addEventListener("click", () => {
			if(ref.deleteMode) {
				ref.deleteMode = false;
				for(const item of ref.productContainer.getElementsByClassName("rm-btn")) {
					item.classList.add("visually-hidden");
				};
			} else {
				ref.deleteMode = true;
				for(const item of ref.productContainer.getElementsByClassName("rm-btn")) {
					item.classList.remove("visually-hidden");
				};
			}
		});
	}
	loadProducts() {
		let ref = this;
		for(const item of this.list) {
			let product = new ProductBox(item.name, item.price, item.img, item.summary);
			let rmButton = document.createElement("button");
			rmButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			rmButton.className = "rm-btn btn btn-danger visually-hidden";
			rmButton.addEventListener("click", () => {
				product.element.remove();
				let delIndex = ref.list.findIndex((el) => {
					return el == item;
				});
				ref.list.splice(delIndex, 1);
				localStorage.setItem("cart", JSON.stringify(ref.list));
			});
			product.element.append(rmButton);
			this.productContainer.append(product.element);
		}
	}
}
