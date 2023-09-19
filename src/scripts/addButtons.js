import {Carpeta, Nota} from "./objects.js"
let carpetaSeleccionada = null;
let carpetaElegida = false;

function añadirBotones(){
    //declaracion de botones
    const botonCrearCarpeta = document.querySelector("#crear-carpeta");   
    const botonAñadirNota = document.querySelector(".nueva-nota");
    const cancelarNota = document.querySelector(".cancelar-nota");


    cancelarNota.addEventListener("click", function(){
        document.querySelector(".añadir-nota").style.display = "none";
        desactivarOverlay();
    });

    //boton de crear carpetaa 
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

    //boton de añadir nota 
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

function desactivarAviso(){
    const contenedorAviso = document.getElementById("contenedorAviso").style.display = "none";
}

function comprobarCarpetaSeleccionada() {
    let carpetas = document.querySelectorAll(".contenedor-carpetas");
    carpetaElegida = false;

    carpetas.forEach(carpeta => {
        let estiloBorde = carpeta.style.borderColor;
        if (estiloBorde === "white") {
            carpetaElegida = true;
            carpetaSeleccionada = carpeta.carpetaInstance;
            añadirNota();
            
        }

        else if(carpetaElegida == false){
            
            const avisoh1 = document.querySelector(".aviso");
            avisoh1.textContent = "Debes seleccionar antes una carpeta donde guardar las notas";
            const eliminarAvisoBtn = document.getElementById("eliminar");
            eliminarAvisoBtn.style.display = "none";
            activarAviso();
            
        }
    });

}

function añadirNota(){
    if (carpetaSeleccionada !== null) {
        desactivarAviso();
        activarOverlay();
        const añadirNotaDiv = document.querySelector(".añadir-nota");
        añadirNotaDiv.style.zIndex = "3";
        añadirNotaDiv.style.display = "flex";
        
        const btnCrearNota = document.querySelector("#crear-nota");

        btnCrearNota.addEventListener("click", crearNota);
        
    } else {

    }
}

function crearNota() {

    const titulo = document.querySelector("#titulo-nota").value;
    const fecha = document.querySelector("#fecha-nota").value;
    const descripcion = document.querySelector("#descripcion-nota").value;

    console.log(carpetaSeleccionada);
    const nuevaNota = new Nota(titulo, fecha, descripcion, carpetaSeleccionada);


    if (carpetaSeleccionada !== null) {
        carpetaSeleccionada.añadirNotas(nuevaNota.appendDivNota());
        
        console.log(carpetaSeleccionada.mostrarNotas());

        const contadorNotas = document.querySelector(".contador-notas");
        const notas = carpetaSeleccionada.mostrarNotas();
        const contenedorDcho = document.querySelector(".contenedor-lateral-dcho");
    
        
        notas.forEach(nota => {
            contenedorDcho.appendChild(nota.divNota);
            contadorNotas.textContent = "Notas (" + notas.length + ")";
        });
    
    } 
    
    else {

    }
}

function activarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

function desactivarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

export {añadirBotones};
