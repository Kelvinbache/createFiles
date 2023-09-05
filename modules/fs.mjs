import { mkdir, writeFile } from "node:fs/promises";
import { adress, adressFile } from "./path.mjs";

//direcciones donde estamos guardando los archivos

const init = process.env.NODE_ENV;

function aplication() {
  const adressMkdir = adress();
  const adressFiles = adressFile();

  return new Promise((resolve, rejects) => {
    // creando la carpeta

    try {
      const fileCreate = mkdir(adressMkdir); // se inicia mediante promesas en este caso
    } catch {
      rejects("tenemos un error en crear la carpeta");
      process.exit(1);
    }

    //Creando el documento
    try {
      const content = "";
      const writer = writeFile(adressFiles, content);
      resolve("documento creado con exito", writer);
    } catch {
      rejects("error en crear el documentos");
      process.exit(1);
    }
  });
}

if (init === "inicio"){
aplication().then((data) => {console.log(data);}).catch((err) => { console.error(err);});
} else {
  console.log("no podemos iniciar la creacion del archivo")
}
/**
 * cosas que hacer
 * 1)Cambiar el codigo a sincrono // pero que este separada de la rama principal
 * 2)crear un archivo que resiba los datos // pero que este separada de la rama princiapal
 * 3) comando para eliminar la carpeta
 */
