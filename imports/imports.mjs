//importando en un archivo que se encarga de ejecutar las funciones entre archivos

import { active } from "../fs/file.mjs";
import { initWrite } from "../fs/writeFile.mjs";
//import { createWriteFile } from "../fs/writeFile.mjs";

//comienza la aplicacions
export const createFiles = active();
export const createWeite = initWrite();
//export const createWrirteFile = createWriteFile;
