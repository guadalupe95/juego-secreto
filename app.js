let numeroSecreto;
let intentos;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoalElemanto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoalElemanto('p','ya se sortearon todos los numeros');


    }
    else{
        
    //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }
        else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoalElemanto('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoalElemanto('p','El numero secreto es menor');
        }
        else{
            asignarTextoalElemanto('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value='' ;
    
}
function condicionesIniciales(){
    asignarTextoalElemanto('h1','Adivina el numero secreto');
    asignarTextoalElemanto('p', `Indica un numero del 1- ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Iniciar mensaje de iontervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //inicializar numero de intentos
    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();