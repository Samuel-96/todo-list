import CarpetaIcon from "../assets/folder.png";
import Add from "../assets/add.png";
import Borrar from "../assets/borrar.png";
import {Carpeta} from "./objects.js"

function addImages(){

    const nuevaNota = document.querySelector(".nueva-nota");
    nuevaNota.src = Add;

    const nuevaCarpeta = new Carpeta("Carpeta inicial");
    nuevaCarpeta.divCarpeta.id = "carpeta-inicial";
    nuevaCarpeta.divCarpeta.querySelector(".borrar-carpeta").remove();
    const contLatIzq = document.querySelector(".contenedor-lateral-izq");
    contLatIzq.appendChild(nuevaCarpeta.divCarpeta);

}

export {addImages};