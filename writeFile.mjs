import { adressArchive } from "./path/address.mjs";
import { writeFile } from "node:fs/promises";

const addressArchive = adressArchive();

// 'ERR_INVALID_ARG_TYPE' --> Falta poner el contenido del documento
// 'ENOENT' --> direccion no existente 

async function createWriteFile() {
  try {
    const content = "hello word";
    const createWrite = await writeFile(addressArchive, content);
    return createWrite;
  } catch (err) {
    return err
  }
}

createWriteFile()
  .then((data) => {
    console.log(data, "archivo creardo con exicto");
  })
  .catch((err) => {
    if(err.code === 'ENOENT') console.error("direccion no existente")
  });
