import { createFiles } from "./imports/imports.mjs";
//import { createWrirteFile } from "./imports/imports.mjs";
import pc from "picocolors";

const createFile = createFiles; //creadora de carpeta
//const createWriterFile = createWrirteFile(); // creadora de archivos

createFile
  .then((data) => {
    console.log("archivos creados con exicto");
  })
  .catch((err) => {
    if (err !== "EEXIST") console.error(`esta direccion existe: ${err.path}`);
    else if (err) console.error(err);
  });

/**
 * tareas que hay que volver a plantiar
 * 1) HAcer
 */
