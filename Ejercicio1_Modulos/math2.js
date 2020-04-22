const math2={};
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
math2.sumar=add;
math2.restar=substract;
math2.multiplicar=multiply;
math2.dividir=divide;

module.exports=math2;

/*exports nos permite exportar propiedades y objetos
En cambio module.exports, nos permite exportar objetos funciones, variable y cualquier dato de javascript*/
//Ejemplo:
// function holamundo(name){
//     console.log("hola",name)
// }
// module.exports=holamundo;
// y puede ser usado de la siguiente forma en el index
// console.log(math("jessie"));