// Funciones :)
/*function hello(){
    return "hola mama";
}

hello();*/

//retorno de una funcion

/*function hello(){

    return 10;

}
console.log(hello());
*/
/*
function hello(){
    return{
        nombre: "jose"
    }
}
console.log(hello());*/

// funciones que retornan otra funcion juas juas

/*
function hello(){
    return function(){
        return "holasa";
    }
}

console.log(hello()());
*/

// ======= USO DE PARAMETROS EN FUNCIONES ========

/*
function JUAS(name){
    return "juas juas juas juas juas  " + name
}

console.log(JUAS("holasa"));
*/
/*..
function JUAS(x,y){
    return x+y;
}

console.log(JUAS(10,20));
*/
/*
function JUAS(x,y){
    return x * y;
}

console.log(JUAS(10,20));
*/
//control de errores
/*
function JUAS(x,y){
    if(y== undefined){
        y=0
    }
    return x*y;
    
}

console.log(JUAS(10,2));
*/
//=== OBJETOS ===

const user = {
    nombre: "Arturo",
    apelldioM: "Barajas",
    edad:"17",
    edocivil: "soltero",
    domicilio:{
        ciudad : "CDMX",
        calle: "naranja",
        numero : 123123,
    },
    amigos : ["juan escutia", "jonny el panadero", "leonardo el leopardo", "checo perez"],
    activo: true,
    sendMensaje: function(){
        return "enviando mensaje";
    }
}
const user1=user.domicilio.ciudad+" "+ user.domicilio.calle+" "+ user.domicilio.numero;
alert(user1);
console.log(user.amigos);
alert(user.activo);
console.log(user.nombre, user.apelldioM, user.edocivil);
alert(user.sendMensaje());