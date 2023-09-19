import { createFiles } from "./imports/imports.mjs";

const createFile = createFiles; //creadora de carpeta

createFile
  .then((data) => {
     console.log("archivos creados con exicto");
      
  })
  .catch((err) => {
    if (err !== "EEXIST");
    else if (err) console.error(err);
  });
