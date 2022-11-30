//forEACH y MAP

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


//forEach (Solamente imprime en consola)
carrito.forEach(function(){
    console.log("Una vez por cada elemento");
});
carrito.forEach(function(buscador){
    console.log(buscador.nombre);
});
    //Arrow Function forEach
carrito.forEach((buscador) => console.log(buscador.precio));

//Map (Crea nuevo arreglo)
carrito.map(function(){
    console.log("Una vez por cada elemento");
});
carrito.map(function(buscador){
    console.log(buscador.nombre);
});
    //Arrow Function map
carrito.map((buscador) => console.log(buscador.precio));

    //Map mejorado con variable
    const arreglo = carrito.map((buscador) => `${buscador.nombre} - $${buscador.precio}`);
    console.log(arreglo);