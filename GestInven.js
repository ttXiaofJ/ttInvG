export default class GestInven{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    eliminarProducto(id){
        this.productos = this.productos.filter(producto => producto.id !== id);
    }

    actualizarProducto(id, nuevaInformacion){
        const productoEncontrado = this.productos.find(producto => producto.id === id);

        if (productoEncontrado){
            if (nuevaInformacion.nombre !== undefined){
                productoEncontrado.nombre = nuevaInformacion.nombre;
            }

            if (nuevaInformacion.precio !== undefined){
                productoEncontrado.precio = nuevaInformacion.precio;
            }

            if (nuevaInformacion.cantidad !== undefined){
                productoEncontrado.cantidad = nuevaInformacion.cantidad;
            }

            if (nuevaInformacion.garantia !== undefined){
                productoEncontrado.garantia = nuevaInformacion.garantia;
            }
        }

        listarProducto(){
            if (this.productos.length === 0){
                console.log("No hay productos.");
            } else {
                this.productos.forEach(producto => console.log(producto.mostrarDetalle()));
            }
        }
    }
}