import Prod from "./Prod.js";
import ProdElect from "/ProdElect.js";
import GestInven from "./GestInven.js";

const gestInven = new GestInven();

const prod1 = new Prod("Cuadro", 240000,2);
const prod2 = new Prod("Cuadro2", 240000,2);
const prod3 = new ProdElect("Laptop", 7000,30,36);
const prod4 = new ProdElect("Laptop2", 7000,30,36);

console.log("Prod");
gestInven.listarProducto();

gestInven.agregarProducto(prod1);
gestInven.agregarProducto(prod2);
gestInven.agregarProducto(prod3);
gestInven.agregarProducto(prod4);
console.log("Prod");
gestInven.listarProducto();

gestInven.eliminarProducto(prod3);
console.log("Prod");
gestInven.listarProducto();

gestInven.actualizarProducto(prod4.id, {nombre: "Tablet", garantia: 24});
console.log("Prod");
gestInven.listarProducto();