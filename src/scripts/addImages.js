import Add from "../assets/add.png";
import {Carpeta, Nota} from "./objects.js";
import Menu from "../assets/abrir-menu.png";
import GitHub from "../assets/github-logo.png";
import Inbox from "../assets/inbox.png";
import Folder from "../assets/folder.png";
import { datos } from "./objects.js";

function addImages(){

    const nuevaNota = document.querySelector(".nueva-nota");
    nuevaNota.src = Add;

    const nuevaCarpeta = new Carpeta("Carpeta inicial");
    const notaEjemplo = new Nota("Nota de ejemplo", "fecha", "descripcion");
        notaEjemplo.crearNota();
        nuevaCarpeta.añadirNotas(notaEjemplo.appendDivNota());
        nuevaCarpeta.mostrarNotas();
    if(!datos.carpetas[0].nombre === "Carpeta inicial"){
        console.log("no hay carpeta inicial");
        
        datos.carpetas.push(nuevaCarpeta);
    }
    
    nuevaCarpeta.divCarpeta.id = "carpeta-inicial";
    nuevaCarpeta.divCarpeta.querySelector(".borrar-carpeta").remove();
    const contLatIzq = document.querySelector(".contenedor-lateral-izq");
    contLatIzq.appendChild(nuevaCarpeta.divCarpeta);

    const gitLogo = document.querySelector(".tema");
    gitLogo.src = GitHub;

    //añado tambien la funcionalidad de ocultar panel
    const ocultarPanel = document.querySelector(".ocultar-panel");
    ocultarPanel.src = Menu;
    ocultarPanel.addEventListener("click", function(){
        
        const panelIzq = document.querySelector(".contenedor-lateral-izq");
        if(panelIzq.style.display === "none"){
            panelIzq.style.display = "block";
        }
        else{
            panelIzq.style.display = "none";
        }
    });

    const bandejaEntrada = document.querySelector("#bandeja-entrada");
    bandejaEntrada.src = Inbox;

    const bandekaCarpetas = document.querySelector("#bandeja-carpetas");
    bandekaCarpetas.src = Folder;

    //añadimos logica a la seleccion de la fecha de la nota
    const fecha = document.querySelector("#fecha-nota");
    let hoy = new Date();

    //de esta manera se pondrá por defecto la fecha de hoy
    fecha.value = hoy.getFullYear().toString() + '-' + (hoy.getMonth() + 1).toString().padStart(2, 0) +
    '-' + hoy.getDate().toString().padStart(2, 0);

    //asi conseguimos que no se puedan introducir fechas previas al dia actual
    let fechaPrevia = new Date();
    let iso_date = fechaPrevia.toISOString().substring(0, 10);
    fecha.setAttribute('min', iso_date);

}


export {addImages};