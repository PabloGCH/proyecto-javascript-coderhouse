import plants from "./dataBase.js";
import ProductDisplay from "./productDisplay.js";


const productDisplay = new ProductDisplay(document.getElementById("product-display"), plants);
productDisplay.loadProducts();



