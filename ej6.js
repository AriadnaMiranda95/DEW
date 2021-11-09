document.addEventListener("DOMContentLoaded", init);

function init(){
    const info1  = document.getElementById('info1');
    info1.addEventListener('click', parametrosPorDefecto);

    const info2  = document.getElementById('info2');
    info2.addEventListener('click', parametrosPorDefecto);

    const info3  = document.getElementById('info3');
    info3.addEventListener('click', parametrosPorDefecto);
}

function parametrosPorDefecto(){
    let informacion = document.getElementById("info");

    informacion.value = this.dataset.info + ' Las Palmas 100 ';
    
}