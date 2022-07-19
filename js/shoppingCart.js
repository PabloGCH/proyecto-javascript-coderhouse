import CartElement from './cartElement.js';

//Debe recibir un elemento html vacio
export default class ShoppingCart {
	constructor(element, buyButton) {
		this.element = element;
		this.list = JSON.parse(localStorage.getItem("cart")) || [];
		
		let productTable = this.element.appendChild(document.createElement("table"));
		productTable.className = "table text-light";
		let tableHead = productTable.appendChild(document.createElement("thead"));
		tableHead.innerHTML = `
			<tr>
				<th>Name</th>
				<th>Price</th>
				<th>Quantity</th>
				<th></th>
			</tr>
		`
		this.tableBody = productTable.appendChild(document.createElement("tbody"));
		this.buyButtonEvent(buyButton);

	}
	
	buyButtonEvent(buyButton) {
		buyButton.addEventListener("click", () => {
			Swal.fire({
				icon: "question",
				title: "Are you sure?",
				text: "This will buy all the products in the shopping cart",
				buttonsStyling: false,
				customClass: {
					confirmButton: "btn ms-2 btn-success",
					cancelButton: "btn me-2 btn-secondary"
				},
				cancelButtonText: "Cancel",
				confirmButtonText: "Buy",
				showCancelButton: true,
				reverseButtons: true
			})
			.then(res => {
				this.list = [];
				localStorage.removeItem("cart");
				this.loadProducts();
				if(res.isConfirmed) {
					Swal.fire({
						icon: "success",
						title: "Happy planting!!!",
						text: "Thanks for your purchase!",
						buttonsStyling: false,
						customClass: {
							confirmButton: "btn btn-success"
						}

					}).then(() => {
						window.location = "/";
					})
				}
				
			})
		})
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
					if(response.isConfirmed) {
						if(product.quantity > 1){
							product.quantity--;
						} else { 
							button.parentNode.parentNode.remove();
							ref.list.splice(
								ref.list.findIndex(el => el == product),
								1
							);
							
						}
						Swal.fire({
							icon: "success",
							title: "Product removed",
							text: "The product has been removed from the cart successfully",
							buttonsStyling: false,
							customClass: {
								confirmButton: "btn btn-success"
							}
						})
						this.loadProducts();
						localStorage.setItem("cart", JSON.stringify(ref.list));
					}
				});
			});

	}
	loadProducts() {
		this.tableBody.innerHTML = "";
		for(const item of this.list) {
			let product = new CartElement(item);
			let buttonCell = document.createElement("td");
			let rmButton = document.createElement("button");
			rmButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			rmButton.className = "rm-btn btn btn-danger";
			this.removeButtonEvent(rmButton, item);
			buttonCell.append(rmButton);
			product.element.append(buttonCell)
			this.tableBody.append(product.element);
		}
	}
}
