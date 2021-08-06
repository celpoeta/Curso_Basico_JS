var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

// Acceder a una propiedad del objeto
miAuto.marca // "Toyota"

// Se pueden agregar propiedades que van a ser una función, se les llama métodos de objetos.
var miAuto1 = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020, 
        detallesDelAuto: function () {
            console.log(`Auto ${this.modelo} ${this.año}`);
        }
    }

    // miAuto.detallesDelAuto()
    //Auto Corolla 2020

// Funcion Constructora

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var nuevoAuto = new auto("Tesla","NFB45",2020);

// Reto - Crear nuevos autos mas optimatizado

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var num,marca,modelo,annio;
var autos = [];

num = prompt("Ingrese la cantidad de autos a registrar");

for(var i=1; i <= num; i++){
    marca = prompt(`Registro ${i} : Ingrese la Marca`);
    modelo = prompt(`Registro ${i} : Ingrese el Modelo`);
    annio = prompt(`Registro ${i} : Ingrese el Año`);

    autos.push(new auto(marca,modelo,annio));
}

console.log(autos);