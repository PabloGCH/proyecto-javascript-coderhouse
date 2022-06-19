import plants from "./dataBase.js";
import ShoppingCart from "./shoppingCart.js";

let shoppingCart = new ShoppingCart(document.getElementById("shopping-cart"));
shoppingCart.loadProducts();

