import Add from "../assets/add.png";
import {Carpeta} from "./objects.js";
import Menu from "../assets/abrir-menu.png";
import GitHub from "../assets/github-logo.png";

function addImages(){

    const nuevaNota = document.querySelector(".nueva-nota");
    nuevaNota.src = Add;

    const nuevaCarpeta = new Carpeta("Carpeta inicial");
    nuevaCarpeta.divCarpeta.id = "carpeta-inicial";
    nuevaCarpeta.divCarpeta.querySelector(".borrar-carpeta").remove();
    const contLatIzq = document.querySelector(".contenedor-lateral-izq");
    contLatIzq.appendChild(nuevaCarpeta.divCarpeta);

    const gitLogo = document.querySelector(".tema");
    gitLogo.src = GitHub;

    enlaceLogo.appendChild(gitLogo);

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