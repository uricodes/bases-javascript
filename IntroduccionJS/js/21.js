//Arrow Function//Simplifica los códigos (Referencia Archivo 15.js)

//Expresión de la función
const suma2 = (n1, n2) => console.log(n1+n2);
suma2(5,15);


//Sintaxis Arrow Function
const aprendiendo = (tecnologias) => console.log(`Aprendiendo ${tecnologias}`);
aprendiendo("Javascript");


const learning = (tecnologies) => {
    return console.log(`Learning ${tecnologies}`);
};
learning("Python");


//Otro Ejemplo de Arrow Function

//Array Methods

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"];

//Arreglo de Objetos

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

//Arrow Function con otro ejemplo
meses.forEach((mes) => {
    if(mes == "Marzo"){
        console.log("Marzo Si Existe En El Arreglo")
    }
});

//Some: Ideal para arreglo de objetos

let resultado;
resultado = carrito.some((producto) => producto.nombre === "Tablet");
console.log(resultado);


//Reduce: Tomar todos los numeros del arreglo de objetos y nos mostrara un total
resultado = carrito.reduce((total, buscador) => total + buscador.precio, 0);
console.log(resultado);

//Filter: Encarga de filtrar resultador de un arreglo de objetos

resultado = carrito.filter((filtrador) => filtrador.precio > 400);
console.log(resultado);

resultado = carrito.filter((filtrador) => filtrador.nombre !== "Celular");

console.log(resultado);
