import { datos, Carpeta, Nota} from "./objects.js";

let datosFormato;

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  function cargarDatos() {
    if (storageAvailable("localStorage")) {
        const datosObtenidos = localStorage.getItem('misDatos');
        if (datosObtenidos) {
            const datosParseados = JSON.parse(datosObtenidos);

            let carpetas = datosParseados.carpetas;

            carpetas.forEach(carpeta => {
              Object.setPrototypeOf(carpeta, Carpeta.prototype);
          });

            let notas = datosParseados.notas;

            //notas = []; carpetas = [];

            const contenedor = document.querySelector(".contenedor-lateral-izq");

            const nuevasNotas = [];

            console.log(notas);

            notas.forEach(datosNota => {
                // Encuentra la carpeta correspondiente a esta nota
                const carpetaAsociada = datosNota.carpeta && carpetas.find(carpeta => carpeta.id === datosNota.carpeta.id);

                // Crea una nueva instancia de nota asociada a la carpeta
                const nota = new Nota(datosNota.titulo, datosNota.fecha, datosNota.descripcion, carpetaAsociada, datosNota.id);
                nota.crearNota();
                nuevasNotas.push(nota);
            });

            let primeraCarpeta = false;
            let notasDeCarpeta;

            carpetas.forEach(datosCarpeta => {
                if (primeraCarpeta) {
                    primeraCarpeta = false;
                } else {
                    notasDeCarpeta = nuevasNotas.filter(nota => nota.carpeta && nota.carpeta.id === datosCarpeta.id);

                    const nuevaCarpeta = new Carpeta(datosCarpeta.nombre, notasDeCarpeta, datosCarpeta.id);
                    nuevaCarpeta.id = datosCarpeta.id;
                    nuevaCarpeta.coleccionNotas = notasDeCarpeta;
                    console.log(nuevaCarpeta.coleccionNotas);
                    contenedor.appendChild(nuevaCarpeta.divCarpeta);

                    Object.setPrototypeOf(nuevaCarpeta, Carpeta.prototype);
                }
            });

            nuevasNotas.forEach(nota => {
              Object.setPrototypeOf(nota, Nota.prototype);
          });

          datos.carpetas = carpetas;
          datos.notas = nuevasNotas;
        }
    }
}

function guardarDatos() {
    try {
        datosFormato = JSON.stringify(decycle(datos));

        localStorage.setItem('misDatos', datosFormato);

    } 
    catch (error) {
      console.error('Error al guardar datos en el almacenamiento local:', error);
    }
  }

  function decycle(obj, stack = []) {
    if (!obj || typeof obj !== 'object')
        return obj;
    
    if (stack.includes(obj))
        return null;

    let s = stack.concat([obj]);

    return Array.isArray(obj)
        ? obj.map(x => decycle(x, s))
        : Object.fromEntries(
            Object.entries(obj)
                .map(([k, v]) => [k, decycle(v, s)]));
}

  export {cargarDatos, guardarDatos, datosFormato};