import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { errorInWrite} from "../errors/errors.mjs";
import { answer } from "../answer/answer.mjs";

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente

export async function createWriteFile(putName) {
  try {
    const address = join("documents", "directory", "file");
    const createWeite = await writeFile( address + `/${putName}`, "hola mundo",'utf-8');
    answer(createWeite)
  } catch (err) {
    errorInWrite(err);
  }
}

//ver los errores al crear los archivos
