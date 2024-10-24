//funcion flecha
// 1.- ***********
function holasa(a,b){
    return (a+b);
}

console.log(holasa(2,3));

// 2.- estructura de la funcion flecha

let hola = () =>{

};
// 3.- *****************
let saludo = (nombre) => {
    return "saludos " + nombre;
}

console.log(saludo("Jorge"));

// 4.- ****************** */

let saludar = nombre => "hola papa " + nombre;

console.log(saludar("jaime"));

// 5.- *** pasar parametros ***/

let suma =(a,b) => a+b;

console.log(suma(2,3));

// 6.- *** crear objetos en una funcion flecha ***/

let objeto = () => ({nombre:"Jonny", edad:20});

// llamamos al objeto y accedemos a la propiedad

//let persona = objeto().nombre;
//console.log(persona);

console.log(objeto().nombre);

//  7.- arreglos 
let arrFuncion = () => [1,2,3,4,5];

// acceder a todo el array
console.log(arrFuncion());
// acceder al arreglo 

console.log(arrFuncion()[4]);
