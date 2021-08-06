//-----------------------------------------------
//Aqui hace el proceso de Hoisting y lo que hace es que el var pasa al inicio pero solo la declaracion de la variable no el dato

console.log(miNombre); 

var miNombre = "Caleb Flores";

// Segundo ecenario
var miNombre = undefined;
console.log(miNombre + "Soy ese Hoisting"); 

miNombre = "Caleb Flores";

//Funciones
hey();

function hey(){
    console.log("Hola " + miNombre); 
}

var miNombre = "Caleb Flores";