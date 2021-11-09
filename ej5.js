document.addEventListener("DOMContentLoaded", init);

function init(){
    const suma  = document.getElementById('sumar');
    suma.addEventListener('click', sumatoria);
}


function sumatoria(){
    let numerosIntroducidos = ((document.getElementById("numeros")).value).split(",");
    let resultadoSuma = document.getElementById('resultadoSuma');
    let valoresValidos = true;
    let total= 0;
    numerosIntroducidos.forEach(numero => {
        parseFloat(numero);
        if(isNaN(numero)){
            valoresValidos = false;
        }else{
            total+=parseFloat(numero);
        }
        
    });

    if(valoresValidos == false){
        alert("Los valores introducidos no son válidos.");
        return;
    }

    resultadoSuma.value = total;

    


}