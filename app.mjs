import { createFiles } from "./imports/imports.mjs";

const createFile = createFiles;

createFile
  .then((data) => {
    console.log("carpeta creadad con exito en:",data);
  })
  .catch((err) => {
    console.error("tenemos un problema creando la carpeta:",err);
  });
