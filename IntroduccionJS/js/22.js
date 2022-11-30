//Estructuras de Control (if)

const puntaje = 1000;
if(puntaje === 1000){ //Primer Condicion IF
    console.log("El puntaje es 1000"); //Mensaje si se cumple la condición
}else{ //En caso de que no se cumpla la condicion IF
    console.log("No es igual")
}

const resultado = 10;
if( resultado !== 10){
    console.log("Es diferente a 10");
}else{
    console.log("Es igual a 10");
}

//Ejercicio Carrito

const efectivo = 1000;
const carrito = 800;
if(efectivo > carrito){
    console.log("Puede pagar");
}else{
    console.log("No puede pagar");
}

const rol = "Editor";
if(rol === "Administrador"){
    console.log("Acceso a todo el sistema");
} else if(rol === "Editor"){
    console.log("Eres editor, pero no puedes hacer mucho");
} else{
    console.log("No tienes acceso");
}