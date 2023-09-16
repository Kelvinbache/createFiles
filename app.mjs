import { createFiles } from "./imports/imports.mjs";
import { createWeite} from "./imports/imports.mjs";

const createFile = createFiles; //creadora de carpeta
const createWriterFile = createWeite; // creadora de archivos

createFile
  .then((data) => {
    console.log("archivos creados con exicto");
  })
  .catch((err) => {
    if (err !== "EEXIST") console.error(`esta direccion existe: ${err.path}`);
    else if (err) console.error(err);
  });

createWriterFile
  .then((data) => {
    console.log("archivo creado con exito",data);
  })
  .catch((err) => {
    if(err.code === 'ENOENT') console.error("ruta del archivo no encontrada",err.path);
  });
