//Fetch API
async function obtenerEmpleados(){
    const archivo = 'empleados.json';//Archivo JSON

    // fetch(archivo)//Toma URL o enlace, pero se recomienta tenerlo en una variable
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         //console.log(datos.empleados);
    //         const {empleados} = datos;
    //         console.log(empleados); //Destructuring
    //     });
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();