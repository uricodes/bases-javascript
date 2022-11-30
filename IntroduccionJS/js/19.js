//Funciones que retornan variables

// function sumar(n1,n2){
//     return n1 + n2;
// }

// const resultado = sumar(5,6);

// console.log(resultado);


//Ejercicio mental (simular un carrito)

let costo_total = 0;

    //Almacenaje del costo total
function agregarCarrito(almacenaje_carrito){
    return costo_total += almacenaje_carrito;
}
    //Almacenaje mas impuestos
function impuestosCarrito(costo_total){ //Se retorna el costo_total porque ahí se esta guardando todo el almacenaje_carrito
    return costo_total * 1.16; //Todas las cantidades que se guardan en el costo total * 1.16
}

    //Operaciones
costo_total = agregarCarrito(100);
costo_total = agregarCarrito(200);
costo_total = agregarCarrito(300);
costo_total = agregarCarrito(400);

    //Se crea variable donde se mostrara el total mas el impuesto
const costo_total_impuesto = impuestosCarrito(costo_total); //Se toma la funcion impuestosCarrito con la variable costo_total para hacer el calculo con el almacenaje

//Se muestra en consola con una concatenación con String
console.log(`El resultado de tu carrito más el impuesto es el siguiente: ${costo_total_impuesto}`);

//Ejercicio 2 (Comprobación)

let carrito_Compras = 0;

function Almacenaje_carrito_compras(articulos_Carrito){
    return carrito_Compras += articulos_Carrito;
}

function Impuesto_carrito_Compras(carrito_Compras){
    return carrito_Compras * 1.16;
}

carrito_Compras = Almacenaje_carrito_compras(100);

const Total_carrito_Compras = Impuesto_carrito_Compras(carrito_Compras);

console.log(`El total de tu carrito es de: ${Total_carrito_Compras}`);

