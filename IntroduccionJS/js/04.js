//Metodos para los String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo"';
// const producto = "Monitor de 20\""; //Otra forma de colocar las comillas dentro de comillas es escapando \"
const producto2  = 'Monitor de 20"';


// length es para la extensión de los textos(conteo)
console.log(tweet.length);
console.log(producto2);

//IndexOf (Para buscar donde esta esa palabra (Retorna la posición))
console.log(tweet.indexOf('JavaScript'));
console.log(tweet.indexOf('Tablet'));

//Includes (Retorna tru o false (Existe o no existe))
console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('Tablet'));



