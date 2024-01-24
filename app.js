let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces" } `)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //no acerto
        if (numeroDeUsuario > numeroSecreto ){ 
        asignarTextoElemento ("p","El numero secreto es menor");
    }else {
        if (numeroDeUsuario < numeroSecreto ){
        asignarTextoElemento ("p","El numero secreto es mayor");   
        }
         intentos ++;
         limpiarCaja();     
        }  
        return;
    }
 }

function limpiarCaja(){
    let ValorCaja = document.querySelector("#valorUsuario");
     ValorCaja.value =  " ";
    //se puede hacer :
    // document.querySelector("#valorUsuario").value = "";
    //sacando el let y borrando el valorCaja="";
    return;
}

function generarNumeroSecreto (){ 
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numero
    if (listaDeNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
   }else{
    // si el numero generado esta incluido en la lista
    if (listaDeNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaDeNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }

   }
}
 
function condicionesInciales (){
    asignarTextoElemento("h1" , "Juego del Numero secreto");
    asignarTextoElemento("p" , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();  
    intentos = 1;
}


function reiniciarJuego(){
 //limpiar la caja
 limpiarCaja();
 // indicar mensaje de intervalo de numero
 //generar el numero aleatorio
 // inicializar el numero de intentos
 condicionesInciales();
  //dehabilitar el boton de nuevo juego
 document.querySelector("#reiniciar").setAttribute("desabled","true");

}

 condicionesInciales();


