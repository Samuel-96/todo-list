import {Carpeta} from "./objects.js"
let carpetaSeleccionada = null;

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

function comprobarCarpetaSeleccionada() {
    let carpetas = document.querySelectorAll(".contenedor-carpetas");

    carpetas.forEach(carpeta => {
        let estiloBorde = carpeta.style.borderColor;
        if (estiloBorde === "white") {
            console.log("Carpeta seleccionada. Nombre de la carpeta: " + carpeta.querySelector("p").textContent);
            carpetaSeleccionada = carpeta.carpetaInstance;
            añadirNota();
            
        }

        else{
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
        activarOverlay();
        const añadirNotaDiv = document.querySelector(".añadir-nota");
        añadirNotaDiv.style.zIndex = "3";
        añadirNotaDiv.style.display = "flex";
        
        const btnCrearNota = document.querySelector("#crear-nota");

        btnCrearNota.addEventListener("click", crearNota);
        
    } else {
        console.log("Debes seleccionar antes una carpeta donde guardar las notas");
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

function crearNota() {
    // Obtener valores del formulario
    const titulo = document.querySelector("#titulo-nota").value;
    const fecha = document.querySelector("#fecha-nota").value;
    const descripcion = document.querySelector("#descripcion-nota").value;

    // Crear una instancia de Nota
    const nuevaNota = new Nota(titulo, fecha, descripcion);

    // Verificar que haya una carpeta seleccionada
    if (carpetaSeleccionada !== null) {
        carpetaSeleccionada.añadirNotas(nuevaNota);
        console.log(carpetaSeleccionada.mostrarNotas());
    } else {
        console.log("Debes seleccionar antes una carpeta donde guardar las notas");
    }

    // Resto del código para mostrar las notas en el contenedor derecho
}

class Nota{
    constructor(titulo, fecha, descripcion){
        this.titulo = titulo;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}

export {añadirBotones};
