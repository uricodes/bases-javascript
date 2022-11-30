//this (palabra reservada)

const reservacion = {
    Nombre : "Uriel",
    Apellido : "Hernández",
    total : 5000,
    pagado : false,
    informacion : function(){
        console.log(`El cliente ${this.Nombre} tiene que pagar la cantidad de $${this.total}`);
    }
}
reservacion.informacion();

//Ejercicio de Memoria:
const comida = {
    nombre : "Esmeralda",
    apellido : "Jasso",
    total : "50",
    articulo : "torta",
    pagado : true,
    informacion : function(){
        console.log(`El cliente ${this.nombre}, ha pagado $${this.total}, por concepto de ${this.articulo}`);
    }//Cierre function
}//Cierre objeto
//Llamada a consola
    comida.informacion();//Importante poner los parentesis, y también recordemos que en la funcion colocamos un console.log