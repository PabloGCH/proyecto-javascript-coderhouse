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
			<h5 class="card-title">${name}</h1>
			<h6 class="card-subtitle">Precio: $${price}</div>
		</div>
		`;
		this.element.className = "card product-card";
	}
}

//Necesita que haya un elemento html con el id product-container
class ProductList {
	container;
	list = [];
	constructor() {
		this.container = document.getElementById("product-container");
	}
	//Recibe nombre y precio, crea un producto, agrega html a content
	addProduct(name, price) {
		const product = new Product(name, price);
		this.list.push(product);
		this.container.append(product.element);
	}
	//Recibe un nombre y elimina el producto
	removeProduct(productName) {
		let productIndex = this.list.findIndex((item) => {
			return item.name == productName;
		});
		if(productIndex == -1) {
			console.log("Se intento eliminar un elemento inexistente");
		} else {
			this.list.splice(productIndex, 1);
			alert(productName + " fue eliminado");
		}
	}
	
}
const productList = new ProductList;


function addProduct() {
	let name = prompt("Ingrese el nombre");
	let price = prompt("Ingrese el precio del producto");
	if(isNaN(price)) {
		price = 0;
	} else {
		price = parseInt(price);
	}
	productList.addProduct(name, price);
}

function removeProduct() {
	let name = prompt("Ingrese el nombre del producto");
	productList.removeProduct(name);
}



