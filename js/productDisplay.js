import ProductBox from "./productBox.js";
export default class ProductDisplay {
	constructor(element) {
		this.element = element;
		this.URL = "./database.json";
		this.productsInCart = []; 
	}
	addButtonEvent(button, product) {
		let ref = this;
		button.addEventListener("click", () => {
			Swal.fire({
				icon: "question",
				title: "Are you sure ?",
				text: "This will add the product to the cart",
				buttonsStyling: false,
				customClass: {
					confirmButton: "btn ms-2 btn-success",
					cancelButton: "btn me-2 btn-secondary"
				},
				confirmButtonText: "Add",
				cancelButtonText: "Cancel",
				showCancelButton: true,
				reverseButtons: true
			}).then(response => {
				response.isConfirmed && (
					ref.productsInCart.push(product),
					localStorage.setItem("cart", JSON.stringify(ref.productsInCart)),
					Swal.fire({
						icon: "success",
						title: "Thanks!!",
						text: "The product has been added to the cart",
						buttonsStyling: false,
						customClass: {
							confirmButton: "btn btn-success"
						}
					})
				)
			});
		});
	}
	loadProducts() {
		this.productsInCart = JSON.parse(localStorage.getItem("cart")) || [];
		fetch(this.URL)
		.then((response) => response.json())
		.then((data) => {
			for(const item of data) {
				let product = new ProductBox(item);
				let addButton = document.createElement("button");
				addButton.innerText = "Add to cart";
				addButton.className = "add-btn btn btn-success";
				this.addButtonEvent(addButton, item);
				product.element.append(addButton);
				this.element.append(product.element);
			}
		});
	}
}
