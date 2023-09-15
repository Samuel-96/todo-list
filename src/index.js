import {holas} from "./scripts/hi.js";
import "./styles/style.css";
import { addImages } from "./scripts/addImages.js";

holas();
addImages();

const botonCrear = document.querySelector("#crear-carpeta");

botonCrear.addEventListener("click", function(){
    const contenedor = document.createElement("div");
contenedor.classList.add("contenedor-carpetas");

// Crear la primera imagen
const img1 = document.createElement("img");
img1.src = "../src/assets/folder.png";
img1.alt = "Carpeta inicial";

// Crear un párrafo
const parrafo = document.createElement("p");
parrafo.textContent = "Carpeta inicial";

// Crear la segunda imagen
const img2 = document.createElement("img");
img2.src = "../src/assets/borrar.png";
img2.alt = "Borrar carpeta";

// Agregar elementos al contenedor
contenedor.appendChild(img1);
contenedor.appendChild(parrafo);
contenedor.appendChild(img2);

// Agregar el contenedor al documento
const contLatIzq = document.querySelector(".contenedor-lateral-izq");
contLatIzq.appendChild(contenedor);
});