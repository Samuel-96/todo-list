import {añadirBotones} from "./scripts/addButtons.js";
import "./styles/style.css";
import { addImages } from "./scripts/addImages.js";
import { cargarDatos, guardarDatos } from "./scripts/almacenamientoLocal.js";
import { datos, datosFormato, datosCarpetas, datosNotas } from "./scripts/objects.js";

addImages();
añadirBotones();
window.addEventListener("load",cargarDatos);
window.addEventListener("beforeunload",guardarDatos);

