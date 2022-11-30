//Programacion Orientada a Objetos (POO)

//Object Literal (Forma poco usada y poco recomentada)
    const producto = {
        nombre : "Tablet",
        precio : 500
    }

//Object Constructor (Los constructores almacenaran la información en la funcion que vayamos a crear)
//Paso 1:
//Definiremos la funcion donde se almacenara la información y por la cual tendra parametros que estaran dentro del sub-objeto que sera llamado por la palabra reservada this
function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
//Paso 2:
//Crearemos la variable con un constructor (new) donde almacenaremos los argumentos en la funcion que creamos anteriormente (respetando el orden y valores)
const producto1 = new Producto('Monitor Gamer de 50pul ', 500, true);
console.log(producto1);
//Paso 3:
//Se puede instanciar multiples veces con diferentes valores, algo mucho mejor que el Object Literal //Se pueden crear multiples objetos
const producto2 = new Producto('Monitor Gamer de 40pul ', 400, false);
const producto3 = new Producto('Monitor Gamer de 32pul ', 300, true);
const producto4 = new Producto('Monitor Gamer de 24pul ', 200, true)
console.log(producto2);
console.log(producto3);
console.log(producto4);

//Prototypes - Forma Antigua con redundancia de datos
    //     function leerProducto(seleccionador){
    //     return `El producto es: ${seleccionador.nombre} y tiene un costo de: $${seleccionador.precio}`;
    // }
    // console.log(leerProducto(producto1));

//Utilizando Prototypes de forma correcta:
Producto.prototype.leerProducto = function(){
    return `El producto es: ${this.nombre} y tiene un costo de: $${this.precio}`;
}
console.log(producto2.leerProducto());
console.log(producto3.leerProducto());
console.log(producto4.leerProducto() );
