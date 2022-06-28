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
		if(cart != undefined) {
			this.productsInCart = cart;
		}
		for(const item of this.plants) {
			let product = new ProductBox(item.name, item.price, item.img, item.summary);
			let addButton = document.createElement("button");
			addButton.innerText = "Add to cart"
			addButton.className = "add-btn btn btn-success";
			addButton.addEventListener("click", () => {
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
						if(response.isConfirmed) {
							ref.productsInCart.push(item);
							localStorage.setItem("cart", JSON.stringify(ref.productsInCart));
							Swal.fire({
								icon: "success",
								title: "Thanks!!",
								text: "The product has been added to the cart",
								buttonsStyling: false,
								customClass: {
									confirmButton: "btn btn-success"
								}
							})
						}
					});
			});
			product.element.append(addButton);
			this.element.append(product.element);
		}
	}
}
