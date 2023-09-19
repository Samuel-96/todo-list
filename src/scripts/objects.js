import CarpetaIcon from "../assets/folder.png";
import Borrar from "../assets/borrar.png";

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

    añadirNotas(nota){
        this.coleccionNotas.push(nota);
    }

    borrarNota(id) {
        this.coleccionNotas = this.coleccionNotas.filter(nota => nota.id !== id);
        
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

        if(this.focus === false && clicable === true){
            if(elementoSeleccionado.classList.value !== "borrar-carpeta" && elementoSeleccionado.parentNode.classList.value === "contenedor-carpetas"){
               
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
    }

    borrarNota(){
        this.carpeta.borrarNota(this.id);
        this.divNota.remove();
    }
    
    abrirDescripcion() {
        const div = document.querySelector(".abrirDescripcionNota");
        const p = document.querySelector(".descripcionNotaAbierta");
        const button = document.querySelector(".cerrar-descripcion");

        button.addEventListener("click", function(){
            div.style.display = "none";
        });
        p.textContent = this.descripcion;
        div.style.display = "flex";
        div.style.padding = "1em";
        
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
        divNota.appendChild(checkBox);

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
        
        divPrimerContenedorNota.appendChild(divNota);
        divSegundoContenedorNota.appendChild(imgBorrarNota);
        
        contNota.appendChild(divPrimerContenedorNota);
        contNota.appendChild(divSegundoContenedorNota);

        divPrimerContenedorNota.addEventListener("click", () => {
            this.abrirDescripcion();
        });

        imgBorrarNota.addEventListener("click", () => {
            this.borrarNota();

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
    contenedorAviso.style.display = "block";
    cerrarAvisoBtn.addEventListener("click", () => {
        contenedorAviso.style.display = "none";
    });
}

function desactivarAviso(){
    const contenedorAviso = document.getElementById("contenedorAviso");
    contenedorAviso.style.display = "none";
}

export {Carpeta, Nota};