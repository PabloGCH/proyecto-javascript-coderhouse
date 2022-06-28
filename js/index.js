import plants from "./dataBase.js";
import ProductDisplay from "./productDisplay.js";
import ShoppingCart from "./shoppingCart.js"

if(window.location.href.includes("cart.html")) {
	const shoppingCart = new ShoppingCart(document.getElementById("shopping-cart"));
	shoppingCart.loadProducts();
} else {
	const productDisplay = new ProductDisplay(document.getElementById("product-display"), plants);
	productDisplay.loadProducts(plants);
}





