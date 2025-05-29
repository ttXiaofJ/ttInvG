export default class Prod{
    static contadorId = 1;

    constructor(nombre, precio, cantidad){
        this.id = Prod.idUnico();
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarDetalle(){
        return ˋID: ${this.id}, nombre: ${this.nombre}, precio: ${this.precio}, cantidad: ${this.cantidad}ˋ;
    }

    actualizarCantidad(nuevaCantidad){
        this.cantidad = nuevaCantidad;
    }

    static idUnico(){
        return this.contadorId++;
    }
}