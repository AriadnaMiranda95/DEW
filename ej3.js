document.addEventListener("DOMContentLoaded", init);

function init(){
    const calcular = document.getElementById('calcular');
    calcular.addEventListener('click', calcularFactorial);
    const calcularRecursivo = document.getElementById('calcularRecursivo');
    calcularRecursivo.addEventListener('click', calcularRecursivamente);
}



function calcularFactorial(){
    let num = document.getElementById('num');
    if(isNaN(parseInt(num.value))||parseInt(num.value) < 0 || parseFloat(num.value) !== parseInt(num.value) ){
        alert("Por favor introduce un número positivo válido");
        return;
    }
    let valorNum = parseInt(num.value);
    let result = document.getElementById('result');
    let total = 1;

    for(let i = valorNum; i > 0; i--){
            total*= i;    
    }

    result.value = total;

}


function calcularRecursivamente(){
    let num = document.getElementById('num');
    if(isNaN(parseInt(num.value))||parseInt(num.value) < 0 || parseFloat(num.value) !== parseInt(num.value) ){
        alert("Por favor introduce un número positivo válido");
        return;
    }
    let total = calcularRecursivo(parseInt(num.value));
    let result = document.getElementById('result');
    result.value = total;
}

function calcularRecursivo(num){
    return num < 2 ? 1 : num * calcularRecursivo(num - 1) ;

}
