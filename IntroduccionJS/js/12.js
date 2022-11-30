// "use strict"; // Corre JS en modo estricto

//Objetos
const producto = {
    nombreProducto : "Monitor de 20p",
    precio : 300,
    disponible : true
}

//frezze: Congela el objeto (Nada puede ser modificado o agregado) 
//Object.freeze(producto);

//seal: Congela el objeto parcialmente (solamente puede ser modificado, no se pueden agregar ni eliminar propiedades)
Object.seal(producto);

producto.precio = "NUEVO PRECIO"

delete producto.precio;

//Verificar si el objeto esta congelado 
console.log(Object.isSealed(producto));

console.log(producto);
