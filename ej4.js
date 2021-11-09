document.addEventListener("DOMContentLoaded", init);

function init(){
    let intercambioValor = document.getElementById('intercambioValor');
    intercambioValor.addEventListener('click', cambioValor);

    let intercambioReferencia = document.getElementById('intercambioReferencia');
    intercambioReferencia.addEventListener('click', cambioReferencia);
}


function cambioValor(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let num1Valor = num1.value;
    let num2Valor = num2.value;

    if(isNaN(parseInt(num1Valor)) || isNaN(parseInt(num2Valor))){
        alert('No es un número válido')
    }else{
        num1.value = num2Valor;
        num2.value = num1Valor;
    }
 
   

}


function cambioReferencia(){

    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let num1Valor = [num1.value];
    let num2Valor = [num2.value];

    num1.value = num2Valor;
    num2.value = num1Valor;

    
}