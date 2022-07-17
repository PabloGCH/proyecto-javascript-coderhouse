export default class CartElement {
	constructor({name, price, quantity}) {
		this.element = document.createElement("tr");
		this.element.innerHTML = `
			<td>${name} / seeds</td>
			<td>$${price}</td>
			<td>${quantity}</td>
		`
	
	}
}
