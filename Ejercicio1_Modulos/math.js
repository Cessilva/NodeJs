
// Estos metodos son simples funciones ,pero realmente no los podemos usar fuera 
// de aqui por lo que debemos exportarlas 

exports.sumar=add;
// El primer "add" hace referencia al nombre que se ocupara fuera del archivo
// El segundo "add" hace referencia al metodo que va a ocupar
exports.restar=substract;
exports.multiplicar=multiply;
exports.dividir=divide;

function add(x,y){
    return x+y;
}
function substract(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if (y==0){
        console.log("No se puede dividir entre cero");
        // cuando no retornamos nada , sale el indefinido=> undefined
    }else 
    return x/y;
}
// Esto es un modulo y son las partes de nuestra aplicacion que se pueden subdividir
// nuestro archivo para tenerlos por separado,existen dos formas;la mostrada anteriormente 
// y la mostrada en math2.js