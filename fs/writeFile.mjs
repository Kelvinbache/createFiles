import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { errors } from "../errors/errors.mjs";

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente

export async function createWriteFile(putName) {
  try {
    const address = join("documents", "directory", "file");
    const createWeite = await writeFile(address + `/${putName}.txt`,"hola mundo"  );
    console.log("archivo creado con exito");
  } catch (err) {
    errors(err);
  }
}

//ver los errores al crear los archivos
