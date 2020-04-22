  
// Importacion de archivos,necesitamos el modulo math
// Creamos una constante con la que haremos uso del modulo
const math = require('./math.js');
//Hacemos uso de la constante, para que haga uso de las exportaciones

// Solo para ver lo que contiene nuestro archivo math
console.log(math);
/*
    {
    sumar: [Function: add],
    restar: [Function: substract],
    multiplicar: [Function: multiply],
    dividir: [Function: divide]
    }
*/
console.log("----------------------");
console.log(math.sumar(1,2));
console.log(math.restar(1,2));
console.log(math.multiplicar(1,2));
console.log(math.dividir(1,0));