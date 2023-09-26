import { guardarDatos } from "./almacenamientoLocal.js";
import {Carpeta, Nota, clicable, datos} from "./objects.js"

let carpetaSeleccionada = null;
let carpetaElegida = false;
let buzonAbierto = false;

function añadirBotones(){

    //declaracion de botones
    const botonCrearCarpeta = document.querySelector("#crear-carpeta");   
    const botonAñadirNota = document.querySelector(".nueva-nota");
    const cancelarNota = document.querySelector(".cancelar-nota");
    const buzonEntrada = document.querySelector(".inbox");

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
            activarOverlay();
            avisoh1.textContent = "El nombre de la carpeta no puede estar vacío";
            const eliminarBtnAviso = document.querySelector("#eliminar");
            eliminarBtnAviso.style.display = "none";
            activarAvisoSinEliminar();
            //desactivarOverlay();
            
        }
        else{
            //CREACION DE UNA CARPETA NUEVA
            const nuevaCarpeta = new Carpeta(nombreCarpeta);
            // Agregar el contenedor al documento
            const contLatIzq = document.querySelector(".contenedor-lateral-izq");
            contLatIzq.appendChild(nuevaCarpeta.divCarpeta);
        }
    });

    //boton de añadir nota 
    botonAñadirNota.addEventListener("click", comprobarCarpetaSeleccionada);

    buzonEntrada.addEventListener("click", mostrarTodasLasNotas);
}

function activarAviso(){

    const contenedorAviso = document.getElementById("contenedorAviso");
    const cerrarAvisoBtn = document.getElementById("cerrarAviso");
    const eliminarBtnAviso = document.querySelector("#eliminar");
    eliminarBtnAviso.style.display = "";
    contenedorAviso.style.display = "block";
    cerrarAvisoBtn.addEventListener("click", () => {
        contenedorAviso.style.display = "none";
    });
}

function activarAvisoSinEliminar(){

    const contenedorAviso = document.getElementById("contenedorAviso");
    contenedorAviso.style.zIndex = "3";
    const cerrarAvisoBtn = document.getElementById("cerrarAviso");
    const eliminarBtnAviso = document.querySelector("#eliminar");
    eliminarBtnAviso.style.display = "none";
    contenedorAviso.style.display = "block";
    cerrarAvisoBtn.addEventListener("click", () => {
        contenedorAviso.style.display = "none";
        desactivarOverlay();
    });
}

function desactivarAviso(){
    const contenedorAviso = document.getElementById("contenedorAviso").style.display = "none";
}

function comprobarCarpetaSeleccionada() {
    let carpetas = document.querySelectorAll(".contenedor-carpetas");
    const notas = document.querySelectorAll(".contenedor-notas");

    carpetaElegida = false;

    carpetas.forEach(carpeta => {
        let estiloBorde = carpeta.style.borderColor;
        if (estiloBorde === "white") {
            carpetaElegida = true;
            carpetaSeleccionada = carpeta.carpetaInstance;
            añadirNota();
            
        }

        else if(carpetaElegida == false){
            activarOverlay();
            const avisoh1 = document.querySelector(".aviso");
            avisoh1.textContent = "Debes seleccionar antes una carpeta donde guardar las notas";
            activarAvisoSinEliminar();
            
        }
    });

}

function añadirNota(){
    if (carpetaSeleccionada !== null) {
        desactivarAviso();
        activarOverlay();
        const añadirNotaDiv = document.querySelector(".añadir-nota");
        const tituloNuevaNota = document.querySelector(".titulo-nuevaNota");
        tituloNuevaNota.textContent = "Crear nota";
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

    //CREACION DE NOTA
    const nuevaNota = new Nota(titulo, fecha, descripcion, carpetaSeleccionada);
    nuevaNota.crearNota();
    if (carpetaSeleccionada !== null) {

        carpetaSeleccionada.añadirNotas(nuevaNota.appendDivNota());

        const contadorNotas = document.querySelector(".contador-notas");
        const notas = carpetaSeleccionada.mostrarNotas();
        const contenedorDcho = document.querySelector(".contenedor-lateral-dcho");
        carpetaSeleccionada.mostrarNotas();
        /*
        notas.forEach(nota => {
            contenedorDcho.appendChild(nota.divNota);
            contadorNotas.textContent = "Notas (" + notas.length + ")";
        });*/
        
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

function ocultarInfoNotas(){
    //ocultamos el contenido del panel lateral derecho
    const contLatDerecho = document.querySelector(".contenedor-lateral-dcho");
    const hijos = Array.from(contLatDerecho.children);

    hijos.forEach(hijo => {
        hijo.style.display = "none";
    });
}

function mostrarTodasLasNotas(){
    let notasHoy = [];
    const inbox = document.querySelector(".inbox");
    const contLatDerecho = document.querySelector(".contenedor-lateral-dcho");
    const notas = document.querySelectorAll(".contenedor-notas");

    if(clicable){
        if(inbox.style.borderColor === "white"){
            inbox.style.borderStyle = "none";
            inbox.style.borderColor = "black";
            buzonAbierto = false;
            notas.forEach(nota => {
                nota.style.pointerEvents = "cursor";
                guardarDatos();
            });
            return;
        }
        else{

            let fechaHoy = new Date();
            buzonAbierto = false;
    
            const carpetas = document.querySelectorAll(".contenedor-carpetas");
            
            carpetas.forEach(carpeta => {
                if(carpeta.style.borderColor === "white"){
                    carpetaElegida = true;
                    buzonAbierto = false;
                    clicable = false;
                    
                }
                else{
                    carpetaElegida = false;

                }
                if(carpeta.carpetaInstance.mostrarNotas() !== null && carpeta.carpetaInstance.mostrarNotas() !== undefined){

                    carpeta.carpetaInstance.mostrarNotas().forEach(nota => {
                        let notaFecha = new Date(nota.fecha);
                        if (
                            fechaHoy.getFullYear() === notaFecha.getFullYear() &&
                            fechaHoy.getMonth() === notaFecha.getMonth() &&
                            fechaHoy.getDay() === notaFecha.getDay()
                        ) {
                            notasHoy.push(nota);
                        }
                    });
                    
                }
                else{

                    datos.notas.forEach(nota => {
                        let notaFecha = new Date(nota.fecha);
                        if (
                            fechaHoy.getFullYear() === notaFecha.getFullYear() &&
                            fechaHoy.getMonth() === notaFecha.getMonth() &&
                            fechaHoy.getDay() === notaFecha.getDay()
                        ) {
                            notasHoy.push(nota);
                        }
                    })
                }
                
            });
    
            if(carpetaElegida){
                inbox.style.borderStyle = "none";
                inbox.style.borderColor = "black";
                clicable = false;
                carpetaElegida = false;
                buzonAbierto = false;
                return;
            }
            else{
                buzonAbierto = true;
                inbox.style.borderStyle = "solid";
                inbox.style.borderColor = "white";
                ocultarInfoNotas();
                const info = document.querySelector("#nombre-carpeta-seleccionada");
                info.textContent = "NOTAS DEL DÍA " + fechaHoy.getDate() + " de " + fechaHoy.toLocaleDateString(undefined, { month: 'long' });

                notasHoy.forEach(nota => {
                    
                    contLatDerecho.appendChild(nota.divNota);
                    nota.divNota.style.display = "";
                    nota.divNota.style.cursor = "not-allowed"
                });
    
            }
            
        }
    }
}

export {añadirBotones, buzonAbierto};
