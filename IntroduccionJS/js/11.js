//DESTRUCTURING

//Objetos
const producto = {
    nombreProducto : "Monitor de 20p",
    precio : 300,
    disponible : true
}

//Forma Anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

//Destructuring
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);