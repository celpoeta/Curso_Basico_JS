var opt1 = "Piedra";
var opt2 = "Papel";
var opt3 = "Tijera";

function maquina(){
    return Math.floor(Math.random() * 3)
}

function juego(user1){
    var user2 = "";
    //Opcion del user2 independiente para la maquina
    if( maquina() == 0){
        user2 = "Piedra"; 
    }else if( maquina() == 1){
        user2 = "Papel";
    }else{
        user2 = "Tijera"
    }

    // console.log(user1);
    // console.log(user2);

    if(user1 == opt1 && user2 == opt2 || user1 == opt2 && user2 == opt3 || user1 == opt3 && user2 == opt1){
        console.log("La maquina gano con " + user2 + " lamentamos que haya perdido :(");
    }else if(user1 == opt1 && user2 == opt3 || user1 == opt2 && user2 == opt1 || user1 == opt3 && user2 == opt2){
        console.log("Felicidades le has ganado a la maquina con tu " + user1 + " :)");
    }else{
        console.log("Este juego ha sido un empate.");
    }
}

var opt1 = "Piedra";
var opt2 = "Papel";
var opt3 = "Tijera";

function maquina(){
    return Math.floor(Math.random() * 3)
}

function juego(user1){
    var user2 = "";
    var numero;
    //Opcion del user2 independiente para la maquina
   switch(maquina()){
       case 1:
           user2 = "Papel";
           break;
        case 2:
            user2 = "Tijera";
            break;
        default:
            user2 = "Piedra";
   }

    // console.log(user1);
    // console.log(user2);

    if(user1 == opt1 && user2 == opt2 || user1 == opt2 && user2 == opt3 || user1 == opt3 && user2 == opt1){
        numero = 1;
    }else if(user1 == opt1 && user2 == opt3 || user1 == opt2 && user2 == opt1 || user1 == opt3 && user2 == opt2){
        nuemro = 2;
    }

    switch(numero){
        case 1:
            console.log("La maquina gano con " + user2 + " lamentamos que haya perdido :(");
            break;
        case 2 :
            console.log("Felicidades le has ganado a la maquina con tu " + user1 + " :)");
            break;
        default:
            console.log("Este juego ha sido un empate.");
    }
}