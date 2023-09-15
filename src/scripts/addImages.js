import Carpeta from "../assets/folder.png";
import Add from "../assets/add.png";
import Borrar from "../assets/borrar.png";

function addImages(){

    const iconoCarpeta = document.querySelector(".icono-carpeta");
    iconoCarpeta.src = Carpeta;
    const iconoBorrar = document.querySelector(".icono-borrar");
    iconoBorrar.src = Borrar;
    const nuevaNota = document.querySelector(".nueva-nota");
    nuevaNota.src = Add;
    console.log("imagenes añadidas")
}

export {addImages};