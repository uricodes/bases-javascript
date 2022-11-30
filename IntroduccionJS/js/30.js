//Promises

const autenticarUsuario = new Promise((resolve, reject) => {
    const auth = true;
    if(auth){
        resolve("Usuario autenticado");//Si se ejecuta el Promise
    }else{
        reject("No se pudo autenticar al usuario");//No se ejecuta el promise
    }  
});

console.log(autenticarUsuario);

//En los promises existen 3 valores posibles:
    //Pending:
        //No se ha cumplido pero tampoco se ha rechazado (falta de código).
    //Fulfilled:
        //Ya se cumplio.
    //Rejected:
        //Se ha rechazado o no se pudo cumplir.

//Lectura del promise .then:
//El resolve, seria la funcionn del .then
autenticarUsuario
    .then((resultado_resolve) => console.log(resultado_resolve))
//Lectura del promise .catch:
//El reject, seria la funcionn del .catch
    .catch((resultado_reject) => console.log(resultado_reject));