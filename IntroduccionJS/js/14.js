//Arreglos // Arrays.

const numeros = [5,10,20,30,40,50];

//También puedes tener arreglos con un constructor:
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"];

//Acceder a los valores de un arreglo
//console.log(numeros[4]);

//Conocer la extensión de un arreglo
//console.log(meses.length);

//Ver todos los elementos de un arerglo = forEach
// numeros.forEach(function(numero){
//     console.log(numero);
// })

//Metodos para los Arreglos.

    //Agregar Datos
numeros.push(60,70,80); //Agrega datos al final del arreglo
numeros.unshift(-10,-20,-30); //Agrega datos al principio del arreglo

console.table(numeros);

    //Eliminar Datos
// meses.pop(); //Elimina el ultimo dato del arreglo seleccinado.
// meses.shift(); //Elimina el primer dato del arreglo seleccionado.

meses.splice(1,1); //Elimina el dato seleccionado y la cantidad a eliminar despues del dato (incluyendolo)
// console.table(meses);

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, "Agosto"];
    console.table(nuevoArreglo);