
//Declaracion de variables
var registro = InputEvent.querySelector("registrar")
var inicio_sesion = document.querySelector(".inicio-sesion");
var registrox = document.querySelector(".registroo");
var contenedor = document.querySelector(".container")

function cambio(){
    registroo.style.display = "block";
    registrox.style.opacity = "1";
    inicio_sesion.style.display = "none";
    inicio_sesion.style.opacity = "0";
}

registro.on('click', function() {
    cambio();
});
