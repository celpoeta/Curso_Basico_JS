// Coercion Implicita

var a = 4 + "7"; //son dos valores diferente y solo funciuna los dos numeros y nos da un String

var b = 4 * "7" //son dos valores diferente pero aqui si realiza la operacion y nos da un number

// Cuercion Explicita

var c = 20;

var d = c + "";

var e = String(d); // Aqui obligamos a que la variable d se convierta en String

var f = Number(e); // Aqui obligamos a que la variable e se convierta en Number