//Objetos

const producto = {
    nombreProducto : "Monitor de 20p",
    precio : 300,
    disponible : true
}//producto

//Llamada a consola
console.log(producto);

//Llamada a consola (Detallado)

// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);

// //Forma antigüa usualmente utilizada

// console.log(producto["precio"]);

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;
console.log(producto);