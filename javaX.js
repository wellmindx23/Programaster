document.getElementById("btn-enviar").addEventListener("click", registro);
document.getElementById("btn-registro").addEventListener("click", cambio);
window.addEventListener("resize", anchoPagina);

//Declarar variables
var contenedor = document.querySelector(".contenedor-nota-registro");
var nota = document.querySelector(".notaa");
var formulario_registro = document.querySelector(".formulario-registro");
var caja_trasera_nota = document.querySelector(".caja-trasera-nota");
var caja_trasera_registro = document.querySelector(".caja-trasera-registro");

//Funcion
function anchoPagina(){
    if(window.innerWidth > 850)
    {
        caja_trasera_registro.style.display = "block";
        caja_trasera_nota.style.display = "block";
    }
    else{
        caja_trasera_nota.style.display = "block";
        caja_trasera_nota.style.opacity = "1";
        caja_trasera_registro.style.display = "none";
        formulario_registro.style.display = "block";
        nota.style.display = "none";
        contenedor.style.left = "0px";
    }
}

anchoPagina(); 

function registro(){
    if(window.innerWidth > 850){
    nota.style.display = "block";
    contenedor.style.left = "410px";
    formulario_registro.style.display = "none";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_nota.style.opacity = "1";
    }
    else{
    nota.style.display = "block";
    contenedor.style.left = "0px";
    formulario_registro.style.display = "none";
    caja_trasera_registro.style.display = "none";
    caja_trasera_nota.style.display = "block";
    caja_trasera_registro.style.opcaity = "1";
    }
    

}

function cambio(){
    if(window.innerWidth > 850){
    nota.style.display = "none";
    contenedor.style.left = "48px";
    formulario_registro.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_nota.style.opacity = "0";
    }
    else{
    nota.style.display = "none";
    contenedor.style.left = "0px";
    formulario_registro.style.display = "block";
    caja_trasera_registro.style.display = "block";
    caja_trasera_nota.style.display = "none";
    }

}