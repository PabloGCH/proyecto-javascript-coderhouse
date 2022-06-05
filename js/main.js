class Product {
	name;
	price;
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	showProduct() {
		alert(`
Datos de producto:
Producto: ${this.name}.
Precio: $${this.price}.`);
	}
}
class ProductList {
	list = [];
	constructor() {
	}
	addProduct(name, price) {
		this.list.push(new Product(name, price));
	}
	alertProducts() {
		this.list.forEach((item) => {
			item.showProduct();
		})
	}
}

const list = new ProductList;
let finished = false;
while(!finished) {
	switch(prompt("Desea ingresar un producto y/n ?")) {
		case "y":
			list.addProduct(
				prompt("Ingrese el nombre del producto: "),
				parseInt(prompt("Ingrese el precio: "))
			);
			break;
		case "n":
			list.alertProducts();
			finished = true;
			break;
		default:
			alert("Ingrese una opcion valida");
			break;
	}
}
