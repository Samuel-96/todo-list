import CarpetaIcon from "../assets/folder.png";
import Borrar from "../assets/borrar.png";
import Editar from "../assets/edit.png";
import { buzonAbierto } from "./addButtons";

let clicable = true;
class Carpeta {

    constructor(nombreCarpeta) {
        this.nombre = nombreCarpeta;
        this.divCarpeta = this.crearCarpeta();
        this.agregarEventListeners();
        this.focus = false;
        this.seleccionada = false;
        this.coleccionNotas = [];
        this.divCarpeta.carpetaInstance = this;
    }

    editarNotas(id, titulo, fecha, descripcion){

        this.coleccionNotas.forEach(nota => {
            if(nota.id === id){
                nota.titulo = titulo;
                nota.fecha = fecha;
                nota.descripcion = descripcion;
            }
        });
        
        this.mostrarNotas();
    }

    añadirNotas(nota){
        this.coleccionNotas.push(nota);
    }

    borrarNota(id) {
        this.coleccionNotas = this.coleccionNotas.filter(nota => nota.id !== id);
        this.mostrarNotas();
        if(this.coleccionNotas.length < 1){
            document.querySelector(".contador-notas").textContent = "Notas (0)";
        }
    }

    mostrarNotas(){

        const contenedorDcho = document.querySelector(".contenedor-lateral-dcho");
        while (contenedorDcho.children.length > 1) {
            contenedorDcho.removeChild(contenedorDcho.children[1]);
        }

        const contadorNotas = document.querySelector(".contador-notas");
        const notas = this.coleccionNotas;
    
        
        notas.forEach(nota => {
            contenedorDcho.appendChild(nota.divNota);
            contadorNotas.textContent = "Notas (" + notas.length + ")";
        });
        
        return this.coleccionNotas;
    }

    // Método para crear la estructura de la carpeta
    crearCarpeta() {
        
        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedor-carpetas");

        const img1 = document.createElement("img");
        img1.src = CarpetaIcon;
        img1.alt = "Carpeta inicial";

        const parrafo = document.createElement("p");
        parrafo.textContent = this.nombre;

        const img2 = document.createElement("img");
        img2.src = Borrar;
        img2.alt = "Borrar carpeta";
        img2.classList.add("borrar-carpeta")

        contenedor.appendChild(img1);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(img2);

        return contenedor;
    }

    // Método para agregar event listeners
    agregarEventListeners() {
        this.divCarpeta.querySelector(".borrar-carpeta").addEventListener("click", () => this.borrarCarpeta());
        this.divCarpeta.addEventListener("click", this.seleccionarCarpeta.bind(this));
    }

    borrarCarpeta() {
        // Lógica para borrar la carpeta
        const avisoh1 = document.querySelector(".aviso");
        avisoh1.textContent = "¿Estás seguro de eliminar esta carpeta y todo su contenido?";
        const eliminarAvisoBtn = document.querySelector("#eliminar");
        const cerrarAvisoBtn = document.querySelector("#cerrarAviso");
        activarAviso();
        this.seleccionada = true; // Marcar la carpeta como seleccionada

        //se acepta la eliminación
        eliminarAvisoBtn.addEventListener("click", () => {
            if (this.seleccionada) {
                const carpetaClickeada = this.divCarpeta;
                desactivarAviso();
                carpetaClickeada.remove();
                this.seleccionada = false; // Desmarcar la carpeta como seleccionada después de borrarla
            }
        });

        // Cancelar la selección si se cierra el aviso sin eliminar
        cerrarAvisoBtn.addEventListener("click", () => {
            this.seleccionada = false; // Desmarcar la carpeta como seleccionada
            desactivarAviso();
        });
        
    }
    

    seleccionarCarpeta(event) {
        // Lógica para seleccionar la carpeta
        const elementoSeleccionado = event.target;
        const h2CarpetaSeleccionada = document.querySelector("#nombre-carpeta-seleccionada");
        if(this.focus === false && clicable === true && buzonAbierto == false){ 
            //mostramos el contenido del panel lateral derecho ocultado por inbox
            const contLatDerecho = document.querySelector(".contenedor-lateral-dcho");
            const hijos = Array.from(contLatDerecho.children);

            hijos.forEach(hijo => {
                if(hijo.style.display === "none"){
                    hijo.style.display = "";
                }
                hijo.style.display = "";
            });

            if(elementoSeleccionado.classList.value !== "borrar-carpeta" && elementoSeleccionado.parentNode.classList.value === "contenedor-carpetas"){
               
                 //mostramos el contenido del panel lateral derecho ocultado por inbox
                const contLatDerecho = document.querySelector(".contenedor-lateral-dcho");
                const hijos = Array.from(contLatDerecho.children);

                hijos.forEach(hijo => {
                    if(hijo.style.display === "none"){
                        hijo.style.display = "";
                    }
                    hijo.style.display = "";
                });


                elementoSeleccionado.parentNode.style.borderStyle = "solid";
                elementoSeleccionado.parentNode.style.borderColor = "white";
                h2CarpetaSeleccionada.textContent = elementoSeleccionado.textContent;
                this.focus = true;
                clicable = false;
                const contadorNotas = document.querySelector(".contador-notas");
                contadorNotas.textContent = "Notas (" + this.mostrarNotas.length + ")";
                this.mostrarNotas();
                
            }
            else if(elementoSeleccionado.classList.value === "contenedor-carpetas"){

                 //mostramos el contenido del panel lateral derecho ocultado por inbox
                const contLatDerecho = document.querySelector(".contenedor-lateral-dcho");
                const hijos = Array.from(contLatDerecho.children);

                hijos.forEach(hijo => {
                    if(hijo.style.display === "none"){
                        hijo.style.display = "";
                    }
                    hijo.style.display = "";
                });


                this.divCarpeta.style.borderStyle = "solid";
                this.divCarpeta.style.borderColor = "white";
                h2CarpetaSeleccionada.textContent = this.divCarpeta.children[1].textContent;
                this.focus = true;
                clicable = false;
                const contadorNotas = document.querySelector(".contador-notas");
                contadorNotas.textContent = "Notas (" + this.mostrarNotas.length + ")";
                this.mostrarNotas();

            }
        }
        //esto cuando se desmarca una carpeta
        else if(this.focus === true && clicable === false){
            this.divCarpeta.parentNode.style.borderColor = "black";
            this.divCarpeta.parentNode.style.borderStyle = "none";
            this.divCarpeta.style.borderColor = "black";
            this.divCarpeta.style.borderStyle = "none";
            this.focus = false;
            clicable = true;
            this.divCarpeta.textContent;
            h2CarpetaSeleccionada.textContent = "";
        }
        
        event.stopPropagation();
    }
}

let idNotas = 1;

class Nota{
    constructor(titulo, fecha, descripcion, carpeta) {
        this.id = idNotas++;
        this.titulo = titulo;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.carpeta = carpeta;
        this.divNota = this.crearNota();
        this.divNota.notaInstance = this;
    }

    editarNota(){
        
        let añadirNotaDiv = document.querySelector(".añadir-nota");
        añadirNotaDiv.style.zIndex = "3";
        añadirNotaDiv.style.display = "flex";
        
        let tituloNota = document.querySelector("#titulo-nota");
        tituloNota.textContent = this.titulo;

        let fechaNota = document.querySelector("#fecha-nota");
        fechaNota.value = this.fecha;

        let descripcionNota = document.querySelector("#descripcion-nota");
        descripcionNota.textContent = this.descripcion;

        let btnCrearNota = document.querySelector("#crear-nota");
        
        btnCrearNota.value = "Editar nota";

        let id, titulo, fecha, descripcion, carpeta, nota;
        nota = this.nota;
        id = this.id
        titulo = tituloNota.textContent;
        fecha = fechaNota.value;
        descripcion = descripcionNota.textContent;
        carpeta = this.carpeta;

        btnCrearNota.addEventListener("click", function(){
        
            // Obtén el valor actualizado del campo de título
            const tituloActualizado = tituloNota.value;
            const fechaActualizada = fechaNota.value;
            const descripcionActualizada = descripcionNota.textContent;
        
            carpeta.editarNotas(id, tituloActualizado, fechaActualizada, descripcionActualizada);
            carpeta.borrarNota(id);
            añadirNotaDiv.style.display = "none";
            desactivarOverlay();
        });

        
    }

    borrarNota(){
        this.carpeta.borrarNota(this.id);
        this.divNota.remove();
    }
    
    abrirDescripcion() {
        activarOverlay();
        const div = document.querySelector(".abrirDescripcionNota");

        div.style.zIndex = "3";
        const p = document.querySelector(".descripcionNotaAbierta");
        const button = document.querySelector(".cerrar-descripcion");

        button.addEventListener("click", function(){
            div.style.display = "none";
            desactivarOverlay();
        });
        
        p.textContent = this.descripcion;

        if(p.textContent.length !== 0){
            div.style.display = "flex";
            div.style.padding = "1em";
        }
        
        
    }

    crearNota(){

        const contNota = document.createElement("div");
        contNota.classList.add("contenedor-notas");

        const divPrimerContenedorNota = document.createElement("div");
        divPrimerContenedorNota.classList.add("primerContenedorNota");
        const divNota = document.createElement("div");
        divNota.classList.add("nota");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        contNota.appendChild(checkBox);

        const titulo = document.createElement("p");
        titulo.textContent = this.titulo;
        divNota.appendChild(titulo);

        const descripcion = document.createElement("p");
        descripcion.textContent = this.descripcion;
        divNota.appendChild(descripcion);

        const fecha = document.createElement("p");
        const fechaOriginal = new Date(this.fecha);
        const opcionesDeFormato = { day: 'numeric', month: 'long', year: 'numeric' };
        fecha.textContent = fechaOriginal.toLocaleDateString(undefined, opcionesDeFormato);
        divNota.appendChild(fecha);

        const divSegundoContenedorNota = document.createElement("div");
        divSegundoContenedorNota.classList.add("segundoContenedorNota");

        const imgBorrarNota = document.createElement("img");
        imgBorrarNota.src = Borrar;

        const imgEditarNota = document.createElement("img");
        imgEditarNota.src = Editar;
        
        divPrimerContenedorNota.appendChild(divNota);
        divSegundoContenedorNota.appendChild(imgBorrarNota);
        divSegundoContenedorNota.appendChild(imgEditarNota);
        
        contNota.appendChild(divPrimerContenedorNota);
        contNota.appendChild(divSegundoContenedorNota);

        divPrimerContenedorNota.addEventListener("click", () => {
            this.abrirDescripcion();
        });

        imgBorrarNota.addEventListener("click", () => {
            this.borrarNota();

        });

        imgEditarNota.addEventListener("click", () => {
            activarOverlay();
            this.editarNota();

        });

        return contNota;
    }

    appendDivNota(){
        return this;
    }
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

function desactivarAviso(){
    const contenedorAviso = document.getElementById("contenedorAviso");
    contenedorAviso.style.display = "none";
}

function activarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

function desactivarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

export {Carpeta, Nota, clicable};