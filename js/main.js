class Product {
	name;
	price;
	element;
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.element = document.createElement("div");
		this.element.innerHTML =
		`
		<div class="card-body">
			<div class="remove-btn btn btn-danger">X</div>
			<h5 class="card-title">${name}</h1>
			<h6 class="card-subtitle">Precio: $${price}</div>
		</div>
		`;
		this.element.className = "card product-card";
		//Se guarda en variable para ser usado en arrow function
		let element = this.element; 
		element.getElementsByClassName("remove-btn")[0].addEventListener("click", () => {
			if(confirm("Desea eliminar el elemento?")) {
				element.remove();
			}
		});
	}
}

//Necesita que haya un elemento html con el id product-container
class ProductManager {
	manager;
	buttonsBox;
	container;
	list = [];
	constructor() {
		this.manager = document.getElementById("product-manager");

		//Se agregan elementos del componente
		
		this.buttonsBox = this.manager.appendChild(document.createElement("div"));
		this.buttonsBox.innerHTML =
		`
		<button type="button" class="add-btn btn btn-success">Añadir producto</button>
		<button type="button" class="rem-btn btn btn-danger">Eliminar producto</button>
		`;
		this.container = this.manager.appendChild(document.createElement("div"));
		this.container.className = "product-container 5 d-flex flex-row flex-wrap";
		
		//Se guarda en una variable para ser usado en arrowFunction
		let container = this.container

		//Se agregan los eventos de los elementos
		this.buttonsBox.getElementsByClassName("add-btn")[0].addEventListener("click", () => {
			let name = prompt("Ingrese el nombre");
			let price = prompt("Ingrese el precio del producto");
			if(isNaN(price)) {
				price = 0;
			} else {
				price = parseInt(price);
			}
			const product = new Product(name, price);
			container.append(product.element);
		});
	}
}
const productList = new ProductManager;



