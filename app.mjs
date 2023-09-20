import { createFiles } from "./imports/imports.mjs";
// para poner un nombre a un archivo nuevo --> N=nombre node app.mjs
const putName = process.env.N;

if (putName === undefined) {

} else {
  createFiles(putName); //creadora de carpeta
}
