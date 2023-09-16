import { writeFile } from "node:fs/promises";

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente

function createWriteFile() {
  return new Promise((res, rej) => {
    try {
      const createWeite = writeFile("file/hola.txt", "hola mundo");
      res(createWeite);
    } catch (err) {
      rej(err);
    }
  });
}

export async function initWrite() {
  await createWriteFile();
}
