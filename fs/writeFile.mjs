import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createFiles } from "../imports/imports.mjs";

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente



async function createWriteFile() {
  try {
    const address = join("documents","directory","file",);
    const createWeite = await writeFile(address + "/hola.txt" ,"hola mundo");

  } catch (err) {
     if(err.code !== "ENODENT") console.error("ruta no existe",err.path);
     else console.error (err)
  }
}

export function initWrite() {
   createWriteFile();
}


//intentar hacer que el archivo se cree despues de las carpetas