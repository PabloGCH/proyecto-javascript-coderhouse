export default class ProductBox {
	constructor({name, price, img, summary}) {
		let shortSum = "";
		summary.length > 140 && (
			shortSum = summary.slice(0, 70),
			shortSum += "..."
		);
		this.element = document.createElement("div");
		this.element.innerHTML =
		`
		<img src="${img}">
		<div class="card-body">
			<h5 class="card-title">${name}</h5>
			<h6 class="card-subtitle text-success fw-bold mt-1">$${price}/seed</h6>
			<div class="product-description-box mt-1">
				<p class="card-text">${shortSum}</p>
			</div>
		</div>
		`;
		this.element.className = "card product-card mx-2 my-2";
	}
}
