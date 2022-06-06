class Product {
	name;
	price;
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
class ProductList {
	list = [];
	constructor() {
	}
	addProduct(name, price) {
		this.list.push(new Product(name, price));
	}
	removeProduct(productName) {
		let productIndex = this.list.findIndex((item) => {
			return item.name == productName;
		});
		if(productIndex == -1) {
			alert("Ese producto no existe");
		} else {
			this.list.splice(productIndex, 1);
			alert(productName + " fue eliminado");
		}
	}
	alertProducts() {
		debugger;
		let alertText = "";
		for(let i = 0; i < this.list.length; i++) {
			alertText = alertText.concat(`\n${i} - ${this.list[i].name}`);
		}
		alert(alertText);
	}
}

const list = new ProductList;
let finished = false;
while(!finished) {
	switch(prompt("Ingrese una opcion: \n\t1 - Añadir producto\n\t2 - Eliminar producto\n\t3 - Mostrar productos\n\t4 - Salir")) {
		case "1":
			list.addProduct(
				prompt("Ingrese el nombre del producto: "),
				parseInt(prompt("Ingrese el precio: "))
			);
			break;
		case "2":
			list.removeProduct(prompt("Ingrese el nombre del producto"));
			break;
		case "3":
			list.alertProducts();
			break;
		case "4":
			finished = true;
			break;
		default:
			alert("Ingrese una opcion valida");
			break;
	}
}
