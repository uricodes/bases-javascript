//Clases:

class Producto{//Los parametros van dentro del constructor
    constructor(nombre, precio, pagado){//Constructor es una funcion reservada
        this.nombre = nombre;//La forma en la que se van almacenar dentro del objeto es con la palabra reservada (this)
        this.precio = precio;
        this.pagado = pagado;
    }
    leerProducto(){//Metodo similar a prototype
        return `El producto es: ${this.nombre} y tiene un costo de: $${this.precio}`;
    }
    leerPrecio(){//Metodo para leer el precio del producto
        return `El precio del producto es: $${this.precio} y su estado es ${this.pagado}`;
    }
}

const producto1 = new Producto('Monitor Gamer de 40pul ', 400, false);
const producto2 = new Producto('Monitor Gamer de 32pul ', 300, true);


console.log(producto1.leerProducto());
console.log(producto2);
console.log(producto2.leerPrecio());


//Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbm){
        super(nombre, precio); //Super buscara los parametros declarados en la clase padre /*Solamente lo que existe en la clase padre se coloca dentro de super*/
        this.isbm = isbm; //Mientras que podemos declarar un nuevo parametro en la clase hija 
    }
    //Declarar un metodo
    leerProducto(){
        return `${super.leerProducto()} y su isbm es: ${this.isbm}`;
    }
}

const libro1 = new Libro("Harry Potter: Y las Reliquias de la Muerte", 450, "987654321000");

console.log(libro1.leerProducto());