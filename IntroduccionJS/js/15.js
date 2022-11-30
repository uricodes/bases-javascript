//Array Methods

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"];

//Arreglo de Objetos

const carrito = [
    {nombre: "Monitor 20 Pulgadas", precio: 500},
    {nombre: "Televisión 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
];

//forEach mas elaborado para buscar un elemento dentro de un arreglo
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo Si Existe En El Arreglo")
    }
});

//Includes
let resultado = meses.includes("Marzo");

//Some: Ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === "Tablet"
});

//Reduce: Tomar todos los numeros del arreglo de objetos y nos mostrara un total
resultado = carrito.reduce(function(total, buscador){
    return total + buscador.precio
}, 0);

//Filter: Encarga de filtrar resultador de un arreglo de objetos
resultado = carrito.filter(function(filtrador){
    return filtrador.precio > 400
});

resultado = carrito.filter(function(filtrador){
    return filtrador.nombre !== "Celular"
});

console.log(resultado);

