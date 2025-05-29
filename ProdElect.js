import Prod from "./Prod.js";

export default class ProdElect extends Prod{

    constructor(nombre, precio, cantidad, garantia){
        super(nombre, precio, cantidad);
        this.garantia = garantia;
    }

    mostrarDetalle(){
        return ˋ${super.mostrarDetalle()}, garantia: ${this.garantia}ˋ;
    }
}