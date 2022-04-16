
var cronometro;
var botonIniciar;
var botonStop;
botonIniciar = document.getElementById('btn-run');
botonStop = document.getElementById('btn-stop');

var contadorS = 1;
var contadorM = 0;
var contadorH = 0;

function reset(){
    if (botonIniciar.innerHTML === 'PAUSE'){
        botonIniciar.innerHTML = 'PLAY';
    }
    contadorS = 0;
    contadorM = 0;
    contadorH = 0;
    clearInterval(cronometro);
    segundos.innerText = '00';
    minutos.innerText = '00' + ' :';
    horas.innerText = '00' + ' :';
}

function run(){
    
    var segundos = document.getElementById('segundos');
    var minutos = document.getElementById('minutos');
    var horas = document.getElementById('horas');

    if (botonIniciar.innerHTML === 'PAUSE'){
        botonIniciar.innerHTML = 'PLAY';
        clearInterval(cronometro);
    } else {
        botonIniciar.innerHTML = 'PAUSE';
        cronometro = setInterval(
        function contar(){
            if (contadorS == 60){
                contadorS = 0;
                contadorM += 1;
                minutos.innerHTML = contadorM + ' :';
                if (contadorM == 60){
                    contadorM = 1;
                    contadorH += 1;
                    horas.innerHTML = contadorH + ' :'; 
                }
            }
            segundos.innerHTML = contadorS;
            contadorS += 1;
        }
        ,1000);
    }
}