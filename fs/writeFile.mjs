import { writeFile } from "node:fs/promises";
import { join } from "node:path";

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente

export async function createWriteFile(putName) {
  try {
    const address = join("documents", "directory", "file");
    const createWeite = await writeFile(address + `/${putName}.txt`, "hola mundo");
    console.log("archivo creado con exito");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`las direccion no existe ${err.path}`);
    } else if (err.code === "EEXIST") {
      console.error(`este archivo ya existe ${err.path}`);
    } else {
      console.error(err);
    }
  }
}

//ver los errores al crear los archivos
