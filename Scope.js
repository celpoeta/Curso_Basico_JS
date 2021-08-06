// Scope Global : no puede acceder a las variables locales
var miNombre = "Caleb"

function nombre(){
    //Scope Local : puede acceder a las variables globales
    var miApellido = "Flores"+
    console.log(miNombre + " " + miApellido);
}

nombre();
