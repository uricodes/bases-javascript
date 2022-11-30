//For Loop

// for( let i=0;/*Valor con el que inicia el indice*/ i<=10;/*El codigo se ejecutara mientras el indice sea menor a 10*/ i++/*Incremento de 1 en 1*/){
//     console.log(i);
// }

// for( let i = 0; i <= 100; i++ ){
//     if(i%2 === 0){
//         console.log(`El número: ${i} es PAR`);
//     }else{
//         console.log(`El numero: ${i} es IMPAR`)
//     }
// }

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

// for(let a = 0; a < carrito.length; a++){
//     console.log(carrito[a].nombre);
// }

//While Lop


//Ejercicio mental

// // let i = 0; //Indice
// while( i <= 10){ //Condicion
//     if(i%2 === 0){
//         console.log(`El número: ${i} es PAR`);
//     }else{     
//         console.log(`El número: ${i} es IMPAR`);
//     }
//     i++;//Incremento
// }

//
// let i = 0;
// while(i < carrito.length){
//     console.log(carrito[i].nombre);
//     i++
// }

//Do While

let i = 0;
do{
    console.log(i);
    i++;
}while(i <= 10);