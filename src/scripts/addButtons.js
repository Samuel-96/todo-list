import {Carpeta} from "./objects.js"


function añadirBotones(){
    //declaracion de botones
    const botonCrearCarpeta = document.querySelector("#crear-carpeta");   
    const botonAñadirNota = document.querySelector(".nueva-nota");

    botonCrearCarpeta.addEventListener("click", function(){ 
        //obtenemos el nombre de la nueva carpeta
        const campoNuevaCarpeta = document.querySelector("#nueva-carpeta");
        let nombreCarpeta = campoNuevaCarpeta.value;
        if(nombreCarpeta === ""){
            const avisoh1 = document.querySelector(".aviso");
            avisoh1.textContent = "El nombre de la carpeta no puede estar vacío";
            activarAviso();
        }
        else{
            const nuevaCarpeta = new Carpeta(nombreCarpeta);

            // Agregar el contenedor al documento
            const contLatIzq = document.querySelector(".contenedor-lateral-izq");
            contLatIzq.appendChild(nuevaCarpeta.divCarpeta);
        }
    });

    botonAñadirNota.addEventListener("click", comprobarCarpetaSeleccionada);
}

function activarAviso(){

    const contenedorAviso = document.getElementById("contenedorAviso");
    const cerrarAvisoBtn = document.getElementById("cerrarAviso");
    contenedorAviso.style.display = "block";
    cerrarAvisoBtn.addEventListener("click", () => {
        contenedorAviso.style.display = "none";
    });
}

function comprobarCarpetaSeleccionada() {
    let carpetas = document.querySelectorAll(".contenedor-carpetas");

    carpetas.forEach(carpeta => {
        let estiloBorde = carpeta.style.borderColor;
        if (estiloBorde === "white") {
            console.log("Carpeta seleccionada. Nombre de la carpeta: " + carpeta.querySelector("p").textContent);

            //mostrar notas de la carpeta seleccionada
        }
    });

}

export {añadirBotones};
