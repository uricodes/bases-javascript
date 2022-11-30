//Async / Await

 function descargarNuevosClientes(){
     return new Promise( resolve => {
         console.log(`Descargando clientes... espere...`);
        setTimeout( () =>{
            resolve('Los clientes fueron descargados');
        }, 5000);//Fin Timeout
     });//Fin Promise
}//Fin Funcion descargarNuevosClientes

// setTimeout(function(){
//     console.log("Tiempo de espera... 5 Segundos");
// }, 5000); //setTimeout funciona con milisegundos.


function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log(`Descargando Ultimos Pedidos... espere...`);
       setTimeout( () =>{
           resolve('Los Pedidos fueron descargados');
       }, 3000);//Fin Timeout
    });//Fin Promise
}//Fin Funcion descargarNuevosClientes

setTimeout(function(){
   console.log("Tiempo de espera... 5 Segundos");
}, 5000); //setTimeout funciona con milisegundos.


//Ejecutando async y await
async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes); 
        // console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();