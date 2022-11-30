//Switch

const metodoPago = "Efectivo";

switch (metodoPago){ //En es switch se coloca la variable a verificar (metodoPago)
    case "Tarjeta": //Cerrar el case con :
        console.log("Pagaste con tarjeta");
        break; //Importante cerrar con un break;
    case "Bitcoin":
        console.log("Pagaste con Bitcoin");
        break;
    case "Efectivo":
        console.log("Pagaste con Efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}

//Ejercicio de memoria:

const videojuego = "Terror";
switch (videojuego){
    case ("Accion"):
        console.log("El videojuego es de acción");
    break;
    case ("Terror"):
        console.log("El videojueo es de terror");
    break;
    case ("Aventura"):
        console.log("El videojuego es de Aventura");
    break;
    default:
        console.log("El videojuego no existe en nuestro inventario");
    break;
}