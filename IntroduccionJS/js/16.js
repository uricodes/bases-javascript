//Declaración

function suma(){
    console.log(10+10);
}
suma(); //Llamada a funcion


//Expresión de la función
const suma2 = function(){
    console.log(3+3);
}
suma2();


//IIFE
(function(){
    console.log("Esto es una función IIFE");
})();