let tareita = ["estudiar", "comprar", "xd"];

console.log("lista de tareas", tareita);

task.push("hola");

task.splice(1,1);

task.push("ir a casa");

//-------usando forEach---------//

let tarea =  ["estudiar", "comprar", "xd"];

tarea.forEach((tarea, index) => {
    console.log(`Tareas ${index} ; ${task}`);
})