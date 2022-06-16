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
		//Guardo la referencia para usarlo dentro de arrow functions
		let reference = this; 
		//Agrego la funcion de eliminar al boton
		this.element.getElementsByClassName("remove-btn")[0].addEventListener("click", () => {
			if(confirm("Desea eliminar el elemento?")) {
				reference.element.remove();
				reference.element = 0;
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
		<button type="button" class="rm-btn btn btn-danger">Eliminar producto</button>
		`;
		this.container = this.manager.appendChild(document.createElement("div"));
		this.container.className = "product-container 5 d-flex flex-row flex-wrap";
		
		//Se guarda en una variable para ser usado en arrowFunction
		const ref = this;
		//Se agregan los eventos de los elementos
		
		//Se agrega el evento para el boton de agregado
		this.buttonsBox.getElementsByClassName("add-btn")[0].addEventListener("click", () => {
			let name = prompt("Ingrese el nombre");
			let price = prompt("Ingrese el precio del producto");
			if(isNaN(price)) {
				price = 0;
			} else {
				price = parseInt(price);
			}
			const product = new Product(name, price);
			ref.list.push(product);
			ref.container.append(product.element);
		});
		//Se agrega el evento para el boton de eliminado
		this.buttonsBox.getElementsByClassName("rm-btn")[0].addEventListener("click", () => {
			
		})

	}
	//Verifica si algunos de los elementos fue eliminado
	//Si asi fue, lo quita del array list
	cleanList() {
		for(let i=0; i < this.list.length; i++) {
			if(this.list[i].element == 0) {
				this.list.splice(i,1);
			}
		}
	}
}
const productList = new ProductManager;



