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
			<div class="visually-hidden remove-btn btn btn-danger">X</div>
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
	deleteMode;
	list = [];
	constructor() {
		this.deleteMode = false;
		this.manager = document.getElementById("product-manager");
		//Se agregan elementos del ProductManager
		this.buttonsBox = this.manager.appendChild(document.createElement("div"));
		this.buttonsBox.innerHTML =
		`
		<button type="button" class="add-btn btn btn-success">Añadir producto</button>
		<button type="button" class="rm-btn btn btn-danger">Eliminar producto</button>
		`;
		this.container = this.manager.appendChild(document.createElement("div"));
		this.container.className = "product-container 5 d-flex flex-row flex-wrap";
		//Guardo la referencia para usarla las arrow functions
		const ref = this;
		//Se agregan los eventos de los botones
		this.addButton(this.buttonsBox.getElementsByClassName("add-btn")[0], ref);
		this.removeButton(this.buttonsBox.getElementsByClassName("rm-btn")[0],ref);

	}
	//Funcion para agregar el evento del boton de eliminado
	//Necesita que le pasen el boton, y el this de ProductManager
	removeButton(button, ref) {
		button.addEventListener("click", () => {
			const rmButtons = ref.container.getElementsByClassName("remove-btn");
			if(ref.deleteMode) {
				ref.deleteMode = false;
				for(const el of rmButtons) {
					el.classList.add("visually-hidden");
				}
				ref.cleanList();
			} else {
				ref.deleteMode = true;
				for(const el of rmButtons) {
					el.classList.remove("visually-hidden");
				}
			}
		});
	}
	//Funcion para agregar el evento del boton de agregado
	//Necesita que le pasen el boton, y el this de ProductManager
	addButton(button ,ref) {
		button.addEventListener("click", () => {
			if(ref.deleteMode) {
					alert("Debe salir del modo de eliminado");
			} else {
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
			}
		});
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



