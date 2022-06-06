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
		let alertText = "";
		this.list.forEach((item) => {
			alertText = alertText.concat(`\n- ${item.name}`);
		});
		alert(alertText);
	}
	alertProductsByPrice(price) {
		let products = this.list.filter((item) => {
			return item.price < price;
		});
		let alertText = "";
		products.forEach((item) => {
			alertText = alertText.concat(`\n- ${item.name}`);
		});
		alert(alertText);
	}
}

const list = new ProductList;
let finished = false;
while(!finished) {
	switch(prompt("Ingrese una opcion: \n1 - Añadir producto\n2 - Eliminar producto\n3 - Mostrar productos\n4 - Mostrar productos por precio\n5 - Salir")) {
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
			list.alertProductsByPrice(parseInt(prompt("Cual es su precio maximo?")));
			break;
		case "5":
			finished = true;
			break;
		default:
			alert("Ingrese una opcion valida");
			break;
	}
}
