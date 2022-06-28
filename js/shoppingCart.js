import ProductBox from "./productBox.js";

//Debe recibir un elemento html vacio
export default class ShoppingCart {
	constructor(element) {
		this.element = element;
		this.list = JSON.parse(localStorage.getItem("cart")) || [];
		this.deleteMode = false;
		this.deleteButton = this.element.appendChild(document.createElement("button"));
		this.deleteButton.innerText = "Delete products";
		this.deleteButton.className = "ms-2 mt-2 btn btn-danger"
		this.productContainer = this.element.appendChild(document.createElement("div"));
		this.productContainer.className = "mt-3 d-flex flex-row flex-wrap hide-rm";
		let ref = this;
		this.deleteButton.addEventListener("click", () => {
			ref.deleteMode = ref.deleteMode ? (
				ref.productContainer.classList.add("hide-rm"),
				false
			) : (
				ref.productContainer.classList.remove("hide-rm"),
				true
			);
			console.log(ref.deleteMode);
		});
	}
	removeButtonEvent(button, product) {
		let ref = this;
		button.addEventListener("click", () => {
				Swal.fire({
					icon: "warning",
					title: "Are you sure ?",
					text: "This will remove the product from the cart.",
					buttonsStyling: false,
					customClass: {
						confirmButton: "btn ms-2 btn-danger",
						cancelButton: "btn me-2 btn-secondary"
					},
					confirmButtonText: "Delete",
					cancelButtonText: "Cancel",
					showCancelButton: true,
					reverseButtons: true
				}).then(response => {
					response.isConfirmed && (
						button.parentNode.remove(),
						ref.list.splice(
							ref.list.findIndex(el => el == product),
							1
						),
						localStorage.setItem("cart", JSON.stringify(ref.list)),
						Swal.fire({
							icon: "success",
							title: "Product removed",
							text: "The product has been removed from the cart successfully",
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
		for(const item of this.list) {
			let product = new ProductBox(item);
			let rmButton = document.createElement("button");
			rmButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			rmButton.className = "rm-btn btn btn-danger";
			this.removeButtonEvent(rmButton, item);
			product.element.append(rmButton);
			this.productContainer.append(product.element);
		}
	}
}
