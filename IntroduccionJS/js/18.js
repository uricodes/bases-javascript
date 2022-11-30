//Funciones con parametros y argumentos:

function suma(numero1 = 0, numero2 = 0){ //Se declaran los parametros dentro del parentesis
    console.log(numero1 + numero2); //Operación de los parametros ¿Qué es lo que se quiere hacer con los parametros?
}
suma(10,10); //Llamada a los parametros con argumentos declarados, sin operaciones (Vista en consola)
suma(5,5);
suma(4,1);
suma(1,5);
suma();

const suma2 = function(n1,n2){
    console.log(n1 + n2);
}
suma2(5,7);

