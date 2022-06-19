export default class ProductBox {
	constructor(name, price, img, summary) {
		this.element = document.createElement("div");
		this.element.innerHTML =
		`
		<img src="${img}">
		<div class="card-body">
			<h5 class="card-title">${name}</h5>
			<h6 class="card-subtitle">Price: $${price}/seed</h6>
			<p class="card-text">${summary}</p>
		</div>
		`;
		this.element.className = "card product-card mx-2 my-2";
	}
}
