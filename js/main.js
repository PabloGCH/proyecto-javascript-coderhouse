class ProductBox {
	constructor(name, price) {
		this.element = document.createElement("div");
		this.element.innerHTML =
		`
		<div class="card-body">
			<div class="visually-hidden remove-btn btn btn-danger">
				<i class="fa-solid fa-trash-can"></i>
			</div>
			<h5 class="card-title">${name}</h1>
			<h6 class="card-subtitle">Precio: $${price}</div>
		</div>
		`;
		this.element.className = "card product-card mx-2 my-2";
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

//Debe recibir un elemento html vacio
class ShoppingCart {
	manager;
	buttonsBox;
	container;
	deleteMode;
	list = [];
	constructor(manager) {
		this.deleteMode = false;
		this.manager = manager;
		//Se agregan elementos del Carrito
		this.buttonsBox = this.manager.appendChild(document.createElement("div"));
		this.buttonsBox.innerHTML =
		`
		<button type="button" class="add-btn btn btn-success mx-2">Añadir producto</button>
		<button type="button" class="rm-btn btn btn-danger" mx-2>Eliminar producto</button>
		`;
		this.container = this.manager.appendChild(document.createElement("div"));
		this.container.className = "product-container mt-3 d-flex flex-row flex-wrap";
		//Guardo la referencia para usarla las arrow functions
		const ref = this;
		//Se agregan los eventos de los botones
		this.addButton(this.buttonsBox.getElementsByClassName("add-btn")[0], ref);
		this.rmButton(this.buttonsBox.getElementsByClassName("rm-btn")[0],ref);

	}
	//Funcion para agregar el evento del boton de eliminado
	//Necesita que le pasen el boton, y el this del shopping-cart
	rmButton(button, ref) {
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
class ProductDisplay {
	constructor(element, plants) {
		this.element = element;
		this.plants = plants;
		this.loadProducts();
	}
	loadProducts() {
		for(const item of this.plants) {
			let product = new ProductBox(item.name, item.price);
			this.element.append(product.element);
		}
	}
}
const productDisplay = new ProductDisplay(document.getElementById("product-display"), plants)



