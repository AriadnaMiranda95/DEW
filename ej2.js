
const partida = {
    manoJugador : "",
    manoMaquina : "",
    partidasJugadas : 0,
    puntosJugador : 0,
    puntosMaquina: 0,
    opciones : ["piedra", "papel", "tijeras"],
    iteraciones : 0
    
  
}

document.addEventListener("DOMContentLoaded" ,init);

function init(){

    const start = document.getElementById('start');
    start.addEventListener('click', jugar);

    const piedra = document.getElementById('piedra');
    piedra.addEventListener('click', opcionJugador);

    const papel = document.getElementById('papel');
    papel.addEventListener('click', opcionJugador);

    const tijeras = document.getElementById('tijeras');
    tijeras.addEventListener('click', opcionJugador);

}

function opcionJugador(){
    let imagenJugador = document.getElementById('opcionJugador');
    partida.manoJugador = this.value;

    imagenJugador.src = `img/${partida.manoJugador}.png`;
}


function jugar(){
    let imagenMaquina = document.getElementById('opcionMaquina');
    let numeroAleatorio = Math.floor(Math.random()*3);
    partida.manoMaquina = partida.opciones[numeroAleatorio];

    
   
     
    if(partida.manoJugador === ""){
        alert("No has seleccionado ninguna opción.");
    }else{
        imagenMaquina.src = `img/${partida.opciones[numeroAleatorio]}.png`;
        if(partida.manoMaquina === partida.manoJugador){
            alert("Empate, vuelve a intentarlo");
        }else if(partida.manoJugador === 'piedra' && partida.manoMaquina ==='tijeras'){
            partida.puntosJugador++;
            
        }else if(partida.manoJugador === 'papel' && partida.manoMaquina === 'piedra'){
            partida.puntosJugador++;
            
        }else if(partida.manoJugador === 'tijeras' && partida.manoMaquina === 'papel'){
            partida.puntosJugador++;
           
        }else if(partida.manoJugador === 'tijeras' && partida.manoMaquina === 'piedra'){
            partida.puntosMaquina++;
            
        }else if(partida.manoJugador === 'piedra' && partida.manoMaquina === 'papel'){
            partida.puntosMaquina++;
        }else if(partida.manoJugador === 'papel' && partida.manoMaquina === 'tijeras'){
            partida.puntosMaquina++;
        }
        
        partida.partidasJugadas++;
        volcarResultado();
    }

}


function volcarResultado(){

    let contadorJugador = document.getElementById('contadorJugador2');
    let contadorMaquina = document.getElementById('contadorMaquina2');
    let contadorPartida = document.getElementById('contadorPartida2');


    contadorJugador.innerHTML = partida.puntosJugador;
    contadorMaquina.innerHTML = partida.puntosMaquina;
    contadorPartida.innerHTML = partida.partidasJugadas;
}



