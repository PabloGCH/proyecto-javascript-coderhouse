import ProductDisplay from "./productDisplay.js";
import ShoppingCart from "./shoppingCart.js"
import Header from "./header.js";


if(window.location.href.includes("cart.html")) {
	const shoppingCart = new ShoppingCart(document.getElementById("shopping-cart"), document.getElementById("buy-button"));
	shoppingCart.loadProducts();
} else {
	const header = new Header(document.getElementsByClassName("header")[0]);
	const productDisplay = new ProductDisplay(document.getElementById("product-display"));
	productDisplay.loadProducts();
}






