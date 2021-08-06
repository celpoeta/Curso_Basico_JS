// Array
var Frutas = ["Manzana","Platano","Cereza","Fresa"];

// Agrega un dato a la parte final del Array
var masFrutas = Frutas.push("Uvas");

// Elimina el ultimo dato del Array
var ultimaFruta = Frutas.pop("");

// Agrega un dato a la parte inicial del Array
var nuevaFruta = Frutas.unshift("Uvas");

// Elimina el primer dato del Array
var borrarFrutas = Frutas.shift("");

// Nos muestra la longitud del Array
console.log(Frutas.length);

// Nos muestra el dato segun como nos movemos con el Indice del Array
Frutas[0]; // Manzana
Frutas[3]; //Fresa 

// Nos regresa la posicion en el indice del dato indicado
var posicion = Frutas.indexOf("Cereza");
