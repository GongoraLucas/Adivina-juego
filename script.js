let valorRandom= Math.floor(Math.random()*100)+1 //se pone random *100 para que me de un numero entre el 0 o 99 para que me de tambien 100 y empieze en 1
let intentos=0;
let intento=document.getElementById("intento");
function adivinar(){
    intentos++;
    intento.textContent=intentos;
    let valor = document.getElementById("adivinanza").value;
    if (valor < 1 || valor > 100 || isNaN(valor)){
        mensaje.textContent="Debe ser un numero entre 1 y 100"
        mensaje.style.color="red";
        return 
    } 

    if(valor == valorRandom){
        document.getElementById("mensaje").innerHTML="Ganaste !!"
        mensaje.style.color="green";
        return
    }
    if (valor <valorRandom+10 && valor >valorRandom-10){
        document.getElementById("mensaje").innerHTML= "Estas muy cerca del número"
        mensaje.style.color="white";
    } else {
        document.getElementById("mensaje").innerHTML="Estas muy lejos del número"
        mensaje.style.color="white";
    }

    //se puede utilizar return como una alternativa del switch o del else if, si se cumple la codicion al ejecutarse el return termina la funcion
}



