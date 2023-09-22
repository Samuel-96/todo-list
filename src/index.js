import {añadirBotones} from "./scripts/addButtons.js";
import "./styles/style.css";
import { addImages } from "./scripts/addImages.js";
import { storageAvailable } from "./scripts/almacenamientoLocal.js";

if (storageAvailable("localStorage")) {
    console.log("Funciona el almacenamiento local!!");
  } else {
    console.log("No funciona almacenamiento local")
  }
  

addImages();
añadirBotones();
