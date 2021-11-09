const partida = {
    monedaJugador : "",
    monedaMaquina : "",
    partidasJugadas : 0,
    puntosJugador : 0,
    puntosMaquina: 0,
    iteraciones : 0
}


document.addEventListener("DOMContentLoaded", init);

function init(){
    

    const start = document.getElementById('start');
    start.addEventListener('click', lanzarMoneda);

    const botonCara = document.getElementById('botonCara');
    botonCara.addEventListener('click', elegirCaraMoneda);

    const botonCruz = document.getElementById('botonCruz');
    botonCruz.addEventListener('click', elegirCaraMoneda);

}



function elegirCaraMoneda(){
    if(this.value === 'cara'){
        partida.monedaJugador = 'cara';
        partida.monedaMaquina = 'cruz';
    }else{
        partida.monedaJugador = 'cruz';
        partida.monedaMaquina = 'cara';
    }
    console.table(partida)
}


function lanzarMoneda(){

    let caraResultante = Math.random() > 0.5 ? 'cara' : 'cruz';
    if(partida.monedaJugador === ""){
       alert("Por favor selecciona una cara de la moneda.");
    }else{
        animarMoneda();
       

    }
}

function volcarResultado(){

    let contadorJugador = document.getElementById('contadorJugador');
    let contadorMaquina = document.getElementById('contadorMaquina');
    let contadorPartida = document.getElementById('contadorPartida');


    contadorJugador.innerHTML = partida.puntosJugador;
    contadorMaquina.innerHTML = partida.puntosMaquina;
    contadorPartida.innerHTML = partida.partidasJugadas;

}


function animarMoneda(){
    let imgAnimacion = document.getElementById("animacion");
    let monedaCara = `img/cara.png`;
    let monedaCruz = `img/cruz.png`;
    let intervaloAnimacion = setInterval(animacion, 300, imgAnimacion, monedaCara, monedaCruz);
    setTimeout(pararAnimacion, 2000, intervaloAnimacion, imgAnimacion, monedaCara );
}

function animacion(imgAnimacion, monedaCara, monedaCruz){
    partida.iteraciones %2 === 0 ? imgAnimacion.src = monedaCara : imgAnimacion.src = monedaCruz;
    partida.iteraciones++;
}


function pararAnimacion(intervaloAnimacion, imgAnimacion, monedaCara){
    clearInterval(intervaloAnimacion);
    ladoMoneda(imgAnimacion);
    volcarResultado(imgAnimacion, monedaCara);
}

function ladoMoneda(imgAnimacion){
    let resultado = Math.random() > 0.5 ?   'cara' :  'cruz' ;

    if(resultado === partida.monedaJugador){
        partida.puntosJugador++;
    }else{
        partida.puntosMaquina++;
    }
    partida.partidasJugadas++;
    imgAnimacion.src = `img/${resultado}.png`;

    


    
}


