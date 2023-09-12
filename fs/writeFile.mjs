import { addressArchive } from "../imports/imports.mjs";
import { writeFile } from "node:fs/promises";


// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente 

export async function createWriteFile() {
  try {
    const content = "hello word";
    const createWrite = await writeFile(addressArchive, content);
    return createWrite;
  } catch (err) {
    return err
  }
}
