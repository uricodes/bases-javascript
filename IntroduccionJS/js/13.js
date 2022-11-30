//Unir dos objetos con el Spread Operator 
//Objeto 1
const producto = {
    nombreProducto : "Monitor de 20p",
    precio : 300,
    disponible : true
}
//Objeto 2
const medidas = {
    peso : "1kg",
    medida : "1m"
}

//Spread Operator se usa para unir dos objetos

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);